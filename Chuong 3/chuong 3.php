<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="./css/style.css">
	<style>
		/*test rem phu thuoc vao html*/
		html{
			/*dinh nghia cho 1 rem = ?*/
			font-size: 20px; 
			/*o day 1 rem = 20px*/

			/*default font-size:  100%  = 16px*/
		}

		/*the "em" tim thuoc tinh css duoc dinh nghia gan nhat(phu thuoc techa gan nhat)*/







		/*su dung attr()*/
		a::after
		{
			content: "(" attr(href) ")";
		}

		.box::after
		{
			content: attr(data-title);
		}

	</style>
</head>
<body>
	
		<h1 class="ex1">hello</h1>
		<h2 class="ex1">hello2</h2>
		<h3 class="ex1">hello3</h3>

		<p style="font-size: 1rem;">hello guys</p>

		<!-- rem phu thuoc vao html  -->



		<h2>su dung attr()</h2>
		<a href="https://facebook.com.vn">Click go to facebook </a>
		<p class="box" data-title="sheesh my name is HADUC25"></p>


		<h2 style="color: #000;">Pseudo classes</h2>
		<h1 class="ex2">HaDuc25 its me</h1>
		<ul>
			<li>HADUC123</li>
			<li>COPYRIGHT</li>
			<li>HIHI</li>
			<li>HOHOHO</li>
			<li>UwU</li>
		</ul>

</body>
</html>