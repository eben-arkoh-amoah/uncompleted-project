import { CountryItemTs } from "../../types/CountryItem";
import {Link} from "react-router-dom";

export const CountryItem = ({name,population,region,capital,flag}:CountryItemTs) => {
    return(
        <div className="countryItems box--shadow">
          <Link to={`/country/${name}`}>
            <div className="img--area">
                <img src={flag} alt="Bandeira do Pais" />
            </div>
            <div className="data--area">
                <p className="country--area">{name}</p>
                <p>Population<span> {population.toLocaleString("en")} </span></p>
                <p>Region<span> {region}</span></p>
                <p>Capital<span> {capital}</span></p>
            </div>
          </Link>
        </div>
    )
}