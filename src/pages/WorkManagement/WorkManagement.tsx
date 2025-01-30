import "./WorkManagement.css";
import WorkTogetherImage from "../../assets/work-management/WorkTogether.png";
import WorkTogetherBackground from "../../assets/work-management/WorkTogetherBackground.png";

export const WorkManagement = () => {
    return (
        <div className="relative lg:py-40 md:py-28 py-24 prose">
            <img src={WorkTogetherBackground} alt="Work Together Background" className="work-together-background" />
            <ProjectManagement/>
            <div className="mb-28"></div>
            <WorkTogether/>
        </div>
    )
}

const ProjectManagement = () => {
    return (
        <div className="container relative z-1 2xl:px-7 lg:px-8 md:px-5 px-4">
            <div className="flex flex-wrap items-center text-center lg:text-start">
                <div className="w-full flex flex-wrap justify-center lg:justify-start lg:w-1/2 2xl:pe-28 lg:pe-20">
                    <h2 className="text-secondary-black mt-0 mb-6">
                    Project Management
                    </h2>
                    <p className="text-secondary-black mb-20">
                    Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                    </p>
                    <button className="bg-primary-light text-secondary-white border-solid-primary-light-1 rounded-lg py-5 px-8 flex items-center gap-1">
                        Get Started<i className="material-icons-round">arrow_right_alt</i>
                    </button>
                </div>
                <div className="w-full lg:w-1/2 mt-20 lg:mt-0">
                    <div className="hero-img-container w-[551px] lg:w-full max-w-full m-auto">

                    </div>
                </div>
            </div>
        </div>
    )
}

const WorkTogether = () => {
    return (
        <div className="container relative z-1 2xl:px-7 lg:px-8 md:px-5 px-4">
            <div className="flex flex-wrap lg:flex-row-reverse items-center text-center lg:text-start">
                <div className="w-full flex flex-wrap justify-center lg:justify-start lg:w-1/2 2xl:ps-28 lg:ps-20">
                    <h2 className="text-secondary-black mt-0 mb-6">
                    Work together
                    </h2>
                    <p className="text-secondary-black mb-20">
                    With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
                    </p>
                    <button className="bg-primary-light text-secondary-white border-solid-primary-light-1 rounded-lg py-5 px-8 flex items-center gap-1">
                        Try it now<i className="material-icons-round">arrow_right_alt</i>
                    </button>
                </div>
                <div className="w-full lg:w-1/2 mt-20 lg:mt-0">
                    <img src={WorkTogetherImage} alt="Work Together Image" className="my-0 w-[551px] lg:w-full max-w-full m-auto" />
                </div>
            </div>
        </div>
    )
}