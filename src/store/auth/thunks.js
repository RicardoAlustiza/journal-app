import { signInWithGoogle, registerUserWithEmailAndPassword, logInUserWithEmailPassword, logOutFirebase } from "../../firebase/providers"
import { clearNotesLogOut } from "../journal"
import { checkingCredentials, logout, login } from "./"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials())

        const result = await signInWithGoogle()

        if(!result.ok){
            return dispatch( logout(result.errorMessage))
        }

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const result = await registerUserWithEmailAndPassword({email, password, displayName})

        if(!result.ok){
            return dispatch( logout(result))
        }

        dispatch(login(result))
    }
}

export const startLoginUserWithEmailPassword = ({email, password}) => {

    return async (dispatch) => {
        dispatch(checkingCredentials())

        const result = await logInUserWithEmailPassword({email, password})

        if(!result.ok){
            return dispatch( logout(result))
        }

        dispatch(login(result))
    }

}

export const startLogOut = () => {
    return async (dispatch) => {
        await logOutFirebase()

        dispatch(clearNotesLogOut())
        dispatch(logout())
    }
}