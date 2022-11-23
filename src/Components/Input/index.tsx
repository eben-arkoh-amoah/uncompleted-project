import { InputTs } from "../../types/Input"

export const InputArea = ({value, Search}: InputTs) => {

    return(
        <section className="InputArea">
            <input 
            type="text" className="box--shadow" 
            placeholder="Search by country"
            value={value}
            onChange={e => Search(e.target.value)}/>
            <select className="box--shadow"  onChange={e => Search(e.target.value)}>
                <option value="Filter by region" defaultValue={"Filter by region"} disabled>Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </section>
    )
}