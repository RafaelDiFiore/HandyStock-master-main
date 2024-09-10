import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioLoginPage } from './inicio-login.page';

describe('InicioLoginPage', () => {
  let component: InicioLoginPage;
  let fixture: ComponentFixture<InicioLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
