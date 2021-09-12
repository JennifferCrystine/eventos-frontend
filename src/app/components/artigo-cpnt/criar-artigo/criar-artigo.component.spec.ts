import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarArtigoComponent } from './criar-artigo.component';

describe('CriarArtigoComponent', () => {
  let component: CriarArtigoComponent;
  let fixture: ComponentFixture<CriarArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarArtigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
