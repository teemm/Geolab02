import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../../core/services/data.service';
import {DataInterface} from "../../../../core/interfaces/data.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data: DataInterface[] = null;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.data = this.dataService.getData();
  }

}
