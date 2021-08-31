import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarVolumeComponent } from './criar-volume.component';

describe('CriarVolumeComponent', () => {
  let component: CriarVolumeComponent;
  let fixture: ComponentFixture<CriarVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
