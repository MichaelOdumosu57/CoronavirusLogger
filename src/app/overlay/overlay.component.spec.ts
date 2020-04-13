import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlayComponent } from './overlay.component';
import { RyberService  } from '../ryber.service';
import {  HttpClientModule  } from '@angular/common/http';
import { DebugElement } from '@angular/core';

describe('OverlayComponent', () => {
  let component: OverlayComponent;
  let fixture: ComponentFixture<OverlayComponent>;
  let ryberTestService: RyberService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayComponent ],
      imports: [
        HttpClientModule
      ],    
      providers:[
        RyberService,
    ],         
    })
    .compileComponents();
    fixture = TestBed.createComponent(OverlayComponent); 
    component = fixture.componentInstance;
    component.overlayTV = 'overlayCO0'
    ryberTestService = TestBed.get(RyberService)
    fixture.destroy = ()=>{}    
  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
