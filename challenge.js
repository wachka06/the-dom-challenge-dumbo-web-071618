
(function initializeTimer() {

  let timer = setInterval( function(){
    let counter = document.querySelector("#counter");
    counter.innerHTML = parseInt(counter.innerHTML) + 1
  }, 1000)

  document.querySelector('#pause').addEventListener('click', function(){
    if(document.querySelector('#pause').innerHTML === 'unpause'){
      timer = setInterval(function(){
        let counter = document.querySelector("#counter");
        counter.innerHTML = parseInt(counter.innerHTML) + 1
      }, 1000);
      const pause = document.querySelector('#pause');
      pause.innerHTML = 'pause';
    } else {
      clearInterval(timer);
      const unpause = document.querySelector('#pause');
      unpause.innerHTML = 'unpause';
    }
  })
})()

document.getElementById('+').addEventListener('click', function(){
  let counter = document.querySelector("#counter");
    counter.innerHTML = parseInt(counter.innerHTML) + 1
});

document.getElementById('-').addEventListener('click', function(){
  let counter = document.querySelector("#counter");
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
})

 function display(count){
   const likes = document.querySelector('.likes');
   likes.innerHTML = ""; // This line clear the content of innerHTML after each click.


   for (const timer in count){
    let li = document.createElement('li');
    li.innerHTML = `${timer} has been liked ${count[timer]} times`;
    likes.appendChild(li)
   }
   // When you use "appendChild," (1)add the text in innerHTML, (2)use "appendChild."
 }


  function likes(){
    const count = {}; // We need to make a countainer to save the information of (1)the number of setTimeout and (2)the number of how many times the user clicked "likes".
    document.getElementById('<3').addEventListener('click', function(){
      let timer = document.getElementById('counter').innerText;
      if(count[timer] === undefined) {
        count[timer] = 1
      } else {
        count[timer] += 1
      }
      display(count); //You don't need to return, but if you do, you need to return in the "addEventListener."
    })
  }

// display()

likes() // You have to call function!
