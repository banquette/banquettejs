import 'reflect-metadata';
import { Injector } from "@banquette/dependency-injection";
import {
    Alias,
    ModelAliasNotFoundException,
    Pojo,
    ModelMetadataService,
    ModelTransformMetadataService,
    Factory,
    PojoTransformerSymbol,
    Primitive,
    Type
} from "../src";
import { UsageException } from "@banquette/exception";
import { checkIfPropertyTransformer } from "./utils";

describe('Create manually', () => {
    class Foo {
        public a: string = 'a';
        public b: number = 2;
    }

    const metadata = Injector.Get(ModelTransformMetadataService);

    beforeEach(() => {
        metadata.clear();
    });

    test('Register property', () => {
        const t = Primitive(Type.String);
        metadata.register(Foo, PojoTransformerSymbol, 'a', t);
        expect(metadata.get(Foo, PojoTransformerSymbol, 'a')).toStrictEqual(t);
    });

    test('Throw when registering a property twice', () => {
        const t = Primitive(Type.String);
        metadata.register(Foo, PojoTransformerSymbol, 'a', t);
        expect(() => metadata.register(Foo, PojoTransformerSymbol, 'a', Primitive())).toThrow(UsageException);
        expect(metadata.get(Foo, PojoTransformerSymbol, 'a')).toStrictEqual(t);
    });

    test('Replace existing transformer', () => {
        const t = Primitive();
        metadata.register(Foo, PojoTransformerSymbol, 'a', Primitive());
        metadata.replace(Foo, PojoTransformerSymbol, 'a', t);
        expect(metadata.get(Foo, PojoTransformerSymbol, 'a')).toStrictEqual(t);
    });

    test('Test if a transformer has been defined', () => {
        metadata.register(Foo, PojoTransformerSymbol, 'a', Primitive());
        expect(metadata.has(Foo, PojoTransformerSymbol, 'a')).toEqual(true);
        expect(metadata.has(Foo, PojoTransformerSymbol, 'b')).toEqual(false);
    });

    test('Non existing property returns null', () => {
        expect(metadata.get(Foo, PojoTransformerSymbol, 'nonExisting')).toEqual(null);
    });

    test('Non existing transformer returns null', () => {
        // "username" exists but no transformer has been set on it.
        expect(metadata.get(Foo, PojoTransformerSymbol, 'a')).toEqual(null);
    });

    test('Remove a transformer', () => {
        metadata.register(Foo, PojoTransformerSymbol, 'a', Primitive());
        metadata.remove(Foo, PojoTransformerSymbol, 'a');
        expect(metadata.get(Foo, PojoTransformerSymbol, 'a')).toEqual(null);
    });

    test('Remove all validators', () => {
        metadata.register(Foo, PojoTransformerSymbol, 'a', Primitive());
        metadata.register(Foo, PojoTransformerSymbol, 'b', Primitive());
        metadata.clear();
        expect(metadata.get(Foo, PojoTransformerSymbol, 'a')).toEqual(null);
        expect(metadata.get(Foo, PojoTransformerSymbol, 'b')).toEqual(null);
    });

    test('Define custom factory', () => {
        class Foo {
            public constructor(public value: number) {
            }
        }
        const metadata = Injector.Get(ModelMetadataService);
        metadata.registerFactory(Foo, () => {
            return new Foo(2);
        });
        expect(metadata.getFactory(Foo)().value).toEqual(2);
    });
});

describe('Create using decorators', () => {
    describe('@Alias', () => {
        const metadata = Injector.Get(ModelMetadataService);
        beforeEach(() => metadata.clear());

        test('Define a string alias', () => {
            @Alias('entity')
            class Entity {}
            expect(metadata.resolveAlias('entity')).toBe(Entity);
        });

        test('Define a symbol alias', () => {
            const s = Symbol();
            @Alias(s)
            class Entity {}
            expect(metadata.resolveAlias(s)).toBe(Entity);
        });

        test('Define two symbols in a single decorator', () => {
            const s = Symbol();
            @Alias(['entity', s])
            class Entity {}
            expect(metadata.resolveAlias('entity')).toBe(Entity);
            expect(metadata.resolveAlias(s)).toBe(Entity);
        });

        test('Define two symbols in a different decorators', () => {
            const s = Symbol();
            @Alias('entity')
            @Alias(s)
            class Entity {}
            expect(metadata.resolveAlias('entity')).toBe(Entity);
            expect(metadata.resolveAlias(s)).toBe(Entity);
        });

        test('Aliases are case sensitive', () => {
            @Alias('entity')
            class Entity {}
            expect(metadata.resolveAlias('entity')).toBe(Entity);
            expect(() => metadata.resolveAlias('Entity')).toThrow(ModelAliasNotFoundException);
        });
    });

    describe('@Factory', () => {
        const metadata = Injector.Get(ModelMetadataService);
        beforeEach(() => metadata.clear());

        test('Define custom factory', () => {
            @Factory(() => new Foo(2))
            class Foo {
                public constructor(public value: number) {
                }
            }
            expect(Injector.Get(ModelMetadataService).getFactory(Foo)().value).toEqual(2);
        });
    });

    describe('Transformers', () => {
        const metadata = Injector.Get(ModelTransformMetadataService);

        beforeEach(() => metadata.clear());

        test('Define a generic transformer', () => {
            class Entity {
                @Pojo()
                public username!: string;
            }
            checkIfPropertyTransformer(metadata.get(Entity, PojoTransformerSymbol,'username'));
        });
    });
});
