import { Container } from "inversify";
/**
 * Use inversify as the dependency injection container for all tools.
 * You can give it an existing container so services will register onto it.
 */
export declare function useInversifyContainer(container?: Container): void;
