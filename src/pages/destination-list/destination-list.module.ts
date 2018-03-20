import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DestinationListPage } from './destination-list';

@NgModule({
  declarations: [
    DestinationListPage,
  ],
  imports: [
    IonicPageModule.forChild(DestinationListPage),
  ],
})
export class DestinationListPageModule {}
