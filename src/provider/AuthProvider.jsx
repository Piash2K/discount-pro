import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    // console.log(user,loading)
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleProvider= new GoogleAuthProvider();
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("logOut")
            }).catch((error) => {
                // An error happened.
            });
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        // signOut,
        logOut,
        signInWithEmail,
        googleProvider,
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;