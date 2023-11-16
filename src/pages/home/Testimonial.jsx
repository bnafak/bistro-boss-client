import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
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
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading="What Our Client Say"
        heading="Testimonial"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
         reviews.map(review => <SwiperSlide
          key={review._id}
      >
          <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
              />
              <p className="py-8">{review.recipe}</p>
              <h3 className="text-xl text-orange-400">{review.name}</h3>
          </div>
      </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Testimonial;
