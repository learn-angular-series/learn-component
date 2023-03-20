import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { StandaloneComponentComponent } from './app/standalone-component/standalone-component.component';

if (environment.production) {
  enableProdMode();
}

/**
 * 直接从独立组件启动应用，彻底摆脱 NgModule 机制。
 * 事实上，从 Angular2 发布以来，社区对 NgModule 机制就有非常多的争议，NgModule 是一个典型的过度设计。
 * NgModule 机制引入了额外的复杂性，这个机制在其它任何前端框架中都没有出现过。
 * 参见：https://angular.io/guide/standalone-components
 */
bootstrapApplication(StandaloneComponentComponent);