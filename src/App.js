import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './custum.css';
import mainimage from './main_image.png';
import event1 from './event1.png';
import event2 from './event2.png';
import event3 from './event3.png';

class App extends Component {
  render() {
    return (
    <div className="container">  
      <div className="App">
        <div className="menu"><span class="lnr lnr-magnifier"></span><span class="lnr lnr-menu-circle"></span></div>
          <header className="App-header">
            <h1 className="App-title">EC1 GALLERY</h1>
          </header>
          <div className="full-w-div">

            <img src = {mainimage} alt="mainimage" className="img-resizetop" />
              <div className="info-div">
              <h4>Anselm Kiefer: Wallhalla</h4>
              <p>until 12 Feburay 2017, Bermondsey</p>
          </div>
          <div className="full-w-div">
          <div className="info-div">
              <hr/>
                <div class = "half-col">
                  <h4>News and Events</h4>
                </div>  
                <div class = "half-col">
                  <p class = "right">Views All</p>
                </div>
              </div>
            <div className="three-col">
            <img src ={event1}  alt="mainimage" />
            <h4>Exhibition: He Xiangyu mongrapth released by Distanz</h4>
            <p>From March 2016</p>
            <p>He Xiangyu and Liu Wei are among 74 international artists from 33 countries chosen to feature in the Yinchuan Bienalle 2016</p></div>
            <div className="three-col">
            <img src ={event2}  alt="mainimage" />
            <h4>Exhibition: Runa Islam at SFMOMA, San Francisco</h4>
            <p>From March 2016</p>
            <p>Verso, SFMOMA's solo presentation of Bangladeshi-born British artist Runa Islam, features the US premiere of cabinet of Prototypes(2009-10)</p></div>
            <div className="three-col">
            <img src ={event3}  alt="mainimage" />
            <h4>Preview: White Cube Mason's Yard</h4>
            <p>19 January 2017 6 to 8pm</p>
            <p>Join us at Mason's Yard, London for the preview of the new Park Seo-Bo exhibition curated by Katherine Kostyal. Curated by Katherine Kostyal</p></div>
          </div> 
    
          <div className="full-w-div">
            <div className="info-div">
              <hr/>
              <div class = "half-col">
                  <h4>Channel</h4>
              </div>
              <div class = "half-col">
              <p>View All</p>
              </div>
                  <iframe width="1280" height="615" src="https://www.youtube.com/embed/vlm5tgistqA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  <h4>Anselm Kiefer</h4>
                  <p>In conversation with with Tim Marlow in the auditorium</p>
            </div>
          </div>

          <div className="full-w-div">
            <div className="info-div">
            <hr/>
            <h4>Artists</h4>
            </div>
            <div className="four-col">
              <ul>
                <li>Laine Hiltner</li>
                <li>Nichelle Gilpatrick</li>  
                <li>Gertie Dion</li>
                <li>Johnson Beeman</li>  
                <li>Sherley Millette</li>  
                <li>Zane Montandon</li>  
                <li>Ronny Steed</li>  
                <li>Bret Hill</li>  
                <li>Mitzie Scharf</li>  
                <li>Mercy Flack</li>  
                <li>Valorie Eaves</li>  
                <li>Mira Vankirk</li>  
                <li>Adaline Montejano</li>  
              </ul>    
            </div>
            <div className="four-col">
            <ul>
                <li>Laine Hiltner</li>
                <li>Nichelle Gilpatrick</li>  
                <li>Gertie Dion</li>
                <li>Johnson Beeman</li>  
                <li>Sherley Millette</li>  
                <li>Zane Montandon</li>  
                <li>Ronny Steed</li>  
                <li>Bret Hill</li>  
                <li>Mitzie Scharf</li>  
                <li>Mercy Flack</li>  
                <li>Valorie Eaves</li>  
                <li>Mira Vankirk</li>  
                <li>Adaline Montejano</li>  
              </ul> 
            </div>
            <div className="four-col">
            <ul>
                <li>Laine Hiltner</li>
                <li>Nichelle Gilpatrick</li>  
                <li>Gertie Dion</li>
                <li>Johnson Beeman</li>  
                <li>Sherley Millette</li>  
                <li>Zane Montandon</li>  
                <li>Ronny Steed</li>  
                <li>Bret Hill</li>  
                <li>Mitzie Scharf</li>  
                <li>Mercy Flack</li>  
                <li>Valorie Eaves</li>  
                <li>Mira Vankirk</li>  
                <li>Adaline Montejano</li>  
              </ul>
            </div>
              <div className="four-col">
              <img src ={event1}  alt="mainimage" />
              </div>
            </div>

<footer className="full-w-div-footer">
  
    <ul className="footer-links">
        <li>Newsletter</li>  
        <li>Contact</li>  
        <li>Press rooms</li>  
    </ul>

    <h3>EC1 GALLERY</h3>
    <p>344 Clerkenwell Road</p>
    <p>LondonEC1 5RS</p> 
    <p>Tel +44(0) 207 123 4567</p>

    <div className="grey-footer">
      
      <div className="half-col">
      <h3>2017 EC1 GALLERY</h3>
      </div>

      <div className="half-col">
      <ul className="footer-links">
        <li>Cookie Policy</li>  
        <li>Terms of Sale</li>  
        <li>Privacy Notice</li>  
     </ul>
      </div>

  </div>
</footer>
          </div>
        </div>
    </div>  
    );
  }
}

export default App;
