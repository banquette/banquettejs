import { AlertOptionsInterface } from "./alert-options.interface";
/**
 * Public options type to give more flexibility to the end-user.
 */
export declare type ShortenedAlertOptions = Partial<Omit<AlertOptionsInterface, 'type' | 'message'>> & {
    message: string;
};
