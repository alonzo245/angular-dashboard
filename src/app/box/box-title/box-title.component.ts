import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-title',
  templateUrl: './box-title.component.html',
  styleUrls: ['./box-title.component.scss']
})
export class BoxTitleComponent implements OnInit {

  constructor() { }

  @Input() title: any;
  title2: string = 'ddd'
  ngOnInit() {
    
  }

}
