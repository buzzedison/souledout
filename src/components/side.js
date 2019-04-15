import React from "react"
import { Card, CardDeck } from "react-bootstrap"
import bible from "../images/bibletwitter.jpg"
import easter from "../images/easter.jpg"
import king from "../images/kingdom.png"
import { Link } from "gatsby"

class Side extends React.Component {
  render() {
    return (
      <div class="container" id="content">
        <CardDeck>
          <Card border="0">
            <Card.Img variant="top" src={bible} />
            <Card.Body>
              <Card.Title>
                <strong>Bible Before Breakfast</strong>
              </Card.Title>
              <Card.Text>
                There is no substitute for spending time with God. I promise
                spending time with God is the best decision you will ever make.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="0">
            <Card.Img variant="top" src={easter} />
            <Card.Body>
              <Card.Title>
                <strong>Easter Hangout</strong>
              </Card.Title>
              <Card.Text>
                Join us on Easter Monday. All day party. Free food, drinks,
                games, speed dating, babeque, and great conversations.
                <Link to="/easter">
                  {" "}
                  <strong>RSVP Now!!</strong> <hr />
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="0">
            <Card.Img variant="top" src={king} />
            <Card.Body>
              <Card.Title>
                <strong>Kingdom Culture</strong>
              </Card.Title>
              <Card.Text>
                We are ambassadors of Christ. The Earth is waiting for the
                manifestation of the Children of God. How can we impact every
                facet of human endeavor. Our first conference is happening on
                the 1st of June, 2019 in Accra.
                <hr />
                <Link to="/kingdom">
                  {" "}
                  <strong>Find out more</strong> <hr />
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    )
  }
}

export default Side
