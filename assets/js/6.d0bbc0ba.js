(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{333:function(t,i,s){},426:function(t,i,s){"use strict";s(333)},431:function(t,i,s){"use strict";s.r(i);var a={name:"Valine",mounted(){s.e(20).then(s.t.bind(null,428,7)).then(t=>{const i=t.default;if("undefined"!=typeof window){if(window.location.hostname.includes("localhost"))return;document.getElementsByClassName("leancloud-visitors")[0].id=window.location.pathname,this.window=window,window.AV=s(425),this.valine=new i,this.initValine()}})},methods:{initValine(){let t=window.location.pathname;document.getElementsByClassName("leancloud-visitors")[0].id=t,this.valine.init({el:"#vcomments",appId:"mJDds1XW1DFOoL4BisxLSxq7-gzGzoHsz",appKey:"Yuv11TbLJSAG8XwiKE2T3DE1",notify:!1,verify:!1,path:t,visitor:!0,avatar:"mm",placeholder:"write here"})}},watch:{$route(t,i){i.path!==t.path&&this.initValine()}}},n=(s(426),s(7)),e=Object(n.a)(a,(function(){var t=this._self._c;return t("div",{staticClass:"u-valine"},[t("span",{staticClass:"leancloud-visitors",attrs:{"data-flag-title":"Your Article Title"}},[t("span",{staticClass:"stat update-time"},[t("img",{staticClass:"icon",attrs:{src:"/update-time.png"}}),this._v(this._s(this.$page.lastUpdated)+"\r\n        ")]),this._v(" "),this._m(0)])])}),[function(){var t=this._self._c;return t("span",{staticClass:"stat read-count"},[t("img",{staticClass:"icon",attrs:{src:"/read-count.png"}}),this._v(" "),t("span",{staticClass:"leancloud-visitors-count"})])}],!1,null,"69fa00a4",null);i.default=e.exports}}]);