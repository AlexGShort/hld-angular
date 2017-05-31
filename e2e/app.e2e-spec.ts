import { HldAngularPage } from './app.po';

describe('hld-angular App', () => {
  let page: HldAngularPage;

  beforeEach(() => {
    page = new HldAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
