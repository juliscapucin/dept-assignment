import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import ReadMore from "./ReadMore";

export default function Card(card) {
  const subtitle = card.card.client;
  const title = card.card.title;
  const image = card.card.image.sourceUrl;

  return (
    <article className='card__container'>
      <div className='card__text__container'>
        <p className='card__text__subtitle'>{subtitle}</p>
        <h3>{title}</h3>
        <ReadMore />
      </div>

      <Link href='#'>
        <a>
          <div className='card__img__container'>
            <div className='card__img'>
              <Image
                src={image}
                alt='Image'
                layout='fill'
                objectFit='cover'
                objectPosition='center center'
                priority
              />
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
}
