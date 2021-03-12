import { Injector } from "../injector";
import { ExceptionInterface } from "./exception.interface";

/**
 * Base class for all exceptions of the Webeak dev tools.
 *
 * Do NOT use the default Error class because of:
 * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
 *
 * And more particularly because of:
 *
 * "Unfortunately, these workarounds will not work on Internet Explorer 10 and prior.
 * One can manually copy methods from the prototype onto the instance itself (i.e. FooError.prototype onto this), but the prototype chain itself cannot be fixed."
 *
 * To keep IE 10 compatibility, the most reliable way is to have our own base class.
 *
 * The design is inspired by the article of Krzysztof Cwalina with many modifications.
 * @see https://docs.microsoft.com/en-us/archive/blogs/kcwalina/how-to-design-exception-hierarchies
 *
 * To summarize the logic, we have two types of errors:
 *   - usage errors
 *   - system errors
 *
 * #
 * # Usage errors (aka "bug error")
 * #
 *
 * Usage exceptions are errors that can be fixed by modifying the code, they must always be of type
 * `UsageException` and contain a detailed message in english explaining the problem and how to fix it.
 *
 * Usage exceptions CAN be avoided, so they don't require a custom type because
 * they should never occur in the first place.
 *
 * You can see this kind of error as a "bug error". It's an error that occurs because some part of the code
 * before the error didn't do its job properly. It could have been avoided 100% of the time.
 *
 * We will find common errors (like calling a function with invalid parameters, etc) in this category.
 *
 * A usage error MUST NOT be translated. The end user will only see the real message in a dev environment.
 *
 * #
 * # System errors (aka "runtime error")
 * #
 *
 * System exceptions are errors that cannot be completely avoided by modifying the code.
 * For this kind of error you MUST create a custom exception type so it can be caught and
 * a custom logic can then be executed.
 *
 * In his article, Krzysztof Cwalina distinguishes two type of system error depending
 * on if the system can recover from them or not.
 *
 * I choose not to because in most cases the code throwing the exception will not be able to judge or its recoverability,
 * which can largely depend on the calling code.
 *
 * For example, a FileNotFoundException could be a recoverable error as well as a critical system failure,
 * it depends on the use case.
 *
 * So to simplify we will NOT differentiate system errors. The rules simply are:
 *
 *   - a system error MUST have a custom type,
 *   - the calling code can catch the error and execute a custom recovery logic, if possible,
 *   - a system error MUST be in the end user language, and be translated if necessary. The error may be shown to the end user.
 */
export abstract class Exception implements ExceptionInterface {
    private static _IsDev: boolean|null = null;

    public constructor(public readonly message: string,
                       public readonly previous?: Exception|null,
                       public readonly extra?: any) {

    }

    /**
     * Offers and easy way to test if the current env is dev.
     */
    protected static IsDev(): boolean {
        if (Exception._IsDev === null) {
            // SharedConfiguration has the particularity to be also registered as a string constant so it can
            // be imported anywhere without circular dependency error.
            const conf: any = Injector.Get('SharedConfiguration');
            Exception._IsDev = conf.get('env') === 'dev';
        }
        return Exception._IsDev;
    }
}
