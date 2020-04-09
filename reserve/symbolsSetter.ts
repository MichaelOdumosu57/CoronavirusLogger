// if you want to use setter for symbols but now if you insert an element in the middle u lose yr symbol identifer 

panelCO0:componentObject ={ 
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
                set symbols(a) {
                    this.symbol.push(
                        Array.from(Array(1),()=> {
                            return '&#'+this.CO.generator.next().value 
                        })
                    )
                },
                symbol:[],
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
                            position:'absolute',
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
                    set symbols(a) {
                        this.symbol.push(
                            Array.from(Array(1),()=> {
                                return '&#'+this.CO.generator.next().value 
                            })
                        )
                    },
                    symbol:[],
                    metadata:{                                                              
                    },
                    ngCss:[
                        [
                            {
                                position:'absolute',
                                height:'500px',
                                width:'800px',
                                'z-index':'1',
                                'background-color':'rgb(255, 230, 255)',
                                // 'background-color':'rgb(42,52,61)', secondary
                                top:'50px',
                                left:'200px',
                                border:'2px solid black',
                                'border-radius': (
                                    window.Modernizr.borderradius ? '8px 8px 8px 8px' : null
                                 )
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
                            "COVID-19 App",
                            'Women',
                            'Fashion',
                            'Recipies',
                            'Ingredients',
                            'Appliances',                                    
                            'Trends',
                            'Shopping'
                        ],
                        []
                    ],
                    set symbols(a) {
                        this.symbol.push([])                           
                        this.symbol.push(
                            Array.from(Array(1),()=> {
                                return '&#'+this.CO.generator.next().value 
                            })
                        )  
                        this.symbol.push(
                            Array.from(Array(1),()=> {
                                return '&#'+this.CO.generator.next().value 
                            })
                        )                                                              
                    },
                    symbol:[],                            
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
                                position:'absolute',
                                'z-index':'2',
                                'font-family':'Open Sans',
                                'left':'490.5px',
                                top:'50px'

                            }                                                                                                                                                                                                                                                        
                        ],
                        [
                            {
                                position:'absolute',
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
                        {},
                        {
                            bool:'false'
                        }                         
                    ]
            }}),
            ...Array.from(Array(1),()=> {
                return {
                    signature:'symptoms',
                    quantity:[[],[3,3],Array.from(Array(2),()=> { return 3 })],
                    bool:[[],['h1',...Array.from(Array(1),()=> { return 'h2'}) ],[...Array.from(Array(1),()=> { return 'div'}) ]], 
                    val:[
                        [],
                        [
                            'p_a_n_e_l_Title',
                            'p_a_n_e_l_Option'                              
                        ],
                        [
                            'p_a_n_e_l_Circle',
                            'p_a_n_e_l_Circle'
                        ]
                    ], 
                    text:[
                        [],
                        [
                            "Symptoms",
                            "Fever"
                        ],
                        []
                    ],
                    set symbols(a) {
                        this.symbol.push([])                           
                        this.symbol.push(
                            Array.from(Array(2),()=> {
                                return '&#'+this.CO.generator.next().value 
                            })
                        )  
                        this.symbol.push(
                            Array.from(Array(2),()=> {
                                return '&#'+this.CO.generator.next().value 
                            })
                        )                                                              
                    },
                    symbol:[],                            
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
                                position:'absolute',
                                'z-index':'2',
                                'font-family':'Open Sans',
                                'left':'490.5px',
                                top:'130px'
                            },
                            {
                                position:'absolute',
                                'z-index':'2',
                                'font-family':'Open Sans',
                                'left':'290.5px',
                                top:'210px'
                            }                                                                                                                                                                                                                                                                                                 
                        ],
                        [
                            {
                                position:'absolute',
                                height:'50px',
                                width:'250px',
                                left:'445.5px',
                                'z-index':'1',
                                'background-color':'rgb(255, 192, 203)',
                                top:'147px',
                                border:'1px solid grey',
                                'border-radius': (
                                    window.Modernizr.borderradius ? '60px 60px 60px 60px' : null
                                ),                                        
                            },
                            {
                                position:'absolute',
                                height:'50px',
                                width:'250px',
                                left:'445.5px',
                                'z-index':'1',
                                'background-color':'rgb(255, 192, 203)',
                                top:'187px',
                                border:'1px solid grey',
                                'border-radius': (
                                    window.Modernizr.borderradius ? '60px 60px 60px 60px' : null
                                ),                                        
                            }                                                                                                               
                        ]                    
                    ],      
                    extras:[
                        {},
                        {
                            bool:'false'
                        }                         
                    ]
            }}),                                                                                                                                      
        ]
    ],       
}; 

panelCO1init:void= ((a)=> {
    for(let i = 0; i !== a.panelCO1.quantity.length; i++){
        for(let j = 0; j !== a.panelCO1.quantity[i].length; j++){
            a.panelCO1.quantity[i][j].CO = a.panelCO1
            a.panelCO1.quantity[i][j].symbols = 'a'
            a.panelCO1.quantity[i][j].ngCssDefault =  a.panelCO1.quantity[i][j].ngCss
        }                    
    }
})(this)       