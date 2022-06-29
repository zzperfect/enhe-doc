(self["webpackChunkenhe_design"]=self["webpackChunkenhe_design"]||[]).push([[4654],{57455:function(n,e,t){"use strict";t.r(e);var i=t(67294),a=t(96089),o=(t(78296),t(9971)),l=(t(10676),t(8723),t(27832),t(12178)),c=(t(50043),t(80963),i.memo((function(n){n.demos;return i.createElement(i.Fragment,null,i.createElement("div",{className:"markdown"},i.createElement("h1",{id:"dumi-\u5feb\u901f\u4e0a\u624b"},i.createElement(a.AnchorLink,{to:"#dumi-\u5feb\u901f\u4e0a\u624b","aria-hidden":"true",tabIndex:-1},i.createElement("span",{className:"icon icon-link"})),"dumi \u5feb\u901f\u4e0a\u624b"),i.createElement(l.Z,{code:"\u8def\u7531\u751f\u6210\uff1a\nsrc/filePath/fileName.md => /filePath/fileName\n\n\u6587\u4ef6\u8def\u5f84\u5373\u8def\u7531",lang:"markdown"}),i.createElement("p",null,i.createElement(o.Z,{type:"info"},"\u9ed8\u8ba4 resolve \u8bc6\u522b\u7684\u8def\u5f84\u4e3a docs/** \u548c src/**")),i.createElement("h2",{id:"\u6587\u4ef6\u5934\u5982\u4f55\u5bf9\u5e94\u8def\u7531\u548c\u83dc\u5355"},i.createElement(a.AnchorLink,{to:"#\u6587\u4ef6\u5934\u5982\u4f55\u5bf9\u5e94\u8def\u7531\u548c\u83dc\u5355","aria-hidden":"true",tabIndex:-1},i.createElement("span",{className:"icon icon-link"})),"\u6587\u4ef6\u5934\u5982\u4f55\u5bf9\u5e94\u8def\u7531\u548c\u83dc\u5355"),i.createElement(l.Z,{code:"title: dumi\u5feb\u901f\u4e0a\u624b                       #\u5f53\u524d\u83dc\u5355\u540d\uff0c\u83dc\u5355\u8def\u7531\u901a\u8fc7\u6587\u4ef6\u8def\u5f84\u548c\u6587\u4ef6\u540d\u751f\u6210\norder: 2                                #\u6392\u5e8f\nnav:\n  path: /guide                          #\u9876\u5c42\u83dc\u5355\u540d\ngroup:\n  path: /guide/getting-started          #\u4e00\u7ea7\u83dc\u5355\u8def\u7531\n  title: \u5feb\u901f\u4e0a\u624b                        #\u4e00\u7ea7\u83dc\u5355\u540d",lang:"shell"}),i.createElement("h3",{id:"title-dumi-\u5feb\u901f\u4e0a\u624b"},i.createElement(a.AnchorLink,{to:"#title-dumi-\u5feb\u901f\u4e0a\u624b","aria-hidden":"true",tabIndex:-1},i.createElement("span",{className:"icon icon-link"})),"title: dumi \u5feb\u901f\u4e0a\u624b"),i.createElement("p",null,i.createElement("img",{src:t(16360),alt:"title.png"})),i.createElement("h3",{id:"nav"},i.createElement(a.AnchorLink,{to:"#nav","aria-hidden":"true",tabIndex:-1},i.createElement("span",{className:"icon icon-link"})),"nav:"),i.createElement("p",null,i.createElement(o.Z,{type:"info"},"\u8fd9\u90e8\u5206\u5185\u5bb9\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 config.ts \u6765\u9884\u5148\u5b9a\u4e49\u597d\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u6392\u7248\u6574\u4e2a\u83dc\u5355")),i.createElement(l.Z,{code:"navs: [\n    {\n      title: '\u6307\u5357',\n      path: '/guide',\n    },\n    {\n      title: '\u5f00\u53d1\u89c4\u8303',\n      path: '/rule',\n    },\n    {\n      title: '\u7ec4\u4ef6',\n      path: '/component',\n    },\n    {\n      title: 'FAQ',\n      path: '/faq',\n    },\n  ],",lang:"ts"}),i.createElement("p",null,i.createElement("img",{src:t(26419),alt:"nav.png"})),i.createElement("h3",{id:"group"},i.createElement(a.AnchorLink,{to:"#group","aria-hidden":"true",tabIndex:-1},i.createElement("span",{className:"icon icon-link"})),"group:"),i.createElement("p",null,i.createElement("img",{src:t(81848),alt:"group.png"})),i.createElement("h2",{id:"\u9759\u6001\u8d44\u6e90\u5904\u7406"},i.createElement(a.AnchorLink,{to:"#\u9759\u6001\u8d44\u6e90\u5904\u7406","aria-hidden":"true",tabIndex:-1},i.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u8d44\u6e90\u5904\u7406"),i.createElement("p",null,"\u5728\u5bf9\u5e94\u7684\u5de5\u7a0b\u76ee\u5f55\u4e0b\u5efa\u7acb resources \u6587\u4ef6\u5939\uff0c\u5e76\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84\u6307\u5b9a\u8d44\u6e90\u6587\u4ef6\uff0c\u5728\u6253\u5305\u65f6\uff0c\u5f00\u542f",i.createElement("code",null,"exportStatic:","{","}"),",\u5177\u4f53\u4fe1\u606f\u53c2\u8003 config.ts"),i.createElement(l.Z,{code:"base:'/doc',\noutputPath:'doc',\nmanifest: {\nbasePath: publicPath,\npublicPath:process.env.NODE_ENV === 'production' ? publicPath : '/',\nwriteToFileEmit:true,\n},\nexportStatic: {},\nextraBabelPlugins: [\n[\n  'babel-plugin-import',\n  {\n    libraryName: 'antd',\n    libraryDirectory: 'es',\n    style: true,\n  },\n],\n],\npublicPath: process.env.NODE_ENV === 'production' ? publicPath : '/',",lang:"ts"}),i.createElement("h2",{id:"\u6587\u672c\u6848\u4f8b"},i.createElement(a.AnchorLink,{to:"#\u6587\u672c\u6848\u4f8b","aria-hidden":"true",tabIndex:-1},i.createElement("span",{className:"icon icon-link"})),"\u6587\u672c\u6848\u4f8b"),i.createElement(l.Z,{code:"---\ntitle: \u81ea\u5b9a\u4e49\u6309\u94ae\nnav:\n  path: /component\ngroup:\n  path: /component/udpComponent\n  title: \u81ea\u5b9a\u4e49\u7ec4\u4ef6\n---\n\n# \u81ea\u5b9a\u4e49\u6309\u94ae\uff08\u6301\u7eed\u66f4\u65b0\uff09\n\n## \u5305\u62ec\u54ea\u4e9b\u6309\u94ae\uff1f\n\n> \u6211\u4eec\u57fa\u4e8e antd \u548c\u4e1a\u52a1\u9700\u6c42\u5c01\u88c5\u4e86\u4e0d\u540c\u7c7b\u578b\u6309\u94ae\uff0c\u4e3a\u4fdd\u8bc1\u7cfb\u7edf\u7edf\u4e00\u6027\uff0c\u6240\u6709\u6309\u94ae\u5e94\u57fa\u4e8e\u6211\u4eec\u5c01\u88c5\u7684\u6309\u94ae\u6309\u9700\u5f15\u5165\uff0c\u6240\u6709\u7684\u6309\u94ae\u90fd\u5e94\u63d0\u4f9b`key`\u503c\u6765\u4fdd\u8bc1\u5f53\u524d\u8282\u70b9\u5728\u9875\u9762\u552f\u4e00\n\n\u6309\u94ae\u5305\u62ec\uff1a\n\n- \u9ed8\u8ba4\u6309\u94ae\uff1a\u9700\u8981\u63d0\u4f9b text \u6765\u5b9a\u4e49\u6309\u94ae\u540d\u79f0\n- \u9ed8\u8ba4\u6743\u9650\u6309\u94ae\uff1a\u5728\u4e0b\u8ff0\u4ee3\u7801\u4e2d\u6ca1\u6709\u5b9a\u4e49\uff0c\u540d\u79f0\u4e3a`DefaultAccessButton` \u548c\u9ed8\u8ba4\u6309\u94ae\u4e00\u81f4\uff0c\u53ea\u4e0d\u8fc7\u9700\u8981\u63d0\u4f9b`accessKey`\u6765\u63a7\u5236\u6743\u9650\n  > \u901a\u5e38\u60c5\u51b5\u4e0b\u4f7f\u7528\u4ee5\u4e0b\u4e09\u4e2d\u7c7b\u578b\u6309\u94ae\uff0c\u5982\u7279\u6b8a\u60c5\u51b5\u4e0d\u80fd\u6ee1\u8db3\u9700\u6c42\u4f7f\u7528\u9ed8\u8ba4\u6309\u94ae\n- \u666e\u901a\u6309\u94ae\uff1a\u4e0d\u5177\u6709\u6743\u9650`accessKey`\u63a7\u5236\n- \u6743\u9650\u6309\u94ae\uff1a\u6240\u6709\u7684\u6309\u94ae\u5728\u5f00\u53d1\u524d\u5e94\u5f53\u901a\u8fc7\u7cfb\u7edf\u7ba1\u7406-\u83dc\u5355\u7ba1\u7406\u9875\u9762\u901a\u8fc7\u9884\u5b9a\u4e49\u7684\u65b9\u5f0f\u751f\u6210\u6309\u94ae\u7f16\u53f7\u5e76\u7f16\u7801\u5230\u4ee3\u7801\u4e2d\n- \u8868\u683c\u64cd\u4f5c\uff1a\u53d7\u6743\u9650`accessKey`\u63a7\u5236\n\n````tsx\nimport React from 'react';\nimport {\n  DefaultButton,\n  NewButton,\n  EditButton,\n  RemoveButton,\n  SearchButton,\n  CancelButton,\n  BackButton,\n  ResetButton,\n  SubmitButton,\n  RefreshButton,\n  BatchRemoveButton,\n  TableOptionButtons\n} from 'enhe-design';\nimport { Space, message, Divider, Card } from 'antd';\n\nconst allButtons: React.FC = (props) => {\n  return (\n      <Space direction=\"vertical\">\n        <Divider orientation=\"left\">\u666e\u901a\u6309\u94ae</Divider>\n          <Space>\n            <DefaultButton text={'\u9ed8\u8ba4\u6309\u94ae'} key={'DefaultButton'} onClick={() => {\n            }} />\n\n            <SearchButton key={'SearchButton'} onClick={() => {\n            }} />\n\n            <CancelButton key={'CancelButton'} onClick={() => {\n            }} />\n\n            <BackButton key={'BackButton'} onClick={() => {\n            }} />\n\n            <ResetButton key={'ResetButton'} onClick={() => {\n            }} />\n\n            <RefreshButton key={'RefreshButton'} onClick={() => {\n            }} />\n          </Space>\n        <Divider orientation=\"left\">\u6743\u9650\u63a7\u5236\u6309\u94ae</Divider>\n          <Space>\n            <NewButton accessKey={''} key={'NewButton'} onClick={() => {\n            }} />\n\n            <EditButton accessKey={''} key={'EditButton'} onClick={() => {\n            }} />\n\n            <SubmitButton accessKey={''} key={'SubmitButton'} onClick={() => {\n            }} />\n\n            <RemoveButton accessKey={''} key={'RemoveButton'} onClick={() => {\n            }} />\n\n            <RemoveButton\n              accessKey={''}\n              key={'RemoveButtonContext'}\n              context={'\u786e\u8ba4\u5220\u9664\u5417\uff1f'}\n              text={'\u786e\u8ba4\u5f39\u51fa\u6846\u5220\u9664'}\n              onClick={() => {\n              }} />\n\n            <BatchRemoveButton\n              key={'BatchRemoveButton'}\n              accessKey={''}\n              onClick={() => {\n              }} />\n\n            <BatchRemoveButton\n              key={'BatchRemoveButtonContext'}\n              context={'\u786e\u8ba4\u5220\u9664\u5417\uff1f'}\n              text={'\u786e\u8ba4\u5f39\u51fa\u6846\u6279\u91cf\u5220\u9664'}\n              accessKey={''}\n              onClick={() => {\n              }} />\n          </Space>\n\n        <Divider orientation=\"left\">\u8868\u683c\u64cd\u4f5c\u680f\u6309\u94ae</Divider>\n          <Space>\n            <TableOptionButtons\n              key={'TableOptionButtons'}\n              accessKey={{\n                editKey: '',\n                viewKey: '',\n                deleteKey: ''\n              }}\n              viewClick={() => {\n              }}\n              deleteClick={() => {\n              }}\n              editClick={() => {\n              }}\n            />\n          </Space>\n      </Space>\n)\n};\nexport default allButtons;\n    ```\n\n## \u505a\u4e86\u4ec0\u4e48\u4e8b\u60c5\uff1f\n1. \u90e8\u5206\u6309\u94ae\u57fa\u4e8e\u6743\u9650\u63a7\u5236\u589e\u52a0\u6743\u9650\u63a7\u5236\uff0c\u4e5f\u5c31\u662f`accessKey`\n2. \u5220\u9664\u63d0\u4f9b\u4e24\u79cd\u6a21\u5f0f\uff0c\u6c14\u6ce1\u786e\u8ba4\u6846\u548c\u5f39\u51fa\u786e\u8ba4\u6846\n3. \u63d0\u4ea4,\u7f16\u8f91\u6309\u94ae\u5916\u5305\u542b\u4e86\u4e8b\u4ef6\u63d0\u793a\n   \u2026\u2026\n\n## API\n### \u6309\u94ae\u901a\u7528\u5c5e\u6027\n<style>\ntable th:first-of-type {\n    width: 20%;\n}\ntable th:nth-of-type(2) {\n    width: 30%;\n}\ntable th:nth-of-type(3) {\n    width: 30%;\n}\ntable th:nth-of-type(4) {\n    width: 20%;\n}\n</style>\n\n| \u5c5e\u6027 | \u63cf\u8ff0 | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|---|---|---|---|\n|text ?|\u6309\u94ae\u540d\u79f0 |`string` |- |\n|disabled ?|\u662f\u5426\u7981\u7528 |`boolean` |- |\n|size ?|\u6309\u94ae\u5927\u5c0f |SizeType :`small &#124; middle &#124; large &#124; number` |- |\n|style ?|\u6309\u94ae\u6837\u5f0f |`CSSProperties` |- |\n|onClick |\u70b9\u51fb\u4e8b\u4ef6 |`(params?: any) => void` |- |\n\n### \u9ed8\u8ba4\u6309\u94ae\u5176\u4ed6\u5c5e\u6027 & \u6309\u94ae\u901a\u7528\u5c5e\u6027\n<style>\ntable th:first-of-type {\n    width: 20%;\n}\ntable th:nth-of-type(2) {\n    width: 30%;\n}\ntable th:nth-of-type(3) {\n    width: 30%;\n}\ntable th:nth-of-type(4) {\n    width: 20%;\n}\n</style>\n\n| \u5c5e\u6027 | \u63cf\u8ff0 | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|---|---|---|---|\n|text |\u6309\u94ae\u540d\u79f0 |`string` |- |\n|icon ?|\u56fe\u6807 |`React.ReactNode` |- |\n|type ?|\u7c7b\u578b | `default &#124; primary &#124; ghost &#124; dashed &#124; link &#124; text` |'default' |\n|context ?|\u6279\u91cf\u79fb\u9664\u548c\u5220\u9664\u6309\u94ae\u7279\u6709\uff0c\u5f53\u63d0\u4f9b\u8be5\u503c\uff0c\u5219\u4ee5\u6a21\u6001\u6846\u63d0\u793a\u662f\u5426\u5220\u9664 | `string` |-|\n|hidden ?|\u6279\u91cf\u79fb\u9664\u7279\u6709| `boolean`|-|\n\n\n### \u6743\u9650\u6309\u94ae\u7684\u5176\u4ed6\u5c5e\u6027\u5c5e\u6027 & \u6309\u94ae\u901a\u7528\u5c5e\u6027\n<style>\ntable th:first-of-type {\n    width: 20%;\n}\ntable th:nth-of-type(2) {\n    width: 30%;\n}\ntable th:nth-of-type(3) {\n    width: 30%;\n}\ntable th:nth-of-type(4) {\n    width: 20%;\n}\n</style>\n\n| \u5c5e\u6027 | \u63cf\u8ff0 | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|---|---|---|---|\n|accessKey |\u6743\u9650key\u503c\uff0c\u901a\u8fc7\u83dc\u5355\u9875\u9762\u540e\u7aef\u81ea\u52a8\u751f\u6210 |`string &#124; string []` |- |\n\n\n\n### \u8868\u683c\u64cd\u4f5c\u680f\u6309\u94ae\u5c5e\u6027\n<style>\ntable th:first-of-type {\n    width: 20%;\n}\ntable th:nth-of-type(2) {\n    width: 30%;\n}\ntable th:nth-of-type(3) {\n    width: 30%;\n}\ntable th:nth-of-type(4) {\n    width: 20%;\n}\n</style>\n\n| \u5c5e\u6027 | \u63cf\u8ff0 | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|---|---|---|---|\n|accessKey ?|\u6743\u9650key\u503c,\u4e09\u4e2a\u6309\u94ae\u4e0d\u540c\u6743\u9650\u63a7\u5236 |`{viewKey?: string &#124; string [] editKey?: string &#124; string [] deleteKey?: string &#124; string []}`| - |\n|size ?|\u7edf\u4e00\u8bbe\u7f6e\u5927\u5c0f | `SizeType` | 'small' |\n|viewVisible ?|\u67e5\u770b\u6309\u94ae\u662f\u5426\u53ef\u89c1 | `boolean` | -|\n|viewText ?|\u67e5\u770b\u6309\u94ae\u6587\u5b57 | `string` | '\u67e5\u770b'|\n|viewClick ?|\u67e5\u770b\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6 | `(params?: any) => void` | -|\n|viewStyle ?|\u67e5\u770b\u6309\u94ae\u6837\u5f0f | `CSSProperties` | -|\n|viewDisabled ?|\u67e5\u770b\u6309\u94ae\u7981\u7528 | `boolean` | -|\n|viewSize ?|\u67e5\u770b\u6309\u94ae\u5927\u5c0f | `SizeType` | -|\n|editVisible ?|\u7f16\u8f91\u6309\u94ae\u662f\u5426\u53ef\u89c1 | `boolean` | -|\n|editText ?|\u7f16\u8f91\u6309\u94ae\u6587\u5b57 | `string` | '\u7f16\u8f91'|\n|editClick ?|\u7f16\u8f91\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6 | `(params?: any) => void` | -|\n|editStyle ?|\u7f16\u8f91\u6309\u94ae\u6837\u5f0f | `CSSProperties` | -|\n|editDisabled ?|\u7f16\u8f91\u6309\u94ae\u7981\u7528 | `boolean` | -|\n|editSize ?|\u7f16\u8f91\u6309\u94ae\u5927\u5c0f | `SizeType` | -|\n|deleteVisible ?|\u5220\u9664\u6309\u94ae\u662f\u5426\u53ef\u89c1 | `boolean` | -|\n|deleteText ?|\u5220\u9664\u6309\u94ae\u6587\u5b57 | `string` | '\u5220\u9664'|\n|deleteClick ?|\u5220\u9664\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6 | `(params?: any) => void` | -|\n|deleteStyle ?|\u5220\u9664\u6309\u94ae\u6837\u5f0f | `CSSProperties` | -|\n|deleteDisabled ?|\u5220\u9664\u6309\u94ae\u7981\u7528 | `boolean` | -|\n|deleteSize ?|\u5220\u9664\u6309\u94ae\u5927\u5c0f | `SizeType` | -|\n|deleteContext ?|\u5220\u9664\u6a21\u6001\u5f39\u51fa\u6846\u63d0\u793a\u4fe1\u606f | `string` | -|\n\n````",lang:"markdown"}),i.createElement(l.Z,{code:"",lang:"unknown"})))})));e["default"]=function(n){var e=i.useContext(a.context),t=e.demos;return i.useEffect((function(){var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),i.createElement(c,{demos:t})}},81848:function(n,e,t){n.exports=t.p+"static/group.37a14943.png"},26419:function(n,e,t){n.exports=t.p+"static/nav.49173cdc.png"},16360:function(n,e,t){n.exports=t.p+"static/title.38c31d6a.png"}}]);