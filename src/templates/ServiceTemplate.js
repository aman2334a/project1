import React from "react";
import Accordion from "react-bootstrap/Accordion";
export default function ServiceTemplate() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0 text-center">
              <h2 className="heading-text">
                Find the best services and consulting for affordable deals.
              </h2>
              <p>
                Become a member and avail our premium services in affordable
                price. We have designed our membership plans which are the best
                fit to your Finance, Taxation and Investments services.
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 text-center">
              <img src="./assets/img/services/business-1.jpg" alt="#"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="taxation bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-8 text-center w-md-50 mx-auto mb-0">
              <h2 className="mb-md-2">Our Services</h2>
              <p className="lead text-muted">Explore More</p>
              <h1 className="taxation">Taxation & Corporate Consultancy</h1>

            </div>
          </div>
        </div>
      </section>
      <section className="taxation bg-light">
        <div className="container">
       
          <div className="row">
            <div className="col-md-4">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>FILING</Accordion.Header>
                  <Accordion.Body>
                    <li>Income tax and Return</li>
                    <li>GST</li>
                    <li>Company affair</li>
                    <li>Import/Export</li>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-md-4">
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>PLANNING</Accordion.Header>
                  <Accordion.Body>
                    <li>Advance of Tax through legal planning</li>
                    <li>Creation of entities</li>
                    <ul>Trust</ul>
                    <ul>Cheritable</ul>
                    <ul>Beneficiary</ul>
                <li>Application of available deductions/exemptions/available per law.</li>
                    <li>Value creation in business assets,Agri and Dairy.</li>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-md-4">
              <Accordion>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>CONSULTANCY</Accordion.Header>
                  <Accordion.Body>
                    <li>Income Tax Cases</li>
                    <li>Income tax Raid Cases</li>
                    <li>Company Law Affair</li>
                    <li>GST Cases</li>
                    <li>Refund of income Tax and GST</li>
               
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="taxation bg-light">
        <div className="container">
          <div className="row">

          <div className="col-md-4">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>ADVISORY</Accordion.Header>
                  <Accordion.Body>
                    <li>Development of Management system and Audit</li>
                    <li>Development of Accounting system and Evaluation</li>
                    <li>To select/advice Agri-business-Government Subsidy/Grant available</li>
                   
               
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-md-4">
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>FINANCE</Accordion.Header>
                  <Accordion.Body>
                    <li>Long Term/Short Term/Personal Loan.</li>
                    <li>Finance against securities and immovable assets</li>
                    <li>Commodity Finance for your needs</li>
                    <li>Finance against securities and immovable assets</li>
                    <li>Loans for Agricultural Business/Dairy and support in getting Subsidy/Grant from Government</li>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-md-4">
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>INVESTMENT</Accordion.Header>
                  <Accordion.Body>
                    <li>Join Ventures</li>
                    <li>Mutual Funds</li>
                
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
