const cursor = document.querySelector(".cursor")
const holes = [...document.querySelectorAll(".hole")]
const scoreElement = document.querySelector(".score span")
let score = 0
function run (){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement("img")
    img.classList.add("hamster")
    img.src = "https://i.graphicmama.com/uploads/2017/3/58da2eee8e983-bean-mcround-smiling-hamster.png"

    img.addEventListener('click', () => {
        score += 10
        scoreElement.textContent = score
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 500)
    })
    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1500)
}
run()

window.addEventListener("mousemove", e=> {
    cursor.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"
})
window.addEventListener("mousedown",() => {
    cursor.classList.add("active")

})
window.addEventListener("mouseup",() => {
    cursor.classList.remove("active")

})