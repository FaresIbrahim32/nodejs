const names = require('./names');
console.log(names)

const hi = require('./utils');

const data = require('./alt-syntax');

require('./mind-grenade')
require("./tagreba")

hi('Barbosa');


hi(names.John)
hi(names.Dodger)

console.log(data)
console.log(data.items[0])
console.log(data.items[1])
console.log(data.items[2])

console.log(data.Peep)