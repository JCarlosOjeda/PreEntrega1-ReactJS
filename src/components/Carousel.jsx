const Carousel = () => {
  return (
    <div className="container">
      <div className="row justify-content-center p-5">
        <div className="col-auto">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={"./img/otoño.jpg"} className="d-block" alt="otoño" style={{ width: "500px" }} />
              </div>
              <div className="carousel-item">
                <img src={"./img/macetapintadamano.jpg"} className="d-block" alt="pintada" style={{ width: "500px" }} />
              </div>
              <div className="carousel-item">
                <img src={"./img/mensaje1.png"} className="d-block" alt="mensaje1" style={{ width: "500px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel;