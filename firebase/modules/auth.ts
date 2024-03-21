import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../init";

export const signInWithEmail = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return await signOut(auth);
};
