let name = prompt("What is your name?")
alert("Hello " + name + "! Welcome to my portfolio page.")
const form = document.querySelector('form');
    const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');
      hamburger.addEventListener('click', () => {
         navUl.classList.toggle('show');
}
    );
