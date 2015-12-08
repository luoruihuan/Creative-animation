define(["./core","./var/rnotwhite","./ajax/var/nonce","./ajax/var/rquery","./core/init","./ajax/parseJSON","./ajax/parseXML","./deferred"],function(e,t,n,r){function m(n){return function(r,i){typeof r!="string"&&(i=r,r="*");var s,o=0,u=r.toLowerCase().match(t)||[];if(e.isFunction(i))while(s=u[o++])s[0]==="+"?(s=s.slice(1)||"*",(n[s]=n[s]||[]).unshift(i)):(n[s]=n[s]||[]).push(i)}}function g(t,n,r,i){function u(a){var f;return s[a]=!0,e.each(t[a]||[],function(e,t){var a=t(n,r,i);if(typeof a=="string"&&!o&&!s[a])return n.dataTypes.unshift(a),u(a),!1;if(o)return!(f=a)}),f}var s={},o=t===h;return u(n.dataTypes[0])||!s["*"]&&u("*")}function y(t,n){var r,i,s=e.ajaxSettings.flatOptions||{};for(r in n)n[r]!==undefined&&((s[r]?t:i||(i={}))[r]=n[r]);return i&&e.extend(!0,t,i),t}function b(e,t,n){var r,i,s,o,u=e.contents,a=e.dataTypes;while(a[0]==="*")a.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in u)if(u[i]&&u[i].test(r)){a.unshift(i);break}if(a[0]in n)s=a[0];else{for(i in n){if(!a[0]||e.converters[i+" "+a[0]]){s=i;break}o||(o=i)}s=s||o}if(s)return s!==a[0]&&a.unshift(s),n[s]}function w(e,t,n,r){var i,s,o,u,a,f={},l=e.dataTypes.slice();if(l[1])for(o in e.converters)f[o.toLowerCase()]=e.converters[o];s=l.shift();while(s){e.responseFields[s]&&(n[e.responseFields[s]]=t),!a&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),a=s,s=l.shift();if(s)if(s==="*")s=a;else if(a!=="*"&&a!==s){o=f[a+" "+s]||f["* "+s];if(!o)for(i in f){u=i.split(" ");if(u[1]===s){o=f[a+" "+u[0]]||f["* "+u[0]];if(o){o===!0?o=f[i]:f[i]!==!0&&(s=u[0],l.unshift(u[1]));break}}}if(o!==!0)if(o&&e["throws"])t=o(t);else try{t=o(t)}catch(c){return{state:"parsererror",error:o?c:"No conversion from "+a+" to "+s}}}}return{state:"success",data:t}}var i=/#.*$/,s=/([?&])_=[^&]*/,o=/^(.*?):[ \t]*([^\r\n]*)$/mg,u=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,a=/^(?:GET|HEAD)$/,f=/^\/\//,l=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,c={},h={},p="*/".concat("*"),d=window.location.href,v=l.exec(d.toLowerCase())||[];return e.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:d,type:"GET",isLocal:u.test(v[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":p,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":e.parseJSON,"text xml":e.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,n){return n?y(y(t,e.ajaxSettings),n):y(e.ajaxSettings,t)},ajaxPrefilter:m(c),ajaxTransport:m(h),ajax:function(u,m){function q(t,n,r,i){var s,o,u,a,f,l=n;if(B===2)return;B=2,T&&clearTimeout(T),y=undefined,S=i||"",F.readyState=t>0?4:0,s=t>=200&&t<300||t===304,r&&(a=b(L,F,r)),a=w(L,a,F,s);if(s)L.ifModified&&(f=F.getResponseHeader("Last-Modified"),f&&(e.lastModified[E]=f),f=F.getResponseHeader("etag"),f&&(e.etag[E]=f)),t===204||L.type==="HEAD"?l="nocontent":t===304?l="notmodified":(l=a.state,o=a.data,u=a.error,s=!u);else{u=l;if(t||!l)l="error",t<0&&(t=0)}F.status=t,F.statusText=(n||l)+"",s?M.resolveWith(A,[o,l,F]):M.rejectWith(A,[F,l,u]),F.statusCode(D),D=undefined,C&&O.trigger(s?"ajaxSuccess":"ajaxError",[F,L,s?o:u]),_.fireWith(A,[F,l]),C&&(O.trigger("ajaxComplete",[F,L]),--e.active||e.event.trigger("ajaxStop"))}typeof u=="object"&&(m=u,u=undefined),m=m||{};var y,E,S,x,T,N,C,k,L=e.ajaxSetup({},m),A=L.context||L,O=L.context&&(A.nodeType||A.jquery)?e(A):e.event,M=e.Deferred(),_=e.Callbacks("once memory"),D=L.statusCode||{},P={},H={},B=0,j="canceled",F={readyState:0,getResponseHeader:function(e){var t;if(B===2){if(!x){x={};while(t=o.exec(S))x[t[1].toLowerCase()]=t[2]}t=x[e.toLowerCase()]}return t==null?null:t},getAllResponseHeaders:function(){return B===2?S:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return B||(e=H[n]=H[n]||e,P[e]=t),this},overrideMimeType:function(e){return B||(L.mimeType=e),this},statusCode:function(e){var t;if(e)if(B<2)for(t in e)D[t]=[D[t],e[t]];else F.always(e[F.status]);return this},abort:function(e){var t=e||j;return y&&y.abort(t),q(0,t),this}};M.promise(F).complete=_.add,F.success=F.done,F.error=F.fail,L.url=((u||L.url||d)+"").replace(i,"").replace(f,v[1]+"//"),L.type=m.method||m.type||L.method||L.type,L.dataTypes=e.trim(L.dataType||"*").toLowerCase().match(t)||[""],L.crossDomain==null&&(N=l.exec(L.url.toLowerCase()),L.crossDomain=!(!N||N[1]===v[1]&&N[2]===v[2]&&(N[3]||(N[1]==="http:"?"80":"443"))===(v[3]||(v[1]==="http:"?"80":"443")))),L.data&&L.processData&&typeof L.data!="string"&&(L.data=e.param(L.data,L.traditional)),g(c,L,m,F);if(B===2)return F;C=e.event&&L.global,C&&e.active++===0&&e.event.trigger("ajaxStart"),L.type=L.type.toUpperCase(),L.hasContent=!a.test(L.type),E=L.url,L.hasContent||(L.data&&(E=L.url+=(r.test(E)?"&":"?")+L.data,delete L.data),L.cache===!1&&(L.url=s.test(E)?E.replace(s,"$1_="+n++):E+(r.test(E)?"&":"?")+"_="+n++)),L.ifModified&&(e.lastModified[E]&&F.setRequestHeader("If-Modified-Since",e.lastModified[E]),e.etag[E]&&F.setRequestHeader("If-None-Match",e.etag[E])),(L.data&&L.hasContent&&L.contentType!==!1||m.contentType)&&F.setRequestHeader("Content-Type",L.contentType),F.setRequestHeader("Accept",L.dataTypes[0]&&L.accepts[L.dataTypes[0]]?L.accepts[L.dataTypes[0]]+(L.dataTypes[0]!=="*"?", "+p+"; q=0.01":""):L.accepts["*"]);for(k in L.headers)F.setRequestHeader(k,L.headers[k]);if(!L.beforeSend||L.beforeSend.call(A,F,L)!==!1&&B!==2){j="abort";for(k in{success:1,error:1,complete:1})F[k](L[k]);y=g(h,L,m,F);if(!y)q(-1,"No Transport");else{F.readyState=1,C&&O.trigger("ajaxSend",[F,L]),L.async&&L.timeout>0&&(T=setTimeout(function(){F.abort("timeout")},L.timeout));try{B=1,y.send(P,q)}catch(I){if(!(B<2))throw I;q(-1,I)}}return F}return F.abort()},getJSON:function(t,n,r){return e.get(t,n,r,"json")},getScript:function(t,n){return e.get(t,undefined,n,"script")}}),e.each(["get","post"],function(t,n){e[n]=function(t,r,i,s){return e.isFunction(r)&&(s=s||i,i=r,r=undefined),e.ajax({url:t,type:n,dataType:s,data:r,success:i})}}),e});