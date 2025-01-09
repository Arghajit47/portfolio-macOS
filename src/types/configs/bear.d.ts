export interface PersonalMdData {
  id: string;
  title: string;
  file: string;
  icon: string;
  excerpt: string;
  link?: string;
}

export interface PersonalData {
  id: string;
  title: string;
  icon: string;
  md: PersonalMdData[];
}
