import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTeamComponent } from './login-team.component';

describe('LoginTeamComponent', () => {
  let component: LoginTeamComponent;
  let fixture: ComponentFixture<LoginTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginTeamComponent]
    });
    fixture = TestBed.createComponent(LoginTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
