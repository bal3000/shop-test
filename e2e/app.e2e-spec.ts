import { ShopTestPage } from './app.po';

describe('shop-test App', function() {
  let page: ShopTestPage;

  beforeEach(() => {
    page = new ShopTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
