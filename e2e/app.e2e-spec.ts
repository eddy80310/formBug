import { TimesheetWebAppNewPage } from './app.po';

describe('timesheet-web-app-new App', function() {
  let page: TimesheetWebAppNewPage;

  beforeEach(() => {
    page = new TimesheetWebAppNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
