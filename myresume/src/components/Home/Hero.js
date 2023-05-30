import Typewriter from 'typewriter-effect';

export default function Hero(){
    return(
        <>
            <section id="hero" class="d-flex flex-column justify-content-center">
                <div class="container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Hi, I'm Chanatip Deemee</h1>
                    <p>
                        I'm a <Typewriter class="typed"
                            options={
                                {
                                    strings: ['Developer', 'Machine Learning Engineer', 'Artificial Intelligence Engineer', 'Data Analyst'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                            }
                        }/>
                    </p>
                    <div class="social-links">
                        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </section>
        </>
    )
}