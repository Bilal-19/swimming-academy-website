import React from "react";

export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-deep-blue text-white">
                <div className="row">
                    <div className="col-md-3 d-flex flex-column mb-3 mt-3">
                        <a>Home</a>
                        <a>About</a>
                        <a>Programs</a>
                        <a>Gallery</a>
                        <a>Testimonials</a>
                        <a>FAQs</a>
                        <a>Contact Us</a>
                    </div>

                    <div className="col-md-3 d-flex flex-column mb-3 mt-3">
                        <a>0308-2491543</a>
                        <a>info@aquaventure.com</a>
                        <p>Karachi, Pakistan</p>
                    </div>
                </div>

                <div className="row text-center">
                    <p>Designed & Developed by <a href="https://bilal-19.github.io/portfolio/" target="_blank" className="text-decoration-none text-white">Bilal Muhammad Yousuf</a> </p>
                </div>
            </div>
        </>
    );
}
