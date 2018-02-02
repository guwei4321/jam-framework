模拟 es6 map 数据结构



## 实例代码

    var sMap = new jam.jMap([ // 实例化
        ['name', '张三'],
        ['title', 'Author']
    ]);

    sMap.set(1, 'aaa') // 往里面塞元素
    sMap.set(1, 'bbb')
    sMap.set(['a'],222);

## API

| 方法名 | 说明 |  参数名 | 参数描述 |
| :------: | :------: | :------: | :------: |
| has | 返回一个布尔值  | key |  | 
| get | 返回键对应的值  | key  |  | 
| set |  设置对象中键的值。 | key, value |  | 
| delete | 移除与键相关联的值  | key  |  | 
| clear | 清空  |  |  | 