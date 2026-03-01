// Initialize EmailJS
(function(){
  emailjs.init("YOUR_USER_ID"); // ضع هنا User ID من حساب EmailJS
  })();

  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  form.addEventListener("submit", function(e){
      e.preventDefault();

          const name = document.getElementById("name").value.trim();
              const email = document.getElementById("email").value.trim();

                  if(name && email){
                          // إرسال البريد
                                  emailjs.send("service_dh3xdlc","template_x98etjk",{
                                              to_email: "Islam900001@gmail.com",
                                                          from_name: name,
                                                                      from_email: email,
                                                                                  message: `تم الاشتراك في الكورس بواسطة ${name} (${email}). الكورس سيبدأ قريباً.`
                                                                                          })
                                                                                                  .then(function(){
                                                                                                              response.style.color = "green";
                                                                                                                          response.textContent = `Thank you ${name}! You have successfully subscribed. The course will start soon.`;
                                                                                                                                      form.reset();
                                                                                                                                              }, function(error){
                                                                                                                                                          response.style.color = "red";
                                                                                                                                                                      response.textContent = "Sorry, something went wrong. Please try again.";
                                                                                                                                                                              });
                                                                                                                                                                                  } else {
                                                                                                                                                                                          response.style.color = "red";
                                                                                                                                                                                                  response.textContent = "Please fill in your name and email.";
                                                                                                                                                                                                      }
                                                                                                                                                                                                      });