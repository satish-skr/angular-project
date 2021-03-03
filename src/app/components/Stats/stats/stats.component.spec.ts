import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsComponent } from './stats.component';
import { HttpClientModule } from '@angular/common/http';
import { CricapiService } from 'src/app/services/cricapi.service';
import { RouterService } from 'src/app/services/router.service';
import { RouterTestingModule } from '@angular/router/testing';
import { PaginatePipe, NgxPaginationModule } from 'ngx-pagination';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsComponent ],
      imports: [HttpClientModule,
      RouterTestingModule, NgxPaginationModule], 
      providers: [CricapiService, RouterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
