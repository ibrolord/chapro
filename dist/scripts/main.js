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

/*
// send mail function
function sendMail(formInput) {
  if (typeof formInput === 'object') {
    try {
      const endpoint = 'https://agglspbbg5.execute-api.us-east-1.amazonaws.com/Prod/contact'; // provide endpoint url
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
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
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


*/

      function submitToAPI(e) {
       e.preventDefault();
       var URL = "https://1vysweipzg.execute-api.us-east-1.amazonaws.com/prod/contact-us";

            var Namere = /[A-Za-z]{1}[A-Za-z]/;
            if (!Namere.test($("#name").val())) {
                         alert ("Name can not less than 2 char");
                return;
            }
          /*  var mobilere = /[0-9]{10}/;
            if (!mobilere.test($("#phone-input").val())) {
                alert ("Please enter valid mobile number");
                return;
            }
          */
            if ($("#email").val()=="") {
                alert ("Please enter your email id");
                return;
            }

            var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
            if (!reeamil.test($("#email").val())) {
                alert ("Please enter valid email address");
                return;
            }

       var name = $("#name").val();
     //  var phone = $("#phone-input").val();
       var email = $("#email").val();
       var desc = $("#message").val();
       var data = {
          name : name,
          email : email,
          desc : desc
        };

       $.ajax({
         type: "POST",
         url : "https://1vysweipzg.execute-api.us-east-1.amazonaws.com/prod/contact-us",
         dataType: "json",
         crossDomain: "true",
         contentType: "application/json; charset=utf-8",
         data: JSON.stringify(data),

         
         success: function () {
           // clear form and show a success message
           var SuccessMessage = `<p style="color: #84423a;yte3position: relative;top: -2rem;font-weight: bold;">Message succefully sent!</p>`;
            $(".contact-container").append(SuccessMessage)
           document.getElementById("contact-form").reset();
       location.reload();
         },
         error: function () {
           // show an error message
           alert("UnSuccessfull");
         }});
     }

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


