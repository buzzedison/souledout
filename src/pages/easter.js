import React from "react"
import { Form, Input, Row, Col, Button, Container } from "react-bootstrap"
import Layout from "../components/layout"
import NetlifyForm from "react-netlify-form"
import easter from "../images/easter.jpg"
class MyForm extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Row className="container" id="coontent">
            <Col m={4}>
              <h2>Easter Hangout 2019</h2>
              <img src={easter} alt="easter" />
              <Col m={8}>
                <NetlifyForm name="easter hangout" onSubmit={this.handleSubmit}>
                  {({ loading, error, success }) => (
                    <div>
                      {loading && <div>Loading...</div>}
                      {error && (
                        <div>
                          Your information was not sent. Please try again later.
                        </div>
                      )}
                      {success && <div>Thank you for contacting us!</div>}
                      {!loading && !success && (
                        <div>
                          <Form.Group controlId="contact">
                            <input
                              type="hidden"
                              name="contact"
                              value="contact"
                            />
                          </Form.Group>
                          <Form.Group controlId="formfirstname">
                            <Form.Control
                              name="firstname"
                              placeholder="First name"
                              onChange={this.handleChange}
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a first name.
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group controlId="formlastname">
                            <Form.Control
                              name="lastname"
                              placeholder="Last name"
                              onChange={this.handleChange}
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a last name.
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Enter email"
                              onChange={this.handleChange}
                              required
                            />
                          </Form.Group>

                          <Form.Group controlId="formPhoneNumber">
                            <Form.Control
                              type="text"
                              name="phone_num"
                              placeholder="Enter your mobile number"
                              onChange={this.handleChange}
                              required
                            />
                          </Form.Group>
                          <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>
                              <strong>What do you expect at the event? </strong>
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              rows="3"
                              name="message"
                              onChange={this.handleChange}
                              required
                            />
                          </Form.Group>
                          <Form.Control.Feedback type="invalid">
                            Please tell us why you want to attend the boot camp.
                          </Form.Control.Feedback>
                          <Button variant="danger" type="submit">
                            Submit
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </NetlifyForm>
              </Col>
            </Col>
          </Row>
        </Layout>
      </div>
    )
  }
}

export default MyForm
