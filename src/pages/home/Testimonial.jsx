import SectionTitle from "../../components/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// import required modules
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { useEffect } from "react";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(3);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading="What Our Client Say"
        heading={"Testimonial"}
      ></SectionTitle>
      {reviews.length}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex-cols items-center m-24">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                onChange={setRating}
              />

              <p> {review.details}</p>
              <h3 className="text-orange-400 text-2xl"> {review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
