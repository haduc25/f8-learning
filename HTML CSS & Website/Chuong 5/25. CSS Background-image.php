<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>25. CSS Background-image</title>
	<style>
		html,body{
			margin: 0;
		}

		.header{
			width: 100%;
			height: 100vh;
			/*background-image: linear-gradient(90deg, #333, #ccc);*/
			background-image: linear-gradient(0, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),
			url(./img/khanh_van_avt.jpg);
			background-repeat: no-repeat;
			background-size: 100%;

			/*ung dung cau background repeat*/
			/*
			background-image: url(./img/img-repeat.jpg);
			background-size: 500px;*/
		}
	</style>
</head>
<body>
	<div class="header"></div>
</body>
</html>