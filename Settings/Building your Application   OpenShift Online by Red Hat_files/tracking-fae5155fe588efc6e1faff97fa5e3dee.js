// Tracking code
var _gaq=_gaq||[];(function(){var e=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t="[\\?&]"+e+"=([^&#]*)",n=new RegExp(t),r=n.exec(window.location.search);return r===null?"":decodeURIComponent(r[1].replace(/\+/g," "))},t=function(e){var t="input[name="+e+"]";return $(t).val()},n=function(){function e(e){var t=document.cookie,n=t.indexOf(" "+e+"=");n===-1&&(n=t.indexOf(e+"="));if(n===-1)t=null;else{n=t.indexOf("=",n)+1;var r=t.indexOf(";",n);r===-1&&(r=t.length),t=unescape(t.substring(n,r))}return t}function t(e){var t=new Date(e),n=t.getFullYear().toString(),r=(t.getMonth()+1).toString(),i=t.getDate().toString();return n+"-"+(r.charAt(1)?r:"0"+r.charAt(0))+"-"+(i.charAt(1)?i:"0"+i.charAt(0))}var n=t((new Date).getTime()),r="direct",i="none",s="not set",o=e("__utma"),u=e("__utmz");o&&(o=o.split("."),n=t(o[2]*1e3)),u&&(u=u.match(/[0-9.]+(.*)/i)[1],utmgclid=u.match(/utmgclid=(.*?)(?:$|\|)/i),utmgclid?(r="google",i="cpc"):(utmcsr=u.match(/utmcsr=(.*?)(?:$|\|)/i),r=utmcsr[1].replace(/\(|\)/g,"").substring(0,128),utmcmd=u.match(/utmcmd=(.*?)(?:$|\|)/i),i=utmcmd[1].replace(/\(|\)/g,"").substring(0,128)),utmctr=u.match(/utmctr=(.*?)(?:$|\|)/i),utmctr&&(s=utmctr[1].replace(/\(|\)/g,"").substring(0,128)));var a=document.createElement("input");a.name="source",a.type="hidden",a.value="first_visit="+n+"|"+"source="+r+"|"+"medium="+i+"|"+"term="+s,$("#new_user_form").append(a)},r=e("promo_code"),i=e("confirm_signup"),s=e("sc_cid");/openshift\.com$/.test(location.hostname)||/^\/app\/account\/(new|complete)/.test(location.pathname)?_gaq.push(["_setAccount","UA-30752912-5"]):_gaq.push(["_setAccount","UA-30752912-6"]),/redhat\.com/.test(location.hostname)?_gaq.push(["_setDomainName","redhat.com"]):_gaq.push(["_setDomainName","openshift.com"]),_gaq.push(["_addIgnoredRef","openshift.com"]),_gaq.push(["_addIgnoredRef","www.openshift.com"]),_gaq.push(["_addIgnoredRef","openshift.redhat.com"]),_gaq.push(["_setCustomVar",3,"Omni",s,1]);if(/^\/(app\/)?account/.test(location.pathname)){var o=t("captcha_type"),u=t("captcha_status");o&&u&&_gaq.push(["_trackEvent","Captcha",o,u])}/^\/pricing/.test(location.pathname)&&_gaq.push(["_setCustomVar",4,"Viewed Pricing Page","Viewed Page",1]),/^\/open-source\/download-origin/.test(location.pathname)&&_gaq.push(function(){$(".action-call").on("click",function(e){e.preventDefault();var t=$(this).attr("href");_gaq.push(["_trackEvent","Downloads","Origin",t]),setTimeout(function(){document.location=t},100)})}),i&&i=="true"&&_gaq.push(["_setCampaignTrack",!1]),r&&r!=""&&_gaq.push(["_trackEvent","Promo Code","Evangelist Event",r]),_gaq.push(function(){$('a[href*="engage.redhat.com"],a[href*="inxpo.com"],a[href*="www.redhat.com/wapps/"],a[href*="roianalyst.alinean.com"]').on("click",function(e){e.preventDefault();var t=$(this).attr("href");_gaq.push(["_trackEvent","Outbound Links","OpenShift Enterprise",t]);var n=new Image,r="//www.googleadservices.com/pagead/conversion/1007064360/?value=0&label=UR5rCKC4tAYQqKqa4AM&guid=ON";r+="&url="+encodeURIComponent(t.substring(0,256)),n.src=r,n.onload=function(){document.location=t},setTimeout(function(){document.location=t},1e3)})}),_gaq.push(function(){$("a[href*='.pdf']").on("click",function(e){e.preventDefault();var t=$(this).attr("href");_gaq.push(["_trackEvent","Downloads","PDF Whitepaper",t]);var n=new Image,r="//www.googleadservices.com/pagead/conversion/1007064360/?value=0&label=UR5rCKC4tAYQqKqa4AM&guid=ON";r+="&url="+encodeURIComponent(t.substring(0,256)),n.src=r,n.onload=function(){document.location=t},setTimeout(function(){document.location=t},1e3)})}),_gaq.push(function(){$("a[href*='openshift.github.io']").on("click",function(e){e.preventDefault();var t=$(this).attr("href");_gaq.push(["_trackEvent","Outbound Links","Origin Github Site",t]),setTimeout(function(){document.location=t},100)})});if(/\/search\/node\//.test(location.href)){var a=location.href.replace("/node/","?node=");_gaq.push(["_trackPageview",a])}else _gaq.push(["_trackPageview"]);/\/app\/account\/new/.test(location.href)&&_gaq.push(n)})(),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();if(window.location.hostname.match("openshift.com")){var videoArray=new Array,playerArray=new Array,_pauseFlag=!1;$(document).ready(function(){var e=0;$("iframe").each(function(){var t=$(this),n=t.attr("src")===undefined?"":t.attr("src"),r=/https?\:\/\/www\.youtube\.com\/embed\/([\w-]{11})(?:\?.*)?/,s=n.match(r);s&&s.length>1&&(videoArray[e]=s[1],$(this).attr("id",s[1]),e++)})});function onYouTubeIframeAPIReady(){for(var e=0;e<videoArray.length;e++)playerArray[e]=new YT.Player(videoArray[e],{events:{onStateChange:onPlayerStateChange}})}function onPlayerStateChange(e){var t=e.target.id-1;e.data==YT.PlayerState.PLAYING&&(_gaq.push(["_trackEvent","Videos","Play",videoArray[t]]),_pauseFlag=!1),e.data==YT.PlayerState.ENDED&&(_gaq.push(["_trackEvent","Videos","Watch to End",videoArray[t]]),videoArray[t]=="rbFIHgHDRgo"&&_gaq.push(function(){var e=location.href,t=new Image,n="//www.googleadservices.com/pagead/conversion/1007064360/?value=0&label=UR5rCKC4tAYQqKqa4AM&guid=ON";n+="&url="+encodeURIComponent(e.substring(0,256)),t.src=n,t.onload=function(){}})),e.data==YT.PlayerState.PAUSED&&_pauseFlag==0&&(_gaq.push(["_trackEvent","Videos","Pause",videoArray[t]]),_pauseFlag=!0),e.data==YT.PlayerState.BUFFERING&&_gaq.push(["_trackEvent","Videos","Buffering",videoArray[t]]),e.data==YT.PlayerState.CUED&&_gaq.push(["_trackEvent","Videos","Cueing",videoArray[t]])}var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag)}if(/openshift\.com$/.test(location.hostname)||/^\/app\/account\/(new|complete)/.test(location.pathname)){var demandbase=function(e){return};(function(){var e="223190404d28f4fcabacfadefef244ea33868fb1",t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"==document.location.protocol?"https://":"http://")+"api.demandbase.com/api/v2/ip.json?key="+e+"&callback=demandbase&page="+encodeURIComponent(document.location.href)+"&page_title="+encodeURIComponent(document.title)+"&referrer="+encodeURIComponent(document.referrer);var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)})()}try{if(!navigator.userAgent.match(/iphone|android/i)){var _kiq=_kiq||[];(function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//s3.amazonaws.com/ki.js/35352/7LV.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})()}}catch(err){}try{var _prum=[["id",window.location.hostname.match("openshift.com")?"520508caabe53dc245000000":"520a8643abe53d247c000000"],["mark","firstbyte",(new Date).getTime()]];(function(){var e=document.getElementsByTagName("script")[0],t=document.createElement("script");t.async="async",t.src="//rum-static.pingdom.net/prum.min.js",e.parentNode.insertBefore(t,e)})()}catch(err){};