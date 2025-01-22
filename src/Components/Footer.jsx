import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-deep-blue text-white">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column mb-3 mt-3">
                        <Link className="text-white text-decoration-none" to="/">Home</Link>
                        <Link className="text-white text-decoration-none" to="/about">About</Link>
                        <Link className="text-white text-decoration-none" to="/programs">Programs</Link>
                        <Link className="text-white text-decoration-none" to="/gallery">Gallery</Link>
                        <Link className="text-white text-decoration-none" to="/testimonials">Testimonials</Link>
                        <Link className="text-white text-decoration-none" to="/faqs">FAQs</Link>
                        <Link className="text-white text-decoration-none" to="/contact">Contact Us</Link>
                    </div>

                    <div className="col-md-4 d-flex flex-column mb-3 mt-3">
                    <p className="mb-0"><i class="fa-solid fa-location-dot"></i> Aqua Ventures, Karachi</p>
                        <p className="mb-0"><i class="fa-solid fa-envelope"></i> info@aquaventures.com</p>
                        <p className="mb-0"><i class="fa-solid fa-phone"></i> 0342-7634247</p>
                    </div>

                    <div className="col-md-4 d-flex flex-column mb-3 mt-3">
                        <h5>Subscribe Our Newsletter</h5>
                        <form>
                            <input type="email" class="form-control" required placeholder="Enter your email"/>
                            <button className="btn btn-primary mt-2"><i class="fa-solid fa-bell"></i> Subscribe</button>
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
