function float_phone_click () {
    var temp = document.querySelector('.my-float');
	temp.classList.toggle('fa-phone');
	temp.classList.toggle('fa-times');
	var temp2 = document.querySelector('.float_popup');
	temp2.classList.toggle('fp_closed');
}
let curPhoto = 1;
let photoPrev;
function prev_photo(){
	curPhoto -= 1;
	if(curPhoto == 0) {
		curPhoto = 3;
	}
	photoPrev.style.display = 'none';
	photoPrev = document.getElementById("doc"+curPhoto);
	photoPrev.style.display = 'flex';
}
function next_photo(){
	curPhoto += 1;
	if(curPhoto == 4) {
		curPhoto = 1;
	}
	photoPrev.style.display = 'none';
	photoPrev = document.getElementById("doc"+curPhoto);
	photoPrev.style.display = 'flex';
}

function sendEmail() {
	var isChecked = document.getElementById("pol-konf-acc").checked;
	if(isChecked == false){
		return false;
	}
	nameM = document.getElementById('cuName').value;
	phoneM = document.getElementById('cuTelNum').value;
	messageM = document.getElementById('cuMessage').value;
	if(nameM == null || nameM == "" || phoneM == null || phoneM == ""){
		return false;
	}
	if(messageM == null){
		messageM = "";
	}
	emailjs.send("service_x5q7hmp","template_es314z6",{
			name: nameM,
			phone: phoneM,
			message: messageM,
		}).then(
	  (response) => {
	    document.getElementById('form').style.display = "none";
		document.getElementById('qsTN').style.display = "none";
		document.getElementById('toSHOFF').style.display = "block";
	  },
	  (error) => {
	    console.log('FAILED...', error);
	  },
	);

}

$(document).ready(function () {
	photoPrev = document.getElementById("doc1");
	emailjs.init({
		publicKey: "VXfRnDzKDF-iwuyrT",
	});
  // typing animation
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  // input text for typing animation
  $("#holder").writeText("КЛИНИКА ДЛЯ ВАШЕЙ УЛЫБКИ");

  // initialize wow.js
  // new WOW().init();

  // Push the body and the nav over by 285px over
  var main = function () {
    $(".fa-bars").click(function () {
      $(".nav-screen").animate(
        {
          right: "0px"
        },
        200
      );

      $("body").animate(
        {
          right: "285px"
        },
        200
      );
    });

    // Then push them back */
    $(".fa-times").click(function () {
      $(".nav-screen").animate(
        {
          right: "-285px"
        },
        200
      );

      $("body").animate(
        {
          right: "0px"
        },
        200
      );
    });

    $(".nav-links a").click(function () {
      $(".nav-screen").animate(
        {
          right: "-285px"
        },
        500
      );

      $("body").animate(
        {
          right: "0px"
        },
        500
      );
    });
  };

  $(document).ready(main);

  // initiate full page scroll

  $("#fullpage").fullpage({
    scrollBar: true,
    responsiveWidth: 100,
    navigation: true,
    navigationTooltips: ["головна", "о нас", "послуги", "лікарі", "відгуки", "напишіть нам", "контакт"],
    anchors: ["home", "about", "portfolio", "doctors", "reviews", "write", "contact"],
    menu: "#myMenu",
    fitToSection: true,

    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);

      //using index
      if (index == 1) {
        /* add opacity to arrow */
        $(".fa-chevron-down").each(function () {
          $(this).css("opacity", "1");
        });
        $(".header-links a").each(function () {
          $(this).css("color", "black");
        });
        $(".header-links").css("background-color", "transparent");
      } else if (index != 1) {
        $(".header-links a").each(function () {
          $(this).css("color", "black");
        });
        $(".header-links").css("background-color", "transparent");
      }

      //using index
      if (index == 2) {
        /* animate skill bars */
        $(".skillbar").each(function () {
          $(this)
            .find(".skillbar-bar")
            .animate(
              {
                width: $(this).attr("data-percent")
              },
              2500
            );
        });
      }
    }
  });

  // move section down one
  $(document).on("click", "#moveDown", function () {
    $.fn.fullpage.moveSectionDown();
  });

  // fullpage.js link navigation
  $(document).on("click", "#skills", function () {
    $.fn.fullpage.moveTo(2);
  });

  $(document).on("click", "#projects", function () {
    $.fn.fullpage.moveTo(3);
  });

  $(document).on("click", "#contact", function () {
    $.fn.fullpage.moveTo(4);
  });

  // smooth scrolling
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top
            },
            700
          );
          return false;
        }
      }
    });
  });

  //ajax form
  $(function () {
    // Get the form.
    var form = $("#ajax-contact");

    // Get the messages div.
    var formMessages = $("#form-messages");

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: "POST",
        url: $(form).attr("action"),
        data: formData
      })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass("error");
          $(formMessages).addClass("success");

          // Set the message text.
          $(formMessages).text(response);

          // Clear the form.
          $("#name").val("");
          $("#email").val("");
          $("#message").val("");
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass("success");
          $(formMessages).addClass("error");

          // Set the message text.
          if (data.responseText !== "") {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text(
              "Oops! An error occured and your message could not be sent."
            );
          }
        });
    });
  });
});
