import { useState } from 'react';
import {createContext } from 'react';


export const ThemeContext = createContext();


export const ThemeProvider = ({children}) =>{
    const [theme, settheme ]  = useState("light")

    const toggleTheme = () => {
        if(theme === "light"){
        settheme("dark")
    }else settheme("light")

    };
    return (

 <ThemeContext.Provider value={{theme, isLight: theme === "light",
 toggleTheme,}}>
    {children}
</ThemeContext.Provider>

    );
}