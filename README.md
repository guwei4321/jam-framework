



## 简介
`jam-framework`是一个PC端JS框架。秉持 “如果有小而美的轮子，就不再造轮子” 宗旨在不断造轮子。

`jam-framework`没有采用最近流行的数据绑定模板，虚拟DOM等高深概念，而是采用基础易懂的DOM结构操作，所以现在还在用Jquery的站点可以直接使用。

`jam-framework`所以除了使用jQuery，模板使用了体积很小的mustache，工具函数也是用了前端使用最广的underscore。


`jam-framework` 使用了以下第三方库：

*  模块化：jam框架内部使用AMD规范，使用了[require.js ](http://www.requirejs.org/)。
*  模板： [mustache](https://mustache.github.io/)，虽然`mustache`只能做简单的四则运算和Boolen判断，但是它小而精悍。
*  DOM操作： [jQuery](http://jquery.com/)，后端人员也很熟悉的DOM操作库。
*  工具函数： [Underscope](http://underscorejs.org/)，弥补模板的运算的不足。

`jam-framework`使用`jQuery`而不使用`react`、`vue`等框架，是为了降低框架使用门槛，让没有深厚前端功底的后端人员也能拿来即用。


框架内部使用了AMD规范，但是在使用`jam-framework`可以不用引入`require.js`，因为框架内部已经将`jam`暴露到全局变量，所以引用`jam.js`之后，可以直接使用`jam`对象内的组件。

包含基础类跟UI类组件两部分：
* UI组件：有图片轮换、遮罩层、弹出层；
* 基础类组件：ajax等轮子。

后续会不断完善更新更好的小轮子......;


## 直接使用

npm 安装

    npm install jam-framework

引入Js文件

    <script src="jam-framework/jam.js"></script>

最后，你只需要像下面那样将类实例化出来就可以了

    //  alert实例化
    var alert = new jam.cUIAlert({
        showTitle: true,
        title: '头部',
        message: '内容',
        needMask: true,
        needMaskHide: true,
        disableScroll: false,
        buttons: [
            {
                text: '你确定?',
                click: function () {
                    this.hide();
                }
            },
            {
                type: 'cancel',
                text: '取消!',
                click: function () {
                    this.hide();
                }
            }
        ]
    });
    // show实例化出来的 alert 
    alert.show();

## 打包需要准备哪些

打包`jam-framework`之前你得安装 [git](https://git-scm.com/downloads) 和 [ Node.js](https://nodejs.org/en/download/)。

## 打包

 首先git 克隆`jam-framework`

    git clone https://github.com/guwei4321/jam-framework

进入到build文件夹并执行npm安装打包相关安装包

    cd buld && npm install

`jam-framework`打包采用了`webpack`，程序内已经将打包配置完毕，只要执行以下命令就能将所有的js、css以及图片打包在到一个js文件并保存到`dist`文件夹

    npm run dist

## 框架基础类说明

框架内的组件的`Class`类，都是通过构造函数以及通过原型链模拟的，而很多组件也是通过`Class`来继承的。

#先已完成的模块

1. 异步请求方法： `ajax`、`jsonp`、`cros`，其中`ajax`以jQuery的ajax方法为基础
2. map: 模拟es6的map方法
3. set: 模拟es6的set方法
4. alert： 模拟弹窗
5. inputClose: 带清除键的input
6. mask: 遮罩层
7. slider： 图片切换，也可以是tab切换
8. toast: 提示框
9. data: 对时间提供一些常用方法
10. hash： 模拟哈希表
11. utility： 扩展的一些常用方法，譬如url解析
12. servertime： 获取服务器时间，只需获取一次服务器时间，之后通过计算服务器跟客户端跟服务器时间差来获得服务器时间。
13. validate 常用的验证方法
14. ...

[文档地址](https://guwei4321.github.io/jam-framework/)
