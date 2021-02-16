import React from "react";

function Contact(props) {
  return (
    <div className="w-100 odd">
      <section className="container">
        <div className="row mt-4">
          <div className="col-md-7">
            <form className="form-group">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <input
                    type="text"
                    className="form-control w-100"
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    tabIndex="1"
                    required
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <input
                    type="text"
                    className="form-control w-100"
                    id="email"
                    name="email"
                    placeholder="Enter Mail"
                    tabIndex="1"
                    required
                  />
                </div>
              </div>
              <textarea
                className="w-100 mt-4 text-muted"
                style={{ height: "150px", border: "2px solid #d9d9d9" }}
              />
              <button
                type="button"
                className="btn btn-block btn-danger  action-btn w-100 mt-2"
              >
                Send Your Message Now
              </button>
            </form>
          </div>

          <div className="col-md-5">
            <div className="col">
              <div className="row">
                <div className="col d-flex justify-content-end pt-4">
                  <i className="big text-danger map marker alternate icon"></i>
                </div>
                <div className="col-9">
                  <h4>Address</h4>
                  <p className="text-muted">
                    123 Awesome new Street, Havilton avenue, NY
                  </p>
                </div>
              </div>
            </div>

            <div className="col mt-2 mt-xl-4">
              <div className="row">
                <div className="col d-flex justify-content-end pt-4">
                  <i className="big text-danger envelope open outline icon"></i>
                </div>
                <div className="col-9">
                  <h4>Contact</h4>
                  <p className="text-muted">
                    Tel : 012-3456-7890
                    <br />
                    Email : charityo@yourmail.com
                    <br />
                    Web : https://yourdomain.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
