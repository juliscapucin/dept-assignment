import React from "react";

export default function Testimonial({ testimonial }) {
  const { acftestimonialauthor, acftestimonialtext } = testimonial;

  return (
    <section className='testimonial__container'>
      <h3>{acftestimonialtext}</h3>
      <h4>{acftestimonialauthor}</h4>
    </section>
  );
}
