import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { FeedbackData } from "../Data/FeedbackObject";

export default function Testimonials() {
    return (
        <>
            <Header />

            <div class="container-fluid">

                <div class="row mt-3 mb-3 text-center">
                    <h3>What Our Swimmers Say</h3>
                    <p>
                        Hear from our students and parents about their experience at Aqua Venture Swimming Academy
                    </p>
                </div>

                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <p className="mb-0">
                            <img src="/open.png" alt="" style={{ height: "20px", marginRight: "10px" }} />
                            Our goal is to create a positive and enriching experience for every swimmer. From beginners taking their first strokes to advanced athletes perfecting their techniques, we’ve had the privilege of helping countless individuals achieve their swimming goals. Here’s what some of our students and their families have to say about their journey with us.
                            <img src="/close.png" alt="" style={{ height: "20px", marginLeft: "10px" }} />
                        </p>
                    </div>
                </div>
                <div class="row">
                    {FeedbackData.map((value, index) => {
                        return (
                            <>
                                <div class="col-md-3 user-review-card shadow">
                                    <p>
                                        <img src="open.png" alt="" className="mx-2 img-fluid" />
                                        {value.message}
                                        <img src="close.png" alt="" className="mx-2 img-fluid close" />
                                    </p>

                                    <p>~ {value.reviewerName}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

            <Footer />
        </>
    )
}