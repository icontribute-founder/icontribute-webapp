export interface Authentication {
    email: string;
    type: string;
    tokens: Tokens;
    hasLogin: boolean;
}

export interface AuthUser {
    email: string;
    password: string;
    type: string;
    refreshToken?: string;
}

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export interface LogoutBody {
    refreshToken: string;
}

export interface DeleteAccountBody {
    email: string;
    accessToken: string;
    refreshToken: string;
}
