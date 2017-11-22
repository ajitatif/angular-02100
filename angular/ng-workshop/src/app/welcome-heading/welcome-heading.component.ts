import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'welcome-heading',
  templateUrl: './welcome-heading.component.html',
  styleUrls: ['./welcome-heading.component.css']
})
export class WelcomeHeadingComponent implements OnInit {

  @Input()
  private title: string;

  @Input()
  private separated: boolean = false;

  @Output()
  private onClick: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  private clicked(): void {
  	this.onClick.emit(Math.floor(Math.random() * 10));
  }
}
