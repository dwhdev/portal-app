export interface IAPIErrorResponse {
    ok: boolean;
    message?: string;
}

export interface IAPILoginResponse {
    ok: boolean;
    expiresIn: number;
}
