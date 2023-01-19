import React,{useState} from "react";
import { submitContact } from "../Services/userServices/service";
import { useToasts } from "react-toast-notifications";

export default function ContactTemplate() {
  const { addToast } = useToasts();
  const [inputData, setInputData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    message:'',
    subject:''
  })
  const handleChange=(key,value)=>{
    let tmp={...inputData}
    tmp[key]=value
    setInputData({...tmp})

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(inputData)
    submitContact(inputData)
    .then((res)=>{
      addToast("successfully Submitted", { appearance: "success" })
      let tmp={
        firstname:'',
        lastname:'',
        email:'',
        message:'',
        subject:''
      }
      setInputData({...tmp})
    })
    .catch((e)=>{
      if(e.response?.status==400){
        addToast(e?.response?.data, { appearance: "error" })
      }else{
        addToast("Something went wrong", { appearance: "error" })
      }
    })

  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <p className="contact-txt text-center">
              Rather than just filling out a form, taxAdvice also offers help to
              the user with links directing them to find additional information
              or take popular actions. They’ve also taken special care to add
              social proof, featuring trusted logos.
            </p>
          </div>
        </div>
        <div className="contact__wrapper shadow-lg mt-n9">
          <div className="row no-gutters">
					<div className="col-md-6 contact-form__wrapper p-5 order-lg-1">
              <p>Please fill the details for enquiry and details.</p>

              <form
                action="#"
                className="contact-form form-validate"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <div className="form-group">
                      <label className="required-field" for="firstName">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={inputData.firstname}
                        onChange={(e)=>{
                          handleChange('firstname',e.target.value)
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={inputData.lastname}
                        onChange={(e)=>{
                          handleChange('lastname',e.target.value)
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6 mb-3">
                    <div className="form-group">
                      <label className="required-field" for="email">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={inputData.email}
                        onChange={(e)=>{
                          handleChange('email',e.target.value)
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="phone">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        value={inputData.subject}
                        name="subject"
                        onChange={(e)=>{
                          handleChange('subject',e.target.value)
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-sm-12 mb-3">
                    <div class="form-group">
                      <label className="required-field" for="message">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={inputData.message}
                        rows="4"
                        onChange={(e)=>{
                          handleChange('message',e.target.value)
                        }}
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-sm-12 mb-3">
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-primary submit_btn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
              <h3 className="color--white mb-5">Get in Touch</h3>

              <ul className="contact-info__list list-style--none position-relative z-index-101">
                <li className="mb-4 pl-4">
                  <span className="position-absolute">
                    <i className="fas fa-envelope"></i>
                  </span>{" "}
                  mail@fintaxcial.com
                </li>
                <li class="mb-4 pl-4">
                  <span className="position-absolute">
                    <i className="fas fa-phone"></i>
                  </span>{" "}
                  +91-7204443000
                </li>
                <li class="mb-4 pl-4">
                  <span className="position-absolute">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>{" "}
                  #402, Bijith Tower
                  <br /> Babusapaliya, Bangalore, KA 560043 IN
                </li>
              </ul>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}
