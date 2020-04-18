declare var require: any;

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import MapModule from 'highcharts/modules/map';

const sriLanka = require('@highcharts/map-collection/countries/lk/lk-all.geo.json');

MapModule(Highcharts);

@Component({
  selector: 'app-slmap',
  templateUrl: './slmap.component.html',
  styleUrls: ['./slmap.component.scss']
})
export class SlmapComponent implements OnInit {

  data = [
    ['lk-bc', 0],
    ['lk-mb', 1],
    ['lk-ja', 2],
    ['lk-kl', 3],
    ['lk-ky', 4],
    ['lk-mt', 5],
    ['lk-nw', 6],
    ['lk-ap', 7],
    ['lk-pr', 8],
    ['lk-tc', 9],
    ['lk-ad', 10],
    ['lk-va', 11],
    ['lk-mp', 12],
    ['lk-kg', 13],
    ['lk-px', 14],
    ['lk-rn', 15],
    ['lk-gl', 16],
    ['lk-hb', 17],
    ['lk-mh', 18],
    ['lk-bd', 19],
    ['lk-mj', 20],
    ['lk-ke', 21],
    ['lk-co', 22],
    ['lk-gq', 23],
    ['lk-kt', 24]
];

  title = "app";
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "mapChart";
  chartCallback;
  chartOptions = {
    chart: {
      map: sriLanka,
      backgroundColor:'#d7e7ff',
    },
    title: {
      text: 'Call Summary'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    colorAxis: {
      min: 0,
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
          [0, '#ffddd6'], // start
          [0.5, '#ff8369'], // middle
          [1, '#fe2c00'] // end
      ]
    },
    series: [{
      name: 'Total Calls',
      states: {
          hover: {
              color: '#BADA55'
          }
      },
      dataLabels: {
          enabled: true,
          format: '{point.name}'
      },
      data: this.data
   }]}

  constructor() { }

  ngOnInit(): void {
  }

}
