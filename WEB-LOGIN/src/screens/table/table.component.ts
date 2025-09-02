import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddService } from 'src/services/add.service';
import { AddAnimalsComponent } from '../add-animals/add-animals.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})

export class TableComponent implements OnInit {
  tableData: any[] = [];

  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'danger' = 'success';

  deleteId = new FormControl('', [Validators.required]);

  constructor(private addService: AddService,
    private router: Router,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void { }

  onSubmitConsultar(): void {
    this.showBootstrapToast(`Tabla de Mascotas`, 'success')
    this.addService.showAnimals().then((res) => {
      this.tableData = Array.isArray(res.response) ? res.response : [res.response];
    }).catch(err => {
      this.showBootstrapToast('Error al Consultar Tabla', 'danger')
    });
  }


  onSubmitDelete(id: number): void {
    console.log(id)
    this.showBootstrapToast('Eliminacion de Mascota', 'danger')
    this.addService.deleteAnimal(id).then((res) => {
      this.tableData = this.tableData.filter(row => row.id_animal !== id);
    }).catch(err => {
      this.showBootstrapToast('Error al Eliminar Mascota', 'danger')
    });
  }

  onSubmitModels(actionFrom: 'create' | 'update', row?: any) {
    const animlsFrom = this.ngbModal.open(AddAnimalsComponent, { size: 'lg', centered: true, backdrop: 'static', keyboard: false });
    if (actionFrom === 'create') {
      animlsFrom.componentInstance.actionType = 'create';

    } else {
      animlsFrom.componentInstance.actionType = 'update';
      console.log("Id A Actualizar: ", row?.id_animal);
      animlsFrom.componentInstance.animalId = row.id_animal;
      animlsFrom.componentInstance.AnimalsForm.patchValue(row);
    }

    animlsFrom.result.then((res) => {
      if (res?.success) {
        this.onSubmitConsultar();
        this.showBootstrapToast('Mascota Feliz', 'success')
      } else if (res?.updated) {
        this.onSubmitConsultar();
        this.showBootstrapToast('Mascota Actualizada', 'success')
      }
    });

  }

  showBootstrapToast(message: string, type: 'success' | 'danger') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
  }




}



