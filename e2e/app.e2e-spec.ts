import { AsbelARPage } from './app.po';

describe('asbel-ar App', () => {
  let page: AsbelARPage;

  beforeEach(() => {
    page = new AsbelARPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
