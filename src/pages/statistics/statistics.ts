import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage implements OnInit {

  canvas: any;
  ctx: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.canvas = document.getElementById('chart');
    this.ctx = this.canvas.getContext('2d');
    let chart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: ["Europe", "North Amerique", "South Amerique", "Afrique", "Asia"],
          datasets: [{
              label: 'Number of travels around the world',
              data: [18, 35, 50, 10, 15],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(92, 218, 165, 0.9)',
                  'rgba(43, 71, 175, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        legend: {
            display: true,
            position: 'left',

        },
        responsive: true,
        display:true,
        yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
      }
    });
  }
}
