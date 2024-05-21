const healthProgress = document.querySelectorAll(".health")
const gameStates = document.querySelectorAll(".gameState")
const playerImages = document.querySelector('.playerImages')
const start = document.querySelector('.start')
const playerImageItem = document.querySelector('.playerImageItem')
const progressBars = document.querySelectorAll(".progressBar div")

const feedBtn = document.querySelector('.feed')
const playBtn = document.querySelector('.play')

const playerImagesArr = [
    "https://www.freeiconspng.com/uploads/dog-cartoon-png-31.png",
    "https://th.bing.com/th/id/R.c1fa4756e61aab35d1837a9d02d37aec?rik=b%2b8O9AIiDWb7NQ&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery2%2fCartoon-PNG-Image.png&ehk=%2fnVIhd4PdjMy63iWCWlfhGeWYc5wH6YNJjbOVVF23S8%3d&risl=1&pid=ImgRaw&r=0",
    "https://clipart-library.com/img/739673.png"
]

let playerImage = ""
let happiness = 100
let hunger = 100
let hp = 100

///// APPEND PLAYER IMAGES - SELECT PLAYER IMAGE /////
for (const imageUrl of playerImagesArr) {
    const img = document.createElement("img")
    img.src = imageUrl

    img.onclick = () => {
        playerImage = imageUrl
        playerImageItem.src = imageUrl

        const allImages = document.querySelectorAll(".playerImages img")
        allImages.forEach(singleImg => singleImg.className = "")

        img.className = "selected"
    }

    playerImages.appendChild(img)
}

function appendAnimal() {
    const rnd = (num) => Math.random() * num

    const reduceStats = () => {
        hunger -= rnd(1)
        happiness -= rnd(0.8)

        if (hunger <= 0 || happiness <= 0) {
            hp -= rnd(0.8)
        }

        if (hunger < 0) hunger = 0
        if (happiness < 0) happiness = 0
        if (hp < 0) hp = 0

        progressBars[0].style.width = hp + "%"
        progressBars[1].style.width = happiness + "%"
        progressBars[2].style.width = hunger + "%"

        if (hp === 0) {
            clearInterval(gameInterval)
            alert("Your pet has died. Game over.")
        }
    }

    const gameInterval = setInterval(reduceStats, 1000)
}

////// START GAME /////
start.onclick = () => {
    if (!playerImage) return alert("Please select a pet")

    gameStates[0].classList.remove("d-flex")
    gameStates[0].classList.add("d-none")

    gameStates[1].classList.remove("d-none")
    gameStates[1].classList.add("d-flex")

    appendAnimal()
}

feedBtn.onclick = () => {
    hunger += 10
    if (hunger > 100) hunger = 100
}

playBtn.onclick = () => {
    happiness += 10
    if (happiness > 100) happiness = 100
}



