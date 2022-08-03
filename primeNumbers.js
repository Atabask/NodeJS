import colors from 'colors'



const rangeNumbers = process.argv.slice(2)

const arr = [];


if (rangeNumbers === null && rangeNumbers === " ") {

    console.log(colors.red("Error, enter a number"))

} else {

    nextPrime:

    for (let i = 2; i <= rangeNumbers; i++) {

        for (let j = 2; j < i; j++) {

            if (i % j == 0)

                continue nextPrime;

        }

        

        // if ( i && arr[arr.length - 1] === colors.red ) {
        //     arr.push( colors.green(i) )
        // } else if ( arr[arr.length - 1] === colors.green ) {                
        //     arr.push( colors.yellow(i) )
        // } else if ( arr[arr.length - 1] === colors.yellow ) {
        //     arr.push( colors.red(i) )
        // }

        arr.push(i)
        // const lastArr = arr[arr.length - 1] 
        // console.log("lastArr",lastArr)


        // arr.push(colors.green(i))
        // arr.push(colors.yellow(i))
        // arr.push(colors.red(i))


    }
}


arr.forEach((item) => {
    if( item === 2) {
        console.log(colors.green(item))
    } else if( arr[arr.length - 1] === colors.green.item ) {
        console.log(colors.yellow(item))
    }
})

