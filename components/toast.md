<link rel="stylesheet" href="/style/jam.css">
<script src="/dist/jquery.min.js"></script>
<script src="/dist/require.min.js"></script>
<script src="/dist/underscore.js"></script>
<script src="/dist/mustache.js"></script>
<script src="/dist/jam.js"></script>

toast组件

<script>
    var toast = new jam.cUIToast({
        title: '带蒙版，点击蒙版不关闭，3秒关闭',
        disableScroll: true,
        sleep: 3,
        needMaskHide: false,
        // prefix: 'xxxx-',
        delayCallback: function(){
            console.log('关闭')
        }
    });
    $('#button1').on('click', function () {
        toast.show();
    })
</script>


## 实例代码
    var toast = new jam.cUIToast({
        title: '带蒙版，点击蒙版不关闭，3秒关闭',
        disableScroll: true,
        sleep: 3,
        needMaskHide: false,
        // prefix: 'xxxx-',
        delayCallback: function(){
            console.log('关闭')
        }
    });
    toast.show();

## 代码演示
<button id="button1">打开toast</button>


## API
| 方法名 | 说明 |  参数名 | 参数描述 |
| :------: | :------: | :------: | :------: |
| needMaskHide | 是否需要点击蒙版删除 | bool | false |
| title | 提示文字 | String | '您好！'
| sleep | 持续时间 | number |
| prefix | 前缀 | String | 'jui' |
| delayCallback | 关闭 | Fn |

## 实例方法

| 方法名 | 说明 |  参数名 | 参数描述 |
| :------: | :------: | :------: | :------: |
| show | 显示  |  |  | 
