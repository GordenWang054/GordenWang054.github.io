const texts = document.querySelectorAll('ul li a')

texts.forEach(text => {
  text.innerHTML = text.innerText.split('').map((letters, i) => `<span style="transition-delay: ${i * 40}ms">${letters}</span>`).join('')
})

const cursor = document.querySelector('#cursor')
document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.pageY + 'px'
  cursor.style.left = e.pageX + 'px'
})