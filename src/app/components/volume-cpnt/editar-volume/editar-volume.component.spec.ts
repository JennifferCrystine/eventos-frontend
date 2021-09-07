import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVolumeComponent } from './editar-volume.component';

describe('EditarVolumeComponent', () => {
  let component: EditarVolumeComponent;
  let fixture: ComponentFixture<EditarVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
