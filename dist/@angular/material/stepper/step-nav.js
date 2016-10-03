var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortalDirective } from '../core';
/** Used to flag step nav for use with the portal directive */
export var MdStepNav = (function (_super) {
    __extends(MdStepNav, _super);
    function MdStepNav(templateRef, viewContainerRef) {
        _super.call(this, templateRef, viewContainerRef);
    }
    MdStepNav = __decorate([
        Directive({
            selector: '[md-step-nav]',
        }), 
        __metadata('design:paramtypes', [TemplateRef, ViewContainerRef])
    ], MdStepNav);
    return MdStepNav;
}(TemplatePortalDirective));

//# sourceMappingURL=step-nav.js.map
