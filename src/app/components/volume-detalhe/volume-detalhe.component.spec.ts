import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeDetalheComponent } from './volume-detalhe.component';

describe('VolumeDetalheComponent', () => {
  let component: VolumeDetalheComponent;
  let fixture: ComponentFixture<VolumeDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
