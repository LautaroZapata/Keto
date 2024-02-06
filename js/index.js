let day1 = document.getElementById('day1')
let day2 = document.getElementById('day2')
let day3 = document.getElementById('day3')
let day4 = document.getElementById('day4')
let day5 = document.getElementById('day5')
let day6 = document.getElementById('day6')
let day7 = document.getElementById('day7')
let day8 = document.getElementById('day8')
let day9 = document.getElementById('day9')
let day10 = document.getElementById('day10')

document.addEventListener("DOMContentLoaded",()=>{
    checked()
})



day1.addEventListener('click',()=>{
    localStorage.setItem('day1',JSON.stringify(day1.checked))    
})

const checked = () =>{
    if (JSON.parse(localStorage.getItem("day1")) == true) {
        day1.checked = true
    }
    else {
        localStorage.removeItem("day1")
    }
};