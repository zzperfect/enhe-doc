(self["webpackChunkenhe_design"]=self["webpackChunkenhe_design"]||[]).push([[3853],{83249:function(e,t,n){"use strict";n.r(t);var l=n(67294),a=n(96089),c=(n(78296),n(9971)),r=(n(10676),n(8723),n(27832),n(12178)),o=(n(50043),n(80963),l.memo((function(e){e.demos;return l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"\u539f\u52191-\u62c6\u5206"},l.createElement(a.AnchorLink,{to:"#\u539f\u52191-\u62c6\u5206","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u539f\u52191 \u62c6\u5206"),l.createElement("p",null,"\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u4e0d\u540c\u7684\u7ec4\u4ef6\u4ee3\u7801\uff0c\u5e94\u8be5\u62c6\u5206\u4e3a\u4e0d\u540c\u7684\u7ec4\u4ef6\u3002"),l.createElement("p",null,"\u4e00\u4e2a\u7ec4\u4ef6\u4ee3\u7801\u5e94\u8be5\u5c3d\u91cf\u5c0f\uff0c\u5c3d\u91cf\u4ee5300\u884c\u4f5c\u4e3a\u9650\u5236\u3002"),l.createElement("h2",{id:"\u539f\u52192-\u5c06\u6570\u636e\u4ea4\u7ed9react\u7ba1\u7406"},l.createElement(a.AnchorLink,{to:"#\u539f\u52192-\u5c06\u6570\u636e\u4ea4\u7ed9react\u7ba1\u7406","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u539f\u52192 \u5c06\u6570\u636e\u4ea4\u7ed9react\u7ba1\u7406"),l.createElement("p",null,"\u6570\u636e\u5305\u62ec\uff1a"),l.createElement("ol",null,l.createElement("li",null,"\u5e38\u91cf")),l.createElement("blockquote",null,l.createElement("p",null,"\u4f7f\u7528useRef\u5305\u88f9")),l.createElement("p",null,"const ref = useRef(null)"),l.createElement("ol",{start:2},l.createElement("li",null,"\u65b9\u6cd5")),l.createElement("blockquote",null,l.createElement("p",null,"\u4f7f\u7528useCallback\u5305\u88f9")),l.createElement(r.Z,{code:"const func = useCallback(() => {\n    // do something\n},[state]);",lang:"typescript"}),l.createElement("ol",{start:3},l.createElement("li",null,"\u7ec4\u4ef6")),l.createElement("blockquote",null,l.createElement("p",null,"\u6839\u636e\u60c5\u51b5\u4f7f\u7528React.memo\u8fd4\u56de\u7ec4\u4ef6")),l.createElement("p",null,l.createElement(c.Z,null,"\u901a\u8fc7\u6d45\u6bd4\u8f83props\u6765\u5224\u65ad\u662f\u5426\u9700\u8981\u91cd\u65b0\u6e32\u67d3\u5b50\u7ec4\u4ef6\u8fd8\u662f\u4ece\u5185\u5b58\u4e2d\u76f4\u63a5\u8bfb\u53d6")),l.createElement(r.Z,{code:"const Comp =  function (props) {\n    retrun <div>{props}</div>\n}\n\nexport default React.memo(Comp);",lang:"typescript"}),l.createElement("ol",{start:4},l.createElement("li",null,"\u5f53\u6839\u636e\u67d0\u4e2a\u72b6\u6001\u6216\u8005\u51e0\u4e2a\u72b6\u6001\u6765\u63a7\u5236\u6570\u636e\u662f\u5426\u9700\u8981\u91cd\u65b0\u88ab\u5b9a\u4e49\uff0c\u53ef\u4ee5\u901a\u8fc7useMemo\u6765\u8fdb\u884c\u4f18\u5316")),l.createElement(r.Z,{code:"const {state,state2,state3} = useMemo(() => {\n    // do something\n  return {\n    state,\n    state2,\n    state3,\n  };\n},[state]);",lang:"typescript"}),l.createElement("h2",{id:"\u539f\u56e0"},l.createElement(a.AnchorLink,{to:"#\u539f\u56e0","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u539f\u56e0"),l.createElement("p",null,"\u5728react\u5185\u90e8\uff0c\u6709\u5b83\u81ea\u5df1\u7684\u4e00\u5957\u590d\u6742\u7b97\u6cd5fiber\uff0c\u53ef\u4ee5\u7406\u89e3\u6210\u4e00\u4e2a\u94fe\u8868\uff0c\u662f\u5426\u9700\u8981\u91cd\u65b0\u8ba1\u7b97\uff0c\u662f\u5426\u9700\u8981\u91cd\u65b0\u6e32\u67d3\uff0c\u4ea4\u7ed9react\u7ba1\u7406\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002",l.createElement("img",{src:n(83824),alt:"fiber.png"})),l.createElement("p",null,"\u6240\u6709\u7684hook\u7edf\u4e00\u4ea4\u7ed9react\u7684\u8c03\u5ea6\u5668\u53bb\u6267\u884c\uff0c\u662f\u4ece\u7f13\u5b58\u4e2d\u8bfb\u53d6\u6570\u636e\u8fd8\u662f\u91cd\u65b0\u8ba1\u7b97\u5f97\u5230\u6570\u636e\uff0c\u6211\u4eec\u5e76\u4e0d\u9700\u8981\u5173\u5fc3\uff0c\u800c\u4e14\u6027\u80fd\u6bd4\u6211\u4eec\u81ea\u5df1\u7ba1\u7406\u66f4\u597d",l.createElement("img",{src:n(46754),alt:"render.png"}))))})));t["default"]=function(e){var t=l.useContext(a.context),n=t.demos;return l.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(o,{demos:n})}},83824:function(e,t,n){e.exports=n.p+"static/fiber.b28021c9.png"},46754:function(e,t,n){e.exports=n.p+"static/render.e2d9dab3.png"}}]);