import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AgentDetailPage } from '../agent-detail/agent-detail';
import { DestinationService } from '../../providers/destination-service';


@IonicPage()
@Component({
  selector: 'page-destination-detail',
  templateUrl: 'destination-detail.html',
})
export class DestinationDetailPage {

  destination: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: DestinationService,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController

  ) {
    this.destination = this.navParams.data;
    service.findById(this.destination.id).then(
      destination => this.destination = destination
    );
  }

  openAgentDetail(agent) {
    this.navCtrl.push(AgentDetailPage, agent);
  }

  favorite(destination) {
    this.service.favorite(destination)
        .then(destination => {
          let toast = this.toastCtrl.create({
            message: 'Destination added to you favorites',
            cssClass: 'mytoast',
            duration: 1000
          });
          toast.present(toast);
        });
  }



}
