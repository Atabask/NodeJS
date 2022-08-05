import readline from "readline"
import colors from "colors"
import beep from "beepbeep"         // Не отрабатывает
// import ansi from "ansi";         //отсюда beep тоже не отрабатывает         
// import {Howl, Howler} from 'howler';         //Не уверен, что она работает с терминалами, но решил попробовать, не отрабатывает




const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// const cursor = ansi(process.stdout)         

// const sound = new Howl({
//     src: "music/audio.mp3"      
// })



rl.on('line', (input) => {

    if( input === "Close" ) {
        rl.close();
    } else {
        console.log(`Conclusion:  ${colors.random(input)}`);
        beep(2)
        
        
        // cursor.beep()
        
        
        
        // sound.play(),
        // Howler.volume(1);
    }

    
  });


