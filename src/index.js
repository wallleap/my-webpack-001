import './style.css'
import logo from './images/webpack-logo.png'

const h1 = document.createElement('h1')
const img = document.createElement('img')
h1.textContent = "Hello CSS"
img.src = logo

document.querySelector('#app').append(h1)
document.querySelector('#app').append(img)
