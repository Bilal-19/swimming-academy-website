import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FeedbackData } from "../Data/FeedbackObject";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Main */}
            <div className="container-fluid">
                <div className="row" id="bg-home-img">
                    <div className="col-md-7 mx-auto text-center">
                        <h2 className="text-white mt-5">Dive into Excellence: Learn Swimming with Us!</h2>
                        <Link to="/contact" className="cta-btn">Join Now</Link>
                    </div>
                </div>

                <div className="row mt-3 mb-3">
                    <h3 className="text-center">Why Choose <span className="text-dark-grey">Aqua Venture</span> Swimming Academy?</h3>
                </div>

                <div className="row d-flex justify-content-between">
                    <div className="col-md-3 highlight-cards">
                        <img src="/certified_trainers.png" className="img-fluid highlight-images" />
                        <h4>Certified Trainers</h4>
                        <p>
                            Our swimming academy is led by a team of certified trainers with extensive experience in swimming instruction and water safety.
                        </p>
                    </div>

                    <div className="col-md-3 highlight-cards">
                        <img src="/facilities.png" className="img-fluid highlight-images" />
                        <h4>State-of-the-Art Facilities</h4>
                        <p>
                            Our facilities are equipped with modern, well-maintained pools and advanced training tools to create a safe and enjoyable environment for swimmers of all levels.
                        </p>
                    </div>

                    <div className="col-md-3 highlight-cards">
                        <img src="/customizedProgram.png" className="img-fluid highlight-images" />
                        <h4>Customized Programs for All Ages</h4>
                        <p>
                            We offer tailored swimming programs designed to meet the unique needs of individuals, from toddlers to adults, ensuring personalized attention and growth.
                        </p>
                    </div>

                    <div className="col-md-3 highlight-cards">
                        <img src="/hygienic.png" className="img-fluid highlight-images" />
                        <h4>Hygienic Pool Maintenance</h4>
                        <p>
                            Our pools are maintained to the highest hygiene standards with regular cleaning and advanced filtration systems to provide a safe swimming experience.
                        </p>
                    </div>

                    <div className="col-md-3 highlight-cards">
                        <img src="/flexibleTiming.png" className="img-fluid highlight-images" />
                        <h4>Flexible Scheduling Options</h4>
                        <p>
                            We offer a variety of class timings, including early mornings, evenings, and weekends, to accommodate your busy schedule.
                        </p>
                    </div>

                    <div className="col-md-3 highlight-cards">
                        <img src="/inclusiveEnv.png" className="img-fluid highlight-images" />
                        <h4>Inclusive Environment</h4>
                        <p>

                            Our programs and facilities are designed to be accessible and welcoming to individuals of all abilities, including those with special needs.                        </p>
                    </div>
                </div>

                <div className="row mt-3">
                    <h3 className="text-center">Testimonials</h3>
                </div>

                <div class="row d-flex justify-content-between">
                    {FeedbackData.slice(0, 3).map((value, index) => {
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

                <div class="row d-flex justify-content-around align-items-center mt-3 mb-3">
                    <div class="col-md-5">
                        <h3 className="slideFromLeft animation-2s">About Us</h3>
                        <p className="slideFromLeft animation-3s">
                            At Aqua Venture Swimming Academy, we believe swimming is more than just a skill—it's a way to boost confidence, improve fitness, and stay safe. Our expert trainers and state-of-the-art facilities are here to help swimmers of all ages achieve their goals.
                        </p>
                        <Link to="/about" className="cta-btn ">Learn More</Link>
                    </div>
                    <div class="col-md-5">
                        <img src="/teachSwimming.webp" alt="" className="img-fluid rounded slideFromRight animation-2s" />
                    </div>
                </div>

                <div className="row mt-3 mb-3">
                    <h3 className="text-center">Featured Programs</h3>
                </div>

                <div class="row d-flex justify-content-around align-items-center mb-3 mt-3">
                    <div class="col-11 col-md-3 rounded shadow border p-2">
                        <img src="/kid.png" alt="" className="img-fluid d-block mx-auto" style={{ height: "40px" }} />
                        <h5>Kids' Learn-to-Swim Program</h5>
                        <p>
                            Build water confidence and essential skills for young swimmers.
                        </p>
                    </div>

                    <div class="col-11 col-md-3 rounded shadow border p-2">
                        <img src="/teenage.png" alt="" className="img-fluid d-block mx-auto" style={{ height: "40px" }} />
                        <h5>Teen Training</h5>
                        <p>
                            Improve stamina and swimming techniques for ages 11–17.
                        </p>
                    </div>

                    <div class="col-11 col-md-3 rounded shadow border p-2">
                        <img src="/adult.png" alt="" className="img-fluid d-block mx-auto" style={{ height: "40px" }} />
                        <h5>Adult Beginners</h5>
                        <p>
                            It’s never too late to start swimming!
                        </p>
                    </div>
                </div>

                <div class="row mt-3 mb-3">
                    <div class="col-md-4 text-center mx-auto">
                        <Link to="/programs" className="cta-btn">Explore All Our Programs →</Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
