function togglemode() {
    const html= document.documentElement

    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/assets/light.jpg")

    }
    else {
        img.setAttribute("src", "./assets/assets/dark.png")
    }


}