import React from "react";

export default function Testimonial({ testimonial }) {
  const { acftestimonialauthor, acftestimonialtext } = testimonial;

  return (
    <section className='testimonial__container'>
      <h4>{acftestimonialtext}</h4>
      <h4>{acftestimonialauthor}</h4>
    </section>
  );
}
