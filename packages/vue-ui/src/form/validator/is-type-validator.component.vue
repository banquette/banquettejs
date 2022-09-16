<script lang="ts">
import { UsageException } from "@banquette/exception/usage.exception";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { ensureString } from "@banquette/utils-type/ensure-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { IsType, Type } from "@banquette/validation/type/is-type";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { ValidatorComponent } from "./validator.component";

const TypesMap: Record<string, Type> = {
    'string': Type.String,
    'number': Type.Number,
    'numeric': Type.Numeric,
    'boolean': Type.Boolean,
    'object': Type.Object,
    'array': Type.Array,
    'symbol': Type.Symbol,
    'undefined': Type.Undefined,
    'null': Type.Null
};

@Component({name: 'bt-validate-is-type', template: false})
export default class ValidateIsTypeComponent extends ValidatorComponent {
    @Prop({type: [String, Array], required: true, transform: (value: any) => {
        let output: Type = 0;
        for (let type of ensureArray(value)) {
            type = type.toLowerCase();
            if (!isUndefined(TypesMap[type])) {
                output |= TypesMap[type];
            }
        }
        if (!output) {
            throw new UsageException(`Invalid type "${ensureString(value)}", should be one of: ${Object.keys(TypesMap).join(',')}.`);
        }
        return output;
    }}) public allowed!: Type;

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return IsType(this.allowed, {message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
