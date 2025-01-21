import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Programs() {
    return (
        <>
            <Header />

            <div class="container-fluid">

                <div class="row mt-3 mb-3">
                    <h3 className="text-center">Our Programs</h3>
                </div>

                <div class="row mt-3 mb-3 d-flex justify-content-around align-items-center">
                    <div class="col-md-5 program-card shadow">
                        <h4>Kids' Learn-to-Swim Program (Ages 4-10)</h4>
                        <p>
                            Our Kids' Learn-to-Swim program is designed to introduce young
                            swimmers to water safety, build basic swimming skills, and foster
                            a lifelong love for swimming in a fun and supportive environment.
                        </p>
                        <p className="mb-0">Details</p>
                        <ul>
                            <li>Duration: 8 weeks (2 classes per week)</li>
                            <li>Fees: $200 for the entire program</li>
                            <li>Schedule:</li>
                            <ul>
                                <li>Tuesday & Thursday: 4:00 PM - 5:00 PM</li>
                                <li>Saturday: 10:00 AM - 11:00 AM (Optional extra practice session)</li>
                            </ul>
                        </ul>
                        <p className="mb-0">Benefits:</p>
                        <ul>
                            <li>Boosts water confidence and safety awareness.</li>
                            <li>Develops motor skills and coordination in young swimmers.</li>
                            <li>Encourages social interaction and teamwork</li>
                        </ul>
                    </div>

                    <div class="col-md-5 program-card shadow">
                        <h4>Teenagers Training (Ages 11-17)</h4>
                        <p>
                            This program focuses on enhancing swimming techniques and building endurance while preparing teenagers for competitive swimming or simply improving their fitness.
                        </p>
                        <p className="mb-0">Details</p>
                        <ul>
                            <li>Duration: 10 weeks (3 classes per week)</li>
                            <li>Fees: $250 for the entire program</li>
                            <li>Schedule:</li>
                            <ul>
                                <li>Monday, Wednesday, and Friday: 5:00 PM-6:30 PM</li>
                            </ul>
                        </ul>
                        <p className="mb-0">Benefits:</p>
                        <ul>
                            <li>Improves stamina and strength through advanced training.</li>
                            <li>Develops discipline and time management.</li>
                            <li>Offers a stepping stone to competitive swimming.</li>
                        </ul>
                    </div>

                    <div class="col-md-5 program-card shadow">
                        <h4>Adult Beginner Classes</h4>
                        <p>
                            It's never too late to learn how to swim! Our Adult Beginner Classes cater to individuals who are new to swimming or wish to improve their basic skills.
                        </p>
                        <p className="mb-0">Details</p>
                        <ul>
                            <li>Duration: 6 weeks (2 classes per week)</li>
                            <li>Fees: $180 for the entire program</li>
                            <li>Schedule:</li>
                            <ul>
                                <li>Monday & Wednesday: 7:00 PM - 8:00 PM</li>
                                <li>Saturday: 3:00 PM - 4:00 PM (Optional extra practice session)</li>
                            </ul>
                        </ul>
                        <p className="mb-0">Benefits:</p>
                        <ul>
                            <li>Promotes fitness and relaxation.</li>
                            <li>Boosts confidence in water, helping overcome fears.</li>
                            <li>Provides personalized coaching in a supportive environment.</li>
                        </ul>
                    </div>

                    <div class="col-md-5 program-card shadow">
                        <h4>Advanced Coaching for Competitive Swimmers</h4>
                        <p>
                            Designed for experienced swimmers, this program offers specialized coaching to refine techniques, improve speed, and build endurance for competitive swimming.
                        </p>
                        <p className="mb-0">Details</p>
                        <ul>
                            <li>Duration: 12 weeks (4 classes per week)</li>
                            <li>Fees: $400 for the entire program</li>
                            <li>Schedule:</li>
                            <ul>
                                <li>Tuesday, Thursday, Saturday, and Sunday: 6:00 AM - 8:00 AM</li>
                            </ul>
                        </ul>
                        <p className="mb-0">Benefits:</p>
                        <ul>
                            <li>Enhances stroke efficiency and technique.</li>
                            <li>Builds endurance and peak performance for competitions.</li>
                            <li>Provides individualized training plans and progress tracking.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
