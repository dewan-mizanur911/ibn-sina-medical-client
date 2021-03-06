import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
  updateProfile
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
const yahooProvider = new OAuthProvider("yahoo.com");

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");

  
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const yahooSignIn = () => {
    return signInWithPopup(auth, yahooProvider);
  };

    const signInWithEmail = () => {
      return signInWithEmailAndPassword(auth, email, password);
    };

    const setNameAndImage = () => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {})
        .catch((error) => {
          setError(error.message);
        });
  };
  


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
      setIsLoading(false);
    });
  }, []);

  const logOut = () => {
    setIsLoading(true);
      signOut(auth)
        .then(() => {
          setUser({});
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(()=> setIsLoading(false));
    };

      const signup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            setNameAndImage();
            setMessage('New user created, Please Login');
          })
          .catch((err) => {
            setError(err.message);
            setMessage('User already exists, Go to login page')
          });
      };
      const getName = (e) => {
        setName(e?.target?.value);
      };
      const getEmail = (e) => {
        setEmail(e?.target?.value);
      };

      const getPassword = (e) => {
        setPassword(e?.target?.value);
      };

      const getPhoto = (e) => {
        setPhoto(e?.target?.value);
      };
  
    return { user, error, logOut, googleSignIn, isLoading, setIsLoading, facebookSignIn, githubSignIn, yahooSignIn, signup, getName, getEmail, getPassword, getPhoto, signInWithEmail, message };
}

export default useFirebase;