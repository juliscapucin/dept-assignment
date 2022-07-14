import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import ReadMore from "./ReadMore";

export default function TextCard({ textCard, order }) {
  const {
    mainImage,
    mainClientName,
    mainTitle,
    client1,
    title1,
    client2,
    title2,
    client3,
    title3,
  } = textCard.textCards;

  const textsArray = [
    { subtitle: client1, title: title1 },
    { subtitle: client2, title: title2 },
    { subtitle: client3, title: title3 },
  ];

  return (
    <article className={`textcard__container ${order === 2 ? "reverse" : ""}`}>
      <div className='textcard__main'>
        <div className='textcard__main__text__container'>
          <div className='textcard__main__subtitle'>
            <p>{mainClientName}</p>
          </div>
          <h3>{mainTitle}</h3>
          <ReadMore />
        </div>
        <Link href='#'>
          <a>
            <div className='textcard__img__container'>
              <div className='textcard__img'>
                <Image
                  src={mainImage.sourceUrl}
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
      </div>
      <div className='textcard__text__container'>
        {textsArray.map((item, index) => {
          return (
            <Link href='#' key={index}>
              <a>
                <div className='textcard__text__item'>
                  <div className='textcard__item__subtitle'>
                    <p>{item.subtitle}</p>
                  </div>
                  <div className='textcard__item__title'>
                    <p>{item.title}</p>
                  </div>
                  <ReadMore />
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </article>
  );
}
