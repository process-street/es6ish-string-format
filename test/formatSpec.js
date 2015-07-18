describe('format', function () {
    "use strict";

    it('should replace the placeholder with the value', function () {
        var result = 'this is a ${test}'.format({ test: 'test' });
        expect(result).toBe('this is a test');
    });

    it('should replace the placeholder with the value even with whitespace', function () {
        var result = 'this is a ${ test   }'.format({ test: 'test' });
        expect(result).toBe('this is a test');
    });

    it('should throw a ReferenceError if the expression does not exist', function () {
        expect(function () {
            'this is a ${foo}'.format({ test: 'test' });
        }).toThrowError(ReferenceError);
    });

    it('should not throw a ReferenceError if the expression exists but is set to undefined', function () {
        expect(function () {
            'this is a ${foo}'.format({ test: undefined });
        }).toThrowError(ReferenceError);
    });

    it('should throw a SyntaxError for empty placeholders', function () {
        expect(function () {
            'this is a ${ }'.format({});
        }).toThrowError(SyntaxError);
    });

    it('should be able to access object attributes', function () {
        var result = 'this is a ${test.attr}'.format({ test: { attr: 'test' } });
        expect(result).toBe('this is a test');
    });

    it('should throw a ReferenceError if the object attribute does not exist', function () {
        expect(function () {
            'this is a ${test.attr}'.format({ test: { foo: 'test' } });
        }).toThrowError(ReferenceError);
    });

});