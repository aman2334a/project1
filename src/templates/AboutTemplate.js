import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function AboutTemplate() {

	return (
		<>
			<section>
				<div className="container">
					<div className="row justify-content-between align-items-center">
						<div className="col-lg-6 mb-5 mb-lg-0 text-center">
							<h2 className="mb-4">
								We are Expert in Finance, Taxation, Investment, Advisory
								Consulting services.
							</h2>
							<p className="text-muted aboutSection1">
								We are a technology company that provide common platform for
								various financial services ranging from Taxation , Audits and
								investment management. Our mission is to provide hassle free and
								solution oriented services . Our team include experienced and
								dynamic professionals , providing guidance and services to
								client, making finance and taxation complications hassle free.
							</p>
						</div>
						<div className="col-lg-6 mb-5 mb-lg-0 text-center">
							<img
								style={{ width: "100%" }}
								src="./assets/img/intro/img-woman-1.jpg"
							/>
						</div>
					</div>
				</div>
			</section>
			<div id="Enterprise">
				<div class="container">
					<div class="enterprise-box">
						<div class="row">
							<div class="col-lg-4 col-sm-12">
								<div class="resource-box">
									<div className="resource_text">
										<img src="assets/img/services/4.svg" class="match-img" />
										<h1 className="box_text">Mission</h1>
									</div>
									<p className="muted_text">To provide excellent services in the field of Finance,Taxation,Agriculture, Investment and Advisory to enhance wealth. Thereafter, boosting the career opportunities overall.</p>
								</div>
							</div>
							<div class="col-lg-4 col-sm-12">
								<div class="resource-box">
									<div className="resource_text">
										<img src="assets/img/services/6.svg" class="match-img" />

										<h1 className="box_text">Vision</h1>
									</div>
									<p className="muted_text">Integrity.Honesty.Transparency.Trustworthiness. Accountability.Customer Experience.</p>
								</div>
							</div>
							<div class="col-lg-4 col-sm-12">
								<div class="resource-box">
									<div className="resource_text">
										<img src="assets/img/services/3.svg" class="match-img" />
										<h1 className="box_text">Values</h1>
									</div>
									<p className="muted_text">Integrity.Honesty.Transparency.Trustworthiness.    Accountability.Customer Experience.</p>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <section>
        <div class="row">
          <div class="col-md-4">
            <h2 className="mb-md-4 mt-3">Why Choose Us?</h2>
            <p className="text-muted">One stop for all your Taxation, Investment and Advisory related needs. Expert guidance and support on all your queries and issues.</p>
            <div className="mb-md-5 mb-4">
              <a href="#"className="btn btn-primary btn-pill">Read More</a>
            </div>
          </div>
          <div className="col-md-4">
            <h2 className="mb-md-4 mt-3">Our Solution</h2>
            <div id ="accordion">
              <div className="card">
                <div className="card-header">
                <a className="collapsed card-link" data-toggle="collapse" href="#collapseOne-alt3">
					 TAXATION & CORPORATE CONSULTANCY
						</a>
                </div>
                <div id="collapseOne-alt3" class="collapse" data-parent="#accordion">
				
						<div class="card-body">
							<p>• Income Tax</p>
							<p>• GST</p>
							<p>• Company affair</p>
							<p>• Import / Export</p>
						</div>
					</div>
				</div>
				<div class="card">
				
					<div class="card-header">
						<a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo-alt3">
						 ADVISORY
						</a>
					</div>
					<div id="collapseTwo-alt3" class="collapse" data-parent="#accordion">
					
						<div class="card-body">
							<p>• Development of Management system & Audit</p>
							<p>• Development of Accounting system & Evaluation</p>
							<p>• To select/advice Agri-business-Government Subsidy/Grant available</p>
						</div>
					</div>
				</div>
				<div class="card">
				
					<div class="card-header">
						<a class="collapsed card-link" data-toggle="collapse" href="#collapseThree-alt3">
						 FINANCE
						</a>
					</div>
					<div id="collapseThree-alt3" class="collapse" data-parent="#accordion">
					
						<div class="card-body">
							<p>• Long Term / Short Term/ Personal Loan</p>
							<p>• Finance against securities & immovable assets</p>
							<p>• Commodity Finance for your needs</p>
							<p>• Finance against securities & immovable assets</p>
							<p>• Loans for Agricultural Business/Dairy and support in getting Subsidy/Grant from Government</p>
							</div>
					</div>
				</div>
				<div class="card">
			
					<div class="card-header">
						<a class="collapsed card-link" data-toggle="collapse" href="#collapseFour-alt3">
						INVESTMENT
						</a>
					</div>
					<div id="collapseFour-alt3" class="collapse" data-parent="#accordion">
					
						<div class="card-body">
							<p>• Joint Ventures</p>
							<p>• Mutual Funds</p>
							<p>• Insurance</p>
							<p>• Equity & Debts</p>
							<p>• Crop Investment</p>
							</div>
					</div>
              </div>
            </div>
          </div>
        </div>
       </section> */}
			<section className="wt-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 mb-5 mb-lg-0 text-center">
							<h2 className="mb-md-4 mt-3">Why Choose Us?</h2>
							<p className="text-muted">One stop for all your Taxation, Investment and Advisory related needs. Expert guidance and support on all your queries and issues.</p>
							<div className="mb-md-5 mb-4">
								<a href="#" className="btn btn-secondary btn-pill">Read More</a>
							</div>
						</div>
						<div className="col-lg-4 mb-5 mb-lg-0 text-center">
							<h2 className="mb-md-4 mt-3">Our Solution</h2>
							<Accordion>
								<Accordion.Item eventKey="0">
									<Accordion.Header> 	 TAXATION & CORPORATE CONSULTANCY</Accordion.Header>
									<Accordion.Body>


										<p>• Income Tax</p>
										<p>• GST</p>
										<p>• Company affair</p>
										<p>• Import / Export</p>



									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>ADVISORY</Accordion.Header>
									<Accordion.Body>
										<p>• Development of Management system & Audit</p>
										<p>• Development of Accounting system & Evaluation</p>
										<p>• To select/advice Agri-business-Government Subsidy/Grant available</p>

									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>FINANCE</Accordion.Header>
									<Accordion.Body>
										<p>• Long Term / Short Term/ Personal Loan</p>
										<p>• Finance against securities & immovable assets</p>
										<p>• Commodity Finance for your needs</p>
										<p>• Finance against securities & immovable assets</p>
										<p>• Loans for Agricultural Business/Dairy and support in getting Subsidy/Grant from Government</p>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>INVESTMENT</Accordion.Header>
									<Accordion.Body>
										<p>• Joint Ventures</p>
										<p>• Mutual Funds</p>
										<p>• Insurance</p>
										<p>• Equity & Debts</p>
										<p>• Crop Investment</p>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>







						</div>
						<div className="col-lg-4 mb-5 mb-lg-0 text-center" >
							<h2 className="mb-md-4 mt-3">Our Solution</h2>
							<h6>Taxation & Corporate Consultancy</h6>
							<div className="progress pb-sm">

								<div className="progress-bar progress-bar-red" role="progressbar" aria-valuenow="40" aria-valuemin="0"
									aria-valuemax="100" >
									<span className="sr-only">40% Complete (success)</span>
								</div>
							</div>
							<h6>Advisory</h6>
							<div className="progress pb-sm">
								<div className="progress-bar progress-bar-green" role="progressbar" aria-valuenow="60" aria-valuemin="0"
									aria-valuemax="100" >
									<span className="sr-only">40% Complete (success)</span>
								</div>
							</div>
							<h6>Finance</h6>
							<div className="progress pb-sm">
								<div className="progress-bar progress-bar-lblue" role="progressbar" aria-valuenow="80" aria-valuemin="0"
									aria-valuemax="100">
									<span className="sr-only">40% Complete (success)</span>
								</div>
							</div>
							<h6>Investment</h6>
							<div className="progress pb-sm">
								<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="30" aria-valuemin="0"
									aria-valuemax="100" >
									<span className="sr-only">40% Complete (success)</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-light">
				<div className="row justify-content-md-center text-center">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h1 className="mb-md-4" >Customer speaks</h1>
								<p className="lead text-muted">Coming Soon...</p>

								<div className="mt-md-5">
									<a href="#" class="btn btn-secondary btn-pill">Read the story</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}
