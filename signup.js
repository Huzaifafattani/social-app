document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    var userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  
    window.location.href = 'login.html';
  });
  