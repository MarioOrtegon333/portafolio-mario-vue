// Este archivo contiene definiciones de tipos e interfaces que se utilizan en la aplicación, proporcionando una mejor tipificación y autocompletado en el código.

export interface Company {
    id: number;
    name: string;
    description: string;
    period: string;
    technologies: string[];
    companyType: string;
    location: string;
    position: string;
    projects: string;
    images: string[];
}

export interface Skill {
    id: number;
    name: string;
    description: string;
}

export interface SoftSkill {
    id: number;
    name: string;
    description: string;
}