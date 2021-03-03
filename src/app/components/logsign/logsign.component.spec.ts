import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsignComponent } from './logsign.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';


describe('LogsignComponent', () => {
  let component: LogsignComponent;
  let fixture: ComponentFixture<LogsignComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsignComponent ],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule, MatSnackBarModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Setting value to the input properties variables', () => {
    component.enabled = false;
    });

  it('canLogin returns false when the user is not authenticated', () => {
    localStorage.setItem('token', '12345'); 
    expect(component.loginUser()).toBeFalsy();
  });

    it('form invalid when empty', () => {
      expect(component.loginform.valid).toBeFalsy();
    });

    it('should contain button for signup',()=>{
      let element = fixture.debugElement.query(By.css('button'));
      expect(element).toBeTruthy();
    });

});
