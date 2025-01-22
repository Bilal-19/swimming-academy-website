import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { GalleryImages } from "../Data/GalleryImages";

export default function Gallery() {
    return (
        <>
            <Header />

            {/* Main Content */}
            <div className="container-fluid">
                <div className="row m-4">
                    <div className="col-md-11 mx-auto">
                        <div id="carouselExample" className="carousel slide">
                            <div class="carousel-inner">
                                <div className="carousel-inner">
                                    {GalleryImages.map((image, index) => (
                                        <div key={image.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                            <img
                                                src={image.imgURL}
                                                className="d-block w-100 carousel-img"
                                                alt={image.imgCaption}
                                            />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>{image.imgCaption}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}