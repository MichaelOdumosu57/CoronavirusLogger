import { Injectable } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';
// import { Router,RouterEvent } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { zChildren, componentObject,numberParse } from './customExports';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RyberService {


    constructor(
        // private router:Router
        private http:HttpClient
    ) { };

    appCurrentNav:string = '/home'
    appReloaded:string = 'true'
    // appRouterEvent$:Observable<any> = this.router.events    
    appRouterEventSubscription0:Subscription
    appSubscriptionArray:Subscription[] = []
    appViewComplete:Subject<any> =  new  Subject<any>()
    appViewCompleteArray:Array<any> = []
    appEventListener:Function = (a,event=null)=>{
        
        
        if(   typeof a === 'function'   ){
        
            
            if(
                parseInt(document.querySelector("body > app-root").attributes["ng-version"].value.split('.')[0]) >= 9
            ){


                a(event)


            }


            else{
                a()
            }


        }


    }
    appTestKeyword = 'root'   
    appTV = '' 
    /* */

    /*overlay*/

        // OverlayComponent events
        overlayLoadEvent$:Observable<Event>
        overlayLoadEventSubscription0:Subscription
        overlayLoadEventSubscription1:Subscription 
        overlayResizeEvent$:Observable<Event>
        overlayResizeEventSubscription0:Subscription
        overlayResizeEventSubscription1:Subscription
        overlayResizeEventSubscription2:Subscription
        overlayResizeEventSubscription3:Subscription
        overlayResizeEventSubscription4:Subscription
        overlayResizeEventSubscription5:Subscription
        overlayResizeEventSubscription6:Subscription
        overlayResizeEventSubscription7:Subscription
        overlayResizeEventSubscription8:Subscription
        overlayResizeEventSubscription9:Subscription        
        overlayClickEvent$:Observable<Event>        
        overlayClickEventSubscription0:Subscription
        //  
        
        // OverlayComponent Instances
        overlayMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
        overlayMyElementsArray: any[] = [];        
        overlayCO0:componentObject ={
            metadata:{
            },
            generator:(function(){
                return function *generator() {
                    var index = 8352;
                    while (true)
                    yield index++;
                }()
            })(),            
            quantity:[
                [
                    {
                        signature:'app',
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['o_v_e_r_l_a_y_App']
                        ], 
                        text:[
                                []
                        ],
                        symbol:['&#8352'],
                        metadata:{
                            mouseover:[
                                [],
                                [],
                                []
                            ],
                            mouseout:[
                                [],
                                [],
                                []
                            ]                            
                        },
                        ngCss:[
                            [
                                {
                                    
                                    top:'0px',
                                    width:'100%',
                                    'z-index':'1'
                                }
                            ]                         
                        ],                   
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ]
                    }                    
                ],
                [
                    {
                            signature:'containing',
                            quantity:[[3]],
                            bool:[['div']], 
                            val:[
                                ['o_v_e_r_l_a_y_Board'],
                            ], 
                            text:[
                                [],
                            ],
                            symbol:[['&#8353']],
                            metadata:{                                                              
                            },
                            ngCss:[
                                [
                                    {
                                        position:'fixed',
                                        height:'750px',
                                        width:'100%',
                                        'z-index':'1',
                                        'background-color':'rgb(173,216,230)',
                                        top:'0px'
                                    }
                                ]                    
                            ],                 
                            extras:[
                                {},
                                {
                                    bool:'false'
                                }                         
                            ]
                    },                                                                                                                                       
                ]
            ],       
        };         
        overlayCO0init:void= ((a)=> {
            for(let i = 0; i !== a.overlayCO0.quantity.length; i++){
                for(let j = 0; j !== a.overlayCO0.quantity[i].length; j++){
                    a.overlayCO0.quantity[i][j].ngCssDefault = JSON.parse(   JSON.stringify(   a.overlayCO0.quantity[i][j].ngCss   )   )
                }                    
            }
        })(this)
        //

    /* */

    /*panel */

        // panelComponent concept metadata 
        panelList:Array<any>
        panelStateAbbrev:Array<any>
        panelListGet:Subscription = this.http.post<any>("http://localhost:3001/env/",'testing123')
        .pipe(
            tap((a:any)=> {
                console.log('http success!')
                return a
            }),  // return the string instead
            catchError(
                ((operation = 'operation', result?: any)=>{
                return (error: any): Observable<any> => {

                // TODO: send the error to remote logging infrastructure
                // console.error(error); // log to console instead
            
                // TODO: better job of transforming error for user consumption
                // console.log(`${operation} failed: ${error.message}`);
                console.log('could not retrieve states')
            
                // Let the app keep running by returning an empty result.
                return of([]);
                }
            })('getStates', [])),
        ).subscribe((a:any)=>{
            console.log(a)
            this.panelList = a.panelList
            this.panelStateAbbrev = a.abbrev
        })
         
        //

        // PanelComponent events
        panelLoadEvent$:Observable<Event>
        panelLoadEventSubscription0:Subscription
        panelLoadEventSubscription1:Subscription 
        panelResizeEvent$:Observable<Event>
        panelResizeEventSubscription0:Subscription
        panelResizeEventSubscription1:Subscription
        panelResizeEventSubscription2:Subscription
        panelResizeEventSubscription3:Subscription
        panelResizeEventSubscription4:Subscription
        panelResizeEventSubscription5:Subscription
        panelResizeEventSubscription6:Subscription
        panelResizeEventSubscription7:Subscription
        panelResizeEventSubscription8:Subscription
        panelResizeEventSubscription9:Subscription        
        panelClickEvent$:Observable<Event>        
        panelClickEventSubscription0:Subscription
        panelClickEventSubscription1:Subscription
        panelClickEventSubscription2:Subscription
        panelClickEventSubscription3:Subscription
        panelClickEventSubscription4:Subscription
        panelClickEventSubscription5:Subscription
        panelClickEventSubscription6:Subscription
        panelClickEventSubscription7:Subscription
        panelClickEventSubscription8:Subscription
        panelClickEventSubscription9:Subscription
        panelClickEventSubscription10:Subscription
        panelClickEventSubscription11:Subscription
        panelClickEventSubscription12:Subscription
        panelClickEventSubscription13:Subscription
        panelClickEventSubscription14:Subscription
        panelClickEventSubscription15:Subscription
        panelClickEventSubscription16:Subscription
        panelClickEventSubscription17:Subscription
        panelClickEventSubscription18:Subscription
        panelClickEventSubscription19:Subscription
        panelClickEventSubscription20:Subscription
        panelClickEventSubscription21:Subscription  
        panelInputEvent$:Observable<Event> 
        panelInputEventSubscription0:Subscription       
        // 


  

        // PanelComponent Instances
        panelMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
        panelMyElementsArray: any[] = [];        
        panelCO0:componentObject ={ //'&#8393'
            metadata:{
            },
            generator:(function(){
                return function *generator() {
                    var index = 8352;
                    while (true)
                    yield index++;
                }()
            })(),            
            quantity:[
                [
                    {
                        signature:'app',
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['p_a_n_e_l_App']
                        ], 
                        text:[
                                []
                        ],
                        symbol:[['&#8352']],
                        metadata:{
                            mouseover:[
                                [],
                                [],
                                []
                            ],
                            mouseout:[
                                [],
                                [],
                                []
                            ]                            
                        },
                        ngCss:[
                            [
                                {
                                    
                                    top:'0px',
                                    width:'100%',
                                    'z-index':'1'
                                }
                            ]                         
                        ],                  
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ]
                    }                    
                ],
                [
                    {
                            signature:'containing',
                            quantity:[[3]],
                            bool:[['div']], 
                            val:[
                                ['p_a_n_e_l_Board'],
                            ], 
                            text:[
                                [],
                            ],
                            symbol:[['&#8353']],
                            metadata:{                                                              
                            },
                            ngCss:[
                                [
                                    {
                                        
                                        height:'500px',
                                        width:'800px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 255, 255)',
                                        // 'background-color':'rgb(255, 230, 255)', tertiary
                                        // 'background-color':'rgb(42,52,61)', secondary
                                        top:'50px',
                                        left:'200px',
                                        // border:'2px solid black',
                                        // 'border-radius': (
                                        //     window.Modernizr.borderradius ? '8px 8px 8px 8px' : null
                                        //  )
                                    }                                    
                                ]                    
                            ],                  
                            extras:[
                                [
                                    {}
                                ],
                                [],
                                []                       
                            ]
                    },                     
                    ...Array.from(Array(1),()=> {
                        return {
                            signature:'heading',
                            quantity:[[],[3],[3]],
                            bool:[[],['h1'],['div']], 
                            val:[
                                [],
                                [
                                    'p_a_n_e_l_Title',                              
                                ],
                                [
                                    'p_a_n_e_l_TitleButton'
                                ]
                            ], 
                            text:[
                                [],
                                [
                                    "COVID-19 App"
                                ],
                                []
                            ],
                            symbol:[[],['&#8354'],['&#8355']],                            
                            metadata:{
                                mouseover:[
                                    [],
                                    [],
                                    [
                                        {
                                            fn:null,
                                            
                                        }, 
                                        {
                                            fn:null,
                                            
                                        }, 
                                        {
                                            fn:null,
                                            
                                        },                                                                                                                          
                                    ]
                                ],
                                mouseout:[
                                    [],
                                    [],
                                    [
                                        {
                                            fn:null,
                                            
                                        }, 
                                        {
                                            fn:null,
                                            
                                        }, 
                                        {
                                            fn:null,
                                            
                                        },                                                                                                                          
                                    ]
                                ],
                                video:[
                                    [],
                                    [],
                                    [
                                        'assets/media/zoom_0.mp4'
                                    ]
                                ]                                
                            },
                            ngCss:[
                                [],
                                [
                                    {
                                        
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'490.5px',
                                        top:'50px'
        
                                    }                                                                                                                                                                                                                                                        
                                ],
                                [
                                    {
                                        
                                        height:'50px',
                                        width:'250px',
                                        left:'470.5px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 192, 203)',
                                        top:'67px',
                                        border:'1px solid grey',
                                        'border-radius': (
                                            window.Modernizr.borderradius ? '60px 60px 60px 60px' : null
                                        ),                                        
                                    }                                                                       
                                ]                    
                            ],      
                            extras:[
                                [],
                                [],
                                [
                                    ...Array.from(Array(0),()=> { return 
                                        {}
                                    }),  
                                ]                      
                            ]
                    }}),
                    ...Array.from(Array(1),()=> {
                        return {
                            signature:'greetings',
                            quantity:[[],Array.from(Array(2),()=> { return 3}),Array.from(Array(1),()=> { return 3})],
                            bool:[[],[...Array.from(Array(1),()=> { return 'h1'}), ...Array.from(Array(1),()=> { return 'h2'})],
                            [...Array.from(Array(1),()=> { return 'button'}) ]], 
                            val:[
                                [],
                                [
                                    'p_a_n_e_l_Title',
                                    ...Array.from(Array(1),()=> { return 'p_a_n_e_l_ButtonText'}),                           
                                ],
                                [
                                    ...Array.from(Array(2),()=> { return 'p_a_n_e_l_Button'}),                                              
                                ]
                            ], 
                            text:[
                                [],
                                [
                                    "Welcome to the COVID-19 Tally",
                                    "Start"
                                ],
                                [
                                ]
                            ],
                            symbol:[
                                [],
                                ['&#8379','&#8380'],
                                ['&#8381']
                            ],                            
                            metadata:{
                                mouseover:[
                                    [],
                                    [],
                                    [
                                        ...Array.from(Array(1),()=> { return {
                                                fn:null,    
                                            }
                                        }),                                                                                                                           
                                    ]
                                ],
                                mouseout:[
                                    [],
                                    [],
                                    [
                                        ...Array.from(Array(1),()=> { return {
                                            fn:null,    
                                        }
                                    }),                                                                                                                           
                                    ]
                                ],
                                video:[
                                    [],
                                    [],
                                    []
                                ],
                                placeholder:[
                                    [],
                                    [   
                                        ...Array.from(Array(2),()=> { 
                                            return ''
                                        }),                                        
                                    ],
                                    []
                                ]                                
                            },
                            ngCss:[
                                [],
                                [
                                    {   
                                        'z-index':'3',
                                        'font-family':'Open Sans',
                                        'left':'363px',
                                        top:'162px',
                                        opacity:1,
                                        transition:'opacity .5s'
                                    },
                                    {   
                                        'z-index':'3',
                                        'font-family':'Open Sans',
                                        'left':'535px',
                                        top:'285px',
                                        'font-size':'33px',
                                        opacity:1,
                                        transition:'opacity .5s'                                     
                                    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                ],
                                [
                                    {
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'503px',
                                        'background-color': (
                                            window.Modernizr.rgba ? 'rgba(0,0,0,.1)' : 'grey'
                                        ),
                                        'height':'90px',
                                        width:'140px',
                                        top:'290px',
                                        'font-size':'90px',
                                        'text-align':'center',
                                        'border-radius': (
                                            window.Modernizr.borderradius ? '8px 8px 8px 8px' : null
                                        ),
                                        opacity:1,
                                        transition:'opacity .5s '                                       
                                    },                                     
                                ]                 
                            ],      
                            extras:[
                                [],
                                [],
                                [
                                    ...Array.from(Array(0),()=> { return 
                                        {}
                                    }),  
                                ]                      
                            ]
                    }}),                     
                    ...Array.from(Array(1),()=> {
                        return {
                            signature:'symptoms',
                            quantity:[[],Array.from(Array(12),()=> { return 3}),Array.from(Array(13),()=> { return 3})],
                            bool:[[],['h1',...Array.from(Array(11),()=> { return 'h2'}) ],[...Array.from(Array(12),()=> { return 'div'}),'button' ]], 
                            val:[
                                [],
                                [
                                    'p_a_n_e_l_Title',
                                    ...Array.from(Array(10),()=> { return 'p_a_n_e_l_Option'}),
                                    ...Array.from(Array(10),()=> { return 'p_a_n_e_l_Next'})                           
                                ],
                                [
                                    ...Array.from(Array(2),()=> { return 'p_a_n_e_l_Cross'}),
                                    ...Array.from(Array(10),()=> { return 'p_a_n_e_l_CircleOption'}), 
                                    ...Array.from(Array(1),()=> { return 'p_a_n_e_l_NextButton'})                                               
                                ]
                            ], 
                            text:[
                                [],
                                [
                                    "Symptoms",
                                    "Fever",
                                    "Tiredness",
                                    "Dry Cough",
                                    "Aches",
                                    "Nasal Congestion",
                                    "Runny Nose",
                                    "Sore Throat",
                                    "Diarrhea",
                                    "Difficulty Breathing ",
                                    "Gradual Symptoms",
                                    "Next"
                                ],
                                []
                            ],
                            symbol:[
                                [],
                                ['&#8356','&#8357','&#8358','&#8359','&#8360','&#8361','&#8362','&#8363','&#8364','&#8365','&#8391','&#8392'],
                                ['&#8366','&#8367','&#8368','&#8369','&#8370','&#8371','&#8372','&#8373','&#8374','&#8375','&#8376','&#8377','&#8378']
                            ],                            
                            metadata:{
                                mouseover:[
                                    [],
                                    [],
                                    [
                                        ...Array.from(Array(13),()=> { return {
                                                fn:null,    
                                            }
                                        }),                                                                                                                           
                                    ]
                                ],
                                mouseout:[
                                    [],
                                    [],
                                    [
                                        ...Array.from(Array(13),()=> { return {
                                            fn:null,    
                                        }
                                    }),                                                                                                                           
                                    ]
                                ],
                                click:[
                                    [],
                                    [],
                                    [
                                        ...Array.from(Array(13),()=> { return {
                                            fn:null,    
                                        }
                                    }),                                                                                                                           
                                    ]
                                ],                                
                                video:[
                                    [],
                                    [],
                                    []
                                ]                                
                            },
                            ngCss:[
                                [],
                                [
                                    {
                                        
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'490.5px',
                                        opacity:0,
                                        transition: 'opacity 2s',
                                        top:'130px'
                                    },
                                    {
                                        
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'290.5px',
                                        opacity:0,
                                        transition: 'opacity 2s',
                                        top:'210px'
                                    },
                                    {
                                        
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'457.5px',
                                        opacity:0,
                                        transition: 'opacity 2s',
                                        top:'210px'
                                    },
                                    {
                                        
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'663.5px',
                                        opacity:0,
                                        transition: 'opacity 2s',
                                        top:'210px'
                                    },
                                    {
                                        
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'873.5px',
                                        opacity:0,
                                        transition: 'opacity 2s',
                                        top:'210px'
                                    },
                                    {
                                        
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'253.5px',
                                        opacity:0,
                                        transition: 'opacity 2s',
                                        top:'300px'
                                    },
                                    {
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'523.5px',
                                        opacity:0,
                                        transition: 'opacity 2s',
                                        top:'300px'
                                    },
                                    {
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'753.5px',
                                        opacity:0,
                                        transition: 'opacity 2s',
                                        top:'300px'
                                    },
                                    {
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'253.5px',
                                        opacity:0,
                                        transition: 'opacity 2s',
                                        top:'380px'
                                    },
                                    {
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'433.5px',
                                        opacity:0,
                                        transition: 'opacity 2s',
                                        top:'380px'
                                        
                                    },
                                    {
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'713.5px',
                                        opacity:0,
                                        top:'380px',
                                        transition: 'opacity 2s'
                                    },
                                    {
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'846.5px',
                                        opacity:0,
                                        'font-size':'32px',
                                        top:'439px',
                                        transition: 'opacity 2s',
                                        position:'fixed'
                                    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                                ],
                                [
                                    {   
                                        height:'90px',
                                        width:'20px',
                                        left:'300.5px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 0, 0)',
                                        top:'117px'
                                    },
                                    {
                                        height:'20px',
                                        width:'90px',
                                        left:'265.5px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 0, 0)',
                                        top:'152px',                                    
                                    },  
                                    {
                                        display:'none',
                                        height:'30px',
                                        width:'90px',
                                        left:'275.5px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 192, 203)',
                                        top:'230px',      
                                        transition: 'opacity 2s',                              
                                    },  
                                    {
                                        display:'none',
                                        height:'30px',
                                        width:'130px',
                                        left:'445.5px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 192, 203)',
                                        top:'230px',    
                                        transition: 'opacity 2s',                                
                                    },
                                    {
                                        display:'none',
                                        height:'30px',
                                        width:'150px',
                                        left:'645.5px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 192, 203)',
                                        top:'230px',    
                                        transition: 'opacity 2s',                                
                                    }, 
                                    {
                                        display:'none',
                                        height:'30px',
                                        width:'80px',
                                        left:'865.5px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 192, 203)',
                                        top:'230px',  
                                        transition: 'opacity 2s',                                  
                                    },
                                    {
                                        display:'none',
                                        height:'30px',
                                        width:'220px',
                                        left:'240.5px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 192, 203)',
                                        top:'319px',  
                                        transition: 'opacity 2s',                                  
                                    },
                                    {
                                        display:'none',
                                        height:'30px',
                                        width:'170px',
                                        left:'505px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 192, 203)',
                                        top:'319px',  
                                        transition: 'opacity 2s',                                  
                                    },
                                    {
                                        display:'none',
                                        height:'30px',
                                        width:'170px',
                                        left:'735px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 192, 203)',
                                        top:'319px',    
                                        transition: 'opacity 2s',                                
                                    },
                                    {
                                        display:'none',
                                        height:'30px',
                                        width:'130px',
                                        left:'235px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 192, 203)',
                                        top:'400px',     
                                        transition: 'opacity 2s',                               
                                    },     
                                    {
                                        display:'none',
                                        height:'30px',
                                        width:'250px',
                                        left:'415px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 192, 203)',
                                        top:'400px',   
                                        transition: 'opacity 2s',                                 
                                    }, 
                                    {
                                        display:'none',
                                        height:'30px',
                                        width:'250px',
                                        left:'695px',
                                        'z-index':'1',
                                        'background-color':'rgb(255, 192, 203)',
                                        top:'400px',     
                                        transition: 'opacity 2s',                               
                                    },   
                                    {
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'815px',
                                        'background-color': (
                                            window.Modernizr.rgba ? 'rgba(0,0,0,.1)' : 'grey'
                                        ),
                                        'height':'90px',
                                        width:'140px',
                                        top:'445px',
                                        'font-size':'90px',
                                        'text-align':'center',
                                        'border-radius': (
                                            window.Modernizr.borderradius ? '8px 8px 8px 8px' : null
                                        ),
                                        display:'none',
                                        opacity:0,
                                        transition:'opacity .5s',
                                        position:'fixed'                                       
                                    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                ]                    
                            ],      
                            extras:[
                                [],
                                [
                                    ...Array.from(Array(12),()=> { return {
                                            chosen:'false',    
                                        }
                                    }),                                    
                                ],
                                []                
                            ]
                    }}),   
                    ...Array.from(Array(1),()=> {
                        return {
                            signature:'state',
                            quantity:[[],Array.from(Array(3),()=> { return 3}),[]],
                            bool:[[],[...Array.from(Array(2),()=> { return 'h1'}), ...Array.from(Array(1),()=> { return 'i'})],[]], 
                            val:[
                                [],
                                [
                                    'p_a_n_e_l_Title',
                                    ...Array.from(Array(1),()=> { return 'p_a_n_e_l_LocationTitle'}), 
                                    ...Array.from(Array(1),()=> { return 'p_a_n_e_l_Input'})                           
                                ],
                                [
                                    // ...Array.from(Array(2),()=> { return 'p_a_n_e_l_Cross'}),
                                    // ...Array.from(Array(11),()=> { return 'p_a_n_e_l_CircleOption'})                                               
                                ]
                            ], 
                            text:[
                                [],
                                [
                                    "Location",
                                    "State",
                                    "",
                                ],
                                []
                            ],
                            symbol:[
                                [],
                                ['&#8382','&#8383','&#8384']
                            ],                            
                            metadata:{
                                mouseover:[
                                    [],
                                    [
                                        ...Array.from(Array(3),()=> { return {
                                            fn:null,    
                                            }
                                        }),                                        
                                    ],
                                    [
                                        ...Array.from(Array(2),()=> { return {
                                                fn:null,    
                                            }
                                        }),                                                                                                                           
                                    ]
                                ],
                                mouseout:[
                                    [],
                                    [
                                        ...Array.from(Array(3),()=> { return {
                                            fn:null,    
                                            }
                                        }),                                         
                                    ],
                                    [
                                        ...Array.from(Array(2),()=> { return {
                                            fn:null,    
                                        }
                                    }),                                                                                                                           
                                    ]
                                ],
                                click:[
                                    [],
                                    [
                                        ...Array.from(Array(3),()=> { return {
                                            fn:null,    
                                            }
                                        }),                                         
                                    ],
                                    [
                                        ...Array.from(Array(2),()=> { return {
                                            fn:null,    
                                        }
                                    }),                                                                                                                           
                                    ]
                                ],                                
                                video:[
                                    [],
                                    [],
                                    []
                                ],
                                placeholder:[
                                    [],
                                    [   
                                        ...Array.from(Array(2),()=> { 
                                            return ''
                                        }),                                        
                                    ],
                                    []
                                ],
                                type:[
                                    [],
                                    [   
                                        '',
                                        '',
                                       'text'                                     
                                    ],
                                    []
                                ],                                
                                attrMinlength:[
                                    [],
                                    [   
                                        ...Array.from(Array(3),()=> { 
                                            return 2
                                        }),                                        
                                    ],
                                    []
                                ],
                                attrMaxlength:[
                                    [],
                                    [   
                                        ...Array.from(Array(3),()=> { 
                                            return 2
                                        }),                                        
                                    ],
                                    []
                                ],
                                router:[
                                    [],
                                    [
                                        ...Array.from(Array(3),()=> { 
                                            return {
                                                link:null
                                            }
                                        }),                                          
                                    ],
                                    []
                                ]                                                                                                 
                            },
                            ngCss:[
                                [],
                                [
                                    {
                                        
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'490.5px',
                                        top:'130px',
                                        opacity:0,
                                        transition:'opacity 1s'
                                    },
                                    {
                                        
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'535px',
                                        top:'210px',
                                        opacity:0,
                                        transition:'opacity 1s'
                                    },
                                    {
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'503px',
                                        'background-color': (
                                            window.Modernizr.rgba ? 'rgba(0,0,0,.1)' : 'grey'
                                        ),
                                        'height':'90px',
                                        width:'140px',
                                        top:'290px',
                                        'font-size':'90px',
                                        'text-align':'center',
                                        opacity:0,
                                        transition:'opacity 1s',
                                        display:'none'
                                    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                                ],
                                []                 
                            ],      
                            extras:[
                                {},
                                {
                                    bool:'false'
                                }                         
                            ]
                    }}), 
                    ...Array.from(Array(1),()=> {
                        return {
                            signature:'city',
                            quantity:[[],Array.from(Array(3),()=> { return 3}),Array.from(Array(0),()=> { return 3})],
                            bool:[[],[...Array.from(Array(2),()=> { return 'h1'}), ...Array.from(Array(1),()=> { return 'i'})],
                            [...Array.from(Array(13),()=> { return 'div'}) ]], 
                            val:[
                                [],
                                [
                                    'p_a_n_e_l_Title',
                                    ...Array.from(Array(1),()=> { return 'p_a_n_e_l_LocationTitle'}), 
                                    ...Array.from(Array(1),()=> { return 'p_a_n_e_l_Input'})                           
                                ],
                                [
                                    // ...Array.from(Array(2),()=> { return 'p_a_n_e_l_Cross'}),
                                    // ...Array.from(Array(11),()=> { return 'p_a_n_e_l_CircleOption'})                                               
                                ]
                            ], 
                            text:[
                                [],
                                [
                                    "Location",
                                    "City",
                                ],
                                []
                            ],
                            symbol:[
                                [],
                                ['&#8385','&#8386','&#8387']
                            ],                            
                            metadata:{
                                mouseover:[
                                    [],
                                    [],
                                    [
                                        ...Array.from(Array(2),()=> { return {
                                                fn:null,    
                                            }
                                        }),                                                                                                                           
                                    ]
                                ],
                                mouseout:[
                                    [],
                                    [],
                                    [
                                        ...Array.from(Array(2),()=> { return {
                                            fn:null,    
                                        }
                                    }),                                                                                                                           
                                    ]
                                ],
                                video:[
                                    [],
                                    [],
                                    []
                                ],
                                placeholder:[
                                    [],
                                    [   
                                        ...Array.from(Array(2),()=> { 
                                            return ''
                                        }),                                        
                                    ],
                                    []
                                ],
                                type:[
                                    [],
                                    [   
                                        '',
                                        '',
                                       'text'                                     
                                    ],
                                    []
                                ],                                
                                attrMinlength:[
                                    [],
                                    [   
                                        ...Array.from(Array(3),()=> { 
                                            return ''
                                        }),                                        
                                    ],
                                    []
                                ],
                                attrMaxlength:[
                                    [],
                                    [   
                                        ...Array.from(Array(3),()=> { 
                                            return ''
                                        }),                                        
                                    ],
                                    []
                                ]                                                                  
                            },
                            ngCss:[
                                [],
                                [
                                    {
                                        
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'490.5px',
                                        top:'130px',
                                        opacity:0,
                                        transition:'opacity 1s',                                        
                                    },
                                    {
                                        
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'535px',
                                        top:'210px',
                                        opacity:0,
                                        transition:'opacity 1s',                                        
                                    },
                                    {
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'495px',
                                        'background-color': (
                                            window.Modernizr.rgba ? 'rgba(0,0,0,.1)' : 'grey'
                                        ),
                                        'height':'30px',
                                        width:'140px',
                                        top:'290px',
                                        'font-size':'30px',
                                        'text-align':'center',
                                        opacity:0,
                                        transition:'opacity 1s',
                                        display:'none'                                        
                                    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                                ],
                                []                 
                            ],      
                            extras:[
                                {},
                                {
                                    bool:'false'
                                }                         
                            ]
                    }}),   
                    ...Array.from(Array(1),()=> {
                        return {
                            signature:'Farewell',
                            quantity:[[],Array.from(Array(2),()=> { return 3}),Array.from(Array(1),()=> { return 3})],
                            bool:[[],[...Array.from(Array(1),()=> { return 'h1'}), ...Array.from(Array(1),()=> { return 'h2'})],
                            [...Array.from(Array(1),()=> { return 'button'}) ]], 
                            val:[
                                [],
                                [
                                    'p_a_n_e_l_Title',
                                    ...Array.from(Array(1),()=> { return 'p_a_n_e_l_ButtonText'}),                           
                                ],
                                [
                                    ...Array.from(Array(2),()=> { return 'p_a_n_e_l_Button'}),                                              
                                ]
                            ], 
                            text:[
                                [],
                                [
                                    "Thank you for participating in the COVID-19 Tally",
                                    "End"
                                ],
                                [
                                ]
                            ],
                            symbol:[
                                [],
                                ['&#8388','&#8389'],
                                ['&#8390']
                            ],                            
                            metadata:{
                                mouseover:[
                                    [],
                                    [],
                                    [
                                        ...Array.from(Array(1),()=> { return {
                                                fn:null,    
                                            }
                                        }),                                                                                                                           
                                    ]
                                ],
                                mouseout:[
                                    [],
                                    [],
                                    [
                                        ...Array.from(Array(1),()=> { return {
                                            fn:null,    
                                        }
                                    }),                                                                                                                           
                                    ]
                                ],
                                video:[
                                    [],
                                    [],
                                    []
                                ],
                                placeholder:[
                                    [],
                                    [   
                                        ...Array.from(Array(2),()=> { 
                                            return ''
                                        }),                                        
                                    ],
                                    []
                                ]                                
                            },
                            ngCss:[
                                [],
                                [
                                    {
                                        
                                        'z-index':'1',
                                        'font-family':'Open Sans',
                                        'left':'240px',
                                        top:'192px',
                                        opacity:0,
                                        transition:'opacity 1s',                                          
                                    },
                                    {
                                        
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'540px',
                                        top:'335px',
                                        'font-size':'33px',
                                        opacity:0,
                                        transition:'opacity 1s',                                          
                                    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                ],
                                [
                                    {
                                        'z-index':'2',
                                        'font-family':'Open Sans',
                                        'left':'503px',
                                        'background-color': (
                                            window.Modernizr.rgba ? 'rgba(0,0,0,.1)' : 'grey'
                                        ),
                                        'height':'90px',
                                        width:'140px',
                                        top:'340px',
                                        'font-size':'90px',
                                        'text-align':'center',
                                        display:'none',
                                        'border-radius': (
                                            window.Modernizr.borderradius ? '8px 8px 8px 8px' : null
                                        ),
                                        opacity:0,
                                        transition:'opacity 1s',  
                                    },                                     
                                ]                 
                            ],      
                            extras:[
                                [],
                                [],
                                []                        
                            ]
                    }}),                                                                                                                                                                                                
                ]
            ],       
        };         
        panelCO0init:void= ((a)=> {
            for(let i = 0; i !== a.panelCO0.quantity.length; i++){
                for(let j = 0; j !== a.panelCO0.quantity[i].length; j++){
                    a.panelCO0.quantity[i][j].ngCssDefault = JSON.parse(   JSON.stringify(   a.panelCO0.quantity[i][j].ngCss   )   )
                }                    
            }
        })(this)       
        //        
    /* */

}
