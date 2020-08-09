import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.scss"]
})
export class StarComponent implements OnInit {
  numberOfStars = [1, 2, 3, 4, 5];

  starArray = [
    {
      id: 1,
      color: "black"
    },
    {
      id: 2,
      color: "black"
    },
    {
      id: 3,
      color: "black"
    },
    {
      id: 4,
      color: "black"
    },
    {
      id: 5,
      color: "black"
    }
  ];

  constructor() {}

  ngOnInit() {}
  storeInfo(i) {
    for (let j = 0; j <= i; j++) {
      this.starArray[j].color = "yellow";
    }
  }

  resetColors() {
    this.starArray.forEach(starArrayElement => {
      starArrayElement.color = "black";
    });
  }
}
