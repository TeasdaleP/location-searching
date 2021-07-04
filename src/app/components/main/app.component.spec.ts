import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { mockRegions } from 'src/app/helpers/regions.helper';
import { mockCountries } from 'src/app/helpers/countries.helper';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore;

  const initialState = {
    regions: [],
    countries: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        provideMockStore({ initialState })
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore);
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should dispatch to store as its empty', () => {
    spyOn(store, 'dispatch');
    component.ngOnInit();
    store.select(store => store).subscribe(() => {
      expect(store.dispatch).toHaveBeenCalled();
    });
  });

  it('Shouldnt dispatch to the store as its in localStorage', () => {
    store.setState({
      regions: mockRegions,
      countries: mockCountries
    })
    spyOn(store, 'dispatch');
    store.select(store => store).subscribe(() => {
      expect(store.dispatch).not.toHaveBeenCalled();
    })
  })
});
