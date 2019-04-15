import React from "react"
import Form from "react-bootstrap"

class MyForm extends React.Component {
  render() {
    return (
      <div className="container" id="content">
        <Form
          action="https://gmail.us20.list-manage.com/subscribe/post?u=995aa50fd2688157f82a15dea&amp;id=056dcf9d20"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <h2>RSVP TO THE EASTER HANGOUT</h2>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="firstname">
            <Form.label for="mce-FNAME">First Name</Form.label>
            <Form.Control
              type="text"
              value=""
              name="FNAME"
              class="required"
              id="mce-FNAME"
            />
          </Form.Group>

          <Form.Group controlId="lastname">
            <Form.label for="mce-LNAME">First Name</Form.label>
            <Form.Control
              type="text"
              value=""
              name="LNAME"
              class="required"
              id="mce-LNAME"
            />
          </Form.Group>

          <Form.Group controlId="twitter">
            <Form.label for="mce-MMERGE3">Twitter handle</Form.label>
            <Form.Control
              type="text"
              value=""
              name="MMERGE3"
              class="required"
              id="mce-MMERGE3"
            />
          </Form.Group>

          <Form.Group controlId="twitter">
            <Form.label for="mce-phone">Phone number</Form.label>
            <Form.Control
              type="text"
              value=""
              name="phone"
              class="required"
              id="mce-phone"
            />
          </Form.Group>

          <Form.Group controlId="submit">
            <Form.Control
              type="text"
              name="b_995aa50fd2688157f82a15dea_056dcf9d20"
              tabindex="-1"
              value=""
            />
            <Form.Control
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
            />
            .
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default MyForm
