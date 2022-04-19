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

		li:nth-of-type(3)
		{
			color: violet;
		}

		/*case1*/
		.header
		{
			width: 100%;
			height: 50px;
			background-color: #333;
			position: fixed;
			top: 0;
		}

		/*case2*/
/*		.header
		{
			height: 50px;
			background-color: #333;
			position: fixed;
			top: 0;
			right: 0;
			left: 0;
		}*/

		h1
		{
			margin-top: 60px;
		}

		ul
		{
			height: 5000px;
		}

	</style>
</head>
<!-- <body style="height: 5000px;"> -->
<body>

	<div class="header"></div>

	<h1>Position</h1>
	<ul>
		<li>Relative</li>
		<li>Absolute</li>
		<li>Fixed</li>
		<li>Sticky</li>
	</ul>
</body>
</html>