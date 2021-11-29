var tinycolor=function(t){var e=/^\s+/,r=/\s+$/,n=t.round,a=t.min,i=t.max,s=t.random;function o(s,f){if(f=f||{},(s=s||"")instanceof o)return s;if(!(this instanceof o))return new o(s,f);var h=function(n){var s,o,f,h={r:0,g:0,b:0},l=1,u=null,c=null,g=null,b=!1,d=!1;return"string"==typeof n&&(n=function(t){t=t.replace(e,"").replace(r,"").toLowerCase();var n,a=!1;if(k[t])t=k[t],a=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(n=X.rgb.exec(t))?{r:n[1],g:n[2],b:n[3]}:(n=X.rgba.exec(t))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=X.hsl.exec(t))?{h:n[1],s:n[2],l:n[3]}:(n=X.hsla.exec(t))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=X.hsv.exec(t))?{h:n[1],s:n[2],v:n[3]}:(n=X.hsva.exec(t))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=X.hex8.exec(t))?{r:N(n[1]),g:N(n[2]),b:N(n[3]),a:C(n[4]),format:a?"name":"hex8"}:(n=X.hex6.exec(t))?{r:N(n[1]),g:N(n[2]),b:N(n[3]),format:a?"name":"hex"}:(n=X.hex4.exec(t))?{r:N(n[1]+""+n[1]),g:N(n[2]+""+n[2]),b:N(n[3]+""+n[3]),a:C(n[4]+""+n[4]),format:a?"name":"hex8"}:!!(n=X.hex3.exec(t))&&{r:N(n[1]+""+n[1]),g:N(n[2]+""+n[2]),b:N(n[3]+""+n[3]),format:a?"name":"hex"}}(n)),"object"==typeof n&&(P(n.r)&&P(n.g)&&P(n.b)?(s=n.r,o=n.g,f=n.b,h={r:255*H(s,255),g:255*H(o,255),b:255*H(f,255)},b=!0,d="%"===String(n.r).substr(-1)?"prgb":"rgb"):P(n.h)&&P(n.s)&&P(n.v)?(u=E(n.s),c=E(n.v),h=function(e,r,n){e=6*H(e,360),r=H(r,100),n=H(n,100);var a=t.floor(e),i=e-a,s=n*(1-r),o=n*(1-i*r),f=n*(1-(1-i)*r),h=a%6;return{r:255*[n,o,s,s,f,n][h],g:255*[f,n,n,o,s,s][h],b:255*[s,s,f,n,n,o][h]}}(n.h,u,c),b=!0,d="hsv"):P(n.h)&&P(n.s)&&P(n.l)&&(u=E(n.s),g=E(n.l),h=function(t,e,r){var n,a,i;function s(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}if(t=H(t,360),e=H(e,100),r=H(r,100),0===e)n=a=i=r;else{var o=r<.5?r*(1+e):r+e-r*e,f=2*r-o;n=s(f,o,t+1/3),a=s(f,o,t),i=s(f,o,t-1/3)}return{r:255*n,g:255*a,b:255*i}}(n.h,u,g),b=!0,d="hsl"),n.hasOwnProperty("a")&&(l=n.a)),l=w(l),{ok:b,format:n.format||d,r:a(255,i(h.r,0)),g:a(255,i(h.g,0)),b:a(255,i(h.b,0)),a:l}}(s);this._originalInput=s,this._r=h.r,this._g=h.g,this._b=h.b,this._a=h.a,this._roundA=n(100*this._a)/100,this._format=f.format||h.format,this._gradientType=f.gradientType,this._r<1&&(this._r=n(this._r)),this._g<1&&(this._g=n(this._g)),this._b<1&&(this._b=n(this._b)),this._ok=h.ok}function f(t,e,r){t=H(t,255),e=H(e,255),r=H(r,255);var n,s,o=i(t,e,r),f=a(t,e,r),h=(o+f)/2;if(o==f)n=s=0;else{var l=o-f;switch(s=h>.5?l/(2-o-f):l/(o+f),o){case t:n=(e-r)/l+(e<r?6:0);break;case e:n=(r-t)/l+2;break;case r:n=(t-e)/l+4}n/=6}return{h:n,s,l:h}}function h(t,e,r){t=H(t,255),e=H(e,255),r=H(r,255);var n,s,o=i(t,e,r),f=a(t,e,r),h=o,l=o-f;if(s=0===o?0:l/o,o==f)n=0;else{switch(o){case t:n=(e-r)/l+(e<r?6:0);break;case e:n=(r-t)/l+2;break;case r:n=(t-e)/l+4}n/=6}return{h:n,s,v:h}}function l(t,e,r,a){var i=[T(n(t).toString(16)),T(n(e).toString(16)),T(n(r).toString(16))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function u(t,e,r,a){return[T(F(a)),T(n(t).toString(16)),T(n(e).toString(16)),T(n(r).toString(16))].join("")}function c(t,e){e=0===e?0:e||10;var r=o(t).toHsl();return r.s-=e/100,r.s=I(r.s),o(r)}function g(t,e){e=0===e?0:e||10;var r=o(t).toHsl();return r.s+=e/100,r.s=I(r.s),o(r)}function b(t){return o(t).desaturate(100)}function d(t,e){e=0===e?0:e||10;var r=o(t).toHsl();return r.l+=e/100,r.l=I(r.l),o(r)}function _(t,e){e=0===e?0:e||10;var r=o(t).toRgb();return r.r=i(0,a(255,r.r-n(-e/100*255))),r.g=i(0,a(255,r.g-n(-e/100*255))),r.b=i(0,a(255,r.b-n(-e/100*255))),o(r)}function p(t,e){e=0===e?0:e||10;var r=o(t).toHsl();return r.l-=e/100,r.l=I(r.l),o(r)}function m(t,e){var r=o(t).toHsl(),n=(r.h+e)%360;return r.h=n<0?360+n:n,o(r)}function v(t){var e=o(t).toHsl();return e.h=(e.h+180)%360,o(e)}function A(t){var e=o(t).toHsl(),r=e.h;return[o(t),o({h:(r+120)%360,s:e.s,l:e.l}),o({h:(r+240)%360,s:e.s,l:e.l})]}function y(t){var e=o(t).toHsl(),r=e.h;return[o(t),o({h:(r+90)%360,s:e.s,l:e.l}),o({h:(r+180)%360,s:e.s,l:e.l}),o({h:(r+270)%360,s:e.s,l:e.l})]}function x(t){var e=o(t).toHsl(),r=e.h;return[o(t),o({h:(r+72)%360,s:e.s,l:e.l}),o({h:(r+216)%360,s:e.s,l:e.l})]}function S(t,e,r){e=e||6,r=r||30;var n=o(t).toHsl(),a=360/r,i=[o(t)];for(n.h=(n.h-(a*e>>1)+720)%360;--e;)n.h=(n.h+a)%360,i.push(o(n));return i}function R(t,e){e=e||6;for(var r=o(t).toHsv(),n=r.h,a=r.s,i=r.v,s=[],f=1/e;e--;)s.push(o({h:n,s:a,v:i})),i=(i+f)%1;return s}o.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var e,r,n,a=this.toRgb();return e=a.r/255,r=a.g/255,n=a.b/255,.2126*(e<=.03928?e/12.92:t.pow((e+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:t.pow((r+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:t.pow((n+.055)/1.055,2.4))},setAlpha:function(t){return this._a=w(t),this._roundA=n(100*this._a)/100,this},toHsv:function(){var t=h(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=h(this._r,this._g,this._b),e=n(360*t.h),r=n(100*t.s),a=n(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+a+"%)":"hsva("+e+", "+r+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=f(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=f(this._r,this._g,this._b),e=n(360*t.h),r=n(100*t.s),a=n(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+a+"%)":"hsla("+e+", "+r+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return l(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,e,r,a,i){var s=[T(n(t).toString(16)),T(n(e).toString(16)),T(n(r).toString(16)),T(F(a))];return i&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)&&s[3].charAt(0)==s[3].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:n(this._r),g:n(this._g),b:n(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+n(this._r)+", "+n(this._g)+", "+n(this._b)+")":"rgba("+n(this._r)+", "+n(this._g)+", "+n(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:n(100*H(this._r,255))+"%",g:n(100*H(this._g,255))+"%",b:n(100*H(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+n(100*H(this._r,255))+"%, "+n(100*H(this._g,255))+"%, "+n(100*H(this._b,255))+"%)":"rgba("+n(100*H(this._r,255))+"%, "+n(100*H(this._g,255))+"%, "+n(100*H(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(M[l(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+u(this._r,this._g,this._b,this._a),r=e,n=this._gradientType?"GradientType = 1, ":"";if(t){var a=o(t);r="#"+u(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0;return e||!n||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return o(this.toString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(d,arguments)},brighten:function(){return this._applyModification(_,arguments)},darken:function(){return this._applyModification(p,arguments)},desaturate:function(){return this._applyModification(c,arguments)},saturate:function(){return this._applyModification(g,arguments)},greyscale:function(){return this._applyModification(b,arguments)},spin:function(){return this._applyModification(m,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(S,arguments)},complement:function(){return this._applyCombination(v,arguments)},monochromatic:function(){return this._applyCombination(R,arguments)},splitcomplement:function(){return this._applyCombination(x,arguments)},triad:function(){return this._applyCombination(A,arguments)},tetrad:function(){return this._applyCombination(y,arguments)}},o.fromRatio=function(t,e){if("object"==typeof t){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]="a"===n?t[n]:E(t[n]));t=r}return o(t,e)},o.equals=function(t,e){return!(!t||!e)&&o(t).toRgbString()==o(e).toRgbString()},o.random=function(){return o.fromRatio({r:s(),g:s(),b:s()})},o.mix=function(t,e,r){r=0===r?0:r||50;var n=o(t).toRgb(),a=o(e).toRgb(),i=r/100;return o({r:(a.r-n.r)*i+n.r,g:(a.g-n.g)*i+n.g,b:(a.b-n.b)*i+n.b,a:(a.a-n.a)*i+n.a})},o.readability=function(e,r){var n=o(e),a=o(r);return(t.max(n.getLuminance(),a.getLuminance())+.05)/(t.min(n.getLuminance(),a.getLuminance())+.05)},o.isReadable=function(t,e,r){var n,a,i,s,f,h=o.readability(t,e);switch(a=!1,(i=r,"AA"!==(s=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==s&&(s="AA"),"small"!==(f=(i.size||"small").toLowerCase())&&"large"!==f&&(f="small"),n={level:s,size:f}).level+n.size){case"AAsmall":case"AAAlarge":a=h>=4.5;break;case"AAlarge":a=h>=3;break;case"AAAsmall":a=h>=7}return a},o.mostReadable=function(t,e,r){var n,a,i,s,f=null,h=0;a=(r=r||{}).includeFallbackColors,i=r.level,s=r.size;for(var l=0;l<e.length;l++)(n=o.readability(t,e[l]))>h&&(h=n,f=o(e[l]));return o.isReadable(t,f,{level:i,size:s})||!a?f:(r.includeFallbackColors=!1,o.mostReadable(t,["#fff","#000"],r))};var k=o.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},M=o.hexNames=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}(k);function w(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function H(e,r){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(e)&&(e="100%");var n=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(e);return e=a(r,i(0,parseFloat(e))),n&&(e=parseInt(e*r,10)/100),t.abs(e-r)<1e-6?1:e%r/parseFloat(r)}function I(t){return a(1,i(0,t))}function N(t){return parseInt(t,16)}function T(t){return 1==t.length?"0"+t:""+t}function E(t){return t<=1&&(t=100*t+"%"),t}function F(e){return t.round(255*parseFloat(e)).toString(16)}function C(t){return N(t)/255}var O,B,U,X=(B="[\\s|\\(]+("+(O="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+O+")[,|\\s]+("+O+")\\s*\\)?",U="[\\s|\\(]+("+O+")[,|\\s]+("+O+")[,|\\s]+("+O+")[,|\\s]+("+O+")\\s*\\)?",{CSS_UNIT:new RegExp(O),rgb:new RegExp("rgb"+B),rgba:new RegExp("rgba"+U),hsl:new RegExp("hsl"+B),hsla:new RegExp("hsla"+U),hsv:new RegExp("hsv"+B),hsva:new RegExp("hsva"+U),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function P(t){return!!X.CSS_UNIT.exec(t)}return o}(Math),PRIMARY_INDEX=5,HUE_MAX=360,SATURATION_MIN=5,SATURATION_MAX=100,BRIGHTNESS_MIN=20,BRIGHTNESS_MAX=100,COLOR_NUMBER_SET=["50","100","200","300","400","500","600","700","800","900"];function calculateHue(t,e){const r=(t=Math.round(t)||360)+1*(e-PRIMARY_INDEX);return r>=HUE_MAX?Math.abs(r-HUE_MAX):r}function calculateSaturation(t,e){t=Math.round(100*t);const r=e-PRIMARY_INDEX,n=t+r*Math.round(r>0&&(100-t)/4||t>SATURATION_MIN&&(t-5)/5||1);return(n<SATURATION_MIN&&SATURATION_MIN||n>SATURATION_MAX&&SATURATION_MAX||n)/100}function calculateBrightnessAdjustValue(t,e){if(e<0){if(t>40){let r=Math.ceil((t-40)/4/4);const n=Math.abs(e);return-1*r*((1+n)*n/2)}return Math.round(e*((t-20)/4))}return Math.round(e*((100-t)/5))}function calculateBrightness(t,e){t=Math.round(100*t);const r=PRIMARY_INDEX-e;if(r<0&&t<BRIGHTNESS_MIN)return t/100;const n=t+calculateBrightnessAdjustValue(t,r);return(n<BRIGHTNESS_MIN&&BRIGHTNESS_MIN||n>BRIGHTNESS_MAX&&BRIGHTNESS_MAX||n)/100}module.exports={install:function(t,e,r){r.add("palette",(function(e,r){const{rgb:[n,a,i],alpha:s}=e,o=tinycolor({r:n,g:a,b:i,a:s}).toHsv(),f=COLOR_NUMBER_SET.indexOf(""+r.value);return-1===f||f===PRIMARY_INDEX?t.color(e.rgb):t.color(tinycolor({h:calculateHue(o.h,f),s:calculateSaturation(o.s,f),v:calculateBrightness(o.v,f)}).toHex())}))}};