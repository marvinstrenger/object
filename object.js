define([], function () {
     if (typeof Object.create !== 'function') {
         // Fix for IE8 which does not contain Object.create() method. It is
         // used heavily in widgets.
         Object.create = function (o)  {
             function F() { }
             F.prototype = o;
             return new F();
         };
     }
     return Object;
});