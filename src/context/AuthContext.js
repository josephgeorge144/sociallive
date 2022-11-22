import { SatelliteAlt } from "@mui/icons-material";
import { useReducer } from "react";
import { createContext } from "react";
import AuthReducer from "./AuthReducer";
import { LoginStart,LoginSuccess,LoginFailure } from "./AuthActions";

const INITIAL_STATE = {
  user: {
    _id: "63600f85c59d2e56cf7a5425",
    username: 'jomol',
    email: 'jomol@sava.com',
    password: '$2b$10$QdRdoRfWCxZuzPAHCt4F5.Jvy4OdGmhjue1Xl94lxdfM1cEbCrMg6',
    profilePicture: '8.jpeg',
    coverPicture: '6.jpeg',
    followers: [ '', '', '635fe99e1a018aa87b28939e' ],
    followins: [ '635fe99e1a018aa87b28939e' ],
    isAdmin: false,
    createdAt: "2022-10-31T18:10:13.019Z",
    updatedAt: "2022-11-01T16:22:38.940Z",
  },
  // user:null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
        {children}
    </AuthContext.Provider>
  );
};
