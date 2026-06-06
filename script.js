function showContact(e) {
	if (e) e.preventDefault()

	const main = document.getElementById('main-site')
	const contact = document.getElementById('contact')

	main.style.display = 'none'

	contact.classList.add('contact-active')
	contact.style.display = 'flex'

	window.scrollTo(0, 0)

	document.getElementById('nav-contact-btn').classList.add('active')
}

function showMainSite() {
	const main = document.getElementById('main-site')
	const contact = document.getElementById('contact')

	main.style.display = 'block'

	contact.classList.remove('contact-active')
	contact.style.display = 'none'

	document.getElementById('nav-contact-btn').classList.remove('active')
}

function showToast(msg) {
	const t = document.getElementById('toast')

	t.textContent = msg
	t.classList.add('show')

	setTimeout(() => {
		t.classList.remove('show')
	}, 3000)
}

function handleContact() {
	showToast('Message sent! I will get back to you soon.')

	const name = document.getElementById('f-name')
	const email = document.getElementById('f-email')
	const message = document.getElementById('f-message')

	if (name) name.value = ''
	if (email) email.value = ''
	if (message) message.value = ''
}