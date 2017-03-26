/*jslint browser: true*/
(function ($) {
    "use strict";
    /*global jQuery, document*/
    $(document).on("ready", function () {
        $('.msg').hide();
         // gathers exercise id and name and username in variables.
    var ejerid = $('#ejerid').val(), loggedUser = $('#logusername').val(), ejernombre = $('#ejerNombre').val();
    $.ajax({
			// gathers answers from database into variables
      url: 'http://vidaingles.com/ajax/get_answer_keys_app.php',
      data: "id=" + ejerid,
      dataType: 'json'
		}) // Ends $.ajax()
		.done(function () {
			alert('done loading answer keys');
		})
		.error(function () {
			alert("JS: Error al tratar de cargar las respuestas.");
		})      
		.always(function (data) {
			var id = data[0], ak1 = data[2], ak2 = data[3], ak3 = data[4], ak4 = data[5], ak5 = data[6], ak6 = data[7], ak7 = data[8], ak8 = data[9], ak9 = data[10], ak10 = data[11], ak11 = data[12], ak12 = data[13], ak13 = data[14], ak14 = data[15], ak15 = data[16], ak16 = data[17], ak17 = data[18], ak18 = data[19], ak19 = data[20], ak20 = data[21], ak21 = data[22], ak22 = data[23], ak23 = data[24], ak24 = data[25], ak25 = data[26], lak1 = ak1.length, lak2 = ak2.length, lak3 = ak3.length, lak4 = ak4.length, lak5 = ak5.length, lak6 = ak6.length, lak7 = ak7.length, lak8 = ak8.length, lak9 = ak9.length, lak10 = ak10.length, lak11 = ak11.length, lak12 = ak12.length, lak13 = ak13.length, lak14 = ak14.length, lak15 = ak15.length, lak16 = ak16.length, lak17 = ak17.length, lak18 = ak18.length, lak19 = ak19.length, lak20 = ak20.length, lak21 = ak21.length, lak22 = ak22.length, lak23 = ak23.length, lak24 = ak24.length, lak25 = ak25.length;
			$('input#inputq1').attr({'maxlength': +lak1});
			$('input#inputq2').attr({'maxlength': +lak2});
			$('input#inputq3').attr({'maxlength': +lak3});
			$('input#inputq4').attr({'maxlength': +lak4});
			$('input#inputq5').attr({'maxlength': +lak5});
			$('input#inputq6').attr({'maxlength': +lak6});
			$('input#inputq7').attr({'maxlength': +lak7});
			$('input#inputq8').attr({'maxlength': +lak8});
			$('input#inputq9').attr({'maxlength': +lak9});
			$('input#inputq10').attr({'maxlength': +lak10});
			$('input#inputq10').attr({'maxlength': +lak11})
			$('input#inputq10').attr({'maxlength': +lak12});
			$('input#inputq10').attr({'maxlength': +lak13});
			$('input#inputq10').attr({'maxlength': +lak14});
			$('input#inputq10').attr({'maxlength': +lak15});
			$('input#inputq10').attr({'maxlength': +lak16});
			$('input#inputq10').attr({'maxlength': +lak17});
			$('input#inputq10').attr({'maxlength': +lak18});
			$('input#inputq10').attr({'maxlength': +lak19});
			$('input#inputq10').attr({'maxlength': +lak20});
			$('input#inputq10').attr({'maxlength': +lak21});
			$('input#inputq10').attr({'maxlength': +lak22});
			$('input#inputq10').attr({'maxlength': +lak23});
			$('input#inputq10').attr({'maxlength': +lak24});
			$('input#inputq10').attr({'maxlength': +lak25});
		});//Ends .always()       
        
        
        $('#checkBtn').click(function (e) {
            e.preventDefault();
            		// gather user's answers in variables
				var uinput1 = $('#inputq1').val(), uinput2 = $('#inputq2').val(), uinput3 = $('#inputq3').val(), uinput4 = $('#inputq4').val(), uinput5 = $('#inputq5').val(), uinput6 = $('#inputq6').val(), uinput7 = $('#inputq7').val(), uinput8 = $('#inputq8').val(), uinput9 = $('#inputq9').val(), uinput10 = $('#inputq10').val(), uinput11 = $('#inputq11').val(), uinput12 = $('#inputq12').val(), uinput13 = $('#inputq13').val(), uinput14 = $('#inputq14').val(), uinput15 = $('#inputq15').val(), uinput16 = $('#inputq16').val(), uinput17 = $('#inputq17').val(), uinput18 = $('#inputq18').val(), uinput19 = $('#inputq19').val(), uinput20 = $('#inputq20').val(), uinput21 = $('#inputq21').val(), uinput22 = $('#inputq22').val(), uinput23 = $('#inputq23').val(), uinput24 = $('#inputq24').val(), uinput25 = $('#inputq25').val(), sugerencias_attr = $('div#sugerencias').attr('style');
    
     if (sugerencias_attr === 'display:none') {
					$('#aviso').html('<small class="text-danger bg-danger">' + loggedUser + ' lee las Reglas Gramaticales</small>').fadeIn(400);
          }  else {
                if (q1 === ak1) {
                    $('#q1').addClass("good");
                } else {
                    $('#q1').addClass("bad");
                }
                if (q2 === ak2) {
                    $('#q2').addClass("good");
                } else {
                    $('#q2').addClass("bad");
                }
                if (q3 === ak3) {
                    $('#q3').addClass("good");
                } else {
                    $('#q3').addClass("bad");
                }
                if (q4 === ak4) {
                    $('#q4').addClass("good");
                } else {
                    $('#q4').addClass("bad");
                }
                if (q5 === ak5) {
                    $('#q5').addClass("good");
                } else {
                    $('#q5').addClass("bad");
                }
                if (q6 === ak6) {
                    $('#q6').addClass("good");
                } else {
                    $('#q6').addClass("bad");
                }
                if (q7 === ak7) {
                    $('#q7').addClass("good");
                } else {
                    $('#q7').addClass("bad");
                }
                if (q8 === ak8) {
                    $('#q8').addClass("good");
                } else {
                    $('#q8').addClass("bad");
                }
                if (q9 === ak9) {
                    $('#q9').addClass("good");
                } else {
                    $('#q9').addClass("bad");
                }
                if (q10 === ak10) {
                    $('#q10').addClass("good");
                } else {
                    $('#q10').addClass("bad");
                }
                if (q11 === ak11) {
                    $('#q11').addClass("good");
                } else {
                    $('#q11').addClass("bad");
                }
                if (q12 === ak12) {
                    $('#q12').addClass("good");
                } else {
                    $('#q12').addClass("bad");
                }
                if (q13 === ak13) {
                    $('#q13').addClass("good");
                } else {
                    $('#q13').addClass("bad");
                }
                if (q14 === ak14) {
                    $('#q14').addClass("good");
                } else {
                    $('#q14').addClass("bad");
                }
                if (q15 === ak15) {
                    $('#q15').addClass("good");
                } else {
                    $('#q15').addClass("bad");
                }
                if (q16 === ak16) {
                    $('#q16').addClass("good");
                } else {
                    $('#q16').addClass("bad");
                }
                if (q17 === ak17) {
                    $('#q17').addClass("good");
                } else {
                    $('#q17').addClass("bad");
                }
                if (q18 === ak18) {
                    $('#q18').addClass("good");
                } else {
                    $('#q18').addClass("bad");
                }
                if (q19 === ak19) {
                    $('#q19').addClass("good");
                } else {
                    $('#q19').addClass("bad");
                }
                if (q20 === ak20) {
                    $('#q20').addClass("good");
                } else {
                    $('#q20').addClass("bad");
                }
                if (q21 === ak21) {
                    $('#q21').addClass("good");
                } else {
                    $('#q21').addClass("bad");
                }
                if (q22 === ak22) {
                    $('#q22').addClass("good");
                } else {
                    $('#q22').addClass("bad");
                }
                if (q23 === ak23) {
                    $('#q23').addClass("good");
                } else {
                    $('#q23').addClass("bad");
                }
                if (q24 === ak24) {
                    $('#q24').addClass("good");
                } else {
                    $('#q24').addClass("bad");
                }
                if (q25 === ak25) {
                    $('#q25').addClass("good");
                } else {
                    $('#q25').addClass("bad");
                }        
            }
        });// Ends #checkBtn.click()
        $('input').focus(function () {
            $('.msg').fadeOut(700);
            $(this).removeClass("bad");
        });
       

       //save results when user clics the Save button
        $('#saveBtn').on("click", function (no) {
          no.preventDefault();
          
        $.ajax({
           type: 'post',
           url: 'http://vidaingles.com/ajax/insert_ejer_results_app.php',
           data: $('#ejerForm').serializeArray(),
           dataType: 'json',
           beforeSend: function () {
             $('#evalEjerBtn').button('loading');
             $('#aviso').html('<img src="i/loader.gif"/>').fadeIn(500);
            }
         });// ENDS AJAX
         .done(function () {
						
					})
					.fail(function () {
						alert("Something went wrong");
					})
					.always(function (retorno) {
						var maincontentOffset = $('#testWrapper').offset(), destination = maincontentOffset.top;
						$(document).scrollTop(destination);
						//alert(retorno.mensaje);
						$('#evalEjerBtn').button('reset');
						$('#aviso').html('<p>'+ retorno.mensaje +'</p>');
					});// Ends always
      }); //  Ends save btn on click
    });// Ends document on.ready function
}(jQuery));