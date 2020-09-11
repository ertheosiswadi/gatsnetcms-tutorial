import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProductModal = (props) => {
  console.log('isinstock', props.inStock)

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle} modalClassName="product-modal-box" centered={true} fade={true}>
      <ModalHeader toggle={props.toggle}
        close={<button onClick={props.toggle} type="button" class="close" aria-label="Close"><span class="icon-cross" aria-hidden="true"></span></button>}
      ></ModalHeader>
      <ModalBody className="container">
      <div class="row align-items-center">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="quickview-product-active mr-lg-5">
                          {props.images && props.images.map((imageSrc, index) => {
                            return (
                              <a key={index} href="#" class="images">
                                  <img src={imageSrc} class="img-fluid" alt=""/>
                              </a>
                            )
                          })}
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

                          <h5 class="font-weight--reguler mb-20">{props.name}</h5>
                          <h3 class="price">{props.price}</h3>
                          {props.inStock ?
                            <div class="stock in-stock mt-10">
                                <p>Available: <span>In stock</span></p>
                            </div> :
                            <div class="stock out-of-stock mt-10">
                                <p>Available: <span>Out of stock</span></p>
                            </div>
                          }
                          <div class="quickview-peragraph mt-10">
                              <p>{props.description}</p>
                          </div>

                          <div class="product_meta mt-30">
                            <div class="tagged_as item_meta">
                                <span class="label mr-1">Tag: </span><a href="#">{props.tag}</a>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
      </ModalBody>
    </Modal>
//   <div class="product-modal-box modal fade" id="prodect-modal" tabindex="-1" role="dialog">
//   <div class="modal-dialog  modal-dialog-centered" role="document">
//       <div class="modal-content">
//           <div class="modal-header">
//               <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="icon-cross" aria-hidden="true"></span></button>
//           </div>
//           <div class="modal-body container">
              // <div class="row align-items-center">
              //     <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              //         <div class="quickview-product-active mr-lg-5">
              //             {props.images && props.images.map((imageSrc, index) => {
              //               return (
              //                 <a key={index} href="#" class="images">
              //                     <img src={imageSrc} class="img-fluid" alt=""/>
              //                 </a>
              //               )
              //             })}
              //             <a href="#" class="images">
              //                 <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt=""/>
              //             </a>
              //             <a href="#" class="images">
              //                 <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt=""/>
              //             </a>
              //             <a href="#" class="images">
              //                 <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt=""/>
              //             </a>
              //         </div>

              //     </div>
              //     <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              //         <div class="product-details-content quickview-content-wrap ">

              //             <h5 class="font-weight--reguler mb-20">{props.name}</h5>
              //             <h3 class="price">{props.price}</h3>
              //             {props.inStock ?
              //               <div class="stock in-stock mt-10">
              //                   <p>Available: <span>In stock</span></p>
              //               </div> :
              //               <div class="stock out-of-stock mt-10">
              //                   <p>Available: <span>Out of stock</span></p>
              //               </div>
              //             }
              //             <div class="quickview-peragraph mt-10">
              //                 <p>{props.description}</p>
              //             </div>

              //             <div class="product_meta mt-30">
              //               <div class="tagged_as item_meta">
              //                   <span class="label mr-1">Tag: </span><a href="#">{props.tag}</a>
              //               </div>
              //             </div>
              //         </div>
              //     </div>
              // </div>
//           </div>
//       </div>
//   </div>
// </div>
);
}

export default ProductModal;