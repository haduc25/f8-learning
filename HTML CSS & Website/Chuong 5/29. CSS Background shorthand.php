<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>29. CSS Background shorthand</title>

	<style>
		html,body{
			margin: 0;
		}

		.box{
			width: 100%;
			height: 100vh;

/*			background-image: url(./img/khanh_van_avt.jpg);
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;*/

			
			/*Background shorthand*/
			/*background: #000;*/
			background: url(./img/khanh_van_avt.jpg) no-repeat center / contain;
		}
	</style>
</head>
<body>
	<div class="box"></div>
</body>
</html>