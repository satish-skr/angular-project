import { AppPage, LoginPage, DashboardPage } from './app.po';
import { browser, logging, element, by, promise } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('CPlayer app is running!');
  // });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

describe('Cplayer',()=>{
  it('should load login page on app launch',()=>{
    browser.get('/');
    expect(browser.getCurrentUrl()).toContain('login');
    browser.sleep(5000);
  })
})

  describe('login page', () => {
    let page: LoginPage;
  
    beforeEach(() => {
      page = new LoginPage();
    });

  it('default values of username and password should be empty', () => {
    const emptyLoginValues = ['', ''];
    page.navigateToLogin();
    expect(page.getLoginInputBoxesDefaultValues()).toEqual(emptyLoginValues, 'Default values for username and password should be empty');
  });

  it('should get username input box', () => {
    page.navigateToLogin();
    expect(page.isUserNameInputBoxPresent())
    .toBeTruthy(`<input type="email" formControlName="userEmail" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.userEmail.errors }"/>
      should exist in logsign.component.html`);
  });

  it('should get passsword input box', () => {
    page.navigateToLogin();
    expect(page.isPasswordInputBoxPresent())
    .toBeTruthy(`<input type="password" formControlName="userPassword" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.userPassword.errors }"/>
      should exist in logsign.component.html`);
  });

  it('should get sign in button', () => {
    page.navigateToLogin();
    expect(page.isSubmitButtonPresent()).toBeTruthy(`<button type="button" class="submit" type="submit">Sign In</button> should
      exist in logsign.component.html`);
  });

  // it('All the required Validations should be applied for Email FormControl', () => {
  //   let element = page.getEmail();
  //   page.navigateTo();
  //   element.click();
  //   page.getForm().click();
  //   expect(element.getAttribute('is-invalid')).toBe('true','Control should be invalid if value is empty');
  //   element.sendKeys('deepan@gmail.com');
  //   expect(element.getAttribute('aria-invalid')).toBe('false','Control should be valid for valid input value');
  //   element.clear();
  //   element.sendKeys('deepan@stackroute.in');
  //   expect(element.getAttribute('aria-invalid')).toBe('true','Control should be invalid for invalid input value');
    
  // });

  // it('All the required Validations should be applied for Password FormControl', () => {
  //   let element = page.getPassword();
  //   page.navigateTo();
  //   element.click();
  //   page.getForm().click();
  //   expect(element.getAttribute('is-invalid')).toBe('true','Control should be invalid if value is empty');
  //   element.sendKeys('Deepan#321');
  //   expect(element.getAttribute('is-invalid')).toBe('false','Control should be valid for valid input value');
  //   element.clear();
  //   element.sendKeys('deepan321');
  //   expect(element.getAttribute('aria-invalid')).toBe('true','Control should be invalid for invalid input value');
    
  // });



});


describe('home page', () => {
  let page: DashboardPage;

  beforeEach(() => {
    page = new DashboardPage();
  });

  it('should check header presentation on home page', () => {
    page.navigateTo();
    expect(page.isHeaderPresent()).toBeTruthy('<h1> should exist in header.component.html');
  });

  it('should check search link on home page', () => {
    page.navigateTo();
    expect(page.isSearch()).toBeTruthy('<a mat-button routerLink="/search"> Search </a>');
  });
  it('should check stats link on home page', () => {
    page.navigateTo();
    expect(page.isSearch()).toBeTruthy('<a mat-button routerLink="/stats"> Stats </a>');
  });
  it('should check favourites link on home page', () => {
    page.navigateTo();
    expect(page.isSearch()).toBeTruthy('<a mat-button routerLink="/favs"> Favourites </a>');
  });
  it('should check recommends link on home page', () => {
    page.navigateTo();
    expect(page.isSearch()).toBeTruthy('<a mat-button routerLink="/recom"> Recommended </a>');
  });
});


