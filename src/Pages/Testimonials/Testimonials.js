import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TestimonialsCard from "./TestimonialsCard/TestimonialsCard";

const Testimonials = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const { data: testimonials = [], refetch } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await fetch("https://havenly-s.vercel.app/testimonial");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="text-center py-10 mb-10">
        <h1 className="text-xl text-secondary font-bold text-center mb-4">
          Reviews
        </h1>
        <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">
          Read What others have to say
        </h1>
        <div className="px-8 lg:px-0 text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-8 group">
          {
            testimonials.map(testimonial => <TestimonialsCard
              key={testimonial._id}
              testimonial={testimonial}
              refetch={refetch}
            ></TestimonialsCard>)
          }
        </div>
        <div className="md:mt-12 mt-20 px-8 lg:px-0 flex justify-center">
          <Link to='/reviews'><button className="text-base font-bold leading-4 text-white bg-secondary sm:w-auto w-full rounded px-4 py-6 focus:outline-none hover:bg-primary hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-white">See More Reviews</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
