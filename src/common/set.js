/**
 * @description map
 */
define(['./base'], function (cBase) {
    // 1.类似于数组，但是成员的值都是唯一的，没有重复的值。
    // 2.如果读取一个未知的键，则返回undefined。
    // var map = typeof Map === "function" ? new Map() : (function () {
    var options = {};
    options.__propertys__ = function () {
        this.entries = {
            values: [],
        };
        this.size = 0;
    };

    /** 可以传入rootBox已经changed两个参数，一个是控件所处位置，一个是选项改变时候需要触发的事件 */
    options.initialize = function (opts) {
        for ( var i = 0; i < opts.length; i++ ) {
            this.add(opts[i]);
        }
    };

    options.has = function (values) {
        return this.entries.values.indexOf(values) > -1;
    }
    options.add = function (value) {
        if (!this.has(value)) {
            this.entries.values.push(value);
            this.size++;
        }
    }
    options.delete = function (key) {
        if (this.has(key)) {
            this.entries.values.splice(index, 1);
            this.size--;
        }
    }
    options.clear = function () {
        this.entries = {
            values: [],
        };
    }
    options.values = function(){
        return this.entries.values
    }
    // return new cBase.Class(options);
    return typeof Set === "function" ? Set : new cBase.Class(options);
})