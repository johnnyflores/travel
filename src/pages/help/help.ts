import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { TermsPage } from '../terms/terms';
import { FaqPage } from '../faq/faq';

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

  openAboutPage() {
    this.navCtrl.push(AboutPage);
  }
  openTermsPage() {
    this.navCtrl.push(TermsPage);
  }
  openFaqPage() {
    this.navCtrl.push(FaqPage);
  }

}
