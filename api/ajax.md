兼容各个浏览器的ajax方法，因为基本的ajax方法使用了jquery的ajax，所以依赖依赖

## get方法

AJAX GET方式访问接口

**实例代码**

    jam.ajax.get({
        url: '',
        data: {...},
        callback: function(){
            ...
        },
        error: function(){
            ...
        }
    })


| 参数名 | 说明 |
| :------: | :------: | 
| url | 请求地址 |
| data | 请求数据 |
| callback | 成功之后的回调 |
| error | 错误直走的回调|


## post方法

AJAX POST方式访问接口

**实例代码**

    jam.ajax.post({
        url: '',
        data: {...},
        callback: function(){
            ...
        },
        error: function(){
            ...
        }
    })


| 参数名 | 说明 |
| :------: | :------: | 
| url | 请求地址 |
| data | 请求数据 |
| callback | 成功之后的回调 |
| error | 错误直走的回调|


## jsonp方法
以GET方式跨域访问外部接口

**实例代码**

    jam.ajax.jsonp({
        url: '',
        data: {...},
        callback: function(){
            ...
        },
        error: function(){
            ...
        }
    })

| 参数名 | 说明 |
| :------: | :------: | 
| url | 请求地址 |
| data | 请求数据 |
| callback | 成功之后的回调 |
| error | 错误直走的回调|

## cros方法
以POST方法跨域访问外部接口

**实例代码**

    jam.ajax.cros({
        url: '',
        data: {...},
        type: 'get',
        callback: function(){
            ...
        },
        error: function(){
            ...
        }
    })

| 参数名 | 说明 |
| :------: | :------: | 
| url | 请求地址 |
| type | 请求方式 |
| data | 请求数据 |
| callback | 成功之后的回调 |
| error | 错误直走的回调|

## form方法
AJAX 提交表单,不能跨域

**实例代码**

    jam.ajax.form({
        url: '',
        data: {...},
        callback: function(){
            ...
        },
        error: function(){
            ...
        }
    })

| 参数名 | 说明 |
| :------: | :------: | 
| url | 请求地址 |
| form | 可以是dom对象，dom id 或者jquery 对象 |
| callback | 成功之后的回调 |
| error | 错误直走的回调|