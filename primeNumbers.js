import colors from 'colors'



const rangeNumbers = process.argv.slice(2)

const arr = [];

colors.setTheme({
    green: 'green',
    yellow: 'yellow',
    red: 'red'
})

if (rangeNumbers === " ") { 

    console.log(colors.red('Error, enter a number'))          // не отрабатывает условие, не понимаю почему 

} else {

    nextPrime:

    for (let i = 2; i <= rangeNumbers; i++) {

        for (let j = 2; j < i; j++) {

            if (i % j == 0)

                continue nextPrime;

        }


        arr.push(i)

        // if (i === 2 || arr[arr.length - 1] === colors.red(i)) {
        //     arr.push(colors.green(i))
            
        // } else if (arr[arr.length - 1] === colors.green(i)) {           это было изначально, но добавляло только 2
        //     arr.push(colors.yellow(i))

        // } else if (arr[arr.length - 1] === colors.yellow(i)) {
        //     arr.push(colors.red(i))

        // }




    }
}

for( let i = 0; i< arr.length; i+=3) {
    console.log(`${arr[i]}`.green)
    if(arr[ i + 1 ]) {
        console.log(`${arr[i + 1]}`.yellow)   // полностью списал
    } if (arr[ i + 2 ]) {
        console.log(`${arr[i + 2]}`.red)
    }
}

// arr.forEach((item) => {
//     console.log(item)                
// })



