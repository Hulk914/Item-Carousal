import { MockServiceService } from './../mock-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal-container',
  templateUrl: './carousal-container.component.html',
  styleUrls: ['./carousal-container.component.css']
})
export class CarousalContainerComponent implements OnInit {

  carousalList = [];
  masterItemList = [];
  itemList = [];
  searchText = '';
  criteriaList = [];
  startIndex = 0;
  endIndex = 3;
  constructor(private mockService: MockServiceService) { }

  ngOnInit() {
    this.mockService.getAll().subscribe((res) => {
      this.masterItemList = res.data;
      this.itemList = [...this.masterItemList];
      this.carousalList = this.itemList.slice(0, 3);
    });
  }

  addSearchCriteria() {
    const catInd = this.criteriaList.findIndex((criteria) => {
      return criteria === this.searchText;
    });
    if (catInd === -1) {
      this.criteriaList.push(this.searchText);
    }
    this.itemList = this.masterItemList.filter((item) => {
      const ind = this.criteriaList.findIndex((criteria) => {
        return criteria === item.category;
      });
      return ind !== -1;
    });
    this.carousalList = this.itemList.slice(0, 3);
    console.log(this.itemList);
  }

  clearSearchCriteria() {
    this.criteriaList = [];
    this.itemList = [...this.masterItemList];
    this.carousalList = this.itemList.slice(0, 3);
  }

  handleRight() {
    if (this.endIndex + 1 <= this.itemList.length) {
      this.startIndex++;
      this.endIndex++;
      this.carousalList = this.itemList.slice(this.startIndex, this.endIndex);
    }
  }

  handleLeft() {
    if (this.startIndex - 1 >= 0) {
      this.startIndex--;
      this.endIndex--;
      this.carousalList = this.itemList.slice(this.startIndex, this.endIndex);
    }
  }
}
