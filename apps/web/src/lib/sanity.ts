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

export const getHeroData = async (locale: string) => {
  const query = `*[_type == "hero" && language == "${locale}"][0]{
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

export const getAccommodationData = async (locale: string) => {
  const description = `${locale}_description`;

  const querySectionText = `*[_type == "accommodation" && title == "sectionText"][0]{
    title,
    'description': ${description}
  }`;

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

  const sectionText = await client.fetch<{
    title: string;
    description: string;
  }>(querySectionText);

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

  return {
    accommodationList,
    sectionText: sectionText,
  }
};

// fix schema structure later
export const getGalleryData = async (locale: string) => {
  const title = `${locale}_title`;
  const description = `${locale}_description`;

  const query = `*[_type == "gallery"]{
    'title': ${title},
    'description': ${description},
    images {
      asset-> {
        _id,
        url
      }
    }
  }`;

  const sectionHeaderQuery = `*[_type == "gallery" && en_title == "Why Stay in Merano?"][0]{
    'sectionTitle': ${title},
    'description': ${description}
  }`;

  const sectionHeader = await client.fetch<{
    sectionTitle: string;
    description: string;
  }>(sectionHeaderQuery);

  const galleryData = await client.fetch<{
    title: string;
    description: string;
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
  }[]>(query);

  return {
    sectionHeader,
    galleryData
  };
}