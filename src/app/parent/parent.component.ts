import { Component } from '@angular/core';

@Component({
  selector: 'angular-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public textForChilde: string = 'text from ts component'

}
