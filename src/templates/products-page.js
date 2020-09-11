import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ProductListitem from "../components/ProductListItem"
import ProductModal from "../components/ProductModal"

const ProductsPageTemplate = ({ data, pageContext, location }) => {
  const [modal, setModal] = useState({
    name: 'x',
    price: '',
    inStock: false,
    description: '',
    tag:''
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const products = data.allMarkdownRemark.edges
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  console.log('products', products)

  useEffect(() => {
    console.log('testomani', window.$('#prodect-modal'))
  })

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
                          {products.map((product, index) => {
                            product = product.node.frontmatter;
                            console.log(product)
                            return (
                              <ProductListitem
                                name={product.name}
                                price={product.price}
                                redLabel={product.redLabel}
                                imageSrc={product.thumbnail}
                                key={index}
                                onClick={() => {
                                  console.log('damn')
                                  setModal({
                                    name: product.name,
                                    price: product.price,
                                    inStock: product.isInStock,
                                    description: product.description,
                                    tag: product.tag,
                                    images: product.images
                                  })
                                  setIsModalOpen(true)
                                }}
                              />
                            )
                          })}
                          {/* <ProductListitem
                            name="Orochimaru 120mm"
                            price="Rp. 23.000.000"
                            redLabel="-14%"
                            imageSrc="/assets/images/cms/products-all.jpg"
                          />
                          <ProductListitem
                            name="Orochimaru 120mm"
                            price="Rp. 23.000.000"
                            blackLabel="Out of Stock"
                            imageSrc="/assets/images/cms/products-all.jpg"
                          /> */}

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
    <ProductModal
      name={modal.name}
      price={modal.price}
      inStock={modal.isInStock}
      description={modal.description}
      tag={modal.tag}
      isOpen={isModalOpen}
      toggle={() => setIsModalOpen(!isModalOpen)}
    />
    {/* <div class="product-modal-box modal fade" id="prodect-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog  modal-dialog-centered" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="icon-cross" aria-hidden="true"></span></button>
              </div>
              <div class="modal-body container">
                  <div class="row align-items-center">
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div class="quickview-product-active mr-lg-5">
                              <a href="#" class="images">
                                  <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt=""/>
                              </a>
                              <a href="#" class="images">
                                  <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt=""/>
                              </a>
                              <a href="#" class="images">
                                  <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt=""/>
                              </a>
                          </div>

                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div class="product-details-content quickview-content-wrap ">

                              <h5 class="font-weight--reguler mb-20">Shinjuku Knife 13mm</h5>
                              <h3 class="price">Rp. 1.998.000</h3>

                              <div class="stock in-stock mt-10">
                                  <p>Available: <span>In stock</span></p>
                              </div>

                              <div class="quickview-peragraph mt-10">
                                  <p>At vero accusamus et iusto odio dignissimos blanditiis praesntiums dolores molest.</p>
                              </div>

                              <div class="product_meta mt-30">
                                <div class="tagged_as item_meta">
                                    <span class="label mr-1">Tag: </span><a href="#">Pottery</a>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div> */}
    </Layout>
  )
}

export default ProductsPageTemplate

export const pageQuery = graphql`
  query ProductsListQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "product"}}}) {
      edges {
        node {
          frontmatter {
            name
            price
            date(locale: "id")
            description
            thumbnail
            isInStock
            images {
              image
            }
            redLabel
            blackLabel
          }
        }
      }
    }
  }
`
