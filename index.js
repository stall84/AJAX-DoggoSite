

 function doggoClicker () {

        var button = document.getElementById('doggo-clicker');
        button.innerHTML = "Generating Doggo...";

        axios.get('https://dog.ceo/api/breeds/image/random'); 
        
}
    
