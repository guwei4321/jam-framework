<link rel="stylesheet" href="/style/jam.css">
<script src="/dist/jquery.min.js"></script>
<script src="/dist/require.min.js"></script>
<script src="/dist/underscore.js"></script>
<script src="/dist/mustache.js"></script>
<script src="/dist/jam.js"></script>
alert组件

## 实例代码
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
    $('#button1').on('click', function () {
        alert.show();
    })

## 代码演示
<button id="button1">打开alert</button>
<script>
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
     $('#button1').on('click', function () {
        alert.show();
    })
</script>


## API
| 方法名 | 说明 |  参数名 | 参数描述 |
| :------: | :------: | :------: | :------: |
| title| 头部 | string | ''
| message| 内容 | string | ''
| needMask | 是否需要蒙版 | bool | false |
| needMaskHide | 是否需要点击蒙版删除 | bool | false |
| title | 提示文字 | String | '您好！'
| sleep | 持续时间 | number |
| prefix | 前缀 | String | 'jui' |
| disableScroll | 鼠标滚轮是否可以滚动 | bool | false
| buttons |     按钮 | array | [{ text: '确定', type: 'confirm', click: function () { this.hide(); } }]alert按钮 |

## 实例方法

| 方法名 | 说明 |  参数名 | 参数描述 |
| :------: | :------: | :------: | :------: |
| show | 显示  |  |  | 
