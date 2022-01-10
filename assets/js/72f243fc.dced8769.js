"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[4287],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=s(n),m=r,k=g["".concat(o,".").concat(m)]||g[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},34611:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return g}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],p={title:"Tracing",keywords:["Tracing"],description:"Tracing access"},o=void 0,s={unversionedId:"user-guide/observability/tracing",id:"user-guide/observability/tracing",isDocsHomePage:!1,title:"Tracing",description:"Tracing access",source:"@site/docs/user-guide/observability/tracing.md",sourceDirName:"user-guide/observability",slug:"/user-guide/observability/tracing",permalink:"/docs/next/user-guide/observability/tracing",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/user-guide/observability/tracing.md",version:"current",frontMatter:{title:"Tracing",keywords:["Tracing"],description:"Tracing access"},sidebar:"tutorialSidebar",previous:{title:"Observability",permalink:"/docs/next/user-guide/observability/observability"},next:{title:"Dubbo Proxy",permalink:"/docs/next/user-guide/dubbo-proxy"}},u=[{value:"Catalog Structure",id:"catalog-structure",children:[]},{value:"Edit shenyu-agent.yaml",id:"edit-shenyu-agentyaml",children:[]},{value:"Agent Plugin Tracing Jaeger",id:"agent-plugin-tracing-jaeger",children:[]},{value:"Agent Plugin Tracing Zipkin",id:"agent-plugin-tracing-zipkin",children:[]},{value:"Agent Plugin Tracing OpenTelemetry",id:"agent-plugin-tracing-opentelemetry",children:[]}],c={toc:u};function g(e){var t=e.components,p=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article introduces how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu Agent Tracing"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"java agent")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"bytecode enhancement")," technology to achieve seamless embedding, so that users can access third-party observability systems without introducing dependencies, and obtain Traces, Metrics and Logging."),(0,i.kt)("h2",{id:"catalog-structure"},"Catalog Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 logback.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 tracing-point.yaml\n\u251c\u2500\u2500 plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent-plugin-tracing-common-${latest.release.version}-SNAPSHOT.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent-plugin-tracing-jaeger-${latest.release.version}-SNAPSHOT.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent-plugin-tracing-opentelemetry-${latest.release.version}-SNAPSHOT.jar\n\u2502\xa0\xa0 \u2514\u2500\u2500 shenyu-agent-plugin-tracing-zipkin-${latest.release.version}-SNAPSHOT.jar\n\u2514\u2500\u2500 shenyu-agent.jar\n")),(0,i.kt)("h2",{id:"edit-shenyu-agentyaml"},"Edit shenyu-agent.yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'appName: shenyu-agent\nsupports:\n  tracing:\n    - jaeger\n    - opentelemetry\n    - zipkin\n\nplugins:\n  tracing:\n    jaeger:\n      host: "localhost"\n      port: 5775\n      props:\n        SERVICE_NAME: "shenyu-agent"\n        JAEGER_SAMPLER_TYPE: "const"\n        JAEGER_SAMPLER_PARAM: "1"\n    zipkin:\n      host: \n      port: \n      props:\n    opentelemetry:\n      props:\n        otel.traces.exporter: jaeger #zipkin #otlp\n        otel.resource.attributes: "service.name=shenyu-agent"\n        otel.exporter.jaeger.endpoint: "http://localhost:14250/api/traces"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the plugin to be used in ",(0,i.kt)("inlineCode",{parentName:"li"},"supports")),(0,i.kt)("li",{parentName:"ul"},"Configure the parameters of the plug-in in ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins"),". The specific usage of each plug-in props parameter is shown in the following tables:")),(0,i.kt)("h4",{id:"jaeger"},"jaeger"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SERVICE_NAME"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"shenyu-agent"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name displayed in the traces system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"JAEGER_SAMPLER_TYPE"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"const"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Jaeger sample rate type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"JAEGER_SAMPLER_PARAM"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Jaeger sample rate parameters")))),(0,i.kt)("h4",{id:"opentelemetry"},"opentelemetry"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"otel.traces.exporter"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"jaeger"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Traces exporter type, if not filled in, the default is otlp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"otel.resource.attributes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"service.name=shenyu-agent"),(0,i.kt)("td",{parentName:"tr",align:"left"},"otel resource attributes, if you fill in more than one, they can be separated by commas")))),(0,i.kt)("p",null,"The SDK used by the opentelemetry plugin is initialized based on ",(0,i.kt)("inlineCode",{parentName:"p"},"opentelemetry-sdk-extension-autoconfigure"),". For more usage, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java/tree/v1.9.1/sdk-extensions/autoconfigure#opentelemetry-sdk-autoconfigure"},"OpenTelemetry SDK AutoConfiguration Instructions")),(0,i.kt)("h5",{id:"zipkin"},"zipkin"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SERVICE_NAME"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"shenyu-agent"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name displayed in the traces system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"URL_VERSION"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"/api/v2/spans"),(0,i.kt)("td",{parentName:"tr",align:"left"},"zipkin url version")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SAMPLER_TYPE"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"const"),(0,i.kt)("td",{parentName:"tr",align:"left"},"zipkin sampler type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SAMPLER_PARAM"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"zipkin sampler param")))),(0,i.kt)("h2",{id:"agent-plugin-tracing-jaeger"},"Agent Plugin Tracing Jaeger"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"modify yaml file")),(0,i.kt)("p",null,"Specify the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"jaeger")," plugin via ",(0,i.kt)("inlineCode",{parentName:"p"},"supports.tracing")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-agent.yaml")," file, and fill in the ",(0,i.kt)("inlineCode",{parentName:"p"},"jaeger")," configuration information via ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.tracing"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'appName: shenyu-agent\nsupports:\n  tracing:\n    - jaeger\n\nplugins:\n  tracing:\n    jaeger:\n      host: "localhost"\n      port: 5775\n      props:\n        SERVICE_NAME: "shenyu-agent"\n        JAEGER_SAMPLER_TYPE: "const"\n        JAEGER_SAMPLER_PARAM: "1"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"start jaeger server")),(0,i.kt)("p",null,"please see ",(0,i.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/1.28/getting-started/"},"jaeger-quickstart")," to start ",(0,i.kt)("inlineCode",{parentName:"p"},"jaeger")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"tracing test"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Reference ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/deployment/deployment-local"},"Deployment")," to start ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start the gateway by referring to the above procedure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/quick-start/quick-start-http"},"Quick start with Http")," to start ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-examples-http"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Launch a request to the gateway."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"GET http://localhost:9195/http/order/findById?id=1"),(0,i.kt)("p",{parentName:"blockquote"},"Accept: application/json"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After a successful request, you can see that the link log has been reported to jaeger:\n",(0,i.kt)("img",{src:n(94920).Z}),"\n",(0,i.kt)("img",{src:n(35767).Z})))))),(0,i.kt)("h2",{id:"agent-plugin-tracing-zipkin"},"Agent Plugin Tracing Zipkin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"modify yaml file")),(0,i.kt)("p",null,"Specify the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"zipkin")," plugin via ",(0,i.kt)("inlineCode",{parentName:"p"},"supports.tracing")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-agent.yaml")," file, and fill in the ",(0,i.kt)("inlineCode",{parentName:"p"},"zipkin")," configuration information via ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.tracing"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'appName: shenyu-agent\nsupports:\n  tracing:\n    - zipkin\n\nplugins:\n  tracing:\n    zipkin:\n      host: "localhost"\n      port: 9411\n      props:\n        SERVICE_NAME: "shenyu-agent"\n        URL_VERSION: "/api/v2/spans"\n        SAMPLER_TYPE: "const"\n        SAMPLER_PARAM: "1"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"start zipkin-server")),(0,i.kt)("p",null,"please see ",(0,i.kt)("a",{parentName:"p",href:"https://zipkin.io/pages/quickstart"},"zipkin-quickstart")," to start ",(0,i.kt)("inlineCode",{parentName:"p"},"zipkin-server")," ."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"tracing test "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Reference ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/deployment/deployment-local"},"Deployment")," to start ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start the gateway by referring to the above procedure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/quick-start/quick-start-http"},"Quick start with Http")," to start ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-examples-http"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Launch a request to the gateway."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"GET http://localhost:9195/http/order/findById?id=999"),(0,i.kt)("p",{parentName:"blockquote"},"Accept: application/json"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After a successful request, you can see that the link log has been reported to zipkin:\n",(0,i.kt)("img",{src:n(90424).Z})))))),(0,i.kt)("h2",{id:"agent-plugin-tracing-opentelemetry"},"Agent Plugin Tracing OpenTelemetry"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"modify yaml file")),(0,i.kt)("p",null,"Specify the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"opentelemetry")," plugin via ",(0,i.kt)("inlineCode",{parentName:"p"},"supports.tracing")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-agent.yaml")," file, and fill in the ",(0,i.kt)("inlineCode",{parentName:"p"},"opentelemetry")," configuration information via ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.tracing"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'appName: shenyu-agent\nsupports:\n  tracing:\n    - opentelemetry\n\nplugins:\n  tracing:\n    opentelemetry:\n      props:\n        otel.traces.exporter: jaeger #zipkin #otlp\n        otel.resource.attributes: "service.name=shenyu-agent"\n        otel.exporter.jaeger.endpoint: "http://localhost:14250/api/traces"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start jaeger or zipkin or opentelemetry-collector according to exporter configuration")),(0,i.kt)("p",null,"To start jaeger, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/1.28/getting-started/"},"jaeger-quickstart")),(0,i.kt)("p",null,"To start zipkin, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://zipkin.io/pages/quickstart"},"zipkin-quickstart")),(0,i.kt)("p",null,"To start otel-collector, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/collector/getting-started/"},"opentelemetry-collector-quickstart")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"tracing test"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Reference ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/deployment/deployment-local"},"Deployment")," to start ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start the gateway by referring to the above procedure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/quick-start/quick-start-http"},"Quick start with Http")," to start ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-examples-http"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Launch a request to the gateway."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"GET http://localhost:9195/http/order/findById?id=999"),(0,i.kt)("p",{parentName:"blockquote"},"Accept: application/json"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After the request is successful, you can see the link log in the corresponding backend, the effect is the same as the above ",(0,i.kt)("inlineCode",{parentName:"p"},"jaeger")," plugin and ",(0,i.kt)("inlineCode",{parentName:"p"},"zipkin")," plugin."))))))}g.isMDXComponent=!0},94920:function(e,t,n){t.Z=n.p+"assets/images/shenyu-agent-plugin-tracing-jaeger-1-675ef230ed483bf24008b91b0576e2dc.jpg"},35767:function(e,t,n){t.Z=n.p+"assets/images/shenyu-agent-plugin-tracing-jaeger-2-d9f040809859450a478dbb52188eeb22.jpg"},90424:function(e,t,n){t.Z=n.p+"assets/images/shenyu-agent-plugin-tracing-zipkin-7817c8ccb7bb44e939400213adebba08.png"}}]);