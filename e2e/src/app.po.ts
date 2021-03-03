import { browser, by, element, ElementFinder, promise } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
};


export class LoginPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
  // navigate to login page
  navigateToLogin() {
    return browser.get('/login');
  }
   // get current URL
   getCurrentURL() {
    return browser.getCurrentUrl();
  }
  // navigate to  dashboard view dashboard
  navigateToDashboard() {
    return browser.get('/dashboard');
  }

  // get username input box
  getUserNameInputBox(): ElementFinder {
    return element(by.className('form-control'));
  }
   // get login component
   getloginComponent(): ElementFinder {
    return element(by.tagName('app-logsign'));
  }
  // check password input box is exist or not
  isPasswordInputBoxPresent(): promise.Promise<boolean> {
    return this.getPasswordInputBox().isPresent();
  }
   // get submit button
   getSigninButton(): ElementFinder {
    return this.getloginComponent().element(by.buttonText('Sign In'));
  }
  // check submit button is present or not
  isSubmitButtonPresent(): promise.Promise<boolean> {
    return this.getSigninButton().isPresent();
  }
  // check username input box is exist or not
  isUserNameInputBoxPresent(): promise.Promise<boolean> {
    return this.getUserNameInputBox().isPresent();
  }
  // get password input box
  getPasswordInputBox(): ElementFinder {
    return element(by.className('form-control'));
  }
   // click submit button
   clickSubmitButton(): promise.Promise<void> {
    return this.getSigninButton().click();
  }
  getSubmitButton() {
    return element(by.css('#btnSubmit'));
   }

   getEmail(){
    return element(by.id('email'));
  }

  getPassword(){
    return element(by.id('password'));
  }
  getForm(){
    return element(by.className('form sign-in'));
  }
  

   // get username and password details
   getMockLoginDetail(): any {
    const loginDetail: any = { username: 'stranger', password : 'password'};
    return loginDetail;
  }

  addLoginValues(): any {
    const login: any = this.getMockLoginDetail();
    this.getUserNameInputBox().sendKeys(login.username);
    this.getPasswordInputBox().sendKeys(login.password);
    return Object.keys(login).map(key => login[key]);
  }

 
  // default values of input boxes
  getLoginInputBoxesDefaultValues(): any {
    let inputUsername, inputPassword;
    inputUsername = this.getUserNameInputBox().getAttribute('value');
    inputPassword = this.getPasswordInputBox().getAttribute('value');
    return Promise.all([inputUsername, inputPassword]).then( (values) => {
      return values;
    });
  }
}

  export class DashboardPage {
    // navigate to home page
    navigateTo() {
      return browser.get('/dashboard');
    }
    // get header
    getHeader(): ElementFinder {
      return element(by.css('h1'));
    }
    // check header is present or not
    isHeaderPresent(): promise.Promise<boolean> {
      return this.getHeader().isPresent();
    }

    getStats(): ElementFinder{
      return element(by.linkText('Stats'));
    }
    isStat(): promise.Promise<boolean> {
      return this.getStats().isPresent();
    }

    getFav(): ElementFinder{
      return element(by.linkText('Favourites'));
    }
    isFavourite(): promise.Promise<boolean> {
      return this.getFav().isPresent();
    }

    getRecomended(): ElementFinder{
      return element(by.linkText('Recommended'));
    }
    isRecommend(): promise.Promise<boolean> {
      return this.getRecomended().isPresent();
    }

    getSearch(): ElementFinder{
      return element(by.linkText('Search'));
    }
    isSearch(): promise.Promise<boolean> {
      return this.getSearch().isPresent();
    }
   
  }


  
