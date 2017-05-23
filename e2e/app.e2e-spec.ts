import { CtrlAcessoPage } from './app.po';

describe('ctrl-acesso App', () => {
  let page: CtrlAcessoPage;

  beforeEach(() => {
    page = new CtrlAcessoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
