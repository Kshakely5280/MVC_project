const loginFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (name && password) {
      const response = await fetch('/userlogin', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/api/profile');

      } else {
        let message = await response.json();
        const errorMessageEl = document.querySelector('#login-error-message');
        errorMessageEl.textContent = message.message;
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        const message = await response.json();
        const errorMessageEl = document.querySelector('#login-error-message');
        errorMessageEl.textContent = message.message;
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  