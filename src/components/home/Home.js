import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from "swiper";
//import Footer from './Footer';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import slider1 from "../../assets/img/slider1.svg";
import slider2 from "../../assets/img/slider2.svg";
import slider3 from "../../assets/img/slider3.svg";

import buisnessSvg from "../../assets/img/Business Setup.svg"

export default function Home() {
    return (
        <>
            {/* <!-- =================Introduction slider====================== --> */}
            <section className="slider-upper">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    // navigation={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    autoplay={{delay:2000}}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"

                >
                    <SwiperSlide> <div className="swiper-slide"><img src={slider1} alt="" /></div></SwiperSlide>
                    <SwiperSlide> <div className="swiper-slide"><img src={slider2} alt="" /></div></SwiperSlide>
                    <SwiperSlide> <div className="swiper-slide"><img src={slider3} alt="" /></div></SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </section>
            {/* <!-- =================popular-products====================== --> */}
            <section className="container popular-products">
                <h1 className="section-heading">Popular products</h1>
                <div className="wrapper">
                    <div className="item">
                        <div><img src={buisnessSvg} /></div>
                        <h1>Business Setup</h1>
                        <h6>File tax return in under 7 minutes</h6>
                        <img className="inner-img" src="../../assets/img/Business Setup.png" alt="" />
                    </div>
                    <div className="item">
                        <div><img src="../../assets/img/NGO Management.svg" alt="" /></div>
                        <h1>NGO Management</h1>
                        <h6>ITR & GST filling, business & legal compliance</h6>
                        <img className="inner-img" src="../../assets/img/NGO Management.png" alt="" />
                    </div>
                    <div className="item">
                        <div><img src="../../assets/img/Trademark & IP.svg" alt="" /></div>
                        <h1>Trandemark and IP</h1>
                        <h6>Bulk invoice in Tally or any ERP</h6>
                        <img className="inner-img" src="../../assets/img/Trademark & IP.png" alt="" />
                    </div>
                    <div className="item">
                        <div><img src="../../assets/img/Digital Branding.svg" alt="" /></div>
                        <h1>Digital Branding</h1>
                        <h6>G1-G9 fillings made 3x faster</h6>
                        <img className="inner-img" src="../../assets/img/Digital Branding.png" alt="" />
                    </div>
                </div>
            </section>
            {/* <!-- =================sustain====================== --> */}
            <section className="container sustain">
                <div className="wrapper">
                    <div className="item">
                        <img src="../../assets/img/Start.svg" alt="" />
                        <h3>Start</h3>
                        <p>Business save upto 2-7% of their net GST with us every month, Individuals can upto &#8377 86,500 by
                            filing their tax returns through us.</p>
                    </div>
                    <div className="item">
                        <img src="../../assets/img/Sustain.svg" alt="" />
                        <h3>Sustain</h3>
                        <p>Experience 3x faster GST filing, 5x faster invoice reconciliation and 10x faster e-waybil generation.
                            Individuals file their tax returns in under 7 min.</p>
                    </div>
                    <div className="item">
                        <img src="../../assets/img/Grow.svg" alt="" />
                        <h3>Grow</h3>
                        <p>Our products are designed and tested by in-house tax experts, ensuring every new clause, form or
                            features is updated and sent to you over the cloud.</p>
                    </div>
                </div>
            </section>
            {/* <!-- =================Work====================== --> */}
            <section className="work container">
                <h1 className="section-heading">How we work?</h1>
                <div className="wrapper">
                    <div className="item">
                        <h5>Fill the form</h5>
                        <div className="item-inner">
                            <p>--&gt;</p>
                        </div>
                    </div>
                    <div className="item">
                        <h5>Make a payment</h5>
                        <div className="item-inner">
                            <p>--&gt;</p>
                        </div>
                    </div>
                    <div className="item">
                        <h5>Get a call from concerned lawyer</h5>
                        <div className="item-inner">
                            <p>--&gt;</p>
                        </div>
                    </div>
                    <div className="item">
                        <h5>Lawyer will analyse your case carefully</h5>
                        <div className="item-inner">
                            <p>--&gt;</p>
                        </div>
                    </div>
                    <div className="item">
                        <h5>You will get expert advice from the lawyer</h5>
                        <div className="item-inner">
                            <p>--&gt;</p>
                        </div>
                    </div>
                    <div className="item">
                        <h5>You will get expert advice from the lawyer</h5>
                        <div className="item-inner">
                            <p>--&gt;</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- =================clients====/================== --> */}
            <section className=" clients">
                <div className="swiper mySwiper inner">
                    <h1 className="client-heading">What Our client Say About US</h1>
                    <div className="swiper-wrapper">
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation={true}
                            loop={true}
                            autoplay={{delay:2000}}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <p>We liked their aggressiveness to deliver things on time, the team of all professionals guide us
                                        together with our company incorporation, Legal Certificate, and routine compliances and business
                                        as
                                        well. </p>
                                    <div className="d-flex person">
                                        <div className="img">
                                            <img src="../../assets/img/client.jpg" alt="" />
                                        </div>
                                        <div>
                                            <h3>Biraj Das </h3>
                                            <span>Director, SIB oil mill prime Pvt. Ltd</span>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <p>We started with 12A 80G Registration. We are taking the NGO service for the last 3 years; we had
                                        an
                                        amazing service experience with the Medsys team. Everything was completed on time </p>
                                    <div className="d-flex person">
                                        <div className="img">
                                            <img src="../../assets/img/client.jpg" alt="" />
                                        </div>
                                        <div>
                                            <h3>Kanta Naik</h3>
                                            <span>President, Rohan Naik charitable Trust</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <p>Medsys NGO consultancy provides services using technology to track, update and process their NGO
                                        Services. I did an NGO Darpan registration, and though I had a lot of issues, it was done
                                        efficiently. The team Medsys has superb knowledge and helps in providing the Solution. I
                                        recommend
                                        Medsys Consultancy for their professionalism </p>
                                    <div className="d-flex person">
                                        <div className="img">
                                            <img src="../../assets/img/client.jpg" alt="" />
                                        </div>
                                        <div>
                                            <h3>Gagan Malhotra</h3>
                                            <span>Director, Dream worth Technology Pvt Ltd
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <p>It's a good website for all the NGO compliance and Business approvals. The team was excellent and
                                        updated daily on WhatsApp or over phones. Amazing service. Specifically, I am Recommended for
                                        NGO-related services. Nice experience with Bhushan.
                                    </p>
                                    <div className="d-flex person">
                                        <div className="img">
                                            <img src="../../assets/img/client.jpg" alt="" />
                                        </div>
                                        <div>
                                            <h3>Pradeep Bhojane</h3>
                                            <span>President, Tree Foundation
                                                Director, 6 clean force Pvt Ltd
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <p>One of the must greatest supporting consultancy for running NGO Compliance. I have a very good
                                        experience. The Medsys team has given very good guidance and help to Param sunandaee foundation.
                                        And
                                        Mr. Bhushan and his team are very professional and supportive.
                                    </p>
                                    <div className="d-flex person">
                                        <div className="img">
                                            <img src="../../assets/img/client.jpg" alt="" />
                                        </div>
                                        <div>
                                            <h3>kalpesh Rajput</h3>
                                            <span>Director, Param Sunandaee group
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* <!-- =================Partner====================== --> */}
            <section className="partner container">
                <div className="partner-inner">
                    <div className="left">
                        <h1>Let's Partner Up!</h1>
                        <p style={{ fontWeight: "bold" }}>Become our partner and drive your business to the next level.</p>
                        <h6>Connect with us now!</h6>
                        <button>
                            <h3>Download Partner Success Stories</h3>
                        </button>
                    </div>
                    <div className="right">
                        <img src="../../assets/img/LetsPartnerImg/1.svg" alt="" />
                    </div>
                </div>
            </section>
            {/* <!-- ======================Profile===="================== --> */}
            <section className="profile container">
                <div className="inner">
                    <div className="left">
                        <h1>Want to know more about us ?</h1>
                        <h6>Download our company profile</h6>
                    </div>
                    <div className="right" download="">
                        <a href="/assets/medsysPDF/MCSLLP_BUSINESS PRESENTATION.pdf">
                            <input type="button" value="Download" />
                        </a>
                    </div>
                </div>
            </section>
            {/* <!-- ======================StartUp======================= --> */}
            {/* <section className="container startup">
                <div className="startup-inner">
                    <div className="left">
                        <img src="../../assets/img/strartup.png" alt="" />
                    </div>
                    <div className="right">
                        <h1>GET E-STARTUP INDIA IN YOUR</h1>
                        <h2>POCKET!</h2>
                        <p>Download our free Android App and get realtime update on your order status.</p>
                        <p>Easily Connect with our professionals handling your order over chat & mobile.</p>
                        <p>Never miss business compliances due date with advance notifications.</p>
                        <a href='/'><img src="../../assets/img/playstore.png" alt="" /></a>
                    </div>
                </div>
            </section> */}
            {/* <!-- ======================Counter======================= --> */}
            <section className="counter container">
                <div className="inner">
                    <div className="item">
                        <div className="text">
                            <h1>1,000</h1><span>+</span>
                        </div>
                        <h6>Happy Clients</h6>
                    </div>
                    <div className="item">
                        <div className="text">
                            <h1>100</h1><span>+</span>
                        </div>
                        <h6>Experts Official</h6>
                    </div>
                    <div className="item">
                        <div className="text">
                            <h1>500</h1><span>+</span>
                        </div>
                        <h6>Active Projects</h6>
                    </div>
                    <div className="item">
                        <div className="text">
                            <h1>15</h1><span>+</span>
                        </div>
                        <h6>Upcoming Services</h6>
                    </div>
                </div>
            </section>
            {/* <!-- ======================Footer======================= --> */}
            <Footer/>
            {/* <!-- Swiper JS --> */}
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
            {/* <!-- Initialize Swiper --> */}

            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js"
                integrity="sha512-6PM0qYu5KExuNcKt5bURAoT6KCThUmHRewN3zUFNaoI6Di7XJPTMoT6K0nsagZKk2OB4L7E3q1uQKHNHd4stIQ=="
                crossorigin="anonymous" referrerPolicy="no-referrer"></script>
            {/* <!-- javascript / --> */}
            {/* <button onClick="topFunction()" id="myBtn" title="Go to top">Top</button> */}
        </>

    )
}
