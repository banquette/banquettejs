import { GenericCallback } from "./types/types";

/**
 * Slightly modified versin of:
 * https://github.com/jfriend00/docReady
 */
let readyList: Array<{fn: GenericCallback, ctx: any}> = [];
let readyFired = false;
let readyEventHandlersInstalled = false;

// call this when the document is ready
// this function protects itself against being called more than once
function ready() {
    if (!readyFired) {
        // this must be set to true before we start calling callbacks
        readyFired = true;
        for (let i = 0; i < readyList.length; i++) {
            // if a callback here happens to add new ready handlers,
            // the docReady() function will see that it already fired
            // and will schedule the callback to run right after
            // this event loop finishes so all handlers will still execute
            // in order and no new ones will be added to the readyList
            // while we are processing the list
            readyList[i].fn.call(window, readyList[i].ctx);
        }
        // allow any closures held by these functions to free
        readyList = [];
    }
}

function readyStateChange() {
    if ( document.readyState === "complete" ) {
        ready();
    }
}

export function docReady(callback: GenericCallback, context?: any) {
    if (typeof callback !== "function") {
        throw new TypeError("callback for docReady(fn) must be a function");
    }
    // if ready has already fired, then just schedule the callback
    // to fire asynchronously, but right away
    if (readyFired) {
        setTimeout(function() {callback(context);}, 1);
        return;
    } else {
        // add the function and context to the list
        readyList.push({fn: callback, ctx: context});
    }
    // if document already ready to go, schedule the ready function to run
    // IE only safe when readyState is "complete", others safe when readyState is "interactive"
    if (document.readyState === "complete" || (!(<any>document).attachEvent && document.readyState === "interactive")) {
        setTimeout(ready, 1);
    } else if (!readyEventHandlersInstalled) {
        // otherwise if we don't have event handlers installed, install them
        if (document.addEventListener) {
            // first choice is DOMContentLoaded event
            document.addEventListener("DOMContentLoaded", ready, false);
            // backup is window load event
            window.addEventListener("load", ready, false);
        } else {
            // must be IE
            (<any>document).attachEvent("onreadystatechange", readyStateChange);
            (<any>window).attachEvent("onload", ready);
        }
        readyEventHandlersInstalled = true;
    }
}
