<script lang="ts">
import { UsageException } from "@banquette/exception";
import { ensureArray, ensureString, isUndefined } from "@banquette/utils-type";
import { IsType, Type, ValidatorInterface } from "@banquette/validation";
import { Component, Prop } from "@banquette/vue-typescript";
import { BtValidator } from "./validator.component";

const TypesMap: Record<string, Type> = {
    'string': Type.String,
    'number': Type.Number,
    'integer': Type.Integer,
    'numeric': Type.Numeric,
    'boolean': Type.Boolean,
    'object': Type.Object,
    'array': Type.Array,
    'symbol': Type.Symbol,
    'undefined': Type.Undefined,
    'null': Type.Null
};

@Component('bt-validate-is-type')
export default class BtValidateIsType extends BtValidator {
    @Prop({type: [String, Array], required: true, transform: (value: any) => {
        let output: number = 0;
        for (let type of ensureArray(value)) {
            type = type.toLowerCase();
            if (!isUndefined(TypesMap[type])) {
                output |= TypesMap[type];
            }
        }
        if (!output) {
            throw new UsageException(`Invalid type "${ensureString(value)}", should be one of: ${Object.keys(TypesMap).join(',')}.`);
        }
        return output as Type;
    }}) public allowed!: Type;

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return IsType(this.allowed, {message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
<template></template>
