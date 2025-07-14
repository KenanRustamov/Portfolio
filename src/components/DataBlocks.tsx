import React, { Suspense } from "react";
import IntroDataBlock from "./IntroDataBlock";
import { 
  getProfileData, 
  getProjectsForShowcase, 
  getExperiencesForTimeline,
  getProjectsData,
  getTimelineData
} from "../data/dataLoader";

// Lazy load heavy components
const Timeline = React.lazy(() => import("./Timeline"));
const ProjectShowcase = React.lazy(() => import("./ProjectShowcase"));

// Loading component
const ComponentLoader = () => (
    <div className="flex items-center justify-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-300"></div>
    </div>
);

const DataBlocks = () => {
    // Load data from JSON files
    const profileData = getProfileData();
    const projectsData = getProjectsData();
    const timelineData = getTimelineData();
    
    // Get formatted data for components
    const workExperiences = getExperiencesForTimeline();
    const projects = getProjectsForShowcase();

    return (
        <div className="
            relative flex flex-col items-center
            min-h-screen w-full
        ">
            <IntroDataBlock 
                title={profileData.profile.title}
                introText={profileData.profile.introText}
                subtitle={profileData.profile.subtitle}
                description={profileData.profile.description}
                profileImage={profileData.profile.profileImage}
            />
            <div id="work-experience-section" className="w-full">
                <Suspense fallback={<ComponentLoader />}>
                <Timeline 
                    title={timelineData.metadata.title}
                    experiences={workExperiences}
                />
                </Suspense>
            </div>
            <div id="projects-section" className="w-full">
                <Suspense fallback={<ComponentLoader />}>
                <ProjectShowcase 
                    title={projectsData.metadata.title}
                    projects={projects}
                />
                </Suspense>
            </div>
        </div>
    );
};

export default DataBlocks;