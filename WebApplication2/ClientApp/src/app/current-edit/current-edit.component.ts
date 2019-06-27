import { Component, OnInit, Input } from '@angular/core';
import { MyClass } from '../lib/library';

@Component({
  selector: 'app-current-edit',
  templateUrl: './current-edit.component.html',
  styleUrls: ['./current-edit.component.css']
})
export class CurrentEditComponent implements OnInit {

  @Input() currentDatum: MyClass;

  constructor() { }

  ngOnInit() {
  }

}
