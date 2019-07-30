module.exports = () => {
  var faker = require('faker');
  var _ = require('lodash');
  return {
    users: _.times(12, function(n) {
      return {
        id: n + 1,
        email: faker.internet.email(),
        name: {
          first: faker.name.firstName(),
          last: faker.name.lastName(),
        },
        avatar: faker.internet.avatar()
      }
    })
  }
}