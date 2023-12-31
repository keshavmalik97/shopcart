import react, {createContext,useContext,useReducer} from "react";

//Data layer preparation
export const StateContext=createContext();
//Wrapping app
export const StateProvider =({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from data layer
export const useStateValue = () => useContext(StateContext);
