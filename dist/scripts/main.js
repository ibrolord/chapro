
// scrollTo function
function scrollToId(id) {
  var position = document.getElementById(id).offsetTop;
  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
}

// helper function for gettting DOM element by id
function getElementById(element) {
  return document.getElementById(element);
}

// send mail function
function sendMail(formInput) {
  if (typeof formInput === 'object') {
    try {
      const endpoint = 'https://'; // provide endpoint url
      const lambdaRequest = new Request(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formInput)
      });
      // make request to the endpoint
      fetch(lambdaRequest)
        .then(response => console.log(response))
        .catch(err => console.log(err));
      return true;
    }
    catch (error) {
      return false;
    }
  }
  return false;
}


// handle form submission
document.querySelector('#contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = getElementById('name').value;
  const email = getElementById('email').value;
  const message = getElementById('message').value;
  const info = document.querySelector('.info');
  const formData = { name, email, message };
  if (sendMail(formData)) {
    info.style.color = 'green';
    info.innerText = 'Mail sent successfully!!!';
  }
  else {
    info.style.color = 'red';
    info.innerText = 'Error occured while trying to send mail, please try again';
  }
});

// event handlers
document.querySelector('#scroll-to-provinces').addEventListener('click', function (e) {
  e.preventDefault();
  scrollToId('provinces');
});

document.querySelector('#scroll-to-contact').addEventListener('click', function (e) {
  e.preventDefault();
  scrollToId('contact');
});

document.querySelector('#scroll-to-about').addEventListener('click', function (e) {
  e.preventDefault();
  scrollToId('about');
});


