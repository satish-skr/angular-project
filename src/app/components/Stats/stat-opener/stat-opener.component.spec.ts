import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatOpenerComponent } from './stat-opener.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterService } from 'src/app/services/router.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CricapiService } from 'src/app/services/cricapi.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('StatOpenerComponent', () => {
  let component: StatOpenerComponent;
  let fixture: ComponentFixture<StatOpenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatOpenerComponent ],
      imports: [
        MatDialogModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      providers: [
        RouterService,
        CricapiService
      ]
    })
    .compileComponents();
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
