import { Component } from '@angular/core';

@Component({
  selector: 'angular-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public textForChilde: string = 'text from ts component'
  public jobs: string[] = ['samushao1', 'samushao2', 'samushao3', 'samushao4']
  public textFromChild: string = ''
  
  dataFromChild(e: any){
    this.textFromChild = e
    console.log(e)
  }
}
