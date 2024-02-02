import { Inter } from "next/font/google";
import Link from "../src/components/link";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

function Title({ children, as }) {
  const Tag = as;
  return (
    <React.Fragment>
      <Tag>{children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: red;
          }
        `}
      </style>
    </React.Fragment>
  );
}
export default function Home() {
  return (
    <div>
      <Title as="h1">Alura Cases- Pagina home</Title>
      <Link href="/faq">Ir para página de FAQ</Link>
    </div>
  );
}
