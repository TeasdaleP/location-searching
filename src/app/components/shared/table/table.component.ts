import { Component, Input, OnInit } from '@angular/core';
import { Countries } from 'src/app/ngrx/models/countries.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() public countries: Countries[];
  @Input() public selected: string;

  constructor() { }

  ngOnInit(): void {
  }

}
