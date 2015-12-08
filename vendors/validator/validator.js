(function(e){var t={selector:"input[required]",triggers:["blur"],validations:["required"],messages:{required:"This field is required",base:"Field is invalid"},tooltip:{placement:"right",html:!0,trigger:"manual",container:"body"},highlight:{className:"has-error",attachTo:".form-group",active:!0}},n={required:function(e){return e.data("select2")!==undefined?!!e.select2("val"):!!e.val()}},r={},i=[],s=function(){var t;do t=Math.floor(Math.random()*1e9);while(e.inArray(t,i)!==-1);return i.push(t),t},o=function(e,t){var n;return t.highlight.active===!0&&(t.highlight.attachTo==="self"?n=e:n=e.closest(t.highlight.attachTo)),n},u=function(t,n,r){var i;$attached=o(t,r),$attached&&$attached.addClass(r.highlight.className);if(r.tooltip){typeof n=="object"?i=n.message:r.messages[n]&&(i=r.messages[n]),i===undefined&&(i=r.messages.base),i===undefined&&(i="");var s=e.extend(r.tooltip,{title:i});t.data("select2")!==undefined?t.select2("container").tooltip(s).tooltip("show"):t.tooltip(s).tooltip("show")}},a=function(e,t){$attached=o(e,t),$attached&&$attached.removeClass(t.highlight.className),t.tooltip&&(e.data("select2")!==undefined?e.select2("container").tooltip("destroy"):e.tooltip("destroy"))},f=function(e,t,r){var i;for(var s=0,o=t.validations.length;s<o;s++){var f=t.validations[s];if(n[f]){i=n[f](e);if(!i){r||u(e,f,t);break}}else if(typeof f=="object"){i=f.validator(e);if(!i){r||u(e,f,t);break}}}return i===!0&&(r||a(e,t)),i},l=function(t,n,r){var i=p(t),s=0;if(!e.isArray(i))n.find(i.selector).each(function(){valid=f(e(this),i,r),valid||s++});else for(var o=0,u=i.length;o<u;o++){var a=i[o];n.find(a.selector).each(function(){valid=f(e(this),a,r),valid||s++})}return s},c=function(t,n){if(!n.tooltip)return;var r=e.extend(n.tooltip,{title:""});t.find(n.selector).each(function(){var t=e(this);t.data("select2")!==undefined?t.select2("container").tooltip(r):t.tooltip(r)})},h=function(t,n,r){c(n,r),r.triggers&&n.on(r.triggers.join(" "),r.selector,e.proxy(function(t,n){var r=e(n.currentTarget),i=e(n.delegateTarget),s=p(t);for(var o=0,u=s.length;o<u;o++){var a=s[o];if(e.inArray(r[0],i.find(a.selector))!=-1){f(r,a);break}}},null,t))},p=function(e){return r[e]},d={init:function(n){n=n||[],e.isArray(n)||e.error("Options must be an array of items.");var i=this.selector,o=s(),u=i+o;this.each(function(){e(this).data("validator-uid",o);var i=e(this);if(!n.length)r[u]=[t],h(u,i,t);else{var s=[];for(var a=0,f=n.length;a<f;a++){var l=e.extend({},t),c=e.extend(!0,{},l,n[a]);s.push(c),h(u,i,c)}r[u]=s}})},check:function(t){var t=t||!1,n,r=0,i=this.selector;return this.each(function(){var n=e(this).data("validator-uid"),s=e(this);r+=l(i+n,s,t)}),r},hasErrors:function(t){var t=t||!1,n,r=0,i=this.selector;return this.each(function(){var n=e(this).data("validator-uid"),s=e(this);r+=l(i+n,s,t)}),r>0},reset:function(){var t=this.selector;this.each(function(){var n=e(this).data("validator-uid"),r=e(this),i=p(t+n);if(!e.isArray(i))r.find(i.selector).each(function(){a(e(this),i)});else for(var s=0,o=i.length;s<o;s++){var u=i[s];r.find(u.selector).each(function(){a(e(this),u)})}})}};e.fn.validate=function(t){if(d[t])return d[t].apply(this,Array.prototype.slice.call(arguments,1));if(typeof t=="object"||!t)return d.init.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.validate")}})(jQuery);