<script>
var kanas=[];
</script>
<?php
	$con= mysqli_connect("localhost","kanalearner","kanakana", "japanese");	
	$sql = "SELECT * FROM kana"; 
	if ($result=mysqli_query($con, $sql))
	{
		while ($row = mysqli_fetch_row($result))
		{
			?>
			<script type="text/javascript">
			kanas[kanas.length]={
				romaji:'<?php echo $row[1];?>',
				hiragana:'<?php echo $row[2];?>',
				katakana:'<?php echo $row[3];?>',	
				learned: 0
				};			
													
			</script>
			<?php			
		}

	}

?>
<script type="text/javascript">
	//console.log(kanas);
</script>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
	<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.3.min.js"></script>

	<link type="text/css" rel="stylesheet" href="style.css" />
</head>
<body>
	<div class="flip">
		<div class="card">
			<div  class="face front">
				<!-- front content -->
				Romaji
			</div>
			<div id="romaji" class="face back">
				<!-- back content -->
			</div>
		</div>
	</div>
	<div class="flip">	
		<div class="card">
			<div  class="face front">
				<!-- front content -->
				Hiragana
			</div>
			<div id="hiragana" class="face back">
				<!-- back content -->
			</div>
		</div>
	</div>
 	<div class="flip">
		<div class="card">
			<div  class="face front">
				Katakana
			</div>
			<div id="katakana" class="face back">
			</div>
		</div>
	</div>
	
	<div id="choice" hidden>
		<button id="yes">Got it</button>
		<button id="no">No</button>
	</div>
<script type="text/javascript">
 	var flippedN,n,kana;
 	getOneKana();
	function resetCards(){
		$('.card').removeClass('flipped');
	}
	function getOneKana(){
		// $(".card").flip(false);
		n=Math.floor(Math.random() * kanas.length);
		kana=kanas[n];
		$("#romaji").html(kana.romaji);
		$("#hiragana").html(kana.hiragana);
		$("#katakana").html(kana.katakana);				
	}
    $('.flip').click(function(){
        $(this).find('.card').addClass('flipped');

        flippedN=$('.flipped').length;
        //console.log(flippedN);
        if (flippedN>=3){
        	$("#choice").show();
        }
        return false;        
    });
    $("#yes").click( function(){
    	$("#choice").hide();
    	kanas.splice(n,1);
    	//console.log(kanas);
    	if (kanas.length<=0){
    		alert("Congrats, you have learned every kanas!");
    		return false;
    	}
        resetCards();
        setTimeout(getOneKana,500);
    });
    $("#no").click(function(){
    	$("#choice").hide();    	
        resetCards();
        setTimeout(getOneKana,500);
    });
</script>
</body>
</html>





 <?PHP
// "UPDATE artist SET `Last Name`='Mast', `First Name` ='Edward' , Deptcorno='235706' WHERE id = 198 "
// ?>