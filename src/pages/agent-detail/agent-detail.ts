import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgentService } from '../../providers/agent-service';

@IonicPage()
@Component({
  selector: 'page-agent-detail',
  templateUrl: 'agent-detail.html',
})
export class AgentDetailPage {

  agent: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: AgentService,
  ) {
    this.agent =  this.navParams.data;
    service.findById(this.agent.id).then(
      agent => this.agent = agent
    );
  }


}
