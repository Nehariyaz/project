import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalMenuListComponent } from './minimal-menu-list.component';

describe('MinimalMenuListComponent', () => {
  let component: MinimalMenuListComponent;
  let fixture: ComponentFixture<MinimalMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimalMenuListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinimalMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
