// Get button event listener
document.getElementById('get-fact').addEventListener('click', loadCatFact);
const container = document.querySelector('.container');

function loadCatFact(e) {
    // Testing
    // console.log("button has been clicked");

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://catfact.ninja/fact', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            console.log('RESPONSE STATUS: ', response.status);

            let output = '';

            // response.value.forEach(function(fact){
            //     output += `
            //         <h5>${fact.text}</h5>
            //     `;
            // })

            // for(let i = 0; i < response.length; i++) {
            //     output += `
            //         <h5>${response[i].text}</h5>
            //     `;
            // }

            // for (let fact in response){
            //     output += `
            //         <h5>${response.text}</h5>
            //     `;
            // }

            // Single fact function
            output += `
               <h5>${response.fact}</h5>  
            `;


            document.querySelector('#cat-facts').innerHTML = output;

            if(response.status !== 'undefined') {
                showTimedAlert();
            } else {
                console.log('something went wrong. Please try again.');
            }


        }
    }

    xhr.send();

    e.preventDefault();
}

// Need to modify the showAlert function to create an elegant div instead of a paragraph

function showTimedAlert() {
    // Create an alert element
    const alertElement = document.createElement('div');
    alertElement.classList.add('success-alert');
    alertElement.innerText = 'Cat Facts Generated Successfully';
    container.appendChild(alertElement);
    setTimeout(function() {
        alertElement.style.display = 'none';
    }, 1500);
}
