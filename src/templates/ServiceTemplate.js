import React from "react";
export default function ServiceTemplate(){
  return(
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0 text-center">
              <h2 className="heading-text">Find the best services and consulting for affordable deals.</h2>
              <p>Become a member and avail our premium services in affordable price. We have designed our membership plans which are the best fit to your Finance, Taxation and Investments services.</p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0 text-center">
              <img src ="./assets/img/services/business-1.jpg"></img>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row text-center">
          <div class="col-md-8 text-center w-md-50 mx-auto mb-0">
        <h2 class="mb-md-2">Our Services</h2>
        <p class="lead text-muted">Explore More</p>
      </div>
      </div>
        
        </div>
      </section>
      <section>
        <div className="container">
          <img  className="image-business"src = "/assets/img/services/Taxation1.png"></img>
          </div>
        
      </section>
      <section>
       
        <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0 text-center">
            <img src ="./assets/img/services/Advisory1.png"></img>
          </div>
         
          <div className="col-lg-4 mb-5 mb-lg-0 text-center">
            <img src ="./assets/img/services/Finance1.png"></img>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0 text-center">
            <img src ="./assets/img/services/Investment1.png"></img>
          </div>

</div>
        </div>
      </section>
    </>
  )
}