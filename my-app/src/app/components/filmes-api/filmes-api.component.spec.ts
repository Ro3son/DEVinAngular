import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesAPIComponent } from './filmes-api.component';

describe('FilmesAPIComponent', () => {
  let component: FilmesAPIComponent;
  let fixture: ComponentFixture<FilmesAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
