define(["external/react","external/mcl/exenv"],function(t,o){return(function(t){function o(n){if(e[n])return e[n].exports;var r=e[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)})({0:function(t,o,e){"use strict";function n(t){for(var e in t)o.hasOwnProperty(e)||(o[e]=t[e])}Object.defineProperty(o,"__esModule",{value:!0}),n(e(176))},4:function(o,e){o.exports=t},160:function(t,e){t.exports=o},176:function(t,o,e){"use strict";var n=this&&this.__extends||(function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}})(),r=this&&this.__rest||function(t,o){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)o.indexOf(n[r])<0&&(e[n[r]]=t[n[r]]);return e};Object.defineProperty(o,"__esModule",{value:!0});var i=e(160),l=e(4),s=e(177),c=(function(t){function o(o){var e=t.call(this,o)||this;e.lastFromTop=null,e.lastTotalTop=null,e.lastFromBottom=null,e.lastTotalBottom=null,e.reportScroll=function(){var t=e.props.window,o=t,n=o.document,r=o.innerHeight,i=o.pageYOffset,l=n.documentElement,s=n.body,c=l.scrollHeight,a=l.scrollTop,p=Math.max(a,s.scrollTop),u=c-(r+i),f=c-r,d=e,m=d.lastFromTop,h=d.lastTotalTop,w=d.lastFromBottom,y=d.lastTotalBottom,v=p!==m||c!==h,T=u!==w||f!==y;e.lastFromTop=p,e.lastTotalTop=c,e.lastFromBottom=u,e.lastTotalBottom=f,(v||T)&&e.props.onScroll({fromTop:p,totalTop:c,fromBottom:u,totalBottom:f})};var n=o.window;return e.throttle=new s.RafThrottle(e.reportScroll,n),e}return n(o,t),o.prototype.componentWillMount=function(){i.canUseViewport&&this.reportScroll()},o.prototype.componentDidMount=function(){this.setupScrollListeners()},o.prototype.componentWillUnmount=function(){this.destroyScrollListeners(),this.throttle.cancelPending()},o.prototype.render=function(){var t=this.props.children,o=this.props,e=o.tagName,n=(o.onScroll,o.window,r(o,["tagName","onScroll","window"]));return t?l.createElement(e,n):null},o.prototype.setupScrollListeners=function(){this.props.window.addEventListener("scroll",this.throttle.request)},o.prototype.destroyScrollListeners=function(){this.props.window.removeEventListener("scroll",this.throttle.request)},o})(l.Component);c.displayName="ScrollMonitor",c.defaultProps={tagName:"div",window:window},o.ScrollMonitor=c},177:function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=(function(){function t(t,o){var e=this;this.request=function(){e.ticking||(e.ticking=!0,e.currentRequestId=e.window.requestAnimationFrame(function(){e.thunk(),e.ticking=!1}))},this.cancelPending=function(){e.window.cancelAnimationFrame(e.currentRequestId)},this.thunk=t,this.window=o||window}return t})();o.RafThrottle=e}})});
//# sourceMappingURL=scroll_monitor.min.js-vflcQr92t.map