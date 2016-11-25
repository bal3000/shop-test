import { ShopTestUpdatePage } from './app.po';

describe('shop-test-update App', function() {
  let page: ShopTestUpdatePage;

  beforeEach(() => {
    page = new ShopTestUpdatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
