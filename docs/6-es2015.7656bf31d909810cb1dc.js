(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{X3zk:function(r,o,e){"use strict";e.r(o),e.d(o,"LoginModule",(function(){return g}));var n=e("ofXK"),t=e("tyNb"),i=e("3Pt+"),s=e("fXoL"),l=e("7Vn+");function a(r,o){1&r&&(s.Mb(0,"span",16),s.dc(1," Email is required "),s.Lb())}function b(r,o){1&r&&(s.Mb(0,"span",16),s.dc(1," Enter a valid email address "),s.Lb())}function d(r,o){1&r&&(s.Mb(0,"span",16),s.dc(1," Password is required "),s.Lb())}function c(r,o){1&r&&(s.Mb(0,"span",16),s.dc(1," Enter a valid password "),s.Lb())}function u(r,o){if(1&r&&(s.Mb(0,"div",17),s.Mb(1,"strong"),s.dc(2),s.Lb(),s.dc(3),s.Mb(4,"button",18),s.Mb(5,"span",19),s.dc(6,"\xd7"),s.Lb(),s.Lb(),s.Lb()),2&r){const r=s.Wb();s.zb(2),s.fc("Hello ",r.loginForm.value.username,"!"),s.zb(1),s.fc(" ",r.loginErrorMsg," ")}}const m=[{path:"",component:(()=>{class r{constructor(r,o,e){this.fb=r,this.authService=o,this.router=e,this.submitted=!1,this.errState=!1,this.loginForm=this.fb.group({username:["",[i.k.required,i.k.email]],password:["",[i.k.required,i.k.minLength(8)]]})}ngOnInit(){}get loginFormControl(){return this.loginForm.controls}loginUser(){this.authService.login(this.loginForm.value).subscribe(r=>{this.router.navigate(["/profile/view"])},r=>{this.errState=!0,this.loginErrorMsg=r.msg}),this.submitted=!0}}return r.\u0275fac=function(o){return new(o||r)(s.Jb(i.b),s.Jb(l.a),s.Jb(t.a))},r.\u0275cmp=s.Db({type:r,selectors:[["app-login"]],decls:27,vars:7,consts:[[1,"container-fluid"],[1,"row","authForm","basicColor"],[1,"col-md-12","col-sm-12","col-xs-12","col-lg-4"],[1,"card","mb-2"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group","pb-3"],["for","exampleInputEmail1"],["type","email","id","username","aria-describedby","emailHelp","placeholder","Enter email","formControlName","username",1,"form-control"],["class","text-danger pt-2",4,"ngIf"],["for","exampleInputPassword1"],["type","password","id","password","placeholder","Password","formControlName","password",1,"form-control"],["type","submit",1,"btn","btn-primary","authSubmit",3,"disabled"],[1,"text-center","pt-2"],["routerLink","/register"],["class","alert alert-warning alert-dismissible fade show","role","alert",4,"ngIf"],[1,"text-danger","pt-2"],["role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["type","button","data-dismiss","alert","aria-label","Close",1,"close"],["aria-hidden","true"]],template:function(r,o){1&r&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Kb(2,"div",2),s.Mb(3,"div",2),s.Mb(4,"div",3),s.Mb(5,"div",4),s.Mb(6,"form",5),s.Ub("ngSubmit",(function(){return o.loginUser()})),s.Mb(7,"div",6),s.Mb(8,"label",7),s.dc(9,"Email address"),s.Lb(),s.Kb(10,"input",8),s.cc(11,a,2,0,"span",9),s.cc(12,b,2,0,"span",9),s.Lb(),s.Mb(13,"div",6),s.Mb(14,"label",10),s.dc(15,"Password"),s.Lb(),s.Kb(16,"input",11),s.cc(17,d,2,0,"span",9),s.cc(18,c,2,0,"span",9),s.Lb(),s.Mb(19,"button",12),s.dc(20," Login "),s.Lb(),s.Lb(),s.Mb(21,"p",13),s.dc(22," Not Registered Yet ?? "),s.Mb(23,"a",14),s.dc(24,"Sign Up"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.cc(25,u,7,2,"div",15),s.Lb(),s.Kb(26,"div",2),s.Lb(),s.Lb()),2&r&&(s.zb(6),s.Xb("formGroup",o.loginForm),s.zb(5),s.Xb("ngIf",(o.loginFormControl.username.touched||o.submitted)&&(null==o.loginFormControl.username.errors?null:o.loginFormControl.username.errors.required)),s.zb(1),s.Xb("ngIf",o.loginFormControl.username.touched&&(null==o.loginFormControl.username.errors?null:o.loginFormControl.username.errors.email)),s.zb(5),s.Xb("ngIf",(o.loginFormControl.password.touched||o.submitted)&&(null==o.loginFormControl.password.errors?null:o.loginFormControl.password.errors.required)),s.zb(1),s.Xb("ngIf",o.loginFormControl.password.touched&&o.loginForm.controls.password.hasError("minlength")),s.zb(1),s.Xb("disabled",!o.loginForm.valid),s.zb(6),s.Xb("ngIf",o.errState))},directives:[i.m,i.g,i.d,i.a,i.f,i.c,n.i,t.b],styles:[""]}),r})()}];let p=(()=>{class r{}return r.\u0275mod=s.Hb({type:r}),r.\u0275inj=s.Gb({factory:function(o){return new(o||r)},imports:[[t.c.forChild(m)],t.c]}),r})(),g=(()=>{class r{}return r.\u0275mod=s.Hb({type:r}),r.\u0275inj=s.Gb({factory:function(o){return new(o||r)},imports:[[n.b,p,i.i]]}),r})()}}]);