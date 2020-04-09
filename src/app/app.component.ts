import {   Component,OnInit,AfterViewInit,OnDestroy,ViewChildren,Inject,ElementRef,ChangeDetectorRef,ChangeDetectionStrategy  } from '@angular/core';
import {   RyberService   } from './ryber.service';
import {   fromEvent,Subject,Observable,of,Subscription,interval   } from 'rxjs';
// import {   Router,RouterEvent } from '@angular/router';
import {   catchError,take,timeout   } from 'rxjs/operators'

declare global {
    interface Window { Modernizr: any; }
}

window.Modernizr = window.Modernizr || {}
 
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})



export class AppComponent implements OnInit,AfterViewInit,OnDestroy {

    
    constructor(
        public ryber: RyberService,
        private ref:ChangeDetectorRef
    ) {}
    
    appTitle:string = 'CoronaVirusLog'
    
 
    ngOnInit(){
        console.log('app ngOnInit fires on mount')

        if(   
            window.name !== '/'   &&
            window.name !== '/home'   &&
            window.name !== '/about'   &&
            window.name !== '/services'   &&
            window.name !== '/projects'   &&
            window.name !== '/blog'   &&  
            window.name !== '/contact' &&  
            window.name !== '/firebase'                          
        ){   
 

            window.name = '/home'


        }


        if(   this.ryber.appReloaded === 'true'   ){


            this.ryber.appCurrentNav = window.name 


        }            
              
        
        this.ryber.appViewComplete.subscribe(()=>{
            console.log(this.ryber.appCurrentNav)
            // console.log(   window.location   )
            // console.log(
            //     window.name,
            //     this.ryber.appReloaded
            // )

            
            if(   window.name === ''   ){


                window.name = '/'


            }
       

            if(   this.ryber.appReloaded !== 'true'){


                window.name = this.ryber.appCurrentNav
    
    
            }            


            if(   this.ryber.appCurrentNav  === '/' || this.ryber.appCurrentNav  === '/home'    ){


                let arr = [
                    'navigationComponentObject0',
                    'overlayComponentObject4',
                    'wordsComponentObject1',
                    'wordsComponentObject0',
                    'wordsComponentObject2',
                    'footerComponentObject0'
                ].sort()
                this.ryber.appViewCompleteArray = this.ryber.appViewCompleteArray.sort()
                // console.log(    arr.filter((x,i) =>{ 
                //     return this.ryber.appViewCompleteArray[i] !== x 
                // }),
                // arr,
                // this.ryber.appViewCompleteArray
                // )


                if(
                    arr.filter((x,i) =>{ 
                        return this.ryber.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.ryber.appViewCompleteArray.length
                ){

    
                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        fromEvent(window,'load').subscribe(()=>{
                            window.dispatchEvent(event)      
                            window.dispatchEvent(event)                             
                        })
                        window.dispatchEvent(event)      
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event)      
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event) 
                        window.dispatchEvent(event)                         
                    }
                    catch(e){
                        let eventLegacyLoad = window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);
                        try{
                            fromEvent(window,'load').subscribe(()=>{
                                window.dispatchEvent(eventLegacyLoad)      
                                window.dispatchEvent(eventLegacyLoad)                             
                            })
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )  
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )   
                        }    
                        catch(e){
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )  
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )                             
                        }                                                                    
                    }  
                    this.ryber.appViewCompleteArray = []


                    if(   this.ryber.appReloaded === 'true'){


                        this.ryber.appReloaded = 'false'
        
        
                    } 
                    

                }
                
                
            }


            if(   this.ryber.appCurrentNav === '/about'   ){


                let arr = [
                    'navigationComponentObject0',
                    'overlayComponentObject3',
                    'wordsComponentObject5',
                    'footerComponentObject0'
                ].sort()
                this.ryber.appViewCompleteArray = this.ryber.appViewCompleteArray.sort()
                // console.log(    arr.filter((x,i) =>{ 
                //     return this.ryber.appViewCompleteArray[i] !== x 
                // }),
                // arr,
                // this.ryber.appViewCompleteArray
                // )


                if(
                    arr.filter((x,i) =>{ 
                        return this.ryber.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.ryber.appViewCompleteArray.length
                ){


                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        window.dispatchEvent(event)      
                        window.dispatchEvent(event) 
                    }
                    catch(e){
                        let eventLegacyLoad = window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);
                        window.dispatchEvent(    eventLegacyLoad    )
                        window.dispatchEvent(    eventLegacyLoad    )   
                             
                    }  
                    this.ryber.appViewCompleteArray = []


                    if(   this.ryber.appReloaded === 'true'){


                        this.ryber.appReloaded = 'false'
        
        
                    } 


                }    
                
                
            }
            
            
            if(   this.ryber.appCurrentNav === '/services'   ){


                let arr = [
                    'navigationComponentObject0',
                    'overlayComponentObject0',
                    'footerComponentObject0',
                    'wordsComponentObject3',
                    'wordsComponentObject4',
                    // 'wordsComponentObject2',

                ].sort()
                this.ryber.appViewCompleteArray = this.ryber.appViewCompleteArray.sort()
                // console.log(    arr.filter((x,i) =>{ 
                //     return this.ryber.appViewCompleteArray[i] !== x 
                // }),
                // arr,
                // this.ryber.appViewCompleteArray
                // )


                if(
                    arr.filter((x,i) =>{ 
                        return this.ryber.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.ryber.appViewCompleteArray.length
                ){


                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        window.dispatchEvent(event)      
                        window.dispatchEvent(event) 
                    }
                    catch(e){
                        let eventLegacyLoad = window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);
                        window.dispatchEvent(    eventLegacyLoad    )
                        window.dispatchEvent(    eventLegacyLoad    )   
                             
                    }   
                    this.ryber.appViewCompleteArray = []


                    if(   this.ryber.appReloaded === 'true'){


                        this.ryber.appReloaded = 'false'
        
        
                    }    
                    
                    
                }


            }
            
            
            if(   this.ryber.appCurrentNav === '/projects'   ){


                let arr = [
                    'navigationComponentObject0',
                    'overlayComponentObject1',
                    'footerComponentObject0',
                    'wordsComponentObject6',
                    'wordsComponentObject7',
                    'wordsComponentObject8'
                ].sort()
                this.ryber.appViewCompleteArray = this.ryber.appViewCompleteArray.sort()
                // console.log(    arr.filter((x,i) =>{ 
                //     return this.ryber.appViewCompleteArray[i] !== x 
                // }),
                // arr,
                // this.ryber.appViewCompleteArray
                // )


                if(
                    arr.filter((x,i) =>{ 
                        return this.ryber.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.ryber.appViewCompleteArray.length
                ){


                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        window.dispatchEvent(event)      
                        window.dispatchEvent(event) 
                    }
                    catch(e){
                        let eventLegacyLoad = window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);
                        window.dispatchEvent(    eventLegacyLoad    )
                        window.dispatchEvent(    eventLegacyLoad    )   
                             
                    } 
                    this.ryber.appViewCompleteArray = []


                    if(   this.ryber.appReloaded === 'true'){


                        this.ryber.appReloaded = 'false'
        
        
                    } 

                    
                }


            }   
            
            
            if(     this.ryber.appCurrentNav === '/blog'    ){


                let arr = [
                    'navigationComponentObject0',
                    'overlayComponentObject5',
                    'blogCO0',
                    'footerComponentObject0'
                ].sort()
                this.ryber.appViewCompleteArray = this.ryber.appViewCompleteArray.sort()
                // console.log(    arr.filter((x,i) =>{ 
                //     return this.ryber.appViewCompleteArray[i] !== x 
                // }),
                // arr,
                // this.ryber.appViewCompleteArray
                // )


                if(
                    arr.filter((x,i) =>{ 
                        return this.ryber.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.ryber.appViewCompleteArray.length 
                ){


                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        fromEvent(window,'load').subscribe(()=>{
                            window.dispatchEvent(event)      
                            window.dispatchEvent(event)                             
                        })               
                        window.dispatchEvent(event)      
                        window.dispatchEvent(event)                                                           
                    }
                    catch(e){
                        let eventLegacyLoad = window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);                        
                        try{
                        fromEvent(window,'load').subscribe(()=>{
                            window.dispatchEvent(   eventLegacyLoad   )      
                            window.dispatchEvent(   eventLegacyLoad   )                             
                        })               
                        window.dispatchEvent(event)      
                        window.dispatchEvent(event)                                      
                        }       
                        catch(e){
                            window.dispatchEvent(event)      
                            window.dispatchEvent(event)                             
                        }                   
                    } 
                    this.ryber.appViewCompleteArray = []


                    if(   this.ryber.appReloaded === 'true'){


                        this.ryber.appReloaded = 'false'
        
        
                    } 

                    
                }


            } 
            
            
            if(   this.ryber.appCurrentNav === '/contact'   ){


                let arr = [
                    'navigationComponentObject0',
                    'overlayComponentObject2',
                    'wordsComponentObject9',
                    'footerComponentObject0'
                ].sort()
                this.ryber.appViewCompleteArray = this.ryber.appViewCompleteArray.sort()
                // console.log(    arr.filter((x,i) =>{ 
                //     return this.ryber.appViewCompleteArray[i] !== x 
                // }),
                // arr,
                // this.ryber.appViewCompleteArray
                // )


                if(
                    arr.filter((x,i) =>{ 
                        return this.ryber.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.ryber.appViewCompleteArray.length
                ){

                    
                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        window.dispatchEvent(event)      
                        window.dispatchEvent(event) 
                        fromEvent(window,'load').subscribe(()=>{
                            window.dispatchEvent(event)      
                            window.dispatchEvent(event)                             
                        })                        
                    }
                    catch(e){
                        let eventLegacyLoad = window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);
                        try{
                        window.dispatchEvent(    eventLegacyLoad    )
                        window.dispatchEvent(    eventLegacyLoad    )   
                        fromEvent(window,'load').subscribe(()=>{
                            window.dispatchEvent(eventLegacyLoad)      
                            window.dispatchEvent(eventLegacyLoad)                             
                        })        
                        }                
                        catch(e){
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )                               
                        }
                    } 
                    this.ryber.appViewCompleteArray = []


                    if(   this.ryber.appReloaded === 'true'){


                        this.ryber.appReloaded = 'false'
        
        
                    } 

                    
                }


            }    
            
            if(   this.ryber.appCurrentNav === '/firebase'   ){


                let arr = [
                    'wordsComponentObject10',
                ].sort()
                this.ryber.appViewCompleteArray = this.ryber.appViewCompleteArray.sort()
                // console.log(    arr.filter((x,i) =>{ 
                //     return this.ryber.appViewCompleteArray[i] !== x 
                // }),
                // arr,
                // this.ryber.appViewCompleteArray
                // )


                if(
                    arr.filter((x,i) =>{ 
                        return this.ryber.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.ryber.appViewCompleteArray.length
                ){

                    
                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        window.dispatchEvent(event)      
                        window.dispatchEvent(event) 
                        fromEvent(window,'load').subscribe(()=>{
                            window.dispatchEvent(event)      
                            window.dispatchEvent(event)                             
                        })                        
                    }
                    catch(e){
                        let eventLegacyLoad = window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);
                        try{
                        window.dispatchEvent(    eventLegacyLoad    )
                        window.dispatchEvent(    eventLegacyLoad    )   
                        fromEvent(window,'load').subscribe(()=>{
                            window.dispatchEvent(eventLegacyLoad)      
                            window.dispatchEvent(eventLegacyLoad)                             
                        })        
                        }                
                        catch(e){
                            window.dispatchEvent(    eventLegacyLoad    )
                            window.dispatchEvent(    eventLegacyLoad    )                               
                        }
                    } 
                    this.ryber.appViewCompleteArray = []


                    if(   this.ryber.appReloaded === 'true'){


                        this.ryber.appReloaded = 'false'
        
        
                    } 

                    
                }


            }               
            
        })

        console.log(window.location.pathname)
    }

    ngAfterViewInit(){
        console.log('app ngAfterViewInit fires on mount')
    }

    ngOnDestroy(){
    }
}


  
  
