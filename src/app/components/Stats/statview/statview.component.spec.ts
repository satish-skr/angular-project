import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatviewComponent } from './statview.component';
import { MatDialogRef, MatDialogModule, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatOpenerComponent } from '../stat-opener/stat-opener.component';

describe('StatviewComponent', () => {
  let component: StatviewComponent;
  let fixture: ComponentFixture<StatviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatviewComponent ],
      imports: [MatDialogModule, BrowserAnimationsModule,MAT_DIALOG_DATA],
      providers: [ {MatDialogRef:( StatOpenerComponent)} ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
