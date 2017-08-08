<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Javascript</title>
		<script> type="text/javascript">
		function writeName(){
			var welcomeMsg = document.getElementById('welcome');
			var name = document.getElementById('name');

			welcomeMsg.innerHTML = "Welcome "+name.value+".<br/>;"
			// we append .value to the end of name so that it sets the variable name
			// to be equal to a property which is the value, not the object.

		}

		</script>
	</head>

	</body>
</html>