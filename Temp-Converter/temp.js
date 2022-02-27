var rad = document.myForm.temp;
  for (var i = 0; i < rad.length; i++) {
  rad[i].addEventListener('change', function() {
      if(this.value === "Celsius")
      {
        document.getElementById('fd').readOnly = true;
        document.getElementById('cd').readOnly = false;
      }
      
      if(this.value === "Fahrenheit") {
        document.getElementById('fd').readOnly = false;
        document.getElementById('cd').readOnly = true;
      }
    });
  }

const changeDeg = () =>{

  if(document.getElementById('tempToF').checked) {
    
    const fv = document.getElementById('cd').value;

    

    let newcv = (fv) * 9/5 + 32;
    newcv = parseFloat(newcv).toFixed(2); //12.23

    console.log(newcv);

    document.getElementById('fd').value = newcv;
  }
  
  
  else if(document.getElementById('tempToC').checked) {
 
    const ft = document.getElementById('fd').value;
   
      let newcv = (ft -32)* 5/9;
      newcv = parseFloat(newcv).toFixed(2); //12.23
      console.log(newcv);
  
      document.getElementById('cd').value = newcv;
     
    
  }
  else{
    alert("Select Conversion Type");
  }
  
  }


 