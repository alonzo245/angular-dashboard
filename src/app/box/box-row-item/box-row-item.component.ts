import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-row-item',
  templateUrl: './box-row-item.component.html',
  styleUrls: ['./box-row-item.component.scss']
})
export class BoxRowItemComponent implements OnInit {

  constructor() { }

  @Input() data: any;
  ngOnInit() {
  }

}
