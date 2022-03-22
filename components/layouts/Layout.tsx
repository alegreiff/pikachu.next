import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;
export const Layout: FC<Props> = ({ children, title }) => {
  //console.log(origin);
  return (
    <>
      <Head>
        <title>{title || "PokemonAPP"} </title>
        <meta name="author" content="Jaime de Greiff" />
        <meta
          name="description"
          content={`Página de pokemones estáticos esta es la de ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon`} />
        <meta property="og:title" content={`Información sobre ${title}`} />

        <meta
          property="og:description"
          content={`Esta es la informaciuón sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/pokemage.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
