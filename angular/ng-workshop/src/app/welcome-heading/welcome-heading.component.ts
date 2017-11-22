import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'welcome-heading',
  templateUrl: './welcome-heading.component.html',
  styleUrls: ['./welcome-heading.component.css']
})
export class WelcomeHeadingComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public separated: boolean = false;

  @Output()
  public onClick: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  public clicked(): void {
  	this.onClick.emit(Math.floor(Math.random() * 10));
  }
}
