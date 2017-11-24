/**
 * @description 获取服务器时间
 */
define( function () {

    var UtilityServertime = {};

    /**
     * @method UtilityServertime.getServerDate
     * @param {function} callback
     * @description 获取服务端时间
     */
    UtilityServertime.getServerDate = function (callback) {
        var now = new Date();
        var applyCallback = function (date) {
            if (typeof callback === 'function') {
                return callback(date);
            }

            return date;
        };

        /** 在Web层调用的回调 */
        var webCallback = function () {
            if (location.pathname.match(/^\/?html5/i)) {

                return applyCallback(now);
            } else {

                if (typeof __SERVERDATE__ === 'undefined' || !__SERVERDATE__.server) {
                    console.log("无服务端时间参考，请在html入口文件添加指向'/html5/ClientData/LoadServerDate'的script标签");

                    return applyCallback(now);
                }

                /** 计算server time的时间  */
                var servertime = new Date(__SERVERDATE__.server.valueOf() + (new Date().valueOf() - __SERVERDATE__.local.valueOf()));
                return applyCallback(servertime);
            }
        };

        return webCallback();
    };

    return UtilityServertime;
});