var url = "https://ancient-caverns-16282.herokuapp.com/cars"

document.getElementById("submit").addEventListener("click",carsubmit);


 async function carsubmit (){

    // e.preventDefault()



    var first = document.getElementById("first").value;

    var second = document.getElementById("second").value;
  
    var third = document.getElementById("third").value;
  
    var four = document.getElementById("four").value;
    
  
    var obj = {
      first,
      second,
      third,
      four,
    };
  console.log(obj)
  
  // console.log("sss",obj.first)
  
  if(obj.first == 1 && obj.second==2 && obj.third== 3 & obj.four==4){
      alert("OTP Matched; Working on Posting Your Ad !!! ");


      var brand =  document.getElementById("brand").value

      var type = document.getElementById("type").value
    
      var year = document.getElementById("year").value
    
      var km =  document.getElementById("km").value
    
      var des =  document.getElementById("des").value
    
      var price = document.getElementById("price").value
    
    
      let cars = {
           
        brand : brand,
       type : type,
       year : year,
       kms : km,
       Description : des,
       Price:price
      
    }
    
    let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(cars)
      });
      
      let result = await response.json();
    
      console.log(result);
    alert("Ad Posted Successfully");
    
    window.location.href = "./cars.html"



  }
  else{
      alert("OTP Not Matched")
  }
  




   


 

}



var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}