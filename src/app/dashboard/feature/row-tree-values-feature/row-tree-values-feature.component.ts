import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-tree-values-feature',
  templateUrl: './row-tree-values-feature.component.html',
  styleUrls: ['./row-tree-values-feature.component.scss']
})
export class RowTreeValuesFeatureComponent implements OnInit {

  constructor() { }

  @Input() values;
  
  ngOnInit() {
  }

}
