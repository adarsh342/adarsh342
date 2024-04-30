// JavaScript
function composeEmail() {
    // Specify the recipient email address
    var recipient = 'example@gmail.com';

    // Specify the email subject and body
    var subject = 'Regarding Job Opportunity';
    var body = 'Hello,\n\nI am interested in discussing job opportunities with you.';

    // Encode special characters in the email body
    body = encodeURIComponent(body);

    // Construct the mailto URL with recipient, subject, and body
    var mailtoUrl = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;

    // Open the mail client with the pre-filled email
    window.open(mailtoUrl);
}


const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});
