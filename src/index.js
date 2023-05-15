import './style.css'
import logo from './images/webpack-logo.png'

const h1 = document.createElement('h1')
const img = document.createElement('img')
const btn = document.createElement('button')
h1.textContent = "Hello CSS"
img.src = logo
btn.innerText = 'log a'

document.querySelector('#app').append(h1)
document.querySelector('#app').append(img)
document.querySelector('#app').append(btn)

btn.addEventListener('click', () => {
  import('./a.js').then(({a})=>{
    console.log(a)
  },()=>{})
})
