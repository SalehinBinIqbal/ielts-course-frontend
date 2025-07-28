// ======================
// Common Base Interfaces
// ======================

export interface MediaItem {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

export interface ChecklistItem {
  icon: string;
  id: string;
  text: string;
}

export interface Cta {
  name: string;
}

export interface NamedValuePair<T> {
  name: string;
  values: T[];
}

// ======================
// Component Interfaces
// ======================

export interface ChecklistsCardProps {
  checkLists: ChecklistItem[];
  className?: string;
}

export interface CourseCardProps {
  data: NamedValuePair<{
    title: string;
    icon: string;
    subtitle: string;
    id: string;
  }>;
}

export interface CourseDetailsCardProps {
  data: NamedValuePair<{
    description: string;
    title: string;
  }>;
}

export interface CtaCardProps extends CtaComponentProps {
  className?: string;
}

export interface FeatureCardProps {
  data: NamedValuePair<{
    file_url: string;
    title: string;
    checklist: string[];
  }>;
}

export interface HeroSectionProps {
  title: string;
  description: string;
  media: MediaItem[];
}

export interface InstructorCardProps {
  data: NamedValuePair<{
    description: string;
    image: string;
    name: string;
    slug: string;
  }>;
}

export interface LearningCardProps {
  data: NamedValuePair<{
    text: string;
  }>;
}

export interface NavMenuProps {
  initialLanguage: string;
}

export interface CtaChecklistCardProps {
  cta: Cta;
  checkLists: ChecklistItem[];
}

export interface SideMediaCardProps extends CtaChecklistCardProps {
  media: MediaItem[];
}

// ======================
// Shared Component Interfaces
// ======================

export interface CheckListsComponentProps {
  checkLists: ChecklistItem[];
}

export interface CtaComponentProps {
  cta: Cta;
}

export interface MediaCarouselProps {
  carouselItems: MediaItem[];
}
