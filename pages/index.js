import { useEffect, useRef, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import gsap from "gsap";

import Image from "next/image";

import useIntersect from "../components/hooks/useIntersect";

import Card from "../components/Card";
import CaseFilter from "../components/CaseFilter";
import Clients from "../components/Clients";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Testimonial from "../components/Testimonial";
import TextCard from "../components/TextCard";

const placeholderImage = "/image-placeholder.svg";

// GET STATIC PROPS
// ----------------
export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://dept.wordpresssites.host/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query Home {
        heros {
          nodes {
            heroACF {
              heroImage {
                sourceUrl
              }
              heroText
            }
          }
        }
        cards(first: 50) {
          nodes {
            cards {
              client
              image {
                sourceUrl
              }
              title
            }
          }
        }
        textCards {
          nodes {
            textCards {
              mainClientName
              mainTitle
              client1
              title1
              client2
              title2
              client3
              title3
              mainImage {
                sourceUrl
              }
            }
          }
        }
        testimonials(first: 10) {
          nodes {
            testimonial_text {
              acftestimonialauthor
              acftestimonialtext
            }
          }
        }
        clients {
          nodes {
            clients {
              clientsText
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      hero: data.heros.nodes[0].heroACF,
      cards1: [...data.cards.nodes].splice(0, 4),
      cards2: [...data.cards.nodes].splice(4, 2),
      cards3: [...data.cards.nodes].splice(6, 4),
      cards4: [...data.cards.nodes].splice(10, 2),
      textCards: data.textCards.nodes,
      testimonial: data.testimonials.nodes[0].testimonial_text,
      clientsText: data.clients.nodes[0].clients.clientsText,
    },
    revalidate: 1,
  };
}

export default function Home({
  cards1,
  cards2,
  cards3,
  cards4,
  clientsText,
  hero,
  testimonial,
  textCards,
}) {
  const refCardsGrid = useRef(null);
  const refTextCard = useRef(null);
  const [reveal, setReveal] = useState(false);

  const { heroImage, heroText } = hero;

  const intersect = () => useIntersect(refCardsGrid);

  intersect();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (intersect) {
      setReveal(true);
    }
  }, [intersect]);

  useEffect(() => {
    if (reveal) {
      const cards = [
        ...refCardsGrid.current.querySelectorAll(".home__card__container"),
      ];

      gsap.set(cards, { autoAlpha: 0 });
      gsap.fromTo(
        cards,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,

          duration: 0.8,
          stagger: 0.5,
          delay: 1,
        }
      );
    }
  }, [reveal]);

  return (
    <Layout>
      <main className='home__main'>
        <section className='home__hero'>
          <div className='home__hero__text__container'>
            <div className='home__hero__subtitle'>
              <p>WORK</p>
            </div>
            <h4 dangerouslySetInnerHTML={{ __html: heroText }}></h4>
          </div>
          <div className='home__hero__img__container'>
            <div className='home__hero__img'>
              <Image
                src={heroImage.sourceUrl ?? placeholderImage}
                alt='Hero image'
                layout='fill'
                objectFit='cover'
                objectPosition='center center'
                priority
              />
            </div>
          </div>
        </section>
        <section className='home__casefilter'>
          <CaseFilter />
        </section>
        <section className='home__cards__grid' ref={refCardsGrid}>
          {cards1.map((card, index) => {
            return (
              <div className='home__card__container' key={index}>
                <Card card={card.cards} />
              </div>
            );
          })}
        </section>
        <section className='home__textcards__1'>
          <TextCard textCard={textCards[0]} order={"right"} />
        </section>
        <section className='home__cards__grid'>
          {cards2.map((card, index) => {
            return <Card key={index} card={card.cards} />;
          })}
        </section>
        <section className='home__textcards__2'>
          <TextCard textCard={textCards[1]} order={"left"} />
        </section>
        <section className='home__cards__grid'>
          {cards3.map((card, index) => {
            return <Card key={index} card={card.cards} />;
          })}
        </section>
        <Testimonial testimonial={testimonial} />
        <section className='home__cards__grid'>
          {cards4.map((card, index) => {
            return <Card key={index} card={card.cards} />;
          })}
        </section>
        <Clients text={clientsText} />
        <Form />
      </main>
    </Layout>
  );
}
