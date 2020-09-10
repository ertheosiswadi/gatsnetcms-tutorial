import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const ProductsPageTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <div class="breadcrumb-area">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="row breadcrumb_box  align-items-center">
                          <div class="col-lg-6 col-md-6 col-sm-6 text-center text-sm-left">
                              <h2 class="breadcrumb-title">Products</h2>
                          </div>
                          <div class="col-lg-6  col-md-6 col-sm-6">
                              <ul class="breadcrumb-list text-center text-sm-right">
                                  <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                                  <li class="breadcrumb-item active">Products</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="site-wrapper-reveal border-bottom">

      <div class="product-wrapper section-space--ptb_120">
          <div class="container">

              <div class="tab-content">
                  <div class="tab-pane fade show active" id="tab_columns_02">
                      <div class="row">
                          <div class="col-lg-3 col-md-4 col-sm-6">
                              <div class="single-product-item text-center">
                                  <div class="products-images">
                                      <a href="#" class="product-thumbnail">
                                          <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt="Product Images"/>

                                      </a>
                                      <div class="product-actions">
                                          <a href="#" data-toggle="modal" data-target="#prodect-modal"><i class="p-icon icon-plus"></i><span class="tool-tip">Quick View</span></a>
                                          <a href="#"><i class="p-icon icon-bag2"></i> <span class="tool-tip">Add to cart</span></a>
                                          <a href="#"><i class="p-icon icon-heart"></i> <span class="tool-tip">Browse Wishlist</span></a>
                                      </div>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="prodect-title"><a href="#">0-0</a></h6>
                                      <div class="prodect-price">
                                          <span class="new-price">Rp. 4.500.000</span>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="col-lg-3 col-md-4 col-sm-6">
                              <div class="single-product-item text-center">
                                  <div class="products-images">
                                      <a href="#" class="product-thumbnail">
                                          <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt="Product Images"/>

                                          <span class="ribbon onsale">
                                      -14%
                                      </span>
                                      </a>
                                      <div class="product-actions">
                                          <a href="#" data-toggle="modal" data-target="#prodect-modal"><i class="p-icon icon-plus"></i><span class="tool-tip">Quick View</span></a>
                                          <a href="#"><i class="p-icon icon-bag2"></i> <span class="tool-tip">Add to cart</span></a>
                                          <a href="#"><i class="p-icon icon-heart"></i> <span class="tool-tip">Browse Wishlist</span></a>
                                      </div>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="prodect-title"><a href="#">1,0</a></h6>
                                      <div class="prodect-price">
                                          <span class="new-price">Rp. 4.500.000</span>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="col-lg-3 col-md-4 col-sm-6">
                              <div class="single-product-item text-center">
                                  <div class="products-images">
                                      <a href="#" class="product-thumbnail">
                                          <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt="Product Images"/>

                                      </a>
                                      <div class="product-actions">
                                          <a href="#" data-toggle="modal" data-target="#prodect-modal"><i class="p-icon icon-plus"></i><span class="tool-tip">Quick View</span></a>
                                          <a href="#"><i class="p-icon icon-bag2"></i> <span class="tool-tip">Add to cart</span></a>
                                          <a href="#"><i class="p-icon icon-heart"></i> <span class="tool-tip">Browse Wishlist</span></a>
                                      </div>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="prodect-title"><a href="#">2,0</a></h6>
                                      <div class="prodect-price">
                                          <span class="new-price">Rp. 4.500.000</span>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="col-lg-3 col-md-4 col-sm-6">
                              <div class="single-product-item text-center">
                                  <div class="products-images">
                                      <a href="#" class="product-thumbnail">
                                          <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt="Product Images"/>

                                      </a>
                                      <div class="product-actions">
                                          <a href="#" data-toggle="modal" data-target="#prodect-modal"><i class="p-icon icon-plus"></i><span class="tool-tip">Quick View</span></a>
                                          <a href="#"><i class="p-icon icon-bag2"></i> <span class="tool-tip">Add to cart</span></a>
                                          <a href="#"><i class="p-icon icon-heart"></i> <span class="tool-tip">Browse Wishlist</span></a>
                                      </div>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="prodect-title"><a href="#">3,0</a></h6>
                                      <div class="prodect-price">
                                          <span class="new-price">Rp. 4.500.000</span>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="col-lg-3 col-md-4 col-sm-6">
                              <div class="single-product-item text-center">
                                  <div class="products-images">
                                      <a href="#" class="product-thumbnail">
                                          <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt="Product Images"/>

                                      </a>
                                      <div class="product-actions">
                                          <a href="#" data-toggle="modal" data-target="#prodect-modal"><i class="p-icon icon-plus"></i><span class="tool-tip">Quick View</span></a>
                                          <a href="#"><i class="p-icon icon-bag2"></i> <span class="tool-tip">Add to cart</span></a>
                                          <a href="#"><i class="p-icon icon-heart"></i> <span class="tool-tip">Browse Wishlist</span></a>
                                      </div>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="prodect-title"><a href="#">0,1</a></h6>
                                      <div class="prodect-price">
                                          <span class="new-price">Rp. 4.500.000</span>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="col-lg-3 col-md-4 col-sm-6">
                              <div class="single-product-item text-center">
                                  <div class="products-images">
                                      <a href="#" class="product-thumbnail">
                                          <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt="Product Images"/>

                                      </a>
                                      <div class="product-actions">
                                          <a href="#" data-toggle="modal" data-target="#prodect-modal"><i class="p-icon icon-plus"></i><span class="tool-tip">Quick View</span></a>
                                          <a href="#"><i class="p-icon icon-bag2"></i> <span class="tool-tip">Add to cart</span></a>
                                          <a href="#"><i class="p-icon icon-heart"></i> <span class="tool-tip">Browse Wishlist</span></a>
                                      </div>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="prodect-title"><a href="#">1,1</a></h6>
                                      <div class="prodect-price">
                                          <span class="new-price">Rp. 4.500.000</span>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="col-lg-3 col-md-4 col-sm-6">
                              <div class="single-product-item text-center">
                                  <div class="products-images">
                                      <a href="#" class="product-thumbnail">
                                          <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt="Product Images"/>

                                          <span class="ribbon out-of-stock ">
                                          Out Of Stock
                                      </span>
                                      </a>
                                      <div class="product-actions">
                                          <a href="#" data-toggle="modal" data-target="#prodect-modal"><i class="p-icon icon-plus"></i><span class="tool-tip">Quick View</span></a>
                                          <a href="#"><i class="p-icon icon-bag2"></i> <span class="tool-tip">Add to cart</span></a>
                                          <a href="#"><i class="p-icon icon-heart"></i> <span class="tool-tip">Browse Wishlist</span></a>
                                      </div>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="prodect-title"><a href="#">2,1</a></h6>
                                      <div class="prodect-price">
                                          <span class="new-price">Rp. 4.500.000</span>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="col-lg-3 col-md-4 col-sm-6">
                              <div class="single-product-item text-center">
                                  <div class="products-images">
                                      <a href="#" class="product-thumbnail">
                                          <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt="Product Images"/>

                                      </a>
                                      <div class="product-actions">
                                          <a href="#" data-toggle="modal" data-target="#prodect-modal"><i class="p-icon icon-plus"></i><span class="tool-tip">Quick View</span></a>
                                          <a href="#"><i class="p-icon icon-bag2"></i> <span class="tool-tip">Add to cart</span></a>
                                          <a href="#"><i class="p-icon icon-heart"></i> <span class="tool-tip">Browse Wishlist</span></a>
                                      </div>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="prodect-title"><a href="#">3,1</a></h6>
                                      <div class="prodect-price">
                                          <span class="new-price">Rp. 4.500.000</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-3 col-md-4 col-sm-6">
                              <div class="single-product-item text-center">
                                  <div class="products-images">
                                      <a href="#" class="product-thumbnail">
                                          <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt="Product Images"/>

                                      </a>
                                      <div class="product-actions">
                                          <a href="#" data-toggle="modal" data-target="#prodect-modal"><i class="p-icon icon-plus"></i><span class="tool-tip">Quick View</span></a>
                                          <a href="#"><i class="p-icon icon-bag2"></i> <span class="tool-tip">Add to cart</span></a>
                                          <a href="#"><i class="p-icon icon-heart"></i> <span class="tool-tip">Browse Wishlist</span></a>
                                      </div>
                                  </div>
                                  <div class="product-content">
                                      <h6 class="prodect-title"><a href="#">0,2</a></h6>
                                      <div class="prodect-price">
                                          <span class="new-price">Rp. 4.500.000</span>
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
    </Layout>
  )
}

export default ProductsPageTemplate

export const pageQuery = graphql`
  query XXX($slug: String!) {
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
