(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Thumbs=t.Carousel=void 0;var i=o(n(282)),s=o(n(241));function o(e){return e&&e.__esModule?e:{default:e}}t.Carousel=i.default,t.Thumbs=s.default},238:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=n(283),o=(i=s)&&i.__esModule?i:{default:i};t.default={CAROUSEL:function(e){return(0,o.default)({carousel:!0,"carousel-slider":e})},WRAPPER:function(e,t){return(0,o.default)({"thumbs-wrapper":!e,"slider-wrapper":e,"axis-horizontal":"horizontal"===t,"axis-vertical":"horizontal"!==t})},SLIDER:function(e,t){return(0,o.default)({thumbs:!e,slider:e,animated:!t})},ITEM:function(e,t){return(0,o.default)({thumb:!e,slide:e,selected:t})},ARROW_PREV:function(e){return(0,o.default)({"control-arrow control-prev":!0,"control-disabled":e})},ARROW_NEXT:function(e){return(0,o.default)({"control-arrow control-next":!0,"control-disabled":e})},DOT:function(e){return(0,o.default)({dot:!0,selected:e})}}},239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return"translate3d"+("("+("horizontal"===t?[e,0,0]:[0,e,0]).join(",")+")")}},240:function(e,t,n){var i,s,o;s=[t,n(284)],void 0===(o="function"==typeof(i=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=(n=t)&&n.__esModule?n:{default:n};e.default=i.default})?i.apply(t,s):i)||(e.exports=o)},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(0),r=h(o),a=h(n(4)),u=h(n(238)),l=n(285),c=h(n(239)),p=h(n(240));function h(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return f.call(n),n.state={selectedItem:e.selectedItem,hasMount:!1,firstItem:0,itemSize:null,visibleItems:0,lastPosition:0,showArrows:!1,images:n.getImages()},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),s(t,[{key:"componentDidMount",value:function(e){this.setupThumbs()}},{key:"componentWillReceiveProps",value:function(e,t){e.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:e.selectedItem,firstItem:this.getFirstItem(e.selectedItem)}),e.children!==this.props.children&&this.setState({images:this.getImages()})}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){window.addEventListener("resize",this.updateSizes),window.addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){window.removeEventListener("resize",this.updateSizes),window.removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getImages",value:function(){var e=o.Children.map(this.props.children,function(e,t){var n=e;return"img"!==e.type&&(n=o.Children.toArray(e.props.children).filter(function(e){return"img"===e.type})[0]),n&&0!==n.length?n:null});return 0===e.filter(function(e){return null!==e}).length?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),null):e}},{key:"getFirstItem",value:function(e){var t=e;return e>=this.state.lastPosition&&(t=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(t=this.state.firstItem),e<this.state.firstItem&&(t=e),t}},{key:"renderItems",value:function(){var e=this;return this.state.images.map(function(t,n){var s=u.default.ITEM(!1,n===e.state.selectedItem&&e.state.hasMount),o={key:n,ref:function(t){return e.setThumbsRef(t,n)},className:s,onClick:e.handleClickItem.bind(e,n,e.props.children[n]),onKeyDown:e.handleClickItem.bind(e,n,e.props.children[n])};return 0===n&&(t=r.default.cloneElement(t,{onLoad:e.setMountState})),r.default.createElement("li",i({},o,{role:"button",tabIndex:0}),t)})}},{key:"render",value:function(){if(!this.props.children)return null;var e,t=this.state.showArrows&&this.state.firstItem>0,n=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,i=-this.state.firstItem*this.state.itemSize+"px",s=(0,c.default)(i,this.props.axis),o=this.props.transitionTime+"ms";return e={WebkitTransform:s,MozTransform:s,MsTransform:s,OTransform:s,transform:s,msTransform:s,WebkitTransitionDuration:o,MozTransitionDuration:o,MsTransitionDuration:o,OTransitionDuration:o,transitionDuration:o,msTransitionDuration:o},r.default.createElement("div",{className:u.default.CAROUSEL(!1)},r.default.createElement("div",{className:u.default.WRAPPER(!1),ref:this.setItemsWrapperRef},r.default.createElement("button",{type:"button",className:u.default.ARROW_PREV(!t),onClick:this.slideRight}),r.default.createElement(p.default,{tagName:"ul",selectedItem:this.state.selectedItem,className:u.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:e,ref:this.setItemsListRef},this.renderItems()),r.default.createElement("button",{type:"button",className:u.default.ARROW_NEXT(!n),onClick:this.slideLeft})))}}]),t}();d.displayName="Thumbs",d.propsTypes={children:a.default.element.isRequired,transitionTime:a.default.number,selectedItem:a.default.number,thumbWidth:a.default.number},d.defaultProps={selectedItem:0,transitionTime:350,axis:"horizontal"};var f=function(){var e=this;this.setItemsWrapperRef=function(t){e.itemsWrapperRef=t},this.setItemsListRef=function(t){e.itemsListRef=t},this.setThumbsRef=function(t,n){e.thumbsRef||(e.thumbsRef=[]),e.thumbsRef[n]=t},this.updateSizes=function(){if(e.props.children&&e.itemsWrapperRef){var t=e.props.children.length,n=e.itemsWrapperRef.clientWidth,i=e.props.thumbWidth?e.props.thumbWidth:(0,l.outerWidth)(e.thumbsRef[0]),s=Math.floor(n/i),o=t-s,r=s<t;e.setState(function(t,n){return{itemSize:i,visibleItems:s,firstItem:r?e.getFirstItem(n.selectedItem):0,lastPosition:o,showArrows:r}})}},this.setMountState=function(){e.setState({hasMount:!0}),e.updateSizes()},this.handleClickItem=function(t,n,i){if(!i.keyCode||"Enter"===i.key){var s=e.props.onSelectItem;"function"==typeof s&&s(t,n)}},this.onSwipeStart=function(){e.setState({swiping:!0})},this.onSwipeEnd=function(){e.setState({swiping:!1})},this.onSwipeMove=function(t){var n=-e.state.firstItem*e.state.itemSize;0===n&&t>0&&(t=0),n===-e.state.visibleItems*e.state.itemSize&&t<0&&(t=0);var i=n+100/(e.itemsWrapperRef.clientWidth/t)+"%";e.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(t){e.itemsListRef.style[t]=(0,c.default)(i,e.props.axis)})},this.slideRight=function(t){e.moveTo(e.state.firstItem-("number"==typeof t?t:1))},this.slideLeft=function(t){e.moveTo(e.state.firstItem+("number"==typeof t?t:1))},this.moveTo=function(t){t=(t=t<0?0:t)>=e.lastPosition?e.lastPosition:t,e.setState({firstItem:t,selectedItem:e.state.selectedItem})}};t.default=d},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(0),r=f(o),a=f(n(24)),u=f(n(4)),l=f(n(238)),c=f(n(239)),p=f(n(240)),h=f(n(241)),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(286));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(){},v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return w.call(n),n.state={initialized:!1,selectedItem:e.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:e.autoPlay},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),s(t,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.selectedItem!==this.state.selectedItem&&(this.updateSizes(),this.moveTo(e.selectedItem)),e.autoPlay!==this.state.autoPlay&&this.setState({autoPlay:e.autoPlay},function(){t.state.autoPlay?t.setupAutoPlay():t.destroyAutoPlay()})}},{key:"componentDidUpdate",value:function(e,t){e.children||!this.props.children||this.state.initialized||this.setupCarousel(),t.swiping&&!this.state.swiping&&this.resetPosition()}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){this.bindEvents(),this.state.autoPlay&&o.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.setState({initialized:!0});var e=this.getInitialImage();e?e.addEventListener("load",this.setMountState):this.setMountState()}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){window.addEventListener("resize",this.updateSizes),window.addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&document.addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){window.removeEventListener("resize",this.updateSizes),window.removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&document.removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"getPosition",value:function(e){this.props.infiniteLoop&&++e;var t=o.Children.count(this.props.children);if(this.props.centerMode&&"horizontal"===this.props.axis){var n=-e*this.props.centerSlidePercentage,i=t-1;return e&&(e!==i||this.props.infiniteLoop)?n+=(100-this.props.centerSlidePercentage)/2:e===i&&(n+=100-this.props.centerSlidePercentage),n}return 100*-e}},{key:"renderItems",value:function(e){var t=this;return o.Children.map(this.props.children,function(n,i){var s={ref:function(e){return t.setItemsRef(e,i)},key:"itemKey"+i+(e?"clone":""),className:l.default.ITEM(!0,i===t.state.selectedItem),onClick:t.handleClickItem.bind(t,i,n)};return t.props.centerMode&&"horizontal"===t.props.axis&&(s.style={minWidth:t.props.centerSlidePercentage+"%"}),r.default.createElement("li",s,n)})}},{key:"renderControls",value:function(){var e=this;return this.props.showIndicators?r.default.createElement("ul",{className:"control-dots"},o.Children.map(this.props.children,function(t,n){return r.default.createElement("li",{className:l.default.DOT(n===e.state.selectedItem),onClick:e.changeItem,onKeyDown:e.changeItem,value:n,key:n,role:"button",tabIndex:0})})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?r.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,o.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return this.props.showThumbs&&0!==o.Children.count(this.props.children)?r.default.createElement(h.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth},this.props.children):null}},{key:"render",value:function(){if(!this.props.children||0===o.Children.count(this.props.children))return null;var e="horizontal"===this.props.axis,t=this.props.showArrows&&o.Children.count(this.props.children)>1,n=t&&(this.state.selectedItem>0||this.props.infiniteLoop),s=t&&(this.state.selectedItem<o.Children.count(this.props.children)-1||this.props.infiniteLoop),a={},u=this.getPosition(this.state.selectedItem),h=(0,c.default)(u+"%",this.props.axis),d=this.props.transitionTime+"ms";a={WebkitTransform:h,MozTransform:h,MsTransform:h,OTransform:h,transform:h,msTransform:h},this.state.swiping||(a=i({},a,{WebkitTransitionDuration:d,MozTransitionDuration:d,MsTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d}));var f=this.renderItems(!0),m=f.shift(),v=f.pop(),w={selectedItem:this.state.selectedItem,className:l.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:a,tolerance:this.props.swipeScrollTolerance},y={};if(e){if(w.onSwipeLeft=this.onSwipeForward,w.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var b=this.getVariableImageHeight(this.state.selectedItem);w.style.height=b||"auto",y.height=b||"auto"}}else w.onSwipeUp="natural"===this.props.verticalSwipe?this.onSwipeBackwards:this.onSwipeForward,w.onSwipeDown="natural"===this.props.verticalSwipe?this.onSwipeForward:this.onSwipeBackwards,w.style.height=this.state.itemSize,y.height=this.state.itemSize;return r.default.createElement("div",{className:this.props.className,ref:this.setCarouselWrapperRef},r.default.createElement("div",{className:l.default.CAROUSEL(!0),style:{width:this.props.width}},r.default.createElement("button",{type:"button",className:l.default.ARROW_PREV(!n),onClick:this.onClickPrev}),r.default.createElement("div",{className:l.default.WRAPPER(!0,this.props.axis),style:y,ref:this.setItemsWrapperRef},this.props.swipeable?r.default.createElement(p.default,i({tagName:"ul",ref:this.setListRef},w,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&v,this.renderItems(),this.props.infiniteLoop&&m):r.default.createElement("ul",{className:l.default.SLIDER(!0,this.state.swiping),ref:this.setListRef,style:a},this.props.infiniteLoop&&v,this.renderItems(),this.props.infiniteLoop&&m)),r.default.createElement("button",{type:"button",className:l.default.ARROW_NEXT(!s),onClick:this.onClickNext}),this.renderControls(),this.renderStatus()),this.renderThumbs())}}]),t}();v.displayName="Carousel",v.propTypes={className:u.default.string,children:u.default.node,showArrows:u.default.bool,showStatus:u.default.bool,showIndicators:u.default.bool,infiniteLoop:u.default.bool,showThumbs:u.default.bool,thumbWidth:u.default.number,selectedItem:u.default.number,onClickItem:u.default.func.isRequired,onClickThumb:u.default.func.isRequired,onChange:u.default.func.isRequired,axis:u.default.oneOf(["horizontal","vertical"]),verticalSwipe:u.default.oneOf(["natural","standard"]),width:d.unit,useKeyboardArrows:u.default.bool,autoPlay:u.default.bool,stopOnHover:u.default.bool,interval:u.default.number,transitionTime:u.default.number,swipeScrollTolerance:u.default.number,swipeable:u.default.bool,dynamicHeight:u.default.bool,emulateTouch:u.default.bool,statusFormatter:u.default.func.isRequired,centerMode:u.default.bool,centerSlidePercentage:u.default.number},v.defaultProps={showIndicators:!0,showArrows:!0,showStatus:!0,showThumbs:!0,infiniteLoop:!1,selectedItem:0,axis:"horizontal",verticalSwipe:"standard",width:"100%",useKeyboardArrows:!1,autoPlay:!1,stopOnHover:!0,interval:3e3,transitionTime:350,swipeScrollTolerance:5,swipeable:!0,dynamicHeight:!1,emulateTouch:!1,onClickItem:m,onClickThumb:m,onChange:m,statusFormatter:function(e,t){return e+" of "+t},centerMode:!1,centerSlidePercentage:80};var w=function(){var e=this;this.setThumbsRef=function(t){e.thumbsRef=t},this.setCarouselWrapperRef=function(t){e.carouselWrapperRef=t},this.setListRef=function(t){e.listRef=t},this.setItemsWrapperRef=function(t){e.itemsWrapperRef=t},this.setItemsRef=function(t,n){e.itemsRef||(e.itemsRef=[]),e.itemsRef[n]=t},this.autoPlay=function(){!e.state.autoPlay||o.Children.count(e.props.children)<=1||(clearTimeout(e.timer),e.timer=setTimeout(function(){e.increment()},e.props.interval))},this.clearAutoPlay=function(){e.state.autoPlay&&clearTimeout(e.timer)},this.resetAutoPlay=function(){e.clearAutoPlay(),e.autoPlay()},this.stopOnHover=function(){e.setState({isMouseEntered:!0}),e.clearAutoPlay()},this.startOnLeave=function(){e.setState({isMouseEntered:!1}),e.autoPlay()},this.navigateWithKeyboard=function(t){var n="horizontal"===e.props.axis,i=n?37:38;(n?39:40)===t.keyCode?e.increment():i===t.keyCode&&e.decrement()},this.updateSizes=function(){if(e.state.initialized){var t="horizontal"===e.props.axis,n=e.itemsRef[0],i=t?n.clientWidth:n.clientHeight;e.setState(function(e,n){return{itemSize:i,wrapperSize:t?i*o.Children.count(n.children):i}}),e.thumbsRef&&e.thumbsRef.updateSizes()}},this.setMountState=function(){e.setState({hasMount:!0}),e.updateSizes()},this.handleClickItem=function(t,n){0!=o.Children.count(e.props.children)&&(e.state.cancelClick?e.setState({cancelClick:!1}):(e.props.onClickItem(t,n),t!==e.state.selectedItem&&e.setState({selectedItem:t})))},this.handleOnChange=function(t,n){o.Children.count(e.props.children)<=1||e.props.onChange(t,n)},this.handleClickThumb=function(t,n){e.props.onClickThumb(t,n),e.selectItem({selectedItem:t})},this.onSwipeStart=function(){e.setState({swiping:!0}),e.clearAutoPlay()},this.onSwipeEnd=function(){e.setState({swiping:!1}),e.autoPlay()},this.onSwipeMove=function(t){var n="horizontal"===e.props.axis,i=o.Children.count(e.props.children),s=e.getPosition(e.state.selectedItem),r=e.props.infiniteLoop?e.getPosition(i-1)-100:e.getPosition(i-1),a=n?t.x:t.y,u=a;0===s&&a>0&&(u=0),s===r&&a<0&&(u=0);var l=s+100/(e.state.itemSize/u);e.props.infiniteLoop&&(0===e.state.selectedItem&&l>-100?l-=100*i:e.state.selectedItem===i-1&&l<100*-i&&(l+=100*i)),l+="%",e.setPosition(l);var c=Math.abs(a)>e.props.swipeScrollTolerance;return c&&!e.state.cancelClick&&e.setState({cancelClick:!0}),c},this.setPosition=function(t,n){var i=a.default.findDOMNode(e.listRef);["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(n){i.style[n]=(0,c.default)(t,e.props.axis)}),n&&i.offsetLeft},this.resetPosition=function(){var t=e.getPosition(e.state.selectedItem)+"%";e.setPosition(t)},this.decrement=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.moveTo(e.state.selectedItem-("number"==typeof t?t:1),n)},this.increment=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.moveTo(e.state.selectedItem+("number"==typeof t?t:1),n)},this.moveTo=function(t,n){var i=o.Children.count(e.props.children)-1,s=e.props.infiniteLoop&&!n&&(t<0||t>i),r=t;t<0&&(t=e.props.infiniteLoop?i:0),t>i&&(t=e.props.infiniteLoop?0:i),s?e.setState({swiping:!0},function(){r<0?e.props.centerMode&&"horizontal"===e.props.axis?e.setPosition("-"+((i+2)*e.props.centerSlidePercentage-(100-e.props.centerSlidePercentage)/2)+"%",!0):e.setPosition("-"+100*(i+2)+"%",!0):r>i&&e.setPosition(0,!0),e.selectItem({selectedItem:t,swiping:!1})}):e.selectItem({selectedItem:t}),e.state.autoPlay&&!1===e.state.isMouseEntered&&e.resetAutoPlay()},this.onClickNext=function(){e.increment(1,!1)},this.onClickPrev=function(){e.decrement(1,!1)},this.onSwipeForward=function(){e.increment(1,!0)},this.onSwipeBackwards=function(){e.decrement(1,!0)},this.changeItem=function(t){if(!t.key||"Enter"===t.key){var n=t.target.value;e.selectItem({selectedItem:n})}},this.selectItem=function(t,n){e.setState(t,n),e.handleOnChange(t.selectedItem,o.Children.toArray(e.props.children)[t.selectedItem])},this.getInitialImage=function(){var t=e.props.selectedItem,n=e.itemsRef&&e.itemsRef[t],i=n&&n.getElementsByTagName("img");return i&&i[t]},this.getVariableImageHeight=function(t){var n=e.itemsRef&&e.itemsRef[t],i=n&&n.getElementsByTagName("img");if(e.state.hasMount&&i.length>0){var s=i[0];if(!s.complete){s.addEventListener("load",function t(){e.forceUpdate(),s.removeEventListener("load",t)})}var o=s.clientHeight;return o>0?o:null}return null}};t.default=v},283:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)&&i.length){var r=s.apply(null,i);r&&e.push(r)}else if("object"===o)for(var a in i)n.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(i=function(){return s}.apply(t,[]))||(e.exports=i)}()},284:function(e,t,n){var i,s,o;s=[t,n(0),n(4)],void 0===(o="function"==typeof(i=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=u;var i=o(t),s=o(n);function o(e){return e&&e.__esModule?e:{default:e}}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=!1;function u(e){a=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){u(!0)}}))}catch(h){}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return a?e:e.capture}function c(e){if("touches"in e){var t=e.touches[0],n=t.pageX,i=t.pageY;return{x:n,y:i}}var s=e.screenX,o=e.screenY;return{x:s,y:o}}var p=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,i=Array(n),s=0;s<n;s++)i[s]=arguments[s];var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return o._handleSwipeStart=o._handleSwipeStart.bind(o),o._handleSwipeMove=o._handleSwipeMove.bind(o),o._handleSwipeEnd=o._handleSwipeEnd.bind(o),o._onMouseDown=o._onMouseDown.bind(o),o._onMouseMove=o._onMouseMove.bind(o),o._onMouseUp=o._onMouseUp.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,l({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,l({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=c(e),n=t.x,i=t.y;this.moveStart={x:n,y:i},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=c(e),n=t.x,i=t.y,s=n-this.moveStart.x,o=i-this.moveStart.y;this.moving=!0;var r=this.props.onSwipeMove({x:s,y:o},e);r&&e.preventDefault(),this.movePosition={deltaX:s,deltaY:o}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"render",value:function(){var e=this;return i.default.createElement(this.props.tagName,{ref:function(t){return e.swiper=t},onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:this.props.className,style:this.props.style},this.props.children)}}]),t}(t.Component);p.displayName="ReactSwipe",p.propTypes={tagName:s.default.string,className:s.default.string,style:s.default.object,children:s.default.node,allowMouseEvents:s.default.bool,onSwipeUp:s.default.func,onSwipeDown:s.default.func,onSwipeLeft:s.default.func,onSwipeRight:s.default.func,onSwipeStart:s.default.func,onSwipeMove:s.default.func,onSwipeEnd:s.default.func,tolerance:s.default.number.isRequired},p.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},tolerance:0},e.default=p})?i.apply(t,s):i)||(e.exports=o)},285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.outerWidth=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t+=parseInt(n.marginLeft)+parseInt(n.marginRight)}},286:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.unit=function(e,t,n){if(!/(pt|px|em|rem|vw|vh|%)$/.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed. It needs to be a size unit like pt, px, em, rem, vw, %")}}}]);
//# sourceMappingURL=2-465d71936af05d50fdb8.js.map