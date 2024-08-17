import {urls} from "@/constants/urls";
import {BearerToken} from "@/constants/BearerToken";
import ILanguage from "@/models/ILanguage";


type LanguageProps = { languages: ILanguage[] }
export const LanguagesService = {
    getAllLanguages: async (): Promise<LanguageProps> => {
        const response = await fetch(urls.languages.base,
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: BearerToken
                }
            }).then(response => response.json());
        return response;
    },
};
