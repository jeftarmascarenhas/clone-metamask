import Head from "next/head";

const SEO = ({
  title = "NFT Choose - Clone Metamask",
  description = "NFT Choose - Create a Clone Metamask",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Jeftar Mascarenhas" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="video.movie" />
      <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
      <meta
        property="og:image"
        content="https://ia.media-imdb.com/images/rock.jpg"
      />
      <meta name="twitter:title" content="European Travel Destinations " />
      <meta
        name="twitter:description"
        content=" Offering tour packages for individuals or groups."
      />
      <meta
        name="twitter:image"
        content=" http://euro-travel-example.com/thumbnail.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
