import 'reflect-metadata';
import { Assert } from "../decorator/assert";
import { V } from "../v";
import { Injector } from "@banquette/dependency-injection";
import { ModelValidationMetadataService } from "../model-validation-metadata.service";
import { UsageException } from "@banquette/exception";
import { Constructor } from "@banquette/utils-type";
import { Alias } from "../../../model/src/decorator/alias";
import { ModelAliasNotFoundException } from "../../../model/src/exception/model-alias-not-found.exception";
import { ValidatorInterface } from "@banquette/validation";
import { ModelMetadataService } from "@banquette/model";

describe('Metadata storage', () => {
    class User {
        public username: string = '';
        public email: string = '';
    }
    const metadata = Injector.Get(ModelValidationMetadataService);

    beforeEach(() => {
        metadata.clear();
    });

    test('Register property', () => {
        const v = V.NotEmpty();
        metadata.register(User, 'username', v);
        expect(metadata.get(User, 'username')).toStrictEqual(v);
    });

    test('Throw when registering a property twice', () => {
        const v = V.NotEmpty();
        metadata.register(User, 'username', v);
        expect(() => metadata.register(User, 'username', V.Invalid())).toThrow(UsageException);
        expect(metadata.get(User, 'username')).toStrictEqual(v);
    });

    test('Replace existing validator', () => {
        const v = V.NotEmpty();
        metadata.register(User, 'username', V.Invalid());
        metadata.replace(User, 'username', v);
        expect(metadata.get(User, 'username')).toStrictEqual(v);
    });

    test('Test if a validator has been defined', () => {
        metadata.register(User, 'username', V.Invalid());
        expect(metadata.has(User, 'username')).toEqual(true);
        expect(metadata.has(User, 'email')).toEqual(false);
    });

    test('Non existing property returns null', () => {
        expect(metadata.get(User, 'nonExisting')).toEqual(null);
    });

    test('Non existing validator returns null', () => {
        // "username" exists but no validator has been set on it.
        expect(metadata.get(User, 'username')).toEqual(null);
    });

    test('Remove a validator', () => {
        const v = V.NotEmpty();
        metadata.register(User, 'username', V.Invalid());
        metadata.remove(User, 'username');
        expect(metadata.get(User, 'username')).toEqual(null);
    });

    test('Remove all validators', () => {
        metadata.register(User, 'username', V.NotEmpty());
        metadata.register(User, 'email', V.And(V.NotEmpty(), V.Email()));
        metadata.clear();
        expect(metadata.get(User, 'username')).toEqual(null);
        expect(metadata.get(User, 'email')).toEqual(null);
    });
});

describe('Decorator', () => {
    const modelMetadata = Injector.Get(ModelMetadataService);
    const validationMetadata = Injector.Get(ModelValidationMetadataService);
    let ctor!: Constructor;

    beforeEach(() => {
        modelMetadata.clear();
        validationMetadata.clear();
        @Alias('User')
        class User {
            @Assert(V.NotEmpty())
            public username: string = '';

            @Assert(V.And(V.NotEmpty(), V.Email()))
            public email: string = '';
        }
        ctor = User;
    });

    test('@Assert does set validators on properties', () => {
        expect(validationMetadata.get(ctor, 'username')).not.toEqual(null);
        expect(validationMetadata.get(ctor, 'email')).not.toEqual(null);
    });

    test('Can get metadata through model aliases', () => {
        expect(validationMetadata.get('User', 'username')).not.toEqual(null);
    });
});

describe('Validation', () => {
    const modelMetadata = Injector.Get(ModelMetadataService);
    const validationMetadata = Injector.Get(ModelValidationMetadataService);
    let userCtor!: Constructor;
    let categoryCtor!: Constructor;

    beforeEach(() => {
        modelMetadata.clear();
        validationMetadata.clear();
        @Alias('Category')
        class Category {
            @Assert(V.Max(2))
            public name: string = '';

            @Assert(V.Model('User'))
            public user!: User;
        }

        @Alias('User')
        class User {
            @Assert(V.NotEmpty())
            public username: string = '';

            @Assert(V.And(V.NotEmpty(), V.Email()))
            public email: string = '';

            @Assert(V.And(V.NotEmpty(), V.Model(Category)))
            public category!: Category;
        }
        userCtor = User;
        categoryCtor = Category;
    });

    test('Can get a validator from the metadata', () => {
        expect(validationMetadata.getValidator(userCtor)).toMatchObject({validate: expect.any(Function)});
        expect(validationMetadata.getValidator(categoryCtor)).toMatchObject({validate: expect.any(Function)});
    });

    test('Get `null` when asking for the validator of a model with no @Assert', () => {
        class Test {}
        expect(validationMetadata.getValidator(Test)).toEqual(null);
    });

    test('Throw an exception when trying to get the validator using a non existing alias', () => {
        // That's the alias resolver that throws here, because we give a `string` as identifier.
        expect(() => validationMetadata.getValidator('Test')).toThrow(ModelAliasNotFoundException);
    });

    test('The validator is working as expected', () => {
        const validator = validationMetadata.getValidator(userCtor) as ValidatorInterface;
        expect(validator.validate(new userCtor()).getViolationsMap()).toMatchObject({
            '/username': expect.arrayContaining([expect.objectContaining({type: 'not-empty'})]),
            '/email': expect.arrayContaining([expect.objectContaining({type: 'not-empty'})]),
            '/category': expect.arrayContaining([expect.objectContaining({type: 'not-empty'})])
        });
    });

    test('The validator is working as expected (deep)', () => {
        const user: any = new userCtor();
        user.category = new categoryCtor();
        user.category.name = 'invalid';

        const validator = validationMetadata.getValidator(userCtor) as ValidatorInterface;
        expect(validator.validate(user).getViolationsMap()).toMatchObject({
            '/username': expect.arrayContaining([expect.objectContaining({type: 'not-empty'})]),
            '/email': expect.arrayContaining([expect.objectContaining({type: 'not-empty'})]),
            '/category/name': expect.arrayContaining([expect.objectContaining({type: 'max'})]),
        });
    });

    test('Validate a model by using the Model validator directly', () => {
        const user: any = new userCtor();
        user.category = new categoryCtor();
        user.category.name = 'invalid';

        expect(V.Model(userCtor).validate(user).getViolationsMap()).toMatchObject({
            '/username': expect.arrayContaining([expect.objectContaining({type: 'not-empty'})]),
            '/email': expect.arrayContaining([expect.objectContaining({type: 'not-empty'})]),
            '/category/name': expect.arrayContaining([expect.objectContaining({type: 'max'})]),
        });
    });
});
