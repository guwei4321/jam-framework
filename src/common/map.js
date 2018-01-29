/**
 * @description map
 */
define(['./base'], function (cBase) {
    // 1.如果对同一个键多次赋值，后面的值将覆盖前面的值。
    // 2.如果读取一个未知的键，则返回undefined。
    // var map = typeof Map === "function" ? new Map() : (function () {
    var options = {};
    options.__propertys__ = function (opts) {
        this.entries = {
            keys :[],
            values: [],
        };
        this.size = 0;
    };

    /** 可以传入rootBox已经changed两个参数，一个是控件所处位置，一个是选项改变时候需要触发的事件 */
    options.initialize = function (opts) {
        for ( var i = 0; i < opts.length; i++ ) {
            this.set(opts[i][0],opts[i][1]);
        }
    };

    options.has = function (key) {
        return this.entries.keys.indexOf(key) > -1;
    }
    options.get = function (key) {
        return this.entries.values[this.entries.keys.indexOf(key)];
    }
    options.set = function (key, value) {
        if (this.has(key)) {
            this.entries.values[this.entries.keys.indexOf(key)] = value;
        } else {
            this.entries.keys.push(key);
            this.entries.values.push(value);
            this.size++;
        }
    }
    options.delete = function (key) {
        if (this.has(key)) {
            this.entries.keys.splice(index, 1);
            this.entries.values.splice(index, 1);
            this.size--;
        }
    }
    options.clear = function () {
        this.entries = {
            keys :[],
            values: [],
        };
    }
    return typeof Map === "function" ? Map : new cBase.Class(options);
})