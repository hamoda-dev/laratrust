(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{243:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("In order to upgrade from Laratrust 4.0 to 5.0 you have to follow these steps:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),s("ol",{attrs:{start:"8"}},[s("li",[s("p",[t._v("If you use teams and in your code you use the "),s("code",[t._v("syncRoles")]),t._v(" and "),s("code",[t._v("syncPermissions")]),t._v(" read the new "),s("docs-link",{attrs:{to:"/usage/concepts.html#new-sync-behavior"}},[t._v("sync method behavior")]),t._v(".")],1)]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)]),t._v(" "),s("p",[t._v("Now you can use the 5.0 version without any problem.")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"upgrade-from-4-0-to-5-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-from-4-0-to-5-0"}},[this._v("#")]),this._v(" Upgrade from 4.0 to 5.0")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("IMPORTANT")]),this._v(" "),e("p",[this._v("Laratrust 5.0 requires Laravel >= 5.2.32.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Change your "),e("code",[this._v("composer.json")]),this._v(" to require the 5.0 version of Laratrust:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[this._v('"santigarcor/laratrust"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"5.0.*"')]),this._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("Run "),s("code",[t._v("composer update")]),t._v(" to update the source code.")])]),t._v(" "),s("li",[s("p",[t._v("Run "),s("code",[t._v("php artisan config:clear")]),t._v(" and "),s("code",[t._v("php artisan cache:clear")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Update your "),s("code",[t._v("config/laratrust.php")]),t._v(":")]),t._v(" "),s("p",[t._v("4.1. Backup your "),s("code",[t._v("config/laratrust.php")]),t._v(" configuration values.")]),t._v(" "),s("p",[t._v("4.2. Delete the "),s("code",[t._v("config/laratrust.php")]),t._v(" file.")]),t._v(" "),s("p",[t._v("4.3. Run "),s("code",[t._v("php artisan vendor:publish --tag=laratrust")]),t._v(".")]),t._v(" "),s("p",[t._v("4.4. Update the "),s("code",[t._v("config/laratrust.php")]),t._v(" file with your old values.")]),t._v(" "),s("p",[t._v("4.5. Set the "),s("code",[t._v("middleware.register")]),t._v(" value to "),s("code",[t._v("false")]),t._v(".")]),t._v(" "),s("p",[t._v("4.6. Set the "),s("code",[t._v("teams_strict_check")]),t._v(" value to "),s("code",[t._v("true")]),t._v(" "),s("strong",[t._v("only")]),t._v(" if you are using teams.")])]),t._v(" "),s("li",[s("p",[t._v("Inside your "),s("code",[t._v("Role")]),t._v(", "),s("code",[t._v("Permission")]),t._v(" and "),s("code",[t._v("Team")]),t._v(" models update the "),s("code",[t._v("use")]),t._v(" statement from:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("use Laratrust\\LaratrustRole")]),t._v(" to "),s("code",[t._v("use Laratrust\\Models\\LaratrustRole")]),t._v(";")]),t._v(" "),s("li",[s("code",[t._v("use Laratrust\\LaratrustPermission")]),t._v(" to "),s("code",[t._v("use Laratrust\\Models\\LaratrustPermission")]),t._v(";")]),t._v(" "),s("li",[s("code",[t._v("use Laratrust\\LaratrustTeam")]),t._v(" to "),s("code",[t._v("use Laratrust\\Models\\LaratrustTeam")]),t._v(";")])])]),t._v(" "),s("li",[s("p",[t._v("If you use the ability method and you pass it comma separated roles or permissions, change them to a pipe separated string:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// From")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ability")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'admin,owner'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'create-post,edit-user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// To")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ability")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'admin|owner'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'create-post|edit-user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"7"}},[e("li",[this._v("If you are using the "),e("code",[this._v("Ownable")]),this._v(" interface, please update all the classes implementing it:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// From")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ownerKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// To")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ownerKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$owner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",[t._v("The "),s("code",[t._v("cachedRoles")]),t._v(" and "),s("code",[t._v("cachedPermissions")]),t._v(" methods now return an array when you have the "),s("code",[t._v("laratrust.use_cache")]),t._v(" option set to "),s("code",[t._v("true")]),t._v(". So if you use these methods, please check your code.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Delete the "),e("code",[this._v("LaratrustSeeder.php")]),this._v(" file and run "),e("code",[this._v("php artisan laratrust:seeder")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Run "),e("code",[this._v("composer dump-autoload")]),this._v(".")])])}],!1,null,null,null);e.default=r.exports}}]);