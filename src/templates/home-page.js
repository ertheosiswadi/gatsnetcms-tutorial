import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import homeStyles from '../styles/home.module.css'
import HeroSlide from '../components/HeroSlide'
import '../styles/home.css'

const HomePageTemplate = ({ data, pageContext, location }) => {
  const page = data.markdownRemark.frontmatter
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <div class="hero-box-area">
                <div class="container">
                    <div class="row ">
                        <div class="col-lg-12">

                            <div class="hero-area hero-slider-7">
                                <HeroSlide
                                  brandName={page.heroSlider.slide1.brandname}
                                  itemNameOne={page.heroSlider.slide1.itemname_one}
                                  itemNameTwo={page.heroSlider.slide1.itemname_two}
                                  imageSrc={page.heroSlider.slide1.image}
                                />
                                <HeroSlide
                                  brandName={page.heroSlider.slide2.brandname}
                                  itemNameOne={page.heroSlider.slide2.itemname_one}
                                  itemNameTwo={page.heroSlider.slide2.itemname_two}
                                  imageSrc={page.heroSlider.slide2.image}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="about-us-area section-space--ptb_120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="about-us-content_6 text-center">
                                <h2>{page.messageParagraph.messageHeader}</h2>
                                <p>{page.messageParagraph.messageBody}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="banner-video-area overflow-hidden">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="video-container">
                                <iframe class="video" src={page.videoUrl} allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      {/* <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {`THIS IS THE ABOUT PAGE ${post.frontmatter.title}`}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article> */}
    </Layout>
  )
}

export default HomePageTemplate

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: {id: {eq: "home"}}) {
      frontmatter {
        templateKey
        messageParagraph {
          messageBody
          messageHeader
        }
        heroSlider {
          slide1 {
            brandname
            image
            itemname_one
            itemname_two
          }
          slide2 {
            brandname
            image
            itemname_one
            itemname_two
          }
        }
        id
        videoUrl
      }
    }
  }
`
