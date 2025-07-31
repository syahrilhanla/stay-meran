import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: true,
})

export default client;

type HeroData = {
  title: string;
  subtitle: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
};

export const getHeroData = async (selectedLanguage: string) => {
  const query = `*[_type == "hero" && language == "${selectedLanguage}"][0]{
    language,
    title,
    subtitle,
    image {
      asset-> {
        _id,
        url
      }
    }
  }`;

  return await client.fetch<HeroData>(query);
}

export const getAccommodationData = async (selectedLanguage: string) => {
  const description = `${selectedLanguage}_description`;

  const queryAccommodations = `*[_type == "accommodation"][0...3]{
    title,
    price,
    'description': ${description},
    image {
      asset-> {
        _id,
        url
      }
    }
  }`;

  const querySectionText = `*[_type == "accommodation" && title == "sectionText"][0]{
    title,
    'description': ${description}
  }`;

  const accommodationList = await client.fetch<
    {
      title: string;
      description: string;
      price: number;
      image: {
        asset: {
          _id: string;
          url: string;
        };
      };
    }[]
  >(queryAccommodations);
  const sectionText = await client.fetch<{
    title: string;
    description: string;
  }>(querySectionText);

  return {
    accommodationList,
    sectionText: sectionText,
  }
};