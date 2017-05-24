
var link = document.querySelector(".feedback");
				var popup = document.querySelector(".modal-content");
				var close = document.querySelector(".modal-content-close");
				var name = document.querySelector("[name=name]");
				var email = document.querySelector("[name=e-mail]");
				var message = document.querySelector("[name=message]");
				var form = document.querySelector("form")

				link.addEventListener("click", function(event) { 
    event.preventDefault(); 
    popup.classList.add("modal-content-show"); 
    });
    close.addEventListener("click", function(event) { 
    event.preventDefault(); 
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error"); 
  }); 
  form.addEventListener("submit", function(event) { 
    if (!name.value || !email.value || !message.value) { 
      event.preventDefault(); 
      popup.classList.add("modal-error"); 
    } else {
    	localStorage.setItem("name", name.value); 
    }
  }); 
