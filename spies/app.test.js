
const expect = require('expect');
const rewire = require('rewire');
//spies is built into expect

// installed rewire as dev dependency
var app = rewire('./app.js');
// app.__set__
// app.__get__


describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        // spy();
        // expect(spy).toHaveBeenCalled();
        spy('Michael', 29);
        expect(spy).toHaveBeenCalledWith('Michael', 29);
    });

    it('should call saveUser with user object', () => {
        var email = 'kneedeepwater@hotmail.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email: email, password: password});
    });

});