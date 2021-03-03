import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomComponent } from './recom.component';
import { HttpClientModule } from '@angular/common/http';

describe('RecomComponent', () => {
  let component: RecomComponent;
  let fixture: ComponentFixture<RecomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomComponent ],
      imports: [HttpClientModule], 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
