
  		var randomNumber;

  		//$("#random-number").text(randomNumber);

  		var win = 0;

  		var loss = 0;

  		var crystalScore = 0;

  		var randomAssignment = [1,2,3,5,7,11,13,17,19,23];

  		var stop = false;

  		initialize();

  		setCrystalImagePoints();


  		// Here we created an on-click event that responds to button clicks of the crystal image.
  		$('.crystal-image').on("click", function() {

	    	// Clicking the button triggers an alert message.
	    	crystalScore = crystalScore + parseInt($(this).attr('data-crystalvalue'));
	    	$("#total-score").text(crystalScore);
	    	console.log(crystalScore);

	    	setTimeout(function(){

		    	if (crystalScore === randomNumber) {
		    		win = win + 1;
		    		//$('#total-score').text(crystalScore);
		    		alert('You Win');
		    		$('#wins').text(win);
		    		reset();
		    		initialize();
		    		setCrystalImagePoints();

		    	}
		    		
		    	if(crystalScore > randomNumber){
		    		loss = loss + 1;
		    		//$('#total-score').text(crystalScore);
		    		alert('You Lose');
		    		$('#loss').text(loss);
		    		reset();
		    		initialize();
		    		setCrystalImagePoints();
		    	}
	    		
	    	},1)

  		});


  		function setCrystalImagePoints() {

	  		for (var i = 0; i < 4; i++) {


	  			var randomNumber = Math.random();
	  			randomNumber = randomNumber.toFixed(1);
	  			console.log(randomNumber);

	  			switch (randomNumber){

	            	case '0.1' :      
	            		$('#crystal-'+i).attr('data-crystalvalue',randomAssignment[0]);
	            	break;

	            	case '0.2' :      
	            		$('#crystal-'+i).attr('data-crystalvalue',randomAssignment[1]);
	            	break;

	            	case '0.3' :      
	            		$('#crystal-'+i).attr('data-crystalvalue',randomAssignment[2]);
	            	break;

	            	case '0.4' :      
	            		$('#crystal-'+i).attr('data-crystalvalue',randomAssignment[3]);
	            	break;

	            	case '0.5' :      
	            		$('#crystal-'+i).attr('data-crystalvalue',randomAssignment[4]);
	            	break;

	            	case '0.6' :      
	            		$('#crystal-'+i).attr('data-crystalvalue',randomAssignment[5]);
	            	break;

	            	case '0.7' :      
	            		$('#crystal-'+i).attr('data-crystalvalue',randomAssignment[6]);
	            	break;

	            	case '0.8' :      
	            		$('#crystal-'+i).attr('data-crystalvalue',randomAssignment[7]);
	            	break;

	            	case '0.9' :      
	            		$('#crystal-'+i).attr('data-crystalvalue',randomAssignment[8]);
	            	break;

	            	case '1.0' :      
	            		$('#crystal-'+i).attr('data-crystalvalue',randomAssignment[9]);
	            	break;
	 
	        	}

	  		}

	  	}

	  	function reset() {

	  		randomNumber = 0;

	  		crystalScore = 0;

	  		$("#total-score").text(crystalScore);
	  		
	  	}

	  	function initialize() {

	  		randomNumber = Math.round(Math.random() * 100);

  			$("#random-number").text(randomNumber);

  			randomAssignment = [1,2,3,5,7,11,13,17,19,23];
  			for (var i = 0; i < 4; i++) {
	  			$('#crystal-'+i).attr('data-crystalvalue',0);
	  			
	  		}

	  	}
