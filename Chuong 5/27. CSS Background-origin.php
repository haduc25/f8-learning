<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>27. CSS Background-origin</title>

	<style>
		html,body{
			margin: 0;
		}

		.header{
			width: 100%;
			height: 100vh;
			background-image: url(./img/khanh_van_avt.jpg);
			background-repeat: no-repeat;
			background-size: 100%;

			/*background-origin giong voi background-clip */
			border: 20px dashed #ccc;
			padding: 20px;
			box-sizing: border-box;
			/*background-origin: padding-box;*/
			/*background-origin: border-box;*/
			background-origin: content-box;
			/*
				mac dinh la:  padding-box
				
				co the su dung:  border-box va content-box;
			*/
		}
	</style>
</head>
<body>
	<div class="header"></div>
</body>
</html>