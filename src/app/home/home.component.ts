import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx';
import { LoadRegions } from 'src/app/ngrx/actions/regions.action';
import { Contenants } from '../enums/contenants.enum';
import { LoadCountries } from '../ngrx/actions/countries.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadRegions());
    this.store.dispatch(new LoadCountries(Contenants.Europe));
    this.store.dispatch(new LoadCountries(Contenants.Asia));
  }

}
