import React from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"
import Header from "../components/header"

class MyForm extends React.Component {
  render() {
    return (
      <div className="container" id="content">
        <Header />
        <Form
          action="https://gmail.us20.list-manage.com/subscribe/post?u=995aa50fd2688157f82a15dea&amp;id=056dcf9d20"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <FormGroup controlId="formBasicEmail">
            <Label>Email address</Label>
            <Input type="email" placeholder="Enter email" />
          </FormGroup>

          <FormGroup controlId="firstname">
            <Label for="mce-FNAME">First Name</Label>
            <Input
              type="text"
              value=""
              name="FNAME"
              class="required"
              id="mce-FNAME"
            />
          </FormGroup>

          <FormGroup controlId="lastname">
            <Label for="mce-LNAME">Last Name</Label>
            <Input
              type="text"
              value=""
              name="LNAME"
              class="required"
              id="mce-LNAME"
            />
          </FormGroup>

          <FormGroup controlId="twitter">
            <Label for="mce-MMERGE3">Twitter handle</Label>
            <Input
              type="text"
              value=""
              name="MMERGE3"
              class="required"
              id="mce-MMERGE3"
            />
          </FormGroup>

          <FormGroup controlId="twitter">
            <Label for="mce-phone">Phone number</Label>
            <Input
              type="text"
              value=""
              name="phone"
              class="required"
              id="mce-phone"
            />
          </FormGroup>

          <FormGroup controlId="submit">
            <Input
              type="text"
              name="b_995aa50fd2688157f82a15dea_056dcf9d20"
              tabindex="-1"
              value=""
            />
            <Input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
            .
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default MyForm
