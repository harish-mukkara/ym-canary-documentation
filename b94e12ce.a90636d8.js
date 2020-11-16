(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(6),a=(t(0),t(96)),i={id:"app.models",title:"app.models",sidebar_label:"app.models"},p={unversionedId:"app.models",id:"app.models",isDocsHomePage:!1,title:"app.models",description:"Description",source:"@site/docs/app-models.md",slug:"/app.models",permalink:"/ym-canary-documentation/docs/app.models",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/app-models.md",version:"current",sidebar_label:"app.models",sidebar:"someSidebar",previous:{title:"About Canary",permalink:"/ym-canary-documentation/docs/"},next:{title:"User Model",permalink:"/ym-canary-documentation/docs/User Model"}},c=[{value:"Description",id:"description",children:[]},{value:"Trigger Words For Models",id:"trigger-words-for-models",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The trigger word for the models will be written in the globals. It will be something like ",Object(a.b)("inlineCode",{parentName:"p"},"app.{{modelName}}")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"trigger-words-for-models"},"Trigger Words For Models"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"app.product == Product Model\napp.User == User Model\napp.LoggedInUser == Loggedin User Model\napp.appointment == Appointments Model\napp.appointmentServices == Appointment Services Model\napp.therapist == Therapist Model ( Related to Appointment )\napp.calendar == Calendar Model ( YM Calendar )\napp.store == Store Model\napp.cart == Cart Model\napp.subscription = Product Subscription Model\napp.coupon == Coupon Model\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage")," : Below is a example of how to use this trigger word of models in functions"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Scenario")," : Consider a scenerio in which you want the details of the user and you have the mobile number of the user in hand"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'let mobile = "9487XXXX80";\nlet userDetails = await app.User.get(mobile);\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output")," : The complete object of the user as below"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "user_id": "12345",\n  "name": "Nitin",\n  "email": "nitin@yellowmessenger.com",\n  "mobile": "9487813680",\n  "otp": "authenticated",\n  "pincode": "authenticated",\n  "city": "Vizag",\n  "region": "CAP",\n  "country": "India",\n  "country_code": "91",\n  "offers": [],\n  "address": [\n    {\n      "pincode": "530013",\n      "region": "CAP",\n      "city": "Vizag",\n      "building": "1, road vizag",\n      "lat_long": "17.7415669,83.3121281"\n    }\n  ],\n  "lat_long": "17.7415669,83.3121281",\n  "optin": [],\n  "locale": "en",\n  "user_type": "Normal",\n  "user_status": "Active",\n  "channels_interacted": [\n    "yellowmessenger",\n    "whatsapp"\n  ],\n  "store_id": "X007",\n  "store": "Maharani Peta Daily, MAHARANI PETA- DAILY KRISHNA NAGAR,VISAKHAPATNAM",\n  "last_interacted": 0,\n  "building": "1, road vizag  ",\n  "recent_orders": [],\n  "open_cart": [],\n}\n')))}s.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return t?o.a.createElement(m,p(p({ref:n},l),{},{components:t})):o.a.createElement(m,p({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);