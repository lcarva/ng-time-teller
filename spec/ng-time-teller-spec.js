
describe('ng-time-teller module', function() {

    var TimeTeller;

    angular.module('myTestApp', ['ng-time-teller']);

    beforeEach(module('myTestApp'));

    beforeEach(inject(function(_TimeTeller_) {
        TimeTeller = _TimeTeller_;
    }));

    it('uses current hour', function() {
        var d = new Date();
        d.setHours(4);
        d.setMinutes(15);
        expect(TimeTeller(d)).toEqual('quarter past four');
    });

    it('uses next hour', function() {
        var d = new Date();
        d.setHours(4);
        d.setMinutes(45);
        expect(TimeTeller(d)).toEqual('quarter to five');
    });

    it('rounds minutes', function() {
        var d = new Date();
        d.setHours(4);
        d.setMinutes(22);
        expect(TimeTeller(d)).toEqual('twenty past four');

        d.setMinutes(23);
        expect(TimeTeller(d)).toEqual('twenty-five past four');

        d.setMinutes(24);
        expect(TimeTeller(d)).toEqual('twenty-five past four');

        d.setMinutes(25);
        expect(TimeTeller(d)).toEqual('twenty-five past four');

        d.setMinutes(26);
        expect(TimeTeller(d)).toEqual('twenty-five past four');

        d.setMinutes(27);
        expect(TimeTeller(d)).toEqual('twenty-five past four');

        d.setMinutes(28);
        expect(TimeTeller(d)).toEqual('half past four');
    });

    it('handles hours exceptions', function() {
        var d = new Date();
        d.setHours(0);
        d.setMinutes(0);
        expect(TimeTeller(d)).toEqual('midnight');

        d.setHours(12);
        d.setMinutes(0);
        expect(TimeTeller(d)).toEqual('noon');
    });

    // TODO: Test minute replacement.
});
