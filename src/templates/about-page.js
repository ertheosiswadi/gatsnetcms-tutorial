import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import homeStyles from '../styles/home.module.css'
import '../styles/home.css'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <div class="hero-box-area">
                <div class="container">
                    <div class="row ">
                        <div class="col-lg-12">

                            <div class="hero-area hero-slider-7">
                                <div class="single-hero-slider-7">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="hero-content-wrap">
                                                    <div class="hero-text-7 mt-lg-5">
                                                        <h6 class="mb-20">
                                                            Helendo store
                                                        </h6>
                                                        <h1>Hailey <br/> Wooden Chair</h1>

                                                        <div class="button-box section-space--mt_60">
                                                            <a href="shop-left-sidebar.html" class="text-btn-normal font-weight--reguler font-lg-p">Discover now</a>
                                                        </div>
                                                    </div>
                                                    <div class="inner-images">
                                                        <div class="image-one">
                                                            <img src="assets/images/hero/home-box-1.png" class="img-fluid" alt="Image"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="single-hero-slider-7">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="hero-content-wrap">
                                                    <div class="hero-text-7 mt-lg-5">
                                                        <h6 class="mb-20">
                                                            Helendo store
                                                        </h6>
                                                        <h1>Hailey <br/> Wooden Chair</h1>

                                                        <div class="button-box section-space--mt_60">
                                                            <a href="shop-left-sidebar.html" class="text-btn-normal font-weight--reguler font-lg-p">Discover now</a>
                                                        </div>
                                                    </div>
                                                    <div class="inner-images">
                                                        <div class="image-one">
                                                            <img src="assets/images/hero/home-box-2.png" class="img-fluid" alt="Image"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
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
                                <h2>Helendo Store</h2>
                                <p>When you start with a portrait and search for a pure form, a clear volume, through successive eliminations,
                                    you arrive inevitably at the egg. Likewise, starting with the egg and following the same process in reverse,
                                    one finishes with the portrait.
                                </p>
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

export default BlogPostTemplate

export const pageQuery = graphql`
  query XX($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
