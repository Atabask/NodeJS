var time = process.argv.slice(2) 


let timer = setInterval( function() {

    let timeMinut = time 

    let seconds = timeMinut%60 
    let minutes = timeMinut/60%60 
    let hour = timeMinut/60/60%60

    if(time <= 0) {
        clearInterval(timer)
        console.log("Time is out")
        
    } else {
        console.log( Math.trunc(hour),"hrs", Math.trunc(minutes),"min", Math.trunc(seconds),"sec" )
    }
    --time;
}, 1000)

