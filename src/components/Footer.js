import React from "react";
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
     <>
     <footer>
      <div className="signUp">
          <h2>JOIN THE CREW!</h2>
          <h4>Be the first to know about new products, promotions and special deals.</h4>
          <form action="/">
              <label htmlFor="email">JOIN VIA EMAIL</label>
              <input type="email" id="email" name="email" />
              <input type="submit" />
          </form>
      </div>

    <div className="followUs">
      <h3>FOLLOW US</h3>
      <ul>
          <li><a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></a></li>
          <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} /></a></li>
          <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} /></a></li>
      </ul>
    </div>
      
</footer>

     </>
    )
}
