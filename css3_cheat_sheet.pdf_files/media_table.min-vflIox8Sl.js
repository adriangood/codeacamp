define(["external/mcl/classnames","external/react","external/mcl/button","external/mcl/overflow_button","external/mcl/table"],function(e,t,r,n,o){return(function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)})({0:function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),r(80),n(r(118)),n(r(120)),n(r(121)),n(r(122)),n(r(119))},3:function(t,r){t.exports=e},4:function(e,r){e.exports=t},27:function(e,t){e.exports=r},80:function(e,t){},99:function(e,t){e.exports=n},102:function(e,t){e.exports=o},118:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var i=r(3),a=r(4),l=r(119);t.CulledMediaRow=function(e){var t=e.className,r=e.topOffset,s=e.ref,c=o(e,["className","topOffset","ref"]),u=i("mc-media-row-culled",t);return a.createElement(l.MediaRow,n({className:u,style:{top:r},ref:s},c))},t.CulledMediaRow.displayName="CulledMediaRow"},119:function(e,t,r){"use strict";var n=this&&this.__extends||(function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}})(),o=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),l=r(4),s=r(102),c=(function(e){function t(t){var r=e.call(this,t)||this;return r.handleHover=function(){r.setState({isHovered:!0})},r.handleBlur=function(){r.setState({isHovered:!1})},r.state={isHovered:!1},r}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.children,r=e.className,n=e.doubleLine,c=e.onClick,u=e.ref,d=e.variant,f=i(e,["children","className","doubleLine","onClick","ref","variant"]),p=this.state.isHovered,v=a("mc-media-row",{"mc-media-row-clickable":!!c,"mc-media-row-double-line":n,"mc-media-row-dragover":"dragover"===d,"mc-media-row-droppable":"droppable"===d,"mc-media-row-selected":"selected"===d},r),m=t;return"function"==typeof t&&(m=t({isHovered:p})),l.createElement(s.TableRow,o({className:v,onMouseEnter:this.handleHover,onMouseLeave:this.handleBlur,onClick:c,ref:u},f),m)},t})(l.PureComponent);c.displayName="MediaRow",c.defaultProps={doubleLine:!1},t.MediaRow=c},120:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var i=r(4),a=r(27),l=r(99);t.MediaActions=function(e){return i.createElement("div",n({className:"mc-media-actions"},e))},t.MediaActions.displayName="MediaActions",t.MediaActionsButton=function(e){var t=e.isHovered,r=o(e,["isHovered"]);return i.createElement(a.Button,n({variant:t?"secondary":"invisible"},r))},t.MediaActionsButton.displayName="MediaActionsButton",t.MediaActionsOverflowButton=function(e){var t=e.isHovered,r=o(e,["isHovered"]);return i.createElement(l.OverflowButton,n({variant:t?void 0:"borderless"},r))},t.MediaActionsOverflowButton.displayName="MediaActionsOverflowButton"},121:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var i=r(3),a=r(4),l=r(102),s=r(122);t.MediaCell=function(e){var t=e.children,r=e.className,c=e.icon,u=e.title,d=e.subtitle,f=e.highlight,p=e.variant,v=void 0===p?"default":p,m=o(e,["children","className","icon","title","subtitle","highlight","variant"]),h=i("mc-media-cell",{"mc-media-cell-double-line":!(!u||!d)},r);return a.createElement(l.TableCell,n({className:h},m),c&&a.createElement("div",{className:"mc-media-cell-icon"},c),(u||d)&&a.createElement("div",{className:"mc-media-cell-content"},u&&a.createElement(s.MediaCellText,{variant:"default"===v?"title":"detail",highlight:f},u),d&&a.createElement(s.MediaCellText,{variant:"subtitle"},d)),t)},t.MediaCell.displayName="MediaCell"},122:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var i=r(3),a=r(4);t.MediaCellText=function(e){var t=e.variant,r=void 0===t?"title":t,l=e.highlight,s=e.className,c=o(e,["variant","highlight","className"]),u=i("mc-media-cell-text","mc-media-cell-text-"+r,{"mc-media-cell-text-highlight":l},s);return a.createElement("p",n({className:u},c))},t.MediaCellText.displayName="MediaCellText"}})});
//# sourceMappingURL=media_table.min.js-vflcAzvgT.map