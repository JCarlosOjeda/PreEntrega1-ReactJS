const Carousel = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={"./img/otoño.jpg"} className="d-block w-100" alt="otoño" />
              </div>
              <div className="carousel-item">
                <img src={"./img/macetapintadamano.jpg"} className="d-block w-100" alt="pintada" />
              </div>
              <div className="carousel-item">
                <img src={"./img/mensaje1.png"} className="d-block w-100" alt="mensaje1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel;