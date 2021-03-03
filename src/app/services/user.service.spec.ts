import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let  httpMock : HttpTestingController;

  let dummyContact = {
    username: "noContact",
    useremail: "noContact@gmail.com",
    userpassword: "11111345"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call addUser with correct API',()=>{

    const newContact = {
      username: "newContact",
      useremail: "newContact@gmail.com",
      userpassword: "34511111"
    }
    service.addUser(newContact).subscribe(contact=>{
      expect(contact).toEqual(newContact);
   
    const prerequest  = httpMock.expectOne({
      url : 'http://localhost:8080/register',
      method : 'POST'
    })
    prerequest.flush(newContact);
    expect(prerequest.request.body).toEqual(newContact);
    service.getAllContacts().subscribe(contacts=>{
      expect(contacts).toEqual([dummyContact,newContact]);
     })
    })
  })

});
