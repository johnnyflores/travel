import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DestinationService } from '../../providers/destination-service';
import { DestinationDetailPage } from '../destination-detail/destination-detail';
@IonicPage()
@Component({
  selector: 'page-favorite-list',
  templateUrl: 'favorite-list.html',
})
export class FavoriteListPage {

  favorites: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: DestinationService,
  ) {
    this.getFavorites();
  }

  getFavorites() {
    this.service.getFavorites()
        .then(data => this.favorites = data);
  }

  goToDestinationDetail(favorite) {
    this.navCtrl.push(DestinationDetailPage, favorite.destination);
  }

  removeItem(favorite) {
    this.service.unfavorite(favorite)
        .then(() => {
          this.getFavorites();
        })
        .catch(error => alert(JSON.stringify(error)));
  }




}
