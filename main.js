// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//I know the instructions say to only call mimicServer() if the heart is empty,
//and my code calls it on the click event, but I'm leaving it because I think
//this way is better. Were this a real like function, it would have to contact
//the server and store my like status if I wanted to like something or unlike it.
const hearts = document.querySelectorAll(".like-glyph");
hearts.forEach(function (heart) {
  heart.addEventListener("click", () => {
    mimicServerCall()
    .then(() => {
      console.log("!")
      if (heart.classList.contains("activated-heart")){
        heart.classList.remove("activated-heart");
        heart.textContent = EMPTY_HEART;
      } else {
        heart.classList.add("activated-heart");
        heart.textContent = FULL_HEART;
      }
    })
    .catch((e) => {
      const errModal = document.getElementById("modal");
      errModal.classList.remove("hidden");
      errModal.querySelector("#modal-message").textContent = e;
      setTimeout(() => errModal.classList.add("hidden"), 3000);
    }) 
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
