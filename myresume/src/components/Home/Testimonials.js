export default function Testimonials(){
    return(
        <>
            <section id="testimonials" class="testimonials section-bg">
                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Testimonials</h2>
                    </div>

                    <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div class="swiper-wrapper">

                            <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="assets/img/testimonials/supoj.jpg" class="testimonial-img" alt=""/>
                                <h3>Supoj Khamwong</h3>
                                <h4>Head &amp; IT</h4>
                                <p>
                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                Chanatip is a fast learner who finishes every task on time; he can also manage many tasks simultaneously.
                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                            </div>

                        </div>
                        <div class="swiper-pagination"></div>
                    </div>

                    <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div class="swiper-wrapper">

                            <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="assets/img/testimonials/tipajin.jpg" class="testimonial-img" alt=""/>
                                <h3>Tipajin Thaipisutikul</h3>
                                <h4>Lecturer at Mahidol University</h4>
                                <p>
                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                He is a person who always keeps learning when it is free and develops new skills to catch up the future technologies.
                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                            </div>

                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </>
    )
}