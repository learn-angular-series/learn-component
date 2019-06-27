import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { Child11Component } from './child11/child11.component';
import { state } from '@angular/animations';

@Component({
  selector: 'dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.scss']
})
export class DynamicCompComponent implements OnInit {
  //这里引用模板里面定义的dyncomp容器标签
  @ViewChild("dyncomp", { read: ViewContainerRef, static: true })
  dyncomp: ViewContainerRef;

  comp1: ComponentRef<Child11Component>;
  comp2: ComponentRef<Child11Component>;

  constructor(
    private resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log("动态创建组件的实例...");
    const childComp = this.resolver.resolveComponentFactory(Child11Component);
    this.comp1 = this.dyncomp.createComponent(childComp);
    this.comp1.instance.title = "111";
    this.comp1.instance.btnClick.subscribe((param) => {
      console.log("--->" + param);
    });

    //可以创建多个组件实例出来
    // let temp1 = this.dyncomp.createComponent(childComp);
    // temp1.instance.title = "第2个动态子组件";
    // let temp2 = this.dyncomp.createComponent(childComp);
    // temp2.instance.title = "第3个动态子组件";
    // let temp3 = this.dyncomp.createComponent(childComp);
    // temp3.instance.title = "第4个动态子组件";
    // let temp4 = this.dyncomp.createComponent(childComp);
    // temp4.instance.title = "第5个动态子组件";
    // let temp5 = this.dyncomp.createComponent(childComp, 0);
    // temp5.instance.title = "第6个动态子组件";

    /**
     * createComponent方法可以调用很多次，会动态创建出多个组件实例
     * 方法有第二个参数，表示组件渲染的顺序
     */
    this.comp2 = this.dyncomp.createComponent(childComp);
    this.comp2.instance.title = "第二个子组件";
  }

  public destoryChild(): void {
    this.comp1.destroy();
    this.comp2.destroy();
  }
}
