(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{82:function(t,e,n){t.exports={title:"View_title__-B0eL",container:"View_container__3EtGa",form:"View_form__KqsOd",input:"View_input__vZdIH",label:"View_label__264Xf",labelSpan:"View_labelSpan__1V7yn",formButton:"View_formButton__3gsl2",contactsTitle:"View_contactsTitle__1F5nI"}},83:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(35);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,c=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(a=(s=o.next()).done)&&(n.push(s.value),!e||n.length!==e);a=!0);}catch(i){c=!0,r=i}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return n}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},84:function(t,e,n){t.exports={form:"ContactForm_form__3_AEl",input:"ContactForm_input__1Veq1",button:"ContactForm_button__2O9ui",label:"ContactForm_label__3p_fc"}},85:function(t,e,n){t.exports={label:"Filter_label__3hZKG",input:"Filter_input__3_lRP"}},86:function(t,e,n){t.exports={contactList:"ContactList_contactList__3HpPv",listItem:"ContactList_listItem__2hVcD",button:"ContactList_button__3ABsz",number:"ContactList_number__3ycXT",name:"ContactList_name__1sUAV",noContactsText:"ContactList_noContactsText___uJ1s"}},90:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return L}));var a=n(83),c=n(0),r=n(7),s=n(28),o=function(t){return t.contacts.contacts},i=function(t){return t.contacts.filter},u=Object(s.a)([o,i],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),l=n(15),b=n.n(l),j=n(23),m=n(17),f=n.n(m),p=n(9),d=n(84),_=n.n(d),h=n(1);var O=function(){var t=Object(r.c)(),e=Object(r.d)(o),n=Object(c.useState)(""),s=Object(a.a)(n,2),i=s[0],u=s[1],l=Object(c.useState)(""),m=Object(a.a)(l,2),d=m[0],O=m[1],x=function(t){switch(t.currentTarget.name){case"name":u(t.currentTarget.value);break;case"number":O(t.currentTarget.value);break;default:return}};return Object(h.jsxs)("form",{className:_.a.form,onSubmit:function(n){n.preventDefault(),e.map((function(t){return t.name})).includes(i)?alert("You already have ".concat(i," in contacs.")):(t(function(t,e){return function(){var n=Object(j.a)(b.a.mark((function n(a){var c,r,s;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={name:t,number:e},a(Object(p.b)()),n.prev=2,n.next=5,f.a.post("/contacts",c);case 5:r=n.sent,s=r.data,a(Object(p.c)(s)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),a(Object(p.a)(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()}(i,d)),u(""),O(""))},children:[Object(h.jsxs)("label",{className:_.a.label,children:[Object(h.jsx)("span",{className:_.a.name,children:"Name"}),Object(h.jsx)("input",{className:_.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:x,value:i})]}),Object(h.jsxs)("label",{className:_.a.label,children:[Object(h.jsx)("span",{children:"Number"}),Object(h.jsx)("input",{className:_.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:d,onChange:x})]}),Object(h.jsx)("button",{className:_.a.button,type:"submit",children:"Add contact"})]})},x=n(85),v=n.n(x),y=function(){var t=Object(r.c)(),e=Object(r.d)(i);return Object(h.jsxs)("label",{className:v.a.label,children:[Object(h.jsx)("span",{children:"Let's find somebody"}),Object(h.jsx)("input",{className:v.a.input,type:"text",onChange:function(e){return t(Object(p.d)(e.currentTarget.value))},value:e})]})},w=n(86),C=n.n(w),N=function(){var t=Object(r.c)();Object(c.useEffect)((function(){t(function(){var t=Object(j.a)(b.a.mark((function t(e){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(p.i)()),t.prev=1,t.next=4,f.a.get("/contacts");case 4:n=t.sent,a=n.data,e(Object(p.j)(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(p.h)(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}),[t]);var e=Object(r.d)(u);return e.length>0?Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:C.a.contactList,children:e.map((function(e){return Object(h.jsxs)("li",{className:C.a.listItem,children:[Object(h.jsxs)("span",{className:C.a.name,children:[e.name,":"]}),Object(h.jsx)("span",{className:C.a.number,children:e.number}),Object(h.jsx)("button",{className:C.a.button,onClick:function(){return t((n=e.id,function(){var t=Object(j.a)(b.a.mark((function t(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(p.f)()),t.prev=1,t.next=4,f.a.delete("/contacts/".concat(n));case 4:e(Object(p.g)(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e(Object(p.e)(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()));var n},children:"\u0445"})]},e.id)}))})}):Object(h.jsx)("p",{className:C.a.noContactsText,children:"No contacts yet."})},g=n(82),k=n.n(g);function L(){return Object(h.jsxs)("div",{className:k.a.container,children:[Object(h.jsx)("h1",{className:k.a.contactsTitle,children:"Phonebook"}),Object(h.jsx)(O,{}),Object(h.jsx)("h2",{className:k.a.contactsTitle,children:"Contacts"}),Object(h.jsx)(y,{}),Object(h.jsx)(N,{})]})}}}]);
//# sourceMappingURL=3.f0344634.chunk.js.map