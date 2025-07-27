"use server";

import { getLocale } from "next-intl/server";

import NavMenu from "./_components/nav-menu";
import HeroSection from "./_components/hero-section";
import CtaCard from "./_components/cta-card";
import ChecklistsCard from "./_components/checklists-card";
import InstructorCard from "./_components/instructor-card";
import CourseCard from "./_components/course-card";
import LearningCard from "./_components/learning-card";
import FeatureCard from "./_components/feature-card";
import CourseDetailsCard from "./_components/course-details-card";
import SideMediaCard from "./_components/side-media-card";
import SideCtaChecklistCard from "./_components/side-cta-checklist-card";
import { fetchCourseData } from "@/actions/getdatas";

export default async function Home() {
  const [local, dataResponse] = await Promise.all([
    getLocale(),
    fetchCourseData(),
  ]);

  const data = dataResponse?.data;

  return (
    <main className="pb-12">
      <NavMenu initialLanguage={local} />
      <div className="relative">
        <HeroSection
          title={data?.title}
          description={data?.description}
          media={data?.media}
        />
        <div className="absolute top-25 right-0 xl:right-[8%] 2xl:right-[13%] md:w-2/5 lg:w-1/4 hidden md:block">
          <SideMediaCard
            media={data?.media}
            cta={data?.cta_text}
            checkLists={data?.checklist}
          />
        </div>
      </div>
      <CtaCard className="md:hidden px-6" cta={data?.cta_text} />
      <ChecklistsCard className="md:hidden px-6" checkLists={data?.checklist} />
      <InstructorCard data={data?.sections[2]} />
      <CourseCard data={data?.sections[3]} />
      <div className="relative">
        <LearningCard data={data?.sections[5]} />
        <div className="fixed top-25 right-0 xl:right-[8%] 2xl:right-[13%] md:w-2/5 lg:w-1/4 hidden md:block">
          {/* <SideCtaChecklistCard
            cta={data?.cta_text}
            checkLists={data?.checklist}
          /> */}
        </div>
      </div>
      <FeatureCard data={data?.sections[8]} />
      <CourseDetailsCard data={data?.sections[7]} />
    </main>
  );
}
