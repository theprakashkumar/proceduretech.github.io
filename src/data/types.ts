export type PointersType = {
  heading: string
  description: string
  color: string
}

export type CapabilitiesPagesDataType = {
  heroSection: {
    heading: string
    description: string
    images: {
      desktop: string
      mobile: string
    }
    color: string
  }
  pointers: PointersType[]
  consultSection: {
    heading: string
    subHeading: string
    styles: {
      headingColor: string
      subHeadingColor: string
      backgroundColor: string
    }
  }
}

export type IndustriesPagesDataType = {
  heroSection: {
    heading: string
    description: string
    images: {
      desktop: string
      mobile: string
    }
    color: string
  }
  pointers: {
    heading: string
    description: string
    color: string
  }[]
  consultSection: {
    heading: string
    subHeading: string
    styles: {
      headingColor: string
      subHeadingColor: string
      backgroundColor: string
    }
  }
}

export type LifeProcedureDataType = {
  heroSection: {
    heading: string
    subHeading: string
    style: {
      headingColor: string
      subHeadingColor: string
    }
  }
  profileOne: {
    name: string
    description: string
    imageUrl: string
    color: string
  }
  profileTwo: {
    name: string
    description: string
    imageUrl: string
    color: string
  }
  sectionImageOne: {
    desktop: string
    mobile: string
  }
  sectionImageTwo: {
    desktop: string
    mobile: string
  }
  pointersTitle: string
  pointers: {
    heading: string
    description: string
    color: string
  }[]
  photoSliders: string[]
}

export type TeamMemberDataType = {
  name: string
  position: string
  image1: string
  image2: string
  href: string
  color: string
}

export type AboutPagesDataType = {
  heroSection: {
    name: string
    role: string
    style: {
      nameColor: string
    }
    linkedin: string
    twitter: string
  }
  profileSection: {
    heading: string
    hashTags: string
    imageUrl: string
    backgroundColor: string
    subHeading: string
    paragraphs: string[]
  }
  teamMembersData: TeamMemberDataType[]
}

export type AuthorDataType = {
  imgSrc: string
  name: string
  teamName: string
}

export type PostType = {
  date: string
  name: string
  imgSrc: string
  title: string
  description: string
  link: string
  imgClassName: string
}

export type TagsType = {
  name: string
  link: string
  id: string
}

export type BlogPageDataType = {
  heroSection: {
    heading: string
    images: {
      desktop: string
      mobile: string
    }
    date: string
    name: string
  }
  subHeadings: string[]
  latestPosts: PostType[]
  tags: TagsType[]
  author: AuthorDataType
  content: string
}

export type CaseStudyService = {
  id: string
  name: string
  link: string
}

export type CaseStudyHeroSection = {
  desktop: string
  mobile: string
}

export type CaseStudyContent = {
  overview: string[]
  challenge: string[]
  approach: string[]
  solution: PointersType[]
  impactAndResult: string[]
}

export type SocialLinksType = {
  href: string
  src: string
  alt: string
}

export type CaseStudiesDataType = {
  id: string
  date: string
  name: string
  description: string
  href: string
  bgImage: string
  imgSrc: string
  services: CaseStudyService[]
  heroSection: CaseStudyHeroSection
  content: CaseStudyContent
  socialLinks: SocialLinksType[]
}
