import "./FavoriteApps.css";
import FavoriteAppsDesktop from "../../assets/hero-section/HeroSectionDesktop.png";
import FavoriteAppsMobile from "../../assets/hero-section/HeroSectionMobile.png";
import FavoriteAppsImage from "../../assets/favorite-apps/FavoriteApps.png";
export const FavoriteApps = () => {
    const FavoriteAppsDynamic = () => {
        return (
          <>
            <img
              src={FavoriteAppsDesktop}
              alt="Desktop Accent"
              className="w-full hero-section-accent absolute hidden lg:block"
            />
            <img
              src={FavoriteAppsMobile}
              alt="Mobile Accent"
              className="w-full hero-section-accent absolute block lg:hidden"
            />
          </>
        );
      };
      
    return (
        <div className="bg-primary-dark relative 2xl:py-40 md:py-28 py-24 prose">
            <FavoriteAppsDynamic/>
            <div className="container relative z-1 2xl:px-7 lg:px-8 md:px-5 px-4">
                <div className="flex flex-wrap items-center text-center lg:text-start">
                    <div className="w-full lg:w-1/2 mb-20 lg:mb-0">
                      <img src={FavoriteAppsImage} alt="Work Together Image" className="my-0 w-[551px] lg:w-full max-w-full m-auto" />
                    </div>
                    <div className="w-full flex flex-wrap justify-center lg:justify-start lg:w-1/2 2xl:ps-28 lg:ps-20">
                        <h2 className="text-secondary-white mt-0 mb-6">
                        Work with Your Favorite Apps Using whitepace
                        </h2>
                        <p className="text-secondary-white mb-20">
                        Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
                        </p>
                        <button className="bg-primary-light text-secondary-white border-solid-primary-light-1 rounded-lg py-5 px-8 flex items-center gap-1">
                          <p className="p3 medium my-0">Read More</p><i className="material-icons-round">arrow_right_alt</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}