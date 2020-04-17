import {   Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy,AfterContentInit } from '@angular/core';
import {   RyberService   } from '../ryber.service';
import {   fromEvent,interval, of,from, Observable,merge, Subject, combineLatest } from 'rxjs';
import {   catchError,take,timeout,mapTo, debounceTime,distinctUntilChanged, debounce    } from 'rxjs/operators';
import {   zChildren,getTextWidth,numberParse,xPosition,resize,componentBootstrap   } from '../customExports'


@Component({
    selector: 'app-panel',
    templateUrl: '../template.component.html',
    styleUrls: ['./panel.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent implements OnInit {

    @ViewChildren('myVal') panelMyElements: any; 

    constructor(
        public ryber: RyberService,
        private ref: ChangeDetectorRef
    ) { }

    @Input() panelTV:string | any;
    appTV: string

    ngOnInit():void {
        console.log(this.panelTV+ '  ngOnInit fires one remount')
        this.appTV = this.panelTV
    }

    ngAfterViewInit(): void {
        console.log( this.panelTV+ ' ngAfterViewInit fires one remount') 
        this.ryber.panelLoadEvent$ = fromEvent(window,'load')
        this.ryber.panelResizeEvent$ = fromEvent(window,'resize')    
        
    
        if(   this.panelTV === 'panelCO0'  ){
                
    
            let zChild = this.zChildInit({
                classes: ['p_a_n_e_l_Board', 'p_a_n_e_l_Title', 'p_a_n_e_l_ArticleTitle']
            })
            console.log(zChild)
            let selected = {}    
                  
            
            // navigate from start to symptoms
            this.ryber.panelClickEventSubscription0 = fromEvent([zChild['&#8380'].element,zChild['&#8381'].element],'click').subscribe(()=>{
                for (let i of ['&#8379','&#8380','&#8381']){
                    zChild[i].css['opacity'] = 0 
                    zChild[i].css['z-index'] = 1
                }
                this.ref.detectChanges()
                let a = ['&#8356','&#8357','&#8358','&#8359','&#8360','&#8361','&#8362','&#8363','&#8364','&#8365','&#8391']
                let b = ['&#8366','&#8367','&#8368','&#8369','&#8370','&#8371','&#8372','&#8373','&#8374','&#8375','&#8376','&#8377','&#8378']
                let c = []
                a.forEach((x,i)=>{
                    zChild[x].css['opacity'] = 1 
                    zChild[x].css['z-index'] = 3 
                    this.ryber["panelClickEventSubscription" + (i+4)] = fromEvent(zChild[x].element, 'click').subscribe(()=>{

                        
                        if(      zChild[x].extras.chosen !== 'true'   ){


                            zChild[x].extras.chosen = 'true'
                            this.ref.detectChanges()
                            zChild[b[i+1]].css['opacity'] = 1
                            zChild[b[i+1]].css['display'] = 'block'
                            this.ref.detectChanges() 


                        }


                        else if(      zChild[x].extras.chosen === 'true'   ){


                            zChild[x].extras.chosen = 'false'
                            this.ref.detectChanges()
                            zChild[b[i+1]].css['opacity'] = 0
                            zChild[b[i+1]].css['display'] = 'none'
                            this.ref.detectChanges() 


                        }                        


                    })
                    c.push("panelClickEventSubscription" + (i+4))
                })
                zChild['&#8392'].css['opacity'] = 1
                // from symptoms to state
                this.ryber.panelClickEventSubscription1 = combineLatest(
                    fromEvent([zChild['&#8392'].element,zChild['&#8378'].element],'click'),
                    this.ryber.panelListGet
                ).pipe(
                    debounceTime(2000)
                ).subscribe(()=>{
                    window.dgasdgasg = selected  
                    let d = ['&#8382','&#8383','&#8384','&#8393']
                    c.forEach((x,i)=>{
                        this.ryber[x].unsubscribe()
                    })
                    a.forEach((x,i)=>{
                        
                        
                        if(    zChild[x].extras.chosen === 'true'    ){


                            selected[x] = Object.assign({},zChild[x].extras)
                            selected[x].text = zChild[x].innerText

                        }


                        zChild[x].css['opacity'] = 0 
                        zChild[x].css['z-index'] = zChild[x].cssDefault['z-index'] 
                        this.ref.detectChanges()
                        zChild[x].css['display'] = 'none' 


                        if(   b[i+2] !== '&#8378'   ){


                            zChild[b[i+2]].css['opacity'] = 0   
                            this.ref.detectChanges()

                            
                        }

                        
                    })
                    d.forEach((x,i)=>{

                        
                        if(x !== '&#8393') { zChild[x].css['opacity'] = 1  }
                        zChild[x].css['z-index'] = 2       
                        zChild[x].css['display'] = 'block'   
                        this.ref.detectChanges()                      
                    })
                    this.ryber.panelClickEventSubscription2 = fromEvent([zChild['&#8392'].element,zChild['&#8378'].element],'click').subscribe(()=>{
                        let state = zChild['&#8384'].element.value.toUpperCase()
                        let citySig = ['&#8385','&#8386','&#8387']


                        if(   state.length !== 2  ){

                            
                            zChild['&#8393'].css['opacity'] = 1
                            this.ref.detectChanges()
                            return 


                        }


                        for(    var i of this.ryber.panelStateAbbrev   ){
                            
                            // from state to city
                            if(   i === state   ){

 
                                selected['state'] = i
                                d.forEach((x,i)=>{
                                    zChild[x].css['opacity'] = 0  
                                    zChild[x].css['z-index'] = 1       
                                    this.ref.detectChanges()   
                                    zChild[x].css['display'] = 'none'                      
                                })  
                                citySig.forEach((x,i)=>{
                                    zChild[x].css['opacity'] = 1       
                                    zChild[x].css['display'] = 'block'   
                                    this.ref.detectChanges()                      
                                })                              
                                this.ryber.panelClickEventSubscription2.unsubscribe() 
                                this.ryber.panelInputEventSubscription0.unsubscribe() 
                                this.ryber.panelClickEventSubscription3 = fromEvent([zChild['&#8392'].element,zChild['&#8378'].element],'click').subscribe(()=>{
                                    let city = zChild['&#8387'].element.value.toUpperCase()
                                    let farewellSig = ['&#8388','&#8389','&#8390']
                                    let closing = [...citySig,'&#8392','&#8378']
                                    console.log(city)
                                    selected['city'] = city 
                                    console.log(selected) 
                                    closing.forEach((x,i)=>{
                                        zChild[x].css['opacity'] = 0     
                                        zChild[x].css['display'] = 'none'   
                                        this.ref.detectChanges()                      
                                    })   
                                    farewellSig.forEach((x,i)=>{
                                        zChild[x].css['opacity'] = 1     
                                        zChild[x].css['display'] = 'block'   
                                        this.ref.detectChanges()                      
                                    })                                  
                                })
                                

                                
                            }
                            //

                        }    
                        

                        if(   selected['state'] === undefined   ){


                            zChild['&#8393'].css['opacity'] = 1
                            this.ref.detectChanges()
                            
                            
                        }                                      
                    })
                    //state input control
                    /* 
                        TEST
                        make sure that any input option does not crash the application  
                    */
                    let total = []                
                    this.ryber.panelInputEventSubscription0 = fromEvent(zChild['&#8384'].element,'input').pipe(
                        debounceTime(300),
                        distinctUntilChanged()
                    )
                    .subscribe(()=>{
                        // console.log(zChild['&#8384'].element.value)
                        // console.log(total)
                        let symOpt = function *generator(a) {
                            var index = a
                            while (true)
                            yield index++;
                        }(this.ryber[this.panelTV].metadata.symbolLeftOff)                         
                        total.forEach((x,i)=>{
                            this.ryber[this.panelTV].quantity[1][4].quantity[1].pop() 
                            this.ryber[this.panelTV].quantity[1][4].bool[1].pop()
                            this.ryber[this.panelTV].quantity[1][4].val[1].pop()
                            this.ryber[this.panelTV].quantity[1][4].text[1].pop()
                            this.ryber[this.panelTV].quantity[1][4].symbol[1].pop()
                            this.ryber[this.panelTV].quantity[1][4].metadata.mouseover[1].pop()
                            this.ryber[this.panelTV].quantity[1][4].metadata.mouseout[1].pop() 
                            this.ryber[this.panelTV].quantity[1][4].metadata.router[1].pop()     
                            this.ryber[this.panelTV].quantity[1][4].ngCss[1].pop()  
                            this.ryber[this.panelTV].quantity[1][4].ngCssDefault[1].pop()                    
                        })
                        //--> state dropdown console log   
                        total = []                        
                        for(let bbb of this.ryber.panelList){   
                            if(   bbb[0][0].match(zChild['&#8384'].element.value.toUpperCase()) !== null  ){
                                if(   bbb[0][0].match(zChild['&#8384'].element.value.toUpperCase()).index === 0  ){
                                    total.push(bbb[0][0])
                                }
                            }
                        }      
                        // console.log(total) 
                        this.ref.detectChanges()
                        

                        if(total.length!== 0){


                            total.forEach((x,i)=>{
                                let sym = "&#"+symOpt.next().value
                                this.ryber[this.panelTV].quantity[1][4].quantity[1].push(2)
                                this.ryber[this.panelTV].quantity[1][4].bool[1].push('a')
                                this.ryber[this.panelTV].quantity[1][4].val[1].push('p_a_n_e_l_StateOption')
                                this.ryber[this.panelTV].quantity[1][4].text[1].push(x)
                                this.ryber[this.panelTV].quantity[1][4].symbol[1].push(sym)
                                this.ryber[this.panelTV].quantity[1][4].metadata.mouseover[1].push({fn:null})
                                this.ryber[this.panelTV].quantity[1][4].metadata.mouseout[1].push({fn:null})
                                this.ryber[this.panelTV].quantity[1][4].metadata.click[1].push({
                                    fn:(e:any)=>{
                                        e.preventDefault()
                                        zChild['&#8384'].element.value = zChild[sym].innerText   
                                    }
                                })
                                this.ryber[this.panelTV].quantity[1][4].metadata.router[1].push({link:null})
                                this.ryber[this.panelTV].quantity[1][4].ngCss[1].push({
                                    padding:'12px 16px',
                                    'background-color' :'rgb(255,255,255)',
                                    width:window.getComputedStyle(zChild['&#8384'].element).width,
                                    top:(
                                        numberParse(window.getComputedStyle(zChild['&#8384'].element).top) +
                                        numberParse(window.getComputedStyle(zChild['&#8384'].element).height) +
                                        (
                                            i * 
                                            40
                                        )  
                                    ).toString()+'px',
                                    left:(
                                        numberParse(window.getComputedStyle(zChild['&#8384'].element).left) 
                                    ).toString()+'px',     
                                    'z-index':4,
                                    'border-radius': 
                                    window.Modernizr.borderradius ? 
                                        (
                                        total.length -1 === i ?
                                            '0px 0px 8px 8px' 
                                            : null
                                        )
                                    : null,
                                    border : '1px solid rgb(206, 212, 218)',
                                    'text-decoration':'none',
                                    'text-align':'center'                           
                                })
                                this.ryber[this.panelTV].quantity[1][4].ngCssDefault[1].push({})
                                this.ref.detectChanges()
                            })
                            zChild = this.zChildInit({
                                classes: ['p_a_n_e_l_Board', 'p_a_n_e_l_Title', 'p_a_n_e_l_ArticleTitle']
                            }) 
                            this.ref.detectChanges()
                            // console.log(zChild)
                            //--> state dropdown console log 


                        }  


                        let last = total.length !== 0 ? "&#"+(symOpt.next().value-1) :"&#8378"
                        zChild["&#8353"].extras.height = numberParse(window.getComputedStyle(zChild[last].element).top   ) +
                        numberParse(window.getComputedStyle(zChild[last].element).height) 
                        // console.log(zChild)
                        zChild["&#8353"].css['height'] = (
                            zChild["&#8353"].extras.height > 525 ?
                            zChild["&#8353"].extras.height : 
                            525
                        ).toString() + 'px'    
                        this.ref.detectChanges()
                    })  
                    try {
                        let event0= new Event('input')   
                        zChild['&#8384'].element.dispatchEvent(event0)  
                    } 
                    catch(e){
                        let eventLegacyInput = window.document.createEvent("Event");
                        eventLegacyInput.initEvent("input", false, true);       
                        zChild['&#8384'].element.dispatchEvent(eventLegacyInput)
                    }             
                    //                                  
                    this.ryber.panelClickEventSubscription1.unsubscribe()             
                })
                // 
                zChild['&#8378'].css['display'] = 'block'
                zChild['&#8378'].css['opacity'] = 1
                this.ref.detectChanges()
                this.ryber.panelClickEventSubscription0.unsubscribe()
            })
            //
            
            
        }
       
    
    }  
    

    ngOnDestroy(): void {
        console.log(this.panelTV+ '  ngOnDestroy fires on dismount')
    }
    
    private zChildInit(devObj): any {
        return componentBootstrap({
            appElement: {
                element: window.document.querySelector('app-panel[class=' + this.panelTV + '],[id^="root"]') as HTMLElement,
                css: this.ryber[this.panelTV].quantity[0][0].ngCss[0][0],
                bool: this.ryber[this.panelTV].quantity[0][0].bool[0][0],
                cssDefault: this.ryber[this.panelTV].quantity[0][0].ngCssDefault[0][0],
                symbol: this.ryber[this.panelTV].quantity[0][0].symbol[0][0]
            },
            appTV: this.panelTV,
            myElements: this.panelMyElements._results,
            classes:devObj.classes,
            ryber: this.ryber,
            zProps: {
                click: 'true',
                extras: 'true'
            }
        });
    }    

    
}
