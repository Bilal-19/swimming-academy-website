import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function About() {
    return (
        <>
            <Header />

            {/* Main Content */}
            <div class="container-fluid">
                <div class="row d-flex justify-content-around align-items-center mt-5 mb-5">
                    <div class="col-md-5">
                        <img src="/mission.jpg" alt="" className="img-fluid rounded slideFromLeft animation-2s" />
                    </div>
                    <div class="col-md-5">
                        <h4 className="slideFromRight animation-2s">Our Mission</h4>
                        <p className="slideFromRight animation-3s">
                            At Aqua Venture Academy, we are committed to empowering
                            individuals of all ages with the life-changing skill of swimming.
                            Our mission is to build confidence, promote fitness, and foster
                            safety in and around water. We believe that swimming is not just a
                            sport, but a vital life skill that opens up opportunities for
                            enjoyment, health, and personal growth. Whether you're a beginner
                            or aiming for competitive excellence, we provide tailored training
                            programs to help you achieve your goals.
                        </p>
                    </div>
                </div>

                <div class="row d-flex justify-content-around align-items-center mt-5 mb-5">
                    <div class="col-md-5">
                        <h4 className="slideFromLeft animation-2s">Our Story</h4>
                        <p className="slideFromLeft animation-3s">
                            Founded in 2024, Aqua Venture Swimming Academy started with a simple yet
                            powerful vision: to create a safe and supportive environment where
                            people can learn swimming at their own pace. What began as a
                            small, community-based academy has now grown into a respected
                            institution with a reputation for excellent coaching and a
                            welcoming atmosphere. Over the years, we have helped hundreds of
                            swimmers—from young children to adults—develop their skills and
                            embrace the water confidently. We take pride in our
                            state-of-the-art facilities, experienced trainers, and structured
                            programs designed to cater to all levels of swimming proficiency.
                            Our academy is a place where swimmers not only learn how to swim
                            but also build lasting memories and friendships along the way.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img src="/story.jpg" alt="" className="img-fluid rounded slideFromRight animation-2s"/>
                    </div>
                </div>

                <div class="row mt-5">
                    <h3 className="text-center">Meet the Trainers</h3>
                </div>

                <div class="row mt-3 mb-5 d-flex justify-content-around align-items-center">
                    <div class="col-md-3 trainer-card">
                        <img src="/male.png" alt=""/>
                        <p className="mb-0 text-center">John Doe</p>
                        <p className="mb-0">Certification: American Red Cross Lifeguard Certification, Certified Swim Coach (ASCA)</p>
                        <p className="mb-0">Specialization: Competitive Swimming, Stroke Technique</p>
                        <p className="mb-0">Experience: 8 years of coaching swimmers of all ages and levels</p>
                    </div>

                    <div class="col-md-3 trainer-card">
                        <img src="/male.png" alt=""/>
                        <p className="mb-0 text-center">Jane Smith</p>
                        <p className="mb-0">Certification: Swim England Teaching Swimming Qualification, CPR/AED Certification</p>
                        <p className="mb-0">Specialization: Beginners and Water Safety</p>
                        <p className="mb-0">Experience: 5 years of teaching swimming to children and adults</p>
                    </div>

                    <div class="col-md-3 trainer-card">
                        <img src="/male.png" alt=""/>
                        <p className="mb-0 text-center">Michael Lee</p>
                        <p className="mb-0">Certification: Water Safety Instructor Certification (American Red Cross), Aqua Fitness Instructor Certification (AFAA)</p>
                        <p className="mb-0">Specialization: Aquatic Fitness, Water Safety</p>
                        <p className="mb-0">Experience: 7 years of teaching water fitness and swimming</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
