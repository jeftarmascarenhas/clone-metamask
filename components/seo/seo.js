import Head from "next/head";

const SEO = ({
  title = "NFT Choose - Clone Metamask",
  description = "NFT Choose - Create a Clone Metamask",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
