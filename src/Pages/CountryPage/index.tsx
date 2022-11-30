import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import { api } from "../../api";
import { CountryTs } from "../../types/Country";
import { SingleCountry } from "../../Components/SingleCountry";
import React from "react";
export const all = React.createContext({}); 


export const CountryPage = () => {
const {name, code} = useParams();



const [loading, setLoading] = useState(false);
const [country, setCountry] = useState<CountryTs[]>([]);

const getCountry = async (param: string)=>{
setLoading(true);
let country = name ? await api.getCountryByName(param) : await api.getCountryByCode(param);
setCountry(country);
console.log(country);
setLoading(false);
let countries = await api.getCountries()
    console.log(countries);
}

useEffect(
    ()=>{
        if(name) {
            getCountry(name)
        } else if(code) {
            getCountry(code)
        }
    },[code, name]);


    return(
        <div className="CountryPage">
           <Link to="/" id="back--button"> 
           {`<`}
           <span className="arrow--tail"></span>
           <span className="go-back-text">Back</span>
            </Link> 
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