<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>31. CSS Position: Absolute</title>
	<style>
		html, body{
			margin: 0;
		}

		li:nth-of-type(2)
		{
			color: violet;
		}

		.box
		{
			width: 100%;
			height: 120px;
			background-color: #333;
			position: relative;
		}

		.box-child
		{
			width: 50px;
			height: 50px;
			background-color: yellow;
			position: absolute;
		}

		/*phu mau the con toan bo thẻ cha*/
/*		.box-child
		{
			background-color: rgba(255, 255, 0, .5);
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;			
			
			/*
			top: 10px;
			bottom: 10px;
			right: 10px;
			left: 10px;
		}*/



		.box2{
			width: 300px;
			height: 100px;
			background-color: violet;
			position: relative;
			top: 0;
			left: 0;
		}

		.box-child2
		{
			width: 50px;
			height: 50px;
			background-color: yellow;
			position: absolute;
			bottom: 0;
			right: 0;
		}
	</style>
</head>
<body>

	<div class="box">
		<div class="box-child">hello</div>
	</div>	
	vidu2
	<div class="box2">
		<div>
			<div class="box3">
				<div class="box-child2"></div>
			</div>
		</div>
		
	</div>


	<h1>Position</h1>
	<ul>
		<li>Relative</li>
		<li>Absolute</li>
		<li>Fixed</li>
		<li>Sticky</li>
	</ul>
</body>
</html>