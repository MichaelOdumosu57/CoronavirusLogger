import { TestBed } from '@angular/core/testing';
import { HttpClientModule    }    from '@angular/common/http';
import { RyberService } from './ryber.service';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000
describe('RyberService', () => {
    let service: RyberService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            providers: [
                RyberService,
            ],          
        });
        service = TestBed.get(RyberService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

  
    describe('PanelCO0',()=>{

        it('should have the panelList and panelStateAbbrev ready to go on http call',  (done) => {
            service.panelListGet.subscribe((a)=>{
                expect(   service.panelList  ).toEqual(jasmine.any(Array))
                expect(   service.panelStateAbbrev  ).toEqual(jasmine.any(Array))
                service.panelList
                service.panelStateAbbrev
                done()
            })        
        });

        it('should have the ngCssDefault available and modifying it should not modify ngCss',()=>{
            console.log(service.panelCO0.quantity[1][4])
            expect(service.panelCO0.quantity[1][4].ngCssDefault).toEqual(jasmine.any(Array))
            service.panelCO0.quantity[1][4].ngCssDefault[1][2]['text-align'] = 'middle'
            expect(service.panelCO0.quantity[1][4].ngCssDefault[1][2]['text-align'] ).not.toEqual(service.panelCO0.quantity[1][4].ngCss[1][2]['text-align'] )
        })

    })

    describe('OverlayCO0',()=>{

        it('should have the ngCssDefault available and modifying it should not modify ngCss',()=>{
            expect(service.overlayCO0.quantity[1][0].ngCssDefault).toEqual(jasmine.any(Array))
            service.overlayCO0.quantity[1][0].ngCssDefault[0][0]['background-color'] = 'middle'
            expect(service.overlayCO0.quantity[1][0].ngCssDefault[0][0]['background-color'] ).not.toEqual(service.overlayCO0.quantity[1][0].ngCss[0][0]['background-color'])
        })

    })  

});
