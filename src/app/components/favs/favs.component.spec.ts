import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavsComponent } from './favs.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';

describe('FavsComponent', () => {
  let component: FavsComponent;
  let fixture: ComponentFixture<FavsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavsComponent ],
      imports: [HttpClientModule,MatSnackBarModule], 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
