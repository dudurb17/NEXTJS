import Link from "../src/components/link";
import { useEffect, useState } from "react";
import PageTitle from "@/src/components/PageTitle";

// SSG - Static Site Generation
// SSR - Server Site Redering
// ISG - Incremental Static Generation

// export async function getServerSideProps()  confere todo acesso que você recebe
// em modo dev roda em todo acesso
export async function getStaticProps() {
  // confere somente no build
  // em modo dev roda em todo acesso
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });

  return {
    props: {
      teste: "alooo",
      faq,
    },
  };
}
export default function FAQPagina({ faq }) {
  console.log(faq);
  // const [faq, setFaq] = useState([]);
  // useEffect(() => {}, []);
  return (
    <div>
      <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
      <h1>Alura Cases - Paginas de perguntas FAQ</h1>
      <Link href="/">Ir para a home</Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
