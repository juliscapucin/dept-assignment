import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Image from "next/image";

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
      cards: data.cards.nodes,
      textCards: data.textCards.nodes,
      testimonial: data.testimonials.nodes[0].testimonial_text,
      clientsText: data.clients.nodes[0].clients.clientsText,
    },
    revalidate: 1,
  };
}

export default function Home({
  cards,
  clientsText,
  hero,
  testimonial,
  textCards,
}) {
  const { heroImage, heroText } = hero;

  let cards1 = [...cards].splice(0, 4);
  let cards2 = [...cards].splice(4, 2);
  let cards3 = [...cards].splice(6, 4);
  let cards4 = [...cards].splice(10, 2);

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
        <section className='home__cards__grid'>
          {cards1.map((card, index) => {
            return <Card key={index} card={card.cards} />;
          })}
        </section>
        <section className='home__textcards__1'>
          <TextCard textCard={textCards[0]} order={1} />
        </section>
        <section className='home__cards__grid'>
          {cards2.map((card, index) => {
            return <Card key={index} card={card.cards} />;
          })}
        </section>
        <section className='home__textcards__2'>
          <TextCard textCard={textCards[1]} order={2} />
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
