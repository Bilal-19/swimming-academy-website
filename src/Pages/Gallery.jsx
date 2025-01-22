import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"

export default function Gallery() {
    return (
        <>
            <Header />

            {/* Main Content */}
            <div className="container-fluid">
                <div className="row m-4">
                    <div className="col-md-11 mx-auto">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="/IndoorSwimmingPool.jpg" class="d-block w-100 carousel-img" alt="Indoor Swimming Pool with Diving Boards" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Indoor Swimming Pool</h5>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <img src="/KidsLearningSwimming.jpg" class="d-block w-100 carousel-img" alt="Kids Learning to Swim in a Pool with a Trainer" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Kids Learning to Swim in a Pool with a Trainer</h5>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <img src="/StrokeTechniques.jpg" class="d-block w-100 carousel-img" alt="Swimming Coach Teaching Stroke Techniques" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Swimming Coach Teaching Stroke Techniques</h5>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <img src="/PracticingFreestyleSwimming.jpg" class="d-block w-100 carousel-img" alt="Group of Teenagers Practicing Freestyle Swimming" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Group of Teenagers Practicing Freestyle Swimming</h5>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <img src="/Lifeguard.jpg" class="d-block w-100 carousel-img" alt="Adult Beginners in a Swim Class with a Lifeguard" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Adult Beginners in a Swim Class with a Lifeguard</h5>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <img src="/CompetitiveSwimmers.jpg" class="d-block w-100 carousel-img" alt="Competitive Swimmers at the Starting Blocks" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Competitive Swimmers at the Starting Blocks</h5>
                                    </div>
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