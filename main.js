// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

Initialize();

function Initialize () 
{

  const buttons = document.getElementsByClassName("like-glyph");

  for (let i = 0; i < buttons.length; i++)
  {
    buttons[i].addEventListener('click', (e) => ToggleLikeButton(e));
  }
}


function ToggleLikeButton(button)
{
  mimicServerCall()
  .then(function (response) 
  {
    console.log(response);

    let isToggledOn = button.target.innerText == FULL_HEART ? true : false;

    console.log(isToggledOn);
    if (isToggledOn)
    { // or remove .activated-heart if it need to be grey
      button.target.classList.remove('activated-heart');
      button.target.innerText = EMPTY_HEART;
    }
    else
    { //add .activated-heart class to make heart turn red
      button.target.classList.add('activated-heart');
      button.target.innerText = FULL_HEART;
    }
  })
  .catch(function (error)
  {
    console.log(error);
    const modal = document.getElementById('modal');

    // remove hidden class from error modal 
    modal.classList.remove('hidden');

    // after 3 seconds add hidden class to error modal  
    setTimeout(() => modal.classList.add('hidden'), 3000);

  });
    
  
    
}
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
