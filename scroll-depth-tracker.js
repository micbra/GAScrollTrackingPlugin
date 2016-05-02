/**
 * @license
 * The MIT License (MIT)
 * Copyright (c) 2016 SERPs.com
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,

/*! scroll-depth-tracker.js by SERPs.com v1.0.0 */
!function e(t,n,o){function i(c,a){if(!n[c]){if(!t[c]){var l="function"==typeof require&&require;if(!a&&l)return l(c,!0);if(r)return r(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var h=n[c]={exports:{}};t[c][0].call(h.exports,function(e){var n=t[c][1][e];return i(n?n:e)},h,h.exports,e,t,n,o)}return n[c].exports}for(var r="function"==typeof require&&require,c=0;c<o.length;c++)i(o[c]);return i}({1:[function(e,t,n){t.exports={DEV_ID:"SERPYSERPS"}},{}],2:[function(e,t,n){t.exports={action:"Pageview End",beacon:!0,category:"Page",debug:!1,delay:!0,labelNoScroll:"Did Not Scroll",labelScroll:"Did Scroll",sampleRate:100,scrollThreshold:10,setPage:!0,timeout:300,timeThreshold:15,metric:null}},{}],3:[function(e,t,n){var o=e("./constants"),i=e("./utilities");(window.gaDevIds=window.gaDevIds||[]).push(o.DEV_ID),t.exports=function(e,t){var n=window.GoogleAnalyticsObject||"ga";window[n]=window[n]||function(){(window[n].q=window[n].q||[]).push(arguments)},window[n]("provide",e,t),window.gaplugins=window.gaplugins||{},window.gaplugins[i.capitalize(e)]=t}},{"./constants":1,"./utilities":4}],4:[function(e,t,n){var o={toArray:function(e){return Array.prototype.slice.call(e)},ready:function(e){"loading"!=document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",function(){"loading"!=document.readyState&&e()})},capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},extend:function(){function e(e,t){var n;for(n in t)e.hasOwnProperty(n)||(e[n]=t[n]);return e}var t,n=o.toArray(arguments),i={};for(t in n)n[t]=e(i,n[t]);return i},event:function(e,t){var n=!1;return!e.addEventListener&&e.attachEvent&&(n=!0),function(o){return function(i,r,c){if(t=c||t,!i.call)throw Error("Callback is not a function");var a=function(){i.call(t||e,o,r)};return n?e.attachEvent("on"+o,a):e.addEventListener(o,a,!1),function(){n?e.detachEvent(o,a):e.removeEventListener(o,a,!1)}}}}};t.exports=o},{}],5:[function(e,t,n){function o(e,t){var n=this;this.tracker=e,this.config=i.extend(t,r),this.debug(this.config),this.hasScrolled=!1,this.everScrolled=!1,this.tracker.set("useBeacon",this.config.beacon),this.reach=0,this.initialReach=0,this.startTime=1*new Date,i.ready(function(){n.initialReach=n.percent(n.depth(),n.pageHeight()),n.config.setPage&&n.tracker.set("page",window.location.pathname),i.event(window,n)("beforeunload")(n.onUnload),i.event(window)("scroll")(function(){n.everScrolled=!0,n.hasScrolled=!0});var e=function(){n.hasScrolled&&(n.hasScrolled=!1,n.onScroll()),setTimeout(e,n.config.sampleRate)};setTimeout(e,n.config.sampleRate)})}var i=e("./utilities"),r=e("./defaults"),c=e("./provide");o.prototype.debug=function(){this.config.debug&&console.log(i.toArray(arguments))},o.prototype.depth=function(){return(window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0)+(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)},o.prototype.percent=function(e,t){return Math.floor(100*e/t)},o.prototype.onScroll=function(){var e=this.percent(this.depth(),this.pageHeight());e>this.reach&&(e>100?this.reach=100:this.reach=e),this.config.metric&&this.config.metric.toFixed&&this.tracker.set("metric"+this.config.metric,this.reach),this.debug("on scroll: reach",this.reach)},o.prototype.pageHeight=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},o.prototype.onUnload=function(){var e=this,t=!1,n=!1;console.log(1e3*this.config.timeThreshold),console.log(1*new Date-this.startTime),console.log(this.reach),console.log(this.initialReach),console.log(this.config.scrollThreshold),(1*new Date-this.startTime>1e3*this.config.timeThreshold||this.reach>this.initialReach+this.config.scrollThreshold)&&(t=!0),console.log(t?"interactive":"not interactive");var o={eventCategory:this.config.category,eventAction:this.config.action,eventLabel:this.everScrolled?this.config.labelScroll:this.config.labelNoScroll,eventValue:this.reach,nonInteraction:!t,hitCallback:function(){n=!0,e.debug("hit sent!")}};if(this.debug(o),this.tracker.send("event",o),this.config.timeout&&!window.navigator.sendBeacon){var i=new Date,r=0;do r=new Date-i;while(r<this.config.timeout&&!n);this.debug("close page")}},c("scrollDepthTracker",o)},{"./defaults":2,"./provide":3,"./utilities":4}]},{},[5]);
//# sourceMappingURL=scroll-depth-tracker.js.map