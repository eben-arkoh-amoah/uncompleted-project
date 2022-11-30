import { SingleCountryTs } from "../../types/SingleCountry"
import { Link } from "react-router-dom";


export const SingleCountry = ({
    name,nativeName,population,region,subregion,capital,
    topLevelDomain,currencie,languages,borders,flag
}:SingleCountryTs) => {
    return(
     <div className="SingleCountry">
          <img src={flag} alt={`country Name : ${name}`} />
          <div className="country--data">
             <h1>{name}</h1> 
             <div className="data--firstArea">
              <div>
              <p><span>Native Name : </span>{nativeName}</p>
               <p><span>Region : </span>{region}</p>
               {capital &&
                 <p><span>Capital : </span>{capital}</p>
               }
               {currencie && 
                 <p><span>Currencie : </span>{currencie.map(item => item.name)}</p>
               }
              </div>
              <div>
               <p><span>Population : </span>{population.toLocaleString("en")}</p>
               <p><span>Subregion : </span>{subregion}</p>
               <p className="topLevel"><span>Top Level Dmain </span>{topLevelDomain}</p>
               <p><span>Languages : </span>{languages.map((item,index)=>(<span key={index}>{item.name}</span>))}</p>
              </div>
              </div> 
          <div className="border--area">
            <p>Border Countries :</p>
            <div className="borders">
              {borders &&
              borders.map((borderCode,index)=>
               <span className="singleBorder" key={index}>{borderCode}</span>
               )}
            </div>
          </div>   
          </div> 
     </div>

    )
}