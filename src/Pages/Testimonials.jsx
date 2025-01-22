import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { FeedbackData } from "../Data/FeedbackObject";

export default function Testimonials() {
    return (
        <>
            <Header />

            <div class="container-fluid">
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