
module.exports = {
    add: (a, b) => a + b, //no need for return when curly braces aren't present

    aysncAdd: (a, b, callback) => {
        setTimeout(() => {
            callback(a + b);
        }, 1000);
    },

    square: (a) => { return a * a; },

    setName: (user, fullName) => {
        var names = fullName.split(' ');
        user.firstName = names[0];
        user.lastName = names[1];
        return user;
    },

    testPromise: (callback) => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Successful resolve');
            }, 0);
        }).then((message) => {
            callback(message);
        });
    }

};