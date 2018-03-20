
// Using supertest assertion library 

const request = require('supertest');
const expect = require('expect');
const app = require('./server.js').app;

it('should return hello world response', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect({ message: 'hello' })
        .end(done);
});

it('Should return my user object', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                name: 'Mike',
                age: 29
            });
        })
        .end(done);
});