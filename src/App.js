import React from 'react';
import './App.css';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaTiktok, FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal, FaCcApplePay } from 'react-icons/fa';
import { SiKlarna, SiAfterpay, SiShopify, SiAlipay } from 'react-icons/si';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from './ảnh_1.webp';
import ExampleCarouselImage2 from './ảnh_2.webp';
import ExampleCarouselImage3 from './ảnh_3.webp';
import { bestSellers, releases, bestSellers2, latest } from './data';
import CategoryImageBoy from './bestsellers/con trai.webp';
import CategoryImageGirl from './bestsellers/con gai.webp';
import CategoryImageKids from './bestsellers/trẻ em.webp';
import ClothingImageLarge from './clothing/anh_1.webp';
import ClothingImageShirts from './clothing/anh_2.jpg';
import ClothingImageShorts from './clothing/anh_3.webp';
import ClothingImageHoodies from './clothing/anh_4.webp';
import ClothingImagePants from './clothing/anh_5.webp';
import popularanh1 from './POPULAR BRANDS/anh_1.webp';
import popularanh2 from './POPULAR BRANDS/anh_2.webp';
import popularanh3 from './POPULAR BRANDS/anh_3.jpg';
import popularanh4 from './POPULAR BRANDS/anh_4.webp';
import popularanh5 from './POPULAR BRANDS/anh_5.jpg';
import popularanh6 from './POPULAR BRANDS/anh_6.webp';
import popularanh7 from './POPULAR BRANDS/anh_7.webp';
import popularanh8 from './POPULAR BRANDS/anh_8.webp';
import ggplayimg from './gg play.png';
import appstoreimg from './appstroe1.jpg';


