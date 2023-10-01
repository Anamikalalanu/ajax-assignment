 function loadDoc()  {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 1) {
        document.getElementById("demo").innerHTML ="request sent";
      }
   
     else if(this.readyState == 2){
      document.getElementById("demo").innerHTML ="Request Received"; 
    }
    else if(this.readyState == 3){
      document.getElementById("demo").innerHTML ="Request processing";
    }
     else if(this.readyState == 4){
      document.getElementById("demo").innerHTML =this.responseText;
    }
    else {
      document.getElementById("demo").innerHTML="ERROR";
      console.log("success")
    }
  }

    xhttp.open("GET", "content.txt");
    xhttp.send();
  } 