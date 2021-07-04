import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
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
  
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(store => store.countries).subscribe(countries => {
      if(!countries.find(country => country.region === Contenants.Asia)){
        this.dispatch();
      }
    })
  }

  private dispatch() {
    this.store.dispatch(new LoadRegions());
    this.store.dispatch(new LoadCountries(Contenants.Europe));
    this.store.dispatch(new LoadCountries(Contenants.Asia));
  }
}
