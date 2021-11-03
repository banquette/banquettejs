import { VExtend, V as Base } from "@banquette/validation";
import { Model } from './type/model';

export const V = VExtend({
    ...Base,
    Model
});
