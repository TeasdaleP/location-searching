import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { DropdownComponent } from "../../shared/dropdown/dropdown.component";
import { mockRegions } from "src/app/helpers/regions.helper";
import { mockCountries } from "src/app/helpers/countries.helper";

import { HomeComponent } from "./home.component";
import { Contenants } from "src/app/enums/contenants.enum";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;

  const initialState = {
    regions: mockRegions,
    countries: mockCountries
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, DropdownComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore);
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Logic Tests', () => {
    it('Should be able to populate the region name list', () => {
      component.ngOnInit();
      store.select(store => store).subscribe(() => {
        expect(component.regionList[0]).toBe(Contenants.Asia);
      });
    });
  
    it('Should be able to assign country to selectedCountry', () => {
      component.onSelectedCountry('Paris');
      expect(component.selectedCountry).toEqual('Paris');
    });
  
    it('Should be able to assign country to selectedCountry', () => {
      component.onSelectedRegion(Contenants.Europe as string);
      expect(component.selectedRegion).toEqual(Contenants.Europe);
    });
  });

  describe('Interface Tests', () => {

    it('Shouldnt see the country header before selecting region', () => {
      expect(component.selectedRegion).toBeUndefined();
      expect(component.countryList.length).toEqual(0);

      component.ngOnInit();
      const regionHeader = fixture.debugElement.nativeElement.querySelector('#regionHeading').textContent;
      expect(regionHeader).toContain('Please select a region');

      const countriesHeader = fixture.debugElement.nativeElement.querySelector('#countryHeading');
      expect(countriesHeader).toBeNull();
    });

    it('Shouldnt see the country content before selecting region', () => {
      expect(component.selectedRegion).toBeUndefined();
      expect(component.countryList.length).toEqual(0);

      component.ngOnInit();
      const regionContent = fixture.debugElement.nativeElement.querySelector('#regionDropdown');
      const regionDropdown = regionContent.querySelector('app-dropdown');
      expect(regionDropdown).toBeDefined();

      const countriesContent = fixture.debugElement.nativeElement.querySelector('#countryDropdown');
      expect(countriesContent).toBeNull();
    });

    it('Should active countries dropdown when selecting region', () => {
      expect(component.selectedRegion).toBeUndefined();
      expect(component.countryList.length).toEqual(0);

      component.ngOnInit();
      const noRegionContent = fixture.debugElement.nativeElement.querySelector('#countryDropdown');
      expect(noRegionContent).toBeNull();

      component.selectedRegion = Contenants.Europe;
      component.countryList = ['London', 'Paris', 'Madrid'];
      fixture.detectChanges();
      
      const regionContent = fixture.debugElement.nativeElement.querySelector('#countryDropdown');
      expect(regionContent).toBeDefined();
    })
  })
});