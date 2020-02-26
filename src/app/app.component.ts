import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <div>Click to lazy</div>
      <button (click)='getLazy1()'>lazy 1</button>
      <button (click)='getLazy2()'>lazy 2</button>
    </div>
  `
})
export class AppComponent {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  async getLazy1() {
    this.viewContainerRef.clear();
    const { Lazy1Component } = await import('./lazy1.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy1Component)
    );
  }

  async getLazy2() {
    this.viewContainerRef.clear();
    const { Lazy2Component } = await import('./lazy2.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy2Component)
    );
  }
}