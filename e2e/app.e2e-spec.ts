import { RoutingExamplesPage } from './app.po';

describe('routing-examples App', () => {
  let page: RoutingExamplesPage;

  beforeEach(() => {
    page = new RoutingExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
