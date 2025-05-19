export const HOMEPAGE_QUERY = `
{
  pages(where: {name: "Homepage"}) {
    nodes {
      homepage {
        banners {
          bannerImage {
            node {
              sourceUrl
            }
          }
          bannersTitle
          bannerDescription
          bannerButton {
            title
            url
            target
          }
        }
        homeAboutTitle
        homeAboutSubtitle
        homeAboutButton {
          title
          url
          target
        }
        homeAboutVideoImage {
          node {
            sourceUrl
          }
        }
        homeAboutVideoUrl
        homeAboutDescription
        homeCategoryTitle
        homeCategorySubtitle
        homeServicesTitle
        homeServicesSubtitle
        homeColoursTitle
        homeColoursSubtitle
        homeColoursButton {
          title
          url
          target
        }
        homeJoinBackgroundImage {
          node {
            sourceUrl
          }
        }
        homeJoinTitle
        homeJoinSubtitle
        homeJoinButton {
          title
          url
          target
        }
        homeJoinDescription
        blogTitle
        blogSubtitle
        categories {
          link
          title
          image {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }

  allColourCategory(where: {slug: "popular"}) {
    nodes {
      name
      colours {
        nodes {
          title
          slug
          colourInfo {
            selectColor
            colourRgb
          }
        }
      }
    }
  }

  blogs {
    nodes {
      featuredImage {
        node {
          sourceUrl
          slug
        }
      }
      slug
      title
      date
    }
  }
}
`;
