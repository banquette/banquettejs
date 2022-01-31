import { AlertOptionsInterface } from "../component/alerts-stack/alert-options.interface";

/**
 * Public options type to give more flexibility to the end-user.
 */
export type ShortenedAlertOptions = Partial<Omit<AlertOptionsInterface, 'type' | 'message'>> & {message: string};
