


const title = document.querySelector(".topic")

const paragraph = document.querySelector(".para")

const button = document.querySelector(".btn")

const body = document.querySelector(".body1")


button.addEventListener("click", man)


function man(){

    body.style.backgroundColor = "black"

    title.style.color = "white"

    paragraph.style.color = "white"

    button.style.color = "black"

    button.style.padding = "10px 20px"

    button.style.backgroundColor = "gold"
}






const modeTitle = document.querySelector(".title2")

const modePara = document.querySelector(".para2")

const modeButton = document.querySelector(".red-mode")

const modeButton2 = document.querySelector(".black-mode")


modeButton.addEventListener("click", babane)

function babane(){

    modeTitle.style.color = "red"

    modePara.style.backgroundColor = "blue"

    modePara.style.color = "white"

    modeButton.style.backgroundColor = "grenn"
}


modeButton2.addEventListener("click", newButton)

function newButton(){

    modeTitle.style.color = "blue"

    modePara.style.backgroundColor = "green"

    modePara.style.color = "white"

    modeButton2.style.backgroundColor = "black"
}

