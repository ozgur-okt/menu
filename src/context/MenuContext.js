import { createContext,useState } from "react";
import { data } from "./data";

const MenuContext=createContext();

export const MenuProvider=({children})=>{
    const[menu, setMenu]=useState(data);

    const values={
        menu,
        setMenu,
    };

    return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>

};

export default MenuContext;

