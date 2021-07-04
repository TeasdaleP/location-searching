import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/ngrx';
import { Store } from '@ngrx/store';
import { Countries } from 'src/app/ngrx/models/countries.interface';
import { Contenants } from 'src/app/enums/contenants.enum';
import { Regions } from 'src/app/ngrx/models/regions.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription[] = [];
  private countries$: Observable<Countries[]>;
  private regions$: Observable<Regions[]>;

  public regionList: string[] = [];
  public countryList: string[] = [];
  public countries: Countries[];
  public selectedCountry: string;
  public selectedRegion: Contenants;

  constructor(private store: Store<AppState>) {
    this.regions$ = this.store.select(store => store.regions);
    this.countries$ = this.store.select(store => store.countries)
  }

  ngOnInit(): void {
    this.subscription.push(
      combineLatest([this.regions$, this.countries$]).subscribe(([regions, countries]) => {
        this.regionList = regions.map(region => region.name);
        this.countries = countries;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

  public onSelectedRegion(selected): void {
    this.selectedRegion = selected as Contenants;
    const regionalCountries = this.getRegionsalSpecificCountries(selected);
    this.countryList = regionalCountries.map(country => country.name);
  }

  public onSelectedCountry(selected): void {
    this.selectedCountry = selected;
  }

  private getRegionsalSpecificCountries(region: Contenants): Countries[] {
    return this.countries.filter(country => country.region === region);
  }
}