function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="logo">FEATURE</div>
        <nav className="navigation">
          <ul>
            {['LATEST', 'RELEASES', 'BRANDS', 'CLOTHING', 'FOOTWEAR', 'ACCESSORIES', 'LIFESTYLE', 'NEWS', 'SALE'].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
        <div className="header-right">
          <div className="search-bar">
            <FaSearch />
            <input type="text" placeholder="Search" />
          </div>
          <div className="icons">
            <FaShoppingCart />
            <FaUser />
          </div>
        </div>
      </header>

      <main className="main-content">
        <Carousel>
          <Carousel.Item>
            <img src={ExampleCarouselImage1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={ExampleCarouselImage2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={ExampleCarouselImage3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <section className="best-sellers">
          <h2>BEST SELLERS</h2>
          <div className="products-grid">
            {bestSellers.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.brand}</p>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="categories">
          <div className="category-card">
            <img src={CategoryImageBoy} alt="Đàn Ông" />
            <div className="category-content">
              <h3>MEN'S</h3>
              <button className="shop-now-button">Shop Now</button>
            </div>
          </div>
          <div className="category-card">
            <img src={CategoryImageGirl} alt="Phụ Nữ" />
            <div className="category-content">
              <h3>WOMEN'S</h3>
              <button className="shop-now-button">Shop Now</button>
            </div>
          </div>
          <div className="category-card">
            <img src={CategoryImageKids} alt="Trẻ Em" />
            <div className="category-content">
              <h3>KIDS</h3>
              <button className="shop-now-button">Shop Now</button>
            </div>
          </div>
        </section>

        <section className="releases">
          <div className="section-header1">
            <h2>RELEASES</h2>
            <a href="/releases" className="see-all-link1">SEE ALL &gt;</a>
          </div>
          <div className="products-grid2">
            {releases.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3>{product.brand}</h3>
                  <p>{product.name}</p>
                  <p>{product.releaseDate}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="clothing-section">
          <div className="left">
            <img src={ClothingImageLarge} alt="Clothing" />
            <div className="clothing-content">
              <h3>CLOTHING</h3>
              <p>NEW ARRIVALS</p>
              <button className="shop-now-button">SHOP NOW</button>
            </div>
          </div>
          <div className="right">
            <div className="category-card">
              <img src={ClothingImageShirts} alt="Shirts" />
              <div className="clothing-content">
                <h3>SHIRTS</h3>
                <button className="shop-now-button">SHOP NOW</button>
              </div>
            </div>
            <div className="category-card">
              <img src={ClothingImageShorts} alt="Shorts" />
              <div className="clothing-content">
                <h3>SHORTS</h3>
                <button className="shop-now-button">SHOP NOW</button>
              </div>
            </div>
            <div className="category-card">
              <img src={ClothingImageHoodies} alt="Hoodies" />
              <div className="clothing-content">
                <h3>HOODIES</h3>
                <button className="shop-now-button">SHOP NOW</button>
              </div>
            </div>
            <div className="category-card">
              <img src={ClothingImagePants} alt="Pants" />
              <div className="clothing-content">
                <h3>PANTS</h3>
                <button className="shop-now-button">SHOP NOW</button>
              </div>
            </div>
          </div>
        </section>

        <section className="best-sellers">
          <div className="products-grid">
            {bestSellers2.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.brand}</p>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="popular-brands">
          <div className="section-header2">
            <h2>POPULAR BRANDS</h2>
            <a href="/popular-brands" className="see-all-link2">SEE ALL &gt;</a>
          </div>
          <div className="brands-grid">
            <figure className="brand-card">
              <img src={popularanh1} alt="Sneakers" />
              <figcaption>
                <h3><a href="#">FEATURE &gt;</a></h3>
              </figcaption>
            </figure>
            <figure className="brand-card">
              <img src={popularanh2} alt="Sneakers" />
              <figcaption>
                <h3><a href="#">NIKE &gt;</a></h3>
              </figcaption>
            </figure>
            <figure className="brand-card">
              <img src={popularanh3} alt="Sneakers" />
              <figcaption>
                <h3><a href="#"> HONOR THE GIFT &gt;</a></h3>
              </figcaption>
            </figure>
            <figure className="brand-card">
              <img src={popularanh4} alt="Sneakers" />
              <figcaption>
                <h3><a href="#">HUMAN MADE &gt;</a></h3>
              </figcaption>
            </figure>
            <figure className="brand-card">
              <img src={popularanh5} alt="Sneakers" />
              <figcaption>
                <h3><a href="#">FEAR OF GOD ESSENTIALS &gt;</a></h3>
              </figcaption>
            </figure>
            <figure className="brand-card">
              <img src={popularanh6} alt="Sneakers" />
              <figcaption>
                <h3><a href="#">GALLERY DEPT &gt;</a></h3>
              </figcaption>
            </figure>
            <figure className="brand-card">
              <img src={popularanh7} alt="Sneakers" />
              <figcaption>
                <h3><a href="#">RHUDE &gt;</a></h3>
              </figcaption>
            </figure>
            <figure className="brand-card">
              <img src={popularanh8} alt="Sneakers" />
              <figcaption>
                <h3><a href="#">AMRI &gt;</a></h3>
              </figcaption>
            </figure>
          </div>
        </section>


        <section className="latest-editorials">
          <div className="section-header4">
            <h2>LATEST EDITORIALS</h2>
            <a href="/releases" className="see-all-link4">SEE ALL &gt;</a>
          </div>
          <div className="products-grid2">
            {latest.map((item, index) => (
              <div key={latest.id} className="product-card">
                <img src={item.image} alt={`Image ${index + 1}`} className="product-image" />
                <div className="product-info">
                  {index === 0 && (
                    <p>
                      MONDAY MAY 06, 2024<br/>
                      <a href="#">FEATURE SPRING / SUMMER STYLE GUIDE</a><br/>
                      <a href="#">READ MORE &gt;</a>
                    </p>
                  )}
                  {index === 1 && (
                    <p>
                      FRIDAY APR 19, 2024<br/>
                      <a href="#">RIHANNA BRINGS FENTY X PUMA TO LONDON WITH THE CREEPER PHATTY EARTH TONE EXPERIENCE</a><br/>
                      <a href="#">READ MORE &gt;</a>
                    </p>
                  )}
                  {index === 2 && (
                    <p>THURSDAY APR 18, 2024<br/>
                      <a href="#"> FEATURE X 47 BRAND CELEBRATE THE LAS VEGAS GOLDEN KNIGHTS</a><br/>
                      <a href="#">READ MORE &gt;</a></p>
                  )}
                  {
                    index === 3 && (
                      <p>FRIDAY APR 12, 2024 <br/>
                        <a href = "#" >DISCOVER THE WHISTLER COACHES JACKET + O'KEEFE ASYMMETRICAL PANT</a><br/>
                        <a href="#">READ MORE &gt;</a></p>
                    )
                  }
                  {
                    index === 4 && (
                      <p>TUESDAY APR 02, 2024<br/>
                        <a href="#"> DRKSHDW: RICK OWENS' VISIONARY FUSION OF HIGH FASHION AND STREETWEAR </a><br/>
                        <a href="#">READ MORE &gt;</a></p>
                    )
                  }
                  {
                    index === 5 && (
                      <p>THURSDAY MAR 28, 2024<br/>
                        <a href="#" >FEATURE FRIENDS TALK PUMA EASY RIDER + BEST OF VEGAS</a><br/>
                        <a href="#">READ MORE &gt;</a></p>
                    )
                  }
                </div>
              </div>
            ))}
          </div>
        </section>



        <section className="latest-video">
          <div className="section-header3">
            <h2>LATEST VIDEO</h2>
            <a href="/latest-video" className="see-all-link3">SEE ALL &gt;</a>
          </div>
          <div className="video-grid">
            <div className="left-video">
              <iframe src="https://www.youtube.com/embed/Aepw8JJDHlo" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="right-videos">
              <div className="video-column">
                <iframe src="https://www.youtube.com/embed/n-e0ZPkRd9o" frameborder="0" allowfullscreen></iframe>
              </div>
              <div className="video-column">
                <iframe src="https://www.youtube.com/embed/7naBBOpctE4" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </section>



      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="newsletter">
            <h3>JOIN OUR NEWSLETTER</h3>
            <p>Get the inside scoop on all things Feature – new arrivals, sales and more.</p>
            <form>
              <input type="email" placeholder="Your Email Address" />
              <button type="submit">SIGN UP</button>
            </form>
          </div>
          <div className="gift-cards">
            <h3>FEATURE GIFT CARDS</h3>
            <p>Give the gift of All Things Good.</p>
            <button>GET A GIFT CARD</button>
          </div>
          <div className="feature-app">
            <h3>THE OFFICIAL FEATURE APP</h3>
            <p>A seamless way to shop the latest in fashion, footwear, and lifestyle.</p>
            <div className="app-links">
              <a href="https://apps.apple.com">
                <img src={appstoreimg} alt="Download on the App Store" />
              </a>
              <a href="https://play.google.com">
                <img src={ggplayimg} alt="Get it on Google Play" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="about-us">
            <h4>ABOUT US</h4>
            <ul>
              <li><a href="#">About Feature</a></li>
              <li><a href="#">Feature App</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Doing Good Things Foundation</a></li>
            </ul>
          </div>
          <div className="customer-service">
            <h4>CUSTOMER SERVICE</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Accessibility Assistance</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Email Preferences</a></li>
            </ul>
          </div>
          <div className="connect-with-us">
            <h4>CONNECT WITH US</h4>
            <div className="social-icons">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaTiktok /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaPinterest /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Feature LLC</p>
          <div className="payment-icons">
            <FaCcVisa title="Visa" />
            <FaCcMastercard title="MasterCard" />
            <FaCcAmex title="American Express" />
            <FaPaypal title="PayPal" />
            <SiKlarna title="Klarna" />
            <SiAfterpay title="Afterpay" />
            <SiShopify title="Shop Pay" />
            <FaCcApplePay title="Apple Pay" />
            <SiAlipay title="Alipay" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
