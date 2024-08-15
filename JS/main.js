let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle(fa-xmark)
    navbar.classList.toggle('active')
}


/*scroll section active link */

let section =document.querySelector('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getattribute('id');

        if(top >= offset && top< offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id+ ']').classList.add('active');
        })
    }
})


/* sticky navbar */
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY >100);

/* remove toggle icon and navbar */
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

/* scroll revel */

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content,heading' ,{ origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact form ', { origin: 'button' });
 ScrollReveal().reveal('.home-contact h1, about-img' ,{ origin: 'left' });
 ScrollReveal().reveal('.home-contact p,about-content' { origin: 'right' });

 /* typed js*/
 const typed = new typed('.multiple-text',{
    strings: ['Software Engineer'],
    typeSpeed: 70,
    backSpeed: 70,
    backdelay: 1000,
    loop: true,
 })

 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const emailSubject = document.getElementById('emailSubject').value;
    const message = document.getElementById('message').value;
    
    const formData = {
        fullName,
        emailAddress,
        mobileNumber,
        emailSubject,
        message
    };
    
    // Log data locally
    console.log(formData);
    
    // Send data to server
    fetch('https://your-server-endpoint.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally display a success message or redirect the user
    }).catch(error => {
        console.error('Error:', error);
    });
    
    // Display data on the page
    document.getElementById('output').innerHTML = `
        <h3>Submitted Data</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${emailAddress}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
        <p><strong>Subject:</strong> ${emailSubject}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
});

<script>
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('https://your-server-endpoint.com/process_form', { // Replace with your server endpoint
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        alert('Message sent successfully!');
        console.log(result); // For debugging
    })
    .catch(error => {
        alert('Failed to send message.');
        console.error('Error:', error); // For debugging
    });
});
</script>
