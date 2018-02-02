

## 简介
`jam-framework`是一个PC端JS框架。秉持 “如果有小而美的轮子，就不再造轮子” 宗旨在不断造轮子。

`jam-framework`除了使用jQuery这个比较大的DOM操作库，其他都是`jam-framework`自己再造的轮子。使用`jQuery`而不使用`react`，是为了降低框架使用门槛，让后端人员也能拿来即用。

`jam-framework` 使用了以下第三方库：

*  模块化：jam框架内部使用AMD规范，使用了[require.js ](http://www.requirejs.org/)。
*  模板： [mustache](https://mustache.github.io/)，虽然`mustache`只能做简单的四则运算和Boolen判断，但是它小而精悍。
*  DOM操作： [jQuery](http://jquery.com/)，后端人员也很熟悉的DOM操作库。
*  工具函数： [Underscope](http://underscorejs.org/)，弥补模板的运算的不足。

现在已经完成的分基础类跟UI类组件两部分：
* UI组件：有图片轮换、遮罩层、弹出层；
* 基础类组件：ajax等轮子。

后续会不断完善更新更好的小轮子......

框架内部使用了AMD规范，但是使用`jam-framework`可以不用引入`require.js`，因为框架内部已经将`jam`暴露到全局变量，所以引用`jam.js`之后，可以直接使用`jam`对象内的组件。

## 使用

npm 下载

    npm install jam-framework

首先引入样式

    <link rel="stylesheet" href="jam-framework/jam.css">

然后引入Js文件

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

## 框架基础类说明

框架内的组件的`Class`类，都是通过构造函数以及通过原型链模拟的，而很多组件也是通过`Class`来继承的。