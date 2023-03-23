import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HommePageComponent } from './homme-page.component';

describe('HommePageComponent', () => {
  let component: HommePageComponent;
  let fixture: ComponentFixture<HommePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HommePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HommePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
