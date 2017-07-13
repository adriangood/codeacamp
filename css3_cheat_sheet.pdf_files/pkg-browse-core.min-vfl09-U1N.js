(function(){var e=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},t=[].slice;define("modules/clean/notserver",["jquery","external/underscore","modules/constants/notserver","modules/core/exception","modules/core/uri","modules/clean/viewer"],function(n,r,o,i,a,s){var l,u,c,d,assert,p,m,h,f;assert=i.assert,l={},u=!1,d="/subscribe",c=(function(){function o(){}return o.prototype.add_notclient=function(e,t){return this.new_notclient(e),setTimeout(function(){return l[e].init(t)},2e3)},o.prototype.new_notclient=function(o){var i,s,c,p,m,h,f,b,y,g,_,v,w,k,T,N,C,E,P,M,x,B,U,S,D,I,O,q,A,F,R,L,j,$,K,W,H,V,z,G,X,Y;return assert(e.call(l,o)<0,"cannot create more than one notclient per user"),M=function(e){return r.isNumber(e)&&e%1===0&&e>0},P=function(e){return r.isNumber(e)&&e%1===0&&e>=0},assert(M(o),"user_id must be a positive integer"),x=function(){var e;if(e=1<=arguments.length?t.call(arguments,0):[],u)return console.log.apply(console,e)},i=9e4,p=8096,h="user",m="list",N=!1,s=1e3,c=3e5,O=0,V=function(){var e;return e=0===w?0:Math.min(s*Math.pow(2,w-1),c),Math.max(e,O)},D=null,q={},T={},S=1,C=!1,E=!1,Y=null,y=!1,R=!1,G=[],H=null,v=null,B=null,U={},A=!1,w=0,z=0,X=function(e,t){var n,r,o;r=[];for(n in t)o=t[n],n=parseInt(n,10),assert(M(n),"ns_ids must be positive integers: "+n),assert(P(o),"sjids must be nonnegative integers: "+o),null!=e[n]?r.push(e[n]=Math.min(e[n],o)):r.push(e[n]=o);return r},g=function(){var t,n,i,s;return assert(!r.isEmpty(q),"expected ns_map"),i={host_int:0,trace:window.location.pathname},t=r.pluck(r.values(T),"type"),e.call(t,h)>=0&&(assert(null!=D,"expected nid"),i.user_id=o,i.nid=null!=D?D.replace(/^0+(.)/,"$1"):void 0),e.call(t,m)>=0&&(i.ns_map=(function(){var e;e=[];for(n in q)s=q[n],e.push(n+"_"+s);return e})().join(",")),a.parse(d).updateQuery(i).toString().length>p&&delete i.ns_map,i},_=function(){var e;if(N)return e=V(),e>0?v=window.setTimeout(f,e):R?void 0:f()},f=function(){var e;return assert(!C&&!E,"connect: invalid state"),assert(D>=0||!r.isEmpty(q),"notclient: called connect with nothing to subscribe to"),x("###########################"),e=g(),null!=e.nid||e.ns_map?(x("connecting to notserver..."),C=!0,z+=1,Y=n.ajax(d,{data:e,dataType:"json",error:function(){return y?void(y=!1):(w+=1,x("error connecting to notserver. bad rounds="+w+"."),C=!1,_())},success:function(e){return x("notserver connection closed. response:",e),C=!1,null!=e.chillout?(O=1e3*parseInt(e.chillout,10),x("notserver told us to chill for "+O+"ms")):O>0&&(x("setting notserver chillout back to 0ms"),O=0),"punt"===e.ret?_():(assert("new"===e.ret,"unknown notserver ret: "+e.ret),assert("refresh"in e,"expected notserver ret:new to have refresh keyword"),W(e.refresh))}})):void x("nothing to subscribe to. skipping notserver connection.")},b=function(){if(null!=Y)return y=!0,Y.abort(),Y=null},F=function(){return R=!0,b()},K=function(){return F=!1,_()},L=function(){return O=0,C=!1,E=!1,b(),G=[],window.clearTimeout(H),window.clearTimeout(v),H=null,v=null,B=null,U={},A=!1,w=0,_()},$=function(){return N=!1,O=0,D=null,q={},T={},0,S=1,C=!1,E=!1,Y=null,y=!1,G=[],window.clearTimeout(H),window.clearTimeout(v),H=null,v=null,B=null,U={},A=!1,w=0,z=0},W=function(t){var n,o,a,s,l,u,c,d;for(assert(!E&&!C,"run_handlers: invalid state"),assert(null===B,"run_handlers: new_nid must start at null"),assert(r.isEqual(U,{}),"run_handlers: new_ns_map must start at {}"),assert(!A,"expected one_or_more_handler_failures=false"),E=!0,x("running handlers..."),c=r.filter(r.values(T),function(n){var r;return r=n.type,e.call(t,r)>=0}),assert(!r.isEmpty(c),"notserver sent a ping for unsubscribed activity"),G=r.pluck(c,"handler_id"),a=0,s=c.length;a<s;a++)u=c[a],n=u.handler,o=u.handler_id,l=u.name,d=u.type,x("running id="+o+", name="+l+", type="+d),n();return r.isEmpty(G)?x("all handlers already finished running. no need for a slacker timeout."):(x("all handlers running. slacker timeout set."),H=window.setTimeout(j,i))},j=function(){var e,t,n,o;for(assert(E&&!C,"called report_slackers in an invalid state."),assert(!r.isEmpty(G,"report_slackers called w/ nothing slackin'")),x("found some slackers"),A=!0,o=[],t=0,n=G.length;t<n;t++)e=G[t],o.push(k(e));return o},k=function(t){if(!(e.call(G,t)<0))return x("done handling: "+t),G=r.without(G,t),r.isEmpty(G)?(x("all handlers are done running."),E=!1,window.clearTimeout(H),null!=B&&(x("new nid: "+B),D=B),r.isEmpty(U)||(x("new ns_map:",U),q=U),A?(w+=1,x("one or more handler errors. bad_rounds="+w)):w=0,B=null,U={},A=!1,_()):void 0},I={get_user_id:function(){return o},get_nid:function(){return D},get_ns_map:function(){return r.clone(q)},get_consecutive_bad_rounds:function(){return w},get_total_rounds:function(){return z},get_notserver_chillout_ms:function(){return O},get_sleep_ms:V,subscribe_user:function(t){var n,o,i,a,s,l,u;for(assert(!E,"adding new handlers from inside handlers is not currently supported"),u=["name","handler","nid"],i=0,a=u.length;i<a;i++)l=u[i],assert(t[l],"subscribe_user requires this param be non-falsey: "+l+", "+t[l]);return assert(r.isFunction(t.handler),"handler must be a function"),x("adding user handler "+t.name),o=r.pluck(r.values(T),"type"),s=e.call(o,h)<0,n=S++,T[n]={handler_id:n,handler:t.handler,name:t.name,type:h},(null==D||t.nid<D)&&(D=t.nid,s=!0),s&&(x("first user handler added, reconnecting"),L()),n},subscribe_sfj:function(t){var n,o,i,a,s,l,u;for(assert(!E,"adding new handlers from inside handlers is not currently supported"),u=["name","handler"],i=0,a=u.length;i<a;i++)l=u[i],assert(t[l],"subscribe_sfj requires this param be non-falsey: "+l);return assert(r.isFunction(t.handler),"handler must be a function"),x("adding sfj handler "+t.name),o=r.pluck(r.values(T),"type"),s=e.call(o,m)<0,n=S++,T[n]={handler_id:n,handler:t.handler,name:t.name,type:m},s&&(x("first sfj handler added, reconnecting"),L()),n},unsubscribe:function(e){if(assert(e in T,"no subscribed handler with the given id"),E&&(console.warn("trying to unsubscribe '"+e+"' while is_handling is true"),A=!0,k(e)),delete T[e],r.isEmpty(T))return b()},handler_success:function(t,n){var r;if(!(e.call(G,t)<0))return r=T[t].type,r===m?(assert("ns_map"in n,"ns_map required param is missing"),assert(!("nid"in n),"nid is disallowed from SFJ handlers"),X(U,n.ns_map)):(assert(r===h,"unknown handler type: "+r),assert("nid"in n,"nid required param is missing"),assert(!("ns_map"in n),"ns_map is disallowed from user handlers"),(null==B||n.nid<B)&&(B=n.nid)),k(t)},handler_failure:function(t){if(x("handler failed. handler_id="+t),!(e.call(G,t)<0))return A=!0,k(t)},handle_visibility_change:function(){return window.document.hidden?b():L()},init:function(e){return assert(!N,"error: init() has been called twice."),X(q,e),N=!0,null==window.document.visibilityState?_():(document.addEventListener("visibilitychange",this.handle_visibility_change),window.document.hidden?void 0:_())},reset:$,abort:b,pause:F,resume:K,reconnect:L},l[o]=I,I},o})(),c=new c,h=s.get_viewer().get_users();for(p=0,m=h.length;p<m;p++)f=h[p],c.add_notclient(f.id,o.NS_MAP[f.id]);return{NotServer:c,NotClients:l}})}).call(this),define("modules/clean/photos/thumb_loading/generic_thumb_store",["require","exports","modules/clean/photos/thumb_loading/http2_thumb_loader","modules/core/exception"],function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(function(){function e(e,t){this.loaderBatches=!1,this.thumbUrlToData={},this.callbackByRequestId={},this.loaderBatches=!!t,this.thumbLoader=e?e:new n.Http2ThumbLoader}return e.prototype.is_batching=function(){return this.loaderBatches},e.prototype.bind_url=function(e,t){var n=this;if(r.assert(!!t.onSuccess,"missing onSuccess handler"),this.thumbUrlToData[e])return t.onRequest&&t.onRequest(!0),t.onSuccess(!0),null;var o=this.thumbLoader.get_request_id();this.callbackByRequestId[o]=t;var i=function(){var e=n.callbackByRequestId[o];e&&e.onRequest&&e.onRequest(!1)},a=function(t){n.thumbUrlToData[e]=t;var r=n.callbackByRequestId[o];r&&r.onSuccess(!1)},s=function(){var e=n.callbackByRequestId[o];e&&e.onError&&e.onError()},l=function(){return n.callbackByRequestId.hasOwnProperty(o)};return this.thumbLoader.load_image(e,o,i,a,s,l),o},e.prototype.unbind_url=function(e){e&&(delete this.callbackByRequestId[e],this.thumbLoader.cancel_thumb(e))},e.prototype.get_thumb=function(e){return this.thumbUrlToData[e]?this.thumbUrlToData[e]:null},e})();t.GenericThumbStore=o}),define("modules/clean/photos/thumb_loading/http2_thumb_loader",["require","exports","modules/clean/photos/thumb_loading/utils"],function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(function(){function e(){this.http2RequestId=0}return e.prototype.get_request_id=function(){return this.http2RequestId+=1,this.http2RequestId.toString()},e.prototype.load_image=function(e,t,r,o,i,a){r(),n.load_individual_image(e,1,o,i,a)},e.prototype.cancel_thumb=function(e){},e})();t.Http2ThumbLoader=r}),define("modules/clean/photos/thumb_loading/utils",["require","exports"],function(e,t){"use strict";function n(e,t,n,r,o){var i=new Image;i.onload=function(){return n(e)},i.onerror=function(){t>0&&o()?(t-=1,i.src=e):r()},i.src=e}Object.defineProperty(t,"__esModule",{value:!0}),t.load_individual_image=n}),define("modules/clean/react/app_actions_view",["require","exports","tslib","external/classnames","external/mcl/button","external/mcl/icon_action","external/mcl/popover","external/mcl/overflow_button","external/mcl/tertiary_link","external/react","modules/clean/react/css","modules/clean/react/sprite_div","modules/clean/react_logger","modules/clean/user_education/user_education_client","modules/clean/react/file_uploader/upload_button"],function(e,t,n,r,o,i,a,s,l,u,c,d,p,m,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f=function(){return null},b=function(e){var t=e.primaryMenuItem,n=e.secondaryMenuItems,r=e.popoverTriggerLabel,o=[];t&&(o=o.concat([t])),n&&(o=o.concat(n));var l=function(e){e.handleClick&&e.handleClick()};return o.length&&r?u.createElement(a.Popover,{onSelection:l},u.createElement(a.PopoverTrigger,null,u.createElement(s.OverflowButton,{tagName:"span","aria-label":r,variant:"borderless"})),u.createElement(a.PopoverContent,{attachment:"right"},o.map(function(e){return u.createElement(a.PopoverContentItem,{key:e.displayName,value:e,className:e.className,disabled:e.disabled},e.iconName&&u.createElement(i.IconAction,{name:e.iconName,className:"popover-item-icon"}),e.displayName)}))):u.createElement("noscript",null)},y=function(e){var t=e.primaryMenuItem,n=e.headerText;if(t&&Object.keys(t).length>0){var i=r("primary-action-menu__button",t.className),a=i.indexOf("action-upload")>=0,s=u.createElement(m.UserEducationEffect,{containerName:"AppActionsView",name:"PrimaryButtonText",useSpan:!0},t.displayName);return u.createElement("div",{className:"primary-action-menu"},u.createElement("span",{className:"primary-action-menu__header-text"},n),u.createElement("div",{className:"primary-action-menu__button-wrapper"},a?u.createElement(h.UploadButton,{className:i,disabled:t.disabled,handleClick:t.handleClick,variant:"primary"},s):u.createElement(o.Button,{className:i,disabled:t.disabled,onClick:t.handleClick,variant:"primary"},s)))}return u.createElement("noscript",null)},g=function(e){var t=e.menuItem,n=t.disabled,o=t.displayName,i=t.handleClick,a=t.iconName,s=r("secondary-action-menu__button",e.menuItem.className),c=s.indexOf("action-upload")>=0,d=u.createElement(m.UserEducationEffect,{containerName:"AppActionsView",name:"SecondaryActionMenu-text-"+a},o);return c?u.createElement(h.UploadButton,{key:o,iconName:a,handleClick:i,disabled:n,className:s,variant:"secondary"},d):u.createElement(l.TertiaryLink,{key:o,icon:a,onClick:i,disabled:n,className:s},d)},_=function(e){var t=e.menuItem;return u.createElement("button",{className:r({"secondary-action-menu__button":!0,"secondary-action-menu__button--legacy":!0,disabled:t.disabled}),onClick:t.disabled?f:t.handleClick},u.createElement(d,{alt:t.iconAlt||"",group:t.iconGroup||"web",name:t.spriteName}),u.createElement("span",{className:"secondary-action-menu__button-text"},u.createElement(m.UserEducationEffect,{containerName:"AppActionsView",name:"SecondaryActionMenu-text-"+t.spriteName},t.displayName)))},v=function(e){var t=e.secondaryMenuItems;return u.createElement(l.TertiaryList,{className:"secondary-action-menu"},t.map(function(e){return e.spriteName?u.createElement(_,{key:e.displayName,menuItem:e}):u.createElement(g,{key:e.displayName,menuItem:e})}))},w=(function(e){function t(t){return e.call(this,"AppActionsView",t)||this}return n.__extends(t,e),t.prototype.componentDidMount=function(){this.props.handleComponentTTI("AppActionsView"),e.prototype.componentDidMount.call(this)},t.prototype.render=function(){var e=this.props,t=e.primaryMenuItem,n=e.primarySubnode,r=e.secondaryMenuItems,o=e.headerText,i=e.popoverTriggerLabel;return u.createElement("div",{className:"appactions-menu"},u.createElement("div",{className:"appactions-menu--popover"},t&&i&&u.createElement(b,{primaryMenuItem:t,secondaryMenuItems:r,popoverTriggerLabel:i})),u.createElement("div",{className:"appactions-menu--buttons"},t&&u.createElement(y,{primaryMenuItem:t,headerText:o}),n,r&&u.createElement(v,{secondaryMenuItems:r})))},t})(p.ReactPureLogger);w.defaultProps={headerText:"",secondaryMenuItems:[],handleComponentTTI:function(){}};var k=c(w,["/static/css/mcl/index-vfl3F-owF.css","/static/css/dropbox/app_actions-vflt3Wz8h.css"]);t.AppActionsView=k}),function(){define("modules/clean/react/bubble_menu",["jquery","external/classnames","external/react","external/react-dom","external/underscore","modules/clean/keycode","modules/clean/react/bubble_dropdown_v2","modules/clean/react_logger"],function(e,t,n,r,o,i,a,s){var l,u,c,d,p,m,h,f,b,y,g;return h=i.KeyCode,f=s.ReactLogger,g=n.DOM,y=n.createElement,b=function(e,t,n){var r,o;if(r=e[t].type,r!==u&&r!==p&&r!==c)return o=(null!=r?r.displayName:void 0)||e[t],new Error("Expected menu items to be instances of BubbleMenuItem, not "+o+".")},d={DEFAULT:1,CHECKBOX:2,RADIO:3},u=n.createClass({displayName:"BubbleMenuItem",propTypes:{onClick:n.PropTypes.func,href:n.PropTypes.string,target:n.PropTypes.string,disabled:n.PropTypes.bool,closeOnClick:n.PropTypes.bool,closeFunc:n.PropTypes.func,className:n.PropTypes.string,onMouseEnter:n.PropTypes.func,onMouseLeave:n.PropTypes.func,itemType:n.PropTypes.oneOf(o.values(d)),checked:n.PropTypes.bool},getDefaultProps:function(){return{onClick:o.noop,href:"#",target:null,disabled:!1,closeOnClick:!0,closeFunc:o.noop,className:null,onMouseEnter:o.noop,onMouseLeave:o.noop,itemType:d.DEFAULT,checked:null}},_handleMouseEnter:function(t){if(null!=this.refs.item)return e(r.findDOMNode(this.refs.item)).closest(".bubble-menu").removeClass("bubble-menu--keyboard"),this.props.onMouseEnter(t)},_handleClick:function(e){return this.props.disabled?(e.preventDefault(),e.stopPropagation()):"#"===this.props.href&&(e.preventDefault(),this.props.onClick(e),this.props.closeOnClick)?this.props.closeFunc():void 0},_getRole:function(){switch(this.props.itemType){case d.CHECKBOX:return"menuitemcheckbox";case d.RADIO:return"menuitemradio";default:return"menuitem"}},_getAriaChecked:function(){switch(this.props.itemType){case d.CHECKBOX:case d.RADIO:return this.props.checked||!1;default:return null}},componentWillMount:function(){return f.start(this.constructor.displayName)},componentDidMount:function(){return f.end(this.constructor.displayName)},renderContents:function(){var e;return e={"bubble-menu-item":!0,"bubble-menu-item--disabled":this.props.disabled,"bubble-menu-item--checked":this.props.checked},g.a({ref:"item",role:this._getRole(),className:t(e),href:this.props.href,target:this.props.target,onClick:this._handleClick,onMouseEnter:this._handleMouseEnter,onMouseLeave:this.props.onMouseLeave,"aria-disabled":this.props.disabled,"aria-checked":this._getAriaChecked()},this.props.children)},render:function(){return g.li({role:"presentation",className:t("bubble-menu-item-wrapper",this.props.className)},this.renderContents())}}),u.TYPES=d,p=n.createClass({displayName:"BubbleMenuSeparator",propTypes:{className:n.PropTypes.string},getDefaultProps:function(){return{className:"bubble-menu-item-separator"}},render:function(){return g.li({role:"separator",className:this.props.className},this.props.children)}}),c=n.createClass({displayName:"BubbleMenuItemGroup",props:{items:n.PropTypes.arrayOf(b).isRequired,closeFunc:n.PropTypes.func},render:function(){var e,t;return 0===this.props.items.length?null:g.li({className:"bubble-menu-item-group",role:"presentation"},g.ul({className:"bubble-menu-item-group u-unlist u-trim-padding",role:"group"},function(){var r,o,i,a,s;for(i=this.props.items,s=[],e=r=0,o=i.length;r<o;e=++r)t=i[e],s.push(n.cloneElement(t,{closeFunc:this.props.closeFunc,key:null!=(a=t.key)?a:e}));return s}.call(this)))}}),l=n.createClass({displayName:"BubbleMenu",propTypes:o.extend({},a.propTypes,{headerContent:n.PropTypes.element,items:n.PropTypes.arrayOf(b).isRequired,onShowDropdown:n.PropTypes.func,targetButton:function(e,t,n){var r;if("button"!==(null!=(r=e.targetButton)?r.type:void 0))return new Error("BubbleDropdown's targetButton must be a `<button>`, found: "+e[t].type)}}),componentWillMount:function(){return f.start(this.constructor.displayName)},componentDidMount:function(){return f.end(this.constructor.displayName)},showMenu:function(){var e,t;return null!=(e=this.refs.bubble)&&null!=(t=e.getWrappedComponent())?t.showDropdown():void 0},hideMenu:function(){var e,t;return null!=(e=this.refs.bubble)&&null!=(t=e.getWrappedComponent())?t.hideDropdown():void 0},_onShowBubbleMenu:function(){var t;if(null!=this.refs.menu&&null!=this.refs.bubble)return this.$menu=e(r.findDOMNode(this.refs.menu)),this.$menuitems=this.$menu.find('*[role="menuitem"],*[role="menuitemcheckbox"],*[role="menuitemradio"]'),this.$menu.addClass("bubble-menu--keyboard"),"function"==typeof(t=this.props).onShowDropdown?t.onShowDropdown():void 0},_onKeyDown:function(e){return this.$menu.addClass("bubble-menu--keyboard"),e.keyCode===h.DOWN?(this._focusNext(e.target),e.preventDefault(),e.stopPropagation()):e.keyCode===h.UP?(this._focusPrevious(e.target),e.preventDefault(),e.stopPropagation()):void 0},_onKeyPress:function(e){var t,n,r,o,i,a,s,l,u,c,d,p;for(this.$menu.addClass("bubble-menu--keyboard"),i=null!=(l=e.which)?l:e.keyCode,o=String.fromCharCode(i).toLowerCase(),u=this.$menuitems,p=[],n=r=0,a=u.length;r<a;n=++r){if(s=u[n],t=null!=(c=s.textContent)&&null!=(d=c[0])?d.toLowerCase():void 0,t===o&&n>this.$menuitems.index(e.target)){s.focus(),e.stopPropagation();break}p.push(void 0)}return p},_focusPrevious:function(e){var t;return t=this.$menuitems.index(e),t=t===-1||0===t?this.$menuitems.length-1:t-1,this.$menuitems.get(t).focus()},_focusNext:function(e){var t;return t=this.$menuitems.index(e),t=t===-1||t===this.$menuitems.length-1?0:t+1,this.$menuitems.get(t).focus()},render:function(){var e,t,r;return this.props.targetButton&&(r=y(m,{ref:"targetButton",childProps:{"aria-haspopup":!0}},this.props.targetButton)),y(a,o.extend({},this.props,{ref:"bubble",shouldTrapKeyboardFocus:!0,onShowDropdown:this._onShowBubbleMenu,targetButton:r}),g.div({},this.props.headerContent),g.ul({role:"menu",ref:"menu",className:"bubble-menu",onKeyDown:this._onKeyDown,onKeyPress:this._onKeyPress},function(){var r,o,i,a,s;for(i=this.props.items,s=[],e=r=0,o=i.length;r<o;e=++r)t=i[e],s.push(n.cloneElement(t,{closeFunc:this.hideMenu,key:null!=(a=t.key)?a:e}));return s}.call(this)))}}),m=n.createClass({displayName:"BubbleMenuTargetButtonWrapper",propTypes:{childProps:n.PropTypes.object},render:function(){return n.cloneElement(this.props.children,this.props.childProps)}}),l.POSITIONS=a.POSITIONS,{BubbleMenuItem:u,BubbleMenuSeparator:p,BubbleMenuItemGroup:c,BubbleMenu:l}})}.call(this),define("modules/clean/react/file_uploader/file_uploader",["require","exports","tslib","external/react","modules/clean/react_logger","modules/core/exception"],function(e,t,n,r,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=null,s=(function(t){function o(e){var n=t.call(this,"FileUploaderController",e)||this;return n.path=n.props.initialPath?n.props.initialPath:"/",n.state={fileUploader:void 0,uploaderStore:void 0,uploaderActions:void 0},n.props.loadOnRender&&o.requireFileUploader({}),a?i.reportStack("Only one FileUploader component may be rendered to the page at any time.You have tried to instantiate multiple uploaders.",{severity:i.SEVERITY.CRITICAL}):a=n,n}return n.__extends(o,t),o.requireFileUploader=function(t){var n=t.modalType,r=t.enableBrowseButton;e(["modules/clean/react/file_uploader/uploader","modules/clean/react/file_uploader/store","modules/clean/react/file_uploader/actions"],function(e,t,i){a&&(a.setAsyncRequiredUploaderModules(e,i,t),n&&o.showModal(n),"boolean"==typeof r&&o.setBrowseButton(r))})},o.prototype.setAsyncRequiredUploaderModules=function(e,t,n){var r=e.FileUploader,o=n.UploaderStore,i=t.UploaderActions;this.setState({fileUploader:r,uploaderStore:o,uploaderActions:i}),this.props.needToSetStoreValues&&(void 0!==this.user&&i.setUser({user:this.user}),i.setPath({path:this.path}))},o.prototype.componentWillUnmount=function(){a=null},o.loadCoreComponent=function(){a&&a.state.fileUploader||(e.defined("modules/clean/react/file_uploader/uploader"),o.requireFileUploader({}))},o.isCoreComponentDefined=function(){return!!a&&!!a.state.fileUploader},o.setPathAndPermissions=function(e){a&&a.state.uploaderActions&&a.state.uploaderActions.setPath(e)},o.setPath=function(e){a&&(a.state.uploaderActions?a.state.uploaderActions.setPath({path:e}):(e||(e="/"),a.path=e))},o.setUser=function(e){a&&(a.state.uploaderActions?a.state.uploaderActions.setUser({user:e}):a.user=e?e:void 0)},o.showModal=function(e){a&&(a.refs.fileUploader?e&&"regular"!==e?"out-of-quota"===e?a.refs.fileUploader.showOOQModal():"team-onboarding"===e&&a.state.fileUploader.showModalWithTeamOnboarding():a.refs.fileUploader.showModal():(e=e||"regular",o.requireFileUploader({modalType:e})))},o.setBrowseButton=function(e){a&&(a.refs.fileUploader?a.refs.fileUploader.setBrowseButton(e):o.requireFileUploader({enableBrowseButton:e}))},o.isDraggingFilesHelper=function(e){if(!a)return!1;if(!a.state.uploaderStore)return!1;var t=a.state.uploaderStore;return!!t.numDraggingFiles()&&(e?t.isInternalTransfer():!t.isInternalTransfer())},o.isDraggingInternalFiles=function(){return o.isDraggingFilesHelper(!0)},o.isDraggingExternalFiles=function(){return o.isDraggingFilesHelper(!1)},o.isUploadModalOpen=function(){return!!a&&(!!a.state.uploaderStore&&a.state.uploaderStore.isUploadModalOpen())},o.prototype.render=function(){if(!this.state.fileUploader)return r.createElement("div",null);var e=this.props,t=e.onAllFileUploadsComplete,n=e.sendNS,o=e.onFileUploadComplete,i=e.onModalDismissed,a=e.clickOutToClose,s=e.dragAndDropEnabled,l=e.shouldShowDestinationLink,u=e.removeBasicUploader,c=e.uploaderFixGating,d=e.expSubgrowthProNearquotaUploadModal,p=this.state.fileUploader;return r.createElement(p,{ref:"fileUploader",key:1,sendNS:n,onFileUploadComplete:o,onAllFileUploadsComplete:t,onModalDismissed:i,clickOutToClose:a,dragAndDropEnabled:s,shouldShowDestinationLink:l,removeBasicUploader:u,uploaderFixGating:c,expSubgrowthProNearquotaUploadModal:d})},o})(o.ReactLogger);t.FileUploaderController=s}),define("modules/clean/react/file_uploader/upload_button",["require","exports","tslib","external/mcl/button","external/mcl/tertiary_link","external/react","modules/clean/react/file_uploader/file_uploader"],function(e,t,n,r,o,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.componentDidMount=function(){a.FileUploaderController.setBrowseButton(!0)},t.prototype.componentWillUnmount=function(){a.FileUploaderController.setBrowseButton(!1)},t.prototype.renderPrimaryButton=function(){return i.createElement(r.Button,{className:this.props.className,disabled:this.props.disabled,onClick:this.props.handleClick,variant:"primary"},this.props.children)},t.prototype.renderTertiaryLink=function(){return i.createElement(o.TertiaryLink,{icon:this.props.iconName,onClick:this.props.handleClick,disabled:this.props.disabled,className:this.props.className},this.props.children)},t.prototype.render=function(){return"primary"===this.props.variant?this.renderPrimaryButton():this.renderTertiaryLink()},t})(i.PureComponent);t.UploadButton=s}),function(){define("modules/clean/react/sprite_div",["external/classnames","external/react","modules/clean/react/sprite"],function(e,t,n){var r,o;return r=t.createElement,o=t.DOM.div,t.createClass({displayName:"SpriteDiv",propTypes:{group:t.PropTypes.string.isRequired,name:t.PropTypes.string.isRequired,text:t.PropTypes.oneOfType([t.PropTypes.string,t.PropTypes.array]),alt:t.PropTypes.string,spritePosition:t.PropTypes.oneOf(["left","right"])},getDefaultProps:function(){return{alt:"",spritePosition:"left"}},render:function(){var t,i,a,s,l,u,c,d;switch(a=this.props.group,l=this.props.name,d=this.props.text,t=this.props.alt,c=e(["sprite-frame","small","icon-"+this.props.spritePosition]),u=o({className:c,key:0},r(n,{group:a,name:l,alt:t})),s=o({className:"sprite-text",key:1},d),this.props.spritePosition){case"left":i=[u,s];break;case"right":i=[s,u]}return o({className:"sprite-div"},i)}})})}.call(this),define("modules/clean/sharing/wizard/async_wizard_modals",["require","exports"],function(e,t){"use strict";function n(t){e(["modules/clean/sharing/wizard/wizard_modals"],t)}function r(e,t,r,o){n(function(n){n.shareExistingFolder(e,t,r,o)})}function o(e,t){n(function(n){var r=n.showShareAFolderWizardModal(e);t&&t(r)})}Object.defineProperty(t,"__esModule",{value:!0}),t.asyncShareExistingFolder=r,t.asyncShowShareAFolderWizardModal=o});
//# sourceMappingURL=pkg-browse-core.min.js-vfl_au5Qg.map