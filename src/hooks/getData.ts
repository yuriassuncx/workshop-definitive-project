import { useEffect, useState } from "react";
import axios from "axios";

export interface AnimalProps {
    id?: number;
    image_link: string;
    name: string;
    latin_name: string;
    habitat: string;
    diet: string;
    geo_range: string;
}

export function getData() {
    const [getAnimalsData, setGetAnimalsData] = useState<AnimalProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            axios("http://zoo-animal-api.herokuapp.com/animals/rand/10", {
                headers: {
                    Accept: "XMLHttpRequest"
                }
            }).then(response => setGetAnimalsData(response.data))
        }, [])

    return { getAnimalsData }


}