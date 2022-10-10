/*!
 * Banquette Event v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./constant.js"),t=require("./dispatch-result.js"),r=require("./event-arg.js"),s=require("./event-dispatcher.service.js"),i=require("./event-dispatcher.js"),n=require("./pipeline/event-pipeline.js"),u=require("./pipeline/sequence-context.js");exports.DefaultSequenceErrorBehavior=e.DefaultSequenceErrorBehavior,exports.DefaultSequenceName=e.DefaultSequenceName,Object.defineProperty(exports,"SequenceErrorBasicBehavior",{enumerable:!0,get:function(){return e.SequenceErrorBasicBehavior}}),exports.DispatchResult=t.DispatchResult,Object.defineProperty(exports,"DispatchResultStatus",{enumerable:!0,get:function(){return t.DispatchResultStatus}}),exports.EventArg=r.EventArg,exports.EventDispatcherService=s.EventDispatcherService,exports.EventDispatcher=i.EventDispatcher,exports.EventPipeline=n.EventPipeline,exports.SequenceContext=u.SequenceContext;
