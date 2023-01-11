import React,{useEffect}from 'react'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from 'react-bootstrap/Button';





export default function HomeTemplate() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
       
        <>
        

            <section data-aos="fade-right">
                <div className='container Home'>
                    <div className='services'>
                    <div className='item'data-aos="slide-up">
  
                        <h2 className='mb-md-4 '>
                            Our Premium Services
                        </h2>
                        <p className='lead text-muted'>
                            We are group of senior qualified professionals in their fields. We support the demand of corporate sector, Agriculture Sector, individuals & other sectors to meet out their needs with hassle free systems. Our team includes the Finance, Taxation and Investments
                        </p>
                        </div>
                        
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 mb-5 mb-lg-0 text-center'>
                            <div className='serviceCard'>
                                <div className='servicesImages'>
                                    <img src='assets/img/services/1.svg'width="80px" />
                                </div>
                                <h4>Taxation & Corporate Consultancy</h4>
                                <p>Get the Expert services for Filing, Planning and Consultancy for Income tax and GST Returns.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 mb-5 mb-lg-0 text-center'>
                            <div className='serviceCard'>
                                <div className='servicesImages'>
                                    <img src='assets/img/services/3.svg'width="80px" />
                                </div>
                                <h4>Finance</h4>
                                <p>Finance helps in Preparation of CMA with Complete Project Report and Loans Disbursement.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 mb-5 mb-lg-0 text-center'>
                            <div className='serviceCard'>
                                <div className='servicesImages'>
                                    <img src='assets/img/services/5.svg'width="80px" />
                                </div>
                                <h4>Investment</h4>
                                <p>Get the Expert Services for Mutual Funds/Insurance, Investment, Stock and Commodity Market.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 mb-5 mb-lg-0 text-center'>
                            <div className='serviceCard'>
                                <div className='servicesImages'>
                                    <img src='assets/img/services/2.svg'width="80px" />
                                </div>
                                <h4>Advisory</h4>
                                <p>Get the Expert Advisory on Audit and Accounting as per the GST, Income Tax Act and Companies Act.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='wt-section bg-light solutionSection'>
                <div className='container'>
                    <div className='row justify-content-md-center text-center'>
                        <h1 className='mb-md-4'>
                            Get all type of Solutions
                        </h1>
                        <p className='lead text-muted'>
                            Finance, Taxation, Investment, Advisory Consulting services
                        </p>
                    </div>

                </div>
            </section>
            <section className='wt-section ChooseUsSection' >
                <div className='container'>
                    <div className='row justify-content-md-center align-items-center text-center'>
                        <div className='col-lg-6 mb-5 mb-lg-0 text-center' data-aos="fade-right">

                        <h2 className="mb-md-4 mt-3">Why Choose Us?</h2>
                            <p className="text-muted">We are a technology company provides common platform for arranging finance (Industrial/ Commercial/ Agri business), Taxation, Investment opportunities, development of management system &amp; Audits. Our mission is to provide hassle free and solution oriented services. Our team includes experienced and dynamic professionals, providing guidance and services to client. </p>
                        </div>
                        <div className='col-lg-6 mb-5 mb-lg-0 text-center' data-aos="fade-left">
                            <img  style={{width:"100%"}}src='./assets/img/intro/team.jpg' className='rounded mw-100'/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='requestQuote'>

                <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h3 className='mb-1'>
                        Get best expert advice for your Finance, Taxation and Investments related Queries.
                        </h3>
                        <p className='quote_text'>click here</p>
                    </div>
                    <div className='col-md-4 text-lg-right mt-md-0 mt-3 requestQuoteLink'>
                    <Button variant="primary" size="lg" className="button btn btn-primary btn-lg request-btn">
        Request Quote
      </Button>
                    </div>
                </div>
                </div>
            </section>
            <section >
                <div className='container'>
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-md-5'>
                            <h2 className='mb-4'>
                            We are Expert in Finance, Taxation, Investment, Advisory Consulting services.
                            </h2>
                            <NavLink to={'/about'}>Click here for details...</NavLink>
                        </div>
                        <div className='col-md-6'>
                            <img style={{width:"100%"}} src='./assets/img/intro/img-woman-1.jpg'/>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
