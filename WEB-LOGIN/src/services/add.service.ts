import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AddService {

  constructor(private https: HttpClient,) { }

  private basePath = environment.host + '/api/animals';

  AddAnimals(name: string, race: string, size: string, color: string, yearNacido: string, year: String): Promise<any> {
    const body = { name, race, size, color, yearNacido, year };
    return firstValueFrom
      (this.https.post(`${this.basePath}/create`, body));
  }

  showAnimals(): Promise<any> {
    return firstValueFrom(
      this.https.get(`${this.basePath}/getAll`)).then((response: any) => {
        console.log("Tabla De Mascotas: ");
        return response;
      });
  }

  deleteAnimal(id: number): Promise<any> {
    console.log("Mascota Eliminada: ");
    return firstValueFrom(this.https.delete(`${this.basePath}/delete/${id}`));
  }

  updateAnimals(id: number, animalData: any): Promise<any> {
    console.log("Datos de Mascota Actualizados: ");
    return firstValueFrom(this.https.put(`${this.basePath}/update/${id}`, animalData));

  }

}
