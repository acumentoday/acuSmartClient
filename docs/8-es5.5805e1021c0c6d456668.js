function _get(e,t,i){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=_superPropBase(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}})(e,t,i||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var i,r=_getPrototypeOf(e);if(t){var n=_getPrototypeOf(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return _possibleConstructorReturn(this,i)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{cRhG:function(e,t,i){"use strict";i.r(t),i.d(t,"ProfileModule",(function(){return ne}));var r,n,o=i("ofXK"),s=i("tyNb"),a=i("fXoL"),c=i("TUuY"),l=i("2Vo4"),u=i("tk/3"),b=((r=function(){function e(t){_classCallCheck(this,e),this.http=t,this.address=new l.a({area:"",building:"",city:"",flat:0,pinCode:0,state:""}),this.currentAddress=this.address.asObservable(),this.compName=new l.a(""),this.currentcompName=this.compName.asObservable()}return _createClass(e,[{key:"getProfileDetails",value:function(){return this.http.get(c.c+"/user/home")}},{key:"editProfileUserDetails",value:function(e){return console.log(e),this.http.put(c.c+"/user/profile",e)}},{key:"getUserProfile",value:function(){return this.http.get(c.c+"/user/profile")}},{key:"getBook",value:function(e){return this.http.get(c.c+"/book/"+e)}},{key:"shareAddress",value:function(e,t){this.address.next(e),this.compName.next(t)}}]),e}()).\u0275fac=function(e){return new(e||r)(a.Qb(u.b))},r.\u0275prov=a.Fb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),d=i("XNiG"),h=((n=function(){function e(t){_classCallCheck(this,e),this.http=t,this.searchSource=new l.a({code:0,results:[]}),this.currentSearch=this.searchSource.asObservable(),this.subject=new d.a}return _createClass(e,[{key:"searchBook",value:function(e){return this.http.get(c.c+"/book/search?q="+e)}},{key:"shareData",value:function(e){console.log(e),this.searchSource.next(e)}},{key:"sendClickCall",value:function(e){console.log(e),this.subject.next({clicked:e})}},{key:"getClickCall",value:function(){return this.subject.asObservable()}}]),e}()).\u0275fac=function(e){return new(e||n)(a.Qb(u.b))},n.\u0275prov=a.Fb({token:n,factory:n.\u0275fac,providedIn:"root"}),n),f=i("jhN1"),p=i("pLZG"),v=i("7o/Q"),m=function(e){_inherits(i,e);var t=_createSuper(i);function i(e,r){var n;return _classCallCheck(this,i),(n=t.call(this,e,r)).scheduler=e,n.work=r,n.pending=!1,n}return _createClass(i,[{key:"schedule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.closed)return this;this.state=e;var i=this.id,r=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(r,i,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this}},{key:"requestAsyncId",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return setInterval(e.flush.bind(e,this),i)}},{key:"recycleAsyncId",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!==i&&this.delay===i&&!1===this.pending)return t;clearInterval(t)}},{key:"execute",value:function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(e,t);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}},{key:"_execute",value:function(e,t){var i=!1,r=void 0;try{this.work(e)}catch(n){i=!0,r=!!n&&n||new Error(n)}if(i)return this.unsubscribe(),r}},{key:"_unsubscribe",value:function(){var e=this.id,t=this.scheduler,i=t.actions,r=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&i.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}]),i}(function(e){_inherits(i,e);var t=_createSuper(i);function i(e,r){return _classCallCheck(this,i),t.call(this)}return _createClass(i,[{key:"schedule",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this}}]),i}(i("quSY").a)),y=function(){var e=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.now;_classCallCheck(this,e),this.SchedulerAction=t,this.now=i}return _createClass(e,[{key:"schedule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0;return new this.SchedulerAction(this,e).schedule(i,t)}}]),e}();return e.now=function(){return Date.now()},e}(),g=new(function(e){_inherits(i,e);var t=_createSuper(i);function i(e){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.now;return _classCallCheck(this,i),(r=t.call(this,e,(function(){return i.delegate&&i.delegate!==_assertThisInitialized(r)?i.delegate.now():n()}))).actions=[],r.active=!1,r.scheduled=void 0,r}return _createClass(i,[{key:"schedule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;return i.delegate&&i.delegate!==this?i.delegate.schedule(e,t,r):_get(_getPrototypeOf(i.prototype),"schedule",this).call(this,e,t,r)}},{key:"flush",value:function(e){var t=this.actions;if(this.active)t.push(e);else{var i;this.active=!0;do{if(i=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,i){for(;e=t.shift();)e.unsubscribe();throw i}}}}]),i}(y))(m),k=function(){function e(t,i){_classCallCheck(this,e),this.dueTime=t,this.scheduler=i}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new L(e,this.dueTime,this.scheduler))}}]),e}(),L=function(e){_inherits(i,e);var t=_createSuper(i);function i(e,r,n){var o;return _classCallCheck(this,i),(o=t.call(this,e)).dueTime=r,o.scheduler=n,o.debouncedSubscription=null,o.lastValue=null,o.hasValue=!1,o}return _createClass(i,[{key:"_next",value:function(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(_,this.dueTime,this))}},{key:"_complete",value:function(){this.debouncedNext(),this.destination.complete()}},{key:"debouncedNext",value:function(){if(this.clearDebounce(),this.hasValue){var e=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}},{key:"clearDebounce",value:function(){var e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}]),i}(v.a);function _(e){e.debouncedNext()}var M,C,w=function(){function e(t,i){_classCallCheck(this,e),this.compare=t,this.keySelector=i}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new S(e,this.compare,this.keySelector))}}]),e}(),S=function(e){_inherits(i,e);var t=_createSuper(i);function i(e,r,n){var o;return _classCallCheck(this,i),(o=t.call(this,e)).keySelector=n,o.hasKey=!1,"function"==typeof r&&(o.compare=r),o}return _createClass(i,[{key:"compare",value:function(e,t){return e===t}},{key:"_next",value:function(e){var t;try{var i=this.keySelector;t=i?i(e):e}catch(n){return this.destination.error(n)}var r=!1;if(this.hasKey)try{r=(0,this.compare)(this.key,t)}catch(n){return this.destination.error(n)}else this.hasKey=!0;r||(this.key=t,this.destination.next(e))}}]),i}(v.a),O=i("3Pt+"),D=["searchKey"],P=Object(f.e)("CONFIG"),x=((C=function(){function e(t,i,r,n,s,a){if(_classCallCheck(this,e),this.fb=t,this.injector=i,this.state=r,this.headerService=n,this.router=s,this.platformId=a,Object(o.m)(this.platformId)){var c=this.injector.get("CONFIG")?this.injector.get("CONFIG"):{};this.state.set(P,c)}}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"voiceSearch",value:function(){var e=this;if("webkitSpeechRecognition"in window){var t=new webkitSpeechRecognition;t.continuous=!0,t.interimResults=!1,t.lang="en-US",t.start();var i=this.hiddenSearchHandler.nativeElement;t.onresult=function(r){i.value=r.results[0][0].transcript,t.stop(),e.search(i.value),document.getElementById("search").click()},t.onerror=function(e){t.stop()}}else alert("your browser doesnt support speech recoginition")}},{key:"search",value:function(e){var t,i=this;""!=(t=null==e?this.hiddenSearchHandler.nativeElement.value:e)?this.headerService.searchBook(t).pipe(Object(p.a)(Boolean),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g;return function(i){return i.lift(new k(e,t))}}(150),(function(e){return e.lift(new w(void 0,void 0))})).subscribe((function(e){i.response=e.results,console.log(i.response),i.headerService.shareData(e),i.headerService.sendClickCall(!0)})):this.headerService.sendClickCall(!1),this.router.navigate(["/profile/details"])}}]),e}()).\u0275fac=function(e){return new(e||C)(a.Jb(O.b),a.Jb(a.r),a.Jb(f.d),a.Jb(h),a.Jb(s.b),a.Jb(a.B))},C.\u0275cmp=a.Db({type:C,selectors:[["acuSmartHeader"]],viewQuery:function(e,t){var i;1&e&&a.hc(D,!0),2&e&&a.Yb(i=a.Vb())&&(t.hiddenSearchHandler=i.first)},inputs:{customLabel:"customLabel"},decls:15,vars:0,consts:[[1,"basicColor","row","p-4"],[1,"col-sm-4"],["id","voicesearch",1,"form-group","has-search"],["type","text","name","q","placeholder","Search","autocomplete","off",1,"form-control","search_icon"],["searchKey",""],[1,"p-2","voice_icon"],["src","assets/icons/search.png","width","20","id","search",3,"click"],[1,"voice_icon"],["src","assets/icons/microphone.png","width","20","id","mic",3,"click"],[1,"text-right"],[1,"btn","btn-success"],["routerLink","/profile/user",2,"color","#fff"]],template:function(e,t){1&e&&(a.Mb(0,"header",0),a.Kb(1,"div",1),a.Mb(2,"div",1),a.Mb(3,"div",2),a.Kb(4,"input",3,4),a.Mb(6,"span",5),a.Mb(7,"img",6),a.Ub("click",(function(){return t.search()})),a.Lb(),a.Lb(),a.Mb(8,"span",7),a.Mb(9,"img",8),a.Ub("click",(function(){return t.voiceSearch()})),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(10,"div",1),a.Mb(11,"div",9),a.Mb(12,"button",10),a.Mb(13,"a",11),a.dc(14,"Go to Profile"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb())},directives:[s.c],styles:[".main[_ngcontent-%COMP%]{width:50%;margin:50px auto;background-color:red!important}.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding-left:1.375rem;max-width:80%!important}.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%]{position:absolute;z-index:2;display:block;width:2.375rem;height:2.375rem;line-height:2.375rem;text-align:center;pointer-events:none;color:#aaa}.search_icon[_ngcontent-%COMP%]{display:inline}.voice_icon[_ngcontent-%COMP%]{height:.8rem}"]}),C),F=((M=function(){function e(t,i){_classCallCheck(this,e),this.profileService=t,this.headerService=i,this.profileStatus="Edit Profile"}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||M)(a.Jb(b),a.Jb(h))},M.\u0275cmp=a.Db({type:M,selectors:[["app-profile"]],decls:3,vars:1,consts:[[1,"header"],[3,"customLabel"]],template:function(e,t){1&e&&(a.Mb(0,"div",0),a.Kb(1,"acuSmartHeader",1),a.Kb(2,"router-outlet"),a.Lb()),2&e&&(a.zb(1),a.Xb("customLabel",t.profileStatus))},directives:[x,s.e],styles:[""]}),M),G=i("7Vn+");function R(e,t){if(1&e&&(a.Mb(0,"option",20),a.dc(1),a.Lb()),2&e){var i=t.$implicit;a.Xb("ngValue",i.id),a.zb(1),a.fc(" ",i.name," ")}}function N(e,t){if(1&e&&(a.Mb(0,"option",20),a.dc(1),a.Lb()),2&e){var i=t.$implicit;a.Xb("ngValue",i.id),a.zb(1),a.fc(" ",i.name," ")}}var I,K,z=((I=function(){function e(t,i,r,n){_classCallCheck(this,e),this.fb=t,this.router=i,this.authService=r,this.profileService=n,this.profileStatus="Edit Profile",this.submitted=!1,this.allGrades1=[{name:"Grade 1",id:1},{name:"Grade 2",id:2},{name:"Grade 3",id:3},{name:"Grade 4",id:4},{name:"Grade 5",id:5},{name:"Grade 6",id:6},{name:"Grade 6",id:6},{name:"Grade 7",id:7},{name:"Grade 8",id:8},{name:"Grade 9",id:9},{name:"Grade 10",id:10},{name:"CBSE",id:11},{name:"state Board",id:12}],this.allGrades2=[{name:"Grade 1",id:1},{name:"Grade 2",id:2},{name:"Grade 3",id:3},{name:"Grade 4",id:4},{name:"Grade 5",id:5},{name:"Grade 6",id:6},{name:"Grade 6",id:6},{name:"Grade 7",id:7},{name:"Grade 8",id:8},{name:"Grade 9",id:9},{name:"Grade 10",id:10},{name:"CBSE",id:11},{name:"state Board",id:12}],this.profileForm=this.fb.group({firstname:["",O.k.required],lastname:["",O.k.required],phonenumber:[""],grade_one:["1",O.k.required],grade_two:["2",O.k.required]})}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"applyDetails",value:function(){this.profileService.editProfileUserDetails({first_name:this.profileForm.value.firstname,last_name:this.profileForm.value.lastname,phone:this.profileForm.value.phonenumber,grades:[this.profileForm.value.grade_one,this.profileForm.value.grade_two]}).subscribe((function(e){console.log(e)})),this.router.navigate(["/profile/details"])}},{key:"logout",value:function(){this.authService.logoutUser(),this.router.navigate(["/login"])}},{key:"profileFormControl",get:function(){return this.profileForm.controls}}]),e}()).\u0275fac=function(e){return new(e||I)(a.Jb(O.b),a.Jb(s.b),a.Jb(G.a),a.Jb(b))},I.\u0275cmp=a.Db({type:I,selectors:[["app-profile-view"]],decls:39,vars:4,consts:[[1,"container-fluid"],[1,"row","profileForm"],[1,"col-md-12","col-sm-12","col-xs-12","col-lg-4"],[1,"card","boxShadow"],[1,"card-body"],[1,"basic_details"],[3,"formGroup","ngSubmit"],[1,"form-group","pb-3"],["for","exampleInputEmail1"],["type","text","id","firstname","aria-describedby","emailHelp","placeholder","First Name","formControlName","firstname",1,"form-control"],["for","exampleInputPassword1"],["type","text","id","lastname","placeholder","Last Name","formControlName","lastname",1,"form-control"],["type","text","id","phonenumber","placeholder","Phone Number","formControlName","phonenumber",1,"form-control"],[1,"form-header","pb-2"],[1,"mb-2"],["formControlName","grade_one",1,"form-control"],[3,"ngValue",4,"ngFor","ngForOf"],["formControlName","grade_two",1,"form-control"],["type","submit",1,"btn","btn-primary","authSubmit",3,"disabled"],[1,"btn","btn-danger",3,"click"],[3,"ngValue"]],template:function(e,t){1&e&&(a.Mb(0,"div",0),a.Mb(1,"div",1),a.Kb(2,"div",2),a.Mb(3,"div",2),a.Mb(4,"div",3),a.Mb(5,"div",4),a.Mb(6,"div",5),a.Mb(7,"b"),a.dc(8," Basic Details "),a.Lb(),a.Lb(),a.Mb(9,"form",6),a.Ub("ngSubmit",(function(){return t.applyDetails()})),a.Mb(10,"div",7),a.Mb(11,"label",8),a.dc(12,"First Name"),a.Lb(),a.Kb(13,"input",9),a.Lb(),a.Mb(14,"div",7),a.Mb(15,"label",10),a.dc(16,"Last Name"),a.Lb(),a.Kb(17,"input",11),a.Lb(),a.Mb(18,"div",7),a.Mb(19,"label",10),a.dc(20,"Phone Number"),a.Lb(),a.Kb(21,"input",12),a.Lb(),a.Mb(22,"div",13),a.Mb(23,"div",5),a.Mb(24,"b"),a.dc(25," Grades "),a.Lb(),a.Lb(),a.Mb(26,"small",14),a.dc(27," Select two grades to be accessed in the app"),a.Lb(),a.Lb(),a.Mb(28,"div",7),a.Mb(29,"select",15),a.cc(30,R,2,2,"option",16),a.Lb(),a.Lb(),a.Mb(31,"div",7),a.Mb(32,"select",17),a.cc(33,N,2,2,"option",16),a.Lb(),a.Lb(),a.Mb(34,"button",18),a.dc(35," Apply Details "),a.Lb(),a.Lb(),a.Lb(),a.Mb(36,"button",19),a.Ub("click",(function(){return t.logout()})),a.dc(37,"LOGOUT"),a.Lb(),a.Lb(),a.Lb(),a.Kb(38,"div",2),a.Lb(),a.Lb()),2&e&&(a.zb(9),a.Xb("formGroup",t.profileForm),a.zb(21),a.Xb("ngForOf",t.allGrades1),a.zb(3),a.Xb("ngForOf",t.allGrades2),a.zb(1),a.Xb("disabled",!t.profileForm.valid))},directives:[O.m,O.g,O.d,O.a,O.f,O.c,O.j,o.h,O.h,O.l],styles:[""]}),I),B=i("lJxs"),J=((K=function(){function e(t,i){_classCallCheck(this,e),this.http=t,this._sanitizer=i}return _createClass(e,[{key:"getImage",value:function(e){var t=this;return this.http.get(e,{responseType:"blob"}).pipe(Object(B.a)((function(e){var i=window.URL;return t._sanitizer.bypassSecurityTrustUrl(i.createObjectURL(e))})))}}]),e}()).\u0275fac=function(e){return new(e||K)(a.Qb(u.b),a.Qb(f.c))},K.\u0275prov=a.Fb({token:K,factory:K.\u0275fac,providedIn:"root"}),K);function A(e,t){if(1&e){var i=a.Nb();a.Mb(0,"div",6),a.Ub("click",(function(){a.Zb(i);var e=t.$implicit;return a.Wb(3).showBookDetails(e)})),a.Mb(1,"div",7),a.Mb(2,"div",8),a.Kb(3,"img",9),a.Lb(),a.Lb(),a.Lb()}if(2&e){var r=t.$implicit;a.zb(3),a.Xb("src",r.image,a.ac)}}function j(e,t){if(1&e&&(a.Mb(0,"div"),a.Mb(1,"h2"),a.dc(2),a.Lb(),a.Mb(3,"div",4),a.cc(4,A,4,1,"div",5),a.Lb(),a.Lb()),2&e){var i=t.$implicit;a.zb(2),a.fc("",i.headline," "),a.zb(2),a.Xb("ngForOf",i.books)}}function U(e,t){if(1&e&&(a.Mb(0,"div"),a.cc(1,j,5,2,"div",3),a.Lb()),2&e){var i=a.Wb();a.zb(1),a.Xb("ngForOf",i.response)}}var X,E,T=((E=function(){function e(t,i,r,n){_classCallCheck(this,e),this.profileService=t,this.headerService=i,this.imageService=r,this.router=n,this.books=[],this.bookDetailsShow=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.profileDetails()}},{key:"profileDetails",value:function(){var e=this;this.profileService.getProfileDetails().subscribe((function(t){e.response=t.results,e.headerService.getClickCall().subscribe((function(i){console.log(i),i.clicked?(console.log("called"),e.headerService.currentSearch.subscribe((function(t){e.searchResults=t.results,e.response=e.searchResults}))):e.response=t.results}))}))}},{key:"showBookDetails",value:function(e){this.bookDetailsShow=!this.bookDetailsShow,this.bookDetails=e,this.router.navigate(["/profile/purchaseDetails",this.bookDetails.id])}}]),e}()).\u0275fac=function(e){return new(e||E)(a.Jb(b),a.Jb(h),a.Jb(J),a.Jb(s.b))},E.\u0275cmp=a.Db({type:E,selectors:[["app-profile-details"]],decls:3,vars:1,consts:[[1,"container"],[1,"p-4","boxShadow"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"row"],["class","col-sm-2 col-md-2 col-lg-2 col-xs-2 p-3","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"col-sm-2","col-md-2","col-lg-2","col-xs-2","p-3",2,"cursor","pointer",3,"click"],[1,"card"],[1,"card-body"],[1,"imgSrc",3,"src"]],template:function(e,t){1&e&&(a.Mb(0,"div",0),a.Mb(1,"div",1),a.cc(2,U,2,1,"div",2),a.Lb(),a.Lb()),2&e&&(a.zb(2),a.Xb("ngIf",!t.bookDetailsShow))},directives:[o.i,o.h],styles:[".imgSrc[_ngcontent-%COMP%]{width:100%;height:9rem}"]}),E),V=((X=function(){function e(t){_classCallCheck(this,e),this.profileService=t,this.profileAddress="No address added. Add an address to recieve physical copies of your purchased books (non-free  books only)"}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.profileService.getUserProfile().subscribe((function(t){e.profileResults=t.result,0!==Object.keys(e.profileAddress).length&&(e.profileAddress=e.profileResults.address.flat+" "+e.profileResults.address.building+" "+e.profileResults.address.area+" "+e.profileResults.address.city+" "+e.profileResults.address.state+" "+e.profileResults.address.pinCode),e.profileService.shareAddress(e.profileResults.address,"profileUser")}))}}]),e}()).\u0275fac=function(e){return new(e||X)(a.Jb(b))},X.\u0275cmp=a.Db({type:X,selectors:[["app-profile-user"]],decls:47,vars:6,consts:[[1,"container"],[1,"p-4","boxShadow"],[1,"row"],[1,"col-6","p-2"],[1,"textColor"],[1,"col-6","p-2","text-right"],[1,"btn","btn-success"],["routerLink","/profile/view",1,"whiteText"],[1,"form-row"],[1,"col","p-2"],["for","firstname"],["for","inputEmail4"],["routerLink","/profile/addressEdit",1,"whiteText"]],template:function(e,t){1&e&&(a.Mb(0,"div",0),a.Mb(1,"div",1),a.Mb(2,"div",2),a.Mb(3,"div",3),a.Mb(4,"p",4),a.Mb(5,"b"),a.dc(6,"Basic Details"),a.Lb(),a.Lb(),a.Lb(),a.Mb(7,"div",5),a.Mb(8,"button",6),a.Mb(9,"a",7),a.dc(10," Edit "),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(11,"div",8),a.Mb(12,"div",9),a.Mb(13,"label",10),a.Mb(14,"b"),a.dc(15,"First Name"),a.Lb(),a.Lb(),a.Kb(16,"br"),a.dc(17),a.Lb(),a.Mb(18,"div",9),a.Mb(19,"label",11),a.Mb(20,"b"),a.dc(21,"Last Name"),a.Lb(),a.Lb(),a.Kb(22,"br"),a.dc(23),a.Lb(),a.Mb(24,"div",9),a.Mb(25,"label",11),a.Mb(26,"b"),a.dc(27,"Phone Number"),a.Lb(),a.Lb(),a.Kb(28,"br"),a.dc(29),a.Lb(),a.Mb(30,"div",9),a.Mb(31,"label",11),a.Mb(32,"b"),a.dc(33,"Grades and Books"),a.Lb(),a.Lb(),a.Kb(34,"br"),a.dc(35),a.Lb(),a.Mb(36,"div",3),a.Mb(37,"label",11),a.Mb(38,"b"),a.dc(39,"Address"),a.Lb(),a.Lb(),a.Kb(40,"br"),a.Mb(41,"div"),a.dc(42),a.Lb(),a.Lb(),a.Mb(43,"div",3),a.Mb(44,"button",6),a.Mb(45,"a",12),a.dc(46," Edit "),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&e&&(a.zb(17),a.fc(" ",null==t.profileResults?null:t.profileResults.first_name," "),a.zb(6),a.fc(" ",null==t.profileResults?null:t.profileResults.last_name," "),a.zb(6),a.fc(" ",null==t.profileResults?null:t.profileResults.phone," "),a.zb(6),a.gc(" Grade ",null==t.profileResults?null:t.profileResults.grades[0],", Grade ",null==t.profileResults?null:t.profileResults.grades[1]," "),a.zb(7),a.ec(t.profileAddress))},directives:[s.c],styles:[""]}),X);function H(e,t){if(1&e){var i=a.Nb();a.Mb(0,"form",4),a.Ub("ngSubmit",(function(){return a.Zb(i),a.Wb().saveAddress()})),a.Mb(1,"div",5),a.Kb(2,"input",6),a.Lb(),a.Mb(3,"div",5),a.Kb(4,"input",7),a.Lb(),a.Mb(5,"div",5),a.Kb(6,"input",8),a.Lb(),a.Mb(7,"div",5),a.Kb(8,"input",9),a.Lb(),a.Mb(9,"div",5),a.Kb(10,"input",10),a.Lb(),a.Mb(11,"div",5),a.Kb(12,"input",11),a.Lb(),a.Mb(13,"button",12),a.dc(14," Apply "),a.Lb(),a.Lb()}if(2&e){var r=a.Wb();a.Xb("formGroup",r.addressForm),a.zb(13),a.Xb("disabled",!r.addressForm.valid)}}function q(e,t){if(1&e){var i=a.Nb();a.Mb(0,"form",4),a.Ub("ngSubmit",(function(){return a.Zb(i),a.Wb().coninuePayment()})),a.Mb(1,"div",5),a.Kb(2,"input",6),a.Lb(),a.Mb(3,"div",5),a.Kb(4,"input",7),a.Lb(),a.Mb(5,"div",5),a.Kb(6,"input",8),a.Lb(),a.Mb(7,"div",5),a.Kb(8,"input",9),a.Lb(),a.Mb(9,"div",5),a.Kb(10,"input",10),a.Lb(),a.Mb(11,"div",5),a.Kb(12,"input",11),a.Lb(),a.Mb(13,"button",12),a.dc(14," Continue "),a.Lb(),a.Lb()}if(2&e){var r=a.Wb();a.Xb("formGroup",r.addressForm),a.zb(13),a.Xb("disabled",!r.addressForm.valid)}}var Q,W,$,Z,Y,ee=((W=function(){function e(t,i,r){_classCallCheck(this,e),this.fb=t,this.profileService=i,this.router=r,this.applyButton=!1,this.continueButton=!1,this.submitted=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.profileService.currentAddress.subscribe((function(t){e.createForm(t)})),this.profileService.currentcompName.subscribe((function(t){"payment"==t?(e.applyButton=!1,e.continueButton=!0):(e.applyButton=!0,e.continueButton=!1)}))}},{key:"createForm",value:function(e){this.addressForm=this.fb.group({flat:[e.flat],building:[e.building],area:[e.area],city:[e.city],state:[e.state],pincode:[e.pinCode]})}},{key:"saveAddress",value:function(){var e=this;this.submitted=!0,this.profileService.editProfileUserDetails({address:{area:this.addressForm.value.area,building:this.addressForm.value.building,city:this.addressForm.value.city,flat:this.addressForm.value.flat,pinCode:this.addressForm.value.pincode,state:this.addressForm.value.state}}).subscribe((function(t){e.response=t.msg,console.log(e.response)})),this.addressForm.invalid||setTimeout((function(){e.router.navigate(["/profile/user"])}),1e3)}},{key:"coninuePayment",value:function(){var e=this;this.submitted=!0,this.addressForm.invalid||setTimeout((function(){e.router.navigate(["/payment"])}),1e3)}}]),e}()).\u0275fac=function(e){return new(e||W)(a.Jb(O.b),a.Jb(b),a.Jb(s.b))},W.\u0275cmp=a.Db({type:W,selectors:[["app-profile-edit"]],decls:6,vars:2,consts:[[1,"container"],[1,"p-4","boxShadow"],[1,"row"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group","p-2"],["type","text","formControlName","flat","placeholder","Flat/House Number",1,"form-control"],["type","text","formControlName","building","placeholder","Building/Society",1,"form-control"],["type","text","formControlName","area","placeholder","Area/Locality",1,"form-control"],["type","text","formControlName","city","placeholder","City",1,"form-control"],["type","text","formControlName","state","placeholder","State",1,"form-control"],["type","text","formControlName","pincode","placeholder","Pincode",1,"form-control"],["type","submit",1,"btn","btn-primary","authSubmit",3,"disabled"]],template:function(e,t){1&e&&(a.Mb(0,"div",0),a.Mb(1,"div",1),a.Mb(2,"div",2),a.dc(3," Please fill in your address below. For paid books we will also be shipping physical copies of the books to you via post. "),a.Lb(),a.cc(4,H,15,2,"form",3),a.cc(5,q,15,2,"form",3),a.Lb(),a.Lb()),2&e&&(a.zb(4),a.Xb("ngIf",t.applyButton),a.zb(1),a.Xb("ngIf",t.continueButton))},directives:[o.i,O.m,O.g,O.d,O.a,O.f,O.c],styles:[""]}),W),te=((Q=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"initializePayment",value:function(e){return this.http.get(c.b+"/init/"+e)}},{key:"pay",value:function(e){}}]),e}()).\u0275fac=function(e){return new(e||Q)(a.Qb(u.b))},Q.\u0275prov=a.Fb({token:Q,factory:Q.\u0275fac,providedIn:"root"}),Q),ie=[{path:"",component:F,children:[{path:"details",component:T},{path:"view",component:z},{path:"user",component:V},{path:"edit",component:ee},{path:"addressEdit",component:ee},{path:"purchaseDetails/:id",component:($=function(){function e(t,i,r,n){_classCallCheck(this,e),this.paymentService=t,this.router=i,this.actRoute=r,this.profileService=n}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.actRoute.params.subscribe((function(t){e.id=+t.id,e.profileService.getBook(e.id).subscribe((function(t){e.bookDetailsData=t.book,console.log(e.bookDetailsData)}))}))}},{key:"paymentInit",value:function(){var e=this;this.paymentService.initializePayment(this.bookDetailsData.id).subscribe((function(t){e.addressRes=t.user.address,e.profileService.shareAddress(e.addressRes,"payment"),e.router.navigate(["/profile/addressEdit"])}))}}]),e}(),$.\u0275fac=function(e){return new(e||$)(a.Jb(te),a.Jb(s.b),a.Jb(s.a),a.Jb(b))},$.\u0275cmp=a.Db({type:$,selectors:[["app-book-detail"]],decls:20,vars:4,consts:[[1,"bookInfo","container"],[1,"row"],[1,"col-sm-3","col-md-3","col-lg-3","col-xs-3","p-3"],[1,"card"],[1,"card-body"],[1,"imgSrc",3,"src"],[1,"row","marBottom"],[1,"row","mb-3"],[1,"basicColor","purchase_button","form-control","whiteText",3,"click"]],template:function(e,t){1&e&&(a.Mb(0,"div",0),a.Mb(1,"div",1),a.Mb(2,"div",2),a.Mb(3,"div",3),a.Mb(4,"div",4),a.Kb(5,"img",5),a.Lb(),a.Lb(),a.Lb(),a.Mb(6,"div",2),a.dc(7),a.Lb(),a.Kb(8,"div",2),a.Kb(9,"div",2),a.Mb(10,"div",6),a.Mb(11,"p"),a.Mb(12,"b"),a.dc(13,"About the book"),a.Lb(),a.Lb(),a.Mb(14,"p"),a.dc(15),a.Lb(),a.Lb(),a.Mb(16,"div",7),a.Mb(17,"button",8),a.Ub("click",(function(){return t.paymentInit()})),a.Mb(18,"b"),a.dc(19),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&e&&(a.zb(5),a.Xb("src",null==t.bookDetailsData?null:t.bookDetailsData.image,a.ac),a.zb(2),a.fc(" ",null==t.bookDetailsData?null:t.bookDetailsData.name," "),a.zb(8),a.fc(" ",null==t.bookDetailsData?null:t.bookDetailsData.description,""),a.zb(4),a.fc(" PURCHASE THIS BOOK (\u0930 ",null==t.bookDetailsData?null:t.bookDetailsData.price,")"))},styles:[".imgSrc[_ngcontent-%COMP%]{width:100%;height:9rem}.marBottom[_ngcontent-%COMP%]{margin-bottom:10rem}.purchase_button[_ngcontent-%COMP%]{padding:1.5rem;border-radius:5px}"]}),$)}]}],re=((Y=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:Y}),Y.\u0275inj=a.Gb({factory:function(e){return new(e||Y)},imports:[[s.d.forChild(ie)],s.d]}),Y),ne=((Z=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:Z}),Z.\u0275inj=a.Gb({factory:function(e){return new(e||Z)},imports:[[o.b,re,O.i]]}),Z)}}]);