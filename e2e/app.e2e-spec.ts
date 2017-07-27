import { Anuglar4RoutingAppPage } from './app.po';

describe('anuglar4-routing-app App', () => {
  let page: Anuglar4RoutingAppPage;

  beforeEach(() => {
    page = new Anuglar4RoutingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
