import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerVisiteurComponent } from './lister-visiteur.component';

describe('ListerVisiteurComponent', () => {
  let component: ListerVisiteurComponent;
  let fixture: ComponentFixture<ListerVisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListerVisiteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListerVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
