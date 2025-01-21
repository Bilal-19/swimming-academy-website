import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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
                        <button>Join Now</button>
                    </div>
                </div>

                <div className="row mt-3 mb-3">
                    <h3 className="text-center">Why Choose <span className="text-dark-grey">Aqua Venture</span> Swimming Academy?</h3>
                </div>

                <div className="row d-flex justify-content-between">
                    <div className="col-md-3 highlight-cards">
                        <img src="/public/certified_trainers.png" className="img-fluid highlight-images" />
                        <h4>Certified Trainers</h4>
                        <p>
                            Our swimming academy is led by a team of certified trainers with extensive experience in swimming instruction and water safety.
                        </p>
                    </div>

                    <div className="col-md-3 highlight-cards">
                        <img src="/public/facilities.png" className="img-fluid highlight-images" />
                        <h4>State-of-the-Art Facilities</h4>
                        <p>
                            Our facilities are equipped with modern, well-maintained pools and advanced training tools to create a safe and enjoyable environment for swimmers of all levels.
                        </p>
                    </div>

                    <div className="col-md-3 highlight-cards">
                        <img src="/public/customizedProgram.png" className="img-fluid highlight-images" />
                        <h4>Customized Programs for All Ages</h4>
                        <p>
                            We offer tailored swimming programs designed to meet the unique needs of individuals, from toddlers to adults, ensuring personalized attention and growth.
                        </p>
                    </div>

                    <div className="col-md-3 highlight-cards">
                        <img src="/public/hygienic.png" className="img-fluid highlight-images" />
                        <h4>Hygienic Pool Maintenance</h4>
                        <p>
                            Our pools are maintained to the highest hygiene standards with regular cleaning and advanced filtration systems to provide a safe swimming experience.
                        </p>
                    </div>

                    <div className="col-md-3 highlight-cards">
                        <img src="/public/flexibleTiming.png" className="img-fluid highlight-images" />
                        <h4>Flexible Scheduling Options</h4>
                        <p>
                            We offer a variety of class timings, including early mornings, evenings, and weekends, to accommodate your busy schedule.
                        </p>
                    </div>

                    <div className="col-md-3 highlight-cards">
                        <img src="/public/inclusiveEnv.png" className="img-fluid highlight-images" />
                        <h4>Inclusive Environment</h4>
                        <p>

                            Our programs and facilities are designed to be accessible and welcoming to individuals of all abilities, including those with special needs.                        </p>
                    </div>
                </div>

                <div className="row mt-3 mb-3">
                    <h3 className="text-center">Testimonials</h3>
                </div>
            </div>

            {/* Footer */}
            <Footer/>
        </>
    );
}
