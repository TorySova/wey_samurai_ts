(this.webpackJsonpwey_samurai_ts=this.webpackJsonpwey_samurai_ts||[]).push([[0],{12:function(e,a,t){e.exports={images:"Info_images__3Dy2C",item:"Info_item__31V0k",photo:"Info_photo__1fLE7",info:"Info_info__1uBGL"}},13:function(e,a,t){e.exports={block:"MyPosts_block__2ENEQ",elem:"MyPosts_elem__1F7Hu",textarea:"MyPosts_textarea__ap6Mc",button:"MyPosts_button__1XCo3"}},22:function(e,a,t){e.exports={item:"Post_item__29ueH"}},24:function(e,a,t){},28:function(e,a,t){e.exports={header:"Header_header__C1831"}},29:function(e,a,t){e.exports=t(40)},34:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);t(24);var n=t(0),s=t.n(n),r=t(16),i=t.n(r),l=(t(34),t(6)),c=t(1),o=t(5),m=t.n(o),u=function(){return s.a.createElement("nav",{className:m.a.nav},s.a.createElement("div",{className:m.a.item},s.a.createElement(l.b,{to:"/profile",activeClassName:m.a.activeLink}," Profile ")),s.a.createElement("div",{className:m.a.item},s.a.createElement(l.b,{to:"/dialogs",activeClassName:m.a.activeLink}," Messages ")),s.a.createElement("div",{className:m.a.item},s.a.createElement(l.b,{to:"/news",activeClassName:m.a.activeLink}," News ")),s.a.createElement("div",{className:m.a.item},s.a.createElement(l.b,{to:"/music",activeClassName:m.a.activeLink}," Music ")),s.a.createElement("div",{className:m.a.item},s.a.createElement(l.b,{to:"/settings",activeClassName:m.a.activeLink}," Settings ")))},d=t(12),g=t.n(d),E=function(){return s.a.createElement("div",{className:g.a.item},s.a.createElement("div",{className:g.a.images},s.a.createElement("img",{src:"https://image.freepik.com/free-photo/_1232-2082.jpg"})),s.a.createElement("div",{className:g.a.photo},s.a.createElement("img",{src:"https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg"})),s.a.createElement("div",{className:g.a.info},s.a.createElement("div",null,s.a.createElement("h2",null," Chandler Bing")),s.a.createElement("div",{className:g.a.status})))},p=t(10),v=t(3),f={posts:[{post:"Hello! It`s my new App!",id:1,likeCounter:5},{post:"Today I'm happy",id:2,likeCounter:18},{post:"Welcome",id:3,likeCounter:10}],newPostText:""},_=t(13),b=t.n(_),h=t(22),N=t.n(h),w=function(e){return s.a.createElement("div",{className:N.a.posts},s.a.createElement("div",{className:N.a.item},s.a.createElement("img",{src:"https://image.freepik.com/free-photo/_23-2147890098.jpg"}),e.message),s.a.createElement("div",null,s.a.createElement("span",null,"like ",e.likeCounter)))},k=function(e){var a=e.posts.map((function(e){return s.a.createElement(w,{key:e.id,message:e.post,likeCounter:e.likeCounter})})),t=s.a.createRef();return s.a.createElement("div",{className:b.a.elem},s.a.createElement("div",{className:b.a.block},"What's new?",s.a.createElement("div",null,s.a.createElement("textarea",{placeholder:"Enter your message",className:b.a.textarea,maxLength:124,value:e.newPostText,onChange:function(){var a=t.current?t.current.value:"";e.updateNewPostText(a)},ref:t}),s.a.createElement("button",{className:b.a.button,onClick:function(){""!==e.newPostText.trim()&&e.addPost()}},"Add post")),s.a.createElement("div",{className:b.a.posts},a)))},y=t(9),P=Object(y.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:"ADD-POST"})},updateNewPostText:function(a){e({type:"CHANGE-NEW-TEXT",newText:a})}}}))(k),x=function(){return s.a.createElement("div",null,s.a.createElement(E,null),s.a.createElement(P,null))},T=t(28),j=t.n(T),O=Object(c.e)((function(e){var a=e.location.pathname.substr(1),t=a[0].toUpperCase()+a.slice(1);return s.a.createElement("div",{className:j.a.header},t)})),C=function(){return s.a.createElement("div",null,"News")},M=function(){return s.a.createElement("div",null,"Music")},S=function(){return s.a.createElement("div",null,"Settings")},I={dialogs:[{name:"Ed",id:1},{name:"Alina",id:2},{name:"Oksana",id:3},{name:"Sasha",id:4},{name:"Tanya",id:5}],messages:[{message:"Hello",id:1},{message:":)",id:2},{message:"Wow",id:3},{message:"Ahahaha",id:4},{message:"I`m fine(:",id:5},{message:"(:",id:6}],newMessageText:""},D=t(7),L=t.n(D),W=function(e){return s.a.createElement("div",{className:L.a.dialog},s.a.createElement(l.b,{to:"/dialogs/"+e.id},e.name))},A=function(e){return s.a.createElement("div",{className:L.a.message},e.message)},F=function(e){var a=e.dialogsPage.dialogs.map((function(e){return s.a.createElement(W,{key:e.id,name:e.name,id:e.id})})),t=e.dialogsPage.messages.map((function(e){return s.a.createElement(A,{key:e.id,message:e.message})})),n=s.a.createRef();return s.a.createElement("div",{className:L.a.dialogs},s.a.createElement("div",{className:L.a.dialogsItem},a),s.a.createElement("div",{className:L.a.messagesItem},t,s.a.createElement("div",null,s.a.createElement("textarea",{placeholder:"Enter your message",className:L.a.textarea,ref:n,value:e.dialogsPage.newMessageText,onChange:function(){var a=n.current?n.current.value:"";e.newMessageHeandler(a)}}),s.a.createElement("button",{className:L.a.button,onClick:function(){e.sendMessage()}},"Send"))))},U=Object(y.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{newMessageHeandler:function(a){e({type:"CHANGE-MESSAGE-TEXT",newMessage:a})},sendMessage:function(){e({type:"SEND-MESSAGE"})}}}))(F),H={users:[{id:1,avatar:"https://c7.hotpng.com/preview/118/687/577/emoji-happiness-emoticon-smiley-emoji-thumbnail.jpg",firstName:"Dima",status:"Hello Word!",location:{city:"Kiev",country:"Ukraine"},isFollow:!0},{id:2,avatar:"https://c7.hotpng.com/preview/786/839/746/iphone-emoji-sticker-blushing-embarrassment-blushing-emoji.jpg",firstName:"Nikc",status:"I am happy",location:{city:"Moscow",country:"Russia"},isFollow:!1},{id:3,avatar:"https://w7.pngwing.com/pngs/838/951/png-transparent-emoji-emoticon-iphone-sticker-smiley-travel-round-face-computer-wallpaper-smiley.png",firstName:"Pit",status:"Shit happens",location:{city:"SPb",country:"Russia"},isFollow:!0}]},G=t(8),B=t.n(G),R=function(e){return s.a.createElement("div",null,e.usersPage.users.map((function(a){return s.a.createElement("div",{key:a.id,className:B.a.item},s.a.createElement("div",{className:B.a.block1},s.a.createElement("div",null,s.a.createElement("img",{src:a.avatar,className:B.a.avatar})),s.a.createElement("div",null,a.isFollow?s.a.createElement("button",{className:B.a.button,onClick:function(){e.unFollow(a.id)}},"Unfollow"):s.a.createElement("button",{className:B.a.button,onClick:function(){e.follow(a.id)}},"Follow"))),s.a.createElement("div",{className:B.a.messageBlock},s.a.createElement("div",{className:B.a.block2},s.a.createElement("div",null,a.firstName),s.a.createElement("div",null,a.status)),s.a.createElement("div",{className:B.a.block3},s.a.createElement("div",null,a.location.country),s.a.createElement("div",null,a.location.city))))})))},X=Object(y.b)((function(e){return{usersPage:e.usersPage}}),(function(e){return{follow:function(a){e(function(e){return{type:"FOLLOW",usersId:e}}(a))},unFollow:function(a){e(function(e){return{type:"UNFOLLOW",usersId:e}}(a))}}}))(R),J=function(){return s.a.createElement(l.a,null,s.a.createElement("div",{className:"appWrapper"},s.a.createElement(u,null),s.a.createElement("div",{className:"content"},s.a.createElement(O,null),s.a.createElement(c.a,{path:"/profile",render:function(){return s.a.createElement(x,null)}}),s.a.createElement(c.a,{path:"/dialogs",render:function(){return s.a.createElement(U,null)}}),s.a.createElement(c.a,{path:"/news",render:function(){return s.a.createElement(C,null)}}),s.a.createElement(c.a,{path:"/music",render:function(){return s.a.createElement(M,null)}}),s.a.createElement(c.a,{path:"/settings",render:function(){return s.a.createElement(S,null)}}),s.a.createElement(c.a,{path:"/users",render:function(){return s.a.createElement(X,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=t(15),Z=Object(V.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD-POST":var t={id:(new Date).getTime(),post:e.newPostText,likeCounter:0},n=Object(v.a)({},e);return n.posts=[t].concat(Object(p.a)(e.posts)),n.newPostText="",n;case"CHANGE-NEW-TEXT":var s=Object(v.a)({},e);return s.newPostText=a.newText,s}return e},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE-MESSAGE-TEXT":var t=Object(v.a)({},e);return t.newMessageText=a.newMessage,t;case"SEND-MESSAGE":var n={id:(new Date).getTime(),message:e.newMessageText},s=Object(v.a)({},e);return s.messages=[].concat(Object(p.a)(e.messages),[n]),s.newMessageText="",s}return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FOLLOW":return Object(v.a)({},e,{users:e.users.map((function(e){return e.id===a.usersId?Object(v.a)({},e,{isFollow:!0}):e}))});case"UNFOLLOW":return Object(v.a)({},e,{users:e.users.map((function(e){return e.id===a.usersId?Object(v.a)({},e,{isFollow:!1}):e}))});case"SET-USERS":return Object(v.a)({},e,{users:[].concat(Object(p.a)(e.users),Object(p.a)(a.users))});default:return e}}}),q=Object(V.c)(Z);i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(y.a,{store:q},s.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,a,t){e.exports={nav:"Navbar_nav__2KcS9",item:"Navbar_item__1i32s",activeLink:"Navbar_activeLink__2gvZV"}},7:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2iYJk",dialogsItem:"Dialogs_dialogsItem__2zFQR",dialog:"Dialogs_dialog__3Hn2Z",messagesItem:"Dialogs_messagesItem__1D8qP",message:"Dialogs_message__2mh0i",textarea:"Dialogs_textarea__1WVPZ",button:"Dialogs_button__3Nd0a"}},8:function(e,a,t){e.exports={avatar:"Users_avatar__1kWW1",item:"Users_item__1-M_-",button:"Users_button__31Tg9",block1:"Users_block1__2pn2j",block2:"Users_block2__8um_-",block3:"Users_block3__2gnz3",messageBlock:"Users_messageBlock__UpA_i"}}},[[29,1,2]]]);
//# sourceMappingURL=main.96da14ad.chunk.js.map