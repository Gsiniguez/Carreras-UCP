import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarrerasDataProvider } from '../../providers/carreras-data/carreras-data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  carreras: any;

  constructor(public navCtrl: NavController, public carrerasjason: CarrerasDataProvider, public http: HttpClient) {
    this.getData()
  }

  getData() {
    this.carrerasjason.getCarreras()
      .then(data => {
        this.carreras = data
        console.log(this.carreras)
      })
  }

}
