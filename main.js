
const hoursElement=document.querySelector(".hours-container")
const minutesElement=document.querySelector(".minutes-container")
const secondsElement=document.querySelector(".seconds-container")

const digital=document.querySelector(".digital-hour")


setInterval(() => {
    const date=new Date()

    const hours=date.getHours()
    const minutes=date.getMinutes()
    const seconds=date.getSeconds()

    hoursElement.style.transform=`rotate(${hours*30+Math.round((minutes/60)*30)}deg)`
    minutesElement.style.transform=`rotate(${(minutes*6)+Math.floor((seconds/60)*6)}deg)`
    secondsElement.style.transform=`rotate(${seconds*6}deg)`

    console.log("deg hoursc",Math.round((minutes/60)*30))
    console.log("deg min",Math.floor((seconds/60)*6))


    digital.innerHTML=`${("0"+hours).slice(-2)}:${("0"+minutes).slice(-2)}:${("0"+seconds).slice(-2)}`

},1000);