const userInput=document.getElementById('user')
console.log(userInput)
const days=document.getElementById('days')
const hours=document.getElementById('hour')
const minutes=document.getElementById('minutes')
const seconds=document.getElementById('seconds')
let label=document.getElementById('inputLabel')
let firstDiv=document.getElementById('inputted')
// console.log(label)







userInput.addEventListener('input',reverse);

function reverse(e){
if(!userInput.value){
    label.innerText='please select a date to start count down...'

}
if(userInput.value){
    label.innerText='your wish is performed...'
    // label.style.backgroundColor='green';
    // userInput.style.backgroundColor='brown';
    // userInput.style.backgroundColor='brown';
    // firstDiv.style.backgroundColor='red';


}
// hello
// days.innerText='wait'









    let userTypedInput=new Date(userInput.value);
    let futureMilliseconds=userTypedInput.getTime();
let today=new Date()
let now=today.getTime()


// subtracting future time from now in miles
let finalMiles=futureMilliseconds-now;
// console.log(finalMiles)
let daysHTML=Math.floor(finalMiles/(1000*60*60*24));

days.innerText=daysHTML;
// console.log(daysHTML)
let dayModule=finalMiles%(1000*60*60*24)
console.log(dayModule)





let hoursHTML=Math.floor(dayModule/(1000*60*60))
hours.innerText=hoursHTML;
// console.log(hoursHTML)
let hoursModule=finalMiles%(1000*60*60)


let minutesHTML=Math.floor(hoursModule/(1000*60))
minutes.innerText=minutesHTML;
let minutesModule=hoursModule%(1000*60)

// console.log(minutesHTML)

let secondsHTML=Math.floor(minutesModule/(1000))
seconds.innerText=secondsHTML;
// console.log(secondsHTML)





    // return day

}
setInterval(() => {
    console.log(reverse())
}, 1000);