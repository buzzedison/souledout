import React from "react"
import Figure from "react-bootstrap/Figure"
import awtozer from "../images/awtozer.jpg"
const TopHeader = props => {
  return (
    <div>
      <Figure fluid>
        <Figure.Image
          width={1400}
          height={450}
          alt="background"
          src={awtozer}
        />
      </Figure>
    </div>
  )
}

export default TopHeader
