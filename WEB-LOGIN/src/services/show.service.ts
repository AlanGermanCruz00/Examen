// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
// import { environment } from 'src/environments/environment';

// @Injectable({
//     providedIn: 'root'
// })

// export class ShowService {
//     constructor(private https: HttpClient,) { }

//     private basePath = environment.host + '/api/animals';

//     showAnimals(): Promise<any> {
//         return firstValueFrom(
//             this.https.get(`${this.basePath}/getAll`)).then((response: any) => {
//             console.log("✅ TABLA Agregar", response);

//             return response;
//         });
//     }

//     deleteAnimal(id: number): Promise<any> {
//         return firstValueFrom(this.https.delete(`${this.basePath}/delete/${id}`));
//     }

// }