/* Global Variables */


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// LEarning git//



    /*POST DATA*/
    const postData = async ( url = '', data = {})=>{
         console.log(data)
   
         const response = await fetch('http://localhost:8080/weatherDetails' ,{
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         credentials: 'same-origin', // include, *same-origin, omit
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(data), // body data type must match "Content-Type" header        
       });
   
         try {
           const newData = await response.json();
           console.log(newData);
           return newData
         }catch(error) {
         console.log("i am error", error);
         // appropriately handle the error
         }
     }
   
     const a = document.getElementById('generate').addEventListener('click',performAction);

    function performAction(e){
        const zip = document.getElementById("zip").value;
        const feelings = document.getElementById("feelings").value;
        const date = document.getElementById("mydate").value;
        const temp = document.getElementById("temp").value;
        const response = document.getElementById("response").value;

        postData('/weatherDetails',{ Zip : zip,userFeelings :feelings,Date :date, Temperature:temp , userResponse:response })

    }

   /*GET DATA*/
   