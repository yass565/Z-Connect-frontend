import { User } from "./user";

interface Apprenant {
    id: number,
    user: User
}

interface Formateur {
    id: number,
    presentation_video: string,
    experience_years: number,
    linkekin_link: string,
    certified: boolean | false,
    user: User

}

export interface Formation {
                        
    id: number,
    id_formateur: number,
    title: string,
    description: string,
    level: string,
    skill: string,
    created_at: Date,
    price: number,
    apprenants: Apprenant[],
    formateur: Formateur
    
}