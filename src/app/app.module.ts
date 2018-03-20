import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { AboutPage } from '../pages/about/about';
import { DestinationListPage } from '../pages/destination-list/destination-list';
import { DestinationDetailPage } from '../pages/destination-detail/destination-detail';
import { AgentListPage } from '../pages/agent-list/agent-list';
import { AgentDetailPage } from '../pages/agent-detail/agent-detail';
import { FavoriteListPage } from '../pages/favorite-list/favorite-list';
import { StatisticsPage } from '../pages/statistics/statistics';
import { HelpPage } from '../pages/help/help';
import { TermsPage } from '../pages/terms/terms';
import { FaqPage } from '../pages/faq/faq';

import { DestinationService } from '../providers/destination-service';
import { AgentService } from '../providers/agent-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    WelcomePage,
    DestinationListPage,
    DestinationDetailPage,
    AgentListPage,
    AgentDetailPage,
    FavoriteListPage,
    StatisticsPage,
    HelpPage,
    TermsPage,
    FaqPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    WelcomePage,
    DestinationListPage,
    DestinationDetailPage,
    AgentListPage,
    AgentDetailPage,
    FavoriteListPage,
    StatisticsPage,
    HelpPage,
    TermsPage,
    FaqPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DestinationService,
    AgentService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
