import { Component, OnInit } from '@angular/core';
import { MyclassdataService } from '../lib/myclassdata.service';
import { MyClass} from '../lib/library'
@Component({
  selector: 'app-mygrid',
  templateUrl: './mygrid.component.html',
  styleUrls: ['./mygrid.component.css']
})
export class MygridComponent implements OnInit {

  service: MyclassdataService;
  data: MyClass[]; 

  constructor(service: MyclassdataService) {
    this.service = service;
    this.getData(); 
  }

  ngOnInit() {
    console.log("init");
  }

  public getData() {
    this.service.getData().subscribe(
      data => {
        this.data = data;
      },
      error => console.log(error)
    );
  }
}
