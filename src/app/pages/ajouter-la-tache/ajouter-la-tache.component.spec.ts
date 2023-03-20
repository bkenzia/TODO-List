import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLaTacheComponent } from './ajouter-la-tache.component';

describe('AjouterLaTacheComponent', () => {
  let component: AjouterLaTacheComponent;
  let fixture: ComponentFixture<AjouterLaTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterLaTacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterLaTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
