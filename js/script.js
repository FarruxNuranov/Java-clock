const   secondArrow = document.querySelector('.s'),
        minuteArrow = document.querySelector('.m'),
        hourArrow   = document.querySelector('.h'),
        hourBox     = document.querySelector('.hours'),
        minuteBox   = document.querySelector('.minutes');
        

function watch() {
    let time = new Date()
    let seconds = time.getSeconds()
    let minutes = time.getMinutes()
    let hours   = time.getHours()
    
    hourArrow.style = `transform: rotate(${hours * 30}deg)`
    minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
    secondArrow.style = `transform: rotate(${seconds * 6}deg)`
    
    hourBox.innerHTML = hours < 10 ? '0' + hours : hours
    minuteBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
    
    setTimeout(() => watch(), 1000)
}
watch()





const links = document.querySelectorAll('.tabsItem')
const tabs  = document.querySelectorAll('.tabsContentItem')

console.log(links);

links.forEach((item,i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})



function removeActive() {
    links.forEach((item,i) => {
        item.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}



// рекурсия это когда функция вызывает саму себя внутри
// setTimeout - позволяет выполнить код с указанной задержкой

// let i = 0;

// function primer() {
//     if(i < 60) {
//         console.log(i);
//         i++
//        setTimeout(() =>  primer(), 1000)
       
//     }
// }
// primer()

let tabsek = document.querySelector('.tabsLink__span')
let hoursek = document.querySelector('.stopwatch__hours');
let minutesek = document.querySelector('.stopwatch__minutes');
let secondsek = document.querySelector('.stopwatch__seconds');
let startBtn = document.querySelector('.stopwatch__btn');



let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function Time() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
   hoursek.innerHTML = hours
   minutesek.innerHTML = minutes
   secondsek.innerHTML = seconds

}

startBtn.addEventListener('click', () => {
  if (startBtn.innerHTML == 'start'){
    interval = setInterval(Time, 1000);
    tabsek.classList.add('active')
  startBtn.classList.add("active")
  startBtn.innerHTML = 'STOP'

  
  }else if (startBtn.innerHTML == 'STOP'){
    clearInterval(interval);
    tabsek.classList.remove('active')
     startBtn.classList.remove("active")
     
     tabsek.classList.add('active_clear')
    startBtn.innerHTML = 'CLEAR'


  } else if (startBtn.innerHTML == 'CLEAR') {
    hoursek.innerHTML = '0'
    minutesek.innerHTML = '0'
    secondsek.innerHTML = '0'
    seconds = 0;
    minutes = 0;
    hours = 0;
    tabsek.classList.remove('active_clear')
      startBtn.innerHTML = "start"




  }

  
  
});

