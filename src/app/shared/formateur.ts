import { User } from "./user";

export interface Formateur {
    id: number,
    presentation_text: string,
    presentation_video: string,
    experience_years: number,
    linkekin_link: string,
    certified: boolean | false,
    user: User

}