import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the CarrerasDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarrerasDataProvider {

  constructor(public http: HttpClient) {
  }

  getCarreras(){
    return new Promise ( resolve =>{
      this.http.get('../../assets/data/Carreras.json').subscribe(data => {
        resolve(data)
      })
    })
  }
}
