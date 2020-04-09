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
    appEventListener:Function = (a)=>{
        

        if(   typeof a === 'function'   ){


            a()


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
        panelList:Array<any> = [
            [
                ['AL'],
                ["Abbeville","Adamsville","Addison","Akron","Alabaster","Albertville","Alexander City","Aliceville","Allgood","Altoona","Andalusia","Anderson","Anniston","Arab","Ardmore","Argo","Ariton","Arley","Ashford","Ashland","Ashville","Athens","Atmore","Attalla","Auburn","Autaugaville","Avon","Babbie","Baileyton","Bakerhill","Banks","Bay Minette","Bayou La Batre","Bear Creek","Beatrice","Beaverton","Belk","Benton","Berry","Bessemer","Billingsley","Birmingham","Black","Blountsville","Blue Springs","Boaz","Boligee","Bon Air","Brantley","Brent","Brewton","Bridgeport","Brighton","Brilliant","Brookside","Brookwood","Brundidge","Butler","Calera","Camden","Camp Hill","Carbon Hill","Cardiff","Carolina","Carrollton","Castleberry","Cedar Bluff","Center Point","Centre","Centreville","Chatom","Chelsea","Cherokee","Chickasaw","Childersburg","Citronelle","Clanton","Clay","Clayhatchee","Clayton","Cleveland","Clio","Coaling","Coffee Springs","Coffeeville","Coker","Collinsville","Colony","Columbia","Columbiana","Coosada","Cordova","Cottonwood","County Line","Courtland","Cowarts","Creola","Crossville","Cuba","Cullman","Cusseta","Dadeville","Daleville","Daphne","Dauphin Island","Daviston","Dayton","Deatsville","Decatur","Demopolis","Detroit","Dodge City","Dora","Dothan","Double Springs","Douglas","Dozier","Dutton","East Brewton","Eclectic","Edwardsville","Elba","Elberta","Eldridge","Elkmont","Elmore","Emelle","Enterprise","Epes","Ethelsville","Eufaula","Eutaw","Eva","Evergreen","Excel","Fairfield","Fairhope","Fairview","Falkville","Faunsdale","Fayette","Five Points","Flomaton","Florala","Florence","Foley","Forkland","Fort Deposit","Fort Payne","Franklin","Frisco City","Fruithurst","Fulton","Fultondale","Fyffe","Gadsden","Gainesville","Gantt","Garden City","Gardendale","Gaylesville","Geiger","Geneva","Georgiana","Geraldine","Gilbertown","Glen Allen","Glencoe","Glenwood","Goldville","Good Hope","Goodwater","Gordo","Gordon","Gordonville","Goshen","Grant","Graysville","Greensboro","Greenville","Grimes","Grove Hill","Guin","Gulf Shores","Guntersville","Gurley","Gu-Win","Hackleburg","Haleburg","Haleyville","Hamilton","Hammondville","Hanceville","Harpersville","Hartford","Hartselle","Hayden","Hayneville","Headland","Heath","Heflin","Helena","Henagar","Highland Lake","Hillsboro","Hobson City","Hodges","Hokes Bluff","Holly Pond","Hollywood","Homewood","Hoover","Horn Hill","Hueytown","Huntsville","Hurtsboro","Hytop","Ider","Indian Springs Village","Irondale","Jackson","Jackson's Gap","Jacksonville","Jasper","Jemison","Kansas","Kellyton","Kennedy","Killen","Kimberly","Kinsey","Kinston","LaFayette","Lake View","Lakeview","Lanett","Langston","Leeds","Leesburg","Leighton","Lester","Level Plains","Lexington","Libertyville","Lincoln","Linden","Lineville","Lipscomb","Lisman","Littleville","Livingston","Loachapoka","Lockhart","Locust Fork","Louisville","Lowndesboro","Loxley","Luverne","Lynn","Madison","Madrid","Magnolia Springs","Malvern","Maplesville","Margaret","Marion","Maytown","McIntosh","McKenzie","McMullen","Memphis","Mentone","Midfield","Midland City","Midway","Millbrook","Millport","Millry","Mobile","Monroeville","Montevallo","Montgomery","Moody","Mooresville","Morris","Mosses","Moulton","Moundville","Mount Vernon","Mountain Brook","Mulga","Munford","Muscle Shoals","Myrtlewood","Napier Field","Natural Bridge","Nauvoo","Nectar","Needham","New Brockton","New Hope","New Site","Newbern","Newton","Newville","North Courtland","North Johns","Northport","Notasulga","Oak Grove","Oak Hill","Oakman","Odenville","Ohatchee","Oneonta","Onycha","Opelika","Opp","Orange Beach","Orrville","Owens Cross Roads","Oxford","Ozark","Paint Rock","Parrish","Pelham","Pell City","Pennington","Perdido Beach","Petrey","Phenix City","Phil Campbell","Pickensville","Piedmont","Pike Road","Pinckard","Pine Apple","Pine Hill","Pine Ridge","Pinson","Pisgah","Pleasant Grove","Pleasant Groves","Pollard","Powell","Prattville","Priceville","Prichard","Providence","Ragland","Rainbow City","Rainsville","Ranburne","Red Bay","Red Level","Reece City","Reform","Rehobeth","Repton","Ridgeville","River Falls","Riverside","Riverview","Roanoke","Robertsdale","Rockford","Rogersville","Rosa","Russellville","Rutledge","St. Florian","Samson","Sand Rock","Sanford","Saraland","Sardis City","Satsuma","Scottsboro","Section","Selma","Sheffield","Shiloh","Shorter","Silas","Silverhill","Sipsey","Skyline","Slocomb","Smiths Station","Snead","Somerville","South Vinemont","Southside","Spanish Fort","Springville","Steele","Stevenson","Sulligent","Sumiton","Summerdale","Susan Moore","Sweet Water","Sylacauga","Sylvan Springs","Sylvania","Talladega Springs","Talladega","Tallassee","Tarrant","Taylor","Thomaston","Thomasville","Thorsby","Town Creek","Toxey","Trafford","Triana","Trinity","Troy","Trussville","Tuscaloosa","Tuscumbia","Tuskegee","Twin","Union Grove","Union Springs","Union","Uniontown","Valley","Valley Grande","Valley Head","Vance","Vernon","Vestavia Hills","Vina","Vincent","Vredenburgh","Wadley","Waldo","Walnut Grove","Warrior","Waterloo","Waverly","Weaver","Webb","Wedowee","West Blocton","West Jefferson","West Point","Westover","Wetumpka","White Hall","Wilsonville","Wilton","Winfield","Woodland","Woodstock","Woodville","Yellow Bluff","York",],        
            ],
            [
                ['AK'],
                ["Adak","Akhiok","Akiak","Akutan","Alakanuk","Aleknagik","Allakaket","Ambler","Anaktuvuk Pass","Anchorage","Anderson","Angoon","Aniak","Anvik","Atka","Atqasuk","Bethel","Bettles","Brevig Mission","Buckland","Chefornak","Chevak","Chignik","Chuathbaluk","Clark's Point","Coffman Cove","Cold Bay","Cordova","Craig","Deering","Delta Junction","Dillingham","Diomede","Eagle","Edna Bay","Eek","Egegik","Ekwok","Elim","Emmonak","Fairbanks","False Pass","Fort Yukon","Galena","Gambell","Golovin","Goodnews Bay","Grayling","Gustavus","Holy Cross","Homer","Hoonah","Hooper Bay","Houston","Hughes","Huslia","Hydaburg","Juneau","Kachemak","Kake","Kaktovik","Kaltag","Kasaan","Kenai","Ketchikan","Kiana","King Cove","Kivalina","Klawock","Kobuk","Kodiak","Kotlik","Kotzebue","Koyuk","Koyukuk","Kupreanof","Kwethluk","Larsen Bay","Lower Kalskag","Manokotak","Marshall","McGrath","Mekoryuk","Mountain Village","Napakiak","Napaskiak","Nenana","New Stuyahok","Newhalen","Nightmute","Nikolai","Nome","Nondalton","Noorvik","North Pole","Nuiqsut","Nulato","Nunam Iqua","Nunapitchuk","Old Harbor","Ouzinkie","Palmer","Pelican","Pilot Point","Pilot Station","Platinum","Point Hope","Port Alexander","Port Heiden","Port Lions","Quinhagak","Ruby","Russian Mission","Saint Paul","Sand Point","Savoonga","Saxman","Scammon Bay","Selawik","Seldovia","Seward","Shageluk","Shaktoolik","Shishmaref","Shungnak","Sitka","Soldotna","St. George","St. Mary's","St. Michael","Stebbins","Tanana","Teller","Tenakee Springs","Thorne Bay","Togiak","Toksook Bay","Unalakleet","Unalaska","Upper Kalskag","Utqiaġvik","Valdez","Wainwright","Wales","Wasilla","Whale Pass","White Mountain","Whittier","Wrangell",]
            ],
            [
                ['AZ'],
                ["Apache Junction","Avondale","Benson","Bisbee","Buckeye","Bullhead City","Camp Verde","Carefree","Casa Grande","Cave Creek","Chandler","Chino Valley","Clarkdale","Clifton","Colorado City","Coolidge","Cottonwood","Dewey-Humboldt","Douglas","Duncan","Eagar","El Mirage","Eloy","Flagstaff","Florence","Fountain Hills","Fredonia","Gila Bend","Gilbert","Glendale","Globe","Goodyear","Guadalupe","Hayden","Holbrook","Huachuca City","Jerome","Kearny","Kingman","Lake Havasu City","Litchfield Park","Mammoth","Marana","Maricopa","Mesa","Miami","Nogales","Oro Valley","Page","Paradise Valley","Parker","Patagonia","Payson","Peoria","Phoenix","Pima","Pinetop-Lakeside","Prescott","Prescott Valley","Quartzsite","Queen Creek","Safford","Sahuarita","San Luis","Scottsdale","Sedona","Show Low","Sierra Vista","Snowflake","Somerton","South Tucson","Springerville","St. Johns","Star Valley","Superior","Surprise","Taylor","Tempe","Thatcher","Tolleson","Tombstone","Tucson","Tusayan","Wellton","Wickenburg","Willcox","Williams","Winkelman","Winslow","Youngtown","Yuma",]
            ],
            [
                ['AR'],
                ["Little Rock","Fort Smith","Fayetteville","Springdale","Jonesboro","North Little Rock","Conway","Rogers","Pine Bluff","Bentonville","Hot Springs","Benton","Texarkana","Sherwood","Jacksonville","Russellville","Bella Vista","West Memphis","Paragould","Cabot","Searcy","Van Buren","El Dorado","Maumelle","Bryant","Blytheville","Forrest City","Siloam Springs","Harrison","Hot Springs Village","Mountain Home","Marion","Helena-West Helena","Camden","Magnolia","Arkadelphia","Malvern","Batesville","Hope","Centerton","Monticello","Stuttgart","Clarksville","Greenwood","Wynne","Newport","Osceola","Lowell","Beebe","Trumann","Heber Springs","Morrilton","Pocahontas","De Queen","Warren","Farmington","Mena","White Hall","Crossett","Alma","Berryville","Walnut Ridge","Pea Ridge","Dardanelle","Ashdown","Dumas","Greenbrier","Cherokee Village","Barling","Nashville","Sheridan","Prairie Grove","Fordyce","Lonoke","McGehee","Marianna","Ward","Booneville","Haskell","Piggott","Vilonia","Ozark","Waldron","Gosnell","Paris","Corning","Johnson","Manila","Prescott","DeWitt","Brinkley","Gentry","Shannon Hills","Atkins","Alexander","Bald Knob","Hamburg","Pottsville","England","Hoxie","Green Forest","Mountain View","Elkins","Clinton","Little Flock","Lake Village","Marked Tree","Charleston","Tontitown","Earle","Danville","Bethel Heights","Huntsville","Fairfield Bay","Gravette","West Fork","Dermott","Lavaca","Harrisburg","Star City","Eudora","Lincoln","Mayflower","Glenwood","Carlisle","Gurdon","Augusta","Horseshoe Bend","Bono","Wrightsville","Lake City","Gassville","Eureka Springs","Austin","Judsonia","Leachville","Rector","Bull Shoals","Cave City","Lepanto","Smackover","Tuckerman","Melbourne","Bay","Cave Springs","McCrory","Des Arc","Decatur","Stamps","Clarendon","Mulberry","Kensett","Brookland","Murfreesboro","Salem","Lamar","Calico Rock","Elm Springs","Monette","Hazen","Perryville","Hughes","Cedarville","Dover","Waldo","Flippin","Marshall","Rison","Hampton","Diaz","Redfield","Ola","Lewisville","Caraway","Greenland","Mineral Springs","Yellville","Marvell","Luxora","Newark","Mansfield","Dierks","Marmaduke","Parkin","Ash Flat","Mount Ida","Goshen","Highland","Horatio","London","Coal Hill","Foreman","Altheimer","Mammoth Spring","Cotter","Bearden","Kibler","East Camden","Wilson","Greers Ferry","Stephens","Oak Grove Heights","Dyer","Wooster","Fouke","Magazine","Norphlet","Gould","Hermitage","Plumerville","Hackett","Swifton","Diamond City","Oppelo","Hardy","Mountain Pine","Madison","Cammack Village","Quitman","Tyronza","Bradford","Keiser","Altus","Rockport","Wickes","Lakeview","Lockesburg","Knoxville","Amity","Weiner","Guy","Gillett","McRae","Palestine","Imboden","Oxford","Black Rock","Cherry Valley","Cotton Plant","Hartford","Elaine","Caddo Valley","Huntington","Mountainburg","Bradley","Higginson","DeValls Bluff","Turrell","Plainview","Summit","Holly Grove","Pangburn","Huttig","Highfill","Junction City","Joiner","Bonanza","Subiaco","Taylor","Strong","Holland","Humphrey","Caldwell","Grannis","Wilmot","Hartman","Emmet","Traskwood","McNeil","Norfork","Sulphur Springs","Wilmar","Fountain Lake","Central City","Garfield","Leola","Calion","Avoca","Bauxite","Rose Bud","Crawfordsville","Ravenden","Jasper","Lafe","Reyno","Sulphur Rock","Bellefonte","Cushman","Patterson","Hector","Salesville","Grady","Tull","Kingsland","Lake View","Belleville","Leslie","Bergman","Portia","Evening Shade","Portland","Edmondson","Sparkman","Maynard","Mount Pleasant","Hatfield","Dyess","Thornton","Gateway","Alpena","Winslow","Midway","Grubbs","Western Grove","Cove","Damascus","Colt","Norman","Havana","Wilton","Clarkedale","Oak Grove","Emerson","Branch","Arkansas City","Fredonia (Biscoe)","Mitchellville","Wheatley","Montrose","Etowah","Pleasant Plains","Biggers","Carthage","Cash","Enola","Viola","Twin Groves","Midland","Bigelow","Blevins","Denning","Prattsville","Menifee","Strawberry","Donaldson","Horseshoe Lake","Shirley","Poyen","Lynn","Chidester","Knobel","Lexa","Garner","Humnoke","Almyra","Delight","Parkdale","Buckner","Widener","Hickory Ridge","Perrytown","Lead Hill","Perry","Black Oak","Rosston","Oil Trough","Keo","Campbell Station","Letona","Wabbaseka","Harrell","St. Francis","Concord","Garland","Perla","Tollette","Pineville","Briarcliff","Oden","St. Charles","Griffithville","Tillar","Scranton","Dell","Fisher","Pollard","Pyatt","Moro","Russell","Caulksville","Jacksonport","Watson","Adona","Greenway","Magness","Ratcliff","Fulton","Franklin","Rondo","Sunset","O'Kean","Winthrop","Burdette","Gilmore","McDougal","West Point","Valley Springs","Sidney","Ogden","Tupelo","Washington","Friendship","Fountain Hill","Bassett","Fifty-Six","Houston","Casa","Aubrey","Ulm","Omaha","Winchester","Louann","Anthonyville","Gillham","Chester","Sedgwick","Willisville","Felsenthal","Haynes","Success","Okolona","Ben Lomond","Mount Vernon","Reed","Bodcaw","Moorefield","Peach Orchard","Everton","St. Joe","Alicia","Banks","Blue Mountain","Bluff City","Georgetown","Gum Springs","Higden","Jericho","Ravenden Springs","Antoine","Delaplaine","Allport","Daisy","Jennette","Roe","St. Paul","Egypt","Pindall","Minturn","Beedeville","Big Flat","Hunter","Zinc","South Lead Hill","Beaver","Datto","Black Springs","Amagon","Fargo","Coy","McCaskill","Lonsdale","Whelen Springs","La Grange","Springtown","Vandervoort","Guion","Ozan","Marie","Sherrill","Cale","Smithville","Weldon","Williford","Powhatan","Corinth","Nimmons","McNab","Morrison Bluff","Patmos","Oakhaven","Fourche","Hindsville","Rudy","Waldenburg","Tinsman","Birdsong","Jerome","Wiederkehr Village","Victoria","Blue Eye","Gilbert",]
            ],
            [
                ['CA'],
                ["Adelanto","Agoura Hills","Alameda","Albany","Alhambra","Aliso Viejo","Alturas","Amador City","American Canyon","Anaheim","Anderson","Angels Camp","Antioch","Apple Valley","Arcadia","Arcata","Arroyo Grande","Artesia","Arvin","Atascadero","Atherton","Atwater","Auburn","Avalon","Avenal","Azusa","Bakersfield","Baldwin Park","Banning","Barstow","Beaumont","Bell","Bell Gardens","Bellflower","Belmont","Belvedere","Benicia","Berkeley","Beverly Hills","Big Bear Lake","Biggs","Bishop","Blue Lake","Blythe","Bradbury","Brawley","Brea","Brentwood","Brisbane","Buellton","Buena Park","Burbank","Burlingame","Calabasas","Calexico","California City","Calimesa","Calipatria","Calistoga","Camarillo","Campbell","Canyon Lake","Capitola","Carlsbad","Carmel-by-the-Sea","Carpinteria","Carson","Cathedral City","Ceres","Cerritos","Chico","Chino","Chino Hills","Chowchilla","Chula Vista","Citrus Heights","Claremont","Clayton","Clearlake","Cloverdale","Clovis","Coachella","Coalinga","Colfax","Colma","Colton","Colusa","Commerce","Compton","Concord","Corcoran","Corning","Corona","Coronado","Corte Madera","Costa Mesa","Cotati","Covina","Crescent City","Cudahy","Culver City","Cupertino","Cypress","Daly City","Dana Point","Danville","Davis","Del Mar","Del Rey Oaks","Delano","Desert Hot Springs","Diamond Bar","Dinuba","Dixon","Dorris","Dos Palos","Downey","Duarte","Dublin","Dunsmuir","East Palo Alto","Eastvale","El Cajon","El Centro","El Cerrito","El Monte","El Segundo","Elk Grove","Emeryville","Encinitas","Escalon","Escondido","Etna","Eureka","Exeter","Fairfax","Fairfield","Farmersville","Ferndale","Fillmore","Firebaugh","Folsom","Fontana","Fort Bragg","Fort Jones","Fortuna","Foster City","Fountain Valley","Fowler","Fremont","Fresno","Fullerton","Galt","Garden Grove","Gardena","Gilroy","Glendale","Glendora","Goleta","Gonzales","Grand Terrace","Grass Valley","Greenfield","Gridley","Grover Beach","Guadalupe","Gustine","Half Moon Bay","Hanford","Hawaiian Gardens","Hawthorne","Hayward","Healdsburg","Hemet","Hercules","Hermosa Beach","Hesperia","Hidden Hills","Highland","Hillsborough","Hollister","Holtville","Hughson","Huntington Beach","Huntington Park","Huron","Imperial","Imperial Beach","Indian Wells","Indio","Industry","Inglewood","Ione","Irvine","Irwindale","Isleton","Jackson","Jurupa Valley","Kerman","King City","Kingsburg","La Cañada Flintridge","La Habra","La Habra Heights","La Mesa","La Mirada","La Palma","La Puente","La Quinta","La Verne","Lafayette","Laguna Beach","Laguna Hills","Laguna Niguel","Laguna Woods","Lake Elsinore","Lake Forest","Lakeport","Lakewood","Lancaster","Larkspur","Lathrop","Lawndale","Lemon Grove","Lemoore","Lincoln","Lindsay","Live Oak","Livermore","Livingston","Lodi","Loma Linda","Lomita","Lompoc","Long Beach","Loomis","Los Alamitos","Los Altos","Los Altos Hills","Los Angeles","Los Banos","Los Gatos","Loyalton","Lynwood","Madera","Malibu","Mammoth Lakes","Manhattan Beach","Manteca","Maricopa","Marina","Martinez","Marysville","Maywood","McFarland","Mendota","Menifee","Menlo Park","Merced","Mill Valley","Millbrae","Milpitas","Mission Viejo","Modesto","Monrovia","Montague","Montclair","Monte Sereno","Montebello","Monterey","Monterey Park","Moorpark","Moraga","Moreno Valley","Morgan Hill","Morro Bay","Mount Shasta","Mountain View","Murrieta","Napa","National City","Needles","Nevada City","Newark","Newman","Newport Beach","Norco","Norwalk","Novato","Oakdale","Oakland","Oakley","Oceanside","Ojai","Ontario","Orange","Orange Cove","Orinda","Orland","Oroville","Oxnard","Pacific Grove","Pacifica","Palm Desert","Palm Springs","Palmdale","Palo Alto","Palos Verdes Estates","Paradise","Paramount","Parlier","Pasadena","Paso Robles","Patterson","Perris","Petaluma","Pico Rivera","Piedmont","Pinole","Pismo Beach","Pittsburg","Placentia","Placerville","Pleasant Hill","Pleasanton","Plymouth","Point Arena","Pomona","Port Hueneme","Porterville","Portola","Portola Valley","Poway","Rancho Cordova","Rancho Cucamonga","Rancho Mirage","Rancho Palos Verdes","Rancho Santa Margarita","Red Bluff","Redding","Redlands","Redondo Beach","Redwood City","Reedley","Rialto","Richmond","Ridgecrest","Rio Dell","Rio Vista","Ripon","Riverbank","Riverside","Rocklin","Rohnert Park","Rolling Hills","Rolling Hills Estates","Rosemead","Roseville","Ross","Sacramento","St. Helena","Salinas","San Anselmo","San Bernardino","San Bruno","San Carlos","San Clemente","San Diego","San Dimas","San Fernando","San Francisco","San Gabriel","San Jacinto","San Joaquin","San Jose","San Juan Bautista","San Juan Capistrano","San Leandro","San Luis Obispo","San Marcos","San Marino","San Mateo","San Pablo","San Rafael","San Ramon","Sand City","Sanger","Santa Ana","Santa Barbara","Santa Clara","Santa Clarita","Santa Cruz","Santa Fe Springs","Santa Maria","Santa Monica","Santa Paula","Santa Rosa","Santee","Saratoga","Sausalito","Scotts Valley","Seal Beach","Seaside","Sebastopol","Selma","Shafter","Shasta Lake","Sierra Madre","Signal Hill","Simi Valley","Solana Beach","Soledad","Solvang","Sonoma","Sonora","South El Monte","South Gate","South Lake Tahoe","South Pasadena","South San Francisco","Stanton","Stockton","Suisun City","Sunnyvale","Susanville","Sutter Creek","Taft","Tehachapi","Tehama","Temecula","Temple City","Thousand Oaks","Tiburon","Torrance","Tracy","Trinidad","Truckee","Tulare","Tulelake","Turlock","Tustin","Twentynine Palms","Ukiah","Union City","Upland","Vacaville","Vallejo","Ventura","Vernon","Victorville","Villa Park","Visalia","Vista","Walnut","Walnut Creek","Wasco","Waterford","Watsonville","Weed","West Covina","West Hollywood","West Sacramento","Westlake Village","Westminster","Westmorland","Wheatland","Whittier","Wildomar","Williams","Willits","Willows","Windsor","Winters","Woodlake","Woodland","Woodside","Yorba Linda","Yountville","Yreka","Yuba City","Yucaipa","Yucca Valley",]
            ],
            [
                ['CO'],
                ["Aguilar","Akron","Alamosa","Alma","Antonito","Arriba","Arvada","Aspen","Ault","Aurora","Avon","Basalt","Bayfield","Bennett","Berthoud","Bethune","Black Hawk","Blanca","Blue River","Bonanza","Boone","Boulder","Bow Mar","Branson","Breckenridge","Brighton","Brookside","Broomfield","Brush","Buena Vista","Burlington","Calhan","Campo","Cañon City","Carbondale","Castle Pines","Castle Rock","Cedaredge","Centennial","Center","Central City","Cheraw","Cherry Hills Village","Cheyenne Wells","Coal Creek","Cokedale","Collbran","Colorado Springs","Columbine Valley","Commerce City","Cortez","Craig","Crawford","Creede","Crested Butte","Crestone","Cripple Creek","Crook","Crowley","Dacono","De Beque","Deer Trail","Del Norte","Delta","Denver","Dillon","Dinosaur","Dolores","Dove Creek","Durango","Eads","Eagle","Eaton","Eckley","Edgewater","Elizabeth","Empire","Englewood","Erie","Estes Park","Evans","Fairplay","Federal Heights","Firestone","Flagler","Fleming","Florence","Fort Collins","Fort Lupton","Fort Morgan","Fountain","Fowler","Foxfield","Fraser","Frederick","Frisco","Fruita","Garden City","Genoa","Georgetown","Gilcrest","Glendale","Glenwood Springs","Golden","Granada","Granby","Grand Junction","Grand Lake","Greeley","Green Mountain Falls","Greenwood Village","Grover","Gunnison","Gypsum","Hartman","Haswell","Haxtun","Hayden","Hillrose","Holly","Holyoke","Hooper","Hot Sulphur Springs","Hotchkiss","Hudson","Hugo","Idaho Springs","Ignacio","Iliff","Jamestown","Johnstown","Julesburg","Keenesburg","Kersey","Kim","Kiowa","Kit Carson","Kremmling","La Jara","La Junta","La Veta","Lafayette","Lake City","Lakeside","Lakewood","Lamar","Larkspur","Las Animas","LaSalle","Leadville","Limon","Littleton","Lochbuie","Log Lane Village","Lone Tree","Longmont","Louisville","Loveland","Lyons","Manassa","Mancos","Manitou Springs","Manzanola","Marble","Mead","Meeker","Merino","Milliken","Minturn","Moffat","Monte Vista","Montezuma","Montrose","Monument","Morrison","Mount Crested Butte","Mountain View","Mountain Village","Naturita","Nederland","New Castle","Northglenn","Norwood","Nucla","Nunn","Oak Creek","Olathe","Olney Springs","Ophir","Orchard City","Ordway","Otis","Ouray","Ovid","Pagosa Springs","Palisade","Palmer Lake","Paoli","Paonia","Parachute","Parker","Peetz","Pierce","Pitkin","Platteville","Poncha Springs","Pritchett","Pueblo","Ramah","Rangely","Raymer","Red Cliff","Rico","Ridgway","Rifle","Rockvale","Rocky Ford","Romeo","Rye","Saguache","Salida","San Luis","Sanford","Sawpit","Sedgwick","Seibert","Severance","Sheridan","Sheridan Lake","Silt","Silver Cliff","Silver Plume","Silverthorne","Silverton","Simla","Snowmass Village","South Fork","Springfield","Starkville","Steamboat Springs","Sterling","Stratton","Sugar City","Superior","Swink","Telluride","Thornton","Timnath","Trinidad","Two Buttes","Vail","Victor","Vilas","Vona","Walden","Walsenburg","Walsh","Ward","Wellington","Westcliffe","Westminster","Wheat Ridge","Wiggins","Wiley","Williamsburg","Windsor","Winter Park","Woodland Park","Wray","Yampa","Yuma",]
            ],
            [
                ['CT'],
                ["Ansonia","Bristol","Danbury","Derby","Groton","Meriden","Middletown","Milford","New Britain","New London","Norwalk","Norwich","Shelton","Torrington","West Haven","Winsted","South Norwalk","Rockville","Willimantic","Putnam",]
            ],
            [
                ['DE'],
                ["Wilmington †","Dover ‡","Newark","Middletown","Smyrna","Milford","Seaford","Georgetown †","Elsmere","New Castle","Millsboro","Laurel","Harrington","Camden","Clayton","Lewes","Milton","Townsend","Selbyville","Bridgeville","Ocean View","Delaware City","Delmar","Cheswold","Wyoming","Rehoboth Beach","Blades","Felton","Bethany Beach","Bellefonte","Greenwood","Newport","Frankford","Dagsboro","Frederica","Millville","South Bethany","Arden","Ellendale","Fenwick Island","Houston","Dewey Beach","Bowers","Odessa","Magnolia","Ardentown","Kenton","Little Creek","Slaughter Beach","Ardencroft","Leipsic","Bethel","Woodside","Viola","Henlopen Acres","Farmington","Hartly",]
            ],
            [
                ['FL'],
                ["Alachua","Alford","Altamonte Springs","Altha","Anna Maria","Apalachicola","Apopka","Arcadia","Archer","Astatula","Atlantic Beach","Atlantis","Auburndale","Aventura","Avon Park","Bal Harbour","Baldwin","Bartow","Bascom","Bay Harbor Islands","Bay Lake","Bell","Belle Glade","Belle Isle","Belleair","Belleair Beach","Belleair Bluffs","Belleair Shore","Belleview","Beverly Beach","Biscayne Park","Blountstown","Boca Raton","Bonifay","Bonita Springs","Bowling Green","Boynton Beach","Bradenton","Bradenton Beach","Branford","Briny Breezes","Bristol","Bronson","Brooker","Brooksville","Bunnell","Bushnell","Callahan","Callaway","Campbellton","Cape Canaveral","Cape Coral","Carrabelle","Caryville","Casselberry","Cedar Key","Center Hill","Century","Chattahoochee","Chiefland","Chipley","Cinco Bayou","Clearwater","Clermont","Clewiston","Cloud Lake","Cocoa","Cocoa Beach","Coconut Creek","Coleman","Cooper City","Coral Gables","Coral Springs","Cottondale","Crescent City","Crestview","Cross City","Crystal River","Cutler Bay","Dade City","Dania Beach","Davenport","Davie","Daytona Beach","Daytona Beach Shores","DeBary","Deerfield Beach","DeFuniak Springs","Deland","Delray Beach","Deltona","Destin","Doral","Dundee","Dunedin","Dunnellon","Eagle Lake","Eatonville","Ebro","Edgewater","Edgewood","El Portal","Estero","Esto","Eustis","Everglades City","Fanning Springs","Fellsmere","Fernandina Beach","Flagler Beach","Florida City","Fort Lauderdale","Fort Meade","Fort Myers","Fort Myers Beach","Fort Pierce","Fort Walton Beach","Fort White","Freeport","Frostproof","Fruitland Park","Gainesville","Glen Ridge","Glen St. Mary","Golden Beach","Golf","Graceville","Grand Ridge","Grant-Valkaria","Green Cove Springs","Greenacres","Greensboro","Greenville","Greenwood","Gretna","Groveland","Gulf Breeze","Gulf Stream","Gulfport","Haines City","Hallandale Beach","Hampton","Hastings","Havana","Haverhill","Hawthorne","Hialeah","Hialeah Gardens","High Springs","Highland Beach","Highland Park","Hillcrest Heights","Hilliard","Hillsboro Beach","Holly Hill","Hollywood","Holmes Beach","Homestead","Horseshoe Beach","Howey-in-the-Hills","Hypoluxo","Indialantic","Indian Creek","Indian Harbour Beach","Indian River Shores","Indian Rocks Beach","Indian Shores","Inglis","Interlachen","Inverness","Islamorada","Jacksonville","Jacksonville Beach","Jacob City","Jasper","Jay","Jennings","Juno Beach","Jupiter","Jupiter Inlet Colony","Jupiter Island","Kenneth City","Key Biscayne","Key Colony Beach","Key West","Keystone Heights","Kissimmee","LaBelle","LaCrosse","Lady Lake","Lake Alfred","Lake Buena Vista","Lake Butler","Lake City","Lake Clarke Shores","Lake Hamilton","Lake Helen","Lake Mary","Lake Park","Lake Placid","Lake Wales","Lake Worth Beach","Lakeland","Lantana","Largo","Lauderdale Lakes","Lauderdale-by-the-Sea","Lauderhill","Laurel Hill","Lawtey Nour Town","Layton","Lazy Lake","Lee","Leesburg","Lighthouse Point","Live Oak","Longboat Key","Longwood","Loxahatchee Groves","Lynn Haven","Macclenny","Madeira Beach","Madison","Maitland","Malabar","Malone","Manalapan","Mangonia Park","Marathon","Marco Island","Margate","Marianna","Marineland","Mary Esther","Mascotte","Mayo","McIntosh","Medley","Melbourne","Melbourne Beach","Melbourne Village","Mexico Beach","Miami","Miami Beach","Miami Gardens","Miami Lakes","Miami Shores","Miami Springs","Micanopy","Midway","Milton","Minneola","Miramar","Monticello","Montverde","Moore Haven","Mount Dora","Mulberry","Naples","Neptune Beach","New Port Richey","New Smyrna Beach","Newberry","Niceville","Noma","North Bay Village","North Lauderdale","North Miami","North Miami Beach","North Palm Beach","North Port","North Redington Beach","Oak Hill","Oakland","Oakland Park","Ocala","Ocean Breeze","Ocean Ridge","Ocoee","Okeechobee","Oldsmar","Opa-locka","Orange City","Orange Park","Orchid","Orlando","Ormond Beach","Otter Creek","Oviedo","Pahokee","Palatka","Palm Bay","Palm Beach","Palm Beach Gardens","Palm Beach Shores","Palm Coast","Palm Shores","Palm Springs","Palmetto","Palmetto Bay","Panama City","Panama City Beach","Parker","Parkland","Paxton","Pembroke Park","Pembroke Pines","Penney Farms","Pensacola","Perry","Pierson","Pinecrest","Pinellas Park","Plant City","Plantation","Polk City","Pomona Park","Pompano Beach","Ponce de Leon","Ponce Inlet","Port Orange","Port Richey","Port St. Joe","Port St. Lucie","Punta Gorda","Quincy","Raiford","Reddick","Redington Beach","Redington Shores","Riviera Beach","Rockledge","Royal Palm Beach","Safety Harbor","San Antonio","Sanford","Sanibel","Sarasota","Satellite Beach","Sea Ranch Lakes","Sebastian","Sebring","Seminole","Sewall's Point","Shalimar","Sneads","Sopchoppy","South Bay","South Daytona","South Miami","South Palm Beach","South Pasadena","Southwest Ranches","Springfield","St. Augustine","St. Augustine Beach","St. Cloud","St. Leo","St. Lucie Village","St. Marks","St. Pete Beach","St. Petersburg","Starke","Stuart","Sunny Isles Beach","Sunrise","Surfside","Sweetwater","Tallahassee","Tamarac","Tampa","Tarpon Springs","Tavares","Temple Terrace","Tequesta","Titusville","Treasure Island","Trenton","Umatilla","Valparaiso","Venice","Vernon","Vero Beach","Virginia Gardens","Waldo","Wauchula","Wausau","Webster","Weeki Wachee","Welaka","Wellington","Westlake","West Melbourne","West Miami","West Palm Beach","West Park","Weston","Westville","Wewahitchka","White Springs","Wildwood","Williston","Wilton Manors","Windermere","Winter Garden","Winter Haven","Winter Park","Winter Springs","Worthington Springs","Yankeetown","Zephyrhills","Zolfo Springs",],
            ],
            [
                ['GA'],
                ["Abbeville","Acworth","Adairsville","Adel","Adrian","Ailey","Alamo","Alapaha","Albany","Aldora","Allenhurst","Allentown","Alma","Alpharetta","Alston","Alto","Ambrose","Americus","Andersonville","Arabi","Aragon","Arcade","Argyle","Arlington","Arnoldsville","Ashburn","Athens","Atlanta","Attapulgus","Auburn","Augusta","Austell","Avalon","Avera","Avondale Estates","Baconton","Bainbridge","Baldwin","Ball Ground","Barnesville","Bartow","Barwick","Baxley","Bellville","Berkeley Lake","Berlin","Bethlehem","Between","Bishop","Blackshear","Blairsville","Blakely","Bloomingdale","Blue Ridge","Bluffton","Blythe","Bogart","Boston","Bostwick","Bowdon","Bowersville","Bowman","Braselton","Braswell","Bremen","Brinson","Bronwood","Brookhaven","Brooklet","Brooks","Broxton","Brunswick","Buchanan","Buckhead","Buena Vista","Buford","Butler","Byromville","Byron","Cadwell","Cairo","Calhoun","Camak","Camilla","Canon","Canton","Carl","Carlton","Carnesville","Carrollton","Cartersville","Cave Spring","Cecil","Cedartown","Centerville","Centralhatchee","Chamblee","Chatsworth","Chattahoochee Hills","Chauncey","Chester","Chickamauga","Clarkesville","Clarkston","Claxton","Clayton","Clermont","Cleveland","Climax","Cobbtown","Cochran","Cohutta","Colbert","College Park","Collins","Colquitt","Columbus","Comer","Commerce","Concord","Conyers","Coolidge","Cordele","Cornelia","Covington","Crawford","Crawfordville","Culloden","Cumming","Cusseta","Cuthbert","Dacula","Dahlonega","Daisy","Dallas","Dalton","Damascus","Danielsville","Danville","Darien","Dasher","Davisboro","Dawson","Dawsonville","Dearing","Decatur","Deepstep","Demorest","Denton","De Soto","Dexter","Dillard","Doerun","Donalsonville","Dooling","Doraville","Douglas","Douglasville","Dublin","Dudley","Duluth","Dunwoody","Du Pont","East Dublin","East Ellijay","Eastman","East Point","Eatonton","Echols County","Edge Hill","Edison","Elberton","Ellaville","Ellenton","Ellijay","Emerson","Enigma","Ephesus","Eton","Euharlee","Fairburn","Fairmount","Fargo","Fayetteville","Fitzgerald","Flemington","Flovilla","Flowery Branch","Folkston","Forest Park","Forsyth","Fort Gaines","Fort Oglethorpe","Fort Valley","Franklin","Franklin Springs","Funston","Gainesville","Garden City","Garfield","Gay","Geneva","Georgetown","Gibson","Gillsville","Girard","Glennville","Glenwood","Good Hope","Gordon","Graham","Grantville","Gray","Grayson","Greensboro","Greenville","Griffin","Grovetown","Gumbranch","Guyton","Hagan","Hahira","Hamilton","Hampton","Hapeville","Haralson","Harlem","Harrison","Hartwell","Hawkinsville","Hazlehurst","Helen","Helena","Hephzibah","Hiawassee","Higgston","Hiltonia","Hinesville","Hiram","Hoboken","Hogansville","Holly Springs","Homeland","Homer","Homerville","Hoschton","Hull","Ideal","Ila","Iron City","Irwinton","Ivey","Jackson","Jacksonville","Jakin","Jasper","Jefferson","Jeffersonville","Jenkinsburg","Jersey","Jesup","Johns Creek","Jonesboro","Junction City","Kennesaw","Keysville","Kingsland","Kingston","Kite","LaFayette","LaGrange","Lake City","Lakeland","Lake Park","Lavonia","Lawrenceville","Leary","Leesburg","Lenox","Leslie","Lexington","Lilburn","Lilly","Lincolnton","Lithonia","Locust Grove","Loganville","Lone Oak","Lookout Mountain","Louisville","Lovejoy","Ludowici","Lula","Lumber City","Lumpkin","Luthersville","Lyerly","Lyons","McCaysville","McDonough","McIntyre","Macon","McRae","Madison","Manassas","Manchester","Mansfield","Marietta","Marshallville","Martin","Maxeys","Maysville","Meansville","Meigs","Menlo","Metter","Midville","Midway","Milan","Milledgeville","Millen","Milner","Milton","Mitchell","Molena","Monroe","Montezuma","Monticello","Montrose","Moreland","Morgan","Morganton","Morrow","Morven","Moultrie","Mountain City","Mountain Park","Mount Airy","Mount Vernon","Mount Zion","Nahunta","Nashville","Nelson","Newborn","Newington","Newnan","Newton","Nicholls","Nicholson","Norcross","Norman Park","North High Shoals","Norwood","Nunez","Oak Park","Oakwood","Ochlocknee","Ocilla","Oconee","Odum","Offerman","Oglethorpe","Oliver","Omega","Orchard Hill","Oxford","Palmetto","Parrott","Patterson","Pavo","Peachtree City","Peachtree Corners","Pearson","Pelham","Pembroke","Pendergrass","Perry","Pinehurst","Pine Lake","Pine Mountain","Pineview","Pitts","Plains","Plainville","Pooler","Portal","Porterdale","Port Wentworth","Poulan","Powder Springs","Pulaski","Quitman","Ranger","Ray City","Rayle","Rebecca","Register","Reidsville","Remerton","Rentz","Resaca","Rest Haven","Reynolds","Rhine","Riceboro","Richland","Richmond Hill","Riddleville","Rincon","Ringgold","Riverdale","Riverside","Roberta","Rochelle","Rockmart","Rocky Ford","Rome","Roopville","Rossville","Roswell","Royston","Rutledge","St. Marys","Sale City","Sandersville","Sandy Springs","Santa Claus","Sardis","Sasser","Savannah","Scotland","Screven","Senoia","Shady Dale","Sharon","Sharpsburg","Shellman","Shiloh","Siloam","Sky Valley","Smithville","Smyrna","Snellville","Social Circle","Soperton","South Fulton","Sparks","Sparta","Springfield","Stapleton","Statesboro","Statham","Stillmore","Stockbridge","Stone Mountain","Stonecrest","Sugar Hill","Summertown","Summerville","Sumner","Sunny Side","Surrency","Suwanee","Swainsboro","Sycamore","Sylvania","Sylvester","Talbotton","Talking Rock","Tallapoosa","Tallulah Falls","Talmo","Tarrytown","Taylorsville","Temple","Tennille","Thomaston","Thomasville","Thomson","Thunderbolt","Tifton","Tiger","Tignall","Toccoa","Toomsboro","Trenton","Trion","Tunnel Hill","Turin","Twin City","Tybee Island","Tyrone","Ty Ty","Unadilla","Union City","Union Point","Uvalda","Valdosta","Varnell","Vernonburg","Vidalia","Vidette","Vienna","Villa Rica","Waco","Wadley","Waleska","Walnut Grove","Walthourville","Warm Springs","Warner Robins","Warrenton","Warwick","Washington","Watkinsville","Waverly Hall","Waycross","Waynesboro","Webster County","West Point","Whigham","White","White Plains","Whitesburg","Willacoochee","Williamson","Winder","Winterville","Woodbine","Woodbury","Woodland","Woodstock","Woodville","Woolsey","Wrens","Wrightsville","Yatesville","Young Harris","Zebulon",]
            ],
            [
                ['HI'],
                ["Honolulu ††","East Honolulu","Pearl City","Hilo †","Kailua","Waipahu","Kaneohe","Mililani Town","Kahului","Ewa Gentry","Mililani Mauka","Kihei","Makakilo","Wahiawa","Schofield Barracks","Wailuku †","Kapolei","Ewa Beach","Royal Kunia","Halawa","Waimalu","Waianae","Nanakuli","Lahaina","Waipio","Hawaiian Paradise Park","Kapaa","Kalaoa","Kaneohe Station","Maili","Aiea","Waimea","Waihee-Waiehu","Ahuimanu","Holualoa","Ocean Pointe","Makaha","Haiku-Pauwela","Pukalani","Waikele","Napili-Honokowai","Makawao","Hickam Housing","Lihue †","Kula","Waikoloa Village","Laie","Ewa Villages","Wailea","West Loch Estate","Waimanalo","Waipio Acres","Wailua Homesteads","Heeia","Kahaluu","Kalaheo","Pupukea","Whitmore Village","Waimanalo Beach","Hawaiian Ocean View","Hawaiian Beaches","Hauula","Haleiwa","Mountain View","Waialua","Hanamaulu","Kahaluu-Keauhou","Kekaha","Captain Cook","Kaunakakai","Iroquois Point","Lanai City","Ainaloa","Waikapu","Puhi","Orchidlands Estates","Kilauea","Hawaiian Acres","Paia","Hanapepe","Kahuku","Volcano","Honaunau-Napoopoo","Honalo","Eleele","Lawai","Honokaa","Wailua","Keaau","Anahola","Princeville","Koloa","Maunawili","Kualapuu","Kealakekua","Mokuleia","Ko Olina","Pepeekeo","Kapaau","Wheeler AFB","Keokea","Leilani Estates","Fern Acres","Nanawale Estates","Kaaawa","Pahala","Makaha Valley","Papaikou","Omao","Kurtistown","Hana","Wainaku","Punaluu","Olinda","Hawi","Kaanapali","Poipu","Haliimaile","Discovery Harbour","Pahoa","Eden Roc","Fern Forest","Mahinahina","Naalehu","Waikane","Puako","Kaumakani","Paauilo","Launiupoko","Laupahoehoe","Honomu","Halaula","Hanalei","Haena","Kalihiwai","Paukaa","Ualapu'e","Maunaloa","Kapalua","Maalaea","Kukuihaele","Kawela Bay","Wainiha","Pakala Village","Waiohinu","Makena","Olowalu","Kalaeloa","Manele",]
            ],
            [
                ['ID'],
                ["Boise ††","Meridian","Nampa","Idaho Falls †","Pocatello †","Caldwell †","Coeur d'Alene †","Twin Falls †","Post Falls","Lewiston †","Rexburg †","Eagle","Moscow †","Kuna","Ammon","Chubbuck","Hayden","Mountain Home †","Blackfoot †","Garden City","Jerome †","Burley †","Star","Sandpoint †","Hailey †","Rathdrum","Middleton","Payette †","Emmett †","Rupert †","Preston †","Weiser †","Fruitland","Shelley","Buhl","American Falls †","Rigby †","Kimberly","St. Anthony †","Gooding †","McCall","Heyburn","Grangeville †","Salmon †","Soda Springs †","Orofino †","Filer","Ketchum","Wendell","Homedale","Bonners Ferry †","Montpelier","St. Maries †","Dalton Gardens","Bellevue","Spirit Lake","Iona","Victor","Malad City †","Parma","Kellogg","Aberdeen","Priest River","Driggs †","Wilder","Pinehurst","Osburn","New Plymouth","Shoshone †","Sun Valley","Sugar City","Paul","Marsing","Kamiah","Hansen","Glenns Ferry","Ucon","Lapwai","Ponderay","Ashton","Challis †","Plummer","Cascade †","Genesee","Cottonwood","Grace","Troy","Inkom","Arco †","Greenleaf","Hagerman","Council †","Kootenai","McCammon","Franklin","Potlatch","Hazelton","Oakley","Menan","Wallace †","Athol","Moyie Springs","Dover","Hauser","Teton","Horseshoe Bend","Mullan","Kooskia","Ririe","Downey","Notus","Carey","Hayden Lake","Smelterville","Dubois †","Juliaetta","Roberts","Clark Fork","Melba","Deary","Paris †","New Meadows","Craigmont","Georgetown","Lewisville","Mackay","Richfield","Pierce","Firth","Dayton","Nezperce †","Weston","Grand View","Idaho City †","Weippe","Lava Hot Springs","Eden","Riggins","Fairfield †","Basalt","Mud Lake","Culdesac","Bancroft","Winchester","Arimo","Declo","Dietrich","Cambridge","Newdale","Kendrick","Bliss","Parker","Clifton","Hollister","Rockland","Tetonia","Albion","Island Park","Worley","Bovill","Irwin","Castleford","Stites","Swan Valley","East Hope","Harrison","Bloomington","Malta","Peck","Oldtown","Onaway","Wardner","Fernan Lake Village","Crouch","Moore","Ferdinand","Murtaugh","Midvale","Donnelly","St. Charles","Acequia","Elk River","Tensed","Minidoka","Huetter","Leadore","Hamer","Hope","White Bird","Stanley","Butte City","Reubens","Placerville","Oxford","State Line","Spencer","Atomic City","Drummond","Clayton","Warm River",]
            ],
            [
                ['IL'],
                ["Abingdon","Addieville","Addison","Adeline","Albany","Albers","Albion","Aledo","Alexis","Algonquin","Alhambra","Allendale","Allenville","Allerton","Alma","Alorton","Alpha","Alsey","Alsip","Altamont","Alto Pass","Alton","Altona","Alvan","Amboy","Anchor","Andalusia","Andover","Anna","Annawan","Antioch","Apple River","Arcola","Arenzville","Argenta","Arlington","Arlington Heights","Armington","Aroma Park","Arrowsmith","Arthur","Ashkum","Ashland","Ashley","Ashmore","Ashton","Assumption","Astoria","Athens","Atkinson","Atlanta","Atwood","Auburn","Augusta","Aurora","Ava","Aviston","Avon","Baldwin","Banner","Bannockburn","Bardolph","Barrington","Barrington Hills","Barry","Bartelso","Bartlett","Bartonville","Basco","Batavia","Batchtown","Bath","Bay View Gardens","Baylis","Beach Park","Beardstown","Beaverville","Beckemeyer","Bedford Park","Beecher","Beecher City","Belgium","Belknap","Belle Prairie City","Belle Rive","Belleville","Bellevue","Bellflower","Bellmont","Bellwood","Belvidere","Bement","Benld","Bensenville","Benson","Bentley","Benton","Berkeley","Berlin","Berwyn","Bethalto","Bethany","Big Rock","Biggsville","Bingham","Bishop Hill","Bismarck","Blandinsville","Bloomingdale","Bloomington","Blue Island","Blue Mound","Bluffs","Bluford","Bolingbrook","Bondville","Bone Gap","Bonfield","Bonnie","Bourbonnais","Bowen","Braceville","Bradford","Bradley","Braidwood","Breese","Bridgeport","Bridgeview","Brighton","Brimfield","Broadlands","Broadview","Broadwell","Brocton","Brookfield","Brooklyn","Brookport","Broughton","Browning","Browns","Brownstown","Brussels","Bryant","Buckingham","Buckley","Buckner","Buda","Buffalo","Buffalo Grove","Bull Valley","Bulpitt","Buncombe","Bunker Hill","Burbank","Bureau Junction","Burlington","Burnham","Burnt Prairie","Burr Ridge","Bush","Bushnell","Butler","Byron","Cabery","Cahokia","Cairo","Caledonia","Calhoun","Calumet City","Calumet Park","Camargo","Cambria","Cambridge","Camden","Camp Point","Campbell Hill","Campton Hills","Campus","Canton","Cantrall","Capron","Carbon Cliff","Carbon Hill","Carbondale","Carlinville","Carlock","Carlyle","Carmi","Carol Stream","Carpentersville","Carrier Mills","Carrollton","Carterville","Carthage","Cary","Casey","Caseyville","Catlin","Cave-In-Rock","Cedar Point","Cedarville","Central City","Centralia","Centreville","Cerro Gordo","Chadwick","Champaign","Charleston","Chandlerville","Channahon","Chapin","Chatham","Chatsworth","Chebanse","Chenoa","Cherry","Cherry Valley","Chester","Chesterfield","Chicago","Chicago Heights","Chicago Ridge","Chillicothe","Chrisman","Christopher","Cicero","Cisco","Cisne","Cissna Park","Claremont","Clarendon Hills","Clay City","Clayton","Clear Lake","Cleveland","Clifton","Clinton","Coal City","Coal Valley","Coalton","Coatsburg","Cobden","Coffeen","Colchester","Coleta","Colfax","Collinsville","Colona","Colp","Columbia","Columbus","Compton","Concord","Congerville","Cooksville","Cordova","Cornell","Cortland","Coulterville","Country Club Hills","Countryside","Cowden","Crainville","Creal Springs","Crescent City","Crest Hill","Creston","Crestwood","Crete","Creve Coeur","Crossville","Crystal Lake","Cuba","Cullom","Curran","Cutler","Cypress","Dahlgren","Dakota","Dallas City","Dalton City","Dalzell","Damiansville","Dana","Danforth","Danvers","Danville","Darien","Davis","Davis Junction","Dawson","DeKalb","De Land","De Pue","De Soto","Decatur","Deer Creek","Deer Grove","Deer Park","Deerfield","Delavan","Des Plaines","Detroit","DeWitt","Diamond","Dieterich","Divernon","Dix","Dixmoor","Dixon","Dolton","Dongola","Donnellson","Donovan","Dorchester","Dover","Dowell","Downers Grove","Downs","Du Bois","Du Quoin","Dunfermline","Dunlap","Dupo","Durand","Dwight","Eagarville","Earlville","East Alton","East Brooklyn","East Cape Girardeau","East Carondelet","East Dubuque","East Dundee","East Galesburg","East Gillespie","East Hazel Crest","East Moline","East Peoria","East St. Louis","Easton","Eddyville","Edgewood","Edinburg","Edwardsville","Effingham","El Dara","El Paso","Elburn","Eldorado","Eldred","Elgin","Elizabeth","Elizabethtown","Elk Grove Village","Elkhart","Elkville","Elliott","Ellis Grove","Ellisville","Ellsworth","Elmhurst","Elmwood","Elmwood Park","Elsah","Elvaston","Elwood","Emden","Emington","Energy","Enfield","Equality","Erie","Essex","Eureka","Evanston","Evansville","Evergreen Park","Ewing","Exeter","Fairbury","Fairfield","Fairmont City","Fairmount","Fairview","Fairview Heights","Farina","Farmer City","Farmersville","Farmington","Fayetteville","Ferris","Fidelity","Fieldon","Fillmore","Findlay","Fisher","Fithian","Flanagan","Flat Rock","Flora","Florence","Flossmoor","Foosland","Ford Heights","Forest City","Forest Park","Forest View","Forrest","Forreston","Forsyth","Fox Lake","Fox River Grove","Frankfort","Franklin","Franklin Grove","Franklin Park","Freeburg","Freeman Spur","Freeport","Fulton","Fults","Galatia","Galena","Galesburg","Galva","Gardner","Garrett","Gays","Geneseo","Geneva","Genoa","Georgetown","German Valley","Germantown","Germantown Hills","Gibson City","Gifford","Gilberts","Gillespie","Gilman","Girard","Gladstone","Glasford","Glasgow","Glen Carbon","Glen Ellyn","Glencoe","Glendale Heights","Glenview","Glenwood","Godfrey","Godley","Golconda","Golden","Golden Gate","Golf","Good Hope","Goodfield","Goreville","Gorham","Grafton","Grand Tower","Grand Ridge","Grandview","Granite City","Grant Park","Grantfork","Granville","Grayslake","Grayville","Green Oaks","Green Valley","Greenfield","Greenup","Greenview","Greenville","Greenwood","Gridley","Griggsville","Gulfport","Gurnee","Hainesville","Hamburg","Hamel","Hamilton","Hammond","Hampshire","Hampton","Hanaford","Hanna City","Hanover","Hanover Park","Hardin","Harmon","Harrisburg","Harristown","Hartford","Hartsburg","Harvard","Harvel","Harvey","Harwood Heights","Havana","Hawthorn Woods","Hazel Crest","Hebron","Hecker","Henderson","Hennepin","Henning","Henry","Herrick","Herrin","Herscher","Hettick","Heyworth","Hickory Hills","Hidalgo","Highland","Highland Park","Highwood","Hillcrest","Hillsboro","Hillsdale","Hillside","Hillview","Hinckley","Hindsboro","Hinsdale","Hodgkins","Hoffman","Hoffman Estates","Holiday Hills","Hollowayville","Homer","Homer Glen","Hometown","Homewood","Hoopeston","Hooppole","Hopedale","Hopewell","Hopkins Park","Hoyleton","Hudson","Huey","Hull","Humboldt","Hume","Huntley","Hurst","Hutsonville","Illiopolis","Ina","Indian Creek","Indian Head Park","Indianola","Industry","Inverness","Iola","Ipava","Iroquois","Irving","Irvington","Irwin","Island Lake","Itasca","Iuka","Ivesdale","Jacksonville","Jeffersonville","Jeisyville","Jerome","Jerseyville","Jewett","Johnsburg","Johnston City","Johnsonville","Joliet","Jonesboro","Joppa","Joy","Junction","Junction City","Justice","Kampsville","Kane","Kaneville","Kangley","Kankakee","Kansas","Kappa","Karnak","Kaskaskia","Keenes","Keithsburg","Keensburg","Kell","Kempton","Kenilworth","Kenney","Kewanee","Keyesport","Kilbourne","Kildeer","Kincaid","Kinderhook","Kingston","Kingston Mines","Kinmundy","Kinsman","Kirkland","Kirkwood","Knoxville","La Fayette","La Grange","La Grange Park","La Harpe","La Moille","La Prairie","La Rose","LaSalle","Lacon","Ladd","Lake Barrington","Lake Bluff","Lake in the Hills","Lake Ka-ho","Lake Forest","Lake Villa","Lake Zurich","Lakemoor","Lakewood","Lanark","Lansing","Latham","Lawrenceville","Le Roy","Leaf River","Lebanon","Lee","Leland","Leland Grove","Lemont","Lena","Lenzburg","Leonore","Lerna","Lewistown","Lexington","Liberty","Libertyville","Lily Lake","Lima","Limestone","Lincoln","Lincolnshire","Lincolnwood","Lindenhurst","Lisbon","Lisle","Litchfield","Little York","Littleton","Liverpool","Livingston","Loami","Lockport","Loda","Lomax","Lombard","London Mills","Long Creek","Long Grove","Long Point","Longview","Loraine","Lostant","Louisville","Loves Park","Lovington","Ludlow","Lyndon","Lynnville","Lynwood","Lyons","Macedonia","Machesney Park","Mackinaw","Macomb","Macon","Madison","Maeystown","Magnolia","Mahomet","Makanda","Malden","Malta","Manchester","Manhattan","Manito","Manlius","Mansfield","Manteno","Maple Park","Mapleton","Maquon","Marengo","Marietta","Marine","Marion","Marissa","Mark","Markham","Maroa","Marquette Heights","Marseilles","Marshall","Martinton","Martinsville","Maryville","Mascoutah","Mason","Mason City","Matherville","Matteson","Mattoon","Maunie","Maywood","Mazon","McClure","McCook","McCullom Lake","McHenry","McLean","McLeansboro","McNabb","Mechanicsburg","Media","Medora","Melrose Park","Melvin","Mendon","Mendota","Menominee","Meredosia","Merrionette Park","Metamora","Metcalf","Metropolis","Mettawa","Middletown","Midlothian","Milan","Milford","Mill Creek","Mill Shoals","Millbrook","Milledgeville","Millington","Millstadt","Milton","Mineral","Minier","Minonk","Minooka","Modesto","Mokena","Moline","Momence","Monee","Monmouth","Monroe Center","Montgomery","Monticello","Montrose","Morris","Morrison","Morrisonville","Morton","Morton Grove","Mound City","Mound Station","Mounds","Mount Auburn","Mount Carmel","Mount Carroll","Mount Clare","Mount Erie","Mount Morris","Mount Olive","Mount Prospect","Mount Pulaski","Mount Sterling","Mount Vernon","Mount Zion","Moweaqua","Muddy","Mulberry Grove","Muncie","Mundelein","Murphysboro","Murrayville","Naperville","Naplate","Naples","Nashville","Nason","Nauvoo","Nebo","Nelson","Neoga","Neponset","New Athens","New Baden","New Bedford","New Berlin","New Boston","New Burnside","New Canton","New Douglas","New Grand Chain","New Haven","New Holland","New Lenox","New Milford","New Minden","New Salem","New Windsor","Newark","Newman","Newton","Niantic","Niles","Nilwood","Noble","Nokomis","Nora","Normal","Norridge","Norris","Norris City","North Aurora","North Barrington","North Chicago","North City","North Henderson","North Pekin","North Riverside","North Utica","Northbrook","Northfield","Northlake","Norwood","O'Fallon","Oak Brook","Oak Grove","Oak Forest","Oak Lawn","Oak Park",
                "Oakbrook Terrace","Oakdale","Oakford","Oakland","Oakwood","Oakwood Hills","Oblong","Oconee","Odell","Odin","Ogden","Oglesby","Ohio","Ohlman","Okawville","Old Mill Creek","Old Ripley","Old Shawneetown","Olmsted","Olney","Olympia Fields","Omaha","Onarga","Oneida","Oquawka","Orangeville","Oreana","Oregon","Orient","Orion","Orland Hills","Orland Park","Oswego","Ottawa","Otterville","Owaneco","Palatine","Palestine","Palmer","Palmyra","Palos Heights","Palos Hills","Palos Park","Pana","Panama","Panola","Papineau","Paris","Park City","Park Forest","Park Ridge","Parkersburg","Patoka","Paw Paw","Pawnee","Paxton","Payson","Pearl","Pearl City","Pecatonica","Pekin","Peoria","Peoria Heights","Peotone","Percy","Perry","Peru","Pesotum","Petersburg","Phillipstown","Philo","Phoenix","Pierron","Pinckneyville","Pingree Grove","Piper City","Pittsburg","Pittsfield","Plainfield","Plainville","Plano","Plattville","Pleasant Hill","Pleasant Plains","Plymouth","Pocahontas","Polo","Pontiac","Pontoon Beach","Pontoosuc","Poplar Grove","Port Barrington","Port Byron","Posen","Potomac","Prairie City","Prairie du Rocher","Prairie Grove","Princeton","Princeville","Prophetstown","Prospect Heights","Pulaski","Quincy","Radom","Raleigh","Ramsey","Rankin","Ransom","Rantoul","Rapids City","Raritan","Raymond","Red Bud","Reddick","Redmon","Reynolds","Richmond","Richton Park","Richview","Ridge Farm","Ridgway","Ridott","Ringwood","Rio","Ripley","River Forest","River Grove","Riverdale","Riverside","Riverton","Riverwoods","Roanoke","Robbins","Roberts","Robinson","Rochelle","Rochester","Rock City","Rock Falls","Rock Island","Rockbridge","Rockdale","Rockford","Rockton","Rockwood","Rolling Meadows","Romeoville","Roodhouse","Roscoe","Rose Hill","Roselle","Rosemont","Roseville","Rosiclare","Rossville","Round Lake","Round Lake Beach","Round Lake Heights","Round Lake Park","Roxana","Royal","Royal Lakes","Royalton","Ruma","Rushville","Russellville","Rutland","Sadorus","Sailor Springs","St. Anne","St. Augustine","St. Charles","St. David","St. Elmo","St. Francisville","St. Jacob","St. Johns","St. Joseph","St. Libory","St. Peter","Ste. Marie","Salem","Sammons Point","San Jose","Sandoval","Sandwich","Sauget","Sauk Village","Saunemin","Savanna","Savoy","Sawyerville","Saybrook","Scales Mound","Schaumburg","Schiller Park","Schram City","Sciota","Scottville","Seaton","Seatonville","Secor","Seneca","Sesser","Shabbona","Shannon","Shawneetown","Sheffield","Shelbyville","Sheldon","Sheridan","Sherman","Sherrard","Shiloh","Shipman","Shorewood","Shumway","Sibley","Sidell","Sidney","Sigel","Silvis","Simpson","Sims","Skokie","Sleepy Hollow","Smithboro","Smithfield","Smithton","Somonauk","Sorento","South Barrington","South Beloit","South Chicago Heights","South Elgin","South Holland","South Jacksonville","South Pekin","South Roxana","South Wilmington","Southern View","Sparland","Sparta","Spaulding","Spillertown","Spring Bay","Spring Grove","Spring Valley","Springerton","Springfield","Standard","Standard City","Stanford","Staunton","Steeleville","Steger","Sterling","Steward","Stewardson","Stickney","Stillman Valley","Stockton","Stone Park","Stonefort","Stonington","Stoy","Strasburg","Strawn","Streamwood","Streator","Stronghurst","Sublette","Sugar Grove","Sullivan","Summerfield","Summit","Sumner","Sun River Terrace","Swansea","Sycamore","Symerton","Table Grove","Tallula","Tamaroa","Tamms","Tampico","Taylor Springs","Taylorville","Tennessee","Teutopolis","Thawville","Thayer","Thebes","Third Lake","Thomasboro","Thompsonville","Thomson","Thornton","Tilden","Tilton","Timberlane","Time","Tinley Park","Tiskilwa","Toluca","Toledo","Tolono","Toulon","Tonica","Topeka","Tovey","Towanda","Tower Hill","Tower Lakes","Tremont","Trenton","Trout Valley","Troy","Troy Grove","Tuscola","Virginia","Ullin","Union","Union Hill","University Park","Urbana","Ursa","Valier","Valley City","Valmeyer","Vandalia","Varna","Venedy","Venice","Vergennes","Vermilion","Vermont","Vernon","Vernon Hills","Verona","Versailles","Victoria","Vienna","Villa Grove","Villa Park","Viola","Virden","Virgil","Volo","Wadsworth","Waggoner","Walnut","Walnut Hill","Walshville","Waltonville","Wamac","Wapella","Warren","Warrensburg","Warrenville","Warsaw","Washburn","Washington","Washington Park","Wataga","Waterloo","Waterman","Watseka","Watson","Wauconda","Waukegan","Waverly","Wayne","Wayne City","Waynesville","Weldon","Wellington","Wenona","Wenonah","West Brooklyn","West Chicago","West City","West Dundee","West Frankfort","West Peoria","West Point","West Salem","Westchester","Western Springs","Westfield","Westmont","Westville","Wheeler","Wheaton","Wheeling","White City","White Hall","Whiteash","Williamsfield","Williamson","Williamsville","Willisville","Willow Hill","Willow Springs","Willowbrook","Wilmette","Wilmington","Wilsonville","Winchester","Windsor","Winfield","Winnebago","Winnetka","Winslow","Winthrop Harbor","Witt","Wonder Lake","Wood Dale","Wood River","Woodhull","Woodland","Woodlawn","Woodridge","Woodson","Woodstock","Worden","Worth","Wyanet","Wyoming","Xenia","Yale","Yates City","Yorkville","Zeigler","Zion",],
            ],
            [
                ['IN'],
                ["Indianapolis","Fort Wayne","Evansville","South Bend","Carmel","Fishers","Bloomington","Hammond","Gary","Lafayette","Muncie","Noblesville","Terre Haute","Kokomo","Greenwood","Anderson","Elkhart","Mishawaka","Lawrence","Jeffersonville","Columbus","West Lafayette","Westfield","Portage","New Albany","Richmond","Valparaiso","Goshen","Michigan City","Crown Point","Marion","Hobart","East Chicago","Franklin","Greenfield","La Porte","Seymour","Shelbyville","Logansport","Vincennes","New Castle","Huntington","Crawfordsville","Lebanon","Frankfort","New Haven","Jasper","Beech Grove","Warsaw","Bedford","Auburn","Connersville","Washington","Lake Station","Greensburg","Madison","Martinsville","Peru","Greencastle","Wabash","Bluffton","Plymouth","Kendallville","Decatur","Columbia City","Angola","Princeton","Elwood","Charlestown","Brazil","Tell City","Nappanee","Scottsburg","North Vernon","Batesville","Mount Vernon","Garrett","Boonville","Salem","Portland","Huntingburg","Rushville","Rochester","Rensselaer","Gas City","Hartford City","Monticello","Linton","Tipton","Lawrenceburg","Alexandria","Whiting","Clinton","Winchester","Greendale","Ligonier","Mitchell","Berne","Austin","Sullivan","Aurora","Knox","Union City","Attica","Delphi","Bicknell","Loogootee","Butler","Covington","Oakland City","Dunkirk","Petersburg","Rockport","Rising Sun","Jasonville","Southport","Montpelier","Jonesboro","Woodburn","Cannelton",]
            ],
            [
                ['IA'],
                ["Hardin","Franklin","Warren","Adair","Guthrie","Dallas","Union","Wapello","Washington","Plymouth","Buena Vista","Monroe","Marshall","Linn","Hardin","Kossuth","Polk","Wayne","Butler","Chickasaw","Sioux","Lyon","Story","Jones","Clinton","Jackson","Cass","Woodbury","Carroll","O'Brien","Crawford","Fayette","Emmet","Dickinson","Ida","Dubuque","Osceola","Muscatine","Benton","Sac","Audubon","Cherokee","Buchanan","Pottawattamie","Palo Alto","Webster","Mahaska","Poweshiek","Jefferson","Jasper","Ringgold","Grundy","Boone","Taylor","Wright","Cedar","Scott","Madison","Van Buren","Hamilton","Page","Monona","Davis","Humboldt","Hancock","Winnebago","Des Moines","Marion","Winneshiek","Adams","Mitchell","Black Hawk","Appanoose","Lucas","Floyd","Tama","Howard","Greene","Clayton","Cerro Gordo","Montgomery","Delaware","Louisa","Henry","Johnson","Decatur","Shelby","Keokuk","Bremer","Clay","Lee","Harrison","Mills","Calhoun","Fremont","Worth","Pocahontas","Allamakee","Iowa","Clarke",]
            ],
            [
                ['KS'],
                ["Wichita †","Overland Park","Kansas City †","Olathe †","Topeka †","Lawrence †","Shawnee","Manhattan †","Lenexa","Salina †","Hutchinson †","Leavenworth †","Leawood","Dodge City †","Garden City †","Emporia †","Derby","Junction City †","Prairie Village","Gardner","Hays †","Pittsburg","Liberal †","Newton †","Great Bend †","McPherson †","Andover","El Dorado †","Ottawa †","Winfield †","Lansing","Arkansas City","Haysville","Merriam","Atchison †","Parsons","Coffeyville","Mission","Augusta","Chanute","Independence †","Bel Aire","Wellington †","Fort Scott †","Bonner Springs","Park City","Valley Center","Roeland Park","Pratt †","Spring Hill","Abilene †","Mulvane","Eudora","De Soto","Basehor","Ulysses †","Paola †","Tonganoxie","Colby †","Iola †","Concordia †",]
            ],
            [
                ['KY'],
                ["Adairville","Albany","Alexandria","Allen","Anchorage","Arlington","Ashland","Auburn","Audubon Park","Augusta","Bancroft","Barbourmeade","Barbourville","Bardstown","Bardwell","Barlow","Beattyville","Beaver Dam","Bedford","Beechwood Village","Bellefonte","Bellemeade","Bellevue","Bellewood","Benham","Benton","Berea","Berry","Blackey","Blaine","Blandville","Bloomfield","Blue Ridge Manor","Bonnieville","Booneville","Bowling Green","Bradfordsville","Brandenburg","Bremen","Briarwood","Brodhead","Broeck Pointe","Bromley","Brooksville","Brownsboro Farm","Brownsboro Village","Brownsville","Buckhorn","Burgin","Burkesville","Burnside","Butler","Cadiz","Calhoun","California","Calvert City","Camargo","Cambridge","Campbellsburg","Campbellsville","Campton","Caneyville","Carlisle","Carrollton","Carrsville","Catlettsburg","Cave City","Centertown","Central City","Clarkson","Clay","Clay City","Clinton","Cloverport","Coal Run Village","Cold Spring","Coldstream","Columbia","Columbus","Concord","Corbin","Corinth","Corydon","Covington","Crab Orchard","Creekside","Crescent Springs","Crestview","Crestview Hills","Crestwood","Crittenden","Crofton","Crossgate","Cumberland","Cynthiana","Danville","Dawson Springs","Dayton","Dixon","Douglass Hills","Dover","Drakesboro","Druid Hills","Dry Ridge","Earlington","Eddyville","Edgewood","Edmonton","Ekron","Elizabethtown","Elkhorn City","Elkton","Elsmere","Eminence","Erlanger","Eubank","Evarts","Ewing","Fairfield","Fairview","Falmouth","Ferguson","Fincastle","Flatwoods","Fleming-Neon","Flemingsburg","Florence","Fordsville","Forest Hills","Fort Mitchell","Fort Thomas","Fort Wright","Fountain Run","Fox Chase","Frankfort","Franklin","Fredonia","Frenchburg","Fulton","Gamaliel","Georgetown","Germantown","Ghent","Glasgow","Glencoe","Glenview","Glenview Hills","Glenview Manor","Goose Creek","Goshen","Grand Rivers","Gratz","Graymoor-Devondale","Grayson","Green Spring","Greensburg","Greenup","Greenville","Guthrie","Hanson","Hardin","Hardinsburg","Harlan","Harrodsburg","Hartford","Hawesville","Hazard","Hazel","Hebron Estates","Henderson","Heritage Creek","Hickman","Hickory Hill","Highland Heights","Hills and Dales","Hillview","Hindman","Hodgenville","Hollow Creek","Hollyvilla","Hopkinsville","Horse Cave","Houston Acres","Hunters Hollow","Hurstbourne","Hurstbourne Acres","Hustonville","Hyden","Independence","Indian Hills","Inez","Irvine","Irvington","Island","Jackson","Jamestown","Jeffersontown","Jeffersonville","Jenkins","Junction City","Keene","Kenton Vale","Kevil","Kingsley","Kuttawa","LaCenter","LaFayette","La Grange","Lakeside Park","Lakeview Heights","Lancaster","Langdon Place","Lawrenceburg","Lebanon","Lebanon Junction","Leitchfield","Lewisburg","Lewisport","Lexington","Liberty","Lincolnshire","Livermore","Livingston","London","Loretto","Louisa","Louisville","Loyall","Ludlow","Lynch","Lyndon","Lynnview","Mackville","Madisonville","Manchester","Manor Creek","Marion","Martin","Maryhill Estates","Mayfield","Maysville","McHenry","McKee","Meadow Vale","Meadowbrook Farm","Meadowview Estates","Melbourne","Mentor","Middlesboro","Middletown","Midway","Millersburg","Milton","Mockingbird Valley","Monterey","Monticello","Moorland","Morehead","Morganfield","Morgantown","Mortons Gap","Mount Olivet","Mt. Sterling","Mount Vernon","Mount Washington","Muldraugh","Munfordville","Murray","Murray Hill","Nebo","New Castle","New Haven","Newport","Nicholasville","Norbourne Estates","North Middletown","Northfield","Nortonville","Norwood","Oak Grove","Oakland","Old Brownsboro Place","Olive Hill","Orchard Grass Hills","Owensboro","Owenton","Owingsville","Paducah","Paintsville","Paris","Park City","Park Hills","Parkway Village","Pembroke","Perryville","Pewee Valley","Pikeville","Pineville","Pioneer Village","Pippa Passes","Plantation","Pleasureville","Plum Springs","Poplar Hills","Powderly","Prestonsburg","Prestonville","Princeton","Prospect","Providence","Raceland","Radcliff","Ravenna","Raywick","Richlawn","Richmond","River Bluff","Riverwood","Robards","Rochester","Rockport","Rolling Fields","Rolling Hills","Russell","Russell Springs","Russellville","Ryland Heights","Sacramento","Sadieville","St. Charles","St. Mary","St. Matthews","St. Regis Park","Salem","Salt Lick","Salyersville","Sanders","Sandy Hook","Sardis","Science Hill","Scottsville","Sebree","Seneca Gardens","Sharpsburg","Shelbyville","Shepherdsville","Shively","Silver Grove","Simpsonville","Slaughters","Smithfield","Smithland","Smiths Grove","Somerset","Sonora","South Carrollton","South Park View","South Shore","Southgate","Sparta","Spring Mill","Spring Valley","Springfield","Stamping Ground","Stanford","Stanton","Strathmoor Manor","Strathmoor Village","Sturgis","Sycamore","Taylor Mill","Taylorsville","Ten Broeck","Thornhill","Tompkinsville","Trenton","Union","Uniontown","Upton","Vanceburg","Versailles","Vicco","Villa Hills","Vine Grove","Walton","Warfield","Warsaw","Watterson Park","Waverly","Wayland","Wellington","West Buechel","West Liberty","West Point","Westwood","Wheatcroft","Wheelwright","White Plains","Whitesburg","Whitesville","Wickliffe","Wilder","Wildwood","Williamsburg","Williamstown","Willisburg","Wilmore","Winchester","Windy Hills","Wingo","Woodburn","Woodbury","Woodland Hills","Woodlawn","Woodlawn Park","Worthington","Worthington Hills","Worthville","Wurtland",],        
            ],
            [
                ['LA'],
                ["Abbeville","Abita Springs","Addis","Albany","Alexandria","Amite City","Anacoco","Angie","Arcadia","Arnaudville","Ashland","Athens","Atlanta","Baker","Baldwin","Ball","Basile","Baskin","Bastrop","Baton Rouge","Belcher","Benton","Bernice","Berwick","Bienville","Blanchard","Bogalusa","Bonita","Bossier City","Boyce","Breaux Bridge","Broussard","Brusly","Bryceland","Bunkie","Calvin","Campti","Cankton","Carencro","Castor","Central","Chataignier","Chatham","Cheneyville","Choudrant","Church Point","Clarence","Clarks","Clayton","Clinton","Colfax","Collinston","Columbia","Converse","Cottonport","Cotton Valley","Coushatta","Covington","Creola","Crowley","Cullen","Delcambre","Delhi","Delta","Denham Springs","DeQuincy","DeRidder","Dixie Inn","Dodson","Donaldsonville","Downsville","Doyline","Dry Prong","Dubach","Dubberly","Duson","East Hodge","Edgefield","Elizabeth","Elton","Epps","Erath","Eros","Estherwood","Eunice","Evergreen","Farmerville","Fenton","Ferriday","Fisher","Florien","Folsom","Fordoche","Forest","Forest Hill","Franklin","Franklinton","French Settlement","Georgetown","Gibsland","Gilbert","Gilliam","Glenmora","Golden Meadow","Goldonna","Gonzales","Grambling","Gramercy","Grand Cane","Grand Coteau","Grand Isle","Grayson","Greensburg","Greenwood","Gretna","Grosse Tete","Gueydan","Hall Summit","Hammond","Harahan","Harrisonburg","Haughton","Haynesville","Heflin","Henderson","Hessmer","Hodge","Homer","Hornbeck","Hosston","Houma","Ida","Independence","Iota","Iowa","Jackson","Jamestown","Jeanerette","Jean Lafitte","Jena","Jennings","Jonesboro","Jonesville","Junction City","Kaplan","Keachi","Kenner","Kentwood","Kilbourne","Killian","Kinder","Krotz Springs","Lafayette","Lake Arthur","Lake Charles","Lake Providence","Lecompte","Leesville","Leonville","Lillie","Lisbon","Livingston","Livonia","Lockport","Logansport","Longstreet","Loreauville","Lucky","Lutcher","McNary","Madisonville","Mamou","Mandeville","Mangham","Mansfield","Mansura","Many","Maringouin","Marion","Marksville","Martin","Maurice","Melville","Mermentau","Mer Rouge","Merryville","Minden","Monroe","Montgomery","Montpelier","Mooringsport","Moreauville","Morgan City","Morganza","Morse","Mound","Mount Lebanon","Napoleonville","Natchez","Natchitoches","Newellton","New Iberia","New Llano","New Orleans","New Roads","Noble","North Hodge","Norwood","Oakdale","Oak Grove","Oak Ridge","Oberlin","Oil City","Olla","Opelousas","Palmetto","Parks","Patterson","Pearl River","Pine Prairie","Pineville","Pioneer","Plain Dealing","Plaquemine","Plaucheville","Pleasant Hill","Pollock","Ponchatoula","Port Allen","Port Barre","Port Vincent","Powhatan","Provencal","Quitman","Rayne","Rayville","Reeves","Richmond","Richwood","Ridgecrest","Ringgold","Robeline","Rodessa","Rosedale","Roseland","Rosepine","Ruston","St. Francisville","St. Gabriel","St. Joseph","St. Martinville","Saline","Sarepta","Scott","Shongaloo","Shreveport","Sibley","Sicily Island","Sikes","Simmesport","Simpson","Simsboro","Slaughter","Slidell","Sorrento","South Mansfield","Spearsville","Springfield","Springhill","Stanley","Sterlington","Stonewall","Sulphur","Sun","Sunset","Tallulah","Tangipahoa","Thibodaux","Tickfaw","Tullos","Turkey Creek","Urania","Varnado","Vidalia","Vienna","Ville Platte","Vinton","Vivian","Walker","Washington","Waterproof","Welsh","Westlake","West Monroe","Westwego","White Castle","Wilson","Winnfield","Winnsboro","Wisner","Woodworth","Youngsville","Zachary","Zwolle",]
            ],
            [
                ['ME'],
                ["Portland †","Lewiston","Bangor †","South Portland","Auburn †","Biddeford","Sanford","Saco","Augusta ††","Westbrook","Waterville","Presque Isle","Brewer","Bath †","Caribou","Ellsworth †","Old Town","Rockland †","Belfast †","Gardiner","Calais","Hallowell","Eastport",]
            ],
            [
                ['MD'],
                ["Aberdeen","Accident","Annapolis","Baltimore","Barclay","Barnesville","Barton","Bel Air","Berlin","Berwyn Heights","Betterton","Bladensburg","Boonsboro","Bowie","Brentwood","Brookeville","Brookview","Brunswick","Burkittsville","Cambridge","Capitol Heights","Cecilton","Centreville","Charlestown","Chesapeake Beach","Chesapeake City","Chestertown","Cheverly","Chevy Chase","Chevy Chase Section Five","Chevy Chase Section Three","Chevy Chase View","Chevy Chase Village","Church Creek","Church Hill","Clear Spring","College Park","Colmar Manor","Cottage City","Crisfield","Cumberland","Deer Park","Delmar","Denton","District Heights","Eagle Harbor","East New Market","Easton","Edmonston","Eldorado","Elkton","Emmitsburg","Fairmount Heights","Federalsburg","Forest Heights","Frederick","Friendsville","Frostburg","Fruitland","Funkstown","Gaithersburg","Galena","Galestown","Garrett Park","Glenarden","Glen Echo","Goldsboro","Grantsville","Greenbelt","Greensboro","Hagerstown","Hampstead","Hancock","Havre de Grace","Hebron","Henderson","Highland Beach","Hillsboro","Hurlock","Hyattsville","Indian Head","Keedysville","Kensington","Kitzmiller","Landover Hills","La Plata","Laurel","Laytonsville","Leonardtown","Loch Lynn Heights","Lonaconing","Luke","Manchester","Mardela Springs","Martin's Additions","Marydel","Middletown","Midland","Millington","Morningside","Mountain Lake Park","Mount Airy","Mount Rainier","Myersville","New Carrollton","New Market","New Windsor","North Beach","North Brentwood","North Chevy Chase","North East","Oakland","Ocean City","Oxford","Perryville","Pittsville","Pocomoke City","Poolesville","Port Deposit","Port Tobacco Village","Preston","Princess Anne","Queen Anne","Queenstown","Ridgely","Rising Sun","Riverdale Park","Rock Hall","Rockville","Rosemont","St. Michaels","Salisbury","Seat Pleasant","Secretary","Sharpsburg","Sharptown","Smithsburg","Snow Hill","Somerset","Sudlersville","Sykesville","Takoma Park","Taneytown","Templeville","Thurmont","Trappe","Union Bridge","University Park","Upper Marlboro","Vienna","Walkersville","Washington Grove","Westernport","Westminster","Willards","Williamsport","Woodsboro",]
            ],
            [
                ['MA'],
                ["Abington","Acton","Acushnet","Adams","Agawam","Alford","Amesbury","Amherst","Andover","Aquinnah","Arlington","Ashburnham","Ashby","Ashfield","Ashland","Athol","Attleboro","Auburn","Avon","Ayer","Barnstable","Barre","Becket","Bedford","Belchertown","Bellingham","Belmont","Berkley","Berlin","Bernardston","Beverly","Billerica","Blackstone","Blandford","Bolton","Boston","Bourne","Boxborough","Boxford","Boylston","Braintree","Brewster","Bridgewater","Brimfield","Brockton","Brookfield","Brookline","Buckland","Burlington","Cambridge","Canton","Carlisle","Carver","Charlemont","Charlton","Chatham","Chelmsford","Chelsea","Cheshire","Chester","Chesterfield","Chicopee","Chilmark","Clarksburg","Clinton","Cohasset","Colrain","Concord","Conway","Cummington","Dalton","Danvers","Dartmouth","Dedham","Deerfield","Dennis","Dighton","Douglas","Dover","Dracut","Dudley","Dunstable","Duxbury","East Bridgewater","East Brookfield","East Longmeadow","Eastham","Easthampton","Easton","Edgartown","Egremont","Erving","Essex","Everett","Fairhaven","Fall River","Falmouth","Fitchburg","Florida","Foxborough","Framingham","Franklin","Freetown","Gardner","Georgetown","Gill","Gloucester","Goshen","Gosnold","Grafton","Granby","Granville","Great Barrington","Greenfield","Groton","Groveland","Hadley","Halifax","Hamilton","Hampden","Hancock","Hanover","Hanson","Hardwick","Harvard","Harwich","Hatfield","Haverhill","Hawley","Heath","Hingham","Hinsdale","Holbrook","Holden","Holland","Holliston","Holyoke","Hopedale","Hopkinton","Hubbardston","Hudson","Hull","Huntington","Ipswich","Kingston","Lakeville","Lancaster","Lanesborough","Lawrence","Lee","Leicester","Lenox","Leominster","Leverett","Lexington","Leyden","Lincoln","Littleton","Longmeadow","Lowell","Ludlow","Lunenburg","Lynn","Lynnfield","Malden","Manchester-by-the-Sea","Mansfield","Marblehead","Marion","Marlborough","Marshfield","Mashpee","Mattapoisett","Maynard","Medfield","Medford","Medway","Melrose","Mendon","Merrimac","Methuen","Middleborough","Middlefield","Middleton","Milford","Millbury","Millis","Millville","Milton","Monroe","Monson","Montague","Monterey","Montgomery","Mount Washington","Nahant","Nantucket","Natick","Needham","New Ashford","New Bedford","New Braintree","New Marlborough","New Salem","Newbury","Newburyport","Newton","Norfolk","North Adams","North Andover","North Attleborough","North Brookfield","North Reading","Northampton","Northborough","Northbridge","Northfield","Norton","Norwell","Norwood","Oak Bluffs","Oakham","Orange","Orleans","Otis","Oxford","Palmer","Paxton","Peabody","Pelham","Pembroke","Pepperell","Peru","Petersham","Phillipston","Pittsfield","Plainfield","Plainville","Plymouth","Plympton","Princeton","Provincetown","Quincy","Randolph","Raynham","Reading","Rehoboth","Revere","Richmond","Rochester","Rockland","Rockport","Rowe","Rowley","Royalston","Russell","Rutland","Salem","Salisbury","Sandisfield","Sandwich","Saugus","Savoy","Scituate","Seekonk","Sharon","Sheffield","Shelburne","Sherborn","Shirley","Shrewsbury","Shutesbury","Somerset","Somerville","South Hadley","Southampton","Southborough","Southbridge","Southwick","Spencer","Springfield","Sterling","Stockbridge","Stoneham","Stoughton","Stow","Sturbridge","Sudbury","Sunderland","Sutton","Swampscott","Swansea","Taunton","Templeton","Tewksbury","Tisbury","Tolland","Topsfield","Townsend","Truro","Tyngsborough","Tyringham","Upton","Uxbridge","Wakefield","Wales","Walpole","Waltham","Ware","Wareham","Warren","Warwick","Washington","Watertown","Wayland","Webster","Wellesley","Wellfleet","Wendell","Wenham","West Boylston","West Bridgewater","West Brookfield","West Newbury","West Springfield","West Stockbridge","West Tisbury","Westborough","Westfield","Westford","Westhampton","Westminster","Weston","Westport","Westwood","Weymouth","Whately","Whitman","Wilbraham","Williamsburg","Williamstown","Wilmington","Winchendon","Winchester","Windsor","Winthrop","Woburn","Worcester","Worthington","Wrentham","Yarmouth",]
            ],
            [
                ['MI'],
                ["Acme","Ada","Adams","Addison","Adrian","Aetna","Ahmeek","Akron","Alabaster","Alaiedon","Alamo","Alanson","Albee","Albert","Albion","Alcona","Algansee","Algoma","Algonac","Allegan","Allen","Allendale","Allen Park","Allis","Allouez","Alma","Almena","Almer","Almira","Almont","Aloha","Alpena","Alpha","Alpine","Amber","Amboy","Ann Arbor","Antioch","Antrim","Antwerp","Applegate","Arbela","Arcada","Arcadia","Arenac","Argentine","Argyle","Arlington","Armada","Arthur","Arvon","Ash","Ashland","Ashley","Assyria","Athens","Atlas","Attica","Auburn","Auburn Hills","Au Gres","Augusta","Aurelius","Au Sable","Austin","Au Train","Avery","Backus","Bad Axe","Bagley","Bainbridge","Baldwin","Baltimore","Bancroft","Bangor","Banks","Baraga","Bark River","Baroda","Barry","Barryton","Barton","Barton Hills","Batavia","Bates","Bath","Battle Creek","Bay","Bay City","Bay de Noc","Bay Mills","Bear Creek","Bearinger","Bear Lake","Beaugrand","Beaver","Beaver Creek","Beaverton","Bedford","Belding","Belknap","Bellaire","Belleville","Bellevue","Belvidere","Bengal","Bennington","Benona","Bentley","Benton","Benton Harbor","Benzonia","Bergland","Berkley","Berlin","Berrien","Berrien Springs","Bertrand","Bessemer","Bethany","Bethel","Beulah","Beverly Hills","Big Creek","Big Prairie","Big Rapids","Billings","Bingham","Bingham Farms","Birch Run","Birmingham","Bismarck","Blackman","Blaine","Blair","Blendon","Bliss","Blissfield","Bloomer","Bloomfield","Bloomfield Hills","Bloomingdale","Blue Lake","Blumfield","Boardman","Bohemia","Bois Blanc","Boon","Boston","Bourret","Bowne","Boyne City","Boyne Falls","Boyne Valley","Brady","Brampton","Branch","Brandon","Brant","Breckenridge","Breedsville","Breen","Breitung","Brevort","Bridgehampton","Bridgeport","Bridgeton","Bridgewater","Bridgman","Brighton","Briley","Britton","Brockway","Bronson","Brookfield","Brooklyn","Brooks","Broomfield","Brown","Brown City","Brownstown","Bruce","Buchanan","Buckeye","Buckley","Buel","Buena Vista","Bunker Hill","Burdell","Burleigh","Burlington","Burns","Burnside","Burr Oak","Burt","Burtchville","Burton","Bushnell","Butler","Butman","Butterfield","Byron","Cadillac","Caldwell","Caledonia","California","Calumet","Calvin","Cambria","Cambridge","Camden","Campbell","Cannon","Canton","Capac","Carleton","Carlton","Carmel","Carney","Caro","Carp Lake","Carrollton","Carson City","Carsonville","Cascade","Casco","Case","Caseville","Casnovia","Caspian","Cass City","Cassopolis","Castleton","Cato","Cedar","Cedar Creek","Cedar Springs","Cedarville","Cement City","Center","Center Line","Centerville","Central Lake","Centreville","Champion","Chandler","Chapin","Charleston","Charlevoix","Charlotte","Charlton","Chase","Chassell","Chatham","Cheboygan","Chelsea","Cherry Grove","Cherry Valley","Chesaning","Cheshire","Chester","Chesterfield","Chestonia","Chikaming","China","Chippewa","Chocolay","Churchill","Clam Lake","Clam Union","Clare","Clarence","Clarendon","Clark","Clarksville","Clawson","Clay","Claybanks","Clayton","Clearwater","Clement","Cleon","Cleveland","Clifford","Climax","Clinton","Clio","Clyde","Coe","Cohoctah","Coldsprings","Coldwater","Coleman","Colfax","Coloma","Colon","Columbia","Columbiaville","Columbus","Comins","Commerce","Comstock","Concord","Constantine","Convis","Conway","Cooper","Coopersville","Copemish","Copper City","Cornell","Corunna","Corwith","Cottrellville","Courtland","Covert","Covington","Crockery","Cross Village","Croswell","Croton","Crystal","Crystal Falls","Crystal Lake","Cumming","Curtis","Custer","Dafter","Daggett","Dallas","Dalton","Danby","Dansville","Davison","Day","Dayton","Dearborn","Dearborn Heights","Decatur","Deckerville","Deep River","Deerfield","Delaware","Delhi","Delta","Denmark","Denton","Denver","Detour","DeTour Village","Detroit","DeWitt","Dexter","Dickson","Dimondale","Dorr","Douglas","Douglass","Dover","Dowagiac","Doyle","Drummond","Dryden","Duncan","Dundee","Duplain","Durand","Dwight","Eagle","Eagle Harbor","East Bay","East China","East Grand Rapids","East Jordan","Eastlake","East Lansing","Easton","Eastpointe","East Tawas","Eaton","Eaton Rapids","Eau Claire","Echo","Eckford","Ecorse","Eden","Edenville","Edmore","Edwards","Edwardsburg","Egelston","Elba","Elberta","Elbridge","Elk","Elkland","Elk Rapids","Elkton","Ellington","Ellis","Ellsworth","Elmer","Elmira","Elm River","Elmwood","Elsie","Ely","Emerson","Emmett","Empire","Ensign","Ensley","Enterprise","Erie","Erwin","Escanaba","Essex","Essexville","Estral Beach","Eureka","Evangeline","Evart","Eveline","Everett","Evergreen","Ewing","Excelsior","Exeter","Fabius","Fairbanks","Fairfield","Fairgrove","Fairhaven","Fairplain","Faithorn","Farmington","Farmington Hills","Farwell","Fawn River","Fayette","Felch","Fennville","Fenton","Ferndale","Ferris","Ferry","Ferrysburg","Fife Lake","Filer","Fillmore","Flat Rock","Flint","Florence","Flowerfield","Flushing","Flynn","Ford River","Forest","Forester","Forest Home","Forestville","Fork","Forsyth","Fort Gratiot","Foster","Fountain","Fowler","Fowlerville","Frankenlust","Frankenmuth","Frankfort","Franklin","Fraser","Frederic","Fredonia","Freedom","Freeman","Freeport","Free Soil","Fremont","Frenchtown","Friendship","Frost","Fruitland","Fruitport","Fulton","Gaastra","Gagetown","Gaines","Galesburg","Galien","Ganges","Garden","Garden City","Garfield","Gaylord","Genesee","Geneva","Genoa","Georgetown","Germfask","Gerrish","Gibraltar","Gibson","Gilead","Gilford","Gilmore","Girard","Gladstone","Gladwin","Glen Arbor","Gobles","Golden","Goodar","Goodland","Goodrich","Goodwell","Gore","Gourley","Grand Beach","Grand Blanc","Grand Haven","Grand Island","Grand Ledge","Grand Rapids","Grandville","Grant","Grass Lake","Grattan","Grayling","Green","Greenbush","Greendale","Green Lake","Greenland","Greenleaf","Green Oak","Greenville","Greenwood","Grim","Grosse Ile","Grosse Pointe","Grosse Pointe Farms","Grosse Pointe Park","Grosse Pointe Woods","Grout","Groveland","Gun Plain","Gustin","Hadley","Hagar","Haight","Hamburg","Hamilton","Hamlin","Hampton","Hamtramck","Hancock","Handy","Hanover","Harbor Beach","Harbor Springs","Haring","Harper Woods","Harrietta","Harris","Harrison","Harrisville","Hart","Hartford","Hartland","Hartwick","Hastings","Hatton","Hawes","Hay","Hayes","Haynes","Hazel Park","Hazelton","Heath","Hebron","Helena","Hematite","Henderson","Hendricks","Henrietta","Hersey","Hesperia","Hiawatha","Higgins","Highland","Highland Park","Hill","Hillman","Hillsdale","Hinton","Holland","Holly","Holmes","Holton","Home","Homer","Homestead","Honor","Hope","Hopkins","Horton","Houghton","Howard","Howard City","Howell","Hubbardston","Hudson","Hudsonville","Hulbert","Humboldt","Hume","Huntington Woods","Huron","Ida","Imlay","Imlay City","Independence","Indianfields","Ingallston","Ingersoll","Ingham","Inkster","Inland","Interior","Inverness","Inwood","Ionia","Iosco","Ira","Iron Mountain","Iron River","Ironwood","Irving","Isabella","Ishpeming","Ithaca","Jackson","James","Jamestown","Jasper","Jefferson","Jerome","Johnstown","Jonesfield","Jonesville","Jordan","Joyfield","Juniata","Kalamazoo","Kalamo","Kaleva","Kalkaska","Kasson","Kawkawlin","Kearney","Keego Harbor","Keeler","Keene","Kenockee","Kent City","Kentwood","Kimball","Kinde","Kinderhook","Kingsford","Kingsley","Kingston","Kinross","Klacking","Kochville","Koehler","Koylton","Krakow","Lafayette","LaGrange","Laingsburg","Laird","Lake","Lake Angelus","Lake Ann","Lake City","Lakefield","Lake Isabella","Lake Linden","Lake Odessa","Lake Orion","Laketon","Laketown","Lakeview","Lakewood Club","Lamotte","L'Anse","Lansing","Lapeer","Larkin","La Salle","Lathrup Village","Laurium","Lawrence","Lawton","Leavitt","Lebanon","Lee","Leelanau","Leighton","Leland","Lennon","Lenox","Leonard","Leoni","Leonidas","Leroy","LeRoy","Leslie","Lexington","Liberty","Lilley","Lima","Limestone","Lincoln","Lincoln Park","Linden","Litchfield","Littlefield","Little Traverse","Livingston","Livonia","Locke","Lockport","Lodi","Logan","London","Long Lake","Long Rapids","Loud","Lovells","Lowell","Ludington","Luna Pier","Luther","Lyndon","Lynn","Lyon","Lyons","McBain","McBride","Mackinac Island","Mackinaw","Mackinaw City","McKinley","McMillan","Macomb","Macon","Madison","Madison Heights","Mancelona","Manchester","Manistee","Manistique","Manlius","Mansfield","Manton","Maple Forest","Maple Grove","Maple Rapids","Maple Ridge","Maple River","Maple Valley","Marathon","Marcellus","Marengo","Marenisco","Marilla","Marine City","Marion","Markey","Marlette","Marquette","Marshall","Martin","Martiny","Marysville","Mason","Masonville","Mastodon","Matchwood","Mathias","Mattawan","Matteson","Maybee","Mayfield","Mayville","Meade","Mecosta","Medina","Mellen","Melrose","Melvin","Melvindale","Memphis","Mendon","Menominee","Mentor","Meridian","Merrill","Merritt","Mesick","Metamora","Metz","Meyer","Michiana","Michigamme","Middle Branch","Middlebury","Middleville","Midland","Mikado","Milan","Milford","Millbrook","Millen","Millersburg","Millington","Mills","Milton","Minden","Minden City","Mitchell","Moffatt","Moltke","Monitor","Monroe","Montague","Montcalm","Monterey","Montgomery","Montmorency","Montrose","Moore","Moorland","Moran","Morenci","Morley","Morrice","Morton","Moscow","Mottville","Mount Clemens","Mount Forest","Mount Haley","Mount Morris","Mount Pleasant","Mueller","Muir","Mullett","Mulliken","Mundy","Munising","Munro","Muskegon","Muskegon Heights","Mussey","Nadeau","Nahma","Napoleon","Nashville","Negaunee","Nelson","Nester","Newark","Newaygo","New Baltimore","Newberg","Newberry","New Buffalo","New Era","Newfield","New Haven","Newkirk","New Lothrop","Newton","Niles","Noble","Norman","North Adams","North Allis","North Branch","Northfield","North Muskegon","North Plains","Northport","North Shade","North Star","Northville","Norton Shores","Norvell","Norway","Norwich","Norwood","Nottawa","Novesta","Novi","Nunda","Oakfield","Oakland","Oakley","Oak Park","Oceola","Ocqueoc","Odessa","Ogden","Ogemaw","Olive","Oliver","Olivet","Omer","Onaway","Oneida","Onekama","Onondaga","Onota","Onsted","Ontonagon","Ontwa","Orange","Orangeville","Orchard Lake Village","Oregon","Orient","Orion","Orleans","Oronoko","Ortonville","Osceola","Oscoda","Oshtemo","Ossineke","Otisco","Otisville","Otsego","Otsego Lake","Otter Lake","Otto","Overisel","Ovid","Owendale","Owosso","Oxford","Palmyra","Paradise","Parchment","Paris","Park","Parma","Pavilion","Paw Paw","Peacock","Peaine","Peck","Pellston","Peninsula","Penn","Pennfield","Pentland","Pentwater","Pere Marquette","Perrinton","Perry","Petersburg","Petoskey","Pewamo","Pickford","Pierson","Pigeon","Pinckney","Pinconning","Pine","Pine Grove","Pine River","Pinora","Pioneer","Pipestone","Pittsfield","Pittsford","Plainfield","Plainwell","Platte","Pleasanton","Pleasant Plains","Pleasant Ridge","Pleasantview","Plymouth","Pointe Aux Barques","Pokagon","Polkton","Pontiac","Portage","Port Austin","Porter","Port Hope","Port Huron","Portland","Port Sanilac","Port Sheldon","Portsmouth","Posen","Potterville","Powell","Powers","Prairie Ronde","Prairieville","Prescott","Presque Isle","Pulaski","Pulawski","Putnam","Quincy","Raber","Raisin","Raisinville","Ransom","Rapid River","Ravenna","Ray","Reading","Readmond","Redding","Redford","Reed City","Reeder","Reese","Reno","Republic","Resort","Reynolds","Rich","Richfield","Richland","Richmond","Ridgeway","Riga","Riley","River Rouge","Riverside","Riverton","Riverview","Rives","Robinson","Rochester","Rochester Hills","Rockford","Rockland","Rock River","Rockwood","Rogers","Rogers City","Rolland","Rollin","Rome","Romeo","Romulus","Ronald","Roosevelt Park","Roscommon","Rose","Rosebush","Rose City","Rose Lake","Roseville","Ross","Rothbury","Roxand","Royal Oak","Royalton","Rubicon","Rudyard","Rush","Rust","Rutland","Sage","Saginaw","Sagola","St. Charles","St. Clair","St. Clair Shores","St. Ignace","St. James","St. Johns","St. Joseph","St. Louis","Salem","Saline","Sanborn","Sand Beach","Sand Lake","Sands","Sandstone","Sandusky","Sanford","Sanilac","Saranac","Sauble","Saugatuck","Sault Ste. Marie","Schoolcraft","Scio","Sciota","Scipio","Scottville","Sebewa","Sebewaing","Secord","Selma","Seneca","Seney","Seville","Sharon","Shelby","Shepherd","Sheridan","Sherman","Sherwood","Shiawassee","Shoreham","Sidney","Sigel","Silver Creek","Sims","Skandia","Slagle","Sodus","Solon","Somerset","Soo","South Arm","South Branch","Southfield","Southgate","South Haven","South Lyon","South Range","South Rockwood","Spalding","Sparta","Spaulding","Speaker","Spencer","Spring Arbor","Springdale","Springfield","Spring Lake","Springport","Springvale","Springville","Spurr","Stambaugh","Standish","Stannard","Stanton","Stanwood","Star","Stephenson","Sterling","Sterling Heights","Stevensville","Stockbridge","Stronach","Sturgis","Sugar Island","Sullivan","Summerfield","Summit","Sumner","Sumpter","Sunfield","Superior","Surrey","Suttons Bay","Swan Creek","Swartz Creek","Sweetwater","Sylvan","Sylvan Lake","Tallmadge","Tawas","Tawas City","Taylor","Taymouth","Tecumseh","Tekonsha","Texas","Thetford","Thomas","Thompson","Thompsonville","Thornapple","Three Oaks","Three Rivers","Tilden","Tittabawassee","Tobacco","Tompkins","Torch Lake","Traverse City","Trenton","Trout Lake","Trowbridge","Troy","Turin","Turner","Tuscarora","Tuscola","Tustin","Twining","Tyrone","Ubly","Unadilla","Union","Union City","Unionville","Utica","Valley","Van Buren","Vandalia","Vanderbilt","Vassar","Venice","Vergennes","Vermontville","Vernon","Verona","Vevay","Vicksburg","Victor","Victory","Vienna","Village of Clarkston","Village of Grosse Pointe Shores","Volinia","Wakefield","Wakeshma","Waldron","Wales","Walker","Walkerville","Walled Lake","Walton","Warner","Warren","Washington","Waterford","Waterloo","Watersmeet","Watertown","Watervliet","Watson","Waucedah","Waverly","Wawatam","Wayland","Wayne","Weare","Webber","Webberville","Webster","Weesaw","Weldon","Wellington","Wells","West Bloomfield","West Branch","Westland","Westphalia","West Traverse","Wexford","Wheatfield","Wheatland","Wheeler","White Cloud","Whitefish","Whiteford","Whitehall","White Lake","White Oak","White Pigeon","White River","Whitewater","Whitney","Whittemore","Wilber","Wilcox","Williams","Williamston","Williamstown","Wilmot","Wilson","Windsor","Winfield","Winsor","Winterfield","Wise","Wisner","Wixom","Wolverine","Wolverine Lake","Woodbridge","Woodhaven","Woodhull","Woodland","Woodstock","Worth","Wright","Wyandotte","Wyoming","Yale","Yankee Springs","Yates","York","Ypsilanti","Zeeland","Zilwaukee",]
            ],
            [
                ['MN'],
                ["Morristown","Buhl","Biwabik","Bird Island","Scanlon","Houston","Nashwauk","Watkins","Deer River","Walker †","Le Roy","Pine River","Battle Lake","Henderson","Hallock †","Birchwood Village","Onamia","St. Stephen","Lilydale","Morgan","Emily","Mazeppa","Fertile","St. Clair","Silver Lake","Walnut Grove","Rushford Village","Henning","Clarkfield","Lake Park","Isle","Bovey","Kimball","Adams","Twin Valley","Lamberton","West Concord","Belgrade","Blackduck","Cass Lake","Landfall","Browerville","Dover","Hilltop","Raymond","Mabel","Greenwood","Gibbon","Brooten","Hancock","Lanesboro","Brownton","Stockton","Elysian","Kerkhoven","Cleveland","Karlstad","Marine on St. Croix","Holdingford","Greenbush","Westbrook","Trimont","Hampton","Courtland","Ellendale","Buffalo Lake","Brownsdale","Clarks Grove","Clear Lake","Hendricks","Marble","Hoffman","Sebeka","Loretto","Freeport","Hills","Rollingstone","Wabasso","Kasota","La Prairie","Heron Lake","Welcome","Motley","Clarissa","Minnesota Lake","Center City †","Stephen","Argyle","Alden","Lake Benton","Taconite","Glenville","Balaton","Elmore","Randall","Ottertail","McIntosh","Grove City","Littlefork","Barnum","Jasper","Evansville","Hill City","Butterfield","Good Thunder","Cook","Verndale","Ranier","Halstad","Minnetonka Beach","Ironton","Hokah","Graceville","Sabin","Lyle","Racine","Stewart","Sunfish Lake","Ulen","Claremont","Green Isle","Browns Valley","Geneva","Ivanhoe †","Audubon","Clearbrook","Hamburg","Eagle Bend","Deerwood","Floodwood","Foreston","Amboy","Pennock","Willernie","Sacred Heart","Bethel","Prinsburg","Brownsville","Tower","Carlos","Lafayette","Brandon","Erskine","Kandiyohi","Altura","Woodland","Rothsay","Gem Lake","Brewster","Bertha","Franklin","Kiester","Pillager","Ellsworth","Danube","Lynd","Jenkins","Cosmos","Kellogg","Randolph","Bigfork","New Auburn","Ashby","Akeley","Herman","Wykoff","Oklee","Fisher","Upsala","Vermillion","Rose Creek","Clinton","Sturgeon Lake","Nevis","Waubun","Wrenshall","Barrett","Long Beach","Wood Lake","New Germany","Fountain","Fifty Lakes","Miltona","Willow River","Remer","Pine Springs","St. Marys Point","Emmons","Hanska","Morton","Chokio","Medicine Lake","Round Lake","Ghent","McGregor","Newfolden","Ogilvie","Comfrey","Alvarado","Badger","Belview","Milan","Underwood","Askov","Calumet","Cuyuna","Darwin","Garfield","Maynard","Vergas","Jeffers","Canton","Ceylon","Bricelyn","St. Martin","Wilmont","Dexter","Orr","Rushmore","Russell","Grey Eagle","Lancaster","Swanville","Oslo","New Munich","Deer Creek","Vernon Center","Lakeland Shores","Sanborn","Hackensack","Hartland","Dakota","Plato","Finlayson","Hollandale","Vesta","Kensington","Middle River","Skyline","Lowry","Wilton","Nerstrand","Hendrum","Plummer","Gonvick","Granada","Beaver Creek","Hanley Falls","Utica","Bowlus","Freeborn","Cyrus","Buckman","St. Hilaire","Kelliher","Climax","Murdock","Echo","Hewitt","Eitzen","Chandler","Ostrander","Backus","Dalton","Villard","Hayward","Lewisville","Zumbro Falls","Pemberton","Milroy","Bigelow","Lake Lillian","Callaway","Lake Wilson","Cromwell","Pease","Donnelly","Flensburg","Lismore","Waldorf","Ruthton","Winger","Elrosa","Rutledge","Currie","Greenwald","Big Falls","Gilman","Beardsley","Magnolia","Northrop","Wahkon","Bluffton","Garrison","Grygla","Dennison","Hitterdal","Gary","Mendota","Storden","Lake Bronson","Okabena","Tenstrike","Peterson","Sobieski","Minnesota City","Northome","Watson","Nelson","Forada","Meire Grove","Dent","Hardwick","South Haven","Easton","Ogema","Frost","Shelly","Warba","Millville","Lucan","Shevlin","Williams","Porter","Kennedy","Kettle River","Felton","Mapleview","Bellechester","Elizabeth","Steen","Beaver Bay","Kinney","Delavan","Winton","Palisade","Holland","Wendell","Kingston","Clontarf","Boyd","Coates","Blomkest","Campbell","Elba","Grasston","Bellingham","Dunnell","Longville","Waltham","Erhard","Twin Lakes","Marietta","Mentor","Elkton","Clements","Conger","Roosevelt","Brookston","Brooks","Avoca","Burtrum","Kilkenny","Brook Park","Iona","Taunton","Wolverton","Garvin","Hammond","Odessa","Goodridge","Meadowlands","Quamba","Wright","Georgetown","Bingham Lake","De Graff","Harding","Heidelberg","Ormsby","McKinley","Miesville","West Union","Bena","Alpha","Effie","Elmdale","Woodstock","Riverton","Foxhome","Biscay","Chickamaw Beach","Laporte","Federal Dam","Minneiska","New Trier","Lake Henry","Roscoe","Borup","Squaw Lake","Clitherall","Bock","Millerville","Odin","Viking","Beltrami","Darfur","Trommald","Bruno","Lastrup","Sunburg","Alberta","Comstock","Richville","Solway","Spring Hill","St. Leo","Bejou","Danvers","Zemple","Dumont","Tamarack","Revere","Holloway","Holt","Iron Junction","Lengby","Nielsville","St. Anthony","Evan","Perley","La Salle","Seaforth","Wanda","Trosky","Vining","Kent","Turtle River","McGrath","St. Rosa","Arco","Dundee","Fort Ripley","Henriette","Norcross","Kenneth","Nassau","Strandquist","Genola","Gully","Nashua","Walters","Ihlen","Whalan","Nimrod","Delhi","Kerrick","Sargeant","Manhattan Beach","Taopi","Westport","Hazel Run","St. Vincent","Wilder","Halma","Tintah","Hadley","Hatfield","Wolf Lake","Manchester","Urbank","Dovray","Mizpah","Doran","Farwell","Leonidas","Boy River","Sedan","Aldrich","Myrtle","Trail","Cedar Mills","Louisburg","Humboldt","Leonard","Strathcona","Donaldson","Florence","Hillman","Cobden","Regal","Denham","Correll","Johnson","Barry","Kinbrae","Funkley",]
            ],
            [
                ['MS'],
                ["Abbeville","Aberdeen","Ackerman","Algoma","Alligator","Amory","Anguilla","Arcola","Artesia","Ashland","Baldwyn","Bassfield","Batesville","Bay St. Louis","Bay Springs","Beaumont","Beauregard","Belmont","Belzoni","Benoit","Bentonia","Beulah","Big Creek","Biloxi","Blue Mountain","Blue Springs","Bolton","Booneville","Boyle","Brandon","Braxton","Brookhaven","Brooksville","Bruce","Bude","Burnsville","Byhalia","Byram","Caledonia","Calhoun City","Canton","Carrollton","Carthage","Cary","Centreville","Charleston","Chunky","Clarksdale","Cleveland","Clinton","Coahoma","Coffeeville","Coldwater","Collins","Columbia","Columbus","Como","Corinth","Courtland","Crawford","Crenshaw","Crosby","Crowder","Cruger","Crystal Springs","Decatur","De Kalb","Derma","D'Iberville","D'Lo","Diamondhead","Doddsville","Drew","Duck Hill","Dumas","Duncan","Durant","Ecru","Eden","Edwards","Ellisville","Enterprise","Ethel","Eupora","Falcon","Falkner","Farmington","Fayette","Flora","Florence","Flowood","Forest","French Camp","Friars Point","Fulton","Gattman","Gautier","Georgetown","Glen","Glendora","Gloster","Golden","Goodman","Greenville","Greenwood","Grenada","Gulfport","Gunnison","Guntown","Hatley","Hattiesburg","Hazlehurst","Heidelberg","Hernando","Hickory","Hickory Flat","Hollandale","Holly Springs","Horn Lake","Houston","Indianola","Inverness","Isola","Itta Bena","Iuka","Jackson","Jonestown","Jumpertown","Kilmichael","Kosciusko","Kossuth","Lake","Lambert","Laurel","Leakesville","Learned","Leland","Lena","Lexington","Liberty","Long Beach","Louin","Louise","Louisville","Lucedale","Lula","Lumberton","Lyon","Maben","McComb","McCool","McLain","Macon","Madison","Magee","Magnolia","Mantachie","Mantee","Marietta","Marion","Marks","Mathiston","Mayersville","Meadville","Mendenhall","Meridian","Merigold","Metcalfe","Mize","Monticello","Montrose","Moorhead","Morgan City","Morton","Moss Point","Mound Bayou","Mount Olive","Myrtle","Natchez","Nettleton","New Albany","New Augusta","New Hebron","New Houlka","Newton","North Carrollton","Noxapater","Oakland","Ocean Springs","Okolona","Olive Branch","Osyka","Oxford","Pace","Pachuta","Paden","Pascagoula","Pass Christian","Pearl","Pelahatchie","Petal","Philadelphia","Picayune","Pickens","Pittsboro","Plantersville","Polkville","Pontotoc","Pope","Poplarville","Port Gibson","Potts Camp","Prentiss","Puckett","Purvis","Quitman","Raleigh","Raymond","Renova","Richland","Richton","Ridgeland","Rienzi","Ripley","Rolling Fork","Rosedale","Roxie","Ruleville","Sallis","Saltillo","Sandersville","Sardis","Satartia","Schlater","Scooba","Sebastopol","Seminary","Senatobia","Shannon","Shaw","Shelby","Sherman","Shubuta","Shuqualak","Sidon","Silver City","Silver Creek","Slate Springs","Sledge","Smithville","Snow Lake Shores","Soso","Southaven","Starkville","State Line","Stonewall","Sturgis","Summit","Sumner","Sumrall","Sunflower","Sylvarena","Taylor","Taylorsville","Tchula","Terry","Thaxton","Tillatoba","Tishomingo","Toccopola","Tremont","Tunica","Tupelo","Tutwiler","Tylertown","Union","Utica","Vaiden","Vardaman","Verona","Vicksburg","Walls","Walnut","Walnut Grove","Walthall","Water Valley","Waveland","Waynesboro","Webb","Weir","Wesson","West","West Point","Wiggins","Winona","Winstonville","Woodland","Woodville","Yazoo City",]
            ],
            [
                ['MO'],
                ["Abbeville","Aberdeen","Ackerman","Algoma","Alligator","Amory","Anguilla","Arcola","Artesia","Ashland","Baldwyn","Bassfield","Batesville","Bay St. Louis","Bay Springs","Beaumont","Beauregard","Belmont","Belzoni","Benoit","Bentonia","Beulah","Big Creek","Biloxi","Blue Mountain","Blue Springs","Bolton","Booneville","Boyle","Brandon","Braxton","Brookhaven","Brooksville","Bruce","Bude","Burnsville","Byhalia","Byram","Caledonia","Calhoun City","Canton","Carrollton","Carthage","Cary","Centreville","Charleston","Chunky","Clarksdale","Cleveland","Clinton","Coahoma","Coffeeville","Coldwater","Collins","Columbia","Columbus","Como","Corinth","Courtland","Crawford","Crenshaw","Crosby","Crowder","Cruger","Crystal Springs","Decatur","De Kalb","Derma","D'Iberville","D'Lo","Diamondhead","Doddsville","Drew","Duck Hill","Dumas","Duncan","Durant","Ecru","Eden","Edwards","Ellisville","Enterprise","Ethel","Eupora","Falcon","Falkner","Farmington","Fayette","Flora","Florence","Flowood","Forest","French Camp","Friars Point","Fulton","Gattman","Gautier","Georgetown","Glen","Glendora","Gloster","Golden","Goodman","Greenville","Greenwood","Grenada","Gulfport","Gunnison","Guntown","Hatley","Hattiesburg","Hazlehurst","Heidelberg","Hernando","Hickory","Hickory Flat","Hollandale","Holly Springs","Horn Lake","Houston","Indianola","Inverness","Isola","Itta Bena","Iuka","Jackson","Jonestown","Jumpertown","Kilmichael","Kosciusko","Kossuth","Lake","Lambert","Laurel","Leakesville","Learned","Leland","Lena","Lexington","Liberty","Long Beach","Louin","Louise","Louisville","Lucedale","Lula","Lumberton","Lyon","Maben","McComb","McCool","McLain","Macon","Madison","Magee","Magnolia","Mantachie","Mantee","Marietta","Marion","Marks","Mathiston","Mayersville","Meadville","Mendenhall","Meridian","Merigold","Metcalfe","Mize","Monticello","Montrose","Moorhead","Morgan City","Morton","Moss Point","Mound Bayou","Mount Olive","Myrtle","Natchez","Nettleton","New Albany","New Augusta","New Hebron","New Houlka","Newton","North Carrollton","Noxapater","Oakland","Ocean Springs","Okolona","Olive Branch","Osyka","Oxford","Pace","Pachuta","Paden","Pascagoula","Pass Christian","Pearl","Pelahatchie","Petal","Philadelphia","Picayune","Pickens","Pittsboro","Plantersville","Polkville","Pontotoc","Pope","Poplarville","Port Gibson","Potts Camp","Prentiss","Puckett","Purvis","Quitman","Raleigh","Raymond","Renova","Richland","Richton","Ridgeland","Rienzi","Ripley","Rolling Fork","Rosedale","Roxie","Ruleville","Sallis","Saltillo","Sandersville","Sardis","Satartia","Schlater","Scooba","Sebastopol","Seminary","Senatobia","Shannon","Shaw","Shelby","Sherman","Shubuta","Shuqualak","Sidon","Silver City","Silver Creek","Slate Springs","Sledge","Smithville","Snow Lake Shores","Soso","Southaven","Starkville","State Line","Stonewall","Sturgis","Summit","Sumner","Sumrall","Sunflower","Sylvarena","Taylor","Taylorsville","Tchula","Terry","Thaxton","Tillatoba","Tishomingo","Toccopola","Tremont","Tunica","Tupelo","Tutwiler","Tylertown","Union","Utica","Vaiden","Vardaman","Verona","Vicksburg","Walls","Walnut","Walnut Grove","Walthall","Water Valley","Waveland","Waynesboro","Webb","Weir","Wesson","West","West Point","Wiggins","Winona","Winstonville","Woodland","Woodville","Yazoo City",]
            ],
            [
                ['MT'],
                ["Alberton","Anaconda","Bainville","Baker","Bearcreek","Belgrade","Belt","Big Sandy","Big Timber","Billings","Boulder","Bozeman","Bridger","Broadus","Broadview","Brockton","Browning","Butte","Cascade","Chester","Chinook","Choteau","Circle","Clyde Park","Colstrip","Columbia Falls","Columbus","Conrad","Culbertson","Cut Bank","Darby","Deer Lodge","Denton","Dillon","Dodson","Drummond","Dutton","East Helena","Ekalaka","Ennis","Eureka","Fairfield","Fairview","Flaxville","Forsyth","Fort Benton","Fort Peck","Froid","Fromberg","Geraldine","Glasgow","Glendive","Grass Range","Great Falls","Hamilton","Hardin","Harlem","Harlowton","Havre","Helena","Hingham","Hobson","Hot Springs","Hysham","Ismay","Joliet","Jordan","Judith Gap","Kalispell","Kevin","Laurel","Lavina","Lewistown","Libby","Lima","Livingston","Lodge Grass","Malta","Manhattan","Medicine Lake","Melstone","Miles City","Missoula","Moore","Nashua","Neihart","Opheim","Outlook","Philipsburg","Pinesdale","Plains","Plentywood","Plevna","Polson","Poplar","Red Lodge","Rexford","Richey","Ronan","Roundup","Ryegate","Saco","Scobey","Shelby","Sheridan","Sidney","St. Ignatius","Stanford","Stevensville","Sunburst","Superior","Terry","Thompson Falls","Three Forks","Townsend","Troy","Twin Bridges","Valier","Virginia City","Walkerville","West Yellowstone","Westby","White Sulphur Springs","Whitefish","Whitehall","Wibaux","Winifred","Winnett","Wolf Point",]
            ],
            [
                ['NE'],
                ["Omaha","Lincoln","Bellevue","Grand Island","Kearney","Fremont","Hastings","North Platte","Norfolk","Columbus","Papillion","La Vista","Scottsbluff","South Sioux City","Beatrice","Lexington","Alliance","Gering","Blair","York","McCook","Nebraska City","Ralston","Crete","Seward","Sidney","Plattsmouth","Schuyler","Chadron","Gretna","Wayne","Holdrege","Ogallala","Wahoo","Aurora","Falls City","Cozad","Fairbury","O'Neill","Waverly","Gothenburg","Broken Bow","Auburn","West Point","Minden","Central City","David City","Valentine","Ashland","Kimball","Madison","St. Paul","Milford","Geneva","Imperial","Ord","Valley",]
            ],
            [
                ['NV'],
                ["Boulder City","Caliente","Carlin","Carson City","Elko","Ely","Fallon","Fernley","Henderson","Las Vegas","Lovelock","Mesquite","North Las Vegas","Reno","Sparks","Wells","West Wendover","Winnemucca","Yerington",]
            ],
            [
                ['NH'],
                ["Acworth","Albany","Alexandria","Allenstown","Alstead","Alton","Amherst","Andover","Antrim","Ashland","Atkinson","Auburn","Barnstead","Barrington","Bartlett","Bath","Bedford","Belmont","Bennington","Benton","Bethlehem","Boscawen","Bow","Bradford","Brentwood","Bridgewater","Bristol","Brookfield","Brookline","Campton","Canaan","Candia","Canterbury","Carroll","Center Harbor","Charlestown","Chatham","Chester","Chesterfield","Chichester","Clarksville","Colebrook","Columbia","Conway","Cornish","Croydon","Dalton","Danbury","Danville","Deerfield","Deering","Derry","Dorchester","Dublin","Dummer","Dunbarton","Durham","East Kingston","Easton","Eaton","Effingham","Ellsworth","Enfield","Epping","Epsom","Errol","Exeter","Farmington","Fitzwilliam","Francestown","Franconia","Freedom","Fremont","Gilford","Gilmanton","Gilsum","Goffstown","Gorham","Goshen","Grafton","Grantham","Greenfield","Greenland","Greenville","Groton","Hampstead","Hampton","Hampton Falls","Hancock","Hanover","Harrisville","Hart's Location","Haverhill","Hebron","Henniker","Hill","Hillsborough","Hinsdale","Holderness","Hollis","Hooksett","Hopkinton","Hudson","Jackson","Jaffrey","Jefferson","Kensington","Kingston","Lancaster","Landaff","Langdon","Lee","Lempster","Lincoln","Lisbon","Litchfield","Littleton","Londonderry","Loudon","Lyman","Lyme","Lyndeborough","Madbury","Madison","Marlborough","Marlow","Mason","Meredith","Merrimack","Middleton","Milan","Milford","Milton","Monroe","Mont Vernon","Moultonborough","Nelson","New Boston","New Castle","New Durham","New Hampton","New Ipswich","New London","Newbury","Newfields","Newington","Newmarket","Newport","Newton","North Hampton","Northfield","Northumberland","Northwood","Nottingham","Orange","Orford","Ossipee","Pelham","Pembroke","Peterborough","Piermont","Pittsburg","Pittsfield","Plainfield","Plaistow","Plymouth","Randolph","Raymond","Richmond","Rindge","Rollinsford","Roxbury","Rumney","Rye","Salem","Salisbury","Sanbornton","Sandown","Sandwich","Seabrook","Sharon","Shelburne","South Hampton","Springfield","Stark","Stewartstown","Stoddard","Strafford","Stratford","Stratham","Sugar Hill","Sullivan","Sunapee","Surry","Sutton","Swanzey","Tamworth","Temple","Thornton","Tilton","Troy","Tuftonboro","Unity","Wakefield","Walpole","Warner","Warren","Washington","Waterville Valley","Weare","Webster","Wentworth","Westmoreland","Whitefield","Wilmot","Wilton","Winchester","Windham","Windsor","Wolfeboro","Woodstock",]
            ],
            [
                ['NJ'],
                ["Newark","Jersey City","Paterson","Elizabeth","Edison","Woodbridge Township","Lakewood Township","Toms River","Hamilton Township","Trenton","Clifton","Camden","Brick Township","Cherry Hill","Passaic","Middletown Township","Union City","Old Bridge Township","Gloucester Township","East Orange","Bayonne","Franklin Township","North Bergen","Vineland","Union Township","Piscataway","New Brunswick","Jackson Township","Wayne","Irvington","Parsippany-Troy Hills","Howell Township","Perth Amboy","Hoboken","Plainfield","West New York","Washington Township","East Brunswick","Bloomfield","West Orange","Evesham Township","Bridgewater Township","South Brunswick","Egg Harbor Township","Manchester Township","Hackensack","Sayreville","Mount Laurel","Berkeley Township","North Brunswick","Kearny","Linden","Marlboro Township","Teaneck","Atlantic City","Winslow Township","Monroe Township","Manalapan Township","Hillsborough Township","Montclair","Galloway Township","Freehold Township","Belleville","Pennsauken Township","Ewing Township","Fort Lee","Lawrence Township","Fair Lawn","Willingboro Township","Long Branch","Deptford Township","Garfield","Westfield","City of Orange","Livingston","Voorhees Township","Princeton","Millville","Nutley","Mount Olive Township","Neptune Township","Pemberton Township","Lacey Township","Rahway","Ocean Township","East Windsor Township","West Windsor Township","Englewood","Bergenfield","Bernards Township","Stafford Township","Paramus","Wall Township","Mahwah","West Milford","Randolph","Bridgeton","Ridgewood","Rockaway Township","Lodi","Vernon Township","Maplewood","Cliffside Park","Scotch Plains","South Plainfield","Roxbury Township","Medford","Plainsboro Township","Lower Township","Carteret","Cranford","Burlington Township","Morris Township","Montgomery","Raritan Township","North Plainfield","West Deptford Township","Montville","Summit","Hillside","Jefferson Township","Roselle","Barnegat Township","Moorestown","Lyndhurst","Hazlet","Pleasantville","Millburn","Little Egg Harbor Township","Sparta Township","Palisades Park","Elmwood Park","Maple Shade Township","Middle Township","Hawthorne","Glassboro","Morristown","Point Pleasant","Aberdeen Township","Dover","Rutherford","Tinton Falls","Lindenwold","Dumont","Hopewell Township","Delran Township","Holmdel Township","Wyckoff","Denville Township","New Milford","Secaucus","South Orange Village","Readington Township","Asbury Park","South River","Madison","Springfield Township","Cinnaminson Township","Pequannock Township","North Arlington","Warren Township","Mantua Township","Hopatcong","Phillipsburg","Hammonton","Clark","Haddon Township","Tenafly","Ramsey","Branchburg","Little Falls","Highland Park","Collingswood","Fairview","Hanover Township","Saddle Brook","Robbinsville Township","Middlesex","Harrison","Metuchen","Clinton Township","Pennsville Township","Verona","Roselle Park","Berkeley Heights","Oakland","Ridgefield Park","Eatontown","Lumberton Township","Weehawken","Harrison Township","Cedar Grove","Upper Township","Ringwood","Red Bank","New Providence","Florence Township","Somerville","Freehold Borough","Hasbrouck Heights","Woodland Park","Ocean City","Florham Park","Glen Rock","Haddonfield","Bellmawr","Edgewater","Gloucester City","Bordentown Township","Wantage Township","River Edge","Wallington","Guttenberg","East Hanover Township","Wanaque","Pompton Lakes","Beachwood","Ridgefield","Westwood","Totowa","Somers Point","West Caldwell","Ventnor City","Waterford Township","Little Ferry","Franklin Lakes","Millstone Township","Lincoln Park","Southampton Township","Chatham Township","Bound Brook","Manville","Kinnelon","Pine Hill","Hillsdale","Woolwich Township","Woodbury","Colts Neck Township","Keansburg","Burlington","Hackettstown","River Vale","Waldwick","East Greenwich Township","Maywood","Mount Holly","Brigantine","Pittsgrove Township","Pitman","Chatham Borough","Leonia","East Rutherford","Edgewater Park","Audubon","Westampton Township","Matawan","Long Hill Township","Park Ridge","South Amboy","Northfield","Cresskill","Mansfield Township","Runnemede","Plumsted Township","North Haledon","Absecon","Closter","Byram Township","Boonton","Haledon","Spotswood","Hardyston Township","Upper Saddle River","Bogota","Clayton","Bedminster","West Long Branch","Riverside Township","Carneys Point Township","Lopatcong Township","Newton","Oradell","Maurice River Township","Kenilworth","Montvale","Chester Township","Caldwell","Bernardsville","Chesterfield Township","North Hanover Township","Upper Deerfield Township","Bloomingdale","Wood-Ridge","Berlin","Buena Vista Township","Butler","Glen Ridge","Haddon Heights","Fairfield Township","Emerson","Palmyra","New Hanover Township","Fanwood","Keyport","Dunellen","Green Brook Township","Midland Park","Rumson","Linwood","Stratford","Barrington","Tabernacle Township","Upper Freehold Township","Milltown","Raritan","Mountainside","Lebanon Township","Wharton","Allendale","Shamong Township","Dennis Township","Washington","Rockaway","Margate City","Andover Township","Union Beach","North Caldwell","Mullica Township","Carlstadt","Fair Haven","Hainesport Township","Paulsboro","Eastampton Township","Logan Township","Tewksbury Township","Blairstown","Little Silver","Jamesburg","Manasquan","Mendham Township","Prospect Park","Oceanport","Roseland","Watchung","Belmar","Old Tappan","Woodcliff Lake","Greenwich Township","Norwood","Independence Township","Frankford Township","Morris Plains","Rochelle Park","Hightstown","Berlin Township","Wildwood","Holland Township","Englewood Cliffs","Hampton Township","Commercial Township","Somerdale","Penns Grove","Salem","Mount Arlington","Franklin","Highlands","Clementon","Mendham Borough","Alexandria Township","White Township","Demarest","Neptune City","Brielle","Spring Lake Heights","Mount Ephraim","Point Pleasant Beach","Harrington Park","Northvale","Buena","Flemington","Delaware Township","South Bound Brook","Atlantic Highlands","Magnolia","Allamuchy Township","Bradley Beach","Westville","Delanco Township","Boonton Township","Egg Harbor City","Garwood","Elk Township","Mountain Lakes","Medford Lakes","Stillwater Township","Ho-Ho-Kus","North Wildwood","Oaklyn","Pilesgrove Township","East Amwell Township","Bethlehem Township","Bordentown","Lambertville","Cranbury","Montague Township","Kingwood Township","West Amwell Township","Harding Township","Merchantville","Shrewsbury","South Toms River","Mine Hill Township","High Bridge","Stanhope","Cape May","Green Township","Riverdale","Upper Pittsgrove Township","Woodstown","Alloway Township","Fredon Township","Haworth","Tuckerton","Pohatcong Township","Monmouth Beach","Hamburg","Wildwood Crest","Netcong","South Harrison Township","Saddle River","Deerfield Township","Knowlton Township","Woodbury Heights","Long Beach Township","National Park","Spring Lake","Woodlynne","Lawnside","Liberty Township","Seaside Heights","Riverton","Clinton","Weymouth Township","Moonachie","Belvidere","Harmony Township","Quinton Township","Lakehurst","Pennington","Swedesboro","Peapack and Gladstone","Beverly","Lafayette Township","Oxford Township","Woodbine","Ogdensburg","East Newark","South Hackensack","Alpha","Wenonah","Gibbsboro","Frelinghuysen Township","Helmetta","Sussex","Pine Beach","Sea Isle City","Essex Fells","Ocean Gate","Sandyston Township","Brooklawn","Hope Township","Hopewell","Laurel Springs","Avon-by-the-Sea","Folsom","Lavallette","Alpine","Englishtown","Allentown","Sea Girt","Mannington Township","Woodland Township","Oldmans Township","Lower Alloways Creek Township","Lake Como","Estell Manor","Glen Gardner","Hardwick Township","Island Heights","Chester Borough","Chesilhurst","Eagleswood Township","Downe Township","Seaside Park","Newfield","Victory Gardens","Winfield Township","Bass River Township","Stow Creek Township","Sea Bright","Pemberton","Hampton","Elmer","Frenchtown","Lebanon","Avalon","Farmingdale","Milford","Surf City","Beach Haven","Ship Bottom","Shrewsbury Township","Port Republic","Califon","Elsinboro Township","West Cape May","Audubon Park","Bay Head","Far Hills","Longport","Roosevelt","Bloomsbury","Hi-Nella","Stone Harbor","Branchville","Interlaken","Wrightstown","Deal","Rocky Hill","Andover","West Wildwood","Barnegat Light","Fieldsboro","Stockton","Rockleigh","Shiloh","Allenhurst","Corbin City","Millstone","Harvey Cedars","Mantoloking","Cape May Point","Loch Arbour","Teterboro","Walpack Township","Pine Valley","Tavistock",]
            ],
            [
                ['NM'],
                ["Albuquerque","Las Cruces","Rio Rancho","Santa Fe","Roswell","Farmington","South Valley","Clovis","Hobbs","Alamogordo","Carlsbad","Gallup","Deming","Los Lunas","Chaparral","Sunland Park","Las Vegas","Portales","Los Alamos","North Valley","Artesia","Lovington","Silver City","Española","Anthony","Grants","Socorro","Corrales","Bernalillo","Shiprock","Bloomfield","Ruidoso","Kirtland","Belen","Raton","Aztec","Truth or Consequences","Zuni Pueblo","Eldorado at Santa Fe","Los Ranchos de Albuquerque","Lee Acres","White Rock","Taos","Los Chaves","North Hobbs","Tucumcari","Placitas","Rio Communities","Meadow Lake","El Cerro Mission","Santa Teresa","Paradise Hills","University Park","Bosque Farms","La Cienega","Edgewood","Peralta","Milan","Vado","Sandia Heights","Chimayo","Holloman AFB","Clayton","El Cerro","Eunice","Santa Rosa","Tularosa","Ruidoso Downs","Agua Fria","Lordsburg","West Hammond","Dulce","Ranchos de Taos","Jarales","Santo Domingo Pueblo","San Felipe Pueblo","Bayard","Crownpoint","Cannon AFB","Mesilla","Valencia","Flora Vista","San Ysidro","Jal","Moriarty","Pojoaque","Tome","Thoreau","Nambe","Jemez Pueblo","Arroyo Seco","La Mesilla","Questa","Radium Springs","La Luz","Santa Clara","Waterflow","Columbus","Upper Fruitland","Estancia","White Sands","Hatch","Navajo","Boles Acres","Las Maravillas","Monterey Park","Arenas Valley","Capitan","McIntosh","Berino","El Valle de Arroyo Seco","Elephant Butte","Loving","Pecos","Mescalero","Black Rock","Keeler Farm","Hurley","Dexter","Spencerville","Hagerman","La Huerta","Laguna","Carnuel","Skyline-Ganipa","Angel Fire","Doña Ana","Sandia Knolls","El Rancho","Ponderosa Pine","La Puebla","San Miguel","Ohkay Owingeh","Taos Pueblo","Texico","Church Rock","Mesquite","La Union","Alamo","Atoka","Sausal","Twin Lakes","Springer","Logan","Fort Sumner","Chama","Cimarron","Santa Clara Pueblo",]
            ],
            [
                ['NY'],
                ["Albany","Amsterdam","Auburn","Batavia","Beacon","Binghamton","Buffalo","Canandaigua","Cohoes","Corning","Cortland","Dunkirk","Elmira","Fulton","Geneva","Glen Cove","Glens Falls","Gloversville","Hornell","Hudson","Ithaca","Jamestown","Johnstown","Kingston","Lackawanna","Little Falls","Lockport","Long Beach","Mechanicville","Middletown","Mount Vernon","New Rochelle","New York","Newburgh","Niagara Falls","North Tonawanda","Norwich","Ogdensburg","Olean","Oneida","Oneonta","Oswego","Peekskill","Plattsburgh","Port Jervis","Poughkeepsie","Rensselaer","Rochester","Rome","Rye","Salamanca","Saratoga Springs","Schenectady","Sherrill","Syracuse","Tonawanda","Troy","Utica","Watertown","Watervliet","White Plains","Yonkers",]
            ],
            [
                ['NC'],
                ["Charlotte †","Raleigh ††","Greensboro †","Durham †","Winston-Salem †","Fayetteville †","Cary","Wilmington †","High Point","Concord †","Greenville †","Asheville †","Gastonia †","Jacksonville †","Chapel Hill","Huntersville","Rocky Mount","Apex","Burlington","Kannapolis","Wilson †","Wake Forest","Hickory","Indian Trail","Mooresville","Holly Springs","Monroe †","Goldsboro †","Salisbury †","Matthews","Garner","New Bern †","Sanford †","Cornelius","Fuquay-Varina","Morrisville","Mint Hill","Statesville †","Thomasville","Asheboro †","Kernersville","Clayton","Leland","Carrboro","Lumberton †","Clemmons","Havelock","Kinston †","Shelby †","Boone †","Lexington †","Lenoir †","Elizabeth City †","Knightdale","Morganton †","Pinehurst","Waxhaw","Mount Holly","Albemarle †","Harrisburg","Stallings","Hope Mills","Mebane","Graham †","Laurinburg †","Henderson †","Eden","Roanoke Rapids","Southern Pines","Hendersonville †","Reidsville","Lewisville","Newton †","Davidson","Smithfield †","Belmont","Spring Lake","Elon","Archdale","Summerfield","Weddington","Lincolnton †","Kings Mountain","Tarboro †","Mount Airy","Waynesville †","Winterville","Dunn","Morehead City","Washington †","Pineville","Wesley Chapel","Oxford †","Rockingham †","Clinton †","Conover","Fletcher","Roxboro †","Siler City","Black Mountain",]
            ],
            [
                ['ND'],
                ["Fargo","Bismarck","Grand Forks","Minot","West Fargo","Williston","Dickinson","Mandan","Jamestown","Wahpeton","Devils Lake","Watford City","Valley City","Grafton","Lincoln","Beulah","Horace","Rugby","Stanley","New Town","Casselton","Hazen","Bottineau","Lisbon","Carrington","Mayville","Langdon","Oakes","Harvey","Hillsboro","Bowman","Tioga","Garrison","Surrey","New Rockford","Park River","Crosby","Larimore","Rolla","Cavalier","Washburn","Parshall","Ellendale","Burlington","Hettinger","Velva","Killdeer","Mapleton","Cando","Beach","Kenmare","Thompson","Belfield","Linton","New Salem","Wishek","Walhalla","Northwood","Cooperstown","Gwinner","LaMoure","Hankinson","Enderlin","Ray","Harwood","Kindred","Dunseith","Napoleon","Drayton","Hatton","Underwood","Mohall","Mott","Glen Ullin","Wilton","Steele","Ashley","Hebron","Reile's Acres","Elgin","Milnor","Lakota","Lidgerwood","New England","Minto","Rolette","Portland","Center","Turtle Lake","Richardton","Edgeley","Pembina","Towner","Forman","Berthold","Argusville","Leeds","Emerado","Fessenden","Glenburn","Finley","South Heart","Wyndmere","Westhope","Maddock","Strasburg","McClusky","Manvel","Gladstone","Fairmount","Neche","Arthur","Stanton","Max","St. John","Bowbells","Kulm","Sawyer","Alexander","McVille","Buxton","St. Thomas","Oxbow","Grenora","Reynolds","Medina","Gackle","Carson","Powers Lake","Michigan City","Drake","Davenport","Granville","Scranton","Abercrombie","Tower City","Hunter","Hope","Walcott","Anamoose","Lansford","Page","Sherwood","Gilby","Zap","Hoople","Leonard","Minnewaukan","Lignite","Riverdale","Hazelton","Frontier","New Leipzig","Fort Yates","Flasher","Tappen","Aneta","Munich","Fordville","Halliday","Plaza","Buffalo","Des Lacs","Sheyenne","Wimbledon","Mooreton","Edinburg","Dunn Center","Grandin","Edmore","Sanborn","Petersburg","Golden Valley","Binford","Rhame","Selfridge","Taylor","Streeter","Christine","Arnegard","Regent","Litchville","Colfax","Kensal","Rutland","Willow City","Reeder","Tolna","Wing","Crary","Makoti","Carpio","Upham","Marmarth","Portal","Wildrose","Columbus","Pick City","Marion","Crystal","Medora","Bowdon","Bisbee","Deering","Epping","Osnabrock","Adams","Forest River","Hannaford","Noonan","Sheldon","Almont","Starkweather","Oriska","Buchanan","Ross","Newburg","Sykeston","Galesburg","Oberon","Pisek","Dodge","Esmond","Rocklake","Amenia","Spiritwood Lake","Cogswell","Dazey","Goodrich","White Earth","Mercer","Sharon","Lankin","Verona","Karlsruhe","Fingal","Montpelier","Glenfield","Solen","Coleharbor","Palermo","Dwight","Mountain","Hurdsfield","Tuttle","Briarwood","Cleveland","Maxbass","Gardner","Ryder","Zeeland","Butte","Ardoch","Fort Ransom","Alamo","Benedict","Jud","Lehr","Martin","Havana","Pettibone","Warwick","Golva","Flaxton","Hague","Mantador","Pekin","Dawson","Sentinel Butte","Douglas","Grace City","Hamilton","Balta","Pingree","Bathgate","Milton","Nome","Great Bend","North River","McHenry","Prairie Rose","Brocket","Donnybrook","Kathryn","Niagara","Souris","Barney","Fullerton","Inkster","Nekoma","Tolley","Forbes","Woodworth","Robinson","Courtenay","Hampden","Voltaire","Fredonia","Regan","Clifford","Alice","Rogers","Cathay","Dickey","Landa","Berlin","Fairdale","Springbrook","Brinsmade","Canton City","Monango","Wolford","Alsen","Luverne","Lawton","Wales","Antler","Gardena","Kramer","Balfour","Sarles","Sibley","Ambrose","Cayuga","Egeland","Bucyrus","Elliott","Knox","Haynes","Conway","York","Amidon","Fortuna","Calio","Ludden","Mylo","Braddock","Hamberg","Leal","Calvin","Ayr","Overly","Bantry","Gascoyne","Leith","Loma","Hannah","Kief","Hansboro","Venturia","Churchs Ferry","Pillsbury","Grano","Perth","Bergen","Loraine","Ruso",]
            ],
            [
                ['OH'],
                ["Akron","Alliance","Stark","Amherst","Ashland","Ashtabula","Athens","Aurora","Avon","Avon Lake","Barberton","Bay Village","Beachwood","Beavercreek","Bedford","Bedford Heights","Bellbrook","Bellefontaine","Bellevue","Huron","Sandusky","Belpre","Berea","Bexley","Blue Ash","Bowling Green","Brecksville","Broadview Heights","Brooklyn","Brook Park","Brookville","Brunswick","Bryan","Bucyrus","Cambridge","Campbell","Canal Fulton","Canal Winchester","Franklin","Canfield","Canton","Celina","Centerville","Montgomery","Chardon","Cheviot","Chillicothe","Cincinnati","Circleville","Clayton","Cleveland","Cleveland Heights","Clyde","Columbiana","Mahoning","Columbus","Fairfield","Conneaut","Cortland","Coshocton","Cuyahoga Falls","Dayton","Deer Park","Defiance","Delaware","Delphos","Van Wert","Dover","Dublin","Union","East Cleveland","East Liverpool","Eastlake","Eaton","Elyria","Englewood","Euclid","Fairborn","Fairlawn","Fairview Park","Findlay","Forest Park","Fostoria","Seneca","Wood","Fremont","Gahanna","Galion","Garfield Heights","Geneva","Germantown","Girard","Grandview Heights","Green","Greenville","Grove City","Groveport","Hamilton","Harrison","Heath","Highland Heights","Hilliard","Hillsboro","Hubbard","Huber Heights","Hudson","Independence","Ironton","Jackson","Kent","Kenton","Kettering","Kirtland","Lakewood","Lancaster","Lebanon","Lima","Logan","London","Lorain","Louisville","Loveland","Warren","Lyndhurst","Macedonia","Madeira","Mansfield","Maple Heights","Marietta","Marion","Martins Ferry","Marysville","Mason","Massillon","Maumee","Mayfield Heights","Medina","Mentor","Mentor-on-the-Lake","Miamisburg","Middleburg Heights","Middletown","Milford","Monroe","Moraine","Mount Healthy","Mount Vernon","Munroe Falls","Napoleon","Nelsonville","New Albany","Licking","New Carlisle","New Franklin","New Philadelphia","Newark","Niles","North Canton","North College Hill","North Olmsted","North Ridgeville","North Royalton","Northwood","Norton","Norwalk","Norwood","Oakwood","Oberlin","Olmsted Falls","Ontario","Oregon","Orrville","Oxford","Painesville","Parma","Parma Heights","Pataskala","Pepper Pike","Perrysburg","Pickerington","Piqua","Port Clinton","Portsmouth","Powell","Ravenna","Reading","Reynoldsburg","Richmond Heights","Rittman","Riverside","Rocky River","Rossford","Saint Clairsville","Saint Marys","Salem","Seven Hills","Shaker Heights","Sharonville","Sheffield Lake","Shelby","Sidney","Solon","South Euclid","Springboro","Springdale","Springfield","Steubenville","Stow","Streetsboro","Strongsville","Struthers","Sylvania","Tallmadge","Summit","The Village of Indian Hill","Tiffin","Tipp City","Toledo","Toronto","Trenton","Trotwood","Troy","Twinsburg","Uhrichsville","University Heights","Upper Arlington","Upper Sandusky","Urbana","Vandalia","Vermilion","Wadsworth","Wapakoneta","Warrensville Heights","Washington Court House","Waterville","Wauseon","Wellston","West Carrollton","Westerville","Westlake","Whitehall","Wickliffe","Willard","Willoughby","Willoughby Hills","Willowick","Wilmington","Wooster","Worthington","Wyoming","Xenia","Youngstown","Zanesville",]
            ],
            [
                ['OK'],
                ["Oklahoma City ††","Tulsa †","Norman †","Broken Arrow","Edmond","Lawton †","Moore","Midwest City","Stillwater †","Enid †","Muskogee †","Owasso","Bartlesville †","Shawnee †","Yukon","Bixby","Ardmore †","Ponca City","Jenks","Duncan †","Mustang","Del City","Sapulpa †","Sand Springs","El Reno †","Bethany","Claremore †","Altus †","Durant †","McAlester †","Ada †","Tahlequah †","Chickasha †","Glenpool","Miami †","Choctaw","Woodward †","Weatherford","Okmulgee †","Elk City","Guthrie †","Guymon †","Warr Acres","Newcastle","Coweta","The Village","Pryor Creek †","Clinton","Wagoner †","Poteau †","Oklahoma City","Tulsa","Norman","Lawton","Enid","Stillwater","Muskogee","Bartlesville","Shawnee","Ardmore","Duncan","Sapulpa","Altus","Claremore","McAlester","Ada","El Reno","Chickasha","Durant","Tahlequah","Miami","Okmulgee","Woodward","Guymon","Guthrie","Pryor Creek","Sallisaw","Poteau","Wagoner","Cushing","Blanchard","Seminole","Skiatook","Catoosa","Blackwell","Idabel","Anadarko","Grove","Noble","Tecumseh","Pauls Valley","Tuttle","Henryetta","Purcell","Holdenville","Vinita","Piedmont","Collinsville","Hugo","Perry","Watonga","Harrah","Lone Grove","Alva","Sulphur","Marlow","Kingfisher","Sayre","Bristow","Fort Gibson","Slaughterville","Broken Bow","Pocola","McLoud","Verdigris","Stilwell","Frederick","Spencer","Madill","Hobart","Nowata","Nichols Hills","Pawhuska","Hominy","Muldrow","Dewey","Wewoka","Heavener","Checotah","Cleveland","Okemah","Tonkawa","Hinton","Roland","Atoka","Chandler","Mannford","Tishomingo","Mangum","New Cordell","Drumright","Bethel Acres","Wilburton","Lindsay","Perkins","Eufaula","Cache","Healdton","Jones","Stroud","Stigler","Davis","Marietta","Fairview","Walters","Commerce","Antlers","Jay","Nicoma Park","Prague","Newkirk","Wynnewood","Pawnee","Calera","Spiro","Elgin","Lexington","Hennessey","Hartshorne","Chouteau","Granite","Waurika","Hollis","Pink","Burns Flat","Krebs","Haskell","Arkoma","Coalgate","Chelsea","Hooker","Goldsby","Inola","Langston","Wilson","Carnegie","Kiefer","Comanche","Union City","Warner","Westville","Minco","Kingston","Stratford","Beaver","Cherokee","Morris","Vian","Apache","Locust Grove","Panama","Crescent","Helena","Salina","Snyder","Fairfax","Shattuck","Laverne","Beggs","Buffalo","Konawa","Goodwell","Waukomis","Wetumka","Geary","Geronimo","Boise City","Barnsdall","Maysville","Rush Springs","Yale","Luther","Okarche","Bray","Dickson","Sperry","Okeene","Central High","Mooreland","Boley","Thomas","Fletcher","Byng","Mounds","Kellyville","Oologah","Meeker","Colbert","Talihina","Wister","Cyril","Fairland","Oakland","Erick","Quinton","Afton","Maud","Grandfield","Ringling","Shady Point","Oilton","Ninnekah","Temple","Forest Park","Weleetka","Caddo","Medford","Gore","Hydro","Empire City","Allen","Waynoka","Texhoma","Quapaw","Sentinel","Dewar","Dibble","Mannsville","North Enid","Seiling","Pond Creek","Tipton","West Siloam Springs","Garber","Clayton","Langley","Blair","Ryan","Colcord","Davenport","Haileyville","Cashion","Howe","Kansas","Cheyenne","Arapaho","Mountain View","Sterling","Adair","Wellston","South Coffeyville","Valley Brook","Tyrone","Wright City","Valliant","Copan","Morrison","Kiowa","Porum","Roff","Boswell","Springer","Vici","Elmore City","Wayne","Savanna","Binger","Carney","Rock Island","Fort Cobb","Bokchito","Earlsboro","Canton","Okay","Velma","Welch","Washington","Webbers Falls","Lahoma","Paoli","Olustee","Glencoe","Hulbert","Hammon","Porter","Keota","Bernice","Dill City","Cole","Alex","Red Oak","Forgan","Canute","Ramona","Verden","Ravia","Covington","Arnett","Fort Towson","McCurtain","Winchester","Bokoshe","Billings","Schulter","Calumet","Corn","Cement","Ringwood","Achille","Tryon","Depew","Stonewall","Prue","Dover","Chattanooga","Paden","Drummond","Eldorado","Thackerville","Gage","Ketchum","Shidler","Lone Wolf","Randlett","Wapanucka","Spavinaw","Wynona","Leedey","Crowder","East Duke","Fort Coffee","Ochelata","Amber","Fanshawe","Delaware","Lamont","Stringtown","Mountain Park","Bowlegs","Ripley","Dustin","Asher","Tribbey","Whitefield","Oktaha","Medicine Park","Terral","Custer City","Kaw City","North Miami","Fargo","Jennings","Lehigh","Optima","Carmen","Wanette","Katie","Foyil","Indiahoma","Wakita","Agra","Bluejacket","Cleo Springs","Eakly","Bridge Creek","Bennington","Wyandotte","Silo","Fort Supply","Ralston","Tupelo","Coyle","Keyes","Watts","Sportsmen Acres","Sawyer","Avant","Millerton","Mill Creek","Gracemont","Milburn","Davidson","Francis","Gans","Tushka","Disney","Rattan","Alderson","Cameron","Taloga","Westport","Haworth","Kinta","Calvin","Lenapah","Freedom","Cedar Valley","Oaks","Butler","Cromwell","Red Rock","Talala","Marshall","Big Cabin","Marble City","Longdale","Soper","Braggs","Carter","Garvin","Byars","Kremlin","Taft","Goltry","Boynton","Roosevelt","Arcadia","Johnson","Breckenridge","Vera","Ames","Meno","Fitzhugh","Gotebo","Marland","Mulhall","Canadian","Liberty","Braman","Dougherty","Jet","Hardesty","Reydon","Aline","Pittsburg","Caney","Nash","Kenefic","Le Flore","Bessie","Manitou","Stuart","Camargo","Spaulding","Tamaha","Sparks","Lookeba","Bromide","Hunter","Wainwright","Cornish","Indianola","Martha","Rocky","Foster","Grayson","Council Hill","Gene Autry","Lamar","St. Louis","Osage","Pocasset","Cowlington","Woodlawn Park","Burlington","Devol","Foss","Tatums","Cimarron City","Sasakwa","Lawrence Creek","Willow","Orlando","Warwick","Norge","Hastings","Burbank","Gould","Kendrick","Summit","Hanna","Redbird","Colony","Faxon","Phillips","Sharon","Fairmont","Bearden","Kemp","Peoria","Slick","Bradley","Deer Creek","Moffett","Rentiesville","Hoffman","Hallett","Pensacola","Wann","Loco","Mead","Hillsdale","Hitchcock","Ratliff City","Gerty","Bridgeport","Addington","Blackburn","Dacoma","Albion","Castle","Terlton","Tullahassee","Armstrong","Fair Oaks","Manchester","Kildare","Centrahoma","Horntown","Elmer","Headrick","Gate","Greenfield","Etowah","Leon","Maramec","New Alluwe","Strang","Hitchita","Lake Aluma","Sweetwater","Carrier","Paradise Hill","Hendrix","Loyal","Valley Park","Yeager","Atwood","Grand Lake Towne","Hickory","Rosedale","Ashland","Smith Village","Oakwood","Brooksville","Webb City","Mutual","Lima","IXL","Skedee","Hollister","Clearview","Strong City","Sugden","May","Meridian","Amorita","Texola","Byron","Douglas","Macomb","Grainola","Rosston","Putnam","Fallis","Friendship","Foraker","Stidham","Cooperton","Loveland","Jefferson","Renfrow","Knowles","Lambert","Silver City","Hoot Owl","Lotsee","Carlton Landing",]
            ],
            [
                ['OR'],
                ["Portland","Salem","Eugene","Gresham","Hillsboro","Beaverton","Bend","Medford","Springfield","Corvallis","Tigard","Albany","Keizer","Lake Oswego","Grants Pass","Oregon City","McMinnville","Redmond","Tualatin","West Linn","Woodburn","Forest Grove","Wilsonville","Newberg","Roseburg","Happy Valley","Klamath Falls","Ashland","Milwaukie","Sherwood","Central Point","Canby","Hermiston","Lebanon","Pendleton","Dallas","Coos Bay","Troutdale","The Dalles","St. Helens","La Grande","Cornelius","Gladstone","Sandy","Ontario","Newport","Silverton","Monmouth","Cottage Grove","Prineville","Independence","Astoria","Sweet Home","North Bend","Baker City","Eagle Point","Fairview","Molalla","Florence","Lincoln City","Stayton","Sutherlin","Hood River","Scappoose","Umatilla","Milton-Freewater","Madras","Seaside","Talent","Brookings","Sheridan","Junction City","Warrenton","Winston","Creswell","Tillamook","Veneta","Philomath","Phoenix","Lafayette","Aumsville","Reedsport","Wood Village","King City","Coquille","Harrisburg","Toledo","Mt. Angel","Hubbard","Estacada","Myrtle Creek","Boardman","Jefferson","Oakridge","Dundee","Nyssa","Bandon","Shady Cove","Sublimity","Jacksonville","Burns","Dayton","Gervais","Sisters","Myrtle Point","Rogue River","Lakeview","Gold Beach","Vernonia","Millersburg","Willamina","Waldport","Union","North Plains","Carlton","Turner","Stanfield","Columbia City","Banks","Rainier","Enterprise","Cave Junction","Canyonville","Mill City","Durham","La Pine","Clatskanie","Vale","Brownsville","Irrigon","Elgin","Lakeside","Cannon Beach","Amity","John Day","Gearhart","Culver","Hines","Pilot Rock","Depoe Bay","Rockaway Beach","Dunes City","Bay City","Tangent","Gold Hill","Heppner","Siletz","Lyons","Riddle","Drain","Yamhill","Cascade Locks","Port Orford","Athena","Coburg","Lowell","Joseph","Yoncalla","Donald","Falls City","Aurora","Island City","Scio","Halsey","Oakland","Glendale","Prairie City","Adair Village","Maywood Park","Merrill","Malin","Garibaldi","Wallowa","Metolius","Yachats","Chiloquin","Gaston","Echo","Condon","Powers","Canyon City","Manzanita","Monroe","Weston","Cove","Dufur","Johnson City","Arlington","Mount Vernon","Gates","Mosier","St. Paul","North Powder","Butte Falls","Fossil","Maupin","Wheeler","Huntington","Bonanza","Haines","Wasco","Scotts Mills","Rivergrove","Adams","Sodaville","Ione","Imbler","Moro","Nehalem","Halfway","Westfir","Waterloo","Rufus","Lexington","Paisley","Detroit","Lostine","Seneca","Sumpter","Elkton","Ukiah","Long Creek","Helix","Adrian","Jordan Valley","Richland","Idanha","Grass Valley","Spray","Barlow","Dayville","Summerville","Mitchell","Monument","Unity","Prescott","Antelope","Shaniko","Granite","Lonerock","Greenhorn",]
            ],
            [
                ['PA'],
                ["Aliquippa","Allentown†","Altoona","Arnold","Beaver Falls","Bethlehem","Bloomsburg†","Bradford","Butler†","Carbondale","Chester","Clairton","Coatesville","Connellsville","Corry","Du Bois","Duquesne","Easton†","Erie†","Farrell","Franklin†","Greensburg†","Harrisburg†","Hazleton","Hermitage","Jeannette","Johnstown","Lancaster†","Latrobe","Lebanon†","Lock Haven†","Lower Burrell","McCandless","McKeesport","Meadville†","Monessen","Monongahela","Nanticoke","New Castle†","New Kensington","Oil City","Parker","Philadelphia†","Pittsburgh†","Pittston","Pottsville†","Reading†","St. Marys","Scranton†","Shamokin","Sharon","Sunbury†","Titusville","Uniontown†","Warren†","Washington†","Wilkes-Barre†","Williamsport†","York†",]
            ],
            [
                ['RI'],
                ["Barrington","Bristol","Burrillville","Central Falls","Charlestown","Coventry","Cranston","Cumberland","East Greenwich","East Providence","Exeter","Foster","Glocester","Hopkinton","Jamestown","Johnston","Lincoln","Little Compton","Middletown","Narragansett","Newport","New Shoreham","North Kingstown","North Providence","North Smithfield","Pawtucket","Portsmouth","Providence","Richmond","Scituate","Smithfield","South Kingstown","Tiverton","Warren","Warwick","Westerly","West Greenwich","West Warwick","Woonsocket",]
            ],
            [
                ['SC'],
                ["Abbeville","Aiken","Allendale","Anderson","Andrews","Arcadia Lakes","Atlantic Beach","Awendaw","Aynor","Bamberg","Barnwell","Batesburg-Leesville","Beaufort","Belton","Bennettsville","Bethune","Bishopville","Blacksburg","Blackville","Blenheim","Bluffton","Blythewood","Bonneau","Bowman","Branchville","Briarcliffe Acres","Brunson","Burnettown","Calhoun Falls","Camden","Cameron","Campobello","Carlisle","Cayce","Central","Central Pacolet","Chapin","Charleston","Cheraw","Chesnee","Chester","Chesterfield","Clemson","Clinton","Clio","Clover","Columbia","Conway","Cope","Cordova","Cottageville","Coward","Cowpens","Cross Hill","Darlington","Denmark","Dillon","Donalds","Due West","Duncan","Easley","Eastover","Edgefield","Edisto Beach","Ehrhardt","Elgin","Elko","Elloree","Estill","Eutawville","Fairfax","Florence","Folly Beach","Forest Acres","Fort Lawn","Fort Mill","Fountain Inn","Furman","Gaffney","Gaston","Georgetown","Gifford","Gilbert","Goose Creek","Govan","Gray Court","Great Falls","Greeleyville","Greenville","Greenwood","Greer","Hampton","Hanahan","Hardeeville","Harleyville","Hartsville","Heath Springs","Hemingway","Hickory Grove","Hilda","Hilton Head Island","Hodges","Holly Hill","Hollywood","Honea Path","Inman","Irmo","Isle of Palms","Iva","Jackson","James Island","Jamestown","Jefferson","Jenkinsville","Johnsonville","Johnston","Jonesville","Kershaw","Kiawah Island","Kingstree","Kline","Lake City","Lake View","Lamar","Lancaster","Landrum","Lane","Latta","Laurens","Lexington","Liberty","Lincolnville","Little Mountain","Livingston","Lockhart","Lodge","Loris","Lowndesville","Lowrys","Luray","Lyman","Lynchburg","McBee","McClellanville","McColl","McConnells","McCormick","Manning","Marion","Mauldin","Mayesville","Meggett","Moncks Corner","Monetta","Mount Croghan","Mount Pleasant","Mullins","Myrtle Beach","Neeses","Newberry","New Ellenton","Nichols","Ninety Six","Norris","North","North Augusta","North Charleston","North Myrtle Beach","Norway","Olanta","Olar","Orangeburg","Pacolet","Pageland","Pamplico","Parksville","Patrick","Pawleys Island","Paxville","Peak","Pelion","Pelzer","Pendleton","Perry","Pickens","Pine Ridge","Pinewood","Plum Branch","Pomaria","Port Royal","Prosperity","Quinby","Ravenel","Reevesville","Reidville","Richburg","Ridgeland","Ridge Spring","Ridgeville","Ridgeway","Rock Hill","Rockville","Rowesville","Ruby","St. George","St. Matthews","St. Stephen","Salem","Salley","Saluda","Santee","Scotia","Scranton","Seabrook Island","Sellers","Seneca","Sharon","Silverstreet","Simpsonville","Six Mile","Smoaks","Smyrna","Snelling","Society Hill","South Congaree","Spartanburg","Springdale","Springfield","Starr","Stuckey","Sullivan's Island","Summerton","Summerville","Summit","Sumter","Surfside Beach","Swansea","Sycamore","Tatum","Tega Cay","Timmonsville","Travelers Rest","Trenton","Troy","Turbeville","Ulmer","Union","Vance","Varnville","Wagener","Walhalla","Walterboro","Ward","Ware Shoals","Waterloo","Wellford","West Columbia","Westminster","West Pelzer","West Union","Whitmire","Williams","Williamston","Williston","Windsor","Winnsboro","Woodford","Woodruff","Yemassee","York",]
            ],
            [
                ['SD'],
                ["Sioux Falls †","Rapid City †","Aberdeen †","Brookings †","Watertown †","Mitchell †","Yankton †","Pierre ‡","Huron †","Spearfish","Vermillion †","Brandon","Box Elder","Madison †","Sturgis †","Harrisburg","Tea","Belle Fourche †","Dell Rapids","Mobridge","Hot Springs †","Canton †","Hartford","Milbank †","Lead","North Sioux City","Winner †","Summerset","Lennox","Sisseton †","Chamberlain †","Flandreau †","Redfield †","Fort Pierre †","Volga","Beresford","Springfield","Custer †","Elk Point †","Webster †","Wagner","Groton","Parkston","Miller †","Eagle Butte","Crooks","Britton †","Deadwood †","Freeman","Salem †","Mission","Platte","Clear Lake †","Gregory","Baltic","Lemmon","Garretson","Gettysburg †","Martin †","Clark †","De Smet †","Tyndall †","Parker †","Hill City","Worthing","Whitewood","Wessington Springs †","Ipswich †","Piedmont","Centerville","Wall","Arlington","Eureka","Lake Andes †","Scotland","Aurora","Marion","Viborg","Philip †","Howard †","Alcester","Estelline","Valley Springs","Plankinton †","Elkton","Faulkton †","Highmore †","Edgemont","Kadoka †","Colton","Woonsocket †","McLaughlin","Armour †","New Underwood","Kimball","Selby †","Onida †","Castlewood","Tripp","Alexandria †","Canistota","Menno","Avon","Burke †","Newell","Colman","Corsica","Humboldt","White River †","St. Francis","Waubay","Veblen","Lake Preston","Dupree †","Jefferson","Wilmot","Lake Norden","Timber Lake †","Presho","White","Warner","Bowdle","Oacoma","Bridgewater","Big Stone City","Bryant","Murdo †","Emery","Montrose","Mount Vernon","Leola †","Rosholt","Herreid","Faith","Irene","Wolsey","Tabor","Hurley","Hermosa","Gayville","Hayti †","Hoven","White Lake","Florence","Buffalo †","Blunt","Keystone","Langford","Hudson","Bison †","Ethan","Bristol","Wakonda","Pukwana","Summit","Roscoe","Alpena","Colome","Stickney","Bonesteel","Egan","Chancellor","Henry","Iroquois","New Effington","Kennebec †","Willow Lake","Trent","Gary","Pickstown","Pollock","Hecla","Nisland","South Shore","Delmont","Mellette","Reliance","Tulare","Ramona","Bruce","Geddes","Toronto","Frederick","Wentworth","St. Lawrence","Hosmer","Doland","Letcher","Wessington","Kranzburg","Roslyn","McIntosh †","Mission Hill","Volin","Peever","Monroe","Isabel","Frankfort","Northville","Goodwin","Spencer","Conde","Artesian","Columbia","Buffalo Gap","Astoria","Westport","Lesterville","Carthage","Central City","Claremont","Dimock","Java","Midland","Ashton","Cavour","Sinai","Oelrichs","Dallas","Pierpont","Harrold","Oldham","Yale","Batesland","Fairfax","Pringle","Stockholm","Revillo","Brandt","Corona","Glenham","Herrick","Eden","Interior","Cresbard","Badger","Canova","Hitchcock","Fairburn","Fulton","Davis","Hazel","Wallace","Dante","Andover","Wasta","Sherman","Agar","Brentford","Bradley","Claire City","New Witten","Stratford","Fairview","Olivet †","Strandburg","Draper","Morristown","Twin Brooks","Utica","Fruitdale","La Bolt","Ortley","Mound City †","Bushnell","Camp Crook","Quinn","Ravinia","Wood","Brant Lake","Orient","Ree Heights","Lane","Belvidere","Garden City","Lake City","Grenville","Raymond","Nunda","Turton","Ward","Akaska","Naples","Hetland","Vienna","Erwin","Lebanon","Dolton","Seneca","Tolstoy","Broadland","Altamont","Rockham","Long Lake","Marvin","Chelsea","Bancroft","Vilas","Albee","Butler","Virgil","Onaka","Cottonwood","Farmer","Artas","Wetonka","Lowry","Verdon","Lily","Hillsview","White Rock","Buffalo Chip",]
            ],
            [
                ['TN'],
                ["Adams","Adamsville","Alamo","Alcoa","Alexandria","Algood","Allardt","Altamont","Ardmore","Arlington","Ashland City","Athens","Atoka","Atwood","Auburntown","Baileyton","Baneberry","Bartlett","Baxter","Bean Station","Beersheba Springs","Bell Buckle","Belle Meade","Bells","Benton","Berry Hill","Bethel Springs","Big Sandy","Blaine","Bluff City","Bolivar","Braden","Bradford","Brentwood","Brighton","Bristol","Brownsville","Bruceton","Bulls Gap","Burlison","Burns","Byrdstown","Calhoun","Camden","Carthage","Caryville","Cedar Hill","Celina","Centertown","Centerville","Chapel Hill","Charleston","Charlotte","Chattanooga","Church Hill","Clarksburg","Clarksville","Cleveland","Clifton","Clinton","Coalmont","Collegedale","Collierville","Collinwood","Columbia","Cookeville","Coopertown","Copperhill","Cornersville","Cottage Grove","Covington","Cowan","Crab Orchard","Cross Plains","Crossville","Crump","Cumberland City","Cumberland Gap","Dandridge","Dayton","Decatur","Decaturville","Decherd","Dickson","Dover","Dowelltown","Doyle","Dresden","Ducktown","Dunlap","Dyer","Dyersburg","Eagleville","East Ridge","Eastview","Elizabethton","Elkton","Englewood","Enville","Erin","Erwin","Estill Springs","Ethridge","Etowah","Fairview","Farragut","Fayetteville","Finger","Forest Hills","Franklin","Friendship","Friendsville","Gadsden","Gainesboro","Gallatin","Gallaway","Garland","Gates","Gatlinburg","Germantown","Gibson","Gilt Edge","Gleason","Goodlettsville","Gordonsville","Grand Junction","Graysville","Greenback","Greenbrier","Greeneville","Greenfield","Gruetli-Laager","Guys","Halls","Harriman","Harrogate","Hartsville","Henderson","Hendersonville","Henning","Henry","Hickory Valley","Hohenwald","Hollow Rock","Hornbeak","Hornsby","Humboldt","Huntingdon","Huntland","Huntsville","Iron City","Jacksboro","Jackson","Jamestown","Jasper","Jefferson City","Jellico","Johnson City","Jonesborough","Kenton","Kimball","Kingsport","Kingston","Kingston Springs","Knoxville","Lafayette","La Follette","LaGrange","Lakeland","Lakesite","La Vergne","Lawrenceburg","Lebanon","Lenoir City","Lewisburg","Lexington","Liberty","Linden","Livingston","Lobelville","Lookout Mountain","Loretto","Loudon","Louisville","Luttrell","Lynchburg","Lynnville","Madisonville","Manchester","Martin","Maryville","Mason","Maury City","Maynardville","McEwen","McKenzie","McLemoresville","McMinnville","Medina","Medon","Memphis","Michie","Middleton","Milan","Milledgeville","Millersville","Millington","Minor Hill","Mitchellville","Monteagle","Monterey","Morrison","Morristown","Moscow","Mosheim","Mount Carmel","Mount Juliet","Mount Pleasant","Mountain City","Munford","Murfreesboro","Nashville","New Hope","New Johnsonville","New Market","New Tazewell","Newbern","Newport","Niota","Nolensville","Normandy","Norris","Oak Hill","Oak Ridge","Oakdale","Oakland","Obion","Oliver Springs","Oneida","Orlinda","Orme","Palmer","Paris","Parker's Crossroads","Parrottsville","Parsons","Pegram","Petersburg","Philadelphia","Pigeon Forge","Pikeville","Piperton","Pittman Center","Plainview","Pleasant Hill","Pleasant View","Portland","Powell's Crossroads","Pulaski","Puryear","Ramer","Red Bank","Red Boiling Springs","Ridgely","Ridgeside","Ridgetop","Ripley","Rives","Rockford","Rockwood","Rocky Top","Rogersville","Rossville","Rutherford","Rutledge","St. Joseph","Saltillo","Samburg","Sardis","Saulsbury","Savannah","Scotts Hill","Selmer","Sevierville","Sharon","Shelbyville","Signal Mountain","Silerton","Slayden","Smithville","Smyrna","Sneedville","Soddy-Daisy","Somerville","South Carthage","South Fulton","South Pittsburg","Sparta","Spencer","Spring City","Spring Hill","Springfield","Stanton","Stantonville","Sunbright","Surgoinsville","Sweetwater","Tazewell","Tellico Plains","Tennessee Ridge","Thompson's Station","Three Way","Tiptonville","Toone","Townsend","Tracy City","Trenton","Trezevant","Trimble","Troy","Tullahoma","Tusculum","Unicoi","Union City","Vanleer","Viola","Vonore","Walden","Wartburg","Wartrace","Watauga","Watertown","Waverly","Waynesboro","Westmoreland","White Bluff","White House","White Pine","Whiteville","Whitwell","Williston","Winchester","Winfield","Woodbury","Woodland Mills","Yorkville",]
            ],
            [
                ['TX'],
                ["Abbott","Abernathy","Abilene","Ackerly","Addison","Adrian","Agua Dulce","Alamo","Alamo Heights","Albany","Aledo","Alice","Allen","Alpine","Alton","Alvarado","Alvin","Amarillo","Ames","Amherst","Anahuac","Anderson","Andrews","Angleton","Angus","Anna","Anson","Anton","Appleby","Aquilla","Aransas Pass","Archer City","Arcola","Argyle","Arlington","Arp","Asherton","Athens","Atlanta","Aubrey","Aurora","Austin","Austwell","Avery","Azle","Bailey","Baird","Balch Springs","Balcones Heights","Ballinger","Balmorhea","Bandera","Bangs","Bardwell","Barry","Barstow","Bartlett","Bastrop","Bay City","Bayou Vista","Baytown","Beach City","Beasley","Beaumont","Beckville","Bedford","Bedias","Bee Cave","Beeville","Bellaire","Bellevue","Bellmead","Bellville","Belton","Benavides","Benbrook","Benjamin","Bertram","Beverly Hills","Bevil Oaks","Big Lake","Big Spring","Big Wells","Bishop","Blackwell","Blanco","Blossom","Blue Mound","Blue Ridge","Boerne","Bogata","Bonham","Borger","Bovina","Bowie","Brackettville","Brady","Brazoria","Brazos Bend","Brazos Country","Breckenridge","Bremond","Brenham","Briaroaks","Bridge City","Bridgeport","Brookshire","Brookside Village","Browndell","Brownfield","Brownsboro","Brownsville","Brownwood","Bruceville-Eddy","Bryan","Bryson","Buda","Buffalo","Buffalo Gap","Bulverde","Bunker Hill Village","Burkburnett","Burke","Burleson","Burnet","Byers","Cactus","Caddo Mills","Caldwell","Callisburg","Calvert","Cameron","Camp Wood","Campbell","Canadian","Canton","Canyon","Carmine","Carrizo Springs","Carrollton","Carthage","Cashion Community","Castle Hills","Castroville","Cedar Hill","Cedar Park","Celeste","Celina","Center","Centerville","Chandler","Channing","Charlotte","Chico","Childress","Chillicothe","China","Chireno","Cibolo","Cisco","Clarendon","Clarksville","Clarksville City","Claude","Clear Lake Shores","Cleburne","Cleveland","Clifton","Clute","Clyde","Cockrell Hill","Coldspring","Coleman","College Station","Colleyville","Colmesneil","Colorado City","Columbus","Comanche","Combine","Commerce","Conroe","Converse","Cool","Cooper","Coppell","Copperas Cove","Corinth","Corpus Christi","Corsicana","Cottonwood","Cottonwood Shores","Cotulla","Coupland","Cove","Covington","Coyote Flats","Crandall","Crane","Cranfills Gap","Creedmoor","Cresson","Crockett","Crosbyton","Crowell","Crowley","Crystal City","Cuero","Cumby","Cushing","Cut and Shoot","Daingerfield","Daisetta","Dalhart","Dallas","Dalworthington Gardens","Danbury","Dayton","Dayton Lakes","De Leon","Dean","Decatur","DeCordova","Deer Park","DeKalb","Dell City","Del Rio","Denison","Denton","Deport","DeSoto","Devers","Devine","Diboll","Dickens","Dickinson","Dilley","Dimmitt","Donna","Dorchester","Dripping Springs","Driscoll","Dublin","Dumas","Duncanville","Eagle Lake","Eagle Pass","Early","Earth","East Bernard","East Mountain","East Tawakoni","Eastland","Easton","Ector","Edcouch","Eden","Edinburg","Edna","Edom","El Campo","El Cenizo","El Lago","El Paso","Eldorado","Electra","Elgin","Elmendorf","Elsa","Emory","Encinal","Ennis","Escobares","Euless","Eureka","Eustace","Everman","Fair Oaks Ranch","Fairfield","Falfurrias","Falls City","Farmers Branch","Farmersville","Farwell","Fate","Fayetteville","Ferris","Florence","Floresville","Floydada","Follett","Forest Hill","Forney","Forsan","Fort Stockton","Fort Worth","Franklin","Fredericksburg","Freeport","Freer","Friendswood","Friona","Frisco","Fritch","Frost","Fruitvale","Fulshear","Gainesville","Galena Park","Gallatin","Galveston","Ganado","Garden Ridge","Garland","Garrison","Gatesville","George West","Georgetown","Gholson","Giddings","Gilmer","Gladewater","Glenn Heights","Glen Rose","Godley","Goldsmith","Goldthwaite","Goliad","Golinda","Gonzales","Goodlow","Goodrich","Gordon","Goree","Gorman","Graford","Graham","Granbury","Grand Prairie","Grand Saline","Grandview","Granger","Granite Shoals","Granjeno","Grapeland","Grapevine","Greenville","Gregory","Grey Forest","Groesbeck","Groves","Groveton","Gruver","Gun Barrel City","Gunter","Hale Center","Hallettsville","Hallsburg","Hallsville","Haltom City","Hamilton","Hamlin","Hardin","Harker Heights","Harlingen","Hart","Haskell","Haslet","Hawk Cove","Hawkins","Hawley","Hays","Hearne","Heath","Hedley","Hedwig Village","Helotes","Hemphill","Hempstead","Henderson","Henrietta","Hereford","Hewitt","Hico","Hidalgo","Hideaway","Higgins","Highland Haven","Highland Village","Hill Country Village","Hillsboro","Hilshire Village","Hitchcock","Holliday","Hondo","Honey Grove","Hooks","Horizon City","Horseshoe Bay","Houston","Howardwick","Hubbard","Hudson","Hudson Oaks","Hughes Springs","Humble","Hunters Creek Village","Huntington","Huntsville","Hurst","Hutchins","Hutto","Huxley","Idalou","Industry","Ingleside","Ingleside on the Bay","Ingram","Iola","Iowa Park","Iraan","Iredell","Irving","Itasca","Ivanhoe","Jacinto City","Jacksboro","Jacksonville","Jamaica Beach","Jarrell","Jasper","Jayton","Jefferson","Jersey Village","Jewett","Joaquin","Johnson City","Jolly","Jonestown","Josephine","Joshua","Jourdanton","Junction","Justin","Karnes City","Katy","Kaufman","Keene","Keller","Kemah","Kemp","Kempner","Kendleton","Kenedy","Kennard","Kennedale","Kerens","Kermit","Kerrville","Kilgore","Killeen","Kingsbury","Kingsville","Kirby","Kirbyville","Knollwood","Kountze","Kress","Krugerville","Krum","Kyle","La Feria","La Grange","La Grulla","La Joya","La Marque","La Porte","La Vernia","La Villa","La Ward","LaCoste","Lacy-Lakeview","Lago Vista","Lake Bridgeport","Lake Dallas","Lake Jackson","Lake Worth","Lakeport","Lakeway","Lakewood Village","Lamesa","Lampasas","Lancaster","Laredo","Latexo","Lavon","League City","Leakey","Leander","Leary","Leon Valley","Leona","Leonard","Leroy","Levelland","Lewisville","Liberty","Liberty Hill","Lindale","Linden","Lindsay","Lipan","Little Elm","Littlefield","Little River-Academy","Live Oak","Liverpool","Llano","Lockhart","Log Cabin","Lometa","Lone Oak","Lone Star","Longview","Lorena","Lorenzo","Los Fresnos","Los Ybanez","Lott","Lovelady","Lowry Crossing","Lubbock","Lucas","Lueders","Lufkin","Luling","Lumberton","Lyford","Lytle","Madisonville","Magnolia","Malakoff","Manor","Mansfield","Manvel","Marble Falls","Marfa","Marion","Marlin","Marquez","Marshall","Mart","Martindale","Mason","Mathis","Maud","Maypearl","McAllen","McCamey","McGregor","McKinney","McLendon-Chisholm","Meadowlakes","Meadows Place","Melissa","Memphis","Menard","Mercedes","Meridian","Mertzon","Mesquite","Mexia","Miami","Midland","Midlothian","Midway","Milano","Miles","Mineola","Mineral Wells","Mingus","Mission","Missouri City","Mobeetie","Mobile City","Monahans","Mont Belvieu","Montgomery","Moody","Moore Station","Moran","Morgan","Morgan's Point","Morgan's Point Resort","Morton","Mount Calm","Mount Enterprise","Mount Pleasant","Mountain City","Muenster","Muleshoe","Munday","Murchison","Murphy","Mustang Ridge","Nacogdoches","Naples","Nash","Nassau Bay","Natalia","Navasota","Nazareth","Nederland","Needville","Nevada","Newark","New Berlin","New Boston","New Braunfels","Newcastle","New Chapel Hill","New Fairview","New Home","New London","New Summerfield","Newton","New Waverly","Niederwald","Nixon","Nocona","Nolanville","Nome","Noonday","Nordheim","North Cleveland","North Richland Hills","Novice","Oak Leaf","Oak Point","Oak Ridge North","O'Brien","Odem","Odessa","O'Donnell","Oglesby","Old River-Winfree","Olmos Park","Olney","Olton","Omaha","Onalaska","Orange","Orange Grove","Orchard","Ore City","Overton","Ovilla","Oyster Creek","Palacios","Palestine","Palmhurst","Palm Valley","Palmview","Pampa","Panorama Village","Paradise","Paris","Parker","Pasadena","Pattison","Patton Village","Pearland","Pearsall","Pecan Gap","Pecan Hill","Pecos","Pelican Bay","Penitas","Perryton","Petersburg","Petrolia","Petronila","Pflugerville","Pharr","Pilot Point","Pine Forest","Pinehurst","Pineland","Piney Point Village","Pittsburg","Plainview","Plano","Pleasanton","Plum Grove","Point","Point Blank","Point Comfort","Port Aransas","Port Arthur","Port Isabel","Port Lavaca","Port Neches","Portland","Post","Poteet","Poynor","Prairie View","Premont","Presidio","Princeton","Progreso","Progreso Lakes","Quanah","Queen City","Quinlan","Quitaque","Quitman","Ralls","Ranger","Rankin","Ravenna","Raymondville","Red Lick","Red Oak","Redwater","Reklaw","Reno","Reno","Rhome","Rice","Richardson","Richland Hills","Richmond","Richwood","Riesel","Rio Bravo","Rio Grande City","Rio Hondo","Rio Vista","River Oaks","Riverside","Roanoke","Robert Lee","Robinson","Robstown","Roby","Rockdale","Rockport","Rockwall","Rollingwood","Roma","Ropesville","Roscoe","Rose City","Rose Hill Acres","Rosebud","Rosenberg","Ross","Rotan","Round Rock","Rowlett","Roxton","Royse City","Runaway Bay","Rusk","Sabinal","Sachse","Sadler","Saginaw","Saint Jo","San Angelo","San Antonio","San Augustine","San Benito","San Diego","San Elizario","San Juan","San Marcos","San Patricio","San Perlita","San Saba","Sandy Oaks","Sandy Point","Sanger","Sansom Park","Santa Clara","Santa Fe","Savoy","Schertz","Schulenburg","Scotland","Scottsville","Seabrook","Seadrift","Seagoville","Seagraves","Sealy","Seguin","Selma","Seminole","Seven Oaks","Seven Points","Seymour","Shallowater","Shamrock","Shavano Park","Shenandoah","Shepherd","Sherman","Shiner","Shoreacres","Silsbee","Silverton","Simonton","Sinton","Slaton","Smiley","Smithville","Snook","Snyder","Socorro","Somerset","Somerville","Sonora","Sour Lake","South Houston","Southlake","Southmayd","Southside Place","Spearman","Splendora","Spofford","Spring Branch","Spring Valley Village","Springtown","Spur","Stafford","Stamford","Stanton","Staples","Star Harbor","Stephenville","Sterling City","Stinnett","Stockdale","Stratford","Strawn","Sudan","Sugar Land","Sullivan City","Sulphur Springs","Sundown","Sunray","Sunrise Beach Village","Sunset Valley","Sun Valley","Surfside Beach","Sweeny","Sweetwater","Taft","Tahoka","Talco","Tatum","Taylor","Taylor Lake Village","Taylor Landing","Teague","Temple","Terrell","Terrell Hills","Texarkana","Texas City","Texhoma","The Colony","Thorndale","Thrall","Three Rivers","Timpson","Toco","Todd Mission","Tolar","Tom Bean","Tomball","Tool","Trenton","Trinidad","Trinity","Troup","Troy","Tulia","Turkey","Tuscola","Tye","Tyler","Uhland","Uncertain","Union Grove","Union Valley","Universal City","University Park","Uvalde","Valley Mills","Valley View","Van","Van Alstyne","Vega","Vernon","Victoria","Vidor","Von Ormy","Waco","Waelder","Wake Village","Waller","Wallis","Walnut Springs","Warren City","Waskom","Watauga","Waxahachie","Weatherford","Webster","Weimar","Weinert","Weir","Wellington","Wellman","Weslaco","West","Westbrook","West Columbia","West Lake Hills","Weston","Weston Lakes","West Orange","West Tawakoni","West University Place","Westworth Village","Wharton","Wheeler","White Oak","White Settlement","Whitehouse","Whitesboro","Whitewright","Wichita Falls","Willis","Willow Park","Wills Point","Wilmer","Wilson","Wimberley","Windcrest","Winfield","Wink","Winnsboro","Winters","Wixon Valley","Wolfe City","Wolfforth","Woodbranch","Woodcreek","Woodway","Wylie","Yoakum","Yorktown","Zavalla",]   
            ],
            [
                ['UT'],
                ["Alpine","Alta","Altamont","Alton","Amalga","American Fork","Annabella","Antimony","Apple Valley","Aurora","Ballard","Bear River City","Beaver","Bicknell","Big Water","Blanding","Bluffdale","Boulder","Bountiful","Brian Head","Brigham City","Bryce Canyon City","Cannonville","Castle Dale","Castle Valley","Cedar City","Cedar Fort","Cedar Highlands","Cedar Hills","Centerfield","Centerville","Central Valley","Charleston","Circleville","Clarkston","Clawson","Clearfield","Cleveland","Clinton","Coalville","Copperton","Corinne","Cornish","Cottonwood Heights","Daniel","Delta","Deweyville","Draper","Duchesne","Dutch John","Eagle Mountain","East Carbon","Elk Ridge","Elmo","Elsinore","Elwood","Emery","Emigration Canyon","Enoch","Enterprise","Ephraim","Escalante","Eureka","Fairfield","Fairview","Farmington","Farr West","Fayette","Ferron","Fielding","Fillmore","Fountain Green","Francis","Fruit Heights","Garden City","Garland","Genola","Glendale","Glenwood","Goshen","Grantsville","Green River","Gunnison","Hanksville","Harrisville","Hatch","Heber City","Helper","Henefer","Henrieville","Herriman","Hideout","Highland","Hildale","Hinckley","Holden","Holladay","Honeyville","Hooper","Howell","Huntington","Huntsville","Hurricane","Hyde Park","Hyrum","Independence","Interlaken","Ivins","Joseph","Junction","Kamas","Kanab","Kanarraville","Kanosh","Kaysville","Kearns","Kingston","Koosharem","La Verkin","Laketown","Layton","Leamington","Leeds","Lehi","Levan","Lewiston","Lindon","Loa","Logan","Lyman","Lynndyl","Magna","Manila","Manti","Mantua","Mapleton","Marriott-Slaterville","Marysvale","Mayfield","Meadow","Mendon","Midvale","Midway","Milford","Millcreek","Millville","Minersville","Moab","Mona","Monroe","Monticello","Morgan","Moroni","Mount Pleasant","Murray","Myton","Naples","Nephi","New Harmony","Newton","Nibley","North Logan","North Ogden","North Salt Lake","Oak City","Oakley","Ogden","Ophir","Orangeville","Orderville","Orem","Panguitch","Paradise","Paragonah","Park City","Parowan","Payson","Perry","Plain City","Pleasant Grove","Pleasant View","Plymouth","Portage","Price","Providence","Provo","Randolph","Redmond","Richfield","Richmond","Riverdale","River Heights","Riverton","Rockville","Rocky Ridge","Roosevelt","Roy","Rush Valley","St. George","Salem","Salina","Salt Lake City","Sandy","Santa Clara","Santaquin","Saratoga Springs","Scipio","Scofield","Sigurd","Smithfield","Snowville","South Jordan","South Ogden","South Salt Lake","South Weber","Spanish Fork","Spring City","Springdale","Springville","Sterling","Stockton","Sunset","Syracuse","Tabiona","Taylorsville","Tooele","Toquerville","Torrey","Tremonton","Trenton","Tropic","Uintah","Vernal","Vernon","Vineyard","Virgin","Wales","Wallsburg","Washington","Washington Terrace","Wellington","Wellsville","Wendover","West Bountiful","West Haven","West Jordan","West Point","West Valley City","White City","Willard","Woodland Hills","Woodruff","Woods Cross",]
            ],
            [
                ['VT'],
                ["Burlington","South Burlington","Rutland","Barre","Montpelier","Winooski","St. Albans","Newport","Vergennes",]
            ],
            [
                ['VA'],
                ["Highland County","Bath County","Craig County","Bland County","Surry County","Charles City County","King and Queen County","Rappahannock County","Mathews County","Richmond County","Cumberland County","Middlesex County","Lancaster County","Essex County","Sussex County","Greensville County","Northampton County","Charlotte County","Northumberland County","Lunenburg County","Amelia County","Madison County","Clarke County","Nelson County","Dickenson County","Appomattox County","Floyd County","Nottoway County","Alleghany County","Grayson County","King William County","Brunswick County","Giles County","Buckingham County","Westmoreland County","Patrick County","Southampton County","Greene County","New Kent County","Scott County","Goochland County","Rockbridge County","Buchanan County","Prince Edward County","Page County","Lee County","King George County","Fluvanna County","Dinwiddie County","Russell County","Powhatan County","Wythe County","Carroll County","Caroline County","Mecklenburg County","Smyth County","Amherst County","Accomack County","Botetourt County","Pulaski County","Louisa County","Halifax County","Orange County","Isle of Wight County","Gloucester County","Prince George County","Warren County","Wise County","Tazewell County","Shenandoah County","Culpeper County","Henry County","Washington County","Campbell County","Franklin County","Pittsylvania County","York County","Fauquier County","James City County","Augusta County","Bedford County","Rockingham County","Frederick County","Roanoke County","Montgomery County","Hanover County","Albemarle County","Spotsylvania County","Stafford County","Arlington County","Henrico County","Chesterfield County","Loudoun County","Prince William County","Fairfax County",]
            ],
            [
                ['WA'],
                ["Aberdeen","Airway Heights","Algona","Anacortes","Arlington","Asotin","Auburn","Bainbridge Island","Battle Ground","Bellevue","Bellingham","Benton City","Bingen","Black Diamond","Blaine","Bonney Lake","Bothell","Bremerton","Brewster","Bridgeport","Brier","Buckley","Burien","Burlington","Camas","Carnation","Cashmere","Castle Rock","Centralia","Chehalis","Chelan","Cheney","Chewelah","Clarkston","Cle Elum","Clyde Hill","Colfax","College Place","Colville","Connell","Cosmopolis","Covington","Davenport","Dayton","Deer Park","Des Moines","DuPont","Duvall","East Wenatchee","Edgewood","Edmonds","Electric City","Ellensburg","Elma","Entiat","Enumclaw","Ephrata","Everett","Everson","Federal Way","Ferndale","Fife","Fircrest","Forks","George","Gig Harbor","Gold Bar","Goldendale","Grand Coulee","Grandview","Granger","Granite Falls","Harrington","Hoquiam","Ilwaco","Issaquah","Kahlotus","Kalama","Kelso","Kenmore","Kennewick","Kent","Kettle Falls","Kirkland","Kittitas","La Center","Lacey","Lake Forest Park","Lake Stevens","Lakewood","Langley","Leavenworth","Liberty Lake","Long Beach","Longview","Lynden","Lynnwood","Mabton","Maple Valley","Marysville","Mattawa","McCleary","Medical Lake","Medina","Mercer Island","Mesa","Mill Creek","Millwood","Milton","Monroe","Montesano","Morton","Moses Lake","Mossyrock","Mount Vernon","Mountlake Terrace","Moxee","Mukilteo","Napavine","Newcastle","Newport","Nooksack","Normandy Park","North Bend","North Bonneville","Oak Harbor","Oakville","Ocean Shores","Okanogan","Olympia","Omak","Oroville","Orting","Othello","Pacific","Palouse","Pasco","Pateros","Pomeroy","Port Angeles","Port Orchard","Port Townsend","Poulsbo","Prescott","Prosser","Pullman","Puyallup","Quincy","Rainier","Raymond","Redmond","Renton","Republic","Richland","Ridgefield","Ritzville","Rock Island","Roslyn","Roy","Royal City","Ruston","Sammamish","SeaTac","Seattle","Sedro-Woolley","Selah","Sequim","Shelton","Shoreline","Snohomish","Snoqualmie","Soap Lake","South Bend","Spangle","Spokane","Spokane Valley","Sprague","Stanwood","Stevenson","Sultan","Sumas","Sumner","Sunnyside","Tacoma","Tekoa","Tenino","Tieton","Toledo","Tonasket","Toppenish","Tukwila","Tumwater","Union Gap","University Place","Vader","Vancouver","Waitsburg","Walla Walla","Wapato","Warden","Washougal","Wenatchee","West Richland","Westport","White Salmon","Winlock","Woodinville","Woodland","Woodway","Yakima","Yelm","Zillah","Albion","Almira","Beaux Arts Village","Bucoda","Carbonado","Cathlamet","Colton","Conconully","Concrete","Coulee City","Coulee Dam","Coupeville","Creston","Cusick","Darrington","Eatonville","Elmer City","Endicott","Fairfield","Farmington","Friday Harbor","Garfield","Hamilton","Harrah","Hartline","Hatton","Hunts Point","Index","Ione","Krupp","La Conner","LaCrosse","Lamont","Latah","Lind","Lyman","Malden","Mansfield","Marcus","Metaline","Metaline Falls","Naches","Nespelem","Northport","Oakesdale","Odessa","Pe Ell","Reardan","Riverside","Rockford","Rosalia","St. John","Skykomish","South Cle Elum","South Prairie","Springdale","Starbuck","Steilacoom","Twisp","Uniontown","Washtucna","Waterville","Waverly","Wilbur","Wilkeson","Wilson Creek","Winthrop","Yacolt","Yarrow Point",]
            ],
            [
                ['WV'],
                ["Charleston ††","Huntington","Morgantown","Parkersburg","Wheeling","Weirton","Fairmont","Martinsburg","Beckley","Clarksburg","South Charleston","Vienna","St. Albans","Bluefield","Bridgeport","Moundsville","Oak Hill","Dunbar","Elkins","Hurricane","Nitro","Charles Town","Princeton","Buckhannon","Ranson","New Martinsville","Grafton","Keyser","Westover","Barboursville","Point Pleasant","Weston","Lewisburg","Ravenswood","Philippi","Summersville","Ripley","Pleasant Valley","Kenova","Kingwood","Williamstown","Fayetteville","Madison","Williamson","Follansbee","Petersburg","Granville","Milton","Wellsburg","Moorefield","Chester","White Sulphur Springs","Hinton","Paden City","Winfield","Bethlehem","Shinnston","Spencer","Mannington","Star City","Richwood","Belington","Shepherdstown","St. Marys","McMechen","Stonewood","Harrisville","Romney","Welch","Ronceverte","Eleanor","Salem","Nutter Fort","Montgomery","Logan","Terra Alta","Rainelle","New Haven","Glenville","West Liberty","Chesapeake","Parsons","Wayne","Glen Dale","Marmet","Mullens","Ansted","Ceredo","Sistersville","Barrackville","Mount Hope","Benwood","Mabscott","Sophia","Buffalo","Oceana","Belle","Monongah","Alderson","Clendenin","Chapmanville","Hamlin","New Cumberland","Pennsboro","Bolivar","Sutton","Marlinton","Poca","Mason","Cedar Grove","Carpendale","Athens","Rivesville","Rupert","East Bank","Belmont","Bethany","Gassaway","Cameron","Glasgow","Lumberport","Elizabeth","West Union","Gary","Piedmont","North Hills","Middlebourne","Triadelphia","Anmoore","Smithers","West Hamlin","War","Mill Creek","Addison (Webster Springs)","Beverly","Fort Gay","White Hall","Man","Franklin","Davis","Peterstown","Ridgeley","Danville","Reedsville","West Milford","Bath (Berkeley Springs)","Hartford City","Bancroft","Grant Town","Pineville","Rowlesburg","Pratt","Gauley Bridge","Thomas","Masontown","Union","Grantsville","Delbarton","Pine Grove","Clearview",]
            ],
            [
                ['WI'],
                ["Abbotsford","Adams","Algoma","Alma","Altoona","Amery","Antigo","Appleton","Arcadia","Ashland","Augusta","Baraboo","Barron","Bayfield","Beaver Dam","Beloit","Berlin","Black River Falls","Blair","Bloomer","Boscobel","Brillion","Brodhead","Brookfield","Buffalo City","Burlington","Cedarburg","Chetek","Chilton","Chippewa Falls","Clintonville","Colby","Columbus","Cornell","Crandon","Cuba City","Cudahy","Cumberland","Darlington","Delafield","Delavan","De Pere","Dodgeville","Durand","Eagle River","Eau Claire","Edgerton","Elkhorn","Elroy","Evansville","Fennimore","Fitchburg","Fond du Lac","Fort Atkinson","Fountain City","Fox Lake","Franklin","Galesville","Gillett","Glendale","Glenwood City","Green Bay","Green Lake","Greenfield","Greenwood","Hartford","Hayward","Hillsboro","Horicon","Hudson","Hurley","Independence","Janesville","Jefferson","Juneau","Kaukauna","Kenosha","Kewaunee","Kiel","La Crosse","Ladysmith","Lake Geneva","Lake Mills","Lancaster","Lodi","Loyal","Madison","Manawa","Manitowoc","Marinette","Marion","Markesan","Marshfield","Mauston","Mayville","Medford","Mellen","Menasha","Menomonie","Mequon","Merrill","Middleton","Milton","Milwaukee","Mineral Point","Mondovi","Monona","Monroe","Montello","Montreal","Mosinee","Muskego","Neenah","Neillsville","Nekoosa","New Berlin","New Holstein","New Lisbon","New London","New Richmond","Niagara","Oak Creek","Oconomowoc","Oconto","Oconto Falls","Omro","Onalaska","Oshkosh","Osseo","Owen","Park Falls","Peshtigo","Pewaukee","Phillips","Pittsville","Platteville","Plymouth","Port Washington","Portage","Prairie du Chien","Prescott","Princeton","Racine","Reedsburg","Rhinelander","Rice Lake","Richland Center","Ripon","River Falls","St. Croix Falls","St. Francis","Schofield","Seymour","Shawano","Sheboygan","Sheboygan Falls","Shell Lake","Shullsburg","South Milwaukee","Sparta","Spooner","Stanley","Stevens Point","Stoughton","Sturgeon Bay","Sun Prairie","Superior","Thorp","Tomah","Tomahawk","Two Rivers","Verona","Viroqua","Washburn","Waterloo","Watertown","Waukesha","Waupaca","Waupun","Wausau","Wautoma","Wauwatosa","West Allis","West Bend","Westby","Weyauwega","Whitehall","Whitewater","Wisconsin Dells","Wisconsin Rapids",]
            ],
            [
                ['WY'],
                ["Afton","Albin","Alpine","Baggs","Bairoil","Bar Nunn","Basin","Bear River","Big Piney","Buffalo","Burlington","Burns","Byron","Casper","Cheyenne","Chugwater","Clearmont","Cody","Cokeville","Cowley","Dayton","Deaver","Diamondville","Dixon","Douglas","Dubois","East Thermopolis","Edgerton","Elk Mountain","Encampment","Evanston","Evansville","Fort Laramie","Frannie","Gillette","Glendo","Glenrock","Granger","Green River","Greybull","Guernsey","Hanna","Hartville","Hudson","Hulett","Jackson","Kaycee","Kemmerer","Kirby","La Barge","La Grange","Lander","Laramie","Lingle","Lost Springs","Lovell","Lusk","Lyman","Manderson","Manville","Marbleton","Medicine Bow","Meeteetse","Midwest","Mills","Moorcroft","Mountain View","Newcastle","Opal","Pavillion","Pine Bluffs","Pinedale","Pine Haven","Powell","Ranchester","Rawlins","Riverside","Riverton","Rock River","Rock Springs","Rolling Hills","Saratoga","Sheridan","Shoshoni","Sinclair","Star Valley Ranch","Sundance","Superior","Ten Sleep","Thayne","Thermopolis","Torrington","Upton","Van Tassell","Wamsutter","Wheatland","Worland","Wright","Yoder",]
            ]
        ]        
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
                                        transition: 'opacity 2s'
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
                                        transition:'opacity .5s '                                       
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
