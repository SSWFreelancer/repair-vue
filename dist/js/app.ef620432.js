(function(){"use strict";var t={527:function(t,s,e){var i=e(471),a=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"wrapper",attrs:{id:"app"}},[s("AppHeader"),s("div",{staticClass:"page"},[s("router-view")],1),s("Popup")],1)},n=[],l=e(635),o=e(233),r=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("header",{class:{header:!0,scroll:t.isScrolled}},[s("div",{staticClass:"header__container"},[t._m(0),s("nav",{class:{menu:!0,active:t.burger}},[s("ul",{staticClass:"menu__list"},[s("li",{staticClass:"menu__item"},[s("a",{staticClass:"menu__link",attrs:{href:"#cost"},on:{click:t.toggleBurger}},[t._v(" Цены ")])]),s("li",{staticClass:"menu__item"},[s("a",{staticClass:"menu__link",attrs:{href:"#projects"},on:{click:t.toggleBurger}},[t._v(" Проекты ")])]),s("li",{staticClass:"menu__item"},[s("a",{staticClass:"menu__link",attrs:{href:"#aboutcompany"},on:{click:t.toggleBurger}},[t._v(" О нас ")])]),s("li",{staticClass:"menu__item"},[s("a",{staticClass:"menu__link",attrs:{href:"#contacts"},on:{click:t.toggleBurger}},[t._v(" Контакты ")])])]),s("Button",{staticClass:"menu__btn",on:{click:t.openPopup}},[t._v("Бесплатный замер")])],1),s("Button",{staticClass:"header__btn",on:{click:t.openPopup}},[t._v("Бесплатный замер")]),s("div",{staticClass:"header__actions"},[t._m(1),s("button",{staticClass:"header__call",on:{click:t.openPopup}},[t._v("Заказать звонок")]),s("div",{staticClass:"header__time"},[t._v("Ежедневно 08:00-22:00")])]),s("div",{class:{header__burger:!0,active:t.burger},on:{click:t.toggleBurger}},[s("span")])],1)])},c=[function(){var t=this,s=t._self._c;t._self._setupProxy;return s("a",{staticClass:"header__logo",attrs:{href:"#"}},[s("img",{attrs:{src:e(688),alt:""}})])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("a",{staticClass:"header__tel",attrs:{href:"tel:73471234567"}},[s("span",[t._v("+7 (347) 123-45-67")]),s("img",{attrs:{src:e(159),alt:""}})])}],u=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("button",{staticClass:"button",on:{click:t.handleClick}},[t._t("default")],2)},_=[],p=function(t){function s(){return null!==t&&t.apply(this,arguments)||this}return(0,l.C6)(s,t),Object.defineProperty(s.prototype,"handleClick",{enumerable:!1,configurable:!0,writable:!0,value:function(t){this.$emit("click",t)}}),s=(0,l.Cg)([o.uA],s),s}(o.lD),A=p,v=A,f=e(656),m=(0,f.A)(v,u,_,!1,null,null,null),d=m.exports,C=e(353),g=function(t){function s(){var s=null!==t&&t.apply(this,arguments)||this;return Object.defineProperty(s,"isScrolled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(s,"burger",{enumerable:!0,configurable:!0,writable:!0,value:!1}),s}return(0,l.C6)(s,t),Object.defineProperty(s.prototype,"mounted",{enumerable:!1,configurable:!0,writable:!0,value:function(){window.addEventListener("scroll",this.handleScroll)}}),Object.defineProperty(s.prototype,"beforeDestroy",{enumerable:!1,configurable:!0,writable:!0,value:function(){window.removeEventListener("scroll",this.handleScroll)}}),Object.defineProperty(s.prototype,"handleScroll",{enumerable:!1,configurable:!0,writable:!0,value:function(){var t=window.scrollY;this.isScrolled=t>0}}),Object.defineProperty(s.prototype,"toggleBurger",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.burger=!this.burger,this.burger?document.body.classList.add("lock"):document.body.classList.remove("lock")}}),s=(0,l.Cg)([(0,o.uA)({components:{Button:d},methods:(0,l.Cl)({},(0,C.i0)(["openPopup"]))})],s),s}(o.lD),b=g,h=b,y=(0,f.A)(h,r,c,!1,null,"534e4a00",null),P=y.exports,x=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{class:{popup:!0,open:t.isPopupOpen},attrs:{id:"popup"}},[s("span",{staticClass:"popup__close",on:{click:t.closePopup}}),s("div",{staticClass:"popup__content"},[s("div",{staticClass:"popup__close"}),s("form",{staticClass:"form"},[s("div",{staticClass:"form__title"},[t._v(" Рассчитайте стоимость ремонта и получите смету ")]),s("div",{staticClass:"form__text"},[t._v(" Заполните Ваши контактные данные, чтобы мы могли Вам перезвонить, ответить на все Ваши вопросы и предоставить расчет ")]),s("div",{staticClass:"form__input"},[s("p",{staticClass:"form__overtitle"},[t._v("Как к вам обращаться:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.popupName,expression:"popupName"}],attrs:{type:"text"},domProps:{value:t.popupName},on:{input:function(s){s.target.composing||(t.popupName=s.target.value)}}})]),s("div",{staticClass:"form__input"},[s("p",{staticClass:"form__overtitle"},[t._v("Ваш телефон:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.popupPhone,expression:"popupPhone"}],attrs:{type:"tel",placeholder:"+7 (999) 999-99-99"},domProps:{value:t.popupPhone},on:{input:function(s){s.target.composing||(t.popupPhone=s.target.value)}}})]),s("button",{staticClass:"button"},[t._v("Получить расчет")])])])])},k=[],w=function(t){function s(){var s=null!==t&&t.apply(this,arguments)||this;return Object.defineProperty(s,"popupPhone",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(s,"popupName",{enumerable:!0,configurable:!0,writable:!0,value:null}),s}return(0,l.C6)(s,t),s=(0,l.Cg)([(0,o.uA)({computed:(0,l.Cl)({},(0,C.L8)({isPopupOpen:"isPopupOpen"})),methods:(0,l.Cl)({},(0,C.i0)(["closePopup"]))})],s),s}(o.lD),B=w,R=B,O=(0,f.A)(R,x,k,!1,null,"09cfff58",null),E=O.exports,D=function(t){function s(){return null!==t&&t.apply(this,arguments)||this}return(0,l.C6)(s,t),s=(0,l.Cg)([(0,o.uA)({components:{AppHeader:P,Popup:E}})],s),s}(o.lD),T=D,S=T,I=(0,f.A)(S,a,n,!1,null,null,null),j=I.exports,N=e(173),U=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"home"},[s("Main"),s("RepairCost")],1)},J=[],q=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("main",{staticClass:"main"},[t._m(0),s("div",{staticClass:"main__container"},[t._m(1),s("Form")],1)])},H=[function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"main__bg"},[s("img",{attrs:{src:e(544),alt:""}})])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"main__content"},[s("h1",{staticClass:"main__title"},[t._v(" Ремонт и отделка квартир в Уфе"),s("span",[t._v(" от 2290 ₽/м2")])]),s("div",{staticClass:"main__subtitle"},[t._v(" Работаем по договору: "),s("br"),t._v(" c фиксированной стоимостью и сроками "),s("p",[s("span",[t._v("Берем в работу проекты от 80 000₽")]),t._v(" "),s("br"),t._v(" (не включая материал) ")])]),s("ul",{staticClass:"main__list"},[s("li",{staticClass:"main__item"},[s("div",{staticClass:"main__icon"},[s("img",{attrs:{src:e(332),alt:""}})]),t._v(" Бесплатный выезд замерщика в день обращения ")]),s("li",{staticClass:"main__item"},[s("div",{staticClass:"main__icon"},[s("img",{attrs:{src:e(823),alt:""}})]),t._v(" Даем гарантию на свои работы до 3 лет ")]),s("li",{staticClass:"main__item"},[s("div",{staticClass:"main__icon"},[s("img",{attrs:{src:e(806),alt:""}})]),t._v(" Регулярно присылаем фото и видеоотчет c объекта ")]),s("li",{staticClass:"main__item"},[s("div",{staticClass:"main__icon"},[s("img",{attrs:{src:e(849),alt:""}})]),t._v(" Бесплатно убираем квартиру после ремонта ")])])])}],Y=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("form",{staticClass:"form",attrs:{action:"#"}},[s("div",{staticClass:"form__title"},[t._v("Рассчитайте стоимость ремонта")]),s("div",{staticClass:"form__block"},[s("div",{staticClass:"form__overtitle"},[t._v("Тип помещения:")]),s("div",{staticClass:"form__checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedRoom,expression:"selectedRoom"}],attrs:{type:"radio",name:"radio1",value:"Вторичка",id:"radio1-1"},domProps:{checked:t._q(t.selectedRoom,"Вторичка")},on:{change:function(s){t.selectedRoom="Вторичка"}}}),t._m(0)]),s("div",{staticClass:"form__checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedRoom,expression:"selectedRoom"}],attrs:{type:"radio",name:"radio1",value:"Новостройка",id:"radio1-2"},domProps:{checked:t._q(t.selectedRoom,"Новостройка")},on:{change:function(s){t.selectedRoom="Новостройка"}}}),t._m(1)])]),s("div",{staticClass:"form__block"},[s("div",{staticClass:"form__overtitle"},[t._v("Тип ремонта:")]),s("div",{staticClass:"form__checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedRepairType,expression:"selectedRepairType"}],attrs:{type:"radio",name:"radio2",value:"Капитальный",id:"radio2-1"},domProps:{checked:t._q(t.selectedRepairType,"Капитальный")},on:{change:function(s){t.selectedRepairType="Капитальный"}}}),t._m(2)]),s("div",{staticClass:"form__checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedRepairType,expression:"selectedRepairType"}],attrs:{type:"radio",name:"radio2",value:"Дизайнерский",id:"radio2-2"},domProps:{checked:t._q(t.selectedRepairType,"Дизайнерский")},on:{change:function(s){t.selectedRepairType="Дизайнерский"}}}),t._m(3)])]),s("div",{staticClass:"form__block"},[s("div",{staticClass:"form__overtitle"},[t._v(" Площадь квартиры: "),s("span",[t._v(t._s(t.area))]),t._v(" м "),s("sup",[t._v("2")])]),s("div",{ref:"rangeSlider",staticClass:"form__range"}),t._m(4)]),s("div",{staticClass:"form__input"},[s("p",{staticClass:"form__overtitle"},[t._v("Как к вам обращаться:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})]),s("div",{staticClass:"form__input"},[s("p",{staticClass:"form__overtitle"},[t._v("Ваш телефон:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],attrs:{type:"tel",placeholder:"+7 (999) 999-99-99"},domProps:{value:t.tel},on:{input:function(s){s.target.composing||(t.tel=s.target.value)}}})]),s("Button",[t._v("Получить расчет")])],1)},Q=[function(){var t=this,s=t._self._c;t._self._setupProxy;return s("label",{attrs:{for:"radio1-1"}},[s("span",[s("img",{attrs:{src:e(841),alt:""}})]),s("p",[t._v("Вторичка")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("label",{attrs:{for:"radio1-2"}},[s("span",[s("img",{attrs:{src:e(841),alt:""}})]),s("p",[t._v("Новостройка")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("label",{attrs:{for:"radio2-1"}},[s("span",[s("img",{attrs:{src:e(841),alt:""}})]),s("p",[t._v("Капитальный")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("label",{attrs:{for:"radio2-2"}},[s("span",[s("img",{attrs:{src:e(841),alt:""}})]),s("p",[t._v("Дизайнерский")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"form__startend"},[s("p",[t._v("1 м"),s("sup",[t._v("2")])]),s("p",[t._v("250 м"),s("sup",[t._v("2")])])])}],W=e(476),M=function(t){function s(){var s=null!==t&&t.apply(this,arguments)||this;return Object.defineProperty(s,"name",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(s,"tel",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(s,"selectedRoom",{enumerable:!0,configurable:!0,writable:!0,value:"Вторичка"}),Object.defineProperty(s,"selectedRepairType",{enumerable:!0,configurable:!0,writable:!0,value:"Капитальный"}),Object.defineProperty(s,"area",{enumerable:!0,configurable:!0,writable:!0,value:20}),s}return(0,l.C6)(s,t),Object.defineProperty(s.prototype,"mounted",{enumerable:!1,configurable:!0,writable:!0,value:function(){var t,s=this,e=this.$refs.rangeSlider;W.Ay.create(e,{start:[this.area],connect:[!0,!1],padding:[0,0],step:1,range:{min:1,max:250}}),null===(t=e.noUiSlider)||void 0===t||t.on("update",(function(t){s.area=Math.round(parseFloat(t[0]))}))}}),s=(0,l.Cg)([(0,o.uA)({components:{Button:d}})],s),s}(o.lD),X=M,L=X,G=(0,f.A)(L,Y,Q,!1,null,null,null),F=G.exports,K=function(t){function s(){return null!==t&&t.apply(this,arguments)||this}return(0,l.C6)(s,t),s=(0,l.Cg)([(0,o.uA)({components:{Form:F}})],s),s}(o.lD),z=K,V=z,Z=(0,f.A)(V,q,H,!1,null,"8c7c9842",null),$=Z.exports,tt=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("section",{staticClass:"cost block graybg",attrs:{id:"cost"}},[s("div",{staticClass:"cost__container"},[s("Title",[t._v("Стоимость ремонта")]),s("div",{staticClass:"cost__subtitle"},[t._v(" Берем в работу проекты от 80 000 ₽ (не включая материал) ")]),s("div",{staticClass:"cost__wrapper"},[s("nav",{staticClass:"cost__nav"},t._l(t.tabs,(function(e,i){return s("a",{key:i,class:{active:t.activeTab===i},on:{click:function(s){t.activeTab=i}}},[t._v(t._s(e.name)+" ")])})),0),0===t.activeTab?s("div",{staticClass:"cost__block"},[t._m(0),t._m(1),s("div",{staticClass:"cost__column"},[t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),s("Button",{on:{click:t.openPopup}},[t._v("Заказать")])],1)]):1===t.activeTab?s("div",{staticClass:"cost__block"},[t._m(8),t._m(9),s("div",{staticClass:"cost__column"},[t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),s("Button",{on:{click:t.openPopup}},[t._v("Заказать")])],1)]):t._e()])],1)])},st=[function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"cost__image"},[s("img",{attrs:{src:e(857),alt:""}})])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"cost__column"},[s("div",{staticClass:"cost__header"},[s("p",[t._v("Капитальный")]),s("p",[t._v("от 7 дней")])]),s("div",{staticClass:"cost__name"},[t._v("Стены")]),s("ul",{staticClass:"cost__list"},[s("li",{staticClass:"cost__link"},[t._v("Грунтовка поверхности")]),s("li",{staticClass:"cost__link"},[t._v("Поклейка обоев")]),s("li",{staticClass:"cost__link"},[t._v("Покраска стен")]),s("li",{staticClass:"cost__link"},[t._v("Устранение мелких дефектов")])]),s("div",{staticClass:"cost__name"},[t._v("Пол")]),s("ul",{staticClass:"cost__list"},[s("li",{staticClass:"cost__link"},[t._v("Демонтаж старого покрытия")]),s("li",{staticClass:"cost__link"},[t._v("Укладка подложки")]),s("li",{staticClass:"cost__link"},[t._v("Монтаж напольного покрытия")])]),s("div",{staticClass:"cost__name"},[t._v("Ванная")]),s("ul",{staticClass:"cost__list"},[s("li",{staticClass:"cost__link"},[t._v("Замена сантехники")])]),s("div",{staticClass:"cost__name"},[t._v("Потолок")]),s("ul",{staticClass:"tabs__list"},[s("li",{staticClass:"cost__link"},[t._v("Шпаклевка")]),s("li",{staticClass:"cost__link"},[t._v("Покраска потолка")]),s("li",{staticClass:"cost__link"},[t._v("Монтаж натяжного потолка")])])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"cost__header hidden"},[s("p",[t._v("Капитальный")]),s("p",[t._v("от 7 дней")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"cost__name"},[t._v(" Чистовые материалы "),s("b",[t._v("от 1 590 ₽/м2")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("ul",{staticClass:"cost__list"},[s("li",{staticClass:"cost__link"},[t._v("Декоративные элементы")]),s("li",{staticClass:"cost__link"},[t._v("Лакокрасочные материалы")]),s("li",{staticClass:"cost__link"},[t._v("Напольные покрытия")]),s("li",{staticClass:"cost__link"},[t._v("Реечный и натяжной потолок")]),s("li",{staticClass:"cost__link"},[t._v("Стеновые материалы")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"cost__name"},[t._v("Черновые материалы "),s("b",[t._v("от 700 ₽/м2")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("ul",{staticClass:"cost__list"},[s("li",{staticClass:"cost__link"},[t._v("Гипсокартон и профили")]),s("li",{staticClass:"cost__link"},[t._v("Провода и трубы")]),s("li",{staticClass:"cost__link"},[t._v("Строительные смеси")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"cost__cost"},[s("p",[t._v("Стоимость работ")]),s("span",[t._v("от 2 290 ₽/м2")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"cost__image"},[s("img",{attrs:{src:e(439),alt:""}})])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"cost__column"},[s("div",{staticClass:"cost__header"},[s("p",[t._v("Дизайнерский")]),s("p",[t._v("от 6 дней")])]),s("div",{staticClass:"cost__name"},[t._v("Стены")]),s("ul",{staticClass:"cost__list"},[s("li",{staticClass:"cost__link"},[t._v("Поклейка обоев")]),s("li",{staticClass:"cost__link"},[t._v("Покраска стен")])]),s("div",{staticClass:"cost__name"},[t._v("Пол")]),s("ul",{staticClass:"cost__list"},[s("li",{staticClass:"cost__link"},[t._v("Демонтаж старого покрытия")]),s("li",{staticClass:"cost__link"},[t._v("Укладка подложки")]),s("li",{staticClass:"cost__link"},[t._v("Монтаж напольного покрытия")])]),s("div",{staticClass:"cost__name"},[t._v("Ванная")]),s("ul",{staticClass:"cost__list"},[s("li",{staticClass:"cost__link"},[t._v("Замена сантехники")])]),s("div",{staticClass:"cost__name"},[t._v("Потолок")]),s("ul",{staticClass:"tabs__list"},[s("li",{staticClass:"cost__link"},[t._v("Шпаклевка")]),s("li",{staticClass:"cost__link"},[t._v("Покраска потолка")]),s("li",{staticClass:"cost__link"},[t._v("Монтаж натяжного потолка")])])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"cost__header hidden"},[s("p",[t._v("Дизайнерский")]),s("p",[t._v("от 6 дней")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"cost__name"},[t._v(" Чистовые материалы "),s("b",[t._v("от 1 590 ₽/м2")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("ul",{staticClass:"cost__list"},[s("li",{staticClass:"cost__link"},[t._v("Декоративные элементы")]),s("li",{staticClass:"cost__link"},[t._v("Лакокрасочные материалы")]),s("li",{staticClass:"cost__link"},[t._v("Напольные покрытия")]),s("li",{staticClass:"cost__link"},[t._v("Реечный и натяжной потолок")]),s("li",{staticClass:"cost__link"},[t._v("Стеновые материалы")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"cost__name"},[t._v("Черновые материалы "),s("b",[t._v("от 700 ₽/м2")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("ul",{staticClass:"cost__list"},[s("li",{staticClass:"cost__link"},[t._v("Гипсокартон и профили")]),s("li",{staticClass:"cost__link"},[t._v("Провода и трубы")]),s("li",{staticClass:"cost__link"},[t._v("Строительные смеси")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"cost__cost"},[s("p",[t._v("Стоимость работ")]),s("span",[t._v("от 2 290 ₽/м2")])])}],et=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"title"},[t._t("default",(function(){return[t._v("Заголовок")]}))],2)},it=[],at=function(t){function s(){return null!==t&&t.apply(this,arguments)||this}return(0,l.C6)(s,t),s}(o.lD),nt=at,lt=nt,ot=(0,f.A)(lt,et,it,!1,null,"beaec800",null),rt=ot.exports,ct=function(t){function s(){var s=null!==t&&t.apply(this,arguments)||this;return Object.defineProperty(s,"activeTab",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(s,"tabs",{enumerable:!0,configurable:!0,writable:!0,value:[{name:"Капитальный"},{name:"Дизайнерский"}]}),s}return(0,l.C6)(s,t),s=(0,l.Cg)([(0,o.uA)({components:{Button:d,Title:rt},methods:(0,l.Cl)({},(0,C.i0)(["openPopup"]))})],s),s}(o.lD),ut=ct,_t=ut,pt=(0,f.A)(_t,tt,st,!1,null,"51daf770",null),At=pt.exports,vt=function(t){function s(){return null!==t&&t.apply(this,arguments)||this}return(0,l.C6)(s,t),s=(0,l.Cg)([(0,o.uA)({components:{Main:$,RepairCost:At}})],s),s}(o.lD),ft=vt,mt=ft,dt=(0,f.A)(mt,U,J,!1,null,null,null),Ct=dt.exports;i["default"].use(N.Ay);var gt=[{path:"/",name:"home",component:Ct}],bt=new N.Ay({routes:gt}),ht=bt;i["default"].use(C.Ay);var yt=new C.Ay.Store({state:{isPopupOpen:!1},mutations:{OPEN_POPUP:function(t){t.isPopupOpen=!0},CLOSE_POPUP:function(t){t.isPopupOpen=!1}},actions:{openPopup:function(t){var s=t.commit;s("OPEN_POPUP")},closePopup:function(t){var s=t.commit;s("CLOSE_POPUP")}},getters:{isPopupOpen:function(t){return t.isPopupOpen}}}),Pt=e(413),xt=e(625);e(313);i["default"].use(Pt.vGs),i["default"].use(xt.hP),i["default"].config.productionTip=!1,new i["default"]({router:ht,store:yt,render:function(t){return t(j)}}).$mount("#app")},159:function(t,s,e){t.exports=e.p+"img/call.71ac141d.svg"},857:function(t,s,e){t.exports=e.p+"img/1.8967b9d8.jpeg"},439:function(t,s,e){t.exports=e.p+"img/2.63da16dd.jpg"},332:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAWCAYAAADwza0nAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEsSURBVHgB1VPLUcMwEH0rPJzdAe4AOiAl6MjHM9ABpAJCB1BBzAww3LArSKiAUAEuwXdCxFscT2SPEzu55c1Isnf19Fa7K0EDDvENZwEk9KzfgpcntMHhOnS4HDucRS2HWfqu1hDjURvJ8w9Ivm2qRWtPrJPfq29TLj+W5i90QjKHixOPqIlYFOgFE/rEHAiibpLjnnnuEQ9SKtpuIo4FbyuiIClUdVOCmJg7qg2rf2k4R5yPOB4Fr7OlbcCFTbHIaEuqvUH93OCBGeYwExJyGoryXi4DDqf+TlmpaZiiBR4Knqf1SLQERnMwoy/1HOdWi+tgQ2xA2V3LPJRdE0+6SF5kY+1r3nHO8FwiSHs2wO/9/5Wo9oktoaqm/u56Qwx2xB4RRWvI9QPb4fQPin1sfnSWDNIAAAAASUVORK5CYII="},823:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFeSURBVHgBnVTLTcNAEH1jzIVLkg5CBZAKCB2YGx9LOBWEDuwOgAoIEghuJBUEKgAqwHRgJA5IWFneYDsyxotxnrTendF83szOWlCBwX4fcLcB6Za0CT+J4Oq+ai8GAQ3TY5693Dim+onrrRSgAyw2AWcrlyfA+oNgErt0nlNDxfueYJqgAQYeE24wWfrC5D0q/Dlagj6hwdGJnh20hMFhwK0nuD5T2W3nHPRJfcxydwvdvxnkzb7g+tGrFgw+SXlxLriNs4A+mbiXjj1bWfZDXmssuJmWtAPgo+tYqN5l9X7LHCoMOURRXbJfATgcrC8dab0GB3rfp5lcj9oSsjrVaS3Uvai7DtYm5k4DNEAZdLESpFMEmOk4F01rgtrl4/+6LE2fMGf7sZhvu7M/5qKdP1zyqBhE3HbYmpE+1XLWbArxzDGO/ny1VTZ1WcsQeyBlY/ijkVljVnsQr/GGvgAqM4t3TTAuDAAAAABJRU5ErkJggg=="},806:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGySURBVHgBlVTdUcJAEP4uxmdjBUIF0gGhA3xzIDOECrADQgVqBcQZdXwDKhAqADtICcz486DB+F3uhECOEHbmLpfbve/2dr9dAYMk8B0g7nDpcjg72ggQDwKPU9NZkQfzehroHvhYCIyX2/rrCnAS8OgFYHcFwgj7vCLYa4L2DUqIBFb2XnOPgTdK0KrhSNGg7v+/pTf7nGcCzwscLfYVp76Kewrmp64bbnbVRaW8lLaB9vDb5VaYNxMVTjUd104RoM54UwNaND6d7DGd0LjBb1UB+5UC3Kn01FI3hEsUexCQl13gJ6C3QzOwYPyTmoWSIvASCTz5wGpAYAMjUsI7EtApC0rPCGLfylAAX5HJxoahWgxAvHTFjMc1+XTprcGKupO59HCaJWYeTJZiPOIqTZAZTIqokzFvEnAMnfK8/ErCCwVkbgb6BRV+nPVlJkqoWm2Wii8zH269clPofukEbc56PY47g6LlUzE/QF4DWHue3VvzkI0hZMxI3nh4qNRU/bdpjyrw2cjqDA1WNlDb57KuyGrNNGm5n5xhk8CBKVGi2JM00Jcc59o8At7Hu108K39PaLPilfQFhgAAAABJRU5ErkJggg=="},849:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgB5ZPRDYIwEIb/Q313A9lER/AZNeIGOoFxBCcQovHdDXADR5A5DKlXG9Jaxbbw6JfQcE3v40jvAA8EFgf5wBPyEQLVVUW9MeG4QhdUhUmq4yQNqdgp7CxuErYWu4TBYl+ht1gJZ2sEInNscVQLeR1yh90QjMwRsSmOdB/SBa2hXDpqMVda7QnnDB1RDpHL9z4Hjb8sMJ/w8djavRNOxXex2o/wm63n3ht91wGe9cyMufqlK8dVaSv+XGpf1JQbONahnDKb1/SkRjzipWyQPgpgYBt2+IA2vBgfo1Llap4w7WTfz+a46AAAAABJRU5ErkJggg=="},544:function(t,s,e){t.exports=e.p+"img/bg.cfa82bd4.png"},841:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACBSURBVHgBndDBDYAgDAXQXyZwBEfRozc30E3EDdxAN/ConhxFN6lFxRMBoUmTQvsCKSEieEEOwm5qlYByc6YEdIJRUhKqcCpptLyhiUGmp6QxysUkuPuLHsjon0loi0PIBL2DWir74iBZ+9AHHRg+5FqG5hUsedzfjQkBBc/IQnMXbxBKFYa/RuIAAAAASUVORK5CYII="},688:function(t){t.exports="data:image/png;base64,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"}},s={};function e(i){var a=s[i];if(void 0!==a)return a.exports;var n=s[i]={exports:{}};return t[i](n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(s,i,a,n){if(!i){var l=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],n=t[u][2];for(var o=!0,r=0;r<i.length;r++)(!1&n||l>=n)&&Object.keys(e.O).every((function(t){return e.O[t](i[r])}))?i.splice(r--,1):(o=!1,n<l&&(l=n));if(o){t.splice(u--,1);var c=a();void 0!==c&&(s=c)}}return s}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,a,n]}}(),function(){e.d=function(t,s){for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/repair-vue/"}(),function(){var t={524:0};e.O.j=function(s){return 0===t[s]};var s=function(s,i){var a,n,l=i[0],o=i[1],r=i[2],c=0;if(l.some((function(s){return 0!==t[s]}))){for(a in o)e.o(o,a)&&(e.m[a]=o[a]);if(r)var u=r(e)}for(s&&s(i);c<l.length;c++)n=l[c],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(u)},i=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=e.O(void 0,[504],(function(){return e(527)}));i=e.O(i)})();
//# sourceMappingURL=app.ef620432.js.map