import { V as Base, VExtend } from "@banquette/validation/v";
import { Model } from './type/model';

export const V = VExtend({
    ...Base,
    Model
});
