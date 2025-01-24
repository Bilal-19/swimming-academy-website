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

                <div class="row mt-3 mb-3 text-center">
                    <h3>Dive Into Our World</h3>
                    <p>
                        Experience the highlights of our swimming academy through pictures.
                    </p>
                </div>

                <div class="row">
                    <div class="col-md-8 mx-auto text-center">
                        <p className="mb-0">
                            From our state-of-the-art facilities to our engaging training sessions and memorable events, our gallery captures the spirit of Aqua Venture Swimming Academy. Take a glimpse into the moments that make us proud – the smiles, the achievements, and the passion for swimming that brings us together.
                        </p>
                    </div>
                </div>

                <div className="row m-4">
                    <div className="col-md-11 mx-auto">
                        <div id="carouselExample" class="carousel slide">
                            <div className="carousel-inner">
                                {GalleryImages.map((value, index) => (
                                    <div key={value.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                        <img src={value.imgURL} className="d-block w-100 carousel-img" alt={value.imgCaption} />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{value.imgCaption}</h5>
                                        </div>
                                    </div>
                                ))}
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