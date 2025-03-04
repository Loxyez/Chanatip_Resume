import CountUp from 'react-countup';

export default function Fact(){
    return(
        <>
            <section id="facts" class="facts">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Facts</h2>
                        <p>Here are some of my facts</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="count-box">
                                <i class="bi bi-emoji-smile"></i>
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter">
                                    <CountUp 
                                    start={0}
                                    end={106} />
                                </span>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div class="count-box">
                                <i class="bi bi-journal-richtext"></i>
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter">
                                    <CountUp
                                    start={0}
                                    end={42}
                                    />
                                </span>
                                <p>Projects</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div class="count-box">
                                <i class="bi bi-headset"></i>
                                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter">
                                    <CountUp
                                    start={0}
                                    end={1463}
                                    />
                                </span>
                                <p>Hours Of Active</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div class="count-box">
                                <i class="bi bi-award"></i>
                                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter">
                                <CountUp
                                    start={0}
                                    end={3}
                                    />
                                </span>
                                <p>Awards</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </section>
        </>
    )
}