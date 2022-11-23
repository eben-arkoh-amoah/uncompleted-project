import { useRoutes } from "react-router-dom";
import { Countries } from "../Pages/Countries";
import { CountryPage } from "../Pages/CountryPage";
// import { CodeCountryPage } from "../Pages/CodeCountry/CodeCountry";
// import { NameCountryPage } from "../Pages/NameCountry/NameCountry";
export const MainRoutes = ( ) => {
    return useRoutes([
        {path:`/`, element: <Countries />},
        {path:`/country/:name`, element: <CountryPage/>},
        {path:`/code/:code`, element: <CountryPage />}
    ])
}