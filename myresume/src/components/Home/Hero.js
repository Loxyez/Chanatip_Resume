import Typewriter from 'typewriter-effect';
import { Icon } from '@iconify/react';

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
                        <a href="https://www.facebook.com/ChanatipDe/" class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="https://www.instagram.com/sir_chanatip/" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/chanatip-deemee-6a7575230/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                        <a href="https://medium.com/@chanatip.dee" class="linkedin"><Icon icon="mingcute:medium-fill" /></a>
                    </div>
                </div>
            </section>
        </>
    )
}