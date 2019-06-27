import { Component, OnInit , Input} from '@angular/core';
import { MyClass } from '../lib/library';

@Component({
  selector: 'app-current-datum',
  templateUrl: './current-datum.component.html',
  styleUrls: ['./current-datum.component.css']
})
export class CurrentDatumComponent implements OnInit {

  @Input() currentDatum: MyClass;

  constructor() { }

  ngOnInit() {
  }

}
