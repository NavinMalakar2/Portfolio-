var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

let sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

// google sheet

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyzUoVBBWJUyi-CQ7HeOP3tCVYqfEemEoyZPdBZ2zcdT9JudkrWAFvdsfeyga5DVNYl/exec'
  const form = document.forms['submit-to-google-sheet']
    const msg=document.getElementById("msg")

   
  form.addEventListener('submit', e => {
    e.preventDefault();
    msg.innerHTML = "Sending..."; // Show an immediate message when the form is submitted

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"; // Update the message after successful submission
            setTimeout(() => {
                msg.innerHTML = ""; // Clear the message after 1 second
            }, 1000);
            form.reset(); // Reset the form
        })
        .catch(error => {
            msg.innerHTML = "Error! Message not sent."; // Show error message
            console.error('Error!', error.message);
        });
});

