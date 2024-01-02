import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ListeFraisComponent} from "./lister-frais.component";
import { FormsModule } from '@angular/forms';



describe('ListerFraisComponent', () => {
  let component: ListeFraisComponent;
  let fixture: ComponentFixture<ListeFraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeFraisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
