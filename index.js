

// as instructed created a function to fire when the button in the html is clicked
 function doggoClicker () {

        var button = document.getElementById('doggo-clicker');
        button.innerHTML = "Generating Doggo...";

        // using axios function/method to GET a random image from the dog.ceo API
        axios.get('https://dog.ceo/api/breeds/image/random')
        // using a 'promise' function (.then) to run after the api get request is made.. this will 
        // use a callback function taking the parameter 'response' which I (think) is an axios specific keyword representing
        // the payload of the GET request. This function will simply grab the html img-container, make a new div. add some styling
        // and bootstrap classes to it, then append the actual image via template literal notation (${response.data.message})
            .then(function(response) {

                var imgContainer = document.getElementById('img-container');
                var dogImgDiv = document.createElement('div');
                var dogImg = document.createElement('img');
                imgContainer.appendChild(dogImgDiv);
                dogImgDiv.setAttribute('class', 'card m-2');
                dogImgDiv.style = 'width: 16rem;';
                dogImgDiv.appendChild(dogImg);
                dogImg.setAttribute('src',`${response.data.message}`); 
                button.innerHTML = "Generate Doggo"

            }) ; 
        
}
    
// We've got a working page so far.
// Here we're adding a new axios GET request to the dog.ceo breeds API endpoint.
// This was done outside the above function in the global scope so that it runs and pulls the 
// data down into the browser every time the page is refreshed. We will use this data later in our select list

axios.get('https://dog.ceo/api/breeds/list')
    .then(function(response) {
        // console logging response param to confirm get request is working correctly
        console.log(response);
        
    }
    );