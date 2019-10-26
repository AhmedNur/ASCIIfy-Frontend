import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ascii-display',
  templateUrl: './ascii-display.component.html',
  styleUrls: ['./ascii-display.component.css']
})
export class ASCIIDisplayComponent implements OnInit {

  @Input() ascii: string;

  constructor() { }

  ngOnInit() {
  }

}
