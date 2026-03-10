interface AuthState {
    isSignedIn: boolean;
    username: string | null;
    userId: string | null;
}

type AuthContext = {
    isSignedIn: boolean;
    username: string | null;
    userId: string | null;
    refreshAuth: () => Promise<Boolean>;
    signIn: () => Promise<boolean>;
    signOut: () => Promise<boolean>;
}