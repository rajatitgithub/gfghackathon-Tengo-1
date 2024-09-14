const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', handleLogin);
registerForm.addEventListener('submit', handleRegister);

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (validateUsernameAndPassword(username, password)) {
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('error-message').innerHTML = 'Invalid username or password';
  }
}
function handleRegister(event) {
  event.preventDefault();
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (validateRegistrationForm(firstname, lastname, email, username, password, confirmPassword)) {
    window.location.href = 'login.html';
  } else {
    document.getElementById('error-message').innerHTML = 'Registration failed';
  }
}

function validateUsernameAndPassword(username, password) {
  return true;
}

function validateRegistrationForm(firstname, lastname, email, username, password, confirmPassword) {
  return true;
}  