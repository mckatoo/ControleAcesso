import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleAcessoComponent } from './controle-acesso.component';

describe('ControleAcessoComponent', () => {
  let component: ControleAcessoComponent;
  let fixture: ComponentFixture<ControleAcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleAcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
