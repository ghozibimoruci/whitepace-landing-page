import "./OurUsers.css";
import User1 from "../../assets/our-users/user1.png";
import User2 from "../../assets/our-users/user2.png";
import User3 from "../../assets/our-users/user3.png";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

interface ReviewProps {
    name: string;
    title: string;
    image: string;
    rating: number;
    text: string;
}

interface ReviewCardProps extends ReviewProps {
    selected: boolean;
}

export const OurUsers = () => {
    const [isLg, setIsLg] = useState(window.innerWidth >= 1024);
    const [swiperKey, setSwiperKey] = useState(window.innerWidth >= 1024?1:0);
    const [selectedIdx, setSelectedIdx] = useState(-1);

    useEffect(() => {
      const handleResize = () => {
        setIsLg(window.innerWidth >= 1024);
        setSwiperKey(window.innerWidth >= 1024?1:0);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const reviewList: ReviewProps[] = [{
        name: "Jessie Owner",
        title: "Founder, XYZ Company",
        image: User1,
        rating: 5,
        text: "“If you haven’t tried EventSprout yet, you need to give it a shot for your next event. It’s so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.”"
    },{
        name: "Jessie Owner",
        title: "Founder, XYZ Company",
        image: User2,
        rating: 5,
        text: "“If you haven’t tried EventSprout yet, you need to give it a shot for your next event. It’s so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.”"
    },{
        name: "Jessie Owner",
        title: "Founder, XYZ Company",
        image: User3,
        rating: 5,
        text: "“If you haven’t tried EventSprout yet, you need to give it a shot for your next event. It’s so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.”"
    }]
    return (
        <div className="bg-secondary-white relative 2xl:py-40 md:py-28 py-24 prose">
            <div className="container relative z-1 2xl:px-7 lg:px-8 md:px-5 px-4">
                <div className="flex flex-wrap items-center text-center mb-20">
                    <div className="w-full">
                        <h2 className="text-secondary-black my-0">
                        See what our trusted users Say
                        </h2>
                    </div>
                </div>
                <div>
                    <Swiper
                        key={swiperKey}
                        breakpoints={{
                            1024: {
                              slidesPerView: 3,
                            },
                            480: {
                              slidesPerView: 1.6,
                            },
                            0 : {
                              slidesPerView: 1,
                            },
                          }}
                        allowTouchMove={!isLg}
                        pagination={isLg?false:{clickable: true}}
                        initialSlide={1}
                        spaceBetween={0}
                        centeredSlides={true}
                        modules={[Pagination]}
                        onSlideChange={(swiper) => setSelectedIdx(swiper.activeIndex)}
                        className="swiper-our-users"
                    >
                        {
                            reviewList.map((review, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="p-4 relative">
                                        {
                                            isLg && <a type="button" onMouseOver={() => setSelectedIdx(idx)} className="absolute top-0 left-0 w-full h-full z-0" />
                                        }
                                        <ReviewCard props={{...review, selected: selectedIdx == idx}} />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

const ReviewCard = ({props}: {props: ReviewCardProps}) => {
    const { name, title, image, rating, text, selected } = props;

    return (
        <div className={"review-card flex flex-wrap xl:py-20 lg:py-14 md:py-6 py-5 xl:px-10 lg:px-8 md:px-6 px-5 rounded-xl shadow-md shadow-black/25" + (
            selected?" bg-secondary-white":" bg-primary-light"
        )}>
            <div className="w-full flex mb-9">
                <img src={image} alt="User Image" className="h-[70px] my-0" />
            </div>
            <div className="w-full mb-12">
                <p className={"p3 regular my-0" + (
                    selected?" text-secondary-black":" text-secondary-white"
                )}>
                    {text}
                </p>
            </div>
            <div className="w-full flex flex-wrap justify-between">
                <div className={"w-auto" + (
                    selected?" text-secondary-black":" text-secondary-white"
                )}>
                    <p className="p2 bold my-0 block mb-1">
                        {name}
                    </p>
                    <p className="p3 regular my-0">
                        {title}
                    </p>
                </div>
                <div className="w-auto">
                    {
                        [...Array(rating)].map((_, idx) => (
                            <i className="material-icons-round text-secondary-gold" key={idx}>grade</i>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}