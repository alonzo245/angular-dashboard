import { Component, OnInit, Input } from '@angular/core';
import donutChart from 'donut-chart';

@Component({
  selector: 'app-graph-feature',
  templateUrl: './graph-feature.component.html',
  styleUrls: ['./graph-feature.component.scss']
})
export class GraphFeatureComponent implements OnInit {

  constructor() {
  }
  @Input() values:number;
  

  ngOnInit() {
    new donutChart(document.getElementById("chart-1"), {
      r: 70,
      stroke: 9,
      scale: 100,
      items: [
        { label: "A", value: .2 },
        { label: "B", value: .5 },
        { label: "C", value: .3 }
      ]
    });
  }
}
