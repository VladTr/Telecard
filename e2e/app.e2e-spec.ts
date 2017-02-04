import { FbPage } from './app.po';

describe('fb App', function() {
  let page: FbPage;

  beforeEach(() => {
    page = new FbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
