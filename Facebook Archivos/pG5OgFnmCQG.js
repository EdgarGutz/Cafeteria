/*!CK:1495890533!*//*1415592767,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/PSI4"]); }

__d("XAYMTPanelSaveSettingsControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/ads\/growth\/aymt\/homepage_panel\/save_settings\/",{time_range:{type:"Enum"},ad_account_id:{type:"Int"},promoted_object:{type:"Int"},collapsed:{type:"Int"},dismiss_nux:{type:"Bool"},refresh_panel:{type:"Bool"}});},null);
__d("AdvertiserHomePagelet",["AsyncRequest","DOM","URI","XAYMTPanelSaveSettingsControllerURIBuilder","$"],function(a,b,c,d,e,f,g,h,i,j,k){var l={init:function(m,n){var o=new j().setBool('refresh_panel',true).getURI();o.addQueryData(i.getRequestURI().getQueryData());new g().setURI(o).setStatusElement(n).setErrorHandler(function(p){h.setContent(k('pagelet_advertiser_panel'),'');}).send();}};e.exports=l;},null);
__d("onViewportChanged",["EventListener","emptyFunction","getViewportDimensions","requestAnimationFrame"],function(a,b,c,d,e,f,g,h,i,j){var k=[],l=false,m=null,n,o;function p(){var aa=i.withoutScrollbars();return {top:0,bottom:aa.height,left:0,right:aa.width};}function q(aa,ba){var ca={transform:ba||h.thatReturnsArgument,callback:aa,needsUpdate:true};k.push(ca);x();s();return {remove:r.bind(null,ca),scheduleCheck:v.bind(null,ca)};}function r(aa){var ba=k.indexOf(aa);if(ba!==-1){k.splice(ba,1);if(k.length===0)t();}}function s(){if(!o){o=g.listen(window,'scroll',w);n=g.listen(window,'resize',u);}}function t(){if(o){o.remove();n.remove();o=n=null;}}function u(){m=null;w();}function v(aa){aa.needsUpdate=true;x();}function w(){k.map(function(aa){return aa.needsUpdate=true;});x();}function x(){if(!l){l=true;j(function(){l=false;z();});}}function y(aa){if(aa.needsUpdate){aa.needsUpdate=false;return true;}return false;}function z(){if(!m)m=p();var aa=k.filter(y),ba=aa.map(function(ca){return ca.transform.call(null,m);});aa.forEach(function(ca,da){return ca.callback.call(null,ba[da]);});}e.exports=q;},null);
__d("onRectIsWithinViewport",["onViewportChanged"],function(a,b,c,d,e,f,g){function h(j,k){return !(j.bottom<k.top||j.top>k.bottom||j.right<k.left||j.left>k.right);}function i(j,k){var l;function m(o){var p=j();return !!p&&h(p,o);}function n(o){if(l!==o){l=o;k(o);}}return g(n,m);}e.exports=i;},null);
__d("OnVisible.react",["React","getElementRect","onRectIsWithinViewport","onlyChild"],function(a,b,c,d,e,f,g,h,i,j){var k=g.createClass({displayName:"OnVisible",propTypes:{onVisible:g.PropTypes.func,onHidden:g.PropTypes.func,buffer:g.PropTypes.number},componentDidMount:function(){this._createListener();},componentDidUpdate:function(){this._createListener();},componentWillUnmount:function(){this._removeListener();},reset:function(){this._removeListener();this._createListener();},check:function(){if(this._listener)this._listener.scheduleCheck();},_measureElementRect:function(){if(!this.isMounted())return null;var l=this.props.buffer||0,m=h(this.getDOMNode());m.left-=l;m.right+=l;m.top-=l;m.bottom+=l;return m;},_createListener:function(){var l=this.getDOMNode();if(this._listener&&l!==this._element)this._removeListener();if(!this._listener){this._element=l;this._listener=i(this._measureElementRect,function(m){var n=m?this.props.onVisible:this.props.onHidden;n&&n();}.bind(this));}},_removeListener:function(){if(this._listener){this._listener.remove();this._listener=null;}},render:function(){return j(this.props.children);}});e.exports=k;},null);
__d("XEventImpressionLoggerAsyncControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/events\/{eventid}\/ajax\/impression\/",{eventid:{type:"Int",required:true},acontext:{type:"StringToStringMap",required:true}});},null);
__d("EventImpressionLogger.react",["Arbiter","React","OnVisible.react","DOMContainer.react","AsyncRequest","XEventImpressionLoggerAsyncControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=h.createClass({displayName:"EventImpressionLogger",propTypes:{child:h.PropTypes.object.isRequired,event_id:h.PropTypes.number.isRequired,action_context:h.PropTypes.object.isRequired,start_signal:h.PropTypes.string,stop_signal:h.PropTypes.string,check_signal:h.PropTypes.string},componentDidMount:function(){this._listening=!this.props.start_signal;if(this.props.start_signal)g.subscribe(this.props.start_signal,function(n,o){this._signalData=o;this._listening=true;if(this._signalData){this._logImpression();}else if(!this.logged){this.refs.onvisible.reset();this.refs.onvisible.check();}}.bind(this));if(this.props.stop_signal)g.subscribe(this.props.stop_signal,function(){this._signalData=null;this._listening=false;}.bind(this));if(this.props.check_signal)g.subscribe(this.props.check_signal,function(n,o){this._signalData=o;if(this._signalData){this._logImpression();}else if(!this.logged){this.refs.onvisible.reset();this.refs.onvisible.check();}}.bind(this));},_logImpression:function(){if(!this._listening)return;if(this.logged)return;if(!document.documentElement.contains(this.props.child))return;if(this._signalData&&this._signalData.rect){var n=this.props.child.getBoundingClientRect(),o=this._signalData.rect,p=0;if(this._signalData.scrollTop)p=this._signalData.scrollTop;if(o.left&&o.left>n.left)return;if(o.right&&o.right<n.right)return;if(o.top&&o.top>n.top-p)return;if(o.bottom&&o.bottom<n.bottom-p)return;}this.logged=true;var q=new l().setInt('eventid',this.props.event_id).setStringToStringMap('acontext',this.props.action_context).getURI();new k(q).send();},render:function(){return (h.createElement(i,{onVisible:this._logImpression,ref:"onvisible"},h.createElement(j,null,this.props.child)));}});e.exports=m;},null);