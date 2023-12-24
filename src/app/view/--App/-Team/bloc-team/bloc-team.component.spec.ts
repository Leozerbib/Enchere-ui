import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocTeamComponent } from './bloc-team.component';

describe('BlocTeamComponent', () => {
  let component: BlocTeamComponent;
  let fixture: ComponentFixture<BlocTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlocTeamComponent]
    });
    fixture = TestBed.createComponent(BlocTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
