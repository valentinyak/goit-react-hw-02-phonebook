(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={deletBtn:"ContactItem_deletBtn__3WOB5"}},16:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(9),o=n.n(i),s=(n(16),n(2)),u=n(3),l=n(5),d=n(4),h=n(6),b=n.n(h),j=(n(25),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{children:[Object(a.jsxs)("label",{children:["Insert contact name",Object(a.jsx)("input",{type:"text",name:"nameInput"})]}),Object(a.jsxs)("label",{children:["Insert contact number",Object(a.jsx)("input",{type:"text",name:"phoneInput"})]}),Object(a.jsx)("button",{type:"submit",onClick:this.props.addContact,children:"Add contact"})]})}}]),n}(c.Component)),p=n(10),f=n.n(p),O=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contact,n=t.onClick;return Object(a.jsxs)("span",{children:[e.name,": ",e.number," ",Object(a.jsx)("button",{className:f.a.deletBtn,id:e.id,onClick:n,children:"delete"})]})}}]),n}(c.Component),m=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.onClick;return Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsx)("li",{children:Object(a.jsx)(O,{contact:t,onClick:n})},t.id)}))})}}]),n}(c.Component),v=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("label",{children:["Find contact",Object(a.jsx)("input",{type:"text",name:"filterInput",onChange:this.props.onChange})]})}}]),n}(c.Component),C=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:b.a.generate(),name:"Rosie Simpson",number:"459-12-56"},{id:b.a.generate(),name:"Hermione Kline",number:"443-89-12"},{id:b.a.generate(),name:"Eden Clements",number:"645-17-79"},{id:b.a.generate(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t}return Object(u.a)(n,[{key:"addContact",value:function(t){var e=this,n=t.target.form,a=n.nameInput,c=n.phoneInput;t.preventDefault(),this.checkAddedContact(t)?alert("".concat(a.value," is already in contacts")):this.setState((function(n){var r=n.contacts.concat({id:b.a.generate(),name:a.value,number:c.value});return e.clearInputs(t),{contacts:r,filter:""}}))}},{key:"clearInputs",value:function(t){var e=t.target.form,n=e.nameInput,a=e.phoneInput;n.value="",a.value=""}},{key:"changeFilter",value:function(t){this.setState({filter:t.currentTarget.value})}},{key:"getFilteredContacts",value:function(){var t=this.state,e=t.contacts,n=t.filter;return e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))}},{key:"checkAddedContact",value:function(t){return this.state.contacts.find((function(e){return e.name===t.target.form.nameInput.value}))}},{key:"deleteContact",value:function(t){this.setState({contacts:this.state.contacts.filter((function(e){return e.id!==t.target.id}))})}},{key:"render",value:function(){var t=this.getFilteredContacts();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(j,{addContact:this.addContact.bind(this)}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(v,{onChange:this.changeFilter.bind(this)}),Object(a.jsx)(m,{contacts:t,onClick:this.deleteContact.bind(this)})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.766de7c6.chunk.js.map