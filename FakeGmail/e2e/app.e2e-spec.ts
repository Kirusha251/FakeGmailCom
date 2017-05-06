import { FakeGmailPage } from './app.po';

describe('fake-gmail App', () => {
  let page: FakeGmailPage;

  beforeEach(() => {
    page = new FakeGmailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
