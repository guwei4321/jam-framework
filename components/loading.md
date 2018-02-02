<link rel="stylesheet" href="/style/jam.css">
<script src="/dist/jquery.min.js"></script>
<script src="/dist/require.min.js"></script>
<script src="/dist/underscore.js"></script>
<script src="/dist/mustache.js"></script>
<script src="/dist/jam.js"></script>


loading 组件

## 实例代码

    var loading = new jam.cUILoading({
        rootBox : $('#loading-wrap'),
        backgroundColor: 'rgba(0, 255, 153, .6)'
    })
    $('#button0').on('click', function(){
        loading.show(function () {
            console.log('show') // show事件 回调
        });
    })

## 代码演示
<div id="loading-wrap" style="position:relative;width: 400px;height:400px;background-color: #f99;"></div>

<button id="button0">loading按钮</button>

<script>
    var loading = new jam.cUILoading({
        rootBox : $('#loading-wrap'),
        backgroundColor: 'rgba(0, 255, 153, .6)'
    })
    $('#button0').on('click', function(){
        loading.show(function () {
            console.log('show')
        });
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