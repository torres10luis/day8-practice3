import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  number = 0;
  timer: any;
  disableBtn: boolean = false;

  @Output()  numberCreated = new EventEmitter<number>();

  onStart() {
    this.disableBtn = true;
    this.timer = setInterval(() => {this.number += 1;
    this.numberCreated.emit(this.number); }, 1000);
  }
  endGame() {
    this.disableBtn = !this.disableBtn;
    clearInterval(this.timer);
  }
  constructor() { }

  ngOnInit() {
  }

}
