$(document).ready(function (){
        setInterval(function(){
          makeAStarFall();
        },2400);
});
      function makeAStarFall(){
        var min = -200;
        var max = 1800;

        var startPosLeft = Math.floor((Math.random() * max) + min);
        var stopPosLeft = Math.floor((Math.random() * max) + min);

        var startPosLeft2 = Math.floor((Math.random() * max) + min);
        var stopPosLeft2 = Math.floor((Math.random() * max) + min);

        $('<div>').addClass("star falling-star").insertAfter('.stars');

        $('.falling-star').css("left", startPosLeft);

        setTimeout(function(){
          $(".falling-star").addClass("go-falling");
          $('.go-falling').css("left", stopPosLeft);
        },400);

        setTimeout(function(){
           $(".falling-star").remove();
        },1800);

        $('<div>').addClass("star2 falling-star2").insertAfter('.stars2');

        $('.falling-star2').css("left", startPosLeft2);

        setTimeout(function(){
          $(".falling-star2").addClass("go-falling");
          $('.go-falling').css("left", stopPosLeft2);
        },400);

        setTimeout(function(){
           $(".falling-star2").remove();
        },1800);
      }

      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 355,
            "density": {
              "enable": true,
              "value_area": 790
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 0.2,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 83.91608391608392,
              "size": 1,
              "duration": 3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });



      $('#constellation1').click(function(){
        $('#star-one').show(1000);
        // function move(){

         $('.hide').hide();
         $('.map').hide();
         $('.show').show();

       // }
       // setTimeout(move, 2000);
      });
      $('#constellation2').click(function(){
        $('#star-three').show(1000);
        // function move(){

         $('.hide').hide();
         $('.map').hide();
         $('.show').show();

       // }
       // setTimeout(move, 2000);


      });
      $('#constellation3').click(function(){
        $('#star-two').show(1000);
        // function move(){

         $('.hide').hide();
         $('.map').hide();
         $('.show').show();

       // }
       // setTimeout(move, 2000);

      });
      $('#constellation4').click(function(){
        $('#star-four').show(1000);
        // function move(){

         $('.hide').hide();
         $('.map').hide();
         $('.show').show();

       // }
       // setTimeout(move, 2000);

      });
      $('#constellation5').click(function(){
        $('#star-three').show(1000);
        // function move(){

         $('.hide').hide();
         $('.map').hide();
         $('.show').show();

       // }
       // setTimeout(move, 2000);

      });
      $('#constellation6').click(function(){
        $('#star-two').show(1000);
        // function move(){

         $('.hide').hide();
         $('.map').hide();
         $('.show').show();

       // }
       // setTimeout(move, 2000);

      });
      $('#constellation7').click(function(){
        $('#star-one').show(1000);
        // function move(){

         $('.hide').hide();
         $('.map').hide();
         $('.show').show();

       // }
       // setTimeout(move, 2000);

      });
      $('#constellation8').click(function(){
        $('#star-four').show(1000);
        // function move(){

         $('.hide').hide();
         $('.map').hide();
         $('.show').show();

       // }
       // setTimeout(move, 2000);

      });
      $('#constellation9').click(function(){
        $('#star-four').show(1000);
        // function move(){

         $('.hide').hide();
         $('.map').hide();
         $('.show').show();

       // }
       // setTimeout(move, 2000);

      });
      $('#constellation10').click(function(){
        $('#star-two').show(1000);
        // function move(){

         $('.hide').hide();
         $('.map').hide();
         $('.show').show();

       // }
       // setTimeout(move, 2000);

      });
      $('#constellation11').click(function(){
        $('#star-one').show(1000);
        // function move(){

         $('.hide').hide();
         $('.map').hide();
         $('.show').show();

       // }
       // setTimeout(move, 2000);

      });



      // $( ".constellation2 img" ).mouseenter(function(){
      //   $( ".star-one" ).css( "display", "block" );
      // });

      // $(document).ready(function(){
      //   $("#constellation1").on("click", function (event) {
      //     $( ".star-one" ).css( "display", "block" );
      //   });
      // });


      //
      // $( ".jar_txt" ).mouseenter(function(){
      //   $( ".jar" ).css( "display", "block" );
      // });
      //
      // $( ".eye_txt" ).mouseenter(function(){
      //   $( ".eye" ).css( "display", "block" );
      // });
      //
      // $( ".gift_txt" ).mouseenter(function(){
      //   $( ".gift" ).css( "display", "block" );
      // });
      //
      // $( ".star_txt" ).mouseleave(function(){
      //   $( ".star_png" ).css( "display", "none" );
      // });
      //
      // $( ".jar_txt" ).mouseleave(function(){
      //   $( ".jar" ).css( "display", "none" );
      // });
      //
      // $( ".eye_txt" ).mouseleave(function(){
      //   $( ".eye" ).css( "display", "none",);
      // });
      //
      // $( ".gift_txt" ).mouseleave(function(){
      //   $( ".gift" ).css( "display", "none" );
      // });
