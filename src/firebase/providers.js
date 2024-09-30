import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName, email, photoURL, uid} = result.user;

        return {
            ok: true,
            //user info
            displayName, email, photoURL, uid
        }

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;


        return {
            ok: false,
            errorCode, errorMessage
        }
    }
}

export const registerUserWithEmailAndPassword = async ({email, password, displayName}) => {
    try{
        console.log({email, password, displayName})

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        console.log('resp:', resp)

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch(error) {

        console.log('Error:', error)
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}