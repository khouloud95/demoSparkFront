import { ContactsWebPage } from './app.po';

describe('contacts-web App', () => {
  let page: ContactsWebPage;

  beforeEach(() => {
    page = new ContactsWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
