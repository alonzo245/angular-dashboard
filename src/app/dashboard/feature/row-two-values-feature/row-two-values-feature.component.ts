import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-two-values-feature',
  templateUrl: './row-two-values-feature.component.html',
  styleUrls: ['./row-two-values-feature.component.scss']
})
export class RowTwoValuesFeatureComponent implements OnInit {

  constructor() { }

  @Input() values;
  ngOnInit() {
  }

}
