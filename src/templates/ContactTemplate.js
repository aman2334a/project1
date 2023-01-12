import React from "react";
export default function ContactTemplate() {
	return (
		<>
			<section>
				<div className="container">
					<div className="row">
						<div class="col-lg-4 mb-5 mb-lg-0 text-center">
							<div class="contactIcons text-primary mb-2">

							</div>
							<h3 class="h5">Address</h3>
							<p class="mb-0">#402, Bijith Tower
								Babusapaliya, Bangalore, KA 560043 IN</p>
						</div>
						<div class="col-lg-4 mb-5 mb-lg-0 text-center">
							<div class="contactIcons text-primary mb-2">

							</div>
							<h3 class="h5">Phone Number</h3>
							<p class="mb-0">+91-7204443000</p>
						</div>
						<div class="col-lg-4 mb-5 mb-lg-0 text-center">
							<div class="contactIcons text-primary mb-2">

							</div>
							<h3 class="h5">Email</h3>
							<p class="mb-0">support@fintaxcial.com</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 mb-5 mb-lg-0">
							<p>Please fill the details for enquiry and details.</p>

							<div class="contact-form">
								<form id="contact-form" role="form" novalidate="novalidate">
									<div class="form-group has-feedback">
										<label htmlFor="name">Name*</label>
										<input type="text" class="form-control" id="name" name="name" placeholder=""></input></div>
									<div class="form-group has-feedback">
										<label htmlFor="email">Email*</label>
										<input type="email" class="form-control" id="email" name="email" placeholder="" />

									</div>
									<div class="form-group has-feedback">
										<label htmlFor="subject">Subject*</label>
										<input type="text" class="form-control" id="subject" name="subject" placeholder="" />

									</div>
									<div class="form-group has-feedback">
										<label htmlFor="message">Message*</label>
										<textarea class="form-control" rows="2" id="message" name="message"
											placeholder=""></textarea>

									</div>
									<input type="submit" value="Submit" class="btn btn-pill btn-outline-primary mt-3" />
								</form>
							</div>
						</div>
						<div class="col-lg-6 mb-5 mb-lg-0">
							<p>Rather than just filling out a form, taxAdvice also offers help to the user with links directing
								them to find additional information or take popular actions. They’ve also taken special care to
								add social proof, featuring trusted logos.
							</p>
							<br />
							<p><b>Go for it, don’t hesitate to include a next step on your contact us page. You have their
								attention, use it to guide them further down your funnel! </b></p>
							<br />
							<p>Telephone: +91-7204443000<br />
								FAX: +1 234 199 9898<br />
								E-mail: <a href="mailto:info@sitename.org">mail@fintaxcial.com</a>
							</p>

						</div>
					</div>
				</div>
			</section>


		</>

	)
}