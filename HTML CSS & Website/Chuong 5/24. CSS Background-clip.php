<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>24. CSS Background-clip</title>
	<style>
		html, body
		{
			margin: 0;
		}

		.header
		{
			width: 100%;
			height: 100px;
			background-color: #333;
			padding: 10px;
			box-sizing: border-box;
			border: 10px dashed #ccc;
			/*background-clip: padding-box;*/ /*su dung de đổ màu từ padding, mac dinh tu border*/
			background-clip: content-box; /*su dung de đổ màu từ content/*
		}

	</style>
</head>
<body>
	
	<div class="header"></div>
</body>
</html>