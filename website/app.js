import {apiKey} from './apikey';

/**API credential */
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
let apiKey = 'apiKey';

  /*POST DATA (user entered only) to server*/
    const postData = async ( url = '', data = {})=>{
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
                // console.log(newData);
                return newData
                }catch(error) {
                console.log("i am error", error);
              // appropriately handle the error
         }
     }


  /** Posting user entered and fetched weather API details to server */
   const postFetchedData  = async(url ='',data ={}) =>{
      const resFetchedData = await fetch('http://localhost:8080/weatherDetails',{
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
                'Content-Type': 'application/json',
            },
          body: JSON.stringify(data),
        })
        try{
           const newfetchedData = resFetchedData.status;
          return newfetchedData;
          } catch(error){
          console.log("i am error", error);
            }   
        
        }   

  /**Get weather details from weather API */
     const getweatherDetails = async(baseURL,zip,apiKey)=>{
       if(zip ==""){
        alert("please enter zipcode");
         return;
       }else{
      const getresponse = await fetch(baseURL+'q='+zip+'&appid='+apiKey);    
      //const getData = await fetch(baseURL+'q='+zip+'&appid='+apiKey);
          try{
            const getData = await getresponse.json();
            const newTemperature =Math.round(1.8*((getData.main.temp)-273)+32);
            const feels_like = Math.round(1.8*((getData.main.feels_like)-273)+32);
            document.getElementById("display-tempe").innerHTML = newTemperature;
           document.getElementById("display_feelslike").innerHTML = feels_like;      
          }
         catch(error){
         console.log("i am error", error);
         }
        }
      }
   

    /**Retrieve and display user entered date and content in UI */
      const retrieveData = async(url ="")=>{
      var getrequest = await fetch(url);
        
      try{
        
         var allData = await getrequest.json();
          console.log(allData);
          var d = new Date(allData.Date).toDateString();
          if(d=" "){
            document.getElementById('display-date').innerHTML = " ";
          }
          document.getElementById('display-date').innerHTML = d;
          document.getElementById('user-input').innerHTML = allData.userResponse;
        }
        catch(error){
            console.log("i am error", error);
         }       
      } 


    /*Button click-event listener*/ 
    document.getElementById('generate').addEventListener('click',performAction);


    /**Button event listener function */
    function performAction(e){
        const zip = document.getElementById("zip").value;
        const feelings = document.getElementById("feelings").value;
        const date = document.getElementById("mydate").value;
        const temp = document.getElementById("temp").value;
        const irresponse = document.getElementById("iresponse").value;
       /** Next line of data is for posting data for only the user entered details - without weather API details */

        /*postData('/weatherDetails',{ Zip : zip,userFeelings :feelings,Date :date, Temperature:temp , userResponse:irresponse })*/
        
        /*Chaining another promise to post data along with getting weather API* */
        getweatherDetails(baseURL,zip,apiKey).then(function(){
          const FetchedTemp =  document.getElementById('display-tempe').innerText;
          const fetchedFeelsLike = document.getElementById('display_feelslike').innerText;
          postFetchedData('/weatherDetails',{ Zip :zip,userFeelings :feelings,Date :date, Temperature:temp , userResponse:irresponse,newtemp:FetchedTemp,newfeels:fetchedFeelsLike} );
        })
          .then(function(){
            (retrieveData('/weatherDetails'));
          });
      }

    
   
  
     
      
      