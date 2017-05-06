import { AngularBasicsPage } from './app.po';

describe('angular-basics App', () => {
  let page: AngularBasicsPage;

  beforeEach(() => {
    page = new AngularBasicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
