
module.exports = {
    add: (a, b) => a + b, //no need for return when curly braces aren't present
    square: (a) => { return a * a; },

    setName: (user, fullName) => {
        var names = fullName.split(' ');
        user.firstName = names[0];
        user.lastName = names[1];
        return user;
    }
};