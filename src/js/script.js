
var card = $(".devs .dev");


card.click(function() {
    // Récupération du nom du dev
    let currentDev = $(this).attr("id");


    // Génération des stats aléatoires
    let randomAttack = Math.floor(Math.random()*80 + 20);
    let randomDefense = Math.floor(Math.random()*80 + 20);
    let randomPower = Math.floor(Math.random()*80 + 20);



    // Liste des dev avec leurs statistiques
    let devs = {
      "Greg": {
        "description": "Greg est un dev passionné !",
        "image": "gabinPixel.png",
        "attack": randomAttack,
        "defense": randomDefense,
        "power": randomPower,
        "link": "https://www.linkedin.com/in/gr%C3%A9gory-boes-98b0b21a3/"
      },

      "Nelson": {
          "description": "Nelson est un dev futé et habile !",
          "image": "fff.png",
          "attack": randomAttack,
          "defense": randomDefense,
          "power": randomPower
      },

      "Gabin": {
        "description": "Gabin use de tous les supterfuges pour arriver à ses fins, c'est un pokedev redoutable ses points forts sont la ruse, l'intelligence, la souplesse et ses pouvoirs incroyable !!! Sont point faible: les chatouilles !!!",
        "image": "gabinPixel.png",
        "attack": randomAttack,
        "defense": randomDefense,
        "power": randomPower
      }
    }


    // Récupération des données dans la carte active
    $(".dev-name").html(currentDev);
    $(".dev-description").html(devs[currentDev].description);
    $(".dev-image").attr("src", "src/img/" + devs[currentDev].image);
    $(".attack").attr("value", devs[currentDev].attack);
    $(".defense").attr("value", devs[currentDev].defense);
    $(".power").attr("value", devs[currentDev].power);
    $(".dev-link").attr("href", devs[currentDev].link);



    // Couleur des progrssbars en fonction des stats
    
    if(($(".attack").val() <= 60) && ($(".attack").val() >= 40)) {
        $(".attack").addClass("is-warning");
        $('.progress-value-attack').css("color", "#F7D51D");
    } else if(($(".attack").val() <= 40) && ($(".attack").val() >= 0)) {
        $(".attack").addClass("is-error");
        $('.progress-value-attack').css("color", "#E76E55");
    } else if ($(".attack").val() > 60) {
        $(".attack").addClass("is-success");
        $('.progress-value-attack').css("color", "#92CC41");
    }

    if(($(".defense").val() <= 60) && ($(".defense").val() >= 40)) {
        $(".defense").addClass("is-warning");
        $('.progress-value-defense').css("color", "#F7D51D");
    } else if(($(".defense").val() <= 40) && ($(".defense").val() >= 0)) {
        $(".defense").addClass("is-error");
        $('.progress-value-defense').css("color", "#E76E55");
    } else if ($(".defense").val() > 60) {
        $(".defense").addClass("is-success");
        $('.progress-value-defense').css("color", "#92CC41");
    }
    

    if(($(".power").val() <= 60) && ($(".power").val() >= 40)) {
        $(".power").addClass("is-warning");
        $('.progress-value-power').css("color", "#F7D51D");
    } else if(($(".power").val() <= 40) && ($(".power").val() >= 0)) {
        $(".power").addClass("is-error");
        $('.progress-value-power').css("color", "#E76E55");
    } else if ($(".power").val() > 60) {
        $(".power").addClass("is-success");
        $('.progress-value-power').css("color", "#92CC41");
    }



    // Animation des barres

    const barAnimate = (progressbar) => {
        let value = progressbar.val();
        let start = 0;
        
            const loading = () => {
                start += 1;
                progressbar.val(start);
                if (start == value) {
                clearInterval(animate);
                }
            };
            const animate = setInterval(() => loading(), 8);
        }
        
        let $progressbar1 = $('#progressbar-attack');
        let $progressbar2 = $('#progressbar-defense');
        let $progressbar3 = $('#progressbar-power');
        barAnimate($progressbar1);
        barAnimate($progressbar2);
        barAnimate($progressbar3);
        
        

        
        // Positionnement de la carte active au centre
        
    $.fn.devZoomPosition = function() {
        this.css({
            "position": "fixed",
            "left": "50%",
            "top": "50%",
            "transform": "translateX(-50%)",
            "margin-top": -this.height()/2     
        });     
    }

      

    




        // Animation de la pokeball

    $(".nes-pokeball").animate({ left: "+40%"});
    $(".nes-pokeball"). animate(
        {rotation: 360}, { duration: 200, step: function(now, fx) { $(this). css({"transform": "rotate("+now+"deg)"}); } } );
          
 
    $(".dev-zoom").devZoomPosition();
    $(".dev-zoom").fadeIn();
    $(".dev").css({"opacity": "50%"});
    $('.progress-value-attack').html(randomAttack + '%');
    $('.progress-value-defense').html(randomDefense + '%');
    $('.progress-value-power').html(randomPower + '%');
   

 

        

      
           
          
       
       


    })

    

    


  

    $(".dev-zoom i").click(function(){
        $(".dev-zoom").hide();
        $(".dev").css({"opacity": "100%"});
        $("#progressbar-attack").removeClass("is-warning");
        $("#progressbar-attack").removeClass("is-success");
        $("#progressbar-attack").removeClass("is-error");
        $("#progressbar-defense").removeClass("is-warning");
        $("#progressbar-defense").removeClass("is-success");
        $("#progressbar-defense").removeClass("is-error");
        $("#progressbar-power").removeClass("is-warning");
        $("#progressbar-power").removeClass("is-success");
        $("#progressbar-power").removeClass("is-error");
        $(".nes-pokeball").animate({left: "0%"})
        $(".nes-pokeball"). animate( {rotation: 0});
    })