function toggleNavbar() {
  event.target.closest('.navbar').classList.toggle('open')
}

function openModal(id) {
  document.getElementById(id).classList.add('open')
}

function closeModal() {
  event.target.closest('.modal').classList.remove('open')
}