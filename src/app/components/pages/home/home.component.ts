import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/ngrx';
import { Store } from '@ngrx/store';
import { Countries } from 'src/app/ngrx/models/countries.interface';
import { Contenants } from 'src/app/enums/contenants.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription[] = [];

  public regionNameList: Array<string> = [];
  public countryNameList: Array<string> = [];
  public countries: Countries[];
  public selectedCountry: string;
  public selectedRegion: Contenants;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscription.push(
      this.store.select(store => store.regions).subscribe(regions => {
        regions.forEach(region => {
          this.regionNameList.push(region.name);
        })
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

  public onSelectedRegion(selected): void {
    this.selectedRegion = selected as Contenants;
    this.getCountryList();
  }

  public onSelectedCountry(selected): void {
    this.selectedCountry = selected;
  }

  private getCountryList(): void {
    this.subscription.push(
      this.store.select(store => store.countries).subscribe(countries => {
        this.countries = countries;
        countries.forEach(country => {
          this.countryNameList.push(country.name)
        })
      })
    )
  }

}
