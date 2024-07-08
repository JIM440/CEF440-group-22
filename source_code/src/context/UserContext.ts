import { createContext } from 'react';

interface User {
    name?: string;
    email?: string;
    password?: string;
    telephone?: string;
    language?: string;
    photo?: string;
    role?: string;
    locations?: { latitude: number; longitude: number }[];
    forums?: string[];
}

interface UserContextType {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

const defaultUser: User = {};

const userContext = createContext<UserContextType>({
    user: defaultUser,
    setUser: () => {}
});

export { userContext };
export type { User };
