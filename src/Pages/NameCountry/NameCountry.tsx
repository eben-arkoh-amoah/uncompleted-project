import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import { api } from "../../api";
import { CountryTs } from "../../types/Country";
import { SingleCountry } from "../../Components/SingleCountry";

export const NameCountryPage = () => {
const {name} = useParams();

const [loading, setLoading] = useState(false);
const [country, setCountry] = useState<CountryTs[]>([]);

useEffect(
    ()=>{
        if(name) {
            getCountry(name)
        } 
    },[name])

const getCountry = async (param: string)=>{
setLoading(true);
let country =  await api.getCountryByName(param);
setCountry(country);
console.log(country);
setLoading(false);
}

    return(
        <div className="CountryPage">
           <Link to="/" id="back--button">Back</Link> 
           {loading &&
              <div className="loading">Loading...</div>
           }
           {!loading &&
              country.map((item,index) => (
                <SingleCountry 
                flag={item.flags.png}
                name={item.name}
                nativeName={item.nativeName}
                population={item.population}
                region={item.region}
                subregion={item.subregion}
                capital={item.capital}
                topLevelDomain={item.topLevelDomain[0]}
                currencie = {item.currencies && item.currencies}
                languages = {item.languages}
                borders = {item.borders}
                key = {index}
                />
              ))
           }
        </div>
    )
}