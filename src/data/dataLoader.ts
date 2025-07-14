// Import JSON files - these will be bundled at build time
import profileData from './profile.json';
import projectsData from './projects.json';
import timelineData from './timeline.json';
import socialData from './social.json';

// Import icons
import emailLogo from '../images/emailLogo.svg';
import gitHubLogo from '../images/gitHubLogo.svg';
import linkedInLogo from '../images/linkedInLogo.svg';
import instagramLogo from '../images/instagramLogo.svg';
import pdf from '../images/pdf.svg';

// Type definitions
export interface ProfileData {
  profile: {
    title: string;
    introText: string;
    subtitle: string;
    description: string;
    profileImage: string;
    profileImageSrcSet: string;
    profileImageSizes: string;
    profileImageAlt: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    resume: string;
  };
  metadata: {
    footerText: string;
    sectionTitles: {
      workExperience: string;
      projects: string;
    };
  };
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  githubUrl?: string;
  skills: string[];
  image: string;
  imageSrcSet: string;
  imageSizes: string;
  alt: string;
  featured: boolean;
  order: number;
}

export interface ProjectsData {
  projects: Project[];
  metadata: {
    title: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    imageOverlayText: string;
  };
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  description: string;
  url: string;
  dates: string;
  skills: string[];
  featured: boolean;
  order: number;
}

export interface TimelineData {
  experiences: WorkExperience[];
  metadata: {
    title: string;
  };
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
  alt: string;
  isExternal: boolean;
  order: number;
}

export interface SocialData {
  socialLinks: {
    intro: SocialLink[];
    footer: SocialLink[];
  };
  metadata: {
    iconPath: string;
    defaultExternal: boolean;
  };
}

// Data loading functions
export const getProfileData = (): ProfileData => profileData as ProfileData;

export const getProjectsData = (): ProjectsData => {
  const data = projectsData as ProjectsData;
  // Sort projects by order
  data.projects.sort((a, b) => a.order - b.order);
  return data;
};

export const getTimelineData = (): TimelineData => {
  const data = timelineData as TimelineData;
  // Sort experiences by order
  data.experiences.sort((a, b) => a.order - b.order);
  return data;
};

export const getSocialData = (): SocialData => {
  const data = socialData as SocialData;
  // Sort social links by order
  data.socialLinks.intro.sort((a, b) => a.order - b.order);
  data.socialLinks.footer.sort((a, b) => a.order - b.order);
  return data;
};

// Helper functions for legacy component interfaces
export const getProjectsForShowcase = () => {
  const data = getProjectsData();
  return data.projects.filter(p => p.featured).map(project => ({
    title: project.title,
    subtitle: project.subtitle,
    description: project.description,
    url: project.url,
    githubUrl: project.githubUrl,
    skills: project.skills,
    image: project.image,
    alt: project.alt
  }));
};

export const getExperiencesForTimeline = () => {
  const data = getTimelineData();
  return data.experiences.filter(e => e.featured).map(experience => ({
    company: experience.company,
    position: experience.position,
    description: experience.description,
    url: experience.url,
    dates: experience.dates,
    skills: experience.skills
  }));
};

export const getSocialLinksForIntro = () => {
  const { socialLinks } = getSocialData();
  return socialLinks.intro;
};

export const getSocialLinksForFooter = () => {
  const { socialLinks } = getSocialData();
  return socialLinks.footer;
};

// Icon mapping helper
export const getIconPath = (iconName: string): string => {
  // Map icon names to actual import paths
  const iconMap: Record<string, string> = {
    'emailLogo.svg': emailLogo,
    'gitHubLogo.svg': gitHubLogo,
    'linkedInLogo.svg': linkedInLogo,
    'instagramLogo.svg': instagramLogo,
    'pdf.svg': pdf,
  };
  
  return iconMap[iconName] || iconName;
}; 