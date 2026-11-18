"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var q=l(function(j,o){
var b=require('@stdlib/blas-ext-base-gwaxpb/dist');function f(e,r,a,t,u,i,n,p,v){var s=(u-t)/(a-r);return b(e,s,t-r*s,i,n,p,v)}o.exports=f
});var d=l(function(k,x){
var h=require('@stdlib/blas-ext-base-gwaxpb/dist').ndarray;function w(e,r,a,t,u,i,n,p,v,s,y){var c=(u-t)/(a-r);return h(e,c,t-r*c,i,n,p,v,s,y)}x.exports=w
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=q(),O=d();m(g,"ndarray",O);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
