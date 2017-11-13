import {Directive, Input, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // lets us bind to host properties

    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
           this.isOpen = !this.isOpen;
    }
}
