export interface StandardErrorForm {
    error: string;
    message: string;
    status?: string;
}
export const error401: object = {
    status: 'error',
    message: 'Unauthorized',
}