const Carousel = () => {
  return (
    <div className="container">
      <div className="row justify-content-center p-5">
        <div className="col-sm-6">
          <div id="carouselExampleFade" className="carousel slide carousel-fade carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner"> 
              <div className="carousel-item active">
                <img src={"./img/mensaje1.png"} className="d-block" alt="mensaje1" style={{ width: "500px" }} />
              </div>
              <div className="carousel-item">
                <img src={"./img/mosaico.png"} className="d-block" alt="pintada" style={{ width: "500px" }} />
              </div>
              <div className="carousel-item">
                <img src={"./img/macetapintadamano.jpg"} className="d-block" alt="pintada" style={{ width: "500px" }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel;