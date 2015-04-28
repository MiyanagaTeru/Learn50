<?php
	//dealForm();
	function dealForm (){
		if (isset($_POST['name'])){
			$name = mysql_real_escape_string($_POST['name']);
			$ping = mysql_real_escape_string($_POST['ping']);
			$pian = mysql_real_escape_string($_POST['pian']);			
			$con= mysqli_connect("localhost","user","password", "dbname");
			$sql ="INSERT INTO kana (roman,ping,pian) VALUES ('$name','$ping','$pian')";
			echo $sql;
			if (!$result=mysqli_query($con, $sql))
				{
					echo "Error";
				};		
		}
	}

	
	function renderPage(){
		$con= mysqli_connect("localhost","root","", "japanese");	
		$sql = "SELECT * FROM kana"; 
		if ($result=mysqli_query($con, $sql))
		{
			?>
			<table border="1">
			<?php
			while ($row = mysqli_fetch_row($result))
			{
				?>
				<tr>
				<?php
					foreach ($row as $field) {
						echo ("<td>".$field."</td>");
					}
				?>
				</tr>
				<?php
			
			}

			?>

			</table>

			<?php
		}
	}
?>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<body>

<div>
	<div>
		<?php
			renderPage();
		?>
	</div>
	<div>
		
	</div>
</div>
</body>
</html>





