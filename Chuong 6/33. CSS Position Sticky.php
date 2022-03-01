<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>32. CSS Position: Fixed</title>
	<style>
		html, body{
			margin: 0;
		}

		li:nth-of-type(4)
		{
			color: violet;
		}

		h1
		{
			margin-top: 80px;
			padding: 0 16px;
			color: #fff;
			background-color: #333;
			position: sticky;
			position: -webkit-sticky;
			top: 0;
		}

		ul
		{
			height: 5000px;
		}

	</style>
</head>
<!-- <body style="height: 5000px;"> -->
<body>
	<h1>Position</h1>
	<ul>
		<li>Relative</li>
		<li>Absolute</li>
		<li>Fixed</li>
		<li>Sticky</li>
	</ul>
</body>
</html>