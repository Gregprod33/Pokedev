
var card = $(".devs .dev");


card.click(function() {
    // Récupération du nom du dev
    let currentDev = $(this).attr("id");
    let randomAttack = Math.floor(Math.random()*90 + 10)
    // Liste des brawlers avec leurs statistiques
    let devs = {
      "Greg": {
        "description": "Greg est un dev passionné !",
        "image": "testPixel.png",
        "attack": randomAttack
      },

      "Nelson": {
          "description": "Nelson est un dev futé et habile !",
          "image": "fff.png",
          "attack": randomAttack
      },

      "Gabin": {
        "description": "Gabin use de tous les supterfuges pour arriver à ses fins, c'est un pokedev redoutable et il ne faut surtout pas le sous-estimé, ses points forts sont la ruse, l'intelligence, la souplesse et ses pouvoirs incroyable !!! Sont point faible: les chatouilles !!!",
        "image": "gabinPixel.png",
        "attack": randomAttack
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
        
        
       $.fn.devZoomPosition = function() {
            this.css({
                "position": "fixed",
                "left": "50%",
                "top": "50%",
                "transform": "translateX(-50%)",
                "margin-top": -this.height()/2     
            });     
        }
 
    $(".dev-zoom").devZoomPosition();
    $(".dev-zoom").fadeIn();
    $(".dev").css({"opacity": "50%"});
   

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