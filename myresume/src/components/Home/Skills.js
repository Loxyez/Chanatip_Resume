import ProgressBar from '@ramonak/react-progress-bar';


export default function Skills(){
    return(
        <>
            <section id="skills" class="skills section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Skills</h2>
                        <p>Those skills are my knowledge according to the expert from research and project</p>
                    </div>
                    
                    <div class="row skills-content">

                        <div class="col-lg-6">

                            <div class="progress">
                                <span class="skill">Python</span>
                                <div class="progress-bar-wrap">
                                    <ProgressBar class="progress-bar" role="progressbar" completed={'Expert'} barContainerClassName='containerBar' completedClassName='barCompleted'/>
                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">C++</span>
                                <div class="progress-bar-wrap">
                                    <ProgressBar class="progress-bar" role="progressbar" completed={'Professional'} barContainerClassName='containerBar' completedClassName='barCompleted'/>
                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">Java</span>
                                <div class="progress-bar-wrap">
                                    <ProgressBar class="progress-bar" role="progressbar" completed={'Professional'} barContainerClassName='containerBar' completedClassName='barCompleted'/>
                                </div>
                            </div>

                        </div>
                        
                        <div class="col-lg-6">

                            <div class="progress">

                                <span class="skill">HTML</span>
                                <div class="progress-bar-wrap">
                                    <ProgressBar class="progress-bar wrapperBar" role="progressbar" completed={'Professional'} barContainerClassName='containerBar' completedClassName='barCompleted'/>
                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">C#</span>
                                <div class="progress-bar-wrap">
                                    <ProgressBar class="progress-bar" role="progressbar" completed={'Professional'} barContainerClassName='containerBar' completedClassName='barCompleted'/>
                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">JavaScript</span>
                                <div class="progress-bar-wrap">
                                    <ProgressBar class="progress-bar" role="progressbar" completed={'Professional'} barContainerClassName='containerBar' completedClassName='barCompleted'/>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}