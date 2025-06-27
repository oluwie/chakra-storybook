import{B as S}from"./Button-DoRAlRMY.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,_={title:"Example/Button",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:b()}},r={args:{primary:!0,label:"Button"}},a={args:{label:"Button"}},e={args:{size:"large",label:"Button"}},s={args:{size:"small",label:"Button"}};var o,t,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,p,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,i,B;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(B=(i=s.parameters)==null?void 0:i.docs)==null?void 0:B.source}}};const O=["Primary","Secondary","Large","Small"];export{e as Large,r as Primary,a as Secondary,s as Small,O as __namedExportsOrder,_ as default};
