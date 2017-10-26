import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city: string;
  state: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage:Storage) {
   
      this.storage.get('location').then((val) => {
        if(val != null) {
          let location = JSON.parse(val);
          let city = location.city;
          let state = location.state;
        } else {
          this.city = 'Sofia';
          this.state = 'BG';
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  
  saveForm() {
    let location = {
      city: this.city,
      state: this.state
    }
      this.storage.set('location', JSON.stringify(location));
      this.navCtrl.push(HomePage);
  }
  
}

