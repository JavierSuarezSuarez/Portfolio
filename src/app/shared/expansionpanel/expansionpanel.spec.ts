import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expansionpanel } from './expansionpanel';

describe('Expansionpanel', () => {
  let component: Expansionpanel;
  let fixture: ComponentFixture<Expansionpanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expansionpanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expansionpanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
