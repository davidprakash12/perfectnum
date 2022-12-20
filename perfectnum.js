<html>
	<head>
		<script>
			function perfectNumber()
			{
				var flag,number,remainder,addition = 0,i;
				number = Number(document.getElementById("N").value);
				flag = number;
				for(i = 0; i < number; i++)
				{
					remainder = number%i;
					if(remainder==0)
					{
						addition += i;
					}
				}
				if(addition == flag)
				{
					window.alert("-The inputed number is Perfect");
				}
				else
				{
					window.alert("-The inputed number is not Perfect");
				}
			}
		</script>
	</head>
	<body>
	<br>
	<h1>Whether a number is Perfect or not</h1>
	Enter The Number :<input type="text" name="n" id = "N"/>
	<hr color="cyan">
	<br>
	<center><button onClick="perfectNumber()">CHECK</button>
	</body>
</html>
