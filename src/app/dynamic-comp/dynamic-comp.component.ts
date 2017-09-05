import { Component, OnInit,ViewChild,ViewContainerRef,ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { Child11Component } from './child11/child11.component';
import { state } from '@angular/animations';

@Component({
  selector: 'dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.scss']
})
export class DynamicCompComponent implements OnInit {
  @ViewChild("dyncomp",{read:ViewContainerRef})
  dyncomp:ViewContainerRef;

  comp1:ComponentRef<Child11Component>;
  comp2:ComponentRef<Child11Component>;

  constructor(
    private resolver:ComponentFactoryResolver) {

  }

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log("动态创建组件的实例...");
    const childComp=this.resolver.resolveComponentFactory(Child11Component);
    this.comp1=this.dyncomp.createComponent(childComp); 
    this.comp1.instance.title="设置一个新的标题";
    this.comp1.instance.btnClick.subscribe((param)=>{
      console.log(param);
    });

    //可以创建多个组件实例出来
    // this.dyncomp.createComponent(childComp); 
    // this.dyncomp.createComponent(childComp); 
    // this.dyncomp.createComponent(childComp); 
    // this.dyncomp.createComponent(childComp); 
    // this.dyncomp.createComponent(childComp); 
    
    /**
     * createComponent方法可以调用很多次，会动态创建出多个组件实例
     * 方法有第二个参数，表示组件渲染的顺序
     */
    this.comp2=this.dyncomp.createComponent(childComp,0); 
  }

  public destoryChild():void{
    this.comp1.destroy();
  }
}
