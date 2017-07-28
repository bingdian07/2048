/**
 * Created by Administrator on 2017/5/30.
 */
Function.prototype.bind = Function.prototype.bind || function (target) {
    var self = this;
    return function (args) {
        if(!(args instanceof Array)) {
            args = [args];
        }
        self.apply(target, args);
    };
    };