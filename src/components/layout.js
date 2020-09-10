import React, { useEffect } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
// require('../assets/js/vendor/vendor.min.js')
// require('../assets/js/plugins/plugins.js')
// require('../assets/js/main.js')

const Layout = ({ location, title, children }) => {

  useEffect(() => {
    const script = document.createElement("script");
    // script.async = true;
    script.src = "/assets/js/main.js";
    script.className = 'main-script'
    if(document.body.getElementsByClassName('main-script').length == 0){
      document.body.appendChild(script);
    }
  });

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  header = (
    <div class="header-area header-area--default bg-white">
      <header class="header-area header_absolute header_height-90 header-sticky">
        <div class="container-fluid container-fluid--cp-100">
          <div class="row align-items-center">
            <div class="col-lg-3 col-lg-3 col-6">
                <div class="logo text-left">
                    <a href="#"><img src="assets/images/logo/logo.png" alt=""/></a>
                </div>
            </div>
          <div class="col-lg-6 col-lg-6  d-none d-lg-block">
            <div class="header__navigation d-none d-lg-block">
                <nav class="navigation-menu">
                    <ul class="justify-content-center">
                        <li>
                            <a href="#"><span>Home</span></a>
                        </li>
                        <li>
                            <a href="#"><span>Products</span></a>
                        </li>
                        <li>
                            <a href="#"><span>About Us</span></a>
                        </li>
                        <li>
                            <a href="#"><span>Blog</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
          </div>
          <div class="col-lg-3 col-lg-3 col-6">
            <div class="header-right-side text-right">

                <div class="header-right-items ">
                <a href="#" class="mobile-navigation-icon" id="mobile-menu-trigger">
                    <i class="icon-menu"></i>
                </a>
                </div>
            </div>
          </div>
          </div>
        </div>
      </header>
    </div>
  )
  return (
    <>
      <header>{header}</header>
      <div class="site-wrapper-reveal">
        {children}
      </div>
      <Footer/>
      <SidebarMenu/>
      {/* <Helmet><script src={"/assets/js/main.js"}/></Helmet> */}
    </>
  )
}

const SiteWrapper = (props) => {
  return (
    <div class="site-wrapper-reveal">
      {props.children}
    </div>
  )
}

const Footer = () => {
  return ( <div class="footer-area-wrapper reveal-footer bg-gray">
  <div class="footer-area section-space--ptb_90">
      <div class="container-fluid container-fluid--cp-100">
          <div class="row footer-widget-wrapper">
              <div class="col-lg-3 col-md-3 col-sm-6 footer-widget">
                  <div class="footer-widget__logo mb-20">
                      <a href="#"><img src="assets/images/logo/logo.png" alt=""/></a>
                  </div>
                  <ul class="footer-widget__list">
                      <li><i class="icon_pin"></i> Senpai, Jakarta Utara, 10231</li>
                      <li> <i class="icon_phone"></i><a href="tel:846677028028" class="hover-style-link">08162183849</a></li>

                  </ul>
                  <ul class="list footer-social-networks mt-25">

                      <li class="item">
                          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                              <i class="social social_twitter"></i>
                          </a>
                      </li>
                      <li class="item">
                          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                              <i class="social social_facebook"></i>
                          </a>
                      </li>
                      <li class="item">
                          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                              <i class="social social_instagram"></i>
                          </a>
                      </li>
                  </ul>
              </div>

              <div class="col-lg-9 col-md-9 col-sm-6 footer-widget">
                  <h6 class="footer-widget__title mb-20">Instagram</h6>
                  <div id="instagramFeed"></div>
              </div>
          </div>
      </div>
  </div>
  <hr/>
  <div class="footer-copyright-area section-space--ptb_30">
      <div class="container-fluid container-fluid--cp-100">
          <div class="row align-items-center">
              <div class="col-lg-12 col-md-12">
                  <span class="copyright-text text-center text-md-left">&copy; 2020 Senpai. <a  href="https://www.google.com/" target="_blank">All Rights Reserved.</a></span>

              </div>
          </div>
      </div>
  </div>
</div> )
}

  const SidebarMenu = () => {
    return (
      <div class="mobile-menu-overlay" id="mobile-menu-overlay">

          <div class="mobile-menu-overlay__inner">

              <div class="mobile-menu-close-box text-left">
                  <span class="mobile-navigation-close-icon" id="mobile-menu-close-trigger"> <i class="icon-cross2"></i></span>
              </div>


              <div class="mobile-menu-overlay__body">
                  <div class="offcanvas-menu-header d-md-block d-none">
                  </div>
                  <nav class="offcanvas-navigation">
                      <ul>
                          <li class="has-children">
                              <a href="#">Home</a>
                          </li>
                          <li class="has-children">
                              <a href="#">Products</a>
                          </li>
                          <li class="has-children">
                              <a href="#">About Us</a>
                          </li>
                          <li class="has-children">
                              <a href="#">Blog</a>
                          </li>
                      </ul>
                  </nav>

                  <div class="mobile-menu-contact-info section-space--mt_60">
                      <h6>Contact Us</h6>
                      <p>Jl. Cempaka Buah 21 Blok E3 no. 9, Jakarta Utara, Indonesia <br/>rep@senpai.co <br/>08161239123908</p>
                  </div>

                  <div class="mobile-menu-social-share section-space--mt_60">
                      <h6>Follow Us</h6>
                      <ul class="social-share">
                          <li><a href="#"><i class="social social_facebook"></i></a></li>
                          <li><a href="#"><i class="social social_twitter"></i></a></li>
                          <li><a href="#"><i class="social social_instagram"></i></a></li>
                      </ul>
                  </div>


              </div>


          </div>


      </div>
  )
}

export default Layout
