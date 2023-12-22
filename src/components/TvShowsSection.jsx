import React from "react"
import { Container, Row, Col, Dropdown } from "react-bootstrap"

const TVShowsSection = () => {
  return (
    <div className="m-5">
      <div className="contenitoriFilm my-5 py-5 text-white">
        <div className="d-inline">
          <h2>TV Shows </h2>
          <Dropdown>
            <Dropdown.Toggle
              variant="dark"
              id="triggerId"
              className="border border-light"
            >
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Comedy</Dropdown.Item>
              <Dropdown.Item>Horror</Dropdown.Item>
              <Dropdown.Item>Romantic</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default TVShowsSection
