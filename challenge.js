
function increment(){
  setInterval( function(){
    let counter = document.querySelector("#counter");
      counter.innerHTML = parseInt(counter.innerHTML) + 1
     }, 1000)
  }

  increment()

function add(){
  document.getElementById('+').addEventListener('click', function(){
    let counter = document.querySelector("#counter");
      counter.innerHTML = parseInt(counter.innerHTML) + 1
  });
}

add();

function minus(){
  let counter = document.querySelector("#counter");
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
}
//
// var count = {};
//
//
//  function display (timeList){
//    let likes = document.querySelector("#likes")
//    for (let element in timeList){
//
//      let li li= document.createElement("li");
//      li.innerHTML = `${Object.keys(timeList)[element]} has been liked ${timeList[element]} times`;
//
//      likes.appendChild(li)
//
//    }
//
//  }
//  for (var i = 1; i <= 10; i++)
//  {
//      var li = document.createElement("li");
//      li.className = "file";
//
//      var a = document.createElement("a");
//      a.innerHTML = "Subfile " + i;
//
//      li.appendChild(a);
//      ul.appendChild(li);
//  }



 function display(count){
   const likes = document.querySelector('.likes');
   likes.innerHTML = ""; // This line clear the content of innerHTML after each iteration.


   for (const timer in count){
    let li = document.createElement('li');
    li.innerHTML = `${timer} has been <strong>liked</strong> ${count[timer]} times`;
    likes.appendChild(li)
   }
   // When you use "appendChild," (1)add the text in innerHTML, (2)use "appendChild."
 }


  function likes(){
    const count = {}; // We need to make a countainer to save the information of (1)the number of setTimeout and (2)the number of how many times the user clicked "likes". 
    document.getElementById('<3').addEventListener('click', function(){
      let timer = document.getElementById('counter').innerHTML;
      if(count[timer] == undefined) {
        count[timer] = 1
      } else {
        count[timer] += 1
      }
      display(count); //You don't need to return, but if you do, you need to return in the "addEventListener."
    })
  }



// display()

likes() // You have to call function!
