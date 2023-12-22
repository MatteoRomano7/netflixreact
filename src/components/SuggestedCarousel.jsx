import React, { useState, useEffect } from "react"
import { Carousel } from "react-bootstrap"
import axios from "axios"

const SuggestedCarousel = () => {
  const [carouselData, setCarouselData] = useState([])

  useEffect(() => {
    // Effettua la richiesta all'API
    axios
      .get("http://www.omdbapi.com/?i=tt3896198&apikey=d163d1bb&s=X-Men")
      .then((response) => {
        // Imposta i dati ottenuti dal server nello stato
        setCarouselData(response.data.Search)
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error)
      })
  }, [])

  const images = carouselData.map((item) => item.Poster)

  return (
    <div className="movie-gallery mx-md-5 mb-5 mt-4">
      <h5 className="text-light mt-2 mb-2">X-Men</h5>
      <Carousel id="trending-now" controls={false}>
        <Carousel.Item>
          <div className="movie-row">
            <div className="row g-1 ">
              {images.slice(0, 5).map((image, index) => (
                <div className="col-md-2 mx-3 my-3" key={index}>
                  <img
                    className="copertinafilm"
                    src={image}
                    alt={`Media ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="movie-row">
            <div className="row g-1 ">
              {images.slice(5, 10).map((image, index) => (
                <div className="col-md-2 mx-3 my-3 " key={index}>
                  <img
                    className="copertinafilm"
                    src={image}
                    alt={`Media ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default SuggestedCarousel
