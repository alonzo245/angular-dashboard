import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  boxes = [
    {
      type: 'clearWebTypes',
      title: 'CLEAR WEB TYPES',
      data: [
        // {attack: 694, leakage: 1354},
        // {phishing: 516, security: 39},
        // {exploitable: 44, vip: 1354}
        {v1: 694, v2: 1354},
        {v1: 516, v2: 39},
        {v1: 44, v2: 1354}
      ]
    }
  ]

  ngOnInit() {
  }

}
