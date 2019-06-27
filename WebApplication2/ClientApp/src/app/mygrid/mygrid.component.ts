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
  currentDatum: MyClass;
  dataToDelete: number[];

  constructor(service: MyclassdataService) {
    this.service = service;
    this.dataToDelete = new Array<number>();
    this.getData(); 
  }

  ngOnInit() {
    console.log("init");
  }
  public edit(datum: MyClass) {
    this.currentDatum = datum;
  }

  public getData() {
    this.service.getData().subscribe(
      data => {
        this.data = data;
      },
      error => console.log(error)
    );
  }


  public delete(d: MyClass) {
    if (this.currentDatum === d) {
      this.currentDatum = null;
    };
    if (d.id > 0 ) {
      this.dataToDelete.push(d.id);
    }
    let i = this.data.indexOf(d);
    let begin = this.data.slice(0, i);
    let end = this.data.slice(i + 1, this.data.length);
    this.data = begin.concat(end);
  }

  public add() {
    let d = new MyClass();
    this.data.push(d);
    this.currentDatum = d;
  }

  public save() {
    this.service.save(this.data, this.dataToDelete).subscribe(
      updated => {
        this.data = updated;
        this.dataToDelete = new Array<number>();
        this.currentDatum = null;
      },
      err => console.log(err));
  }
}
