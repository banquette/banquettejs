import { UrlParameterType } from "./constants";

export interface UrlParameterInterface {
    /**
     * Where the parameter should be added.
     */
    type: UrlParameterType;

    /**
     * The value of the parameter.
     */
    value: string;
}
