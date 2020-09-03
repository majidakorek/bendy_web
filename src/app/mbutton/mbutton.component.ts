import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'mbutton',
  templateUrl: './mbutton.component.html',
  styleUrls: ['./mbutton.component.css']
})
export class MbuttonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
@Input() btnname='';
}
