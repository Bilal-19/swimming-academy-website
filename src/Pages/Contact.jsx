import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export default function Contact() {

    toastr.options = {
        closeButton: true,
        progressBar: true,
        positionClass: "toast-top-right",
        timeOut: "5000",
    };


    function submit(e){
        e.preventDefault();
        return toastr.success("Thanks for sharing your query. Our team will contact you soon.",'Success',)
    }

    return (
        <>
            <Header />

            <div className="container-fluid">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-5 contact-card mt-5 mb-5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d269.21898779266314!2d67.07701499610833!3d24.789819808660205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1737542969482!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <p className="mb-0"><i class="fa-solid fa-location-dot"></i> Aqua Ventures, Karachi</p>
                        <p className="mb-0"><i class="fa-solid fa-envelope"></i> info@aquaventures.com</p>
                        <p className="mb-0"><i class="fa-solid fa-phone"></i> 0342-7634247</p>
                    </div>
                    <div className="col-md-5 mt-5 mb-5">
                        <form onSubmit={submit} action="https://formsubmit.co/bilalmuhammadyousuf543@gmail.com" autoComplete="off" method="post">
                            <input type="text" name="name" className="form-control mb-3" placeholder="Enter your name" required/>
                            <input type="email" name="email" className="form-control mb-3" placeholder="Enter your email" required/>
                            <input type="text" name="phoneNumber" className="form-control mb-3" placeholder="Enter your phone number" required/>
                            <textarea name="message" className="form-control mb-3" style={{resize:"none"}} placeholder="Enter your message" rows="4"></textarea>
                            <button type="submit"><i class="fa-solid fa-paper-plane"></i> Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
