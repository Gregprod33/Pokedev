$(() => {


    var card = $(".devs .dev");
    var $bulle1 = $('#bulle-1');
    var $bulle2 = $('#bulle-2');
    var $bulle3 = $('#bulle-3');
    var $bouton = $('#btn-formulaire');
    var $manette = $('#manette-presentation');
    
    
        $manette.on('click', function() {
            $("#pokedev").fadeIn(1500);
        })


        $("#btn-pokedev").on('click', function() {
            $("#pokedev").fadeIn(1500);
        })


        $bouton.on('click', function() {
            let $prenom = $('[type="text"]').val();
            $('.infos-presentation').addClass('off');
            $('#presentation-container').addClass('no-padding');

            $('#presentation-container').addClass('bg-nintendo');
            $bulle1.html('Bonjour ' + '<span>' + $prenom + '</span>' + ', je suis ' + '<span>' + 'Greg' + '</span>' + ', en formation de' + '<span>' + ' développeur web et mobile' + '</span>' + '. Cliquez sur la manette pour lire la suite...' + '<i class="nes-logo bounce"></i>' );
            $('.formulaire').hide();
            $('#presentation').addClass('full');
            $('#presentation-1').removeClass('off');
            $('#presentation-image').removeClass('off');
            $('#presentation-1').addClass('on');
            
        })
       
        
        
        
        $bulle1.on('click', function() {
            $("#presentation-1").addClass('off');
            $bulle2.html('Je suis en recherche de stage pour la période du ' + '<span>' + ' 10 mai au 22 juillet.' + '</span>' + '<span>'+ '<br>' + ' Passionné, autonome' + '</span>' + ' et' + '<span>' + ' engagé' + '</span>' + ' , je souhaiterais participer activement à des' + '<span>' + ' projets' + '</span>' + ' en entreprise et ainsi pouvoir' + '<span>' + ' progresser' + '</span>' + ' tout en collaborant avec une équipe confirmée.' + '<br>' + 'Cliquez sur la manette pour lire la suite...' + '<i class="nes-logo bounce"></i>');
            $("#presentation-2").removeClass('off');
            var $viewportWidth = $(window).width();
            if($viewportWidth >= 768){
                $('#pokemon-2').removeClass('off');
                $('#pokemon-2').effect("pulsate");
                $('#pokemon-2').animate({
                    right: "+90%"
                }, 6000);
            }
    
              
            
        });



        $bulle2.on('click', function() {
            $("#presentation-2").addClass('off');
            $bulle3.html("Actuellement sur le" + "<span>" + " Campus du Lac de Bordeaux" + "</span>" + ", je partage cette recherche de stage avec mes camarades et à ce titre j'aimerais vous présenter notre promo façon" + "<span>" + " Pokédex" + "</span>" + ",  cliquez sur la manette pour le découvrir..." + '<i class="nes-logo bounce"></i>');
            $("#presentation-3").removeClass('off');

            var $viewportWidth = $(window).width();
            if($viewportWidth >= 768){
                $("#pokemon-3").removeClass('off');
                $("#pokemon-3").effect("pulsate");
                $("#pokemon-2").addClass('off');
                $("#pokemon-2-reverse").removeClass('off');
                $('#pokemon-2-reverse').animate({
                    left: "+80%"
                }, 6000);
                $('#pokemon-3').animate({
                    left: "+70%"
                }, 6000);
                $("#pokemon-3").effect("pulsate");
                $("#pokemon-2-reverse").effect("pulsate");
                $("#pokemon-2-reverse").fadeOut();
                $("#pokemon-3").fadeOut(); 
            } 

        });


        
        $bulle3.on('click', function() {
            $("#pokedev").fadeIn(1500);
            $("#presentation-3").addClass('off');
            $("#presentation-image").addClass('off');
            $('#presentation-container').removeClass('no-padding');
            $('#presentation-container').removeClass('bg-nintendo');
            $("#pokemon-2-reverse").addClass("off");
            $("#pokemon-3").addClass("off");
            $('.infos-presentation').removeClass('off');
            $('.formulaire').show();

        });


   

    // Récupération du nom du dev

    card.click(function() {
        let currentDev = $(this).attr("id");
        // Génération des stats aléatoires
        let randomAttack = Math.floor(Math.random()*80 + 20);
        let randomDefense = Math.floor(Math.random()*80 + 20);
        let randomPower = Math.floor(Math.random()*80 + 20);

        // Liste des dev avec leurs statistiques
        let devs = {
            "Nelson ARAUJO": {
                "description": "Passionné par le web et le développement, Nelson saura parfaitement intégrer vos équipes. Son parcours témoigne d'une grande appétence à l'apprentissage. Point fort: adaptabilité. Point faible: les noeuds de cravate.",
                "image": "nelson.png",
                "attack": randomAttack,
                "defense": randomDefense,
                "power": randomPower,
                "link": "https://www.linkedin.com/in/nelson-santos-araujo/"
            },

            "Amine BENLAKHDAR": {
                "description": "Calme et d'une grande finesse d'esprit, Amine saura relever tous les défits.Son parcours scientifique et informatique témoigne de sa passion pour le développement. Point fort: sagesse. Point faible: le Tango.",
                "image": "amine.png",
                "attack": randomAttack,
                "defense": randomDefense,
                "power": randomPower,
                "link": "#index.html"
                
                
            },

            "Grégory BOES": {
                "description": "Une grande curiosité en général et une passion grandissante pour le développement web. Un parcours dans l'audiovisuel qui permet d'appréhender la technique et l'esthétique. Point fort: esprit d'équipe. Point faible: le bricolage.",
                "image": "greg.png",
                "attack": randomAttack,
                "defense": randomDefense,
                "power": randomPower,
                "link": "https://www.linkedin.com/in/gr%C3%A9gory-boes-98b0b21a3/"
            },


            "Ken BROSSE": {
                "description": "Sa grande expérience dans les métiers de la restauration lui confère une très bonne organisation et une grande efficacité quelle que soit la situation. Point fort: la technique. Point faible: son revers lifté.",
                "image": "ken.png",
                "attack": randomAttack,
                "defense": randomDefense,
                "power": randomPower,
                "link": "https://www.linkedin.com/in/ken-b-4096aa1a3/"


            },

            "Grégory CADET": {
                "description": "Ancien coach sportif et passionné de nouvelles technologies, Greg apporte une énergie positive et constructive au sein d'un groupe. Patient et engagé, sa touche artistique fait toute la différence. Point fort: le design. Point faible: la couture.",
                "image": "gregC.png",
                "attack": randomAttack,
                "defense": randomDefense,
                "power": randomPower,
                "link": "https://www.linkedin.com/in/gr%C3%A9gory-cadet-marthe-130617153/"
            },


            "Clément DOMINIQUE": {
                "description": "Grace à son parcours de commercial, Clément trouve toujours une solution pour résoudre les challenges qu'il rencontre! Il saura être force de proposition dans vos équipes et s'impliquer dans tous les projets. Point fort: la confiance. Point faible: le bowling.",
                "image": "clement.png",
                "attack": randomAttack,
                "defense": randomDefense,
                "power": randomPower,
                "link": "https://www.linkedin.com/in/clement-dominique-4461a4108/"
            },



            "Jonathan DUPAU": {
                "description": "Pourvu d'une très grande motivation et d'un esprit entreprenant, Jonathan regroupe toutes les qualités d'un futur développeur aguerri. Maitrise de l'informatique et esprit d'équipe! Point fort: l'organisation. Point faible: le mandarin.",
                "image": "jonathan.png",
                "attack": randomAttack,
                "defense": randomDefense,
                "power": randomPower,
                "link": "https://www.linkedin.com/in/jonathan-dupau-43565a1a0/"
            },


            "Mickael LEPELLETIER": {
                "description": "Son mental d'acier lui permet de rester focus en permanence sur ses objectifs! Sociable et baignant dans l'informatique depuis toujours, Mickael ne cesse de monter en compétences. Point fort: l'analyse. Point faible: le jardinage.",
                "image": "mickael.png",
                "attack": randomAttack,
                "defense": randomDefense,
                "power": randomPower,
                "link": "https://www.linkedin.com/in/mickael-lepelletier-284334187/"
            },


            "Geoffrey MIARD": {
                "description": "Geoffrey aime par dessus tout sortir de sa zone de confort pour relever de nouveaux défis et aller au bout de lui même. Son parcours au sein de la Marine Nationale témoigne de sa rigueur. Point fort: la concentration. Point faibe: l'entrechat.",
                "image": "geoffrey.png",
                "attack": randomAttack,
                "defense": randomDefense,
                "power": randomPower,
                "link": "https://www.linkedin.com/in/geoffrey-miard-1699ba195/"
            },


            "Sara MOSCARDELLI": {
                "description": "Si vous souhaitez un rayon de soleil dans votre équipe, optez tout de suite pour Sara! Toujours motivée pour apprendre et progresser, elle mettra du peps et de la créativité dans vos projets. Point fort: appliquée. Point faible: la force basque.",
                "image": "sara.png",
                "attack": randomAttack,
                "defense": randomDefense,
                "power": randomPower,
                "link": "https://www.linkedin.com/in/sara-moscardelli/"
            },


            "Paul SOLARI": {
                "description": "Ne vous fiez pas à sa discrétion, Paul est emprunt de motivation et d'envie d'apprendre toujours plus. Il se passionne pour le développement et souhaite poursuivre ses études dans ce domaine. Point fort: méthodique. Point faible: la pâte feuilletée.",
                "image": "paul.png",
                "attack": randomAttack,
                "defense": randomDefense,
                "power": randomPower,
                "link": "#index.html"
                
            },


            "Xin TAO": {
                "description": "Méthodique et astucieuse, Xin aime se donner de nouveaux challenges. Son parcours dénote d'une grande pugnacité et une d'une détermination à toute épreuve. Point fort: la logique. Point faible: l'accrobranche.",
                "image": "xin.png",
                "attack": randomAttack,
                "defense": randomDefense,
                "power": randomPower,
                "link": "https://www.linkedin.com/in/xin-tao-515287203/"  
            }
        }


        // Récupération des données dans la carte active
        $(".dev-name").html(currentDev);
        $(".dev-description").html(devs[currentDev].description);
        $(".dev-image").attr("src", "src/img/promo/pixel/" + devs[currentDev].image);
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


        // Récupération de l'affichage des stats en %

            $('.progress-value-attack').html(randomAttack + '%');
            $('.progress-value-defense').html(randomDefense + '%');
            $('.progress-value-power').html(randomPower + '%');

            

        // Positionnement de la carte active au centre
            
            $.fn.devZoomPosition = function() {
                this.css({
                    "position": "fixed",
                    "left": "50%",
                    "top": "47%",
                    "transform": "translateX(-50%)",
                    "margin-top": -this.height()/2     
                });     
            }

            $(".dev-zoom").devZoomPosition();



        // apprition de la Carte courante et masquage des cartes devs

            $(".dev-zoom").fadeIn();
            $("header").addClass('filter');
            $(".devs").addClass('filter');
            $(".nes-container").addClass('filter');
        


        // Animation de la pokeball pour des viewport > 768px

            var $viewportWidth = $(window).width();
            if($viewportWidth >= 768){
                $("#pokeball-image img").addClass('turn');
            } else {
                $("#pokeball-image img").removeClass('turn');
            }
   

        })

        

    
    // Evenements à la fermeture de la carte courante

        $(".dev-zoom i").click(function(){
            $(".dev-zoom").fadeOut();
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
            $("#pokeball-image img").removeClass('turn');
            $("header").removeClass('filter');
            $(".devs").removeClass('filter');
            $(".nes-container").removeClass('filter');
        })

})