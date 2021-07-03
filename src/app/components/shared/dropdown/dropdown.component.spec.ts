import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DropdownComponent } from './dropdown.component';

describe('Dropdown Component', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be able to select an item in the dropdown', () => {
    component.options = ['one', 'two'];
    const selectElement = fixture.debugElement.query(By.css('select'))
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(selectElement.nativeElement.value).toEqual('One');
    });
  })
});
