document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    var userData = JSON.parse(localStorage.getItem('userData'));
  
    if (userData && email === userData.email && password === userData.password) {
      localStorage.setItem('loggedInUser', email);
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid email or password. Please try again.');
    }
    // window.location.href = 'dashboard.html';
  });
  