import fs from 'fs'



const FILE_LOG = './dz2/logs.log'

const sizeFS = fs.statSync(FILE_LOG);

let size = sizeFS.size

console.log("size>>>>", size);


function getRandomNum() {
    return Math.floor(Math.random() * (999 - 100)) + 100
};

const requests = [
    `${getRandomNum()}.0.0.1 - - [25/May/2021:00:07:24 +0000] "POST /baz HTTP/1.1" 200 0 "-" "curl/7.46.0"`,
];

// 104 857 600 Байт = 100 МБ
const writeStream = fs.createWriteStream(FILE_LOG, { encoding:'utf-8', flags: 'a' }, )  

writeStream.write(JSON.stringify(requests) + '\n');

// while(size < 104857600) {
//     writeStream.write(JSON.stringify(requests) + '\n');
//     size++
// }


// for(size = 0; size < 104857600; size++) {
//     writeStream.write(JSON.stringify(requests) + '\n');
// }

writeStream.end(() => console.log('Finish'))

