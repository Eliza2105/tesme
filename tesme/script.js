let reset = document.getElementById('reset')
let led = document.getElementById('led')
let inp = document.getElementById('input')
let audio = document.getElementById('aud')

let count = 0;
const countBtn = ()=>{
   count++
inp.value = count
if(inp.value == 100){
    audio.play()
    inp.style.backgroundColor = 'lightblue';
    setTimeout(() => {
        inp.style.backgroundColor = '';
    }, 2000)
    }
}
const resetBtn = ()=>{
inp.value = ""
count = 0
}
const ledBtn = ()=>{
inp.style.backgroundColor = 'lightblue';
// inp.style.transition = "5s"

setTimeout(() => {
    inp.style.backgroundColor = '';
}, 2000);


}