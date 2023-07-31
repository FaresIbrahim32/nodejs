const {readFileSync,writeFileSync} = require('fs')
// const fs = require('fs') with fs.readfileSync is the same also

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

//console.log(first,second)

writeFileSync('./content/third.txt','poop',{flag:'a'})
writeFileSync('./content/result.txt',`${first},${second}`)
