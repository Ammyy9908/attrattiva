import { DefaultSeo } from "next-seo";

const DefaultSEO = () => {
  return (
    <DefaultSeo
      title="Luxury Furniture Showroom Delhi | Gurgaon - Attrattiva"
      description="Attrattiva has the best Tanjore painting showroom in Gurgaon, Delhi. We also have silver furniture showroom and Luxury furniture in Delhi"
      openGraph={{
        type: "article",
        locale: "en_IE",
        url: "https://attrattiva.vercel.app",
        site_name: "Attrattiva - Luxury Furniture",
        title: "Luxury Furniture Showroom Delhi | Gurgaon - Attrattiva",
      }}
      twitter={{
        handle: "@handle",
        title: "Luxury Furniture Showroom Delhi | Gurgaon - Attrattiva",
        site: "@site",
        cardType: "summary",
      }}
    />
  );
};

export default DefaultSEO;
