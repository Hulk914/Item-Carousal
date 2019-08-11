import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousal-card',
  templateUrl: './carousal-card.component.html',
  styleUrls: ['./carousal-card.component.css']
})
export class CarousalCardComponent implements OnInit {
  @Input() isMiddle = false;
  @Input() itemDetails;
  constructor() { }

  ngOnInit() {
  }

}
