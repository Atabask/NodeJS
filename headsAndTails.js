import readline from "readline"
import colors from "colors"


const choice = ["1", "2"]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.on('line', (input) => {

    console.log('1 or 2? Press 3 to close')

    if (input === "3") {
        rl.close();
    } else if (choice[Math.floor(Math.random() * choice.length)] === input) {
        console.log(colors.green("Win"))
    } else {
        console.log(colors.red("Lose"))
    }



});

