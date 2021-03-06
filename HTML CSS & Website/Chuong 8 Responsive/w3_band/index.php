<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>W3 The Band</title>
	<link rel="icon" href="./assets/img/favicon-band.jpg" type="image/x-icon" />
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
	<link rel="stylesheet" type="text/css" href="assets/css/responsive.css">
	<link rel="stylesheet" href="assets/fonts/themify-icons/themify-icons.css">
</head>
<body>
	<!-- ============ Main ============ -->

	<div id="main">
		<!-- Header -->
		<div id="header">
			<!-- Begin: Nav -->
			<ul id="nav">
				<li><a href="#">Home</a></li>
				<li><a href="#band">Band</a></li>
				<li><a href="#tour">Tour</a></li>
				<li><a href="#contact">Contact</a></li>
				<li>
					<a href="#">
						More
						<i class="nav-arrow-down ti-arrow-circle-down"></i>
					</a>
					<ul class="subnav">
						<li><a href="#">Merchandise</a></li>
						<li><a href="#">Extras</a></li>
						<li><a href="#">Media</a></li>
					</ul>
				</li>
			</ul>
			<!-- End: Nav -->

			<!-- Begin: Mobile Menu button & Search button -->
			<div id="mobile-menu" class="mobile-menu-btn">
				<i class="menu-icon ti-menu"></i>
			</div>

			<div class="search-btn">
					<i class="search-icon ti-search"></i>
			</div>
			<!-- End: Search button -->
		</div>
		
		<!-- Slider -->
		<div id="slider">
			<div class="text-content">
				<h2 class="text-heading">Los Angeles</h2>
				<div class="text-description">We had the best time playing at Venice Beach!</div>
			</div>
		</div>

		<!-- Content -->
		<div id="content">
			<!-- About section -->
			<div id="band" class="content-section">
				<h2 class="section-heading">THE BAND</h2>
				<p class="section-sub-heading">We love music</p>
				<p class="about-text">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

				<!-- Member list -->
				<div class="row members-list">
					<div class="col col-third s-col-full mt-32 text-center"> <!-- + them 32px mgt-->
						<p class="member-name">Name</p>
						<img src="./assets/img/band/member1.jpg" alt="N	ame" class="member-img">
					</div>	

					<div class="col col-third s-col-full mt-32 text-center"> <!-- + them 32px mgt-->
						<p class="member-name">Name</p>
						<img src="./assets/img/band/member1.jpg" alt="Name" class="member-img">
					</div>

					<div class="col col-third s-col-full mt-32 text-center"> <!-- + them 32px mgt-->
						<p class="member-name">Name</p>
						<img src="./assets/img/band/member1.jpg" alt="Name" class="member-img">
					</div>
					<!-- case 2:  fix float -->
					<!-- <div class="clear"></div> (v?? s??? d???ng element gi??? -> lo???i b??? clear) -->
				</div>
			</div>			

			<!-- Tour section -->
			<div id="tour" class="tour-section">
				<div class="content-section">
					<h2 class="section-heading text-white">TOUR DATES</h2>
					<p class="section-sub-heading text-white">Remember to book your tickets!</p>

					<!-- Tickets -->
					<ul class="tickets-list">
						<li>September <span class="sold-out">Sold out</span></li>
						<li>October <span class="sold-out">Sold out</span></li>
						<li>November <span class="quantity">3</span></li>
					</ul>

					<!-- Places -->
					<div class="row places-list">
						<div class="col col-third col-padding-left-right-0 s-col-full mt-16"> <!-- them 16px -> mgt=32px -->
							<img src="./assets/img/places/place1.jpg" alt="New York" class="place-img">
							<!-- Places body-->
							<div class="place-body">
								<h3 class="place-heading">New York</h3>
								<p class="place-time">Fri 27 Nov 2016</p>
								<p class="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
								<button class="btn js-buy-ticket s-full-width">Buy Tickets</button> <!-- them class .s-full-width chinh width=100% -->
								<!-- doi class place-by-btn thanh 'btn' ding lam class chung -->
							</div>
						</div>						

						<div class="col col-third col-padding-left-right-0 s-col-full mt-16"> <!-- them 16px -> mgt=32px -->
							<img src="./assets/img/places/place2.jpg" alt="Paris" class="place-img">
							<!-- Places body-->
							<div class="place-body">
								<h3 class="place-heading">Paris</h3>
								<p class="place-time">Fri 28 Nov 2016</p>
								<p class="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
								<button class="btn js-buy-ticket s-full-width">Buy Tickets</button> <!-- them class .s-full-width chinh width=100% -->
								<!-- doi class place-by-btn thanh 'btn' ding lam class chung -->
							</div>
						</div>						

						<div class="col col-third col-padding-left-right-0 s-col-full mt-16"> <!-- them 16px -> mgt=32px -->
							<img src="./assets/img/places/place3.jpg" alt="San Francisco" class="place-img">
							<!-- Places body-->
							<div class="place-body">
								<h3 class="place-heading">San Francisco</h3>
								<p class="place-time">Fri 29 Nov 2016</p>
								<p class="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
								<button class="btn js-buy-ticket s-full-width">Buy Tickets</button> <!-- them class .s-full-width chinh width=100% -->
								<!-- doi class place-by-btn thanh 'btn' ding lam class chung --> 
							</div>
						</div>

						<!-- Fix float: left -->
						<!-- <div class="clear"></div> (v?? s??? d???ng element gi??? -> lo???i b??? clear) -->
					</div>


				</div>
			</div>

			<!-- Begin: Contact section -->
			<div id="contact" class="content-section">
				<h2 class="section-heading">CONTACT</h2>
				<p class="section-sub-heading">Fan? Drop a note!</p>

				<div class="row contact-content">
					<div class="col col-haft s-col-full contact-info"> <!-- them s-col-full cho mobile-->
						<p><i class="ti-location-pin"></i>Chicago, US</p>
						<p><i class="ti-mobile"></i>Phone: <a href="tel:+00 151515">+00 151515</a></p> <!--tel:+00 151515": tu dong goi den so phone -->
						<p><i class="ti-email"></i>Email: <a href="mailto:mail@mail.com">mail@mail.com</a></p> <!--mailto:mail@mail.com tu dong vao mail gui den mail chi dinh -->
					</div>

					<!-- Form -->
					<div class="col col-haft s-col-full contact-form "> <!-- them s-col-full cho mobile-->
						<form action="">
							<!-- Begin: Input -->
							<div class="row">
								<div class="col col-haft s-col-full"> <!-- them s-col-full cho mobile-->
									<input type="text" name="name" id="name" placeholder="Name" required class="form-control">
								</div>
								<div class="col col-haft s-col-full s-mt-8"> <!-- them s-col-full, s-mt-8 cho mobile-->
									<input type="email" name="email" id="email" placeholder="Email" required class="form-control">
								</div>
								<!-- Fix float: left -->
								<!-- <div class="clear"></div> (nang cao: s??? djng element gi??? -> lo???i b???)-->
							</div>
							<div class="row mt-8">
								<div class="col col-full">
									<input type="text" name="message" id="message" placeholder="Message" required class="form-control">
								</div>
							</div>

							<!-- <input class="btn form-submit-btn mt-16" type="submit" value="SEND"> -->
							<input class="contact-submit-btn btn mt-16 pull-right s-full-width" type="submit" value="SEND"> <!-- them class .s-full-width chinh width=100% -->
							<!-- thay class 'form-submit-btn' -> 'btn' -->
							<!-- End: Input -->
						</form>
					</div>

				</div>
			</div>
			<!-- End: Contact section -->

			<!-- Begin: Map section -->
			<div class="map-section">
				<img src="./assets/img/map.jpg" alt="map">
			</div>
			<!-- End: Map section -->
		

		
			<!-- Footer -->
		<div id="footer">
			<div class="socials-list">
				<a href=""><i class="ti-facebook"></i></a>
				<a href=""><i class="ti-instagram"></i></a>
				<a href=""><i class="ti-reddit"></i></a>
				<a href=""><i class="ti-pinterest"></i></a>
				<a href=""><i class="ti-twitter-alt"></i></a>
				<a href=""><i class="ti-linkedin"></i></a>
			</div>
			<p class="copyright">Powered by <a href="">w3.css</a></p>
		</div>

	</div>

	<!-- ============ Modal ============ -->
	<div class="modal js-modal">
		<div class="modal-container js-modal-container">
			<div class="modal-close js-modal-close">
				<i class="ti-close"></i>
			</div>

			<header class="modal-header">
				<i class="modal-heading-icon ti-bag"></i>
				Tickets
			</header>

			<div class="modal-body">

				<!-- modal tickets -->
				<!-- su dung 'for' copy id c???a 'input' cho v??o for khi click v??o label t??? ?????ng focus ?????n id  -->
				<label for="ticket-quantity" class="modal-label"> 
					<i class="ti-shopping-cart"></i>
					Tickets, 115 per person
				</label>
				<input type="text" class="modal-input" id="ticket-quantity" placeholder="How many?">				

				<!-- modal email -->
				<label for="ticket-email" class="modal-label"> 
					<i class="ti-user"></i>
					Send to
				</label>
				<input type="email" class="modal-input" id="ticket-email" placeholder="Enter email...">

				<!-- Button Pay -->
				<button id="buy-tickets">
					Pay <i class="ti-check"></i>
				</button>

			</div>
			
			<!-- modal footer -->
			<footer class="modal-footer">
				<p class="modal-help">Need <a href="">help?</a></p>
			</footer>

		</div>
	</div>


	<!-- ============ javascript for modal ============ -->
	<script>
		const buyBtns = document.querySelectorAll('.js-buy-ticket') //lay tat ca class
		const modal = document.querySelector('.js-modal') //lay ra class modal
		const modalClose = document.querySelector('.js-modal-close')
		const modalContainer = document.querySelector('.js-modal-container');




		//show (.js-buy-ticket)
		function showBuyTickets ()
		{
			modal.classList.add('open') //add class open
		}

		//hide (.js-buy-ticket)
		function hideBuyTickets ()
		{
			modal.classList.remove('open') //add class open
		}



		//lap du lieu tu buyBtns -> buyBtn, (buyBtns.length [3])
		for(const buyBtn of buyBtns)
		{
			buyBtn.addEventListener('click', showBuyTickets) //b???t click (.js-buy-ticket)
		}


		//btn close (neu click vao icon x)
		modalClose.addEventListener('click', hideBuyTickets)


		//l???ng nghe click v??o kho???ng kh??ng modal
		modal.addEventListener('click', hideBuyTickets)

		/*x??a n???i b???t trong (.model-container)*/
		modalContainer.addEventListener('click', function (event){
			/*c???n (event) mu???i l???n click lu??n return 1 event*/

			/*t???m d??ng vi???c n???i b???t (t??? .model-container)*/
			event.stopPropagation()
		})

	</script>


	<!-- ============ javascript for Menu, Nav (Mobile) ============ -->
	<script>
		var header = document.getElementById('header');
		var mobileMenu = document.getElementById('mobile-menu'); //lay ra btn mobile-menu
		var headerHeight = header.clientHeight;


		//????ng/m??? mobile Menu
		mobileMenu.onclick = function()
		{
			// alert(header.clientHeight); 
			// header.clientHeight: lay ra chieu cao cua header (dang duoc selected)
			//  === ????? so s??nh
			//console.log(header.clientHeight);
			

			var isClosed = header.clientHeight === headerHeight; 
			if(isClosed)
			{
				header.style.height = 'auto'; //g??n css cho #header
			}else
			{
				header.style.height = null; //g??n css cho #header

			}

		}

		//T??? ?????ng ????ng menu khi ch???n v??o items
		var menuItems = document.querySelectorAll('#nav li a[href*="#"]') /*l???y ra t???t c??? c??c th??? a c?? herf = "#"*/
		for (var i = 0; i < menuItems.length; i++) 
		{
			var menuItem = menuItems[i];
			// console.log(menuItem);

			//console.log(menuItem.nextElementSibling); /*nextElementSibling: kiem tra anh chi em lien ke the 'a'*/

			//lang nghe click
			menuItem.onclick = function(event) /*function return doi so*/
			{
				//test this (in ra cai clicked vao, o day click = menuItem)
				// console.log(this);

				var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav'); 
				/*classList.contains('subnav'): kiem tra class 'subnav' co ton tai trong classList k?*/
				if(isParentMenu)
				{
					event.preventDefault(); /* b??? qua m???c ?????nh ??? ????y th??? a c?? href = "#" -> b??? b??? qua*/ 
				}else
				{
					// console.log(this);
					header.style.height = null; //g??n css cho #header /*an meunu*/					
				}

			}
			
		}

	</script>



</body>
</html>