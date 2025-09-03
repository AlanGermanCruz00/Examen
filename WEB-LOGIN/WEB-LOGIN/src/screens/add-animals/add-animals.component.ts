import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService } from 'src/services/add.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',

})
export class AddAnimalsComponent {
  actionType: any;
  animalId!: number;


  constructor(private addService: AddService,
    private router: Router,
    public activeModal: NgbActiveModal,

  ) { }


  ngOnInit(): void {
    console.log()
  }

  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'danger' = 'success';

  nameFormControl = new FormControl('', [Validators.required])
  raceFormControl = new FormControl('', [Validators.required])
  sizeFormControl = new FormControl('', [Validators.required])
  colorFormControl = new FormControl('', [Validators.required])
  yearNacidoFormControl = new FormControl('', [Validators.required])
  yearFormControl = new FormControl('', [Validators.required])


  AnimalsForm = new FormGroup({
    name: this.nameFormControl,
    race: this.raceFormControl,
    size: this.sizeFormControl,
    color: this.colorFormControl,
    yearNacido: this.yearNacidoFormControl,
    year: this.yearFormControl

  })
  ngAfterViewInit() {
    const firstInput = document.querySelector('input');
    firstInput?.focus();
  }

  onSubmitAgregar(): void {

    if (this.AnimalsForm.valid) {
      this.addService.AddAnimals(this.nameFormControl.value!, this.raceFormControl.value!, this.sizeFormControl.value!,
        this.colorFormControl.value!, this.yearNacidoFormControl.value!, this.yearFormControl.value!).then((res: any) => {
          this.activeModal.close({ success: true, id: res.response }); //
          this.activeModal.close({ id: res.response });
        }).catch(() => { });
    } else {
      this.showBootstrapToast('Formulario Incompleto', 'danger')
    }

  }
  // this.router.navigate(['/animals/table']);
  onSubmitVolver() { this.activeModal.close(); }

  async onSubmitActualizar(): Promise<void> {
    if (this.AnimalsForm.valid) {
      const update = this.AnimalsForm.value;
      this.addService.updateAnimals(this.animalId, update).then(res => {
      }).catch(err => {
        this.activeModal.close({ updated: false, error: true });
      });
    } else {
      this.showBootstrapToast('Formulario Incompleto', 'danger')
    }
    const payload = { updated: true, id: this.animalId };
    this.activeModal.close(payload);

  }

  showBootstrapToast(message: string, type: 'success' | 'danger') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
  }

  allLetters(event: KeyboardEvent) {
    const pattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]$/;
    const inputChar = event.key;
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
