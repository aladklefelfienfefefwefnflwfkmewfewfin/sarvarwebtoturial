"use strict"
const w1 = document.querySelector('.w1')
const w2 = document.querySelector('.w2')
const w3 = document.querySelector('.w3')
const w4 = document.querySelector('.w4')
const w5 = document.querySelector('.w5')
const w6 = document.querySelector('.w6')
const w7 = document.querySelector('.w7')
const w8 = document.querySelector('.w8')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const img = document.querySelector('.codingImg')
btn1.addEventListener('click', () => { w1.classList.add('dn'); w2.classList.replace('dn', 'db') })
w2.addEventListener('click', () => { w2.classList.replace('db', 'dn'); w3.classList.replace('dn', 'db') })
btn2.addEventListener('click', () => { w3.classList.replace('db', 'dn'); w4.classList.replace('dn', 'db') })
btn3.addEventListener('click', () => { w4.classList.replace('db', 'dn'); w5.classList.replace('dn', 'db') })
btn4.addEventListener('click', () => { w5.classList.replace('db', 'dn'); w6.classList.replace('dn', 'db') })
btn5.addEventListener('click', () => { w6.classList.replace('db', 'dn'); w7.classList.replace('dn', 'db') })
img.addEventListener('click', () => { w7.classList.replace('db', 'dn'); w8.classList.replace('dn', 'db') })