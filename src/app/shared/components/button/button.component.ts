import { Component, OnInit, Input, Output, EventEmitter,OnChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

// export interface Props{
//   text:string,
//   color:string
// }
export class ButtonComponent implements OnInit {

  @Input() text:any;
  @Input() isColor:any;
  @Input() isStyle:any;

  @Input() onClickFunction:any;

  @Output() isClick = new EventEmitter<any>();

  sss= '';

  constructor() { }

  ngOnInit(): void {
    // this.isClick.emit(this.onClick)
    console.log('InF')
  }
  ngOnChanges(){

  }

  onClick(){
    console.log('Func Component')
    console.log('Func inprops',this.onClickFunction) 
    this.onClickFunction()
  }
}
