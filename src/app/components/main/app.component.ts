import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contenants } from 'src/app/enums/contenants.enum';
import { AppState } from 'src/app/ngrx';
import { LoadCountries } from 'src/app/ngrx/actions/countries.action';
import { LoadRegions } from 'src/app/ngrx/actions/regions.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'location-searching';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadRegions());
  }
}
