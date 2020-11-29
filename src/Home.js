import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id="124823547"
						title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses [By ER]-[Paperback] Paperback – January 1, 2001"
						price={19.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={5}
					/>
					<Product
						id="54895254"
						title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Black"
						price={234.99}
						image="https://images-na.ssl-images-amazon.com/images/I/61KZGG%2BjUHL._AC_SL1200_.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="175378943"
						title="Samsung Curved 1920x1080 HDMI VGA Monitor, White, 27"
						price={210.99}
						image="https://images-na.ssl-images-amazon.com/images/I/61fQOf3vKGL._AC_SL1000_.jpg"
						rating={5}
					/>
					<Product
						id="14644644"
						title="Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
						price={148.36}
						image="https://images-na.ssl-images-amazon.com/images/I/61zQN-TujQL._AC_SL1000_.jpg"
						rating={2}
					/>
					<Product
						id="14353723"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
						price={524.99}
						image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
						rating={3}
					/>
				</div>
				<div className="home__row">
					<Product
						id="848459413"
						title="OenFoto Compatible Gear Fit2 Pro/Fit2 Band, Replacement Silicone Accessories Strap Samsung Gear Fit2 Pro SM-R365/Gear Fit2 SM-R360 Smartwatch- Black"
						price={10.99}
						image="https://images-na.ssl-images-amazon.com/images/I/614P1P7KHiL._AC_SL1500_.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
