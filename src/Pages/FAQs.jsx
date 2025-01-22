import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { FAQdata } from "../Data/FAQ";

export default function FAQ() {
    return (
        <>
            <Header />

            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="accordion" id="accordionExample">
                            {
                                FAQdata.map(item => {
                                    return (
                                        <>
                                            <div className="accordion-item mb-3">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true" aria-controls={`collapse${item.id}`}>
                                                        {item.question}
                                                    </button>
                                                </h2>
                                                <div id={`collapse${item.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">{item.answer}</div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}