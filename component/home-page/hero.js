import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/ihu.jpg" alt="An image showing Ivan" width={300} height={300} />
            </div>
            <h1>Hi,I'm Ivan</h1>
            <p>Blog that will be build on Next.js</p>
        </section>
    );
};

export default Hero;
