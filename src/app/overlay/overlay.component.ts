import {   Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy,AfterContentInit } from '@angular/core';
import {   RyberService   } from '../ryber.service';
import {   fromEvent,interval, of,from, Observable,merge, Subject, combineLatest } from 'rxjs';
import {   catchError,take,timeout,mapTo    } from 'rxjs/operators';
import {   zChildren,getTextWidth,numberParse,xPosition,resize,componentBootstrap   } from '../customExports'

@Component({
    selector: 'app-overlay',
    templateUrl: '../template.component.html',
    styleUrls: ['./overlay.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayComponent implements OnInit,AfterViewInit,OnDestroy {

    @ViewChildren('myVal') overlayMyElements: any;  

    constructor(
        public ryber: RyberService,
        private ref: ChangeDetectorRef
    ) { }

    @Input() overlayTV:string | any;
    appTV: string

    ngOnInit():void {
        console.log(this.overlayTV+ '  ngOnInit fires one remount')
        this.appTV = this.overlayTV
    }

    ngAfterViewInit(): void {
        console.log( this.overlayTV+ ' ngAfterViewInit fires one remount') 
        this.ryber.overlayLoadEvent$ = fromEvent(window,'load')
        this.ryber.overlayResizeEvent$ = fromEvent(window,'resize')    
        

        if(   this.overlayTV === 'overlayCO0'    ){
                
            
            let zChild = componentBootstrap({
                appElement:{
                    element: window.document.querySelector('app-overlay[class='+this.overlayTV+'],[id^="root"]') as HTMLElement,
                    css:this.ryber[this.overlayTV].quantity[0][0].ngCss[0][0],
                    bool:this.ryber[this.overlayTV].quantity[0][0].bool[0][0],
                    cssDefault:this.ryber[this.overlayTV].quantity[0][0].ngCssDefault[0][0],
                    symbol:this.ryber[this.overlayTV].quantity[0][0].symbol[0][0]
                },
                appTV:this.overlayTV,
                myElements:this.overlayMyElements._results,
                classes:['o_v_e_r_l_a_y_Board','o_v_e_r_l_a_y_MedTechBackground'],
                ryber:this.ryber,
            })
            console.log(zChild)

            
        }


    }  
    
    ngOnDestroy(): void {
        console.log(this.overlayTV+ '  ngOnInit fires on dismount')
    }      

}
