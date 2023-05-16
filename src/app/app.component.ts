import { Component, ViewEncapsulation } from '@angular/core';

interface Data{
  id: number
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public data: Data[] =[
    {
      id: 0,
      name: 'tariel'
    },
    {
      id: 1,
      name: 'lasha'
    },    
    {
      id: 2,
      name: 'dali'
    },
  ]
  title = 'testAngular';
}
