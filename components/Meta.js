import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Container({ ...customMetaData }) {
  const router = useRouter();

  // We spread our custom metadata into the default metadata for all pages
  const metaData = {
    title: 'Pencraig Lodge | Holiday cottage in Pembrokeshire, Wales',
    description:
      'Pencraig Lodge is a holiday cottage set in the idyllic village of Llechryd in the Teifi Valley',
    image: 'https://www.pencraiglodge.co.uk/img/banner.png',
    type: 'website',
    ...customMetaData,
  };

  return (
    <Head>
      <title>{metaData.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={metaData.description} name="description" />
      <meta
        property="og:url"
        content={`https://www.pencraiglodge.co.uk${router.asPath}`}
      />
      <link
        rel="canonical"
        href={`https://www.pencraiglodge.co.uk${router.asPath}`}
      />
      <meta property="og:type" content={metaData.type} />
      <meta property="og:site_name" content="Pencraig Lodge" />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:image" content={metaData.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:image" content={metaData.image} />
      {metaData.date && (
        <meta property="article:published_time" content={metaData.date} />
      )}
    </Head>
  );
}
