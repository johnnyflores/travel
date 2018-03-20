import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgentDetailPage } from '../agent-detail/agent-detail';
import { AgentService } from '../../providers/agent-service';


@IonicPage()
@Component({
  selector: 'page-agent-list',
  templateUrl: 'agent-list.html',
})
export class AgentListPage {
  agents: Array<any>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: AgentService,
  ) {
    service.findAll().then(data => this.agents = data);
  }

  openAgentDetail(agent) {
    this.navCtrl.push(AgentDetailPage, agent);
  }
}
