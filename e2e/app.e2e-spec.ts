import { CourseplannerPage } from './app.po';

describe('courseplanner App', () => {
  let page: CourseplannerPage;

  beforeEach(() => {
    page = new CourseplannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
