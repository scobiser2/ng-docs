import { Component } from '@angular/core';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';

@Component({
  templateUrl: './component-styles.component.html',
  styleUrls: ['./component-styles.component.scss']
})
export class ComponentStylesComponent {

  anchor: Anchor[] = [
    {
      href: '#range-style',
      title: '范围化的样式'
    },
    {
      href: '#host',
      title: ':host'
    },
    {
      href: '#ngDeep',
      title: '::ng-deep'
    },
    {
      href: '#style-talk',
      title: '样式杂谈',
      children: [
        {
          href: '#model-style',
          title: '模板文件与样式文件'
        },
        {
          href: '#import-style',
          title: '引入样式文件'
        },
        {
          href: '#control-view',
          title: '控制视图的封装'
        }
      ]
    }
  ];

  code1 = `
    <h1>父组件</h1>
    <span class="color bgColor">父组件的内容</span>
    <child-styles1></child-styles1>
    `;
  code2 = `
    .bgColor {
        background-color: red;
    }
    `;
  code3 = `
    <h1>子组件</h1>
    <span class="color bgColor">
        子组件的内容
    </span>
    `;
  code4 = `
    .color {
        color: blue;
    }
    `;
  code5 = `
    <h1>父组件</h1>
    <child-styles2 class="first-element"></child-styles2>
    `;
  code6 = `
    :host(.first-element) {
        display: block;
        border: 1px solid red;
    }
    `;
  code7 = `
    <h1>父组件</h1>
    <child-styles3></child-styles3>
    `;
  code8 = `
    ::ng-deep .fatherStyle{
        color:blue;
    }
    `;
  code9 = `
    <h1>子组件</h1>
    <span class="fatherStyle">
        子组件的内容
    </span>
    `;
  code10 = `
    @Component({
        templateUrl: './xxx.html',
        styleUrls: ['./xxx.css']
    })
    `;
  code11 = `
    @Component({
        template: '
            <link rel="stylesheet" href="../../node_modules/xxx.css"><!--在模板当中引入样式-->
            <h1>父组件</h1>
            <child-component></child-component>
        ',
        styles: ['h1 { colore: blue; }']
    })
    `;
  code12 = `
    @import './xxx.css';
    `;
  code13 = `
    @Component({
        encapsulation: ViewEncapsulation.Native
    })
    `;
  code = `
    @Component({
        encapsulation: ViewEncapsulation.Native
    })
    `;
}
