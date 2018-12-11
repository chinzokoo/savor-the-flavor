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

$('#searchFood').on("click", function(e) {
  e.preventDefault();
  // user.js only accepts email and passwords
  var food = {
    food : $('#foodSearch').val(),
  }

  $.ajax("/searchfood",{
    type: "POST",
    data: food
  })
  .then(function( res) {
    console.log(res)
  })
})

// add food
$('#AddFood').on("click", function(e) {
  e.preventDefault();
  // user.js only accepts email and passwords
  var food = {
    food : $('#nameOfFood').val(),
  }

  // we first try to contact the api, api would return 
  $.ajax("/searchfood",{
    type: "POST",
    data: food
  })
  .then(function( res) {
    var newFood = {
      name_food: $('#nameOfFood').val(),
      recipe: res,
      userId: 1
    }
    console.log(newFood)
    // we now receive response from adamam then we use it to be a recipe
    $.ajax("/food/create",{
      type: "POST",
      data: newFood
    })
    .then(function( res) {
      console.log(res)
    })   

  })
})
