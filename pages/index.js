import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "../src/components/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Alura Cases- Pagina home</h1>
      <Link href="/faq">Ir para página de FAQ</Link>
    </div>
  );
}
