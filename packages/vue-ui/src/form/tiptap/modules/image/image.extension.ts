import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Image as BaseImage, ImageOptions } from "@tiptap/extension-image";

export interface BtImageOptions extends ImageOptions {
    sizes: Record<string, {width?: string|null, height?: string|null}>;
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        btImage: {
            setSize: (options: {
                size?: string|null,
                width?: string|null,
                height?: string|null
            }) => ReturnType;
        };
    }
}
export const Image = BaseImage.extend<BtImageOptions>({
    addAttributes() {
        return {
            ...this.parent?.(),
            width: {
                default: null,
                renderHTML: (attributes) => {
                    return attributes.width !== null ? {style: `width: ${attributes.width}`} : {};
                }
            },
            height: {
                default: null,
                renderHTML: (attributes) => {
                    return attributes.height !== null ? {style: `height: ${attributes.height}`} : {};
                }
            }
        }
    },
    addCommands() {
        return {
            ...this.parent?.(),
            setSize: (options) => ({tr, dispatch}) => {
                const selectedNode = (tr.selection as any).node;
                let width: string|null = options.width || null;
                let height: string|null = options.height || null;
                if (!isNullOrUndefined(options.size)) {
                    if (!isObject(this.options.sizes) || isUndefined(this.options.sizes[options.size])) {
                        console.warn(`Invalid size "${options.size}". Available values are: ${Object.keys(this.options.sizes).join(', ')}.`);
                        return false;
                    }
                    width = this.options.sizes[options.size].width || null;
                    height = this.options.sizes[options.size].height || null;
                }
                if ((width === null && height === null) || !selectedNode) {
                    return false;
                }

                const attributes = {
                    ...selectedNode.attrs,
                    ...{width, height}
                }
                const node = this.type.create(attributes);

                if (dispatch) {
                    tr.replaceRangeWith(tr.selection.from, tr.selection.to, node);
                }
                return true;
            }
        }
    }
});
