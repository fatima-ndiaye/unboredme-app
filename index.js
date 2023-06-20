
document.getElementById('btn').addEventListener('click', ()=>{
    // This fetches data from the "https://www.boredapi.com/api/activity" API endpoint.
    fetch("https://www.boredapi.com/api/activity")/*https://apis.scrimba.com/bored/api/activity*/

        // This converts the response to JSON format.
        .then(response => response.json())

        // This callback function is executed when the JSON data is received.
        .then(data => 
        {
             // This updates the text content of the element with the id 'activity' to display the fetched activity.
            document.getElementById('activity').textContent = data.activity

        })
})
