import "./HeroSection.css";
import HeroSectionDesktop from "../../assets/hero-section/HeroSectionDesktop.png";
import HeroSectionMobile from "../../assets/hero-section/HeroSectionMobile.png";
export const HeroSection = () => {
    const HeroSectionDynamic = () => {
        return (
          <>
            <img
              src={HeroSectionDesktop}
              alt="Desktop Accent"
              className="w-full hero-section-accent absolute hidden lg:block"
            />
            <img
              src={HeroSectionMobile}
              alt="Mobile Accent"
              className="w-full hero-section-accent absolute block lg:hidden"
            />
          </>
        );
      };
      
    return (
        <div className="bg-primary-dark relative 2xl:py-40 md:py-28 py-24 prose">
            <HeroSectionDynamic/>
            <div className="container relative z-1 2xl:px-7 lg:px-8 md:px-5 px-4">
                <div className="flex flex-wrap items-center text-center lg:text-start">
                    <div className="w-full flex flex-wrap justify-center lg:justify-start lg:w-1/2 2xl:pe-28 lg:pe-20">
                        <h2 className="text-secondary-white mt-0 mb-6">
                        Get More Done with whitepace
                        </h2>
                        <p className="text-secondary-white mb-20">
                        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                        </p>
                        <button className="bg-primary-light text-secondary-white border-solid-primary-light-1 rounded-lg py-5 px-8 flex items-center gap-1">
                          <p className="p3 medium my-0">Try Whitepace free</p><i className="material-icons-round">arrow_right_alt</i>
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2 mt-20 lg:mt-0">
                        <div className="hero-img-container w-[551px] lg:w-full max-w-full m-auto">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}