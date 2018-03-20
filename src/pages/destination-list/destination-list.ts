import { Component } from '@angular/core';
import { Config, IonicPage, NavController } from 'ionic-angular';
import { DestinationService } from '../../providers/destination-service';
import { DestinationDetailPage } from '../destination-detail/destination-detail';

@IonicPage()
@Component({
  selector: 'page-destination-list',
  templateUrl: 'destination-list.html',
})
export class DestinationListPage {

    destinations: Array<any>;
    searchKey: string = "";

    constructor(
      public navCtrl: NavController,
      public service: DestinationService,
      public config: Config
    ) {
      this.findAll();
    }

    findAll() {
      this.service.findAll()
          .then(data => this.destinations = data)
          .catch(error => alert(error));
    }

    searchDestination(event) {
      this.service.findByName(this.searchKey)
          .then(data =>  {
            this.destinations = data;
          })
          .catch(error => alert(JSON.stringify(error)));
    }

    openDestinationDetail(destination:any) {
      this.navCtrl.push(DestinationDetailPage, destination);
    }
}
