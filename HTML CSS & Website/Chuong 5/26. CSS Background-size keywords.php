<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>26. CSS Background-size keywords</title>

	<style>
		html,body{
			margin: 0;
		}

		.header{
			width: 100%;
			height: 100vh;
			background-image: url(./img/khanh_van_avt.jpg);
			background-repeat: no-repeat;
			background-size: contain; /*k bi cat anh*/

			/*background-size: cover;*/ /*chap nhan anh bi cat hien anh 100% background*/
		}
	</style>
</head>
<body>
	<div class="header"></div>
</body>
</html>