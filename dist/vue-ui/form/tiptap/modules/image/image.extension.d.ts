import { ImageOptions } from "@tiptap/extension-image";
export interface BtImageOptions extends ImageOptions {
    sizes: Record<string, {
        width?: string | null;
        height?: string | null;
    }>;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        btImage: {
            setSize: (options: {
                size?: string | null;
                width?: string | null;
                height?: string | null;
            }) => ReturnType;
        };
    }
}
export declare const Image: import("@tiptap/core").Node<BtImageOptions, any>;
