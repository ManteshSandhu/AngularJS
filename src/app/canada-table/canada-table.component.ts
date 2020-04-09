import { Component, OnInit } from '@angular/core';
import {CanadaDataService} from '../CanadaDataService';
import {Canada} from '../Canada';

@Component({
  selector: 'app-canada-table',
  templateUrl: './canada-table.component.html',
  styleUrls: ['./canada-table.component.css']
})
export class CanadaTableComponent implements OnInit {
  public canada: Canada[];
  private canadaDataService: CanadaDataService;
  constructor(canadaDataService: CanadaDataService) {
    this.canadaDataService = canadaDataService;
    this.canada = [];
  }
  ngOnInit(): void {
    this.canadaDataService.getCanadaData().subscribe(
      canada => this.canada = canada);
  }
}


