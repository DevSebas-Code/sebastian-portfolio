import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  buildUrl = (name, subject, message, email) => {
    const phoneNumber = "353874292870";

    const wspUrl = `https://api.whatsapp.com/send?phone=
    ${phoneNumber}&text=Hi%20I'm%20${name}%20and%20my%20reason%20to%20contact%20you%20is%20${subject}%20.%20Here's%20a%20little%20description%20about%20my%20requirement:%20 ${message}%20Here's%20my%20email:%20${email}`;

    return wspUrl;
  };

  handleSubmit = (event) => {
    const contactUrl = this.buildUrl(
      this.state.contactName,
      this.state.contactSubject,
      this.state.contactMessage,
      this.state.contactEmail
    );

    console.log("contactUrl: ", contactUrl);

    window.open(contactUrl, "_blank");
    event.preventDefault();
  };

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form
                id="contactForm"
                name="contactForm"
                onSubmit={this.handleSubmit}
              >
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      value={this.state.contactName}
                      type="text"
                      size="35"
                      name="contactName"
                      onChange={this.handleChange}
                      required={true}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      value={this.state.contactEmail}
                      type="text"
                      size="35"
                      name="contactEmail"
                      onChange={this.handleChange}
                      required={true}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      value={this.state.contactSubject}
                      type="text"
                      size="35"
                      name="contactSubject"
                      onChange={this.handleChange}
                      required={true}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      value={this.state.contactMessage}
                      cols="50"
                      rows="15"
                      name="contactMessage"
                      onChange={this.handleChange}
                      required={true}
                    ></textarea>
                  </div>

                  <div>
                    <button type="submit" value="Submit" className="submit">
                      Submit
                    </button>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

              <div className="widget widget_tweets">
                <h4 className="widget-title">
                  I would be glad to help you with your project!
                </h4>
                <ul id="twitter">
                  <li>
                    <span>
                      You can contact me; I would be pleased to have a
                      conversation with you.
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
