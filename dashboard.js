document.addEventListener('DOMContentLoaded', function() {
    var loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
      window.location.href = 'login.html';
    } else {
      var userName = document.getElementById('userName');
      var userData = JSON.parse(localStorage.getItem('userData'));
      userName.textContent = userData.firstName;
  
      var postContainer = document.getElementById('postContainer');
      userData.posts.forEach(function(post) {
        var postCard = createPostCard(post.title, post.description);
        postContainer.appendChild(postCard);
      });
    }
  });
  
  document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    // var photo = document.getElementById('photo').value;
  
    var post = {
      title: title,
      description: description,
      // photo: photo
    };
  
    var userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      // userData.posts.push(post);
      localStorage.setItem('userData', JSON.stringify(userData));
  
      var postCard = createPostCard(title, description);
      var postContainer = document.getElementById('postContainer');
      postContainer.appendChild(postCard);
  
      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
      // document.getElementById('photo').value = '';
    }
  });
  var divCtn = document.querySelector('.content');
  function createPostCard(title, description) {
    var postCard = document.createElement('div');
    postCard.classList.add('post-card');
  
    var postTitle = document.createElement('h3');
    postTitle.textContent = title;
  
    var postDescription = document.createElement('p');
    postDescription.textContent = description;
  
    // var postPhoto = document.createElement('img');
    // postPhoto.src = photo;
    // postPhoto.alt = 'Post Photo';
  
    postCard.appendChild(postTitle);
    postCard.appendChild(postDescription);
    // postCard.appendChild(postPhoto);
    divCtn.appendChild(postCard)
    return postCard;

    
    getPosts.unshift(postObj)
    localStorage.setItem("posts", JSON.stringify(getPosts))

    
    title.value = ""
    desc.value = ""


  }
 
  function logout() {
    localStorage.removeItem("loginUser")
    window.location.replace("./index.html")
}