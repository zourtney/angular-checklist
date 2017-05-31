"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var checklist_directive_1 = require("./directives/checklist.directive");
var ChecklistModule = (function () {
    function ChecklistModule() {
    }
    return ChecklistModule;
}());
ChecklistModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    checklist_directive_1.ChecklistDirective,
                ],
                exports: [
                    checklist_directive_1.ChecklistDirective,
                ],
                imports: [
                    common_1.CommonModule,
                ],
            },] },
];
/** @nocollapse */
ChecklistModule.ctorParameters = function () { return []; };
exports.ChecklistModule = ChecklistModule;
//# sourceMappingURL=index.js.map