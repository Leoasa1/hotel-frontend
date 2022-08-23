import { createContext, useReducer } from "react"

const INITIAL_STATE = {
  room_type:undefined,
  bed: undefined,
  check_in: undefined,
  check_out:undefined
}

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload
    case "RESET_SEARCH":
      return INITIAL_STATE
    default:
      return state;
  }
}

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider value={{
      room_type: state.room_type,
      bed: state.bed,
      check_in: state.check_in,
      check_out:state.check_out,
      dispatch
    }}>
      {children}
    </SearchContext.Provider>
  )
}