
var card = $(".devs .dev");


card.click(function() {
    // Récupération du nom du dev
    let currentDev = $(this).attr("id");
    // Liste des brawlers avec leurs statistiques
    let devs = {
      "greg": {
        "description": "Greg est un dev passionné !",
        "image": "testPixel.png",
        "attack": "20"
      },

      "nelson": {
          "description": "Nelson est un dev futé et habile !",
          "image": "fff.png",
          "attack": "80",
      }
    }
        $(".dev-name").html(currentDev);
        $(".dev-description").html(devs[currentDev].description);
        $(".dev-image").attr("src", "src/img/" + devs[currentDev].image);
        $("#progressbar").attr("value", devs[currentDev].attack);
       
        if(($("#progressbar").val() <= 60) && ($("#progressbar").val() >= 40)) {
            $("#progressbar").addClass("is-warning");
        } else if(($("#progressbar").val() <= 40) && ($("#progressbar").val() >= 0)) {
            $("#progressbar").addClass("is-error");
        } else if ($("#progressbar").val() > 60) {
            $("#progressbar").addClass("is-success");
        }
        
        
        $.fn.zoomCardPosition = function() {
            this.css({
                "position": "fixed",
                "left": "50%",
                "top": "50%",
                "z-index": "10"
            });
            this.css({
                "margin-left": -this.width()/2 + "px",
                "margin-top": -this.height()/2 + "px"
            });
        }
 
    $(".dev-zoom").zoomCardPosition()
    $(".dev-zoom").fadeIn();
    $(".dev").css({"opacity": "50%"})

    $(() => {
        {
          let progressbar = $('#progressbar');
          let max = progressbar.attr('max');
          let time = (300 / max) * 5;
          let value = progressbar.val();
          let start = 0;
      
          const loading = () => {
            start += 1;
            progressbar.val(start);
      
            $('.progress-value').html(start + '%');
      
            if (start == value) {
              clearInterval(animate);
            }
          };
          const animate = setInterval(() => loading(), time);
        };
      });
   
 
    })


    $(".dev-zoom i").click(function(){
        $(".dev-zoom").hide();
        $(".dev").css({"opacity": "100%"});
        $("#progressbar").removeClass("is-warning");
        $("#progressbar").removeClass("is-success");
        $("#progressbar").removeClass("is-error");

    })