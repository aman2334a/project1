
import React from "react";
export default function MembershipTemplate() {
    return (
        <div className="container">
            <section>
                <div className="header-section">
                    <h1>Our Best Offers</h1>
                </div>
            </section>
            <section>

                <div className="row">
                    <div className='col-lg-6 mb-5 mb-lg-0 text-center'>
                        <div className='membershipCard'>

                            <h4>INdividual Plans</h4>
                            <p>$1000/Year</p>
                        </div>
                    </div>

                    <div className='col-lg-6 mb-5 mb-lg-0 text-center'>
                        <div className='membershipCard'>

                            <h4>Corporate Plans</h4>
                            <p>$5000/Year</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
