<link rel="stylesheet" href="/style/jam.css">
<script src="/dist/jquery.min.js"></script>
<script src="/dist/require.min.js"></script>
<script src="/dist/underscore.js"></script>
<script src="/dist/mustache.js"></script>
<script src="/dist/jam.js"></script>
开关选择器

## 实例代码

    new jam.cUISwitch({
        checked: false,
        rootBox: $('.switch-wrap')
    });

## 代码演示
<div class="switch-wrap"></div>
<script>
    new jam.cUISwitch({
        checked: false,
        rootBox: $('.switch-wrap')
    });
</script>
## API
| 方法名 | 说明 |  参数名 | 参数描述 |
| :------: | :------: | :------: | :------: |
| prefix | 前缀 | String | 'jui' |

## 实例方法
| 方法名 | 说明 |  参数名 | 参数描述 |
| :------: | :------: | :------: | :------: |
| checked  | 将控件置为选择 | |
| getStatus  | 获得当前控件是否选择 | |
