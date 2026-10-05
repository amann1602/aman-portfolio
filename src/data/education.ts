export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  grade: string;
  gradeLabel: string;
  location: string;
  isCurrent: boolean;
}

export const educationList: EducationItem[] = [
  {
    "id": "mit-adt",
    "institution": "MIT ADT University, Pune",
    "degree": "B.Tech in Computer Science (AI & Analytics)",
    "period": "2023 – Present",
    "grade": "8.14 CGPA",
    "gradeLabel": "Current CGPA",
    "location": "Pune, Maharashtra, India",
    "isCurrent": true
  },
  {
    "id": "new-arts",
    "institution": "New Arts, Commerce and Science College, Shevgaon",
    "degree": "Higher Secondary Certificate (HSC)",
    "period": "2021 – 2023",
    "grade": "81.33%",
    "gradeLabel": "Percentage",
    "location": "Shevgaon, Maharashtra, India",
    "isCurrent": false
  },
  {
    "id": "bharde-highschool",
    "institution": "Balasaheb Bharde High School, Shevgaon",
    "degree": "Secondary School Certificate (SSC)",
    "period": "2020 – 2021",
    "grade": "88%",
    "gradeLabel": "Percentage",
    "location": "Shevgaon, Maharashtra, India",
    "isCurrent": false
  }
];
