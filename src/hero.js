import React, { Component } from 'react';
import 'srchero.css';

const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear())

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById('nav-toggle')
const links = document.getElementById('nav-links')
// add event listener
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault()
    links.classList.remove('show-links')

    const id = e.target.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    //
    let position = element.offsetTop - 62

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: 'smooth',
    })
  })
})

export default class hero extends Component {
  render() {
    return <div>
           <header id="home">
      <nav class="navbar">
        <div class="nav-center">
          {/* <!-- nav header --> */}
          <div class="nav-header">
            <img src="./images/nav-logo.jpeg" alt="nav-logo" class="nav-logo" />
            {/* <!-- nav header text --> */}
            <div class="nav-header-text">
              <h2>shri maramma temple</h2>
              <p>chinnayanapalya, wilson garden, bengaluru - 560 027.</p>
            </div>
            {/* <!-- end of nav header text --> */}
            <button type="button" class="nav-toggle" id="nav-toggle">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- end of nav header -->
          <!-- nav links --> */}
          <ul class="nav-links show-links" id="nav-links">
            {/* <!-- home link --> */}
            <li>
              <a href="hero.html" class="nav-link scroll-link">home</a>
            </li>
            {/* <!-- end of home link -->
            <!-- about link --> */}
            <li>
              <a href="about.html" class="nav-link scroll-link">about</a>
            </li>
            {/* <!-- end of about link -->
            <!-- events link --> */}
            <li>
              <a href="events.html" class="nav-link scroll-link">events</a>
            </li>
            {/* <!-- end of events link -->
            <!-- gallery link --> */}
            <li>
              <a href="gallery.html" class="nav-link scroll-link">gallery</a>
            </li>
            {/* <!-- end of gallery link -->
            <!-- contact link --> */}
            <li>
              <a href="contact.html" class="nav-link scroll-link">contact</a>
            </li>
            {/* <!-- end of contact link --> */}
          </ul>
          {/* <!-- end of nav links --> */}
        </div>
      </nav>
    </header>
    {/* <!-- end of header --> */}

    {/* <!-- Test --> */}

    <div class="newtest">
      {/* <!-- <img src="./images/Hero-img.jpeg" alt="" /> --> */}
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        expedita adipisci in dolorem repellat iste laudantium veniam blanditiis
        dolor aut assumenda, molestias cum eveniet sit alias est amet minima
        enim quia tempore, quaerat voluptates nam ea! Vitae aspernatur
        praesentium repellendus fugiat incidunt eum voluptates debitis
        necessitatibus, eaque tempora repudiandae totam inventore! Quasi numquam
        nostrum optio neque voluptate voluptates, impedit at, id, est et
        perspiciatis. Sequi animi nihil ad necessitatibus atque doloremque nam
        quisquam voluptas cumque, at provident pariatur doloribus dicta ab
        nesciunt minus, aliquid quidem, eligendi molestiae aliquam nostrum
        delectus rem debitis sed. Illum minus, reprehenderit quod enim accusamus
        in.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        expedita adipisci in dolorem repellat iste laudantium veniam blanditiis
        dolor aut assumenda, molestias cum eveniet sit alias est amet minima
        enim quia tempore, quaerat voluptates nam ea! Vitae aspernatur
        praesentium repellendus fugiat incidunt eum voluptates debitis
        necessitatibus, eaque tempora repudiandae totam inventore! Quasi numquam
        nostrum optio neque voluptate voluptates, impedit at, id, est et
        perspiciatis. Sequi animi nihil ad necessitatibus atque doloremque nam
        quisquam voluptas cumque, at provident pariatur doloribus dicta ab
        nesciunt minus, aliquid quidem, eligendi molestiae aliquam nostrum
        delectus rem debitis sed. Illum minus, reprehenderit quod enim accusamus
        in.
      </p>
      <a href="https://www.youtube.com/">click here</a>
      <a href="about.html">click here ab</a>
      {/* <!-- <h1>new <span id="date"></span></h1> --> */}
    </div>

    {/* <!-- end of Test --> */}

    {/* <!-- Footer --> */}
    <footer class="footer">
      <div class="footer-center">
        <div class="trust">
          <img src="./images/nav-logo.jpeg" alt="" class="footer-imgl" />
          {/* <!-- footer text --> */}
          <div class="footer-text">
            <h4>maramma anjaneya swamy seva trust</h4>
            <p>chinnayanapalya, wilson garden, bengaluru - 560 030.</p>
          </div>
          {/* <!-- end of footer text --> */}
          <img src="./images/nav-logo.jpeg" alt="" class="footer-imgr" />
        </div>
        <article class="contact-info">
          {/* <!-- email id --> */}
          <div class="contact-info1">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h4 class="contact-text">abc@gmail.com</h4>
          </div>
          {/* <!-- end of email id --> */}
          {/* <!-- Content divider --> */}
          <div class="content-divider"></div>
          {/* <!-- end of Content divider --> */}
          {/* <!-- phone number --> */}
          <div class="contact-info1">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <h4 class="contact-text">+91 01234 56789</h4>
          </div>
          {/* <!-- end of phone number --> */}
          {/* <!-- Content divider --> */}
          <div class="content-divider"></div>
          {/* <!-- end of Content divider --> */}
          {/* <!-- address --> */}
          <div class="contact-info1">
            <div class="contact-icon">
              <i class="fas fa-map"></i>
            </div>
            <h4 class="contact-text1">
              19th cross road, chinnayanapalya, wilson garden, bengaluru - 560
              030.
            </h4>
          </div>
          {/* <!-- end of address --> */}
        </article>
      </div>
      <div class="copyright">
        <h4 class="copyright-text">
          copyright &copy; <span id="date"></span>. maramma anjaneya swamy seva
          trust. all rights reserved.
        </h4>
      </div>
    </footer>
    </div>;
  }
}
