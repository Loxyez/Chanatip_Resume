import Nav from './Nav';
import Hero from './Home/Hero';
import About from './Home/About';
import Fact from './Home/Fact';
import Skills from './Home/Skills';
import Resume from './Home/Resume';
import Testimonials from './Home/Testimonials';

export default function Home(){
    return(
        <>
            <Nav />
            <Hero />

            <main id="main">
                {/* <!-- ======= About Section ======= --> */}
                <About />
                {/* <!-- ======= Resume Section ======= --> */}
                <Fact />
                {/* <!-- ======= Skills Section ======= --> */}
                <Skills />
                {/* <!-- ======= Resume Section ======= --> */}
                <Resume />
                {/* <!-- ======= Portfolio Section ======= --> */}

                {/* <!-- ======= Services Section ======= --> */}

                {/* <!-- ======= Testimonials Section ======= --> */}
                <Testimonials />
            </main>
        </>
    )
}