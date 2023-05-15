import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChildComponent {
  @Input() public text: string = ''
  @Input() public jobs: string[] = []
  @Output() public dataFromChild: EventEmitter<any> = new EventEmitter()
  sendData(){
    this.dataFromChild.emit(`hello form childe component`)
  }
  constructor (){}
}