import {Router} from "./router.js"

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()

function redirectToUniverse() {
    window.location.href = "/universe";
}

window.onpopstate = () => router.handle()
window.route= () => router.route()

const home = document.querySelector('#home')
const exploration = document.querySelector('#exploration')
const universe = document.querySelector('#universe')

home.addEventListener('click', function() {
    home.classList.add('active')
    exploration.classList.remove('active')
    universe.classList.remove('active')
})

exploration.addEventListener('click', function() {
    home.classList.remove('active')
    exploration.classList.add('active')
    universe.classList.remove('active')
})

universe.addEventListener('click', function() {
    home.classList.remove('active')
    exploration.classList.remove('active')
    universe.classList.add('active')
})
