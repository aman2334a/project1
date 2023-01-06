import React from 'react'

export default function HotOffer() {
  return (
    <div>
      <section>
        <div className="container hotOffer">

          <div className='form-section'>
            <p>Hot Offer Schemes</p>

            <div class="contact-form ">
              <form id="contact-form" role="form" novalidate="novalidate">
                <div class="feedback">
                  <label for="name">Name*</label>
                  <input type="text" class="form-control" id="name" name="name" placeholder=""></input></div>

                <div class="feedback">
                  <label for="message">Message*</label>
                  <textarea class="form-control" rows="6" id="message" name="message"
                    placeholder=""></textarea>

                </div>
                <button className='btn btn-primary' >Submit</button>
              </form>
            </div>
          </div>
        </div>


      </section>
    </div>
  )
}
