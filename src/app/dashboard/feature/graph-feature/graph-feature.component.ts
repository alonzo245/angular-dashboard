import { Component, OnInit, Input } from '@angular/core';
// import donutChart from 'donut-chart';

@Component({
  selector: 'app-graph-feature',
  templateUrl: './graph-feature.component.html',
  styleUrls: ['./graph-feature.component.scss']
})
export class GraphFeatureComponent implements OnInit {

  constructor() {}

  @Input() values:number;
  // @ViewChild('chart-1') myDiv: ElementRef;

  ngOnInit() {
    // new donutChart(myDiv, this.values[0].row[0]);
  }
}
