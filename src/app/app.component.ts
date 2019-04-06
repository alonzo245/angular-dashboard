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
        {row: [
            {title: '694',desc: 'ATTACK <br> INDICATION'},
            {title: '694',desc: 'jjjj <br> rrr'}
          ]},
        {row: [
            {title: '694',desc: 'ATTACK <br> INDICATION'},
            {title: '694',desc: 'jjjj <br> rrr'}
          ]},
        {row: [
            {title: '694',desc: 'ATTACK <br> INDICATION'},
            {title: '694',desc: 'jjjj <br> rrr'}
          ]},
      ]
    },
    {
      type: 'row-two-values-feature',
      mainTitle: 'CLEAR WEB TYPES',
      featureData: [
        {row: [
            {title: '694',desc: 'ATTACK <br> INDICATION'},
            {title: '694',desc: 'jjjj <br> rrr'}
          ]},
        {row: [
            {title: '694',desc: 'ATTACK <br> INDICATION'},
            {title: '694',desc: 'jjjj <br> rrr'}
          ]},
        {row: [
            {title: '694',desc: 'ATTACK <br> INDICATION'},
            {title: '694',desc: 'jjjj <br> rrr'}
          ]},
      ]
    }
  ]
}
