import { BlockchainPage } from './app.po';

describe('blockchain App', function() {
  let page: BlockchainPage;

  beforeEach(() => {
    page = new BlockchainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
