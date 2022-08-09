import fs from 'fs'
import  readLine  from 'readline'


const FILE_LOG = './dz2/logs.log'

const arrIP = []


const rl = readLine.createInterface({
input: fs.createReadStream(FILE_LOG, 'utf-8'),
output: process.stdout,

});

rl.on('line', function(line) {

    arrIP.push(line)
    console.log(arrIP)

});


