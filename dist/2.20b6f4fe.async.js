(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0Fdr":function(e,t,a){"use strict";var r=a("asgD");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(a("WkHf")),u=r(a("cS4k"));a("UWBG");var n=r(a("9p/O")),c=a("dCQc"),d=a("34ay"),o=a("HZnN"),i=a("JZUw"),f={namespace:"register",state:{status:void 0},effects:{submit:u.default.mark(function e(t,a){var r,s,d,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,s=a.call,d=a.put,e.next=4,s(c.fakeRegister,r);case 4:if(o=e.sent,0!==o.code){e.next=11;break}return n.default.success(o.msg),e.next=9,d(i.routerRedux.push("/user/login"));case 9:e.next=12;break;case 11:n.default.error(o.msg);case 12:case"end":return e.stop()}},e,this)})},reducers:{registerHandle:function(e,t){var a=t.payload;return(0,d.setAuthority)("user"),(0,o.reloadAuthorized)(),(0,s.default)({},e,{status:a.status})}}};t.default=f}}]);