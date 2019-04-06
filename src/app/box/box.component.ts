import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  constructor() {
 
   }
  
  @Input() box;

  ngOnInit() {
    console.log('box')
    console.log(this.box)
  }

}
