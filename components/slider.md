<link rel="stylesheet" href="/style/jam.css">
<script src="/dist/jquery.min.js"></script>
<script src="/dist/require.min.js"></script>
<script src="/dist/underscore.js"></script>
<script src="/dist/mustache.js"></script>
<script src="/dist/jam.js"></script>

<style>
    .sliderWrap {
        position: relative;
        height: 202px;
        width: 360px;
        margin: 0 auto;
    }
    .sliderWrap img {
        display: block;
        width: 360px !important;
        max-width: 360px !important;
        height: 202px !important;
    }
</style>
# 轮播组件
主要用于图片以及文字的轮播组件 
   
## 实例代码

    var data = [
        { id: 1, src: 'imagesDEMO/slider-1.jpg', href: './res/img/1.jpg' },
        { id: 2, src: 'imagesDEMO/slider-2.jpg', href: './res/img/2.jpg' },
        { id: 3, src: 'imagesDEMO/slider-3.jpg', href: './res/img/3.jpg' },
        { id: 4, src: 'imagesDEMO/slider-4.jpg', href: './res/img/4.jpg' }
    ];
    var imgSlider02 = new jam.UIImageSlider({
        images: data,
        autoPlay: true,
        loop: true,
        imageSize: {
            width: '360px',
            height: '202px'
        },
        showArrows: true,
        showNav: true,
        container: $('.sliderWrap')
    });
    imgSlider02.play();

## 代码演示
<div class="sliderWrap"></div>
### 基础用法
    var data = [
        { id: 1, src: 'imagesDEMO/slider-1.jpg', href: './res/img/1.jpg' },
        { id: 2, src: 'imagesDEMO/slider-2.jpg', href: './res/img/2.jpg' },
        { id: 3, src: 'imagesDEMO/slider-3.jpg', href: './res/img/3.jpg' },
        { id: 4, src: 'imagesDEMO/slider-4.jpg', href: './res/img/4.jpg' }
    ];
    var imgSlider02 = new jam.UIImageSlider({
        images: data,
        autoPlay: true,
        loop: true,
        imageSize: {
            width: '360px',
            height: '202px'
        },
        showArrows: true,
        showNav: true,
        container: $('.sliderWrap')
    });
    imgSlider02.play();
<script>
    var data = [
        { id: 1, src: '/imagesDEMO/slider-1.jpg', href: './res/img/1.jpg' },
        { id: 2, src: '/imagesDEMO/slider-2.jpg', href: './res/img/2.jpg' },
        { id: 3, src: '/imagesDEMO/slider-3.jpg', href: './res/img/3.jpg' },
        { id: 4, src: '/imagesDEMO/slider-4.jpg', href: './res/img/4.jpg' }
    ];
    var imgSlider02 = new jam.UIImageSlider({
        images: data,
        autoPlay: true,
        loop: true,
        imageSize: {
            width: '360px',
            height: '202px'
        },
        showArrows: true,
        showNav: true,
        container: $('.sliderWrap')
    });
    imgSlider02.play();
</script>
   

## API

   
| 参数 | 说明 | 类型 | 默认值 |
| :------: | :------: | :------: | :------: |
| images | 用于设置内容（图片、文字） | array |  |
| autoPlay | 自动播放 | bool | true |
| delay | 自动播放延迟(单位：秒) | number | 3 |
| dir | 轮播方向 | 'LEFT'或'RIGHT' | LEFT |
| errorImageUrl | 图片加载 失败/错误 后显示的图片 |  |  |
| loadImageUrl | 图片加载中显示的图片 |  |  |
| index | 当前的索引 |  |  |
| onChanged | 轮播结束时的回调 | Fn |  |
| onImageClick | 图片点击事件 | Fn | true |
| scope | 该控件事件的上下文 |  |  |
| loop | 是否循环播放 | bool | false |
| showNav | 是否显示导航 | bool | true |
| autoPlay | 自动播放 | bool | true |
| showArrows | 是否显示前后箭头 | bool | false |
| defaultImageUrl | 默认图，当没有图片数据的时候默认显示 | 图片地址 |  |
| container | 外部容器 | string node |  |



## 实例方法

| 方法名 | 说明 |  参数名 | 参数描述 |
| :------: | :------: | :------: | :------: |
| goto | 跳转至指定索引图片  | index | 需要切换的轮播图索引，从0开始 | 
| next | 切换至下一张 | | 
| pre | 切换至上一张 | | 