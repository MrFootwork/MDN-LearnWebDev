const displayedImage = document.querySelector('.displayed-img')
const thumbBar = document.querySelector('.thumb-bar')

const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')

for (let i = 1; i <= 5; i++) {
	const newImage = document.createElement('img')
	newImage.setAttribute('src', `images/pic${i}.jpg`)
	thumbBar.appendChild(newImage)
	newImage.onclick = (e) => (displayedImage.src = e.target.src)
}

/* Wiring up the Darken/Lighten button */
btn.onclick = (e) => {
	if (btn.getAttribute('class') == 'light') {
		btn.setAttribute('class', 'dark')
		btn.textContent = 'Lighten'
		overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
	} else {
		btn.setAttribute('class', 'light')
		btn.textContent = 'Darken'
		overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'
	}
}