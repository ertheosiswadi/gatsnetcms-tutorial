import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import SEO from './seo'
// require('../assets/js/vendor/vendor.min.js')
// require('../assets/js/plugins/plugins.js')
// require('../assets/js/main.js')

const Layout = ({ location, title, children }) => {

  useEffect(() => {
    const script = document.createElement("script");
    // script.async = true;
    script.src = "/assets/js/main.js";
    script.className = 'main-script'
    // if(document.body.getElementsByClassName('main-script').length == 0){
    //   document.body.appendChild(script);
    // }
    document.querySelectorAll('.main-script').forEach(function(a) {
      a.remove()
    })
    document.body.appendChild(script);
  });

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark(frontmatter: {id: {eq: "home"}}) {
        frontmatter {
          layout {
            address
            companyName
            email
            facebook
            instagram
            logo
            twitter
            waNum
            waUrl
          }
          id
        }
      }
    }
  `)
  const layout = data.markdownRemark.frontmatter.layout
  console.log('Data', layout, data)

  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <>
      <SEO/>
      <Header
        logoSrc={layout.logo}
        waNum={layout.waNum}
        waUrl={layout.waUrl}
      />
      <div class="site-wrapper-reveal">
        {children}
      </div>
      <Footer
        logoSrc={layout.logo}
        address={layout.address}
        waNum={layout.waNum}
        waUrl={layout.waUrl}
        twitter={layout.twitter}
        facebook={layout.facebook}
        instagram={layout.instagram}
        companyName={layout.companyName}
      />
      <SidebarMenu
        address={layout.address}
        email={layout.email}
        waNum={layout.waNum}
        waUrl={layout.waUrl}
        twitter={layout.twitter}
        facebook={layout.facebook}
        instagram={layout.instagram}
      />
      {/* <Helmet><script src={"/assets/js/main.js"}/></Helmet> */}
    </>
  )
}

const Header = (props) => {
  return (
    <div class="header-area header-area--default bg-white">
      <header class="header-area   header-sticky">
          <div class="container-fluid container-fluid--cp-100">
              <div class="row">
                  <div class="col-lg-12 d-none d-md-block">
                      <div class="top-logo-area">
                          <div class="logo text-md-center">
                            <Link to="/"><img src={props.logoSrc} alt=""/></Link>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row align-items-center pt-3 pb-3">
                  <div class="col-lg-3 col-lg-3 col-6">
                      <div class="header-right-items content__hidden d-none d-md-block">
                          <a href={props.waUrl} class=""><span cl ass="phone-number font-lg-p"> <i class="fa fa-whatsapp" aria-hidden="true"></i> {props.waNum} </span></a>
                      </div>
                      <div class="logo__hidden text-left">
                          <Link to="/"><img src={props.logoSrc} alt=""/></Link>
                      </div>
                  </div>

                  <div class="col-lg-6 col-lg-6  d-none d-lg-block">
                      <div class="header__navigation d-none d-lg-block">
                          <nav class="navigation-menu">
                              <ul class="justify-content-center">
                                  <li>
                                      <Link to='/'><span>Home</span></Link>
                                  </li>
                                  <li>
                                      <Link to='/products'><span>Products</span></Link>
                                  </li>
                                  <li>
                                    <Link to='/about'><span>About Us</span></Link>
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
}

const Footer = (props) => {
  return ( <div class="footer-area-wrapper reveal-footer bg-gray">
  <div class="footer-area section-space--ptb_90">
      <div class="container-fluid container-fluid--cp-100">
          <div class="row footer-widget-wrapper">
              <div class="col-lg-3 col-md-3 col-sm-6 footer-widget">
                  <div class="footer-widget__logo mb-20">
                    <Link to="/"><img src={props.logoSrc} alt=""/></Link>
                  </div>
                  <ul class="footer-widget__list">
                      <li><i class="icon_pin"></i>{props.address}</li>
                      <li>
                        <i class="fa fa-whatsapp" aria-hidden="true"></i>
                        {/* <i class="icon_phone"></i> */}
                        <a href={props.waUrl} class="hover-style-link">{props.waNum}</a>
                      </li>

                  </ul>
                  <ul class="list footer-social-networks mt-25">

                      <li class="item">
                          <a href={props.twitter} target="_blank" aria-label="Twitter">
                              <i class="social social_twitter"></i>
                          </a>
                      </li>
                      <li class="item">
                          <a href={props.facebook} target="_blank" aria-label="Facebook">
                              <i class="social social_facebook"></i>
                          </a>
                      </li>
                      <li class="item">
                          <a href={props.instagram} target="_blank" aria-label="Instagram">
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
                  <span class="copyright-text text-center text-md-left">{`© ${(new Date()).getFullYear()} ${props.companyName}. `}<a  href="https://www.google.com/" target="_blank">All Rights Reserved.</a></span>
              </div>
          </div>
      </div>
  </div>
</div> )
}

  const SidebarMenu = (props) => {
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
                              <Link to='/'>Home</Link>
                          </li>
                          <li class="has-children">
                              <Link to='/products'>Products</Link>
                          </li>
                          <li class="has-children">
                              <Link to='/about'>About Us</Link>
                          </li>
                          <li class="has-children">
                              <a href="#">Blog</a>
                          </li>
                      </ul>
                  </nav>

                  <div class="mobile-menu-contact-info section-space--mt_60">
                      <h6>Contact Us</h6>
                      <p>
                        {props.address} <br/>
                        {props.email} <br/>
                        <a href={props.waUrl}>{props.waNum}</a>
                      </p>
                  </div>

                  <div class="mobile-menu-social-share section-space--mt_60">
                      <h6>Follow Us</h6>
                      <ul class="social-share">
                          <li><a href={props.facebook}><i class="social social_facebook"></i></a></li>
                          <li><a href={props.twitter}><i class="social social_twitter"></i></a></li>
                          <li><a href={props.instagram}><i class="social social_instagram"></i></a></li>
                      </ul>
                  </div>


              </div>


          </div>


      </div>
  )
}

export default Layout