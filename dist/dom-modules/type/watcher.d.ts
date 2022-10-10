import { AbstractDomModule } from "../abstract.dom-module";
import { DomModulesScannerService } from "../dom-modules-scanner";
export declare class Watcher extends AbstractDomModule {
    private scanner;
    private observer;
    constructor(scanner: DomModulesScannerService);
    /**
     * @inheritDoc
     */
    protected bind(): any;
    /**
     * @inheritDoc
     */
    unbind(): void;
}
