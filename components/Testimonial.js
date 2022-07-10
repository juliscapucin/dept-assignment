import React from "react";

export default function Testimonial({ testimonial }) {
  const { acftestimonialauthor, acftestimonialtext } = testimonial;

  return (
    <section className='testimonial__container'>
      <h5>{acftestimonialtext}</h5>
      <h6>{acftestimonialauthor}</h6>
    </section>
  );
}
