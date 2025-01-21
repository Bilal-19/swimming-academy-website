import React from "react";

export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-deep-blue text-white">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column mb-3 mt-3">
                        <a>Home</a>
                        <a>About</a>
                        <a>Programs</a>
                        <a>Gallery</a>
                        <a>Testimonials</a>
                        <a>FAQs</a>
                        <a>Contact Us</a>
                    </div>

                    <div className="col-md-4 d-flex flex-column mb-3 mt-3">
                        <a>0308-2491543</a>
                        <a>info@aquaventure.com</a>
                        <p>Karachi, Pakistan</p>
                    </div>

                    <div className="col-md-4 d-flex flex-column mb-3 mt-3">
                        <h5>Subscribe Our Newsletter</h5>
                        <form>
                            <input type="email" class="form-control" required placeholder="Enter your email"/>
                            <button className="btn btn-primary mt-2">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="row text-center">
                    <p>Designed & Developed by <a href="https://bilal-19.github.io/portfolio/" target="_blank" className="text-decoration-none text-white">Bilal Muhammad Yousuf</a> </p>
                </div>
            </div>
        </>
    );
}
