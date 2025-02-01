import "./YourData.css";
import YourDataImg from "../../assets/your-data/YourData.png";

export const YourData = () => {
    return (
        <div className="bg-secondary-white relative 2xl:py-40 md:py-28 py-24 prose">
            <div className="container relative z-1 2xl:px-7 lg:px-8 md:px-5 px-4">
                <div className="flex flex-wrap lg:flex-row-reverse items-center text-center lg:text-start">
                    <div className="w-full lg:w-1/2 mb-20 lg:mb-0">
                        <img src={YourDataImg} alt="Your Data Image" className="my-0 w-[551px] lg:w-full max-w-full m-auto" />
                    </div>
                    <div className="w-full flex flex-wrap justify-center lg:justify-start lg:w-1/2 2xl:pe-28 lg:pe-20">
                        <h2 className="text-secondary-black mt-0 mb-6">
                        100% your data
                        </h2>
                        <p className="text-secondary-black mb-20">
                        The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
                        </p>
                        <button className="bg-primary-light text-secondary-white border-solid-primary-light-1 rounded-lg py-5 px-8 flex items-center gap-1">
                            <p className="p3 medium my-0">Read more</p><i className="material-icons-round">arrow_right_alt</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}