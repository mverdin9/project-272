import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationTableComponent } from './pagination-table.component';

describe('PaginationTableComponent', () => {
  let component: PaginationTableComponent;
  let fixture: ComponentFixture<PaginationTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationTableComponent]
    });
    fixture = TestBed.createComponent(PaginationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
