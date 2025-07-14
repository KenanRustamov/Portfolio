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
    <div className="flex flex-col items-center justify-center py-16">
        <div className="
            glass-card p-8 flex flex-col items-center gap-4
            border border-white/20 dark:border-white/10
        ">
            <div className="relative">
                <div className="
                    animate-spin rounded-full h-12 w-12 
                    border-2 border-transparent
                    bg-gradient-to-r from-blue-500 to-purple-500
                    mask-gradient-radial
                " 
                style={{
                    mask: 'radial-gradient(circle, transparent 40%, black 40%)',
                    WebkitMask: 'radial-gradient(circle, transparent 40%, black 40%)'
                }}></div>
                <div className="
                    absolute inset-0 animate-pulse
                    rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20
                "></div>
            </div>
            <div className="text-center">
                <p className="
                    text-gray-600 dark:text-gray-300 text-sm font-medium
                    animate-pulse
                ">
                    Loading amazing content...
                </p>
            </div>
        </div>
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
            
            {/* Section Divider */}
            <div className="section-divider max-w-4xl mx-auto"></div>
            
            <div id="work-experience-section" className="w-full">
                <Suspense fallback={<ComponentLoader />}>
                <Timeline 
                    title={timelineData.metadata.title}
                    experiences={workExperiences}
                />
                </Suspense>
            </div>
            
            {/* Section Divider */}
            <div className="section-divider max-w-4xl mx-auto"></div>
            
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