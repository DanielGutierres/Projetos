import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosListRenderComponent } from './carros-list-render.component';

describe('CarrosListRenderComponent', () => {
  let component: CarrosListRenderComponent;
  let fixture: ComponentFixture<CarrosListRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosListRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosListRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
