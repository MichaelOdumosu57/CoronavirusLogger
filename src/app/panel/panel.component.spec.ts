import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelComponent } from './panel.component';
import { RyberService  } from '../ryber.service';
import {  HttpClientModule  } from '@angular/common/http';
import { DebugElement } from '@angular/core';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;
  let ryberTestService: RyberService;
  let co :string

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelComponent ],
      imports: [
        HttpClientModule
      ],    
      providers:[
        RyberService,
    ],         
    })
    .compileComponents();
    fixture = TestBed.createComponent(PanelComponent); 
    component = fixture.componentInstance;
    component.panelTV = 'panelCO0'
    ryberTestService = TestBed.get(RyberService)
    fixture.destroy = ()=>{}       
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
