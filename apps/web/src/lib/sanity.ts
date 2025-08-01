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

export const getHeroBanner = async () => {
  const query = `*[_type == "hero"][0]{
    image {
      asset-> {
        _id,
        url
      }
    }
  }`;

  return await client.fetch<{
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
  }>(query);
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

  // filter out the "Why Stay in Merano?" section, order by creation date, and limit to 4 items
  // will be optimized later
  const query = `*[_type == "gallery" && en_title != "Why Stay in Merano?"] | order(_createdAt asc) [0...4]{
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
    images: {
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

export const getTestimonialData = async (locale: string) => {
  const textField = `${locale}_text`;

  const query = `*[_type == "testimonial"] | order(_createdAt asc) {
    reviewer,
    'text': ${textField},
    avatar {
      asset-> {
        _id,
        url
      }
    }
  }`;

  const title = `${locale}_title`;
  const description = `${locale}_description`;

  const sectionHeaderQuery = `*[_type == "testimonialSectionHeader"][0]{
    'title': ${title},
    'description': ${description}
  }`;

  const testimonials = await client.fetch<{
    reviewer: string;
    text: string;
    avatar: {
      asset: {
        _id: string;
        url: string;
      };
    };
  }[]>(query);

  const sectionHeader = await client.fetch<{
    title: string;
    description: string;
  }>(sectionHeaderQuery);

  return {
    testimonials,
    sectionHeader
  };
}

export const getPromoBannerData = async (locale: string) => {
  const firstHeading = `${locale}_heading1`;
  const secondHeading = `${locale}_heading2`;
  const description = `${locale}_description`;

  const query = `*[_type == "promoBanner"][0]{
    'firstHeading': ${firstHeading},
    'secondHeading': ${secondHeading},
    'description': ${description},
    image {
      asset-> {
        _id,
        url
      }
    }
  }`;

  return await client.fetch<{
    firstHeading: string;
    secondHeading: string;
    description: string;
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
  }>(query);
}