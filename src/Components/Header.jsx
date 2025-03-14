import React from "react"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div class="container-fluid">
                <div class="row shadow">

                    <nav class="navbar navbar-expand-lg navbar-light bg-light-grey text-dark-grey">
                        <div class="container-fluid">
                            <Link class="navbar-brand" to="/">
                                <img src="/swimming-academy-website/CompanyLogo.png" className="img-fluid" />
                            </Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" to="/about">About Us</Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" to="/programs">Programs</Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" to="/gallery">Gallery</Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" to="/testimonials">Testimonials</Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" to="/faqs">FAQs</Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </>
    )
}