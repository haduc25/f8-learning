<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>28. CSS Background-position</title>

	<style>
		html,body{
			margin: 0;
		}

		.box{
			width: 100%;
			height: 100vh;
			background-image: url(./img/khanh_van_avt.jpg);
			background-repeat: no-repeat;
			background-size: 600px;
			/*background-position: center;*/
			/*background-position: top left;*/
			/*background-position: bottom left;*/
			background-position: top center;

			/*background-position; neu dat 1 gia tri thì giá trị thứ 2 mặc định là center*/
			
		}
	</style>
</head>
<body>
	<div class="box"></div>
</body>
</html>