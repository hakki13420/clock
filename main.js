
const hoursElement=document.querySelector(".hours-container")
const minutesElement=document.querySelector(".minutes-container")
const secondsElement=document.querySelector(".seconds-container")

const digital=document.querySelector(".digital-hour")


setInterval(() => {
    const date=new Date()

    const hours=date.getHours()
    const minutes=date.getMinutes()
    const seconds=date.getSeconds()

    hoursElement.style.transform=`rotate(${hours*30}deg)`
    minutesElement.style.transform=`rotate(${(minutes*5)+(seconds/60)}deg)`
    secondsElement.style.transform=`rotate(${seconds*6}deg)`

    digital.innerHTML=`${hours}:${minutes}:${seconds}`

},1000);