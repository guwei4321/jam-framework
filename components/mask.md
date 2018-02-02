<link rel="stylesheet" href="/style/jam.css">
<script src="/dist/jquery.min.js"></script>
<script src="/dist/require.min.js"></script>
<script src="/dist/underscore.js"></script>
<script src="/dist/mustache.js"></script>
<script src="/dist/jam.js"></script>



# 遮罩层组件
遮罩层

## 实例代码

    var mask = new jam.cUIMask({
        rootBox: $('#JMaskWrap')
    });
    mask.show(); 

## 代码演示
<div id="JMaskWrap" class="maskWrap" style="position:relative;width:400px;height: 400px;background-color:#2980B9;"></div>

<button id="btn-mask">局部遮罩</button>
<button id="btn-mask2">全局遮罩</button>

<script>
    var mask = new jam.cUIMask({
        rootBox: $('#JMaskWrap')
    });
    $('#btn-mask').on('click', function(){
        mask.show(); 
    })
    var mask2 = new jam.cUIMask({
    });
    $('#btn-mask2').on('click', function(){
        mask2.show(); 
    })
</script>


## API

   
| 参数 | 说明 | 类型 | 默认值 |
| :------: | :------: | :------: | :------: |
| needMaskHide | 是否需要点击蒙版删除 | bool |  false |
| loadHtml | loading内容 |  |  |
| sleep | 持续时间 | number |  |
| prefix |  前缀 | string | jui |


## 实例方法

| 方法名 | 说明 |  参数名 | 参数描述 |
| :------: | :------: | :------: | :------: |
| show | 显示  |  |  | 
| hide | 关闭 | | 

