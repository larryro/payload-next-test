"use strict";(self.webpackChunknext_auth_cms=self.webpackChunknext_auth_cms||[]).push([[127],{89127:(e,a,l)=>{l.r(a),l.d(a,{default:()=>x});var t=l(13578),i=l(5977),s=l(9980),n=l(28630),d=l(75091),o=l(47489),r=l(40684),c=l(2143),m=l(49546),v=l(28584),u=l(93313),b=l(4983),p=l(46268),f=l(5590),E=l(55532),g=l(37276),_=l(25896),Z=l(50854),h=l(8742),N=l(28019),S=l(40829),w=l(45074),$=l(8792),k=l(11750),y=l(24531),L=l(17095),P=l(9684),U=l(69850);l(88446);const R="global-edit",A=e=>{var a,l,i,n,d,o,r,c,A,C,F,x,D,T,I,M;const{admin:{dateFormat:O}}=(0,s.Z)(),{publishedDoc:V}=(0,w.x5)(),{global:G,data:H,onSave:K,permissions:j,action:q,apiURL:z,initialState:B,isLoading:J}=e,{fields:Q,preview:W,versions:X,label:Y,admin:{description:ee,hideAPIURL:ae}={}}=G,le=null===(a=null==j?void 0:j.update)||void 0===a?void 0:a.permission;return t.createElement("div",{className:R},J&&t.createElement(S.Z,null),!J&&t.createElement(P.R.Provider,{value:"update"},t.createElement(u.Z,{className:"global-edit__form",method:"post",action:q,onSuccess:K,disabled:!le,initialState:B},t.createElement("div",{className:"global-edit__main"},t.createElement(g.Z,{title:Y,description:Y,keywords:`${Y}, Payload, CMS`}),t.createElement(v.Z,null),!((null===(l=G.versions)||void 0===l?void 0:l.drafts)&&(null===(n=null===(i=G.versions)||void 0===i?void 0:i.drafts)||void 0===n?void 0:n.autosave))&&t.createElement(Z.Z,null),t.createElement(U.T,{className:"global-edit__edit"},t.createElement("header",{className:"global-edit__header"},t.createElement("h1",null,"Edit"," ",Y),ee&&t.createElement("div",{className:"global-edit__sub-header"},t.createElement(N.Z,{description:ee}))),t.createElement(f.Z,{readOnly:!le,permissions:j.fields,filter:e=>!e.admin.position||e.admin.position&&"sidebar"!==e.admin.position,fieldTypes:_.Z,fieldSchema:Q}))),t.createElement("div",{className:"global-edit__sidebar-wrap"},t.createElement("div",{className:"global-edit__sidebar"},t.createElement("div",{className:"global-edit__sidebar-sticky-wrap"},t.createElement("div",{className:"global-edit__document-actions"+((null===(d=G.versions)||void 0===d?void 0:d.drafts)&&!(null===(r=null===(o=G.versions)||void 0===o?void 0:o.drafts)||void 0===r?void 0:r.autosave)||W?" global-edit__document-actions--has-2":"")},W&&(!(null===(c=G.versions)||void 0===c?void 0:c.drafts)||(null===(C=null===(A=G.versions)||void 0===A?void 0:A.drafts)||void 0===C?void 0:C.autosave))&&t.createElement(b.Z,{generatePreviewURL:W,data:H}),le&&t.createElement(t.Fragment,null,(null===(F=G.versions)||void 0===F?void 0:F.drafts)&&t.createElement(t.Fragment,null,!G.versions.drafts.autosave&&t.createElement($.Z,null),t.createElement(k.Z,null)),!(null===(x=G.versions)||void 0===x?void 0:x.drafts)&&t.createElement(p.Z,{buttonId:"action-save"},"Save"))),t.createElement("div",{className:"global-edit__sidebar-fields"},W&&(null===(D=G.versions)||void 0===D?void 0:D.drafts)&&!(null===(I=null===(T=G.versions)||void 0===T?void 0:T.drafts)||void 0===I?void 0:I.autosave)&&t.createElement(b.Z,{generatePreviewURL:W,data:H}),(null===(M=G.versions)||void 0===M?void 0:M.drafts)&&t.createElement(t.Fragment,null,t.createElement(y.Z,null),G.versions.drafts.autosave&&le&&t.createElement(L.Z,{publishedDocUpdatedAt:(null==V?void 0:V.updatedAt)||(null==H?void 0:H.createdAt),global:G})),t.createElement(f.Z,{readOnly:!le,permissions:j.fields,filter:e=>"sidebar"===e.admin.position,fieldTypes:_.Z,fieldSchema:Q})),t.createElement("ul",{className:"global-edit__meta"},X&&t.createElement("li",null,t.createElement("div",{className:"global-edit__label"},"Versions"),t.createElement(h.Z,{global:G})),H&&!ae&&t.createElement("li",{className:"global-edit__api-url"},t.createElement("span",{className:"global-edit__label"},"API URL"," ",t.createElement(E.Z,{value:z})),t.createElement("a",{href:z,target:"_blank",rel:"noopener noreferrer"},z)),H.updatedAt&&t.createElement("li",null,t.createElement("div",{className:"global-edit__label"},"Last Modified"),t.createElement("div",null,(0,m.default)(new Date(H.updatedAt),O))))))))))};var C=l(19826),F=l(91455);const x=e=>{var a,l;const{state:m}=(0,i.TH)(),v=(0,r.bU)(),{setStepNav:u}=(0,d.FP)(),{permissions:b,user:p}=(0,n.a)(),[f,E]=(0,t.useState)(),{getVersions:g,preferencesKey:_}=(0,w.x5)(),{getPreference:Z}=(0,F.G)(),{serverURL:h,routes:{api:N}}=(0,s.Z)(),{global:S}=e,{slug:$,label:k,fields:y,admin:{components:{views:{Edit:L}={}}={}}={}}=S,P=(0,t.useCallback)((async e=>{g();const a=await(0,C.Z)({fieldSchema:y,data:e.result,operation:"update",user:p,locale:v});E(a)}),[g,y,p,v]),[{data:U}]=(0,o.Z)(`${h}${N}/globals/${$}`,{initialParams:{"fallback-locale":"null",depth:0,draft:"true"}}),R=(null==m?void 0:m.data)||U;(0,t.useEffect)((()=>{u([{label:k}])}),[u,k]),(0,t.useEffect)((()=>{(async()=>{const e=await(0,C.Z)({fieldSchema:y,data:R,user:p,operation:"update",locale:v});await Z(_),E(e)})()}),[R,y,p,v,Z,_]);const x=null===(a=null==b?void 0:b.globals)||void 0===a?void 0:a[$];return t.createElement(c.Z,{DefaultComponent:A,CustomComponent:L,componentProps:{isLoading:!f,data:R,permissions:x,initialState:f,global:S,onSave:P,apiURL:`${h}${N}/globals/${$}${(null===(l=S.versions)||void 0===l?void 0:l.drafts)?"?draft=true":""}`,action:`${h}${N}/globals/${$}?locale=${v}&depth=0&fallback-locale=null`}})}}}]);