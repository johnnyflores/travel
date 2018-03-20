import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {


  constructor() {

  }

  slides = [
      {
          title: "Your travel app is just a few taps away! Select destination in the menu to start your search.",
          url: "assets/imgs/slide_01.jpg"
      },
      {
          title: "Select agents in the menu to connect with the agents list in the travel compagnies.",
          url: "assets/imgs/slide_02.jpg"
      },
      {
          title: "Enjoy this app to travel around the world during yours holydays.",
          url: "assets/imgs/slide_03.jpg"
      }
  ]

}
