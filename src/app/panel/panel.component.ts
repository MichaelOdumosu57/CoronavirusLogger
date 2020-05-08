import {   Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy,AfterContentInit } from '@angular/core';
import {   RyberService   } from '../ryber.service';
import {   fromEvent,interval, of,from, Observable,merge, Subject, combineLatest } from 'rxjs';
import {   catchError,take,timeout,mapTo, debounceTime,distinctUntilChanged, debounce    } from 'rxjs/operators';
import {   zChildren,getTextWidth,numberParse,xPosition,resize,componentBootstrap,eventDispatcher   } from '../customExports'


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
                    let total = [] 
                    this.ryber.panelClickEventSubscription2 = fromEvent([zChild['&#8392'].element,zChild['&#8378'].element],'click').subscribe(()=>{
                        let state = zChild['&#8384'].element.value.toUpperCase()
                        let citySig = ['&#8385','&#8386','&#8387']


                        if(   state.length !== 2  ){

                            
                            zChild['&#8393'].css['opacity'] = 1
                            this.ref.detectChanges()
                            return 


                        }


                        for(    var i of this.ryber.panelList   ){
                            
                            // from state to city
                            if(   i[0][0] === state   ){

 
                                selected['state'] = i[0][0]
                                selected['cityOptions'] = i[1]
                                console.log(i)
                                d.forEach((x,i)=>{
                                    zChild[x].css['opacity'] = 0  
                                    zChild[x].css['z-index'] = 1       
                                    this.ref.detectChanges()   
                                    zChild[x].css['display'] = 'none'                      
                                })  
                                let {signature,extras,metadata,...neededProps} = this.ryber[this.panelTV].quantity[1][4]  
                                let {video,placeholder,type,attrMinlength,attrMaxlength,...neededMetadata} = metadata
                                Object.values({...neededProps,...neededMetadata}).forEach((x,i)=>{
                                    x[1].splice(x[1].length-total.length,x[1].length)
                                })       
                                zChild["&#8353"].css['height'] = zChild["&#8353"].cssDefault['height']                              
                                this.ref.detectChanges()                                                                 
                                citySig.forEach((x,i)=>{
                                    zChild[x].css['opacity'] = 1       
                                    zChild[x].css['display'] = 'block'   
                                    this.ref.detectChanges()                      
                                })    
                                zChild = this.zChildInit({
                                    classes: ['p_a_n_e_l_Board', 'p_a_n_e_l_Title', 'p_a_n_e_l_ArticleTitle']
                                })                    
                                total = []              
                                console.log(zChild,total)                                                                                          
                                this.ryber.panelClickEventSubscription2.unsubscribe() 
                                this.ryber.panelInputEventSubscription0.unsubscribe() 
                                //from city to farewell
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
                                    this.ryber.panelClickEventSubscription3.unsubscribe()
                                    this.ryber.panelInputEventSubscription1.unsubscribe()                               
                                })
                                //
                                // city input selection
                                this.ryber.panelInputEventSubscription1 = fromEvent(zChild['&#8387'].element,'input').pipe(
                                    debounceTime(300),
                                    distinctUntilChanged()
                                )
                                .subscribe(()=>{
                                    let symOpt = function *generator(a) {
                                        var index = a
                                        while (true)
                                        yield index++;
                                    }(this.ryber[this.panelTV].metadata.symbolLeftOff) 
                                    // console.log(this.ryber[this.panelTV].quantity[1][5])
                                    let {signature,extras,metadata,...neededProps} = this.ryber[this.panelTV].quantity[1][5]                                    
                                    let {video,...neededMetadata} = metadata
                                    // console.log(selected['cityOptions'])
                                    // console.log(neededProps)
                                    // console.log(total)
                                    //this is working
                                    Object.values({...neededProps,...neededMetadata}).forEach((x,i)=>{
                                        x[1].splice(x[1].length-total.length,x[1].length)
                                    })       
                                    total = []      
                                    //                                             
                                    // console.log(this.ryber[this.panelTV].quantity[1][5])  
                                    for(let bbb of selected['cityOptions']){   
                                        if(   bbb.toUpperCase().match(zChild['&#8387'].element.value.toUpperCase()) !== null  ){
                                            if(   bbb.toUpperCase().match(zChild['&#8387'].element.value.toUpperCase()).index === 0  ){
                                                total.push(bbb.toUpperCase())
                                            }
                                        }
                                    }
                                    zChild['&#8387'].extras['fontWidth'] = getTextWidth({
                                        elementText:zChild['&#8387'].element.value.toUpperCase(),
                                        font: window.getComputedStyle(zChild['&#8387'].element)['font-size'] +
                                        " " +
                                        window.getComputedStyle(zChild['&#8387'].element)['font-family']
                                    })             
                                    zChild['&#8387'].css['width'] =   resize({
                                        default:zChild['&#8387'].extras['fontWidth'] + 50 ,
                                        containActual:numberParse(window.getComputedStyle(zChild['&#8353'].element).width),
                                        containDefault:1,
                                    })
                                    zChild['&#8387'].css['width']= zChild['&#8387'].css['width'] < 150 ? "150px" : zChild['&#8387'].css['width'].toString() + "px"
                                    console.log(zChild['&#8387'].css['width'])
                                    this.ref.detectChanges()
                                    zChild['&#8353'].extras['recenter'] =  numberParse(   window.getComputedStyle(zChild['&#8353'].element).left   )                                      
                                    zChild['&#8387'].css['left'] =  (
                                        xPosition({
                                            contain:numberParse(   window.getComputedStyle(zChild['&#8353'].element).width   ) ,
                                            target:numberParse(   window.getComputedStyle(zChild['&#8387'].element).width   ) 
                                        }) +
                                        zChild['&#8353'].extras['recenter']
                                    ).toString() + "px"         
                                                           
                                    this.ref.detectChanges()
                                    // console.log(total)   
                                    let heightVal = 0  
                                    let paddingy = 12 
                                    let paddingx = 16
                                    let heightDiff = numberParse(window.getComputedStyle(zChild['&#8387'].element).width) - 
                                    (paddingx *2) -1.40            


                                    if(total.length!== 0){

                                        
                                        total.forEach((x,i)=>{
                                            let sym = "&#"+symOpt.next().value
                                            this.ryber[this.panelTV].quantity[1][5].quantity[1].push(2)
                                            this.ryber[this.panelTV].quantity[1][5].bool[1].push('a')
                                            this.ryber[this.panelTV].quantity[1][5].val[1].push('p_a_n_e_l_CityOption')
                                            this.ryber[this.panelTV].quantity[1][5].text[1].push(x)
                                            this.ryber[this.panelTV].quantity[1][5].symbol[1].push(sym)
                                            this.ryber[this.panelTV].quantity[1][5].metadata.mouseover[1].push({fn:null})
                                            this.ryber[this.panelTV].quantity[1][5].metadata.mouseout[1].push({fn:null})
                                            this.ryber[this.panelTV].quantity[1][5].metadata.click[1].push({
                                                fn:(e:any)=>{
                                                    e.preventDefault()
                                                    zChild['&#8387'].element.value = zChild[sym].innerText 
                                                    eventDispatcher({
                                                        event:'input',
                                                        element:zChild['&#8387'].element
                                                    })                                                          
                                                }
                                            })
                                            this.ryber[this.panelTV].quantity[1][5].metadata.router[1].push({link:null})
                                            console.log(x,getTextWidth({
                                                elementText:x,
                                                font: '16px Times New Roman' // default font for a alinks
                                            }),heightDiff)
                                            let cssItem = {
                                                padding:  paddingy.toString() + 'px '  + paddingx.toString() + 'px',
                                                'background-color' :'rgb(255,255,255)',
                                                width:window.getComputedStyle(zChild['&#8387'].element).width,
                                                top:(
                                                    numberParse(window.getComputedStyle(zChild['&#8387'].element).top) +
                                                    numberParse(window.getComputedStyle(zChild['&#8387'].element).height) +
                                                    (
                                                        (()=>{
                                                            let finalVal = heightVal 
                                                            let stringAssembly = x.split(/ |-/)
                                                            let  extender = stringAssembly.length != 1  ?
                                                             (()=>{
                                                                let multiFinal = 1
                                                                console.log( stringAssembly ) 
                                                                let controlK = 0                       
                                                                stringAssembly.forEach((y,j)=>{ 
                                                                    

                                                                    if(j === controlK || controlK == 0 ){ 

                                                                        let k = j 
                                                                        let testingString= ''
                                                                        while(k != x.split(/ |-/).length){
                                                                            testingString += x.split(/ |-/)[k] + " "                                                                       
                                                                            

                                                                            if(
                                                                                Math.ceil(
                                                                                    getTextWidth({
                                                                                        elementText:testingString.slice(0,-1),
                                                                                        font: '16px Times New Roman'
                                                                                    })/heightDiff 
                                                                                )  >  1 
                                                                            ){
                                                                                console.log('get j == to',k)
                                                                                controlK = k 
                                                                                break 
                                                                            }
                                                                            
                                                                            
                                                                            k += 1                                                                       
                                                                            console.log(
                                                                                testingString,
                                                                                getTextWidth({
                                                                                    elementText:testingString.slice(0,-1),
                                                                                    font: '16px Times New Roman' // default font for a alinks
                                                                                }),
                                                                                Math.ceil(
                                                                                    getTextWidth({
                                                                                        elementText:testingString.slice(0,-1),
                                                                                        font: '16px Times New Roman' // default font for a alinks
                                                                                    })/heightDiff 
                                                                                )                                                                            
                                                                            )                                                                        
                                                                        } 
                                                                        testingString = testingString.slice(0,-1)
                                                                        console.log(
                                                                            testingString,
                                                                            getTextWidth({
                                                                                elementText:testingString,
                                                                                font: '16px Times New Roman' // default font for a alinks
                                                                            }),                                                                        
                                                                            Math.ceil(
                                                                                getTextWidth({
                                                                                    elementText:testingString,
                                                                                    font: '16px Times New Roman' // default font for a alinks
                                                                                })/heightDiff 
                                                                            )                                                                        
                                                                        )  
                                                                        if(
                                                                            Math.ceil(
                                                                                getTextWidth({
                                                                                    elementText:testingString,
                                                                                    font: '16px Times New Roman' // default font for a alinks
                                                                                })/heightDiff 
                                                                            ) > 1                                                                            
                                                                        ){
                                                                            multiFinal += 1
                                                                        }  
                                                                    }                                                                  
                                                                 })
                                                                 return multiFinal
                                                             })() : 1
                                                            console.log(
                                                                (
                                                                    16 * extender
                                                                ) + (paddingy *2)                                                                
                                                            )
                                                            heightVal += (
                                                                (
                                                                    16 * extender
                                                                ) + (paddingy *2)
                                                            ) 
                                                            return finalVal
                                                        })()

                                                    )   
                                                    // (heightDiff < getTextWidth({
                                                    //     elementText:total[i-1],
                                                    //     font: '16px Times New Roman' // default font for a alinks
                                                    // }) ? (()=>{
                                                    //     severalMulti += 1
                                                    //     return 40 * (severalMulti)
                                                    //     })() 
                                                    //     : 
                                                    //     (()=>{
                                                    //         severalMulti = 0 
                                                    //         return 0
                                                    //     })()  
                                                    // )
                                                ).toString()+'px',
                                                left:(
                                                    numberParse(window.getComputedStyle(zChild['&#8387'].element).left) 
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
                                                'text-align':'center',                     
                                            }
                                            this.ryber[this.panelTV].quantity[1][5].ngCss[1].push(cssItem)
                                            this.ryber[this.panelTV].quantity[1][5].ngCssDefault[1].push(
                                                JSON.parse(
                                                    JSON.stringify(
                                                        cssItem
                                                    )
                                                )
                                            )
                                            this.ref.detectChanges()
                                        })
                                        zChild = this.zChildInit({
                                            classes: ['p_a_n_e_l_Board', 'p_a_n_e_l_Title', 'p_a_n_e_l_ArticleTitle']
                                        }) 
                                        this.ref.detectChanges()
                                        console.log(zChild)
                                        //--> state dropdown console log 


                                    }   


                                })  
                                eventDispatcher({
                                    event:'input',
                                    element:zChild['&#8387'].element
                                })                                
                                //                              
                                
                                
                            }
                            //

                        }    
                        

                        if(   selected['state'] === undefined   ){


                            zChild['&#8393'].css['opacity'] = 1
                            this.ref.detectChanges()
                            
                            
                        }  


                    })
                    //state input control              
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
                        let {signature,extras,metadata,...neededProps} = this.ryber[this.panelTV].quantity[1][4]  
                        let {video,placeholder,type,attrMinlength,attrMaxlength,...neededMetadata} = metadata
                        Object.values({...neededProps,...neededMetadata}).forEach((x,i)=>{
                            x[1].splice(x[1].length-total.length,x[1].length)
                        })
                        // console.log(this.ryber[this.panelTV].quantity[1][4])  
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
                                let cssItem = {
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
                                }
                                this.ryber[this.panelTV].quantity[1][4].ngCss[1].push(cssItem)
                                this.ryber[this.panelTV].quantity[1][4].ngCssDefault[1].push(
                                    JSON.parse(
                                        JSON.stringify(
                                            cssItem
                                        )
                                    )
                                )
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
                        console.log(zChild)
                        zChild["&#8353"].css['height'] = (
                            zChild["&#8353"].extras.height > 525 ?
                            zChild["&#8353"].extras.height : 
                            525
                        ).toString() + 'px'    
                        this.ref.detectChanges()
                    })   
                    eventDispatcher({
                        event:'input',
                        element:zChild['&#8384'].element
                    })
                    zChild['&#8384'].element.value = 'CA'
                    eventDispatcher({
                        event:'click',
                        element:zChild['&#8392'].element
                    })                              
                    //                                  
                    this.ryber.panelClickEventSubscription1.unsubscribe()             
                })
                // 
                zChild['&#8378'].css['display'] = 'block'
                zChild['&#8378'].css['opacity'] = 1
                this.ref.detectChanges()
                this.ryber.panelClickEventSubscription0.unsubscribe()      
                eventDispatcher({
                    event:'click',
                    element:zChild['&#8392'].element
                })                           
            })
            eventDispatcher({
                event:'click',
                element:zChild['&#8380'].element
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
