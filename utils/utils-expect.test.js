
// Using assertion library expect - depreciated version 1.20.2

const utils = require('./utils.js');
const expect = require('expect');


// Should verify first and last names are set
var user = {
    age: 29,
    location: 'London'
};
utils.setName(user, 'Michael Caley');

it('Should verify first and last names', () => {
    expect(user).toInclude({
        firstName: 'Michael',
        lastName: 'Caley'
    });
});

// async tests require the done argument which can be called at the appropriate time
it('should async add two numers', (done) => {
    utils.aysncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

// promise
it('should async check for a string', (done) => {
    utils.testPromise((message) => {
        expect(message).toBeA('string');
        done();
    });    
});




it('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
    var res = utils.square(23);
    expect(res).toBe(529).toBeA('number');
});

it('should expect some values', () => {
    // expect(12).toNotBe(11);

    // Below will fail because same values but NOT === the same object.
    // However would pass == so use different expect method
    // expect({name: 'Michael'}).toBe({name: 'Michael'});

    // This test is for loose equality
    expect({ name: 'Michael' }).toEqual({ name: 'Michael' });
});

it('should include', () => {
    expect([2, 3, 4]).toInclude(2);
});

it('should expect some values', () => {
    expect({
        name: 'Michael',
        age: 29,
        location: 'London'
    }).toInclude({
        age: 29
    });
});



