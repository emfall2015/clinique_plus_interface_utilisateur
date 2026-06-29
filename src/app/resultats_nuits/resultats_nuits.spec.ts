import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsNuits } from './resultats_nuits';

describe('Test', () => {
  let component: ResultatsNuits;
  let fixture: ComponentFixture<ResultatsNuits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultatsNuits],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultatsNuits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
