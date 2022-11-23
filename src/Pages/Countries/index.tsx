import { InputArea } from "../../Components/Input";
import { api } from "../../api";
import  {useEffect, useState} from "react";
import { CountriesTs } from "../../types/Countries";
import { CountryItem } from "../../Components/CountryItem";

export const Countries = () => {
  const [countries,setCountries] = useState<CountriesTs[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("")

  useEffect(
    ()=>{getAllCountries()},[]
  );

  const getAllCountries = async () => {
    setLoading(true);
    let countries = await api.getCountries()
    setCountries(countries);
    console.log(countries);
    setLoading(false);
  } 

  const lowerSearch = search.toLocaleLowerCase()

  const filterCountries = countries.filter(country => 
    country.name.toLowerCase().includes(lowerSearch) || country.region.toLowerCase().includes(lowerSearch))
    return(
        <main className="main">
        <InputArea
        value={search}
        Search = {setSearch}
        />
        <div className="countries">
            {loading &&
                <div className="loading">loading...</div>  
            }
            {!loading &&
                filterCountries.map((item,index)=> (
                  <CountryItem 
                  key={index}
                  name={item.name}
                  population={item.population}
                  region={item.region}
                  capital={item.capital}
                  flag={item.flags.png}
                  />
                ))
            }
        </div>
        </main>
    )
}