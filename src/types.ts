export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  technologies: string[];
  techString: string;
  description: string;
  highlights: string[];
  githubUrl: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
  rawText: string;
  iconName: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  year: string;
  institution: string;
}

export interface LanguageItem {
  name: string;
  badge?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  phone: string;
  email: string;
  githubUrl: string;
  summary: string;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  education: EducationItem[];
  languages: string[];
}
