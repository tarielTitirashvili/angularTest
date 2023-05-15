import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChildComponent {
  @Input () public text: string = ''
  @Input () public jobs: string[] = []
  constructor (){}
}