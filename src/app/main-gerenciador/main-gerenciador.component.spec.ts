import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGerenciadorComponent } from './main-gerenciador.component';

describe('MainGerenciadorComponent', () => {
  let component: MainGerenciadorComponent;
  let fixture: ComponentFixture<MainGerenciadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainGerenciadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainGerenciadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
