import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../../core/services/data.service';
import {DataInterface} from "../../../../core/interfaces/data.interface";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public printData: DataInterface = null;

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    console.log(this.dataService.getData(), "DetailComponent");
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.printData = this.dataService.getData().find(item => item.id === id);
  }
}
