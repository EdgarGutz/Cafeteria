/*!CK:166981965!*//*1415593371,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["1bizW"]); }

__d("GamesRecGrid",["CSS","DOM","DOMQuery","Event","Run","Animation","Ease","Style","BanzaiODS","csx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=86,r=352;function s(t,u){"use strict";this.$GamesRecGrid0=t;this.$GamesRecGrid1=u;if(this.$GamesRecGrid1.autoscroll){this.$GamesRecGrid2=h.find(this.$GamesRecGrid0,"._8eu");this.$GamesRecGrid3=this.$GamesRecGrid2.childNodes.length;this.$GamesRecGrid4=0;this.$GamesRecGrid5=j.listen(this.$GamesRecGrid0,'mouseenter',this.pauseAutoscroll.bind(this));this.$GamesRecGrid6=j.listen(this.$GamesRecGrid0,'mouseleave',this.resumeAutoscroll.bind(this));this.resumeAutoscroll();}var v=i.scry(this.$GamesRecGrid0,"._8et");if(v.length===1){this.$GamesRecGrid7=v[0];this.$GamesRecGrid8();}}s.prototype.$GamesRecGrid8=function(){"use strict";var t=h.find(this.$GamesRecGrid0,"._bva"),u=j.listen(this.$GamesRecGrid7,'click',function(){u.remove();u=null;g.hide(this.$GamesRecGrid7);g.show(t);if(this.$GamesRecGrid1.autoscroll){clearInterval(this.$GamesRecGrid9);this.$GamesRecGrid6.remove();this.$GamesRecGrid5.remove();n.set(h.find(this.$GamesRecGrid0,"._8eu"),'top','0px');n.set(h.find(this.$GamesRecGrid0,"._8ev"),'height',r+'px');}else h.scry(this.$GamesRecGrid0,"._5wml").forEach(function(v){g.show(v);});o.bumpEntityKey('platform_www','games_homepage_rhc_unit.expand');}.bind(this));k.onLeave(function(){u&&u.remove();});};s.prototype.resumeAutoscroll=function(){"use strict";this.$GamesRecGrid9=setInterval(function(){new l(this.$GamesRecGrid2).to('top',-(this.$GamesRecGrid4*q)).ease(m.sineInOut).duration(400).go();this.$GamesRecGrid4=((this.$GamesRecGrid4+this.$GamesRecGrid3+1)%this.$GamesRecGrid3);}.bind(this),this.$GamesRecGrid1.autoscrollTimeout);};s.prototype.pauseAutoscroll=function(){"use strict";clearInterval(this.$GamesRecGrid9);this.$GamesRecGrid9=null;};e.exports=s;},null);
__d("GamesGogglesSwitch",[],function(a,b,c,d,e,f){var g=false,h={enable:function(){g=true;},isEnabled:function(){return g;}};e.exports=h;},null);
__d("GamesImpressionTracker",["VisibilityTracking","throttle","Event","Banzai","Arbiter","cx","GamesGogglesSwitch"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n='data-gamesegoimp',o=1000;function p(v){if(m.isEnabled())v.className=v.className+" "+"_1z5y";}for(var q in g)if(g.hasOwnProperty(q))s[q]=g[q];var r=g===null?null:g.prototype;s.prototype=Object.create(r);s.prototype.constructor=s;s.__superConstructor__=g;function s(){"use strict";if(g!==null)g.apply(this,arguments);}s.prototype.handleEvent=function(v,event){"use strict";if(event.name===g.EVENT.VISIBLE){var w=v.getAttribute(n);v.removeAttribute(n);if(w){p(v);j.post('games_ego_imp',{data:w});}}};var t=new s({selector:'[data-gamesegoimp]',handleAllVisibleEvents:true,skipVisibilityHiddenEvents:true,cacheTrackedElements:true}),u=h.acrossTransitions(function(){return t.fireEventCallback();},o,null);t.listeners.addSubscriptions(i.listen(document,'mousemove',u),i.listen(document,'click',u),k.subscribe('games_unit_loaded',function(){return t.refreshAllTrackedElements();}));},null);
__d("Slideshow",["ArbiterMixin","CSS","DOM","Event","Locale","Parent","csx","cx","getActiveElement","mixin","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=p(g);for(var s in r)if(r.hasOwnProperty(s))u[s]=r[s];var t=r===null?null:r.prototype;u.prototype=Object.create(t);u.prototype.constructor=u;u.__superConstructor__=r;function u(v,w){"use strict";this._root=v;this._config=w;this._currentIndex=0;this._animating=false;this._autoplayTimer=null;this._autoplayTimeout=w.autoplayTimeout;this._init();}u.prototype.getIndex=function(){"use strict";return this._currentIndex;};u.prototype.getNumItems=function(){"use strict";return this._items.length;};u.prototype.getRightArrow=function(){"use strict";if(this._config.arrows)return i.find(this._root,"a._2xw");return null;};u.prototype.getLeftArrow=function(){"use strict";if(this._config.arrows)return i.find(this._root,"a._2xx");return null;};u.prototype.page=function(v){"use strict";if(typeof v==='undefined')v='next';if(v==='next'){if(this._config.wrap||this.getIndex()<this.getNumItems()-1)this._animateTo((this.getIndex()+1)%this.getNumItems());}else if(v==='prev')if(this._config.wrap||this.getIndex()>0){var w=(this.getNumItems()+this.getIndex()-1)%this.getNumItems();this._animateTo(w);}};u.prototype.pageTo=function(v){"use strict";this._animateTo(v,q(this._setCurrent,this,v));};u.prototype.insert=function(v,w){"use strict";if(v>this._currentIndex){i.insertAfter(this._items[v-1],w);}else{i.insertBefore(this._items[v],w);this._currentIndex++;}this._items.splice(v,0,w);this._updateArrowState(this._currentIndex);this.inform('items_updated');};u.prototype.push=function(v){"use strict";this.insert(this._items.length,v);};u.prototype._init=function(){"use strict";this._container=i.find(this._root,"ul._2xq");this._items=i.scry(this._container,"li._2xr");if(this._config.arrows){j.listen(this._root,'click',this._clickListener.bind(this));var v=i.find(this._root,"a._2xw"),w=i.find(this._root,"a._2xx");this._arrowLeft=k.isRTL()?v:w;this._arrowRight=k.isRTL()?w:v;}if(this._config.autoplay){if(this._config.autoplaycontrol){j.listen(this._root,'mouseenter',this.stopAutoplay.bind(this));j.listen(this._root,'mouseleave',this.resetAutoplay.bind(this));}this.resetAutoplay();}this.subscribe(['page_start','page_end'],function(x,y){h.conditionClass(this._root,"_2xm",x==='page_start');}.bind(this));};u.prototype._clickListener=function(event){"use strict";var v=event.getTarget(),w=l.byTag(v,'a');if(w&&!h.hasClass(w,"_2xo"))if(h.hasClass(w,"_2xw")){this.page('next');}else if(h.hasClass(w,"_2xx"))this.page('prev');};u.prototype._updateArrowState=function(v){"use strict";if(!this._config.arrows)return;h.conditionClass(this._arrowRight,"_2xo",this._items.length===1);h.conditionClass(this._arrowLeft,"_2xo",this._items.length===1);};u.prototype._animateTo=function(v){"use strict";};u.prototype._setCurrent=function(v){"use strict";h.removeClass(this._items[this._currentIndex],"_2xn");h.addClass(this._items[v],"_2xn");h.removeClass(this._root,"_2xm");var w=i.scry(this._items[this._currentIndex],'a').some(function(y){return y==o();});if(w){var x=i.scry(this._items[v],'a');if(x[0])x[0].focus();}this._currentIndex=v;this._animating=false;this.inform('page_end',v);};u.prototype.startAutoplay=function(v){"use strict";this._config.autoplay=true;this._autoplayTimeout=v;this.resetAutoplay();};u.prototype.resetAutoplay=function(){"use strict";if(this._config.autoplay){clearTimeout(this._autoplayTimer);this._autoplayTimer=setTimeout(this._autoplay.bind(this),this._autoplayTimeout);}};u.prototype.stopAutoplay=function(){"use strict";clearTimeout(this._autoplayTimer);this._autoplayTimer=null;};u.prototype._autoplay=function(){"use strict";this.resetAutoplay();if(this._items.length>1)this.page();};u.prototype.setAutoplayTimeout=function(v){"use strict";this._autoplayTimeout=v;};e.exports=u;},null);
__d("Carousel",["Animation","CSS","Ease","Locale","Slideshow","Style","cx","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=j.isRTL()?'right':'left',p=i.sineInOut;for(var q in k)if(k.hasOwnProperty(q))s[q]=k[q];var r=k===null?null:k.prototype;s.prototype=Object.create(r);s.prototype.constructor=s;s.__superConstructor__=k;function s(t,u){"use strict";k.call(this,t,u);this.subscribe('items_updated',this._updateItemState.bind(this));}s.prototype._updateItemState=function(t,u){"use strict";this._setContainerPos(t);l.set(this._container,'width',(this._items.length*this._config.width)+'px');};s.prototype._updateArrowState=function(t){"use strict";if(!this._config.arrows)return;var u=this._config.wrap,v=this._items.length,w=Math.floor(v/this._config.photosperframe);h.conditionClass(this._arrowRight,"_2xo",w===1||(!u&&t===w-1));h.conditionClass(this._arrowLeft,"_2xo",w===1||(!u&&t===0));};s.prototype._animate=function(t,u){"use strict";var v=(t===-1)?this._items.length-1:t,w=0;if(this._config.peek_with_offset){w=-t*(this._config.width-this._config.peek*2);if(t>0)w=w+this._config.peek-t*(this._config.item_margin/2);if(t===this._items.length-1)w+=this._config.peek;}else w=-t*this._config.width;this._animating=true;this.inform('page_start',v);new g(this._container).to(o,w).duration(this._config.animationDuration).ease(p).ondone(u).go();};s.prototype._setContainerPos=function(t){"use strict";l.set(this._container,o,-t*this._config.width+'px');};s.prototype._animateTo=function(t){"use strict";if(this._animating)return;var u=this._items.length;if((0<=t&&t<u)||!this._config.wrap){var v=(t+u)%u;this._updateArrowState(v);return this._animate(v,n(this._setCurrent,this,v));}var w=t%u,x=w?u-1:0,y=this._items[u-1];l.set(y,'position','absolute');l.set(y,o,-this._config.width+'px');if(x===0)this._setContainerPos(-1);this._animate(w,function(){l.set(y,'position','static');l.set(y,o,'auto');this._setContainerPos(x);this._setCurrent(x);}.bind(this));};e.exports=s;},null);