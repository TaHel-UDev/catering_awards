import HeroLines from "./hero_lines";
import HeroContent from "./hero_content/hero_content";
import HeroBottom from "./hero_bottom";
import HeroGradient from "./hero_gradient";

const Hero = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center bg-dark-950 overflow-hidden px-6">
            <HeroGradient />

            <HeroLines />

            <HeroContent />

            {/* <HeroBottom /> */}
        </div>
    );
};

export default Hero;