import { VisionejecutivaPage } from './app.po';

describe('visionejecutiva App', () => {
  let page: VisionejecutivaPage;

  beforeEach(() => {
    page = new VisionejecutivaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
