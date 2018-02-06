var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(catSays) {
  console.log("Hello " + catSays(3));
}

// pass in catSays as a callback function
helloCat(catSays);