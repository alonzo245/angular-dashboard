import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  constructor() { }

  features = [
    {
      type: 'clear-web-types',
      mainTitle: 'CLEAR WEB TYPES',
      featureData: [
        {
          row: [
            {
              title: '694',
              desc: 'ATTACK <br> INDICATION'
            },
            {
              title: '694',
              desc: 'ATTACK <br> INDICATION'
            }
          ]
        },
        {
          row: [
            {
              title: '694',
              desc: 'ATTACK <br> INDICATION'
            },
            {
              title: '694',
              desc: 'ATTACK <br> INDICATION'
            }
          ]
        },
        {
          row: [
            {
              title: '694',
              desc: 'ATTACK <br> INDICATION'
            },
            {
              title: '694',
              desc: 'ATTACK <br> INDICATION'
            }
          ]
        },
      ]
    }
  ]
}
