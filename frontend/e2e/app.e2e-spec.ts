import { AngularBootstrapDemoPage } from './app.po';

describe('angular-bootstrap-demo App', function() {
  let page: AngularBootstrapDemoPage;

  beforeEach(() => {
    page = new AngularBootstrapDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
