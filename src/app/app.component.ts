import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  features = [
    {
      type: 'row-two-values-feature',
      mainTitle: 'CLEAR WEB TYPES',
      featureData: [
        {
          row: [
            { title: '694', desc: 'ATTACK <br> INDICATION' },
            { title: '694', desc: 'jjjj <br> rrr' }
          ]
        },
        {
          row: [
            { title: '694', desc: 'ATTACK <br> INDICATION' },
            { title: '694', desc: 'jjjj <br> rrr' }
          ]
        },
        {
          row: [
            { title: '694', desc: 'ATTACK <br> INDICATION' },
            { title: '694', desc: 'jjjj <br> rrr' }
          ]
        },
      ]
    },
    {
      type: 'graph-feature',
      mainTitle: 'CLEAR WEB SEVERITIES',
      featureGraphData: [
        {
          chartId: 1,
          row: [
            {
              r: 70,
              stroke: 9,
              scale: 100,
              items: [
                { label: "A", value: .2 },
                { label: "B", value: .5 },
                { label: "C", value: .3 }
              ]
            }
          ]
        }
      ],
      featureData: [
        {
          row: [
            { title: 'HIGH', sum: '692' },
            { title: 'MEDIUM', sum: '692' },
            { title: 'LOW', sum: '219' }
          ]
        }
      ]
    },
    {
      type: 'clear-web-sources',
      mainTitle: 'CLEAR WEB SOURCES',
      featureData: [
        {
          row: [
            { title: 'APPLICATION STORES', pregress: 20, sum: 73 },
            { title: 'APPLICATION STORES', pregress: 89, sum: 146 },
            { title: 'APPLICATION STORES', pregress: 67, sum: 65 },
            { title: 'APPLICATION STORES', pregress: 34, sum: 5 },
          ]
        }
      ]
    },
    {
      type: 'row-two-values-feature',
      mainTitle: 'CLEAR WEB TYPES',
      featureData: [
        {
          row: [
            { title: '694', desc: 'ATTACK <br> INDICATION' },
            { title: '694', desc: 'jjjj <br> rrr' }
          ]
        },
        {
          row: [
            { title: '694', desc: 'ATTACK <br> INDICATION' },
            { title: '694', desc: 'jjjj <br> rrr' }
          ]
        },
        {
          row: [
            { title: '694', desc: 'ATTACK <br> INDICATION' },
            { title: '694', desc: 'jjjj <br> rrr' }
          ]
        },
      ]
    },
    {
      type: 'graph-feature',
      mainTitle: 'CLEAR WEB SEVERITIES',
      featureGraphData: [
        {
          chartId: 2,
          row: [
            {
              r: 70,
              stroke: 9,
              scale: 100,
              items: [
                { label: "A", value: .2 },
                { label: "B", value: .5 },
                { label: "C", value: .3 }
              ]
            }
          ]
        }
      ],
      featureData: [
        {
          row: [
            { title: 'HIGH', sum: '692' },
            { title: 'MEDIUM', sum: '692' },
            { title: 'LOW', sum: '219' }
          ]
        }
      ]
    },
    {
      type: 'clear-web-sources',
      mainTitle: 'CLEAR WEB SOURCES',
      featureData: [
        {
          row: [
            { title: 'APPLICATION STORES', pregress: 20, sum: 73 },
            { title: 'APPLICATION STORES', pregress: 89, sum: 146 },
            { title: 'APPLICATION STORES', pregress: 67, sum: 65 },
            { title: 'APPLICATION STORES', pregress: 34, sum: 5 },
          ]
        }
      ]
    },
  ]
}
