import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocosComponent } from './blocos.component';

describe('BlocosComponent', () => {
  let component: BlocosComponent;
  let fixture: ComponentFixture<BlocosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
