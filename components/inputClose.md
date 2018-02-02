<link rel="stylesheet" href="/style/jam.css">
<script src="/dist/jquery.min.js"></script>
<script src="/dist/require.min.js"></script>
<script src="/dist/underscore.js"></script>
<script src="/dist/mustache.js"></script>
<script src="/dist/jam.js"></script>
<style>
    .clear-input-box input[type="text"] {
        background-color: transparent;
        box-shadow: none;
    }
</style>
带关闭按钮的input框

## 实例代码
    new jam.cUIInputClear($('.input-text'));

## 代码演示
<input disabled class="input-text" type="text" placeholder="disabled">
<input class="input-text" type="text" placeholder="支持placeholder">
<script>
    new jam.cUIInputClear($('.input-text'));
</script>

## API
| 方法名 | 说明 |  参数名 | 参数描述 |
| :------: | :------: | :------: | :------: |
| input| 需要带close的input |  | |
| clearClass| clear的类名 |  | |
| clearCallback| 点击关闭之后的回调 |  | |
| offset| close图标的位置 | {left:0,top:0} | |

## 实例方法

| 方法名 | 说明 |  参数名 | 参数描述 |
| :------: | :------: | :------: | :------: |
| show | 显示  |  |  | 