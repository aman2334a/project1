import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function AboutTemplate() {
	const now = 60;
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
			<section>
				<div className="container">
					<div className="row justify-content-md-between align-items-center">
						{/* <div class="col-md-4 text-center">
				<img src="assets/img/services/7.svg" class="w-100 text-dark pr-5" width="80px" alt="" />
			</div> */}
						<div class="col-md-7">
							<div class="row">
								<div class="col-md-12">
									<div class="d-flex mb-md-5 rounded-md justify-content-md-between align-items-center">
										<img src="assets/img/services/4.svg" class="display-4 text-dark pr-5" width="120px"
											alt="" />
										<div>
											<h5 class="mb-2">Mission</h5>
											<p class="text-muted">To provide excellent services in the field of Finance, Taxation, Agriculture, Investment and Advisory to enhance wealth. Thereafter, boosting the career opportunities overall. </p>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="d-flex mb-md-5 rounded-md justify-content-md-between align-items-center">
										<img src="assets/img/services/6.svg" class="display-4 text-dark pr-5" width="120px"
											alt="" />
										<div>
											<h5 class="mb-2">Vision</h5>
											<p class="text-muted">Integrity.Honesty.Transparency.Trustworthiness.Accountability.Customer Experience.</p>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="d-flex mb-md-5 rounded-md justify-content-md-between align-items-center">
										<img src="assets/img/services/3.svg" class="display-4 text-dark pr-5" width="120px"
											alt="" />
										<div>
											<h5 class="mb-2">Values</h5>
											<p class="text-muted">Integrity.Honesty.Transparency.Trustworthiness.Accountability.Customer Experience.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
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
			<section class="wt-section">
				<div className="container">
				<div class="row">
					<div class="col-lg-4 mb-5 mb-lg-0 text-center">
						<h2 class="mb-md-4 mt-3">Why Choose Us?</h2>
						<p class="text-muted">One stop for all your Taxation, Investment and Advisory related needs. Expert guidance and support on all your queries and issues.</p>
						<div class="mb-md-5 mb-4">
							<a href="#" class="btn btn-primary btn-pill">Read More</a>
						</div>
					</div>
					<div class="col-lg-4 mb-5 mb-lg-0 text-center">
						<h2 class="mb-md-4 mt-3">Our Solution</h2>




						<div id="accordion">

							<div class="card">

								<div class="card-header">
									<a class="collapsed card-link" data-toggle="collapse" href="#collapseOne-alt3">
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
					<div class="col-lg-4 mb-5 mb-lg-0 text-center" >
						<h2 class="mb-md-4 mt-3">Our Solution</h2>
						<h6>Taxation & Corporate Consultancy</h6>
						<div class="progress pb-sm">

							<div class="progress-bar progress-bar-red" role="progressbar" aria-valuenow="40" aria-valuemin="0"
								aria-valuemax="100" >
								<span class="sr-only">40% Complete (success)</span>
							</div>
						</div>
						<h6>Advisory</h6>
						<div class="progress pb-sm">
							<div class="progress-bar progress-bar-green" role="progressbar" aria-valuenow="60" aria-valuemin="0"
								aria-valuemax="100" >
								<span class="sr-only">40% Complete (success)</span>
							</div>
						</div>
						<h6>Finance</h6>
						<div class="progress pb-sm">
							<div class="progress-bar progress-bar-lblue" role="progressbar" aria-valuenow="80" aria-valuemin="0"
								aria-valuemax="100">
								<span class="sr-only">40% Complete (success)</span>
							</div>
						</div>
						<h6>Investment</h6>
						<div class="progress pb-sm">
							<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="30" aria-valuemin="0"
								aria-valuemax="100" >
								<span class="sr-only">40% Complete (success)</span>
							</div>
						</div>
					</div>
				</div>
				</div>
			</section>
			<div class="row justify-content-md-center text-center">
				<div className="container">
					<div class="col-md-12">
						<h1 class="mb-md-4" >Customer speaks</h1>
						<p class="lead text-muted">Coming Soon...</p>

						<div class="">
							<a href="#" class="btn btn-primary btn-pill btn-theme">Read the story</a>
						</div>
					</div>
				</div>
			</div>

		</>
	);
}
