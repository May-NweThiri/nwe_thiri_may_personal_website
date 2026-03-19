(function () {
  emailjs.init("2wthGfyk3rEdMXSeR");
})();

window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("❌ Please enter a valid email address!");
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send("service_p45yobu", "template_2cx2qyj", templateParams)
      .then(function (response) {
        alert("Email sent successfully!");
        form.reset();
        console.log("Success!", response.status, response.text);
      })
      .catch(function (error) {
        alert("Failed to send email.");
        console.error("Failed...", error);
      });
  });
});