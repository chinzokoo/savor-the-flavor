// register user to our database with end point /user/register
$('#register').on("click", function(e) {
  e.preventDefault();
  // user.js only accepts email and passwords
  var user = {
    email : $('#inputEmail').val(),
    password: $('#inputPassword').val()
  }
  $.ajax("/user/register",{
    type: "POST",
    data: user
  }).then(function(res) {
    console.log(res)
  })
})

$('#login').on("click", function(e) {
  e.preventDefault();
  // user.js only accepts email and passwords
  var user = {
    email : $('#loginEmail').val(),
    password: $('#loginPassword').val()
  }

  $.ajax("/user/login",{
    type: "POST",
    data: user
  }).then(function(res) {
    console.log(res)
  })
})
