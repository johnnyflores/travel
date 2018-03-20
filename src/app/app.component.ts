import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { DestinationListPage } from '../pages/destination-list/destination-list';
import { AgentListPage } from '../pages/agent-list/agent-list';
import { FavoriteListPage } from '../pages/favorite-list/favorite-list';
import { StatisticsPage } from '../pages/statistics/statistics';
import { HelpPage } from '../pages/help/help';

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = WelcomePage;

  appMenuItems: Array<MenuItem>

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    this.appMenuItems = [
      {
        title: 'Home',
        component: WelcomePage,
        icon: 'home'
      },
      {
        title: 'Destinations',
        component: DestinationListPage,
        icon: 'plane'
      },
      {
        title: 'Travel Agent',
        component: AgentListPage,
        icon: 'people'
      },
      {
        title: 'Favorites',
        component: FavoriteListPage,
        icon: 'star'
      },
      {
        title: 'Statistics',
        component: StatisticsPage,
        icon: 'stats'
      },
      {
        title: 'Help',
        component: HelpPage,
        icon: 'help-circle'
      }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
