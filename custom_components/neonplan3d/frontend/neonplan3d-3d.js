var rf=0,Nc=1,sf=2;var Os=1,of=2,Yr=3,Yn=0,Je=1,fe=2,qn=0,Pi=1,Ie=2,Uc=3,Bs=4,af=5;var nr=100,lf=101,cf=102,uf=103,hf=104,ff=200,df=201,pf=202,mf=203,Oc=204,Bc=205,gf=206,xf=207,bf=208,vf=209,_f=210,yf=211,Mf=212,Sf=213,wf=214,Qo=0,ta=1,ea=2,Ur=3,na=4,ia=5,ra=6,sa=7,kc=0,Tf=1,Ef=2,Ln=0,zc=1,Vc=2,Gc=3,Hc=4,Wc=5,Xc=6,Yc=7;var qc=300,Ii=301,ir=302,Fa=303,Da=304,ks=306,Ji=1e3,xn=1001,oa=1002,Xe=1003,Af=1004;var zs=1005;var Ze=1006,Na=1007;var Li=1008;var vn=1009,$c=1010,Zc=1011,qr=1012,Ua=1013,Fn=1014,Dn=1015,Nn=1016,Oa=1017,Ba=1018,$r=1020,Kc=35902,Jc=35899,jc=1021,Qc=1022,Sn=1023,Gn=1026,Fi=1027,tu=1028,ka=1029,Di=1030,za=1031;var Va=1033,Vs=33776,Gs=33777,Hs=33778,Ws=33779,Ga=35840,Ha=35841,Wa=35842,Xa=35843,Ya=36196,qa=37492,$a=37496,Za=37488,Ka=37489,Xs=37490,Ja=37491,ja=37808,Qa=37809,tl=37810,el=37811,nl=37812,il=37813,rl=37814,sl=37815,ol=37816,al=37817,ll=37818,cl=37819,ul=37820,hl=37821,fl=36492,dl=36494,pl=36495,ml=36283,gl=36284,Ys=36285,xl=36286;var xs=2300,aa=2301,Ko=2302,wc=2303,Tc=2400,Ec=2401,Ac=2402;var Rf=3200;var eu=0,Cf=1,ci="",De="srgb",bs="srgb-linear",vs="linear",me="srgb";var Jo=7680;var Pf=519,If=512,Lf=513,Ff=514,bl=515,Df=516,Nf=517,vl=518,Uf=519,Of=35044,nu=35048;var iu="300 es",In=2e3,_s=2001;function n0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function i0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){let i=Or("canvas");return i.style.display="block",i}var Eh={},Br=null;function ru(...i){let t="THREE."+i.shift();Br?Br("log",t,...i):console.log(t,...i)}function kf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=kf(i);let t="THREE."+i.shift();if(Br)Br("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=kf(i);let t="THREE."+i.shift();if(Br)Br("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ki(...i){let t=i.join(" ");t in Eh||(Eh[t]=!0,Gt(...i))}function zf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Vf={[Qo]:ta,[ea]:ra,[na]:sa,[Ur]:ia,[ta]:Qo,[ra]:ea,[sa]:na,[ia]:Ur},Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ec=Math.PI/180,la=180/Math.PI;function qs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function r0(i,t){return(i%t+t)%t}function nc(i,t,e){return(1-e)*i+e*t}function us(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var cu=class cu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cu.prototype.isVector2=!0;var te=cu,Wn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],m=s[o+2],x=s[o+3];if(h!==x||l!==f||c!==d||u!==m){let g=l*f+c*d+u*m+h*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let _=Math.acos(g),y=Math.sin(_);p=Math.sin(p*_)/y,a=Math.sin(a*_)/y,l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+x*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+x*a;let _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+u*h+l*d-c*f,t[e+1]=l*m+u*f+c*h-a*d,t[e+2]=c*m+u*d+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uu=class uu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ah.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ic.copy(this).projectOnVector(t),this.sub(ic)}reflect(t){return this.sub(ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uu.prototype.isVector3=!0;var H=uu,ic=new H,Ah=new Wn,hu=class hu{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],x=r[0],g=r[3],p=r[6],_=r[1],y=r[4],v=r[7],M=r[2],T=r[5],C=r[8];return s[0]=o*x+a*_+l*M,s[3]=o*g+a*y+l*T,s[6]=o*p+a*v+l*C,s[1]=c*x+u*_+h*M,s[4]=c*g+u*y+h*T,s[7]=c*p+u*v+h*C,s[2]=f*x+d*_+m*M,s[5]=f*g+d*y+m*T,s[8]=f*p+d*v+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=e*h+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=h*x,t[1]=(r*c-u*n)*x,t[2]=(a*n-r*o)*x,t[3]=f*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rc.makeScale(t,e)),this}rotate(t){return Ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rc.makeRotation(-t)),this}translate(t,e){return Ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};hu.prototype.isMatrix3=!0;var $t=hu,rc=new $t,Rh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s0(){let i={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===me&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(r.r=Nr(r.r),r.g=Nr(r.g),r.b=Nr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ci?vs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ki("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ki("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bs]:{primaries:t,whitePoint:n,transfer:vs,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}var oe=s0();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var yr,ca=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{yr===void 0&&(yr=Or("canvas")),yr.width=t.width,yr.height=t.height;let r=yr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=yr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=si(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},o0=0,kr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sc(r[o].image)):s.push(sc(r[o]))}else s=sc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function sc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ca.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var a0=0,oc=new H,rn=class i extends Hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=xn,r=xn,s=Ze,o=Li,a=Sn,l=vn,c=i.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=qs(),this.name="",this.source=new kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oc).x}get height(){return this.source.getSize(oc).y}get depth(){return this.source.getSize(oc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ji:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ji:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=qc;rn.DEFAULT_ANISOTROPY=1;var fu=class fu{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,M=(p+1)/2,T=(u+f)/4,C=(h+x)/4,b=(m+g)/4;return y>v&&y>M?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=T/n,s=C/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=b/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=C/s,r=b/s),this.set(n,r,s,e),this}let _=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(h-x)/_,this.z=(f-u)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fu.prototype.isVector4=!0;var Ce=fu,ua=class extends Hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new rn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new kr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends ua{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ys=class extends rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var La=class La{constructor(t,e,n,r,s,o,a,l,c,u,h,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,d,m,x,g)}set(t,e,n,r,s,o,a,l,c,u,h,f,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new La().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Mr.setFromMatrixColumn(t,0).length(),s=1/Mr.setFromMatrixColumn(t,1).length(),o=1/Mr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,d=o*h,m=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,m=c*u,x=c*h;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,m=c*u,x=c*h;e[0]=f-x*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,m=a*u,x=a*h;e[0]=l*u,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*u,e[4]=x-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+m,e[10]=f-x*h}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(l0,t,c0)}lookAt(t,e,n){let r=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),xi.crossVectors(n,mn),xi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),xi.crossVectors(n,mn)),xi.normalize(),To.crossVectors(mn,xi),r[0]=xi.x,r[4]=To.x,r[8]=mn.x,r[1]=xi.y,r[5]=To.y,r[9]=mn.y,r[2]=xi.z,r[6]=To.z,r[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],y=n[7],v=n[11],M=n[15],T=r[0],C=r[4],b=r[8],S=r[12],w=r[1],R=r[5],A=r[9],I=r[13],E=r[2],L=r[6],F=r[10],D=r[14],k=r[3],O=r[7],B=r[11],V=r[15];return s[0]=o*T+a*w+l*E+c*k,s[4]=o*C+a*R+l*L+c*O,s[8]=o*b+a*A+l*F+c*B,s[12]=o*S+a*I+l*D+c*V,s[1]=u*T+h*w+f*E+d*k,s[5]=u*C+h*R+f*L+d*O,s[9]=u*b+h*A+f*F+d*B,s[13]=u*S+h*I+f*D+d*V,s[2]=m*T+x*w+g*E+p*k,s[6]=m*C+x*R+g*L+p*O,s[10]=m*b+x*A+g*F+p*B,s[14]=m*S+x*I+g*D+p*V,s[3]=_*T+y*w+v*E+M*k,s[7]=_*C+y*R+v*L+M*O,s[11]=_*b+y*A+v*F+M*B,s[15]=_*S+y*I+v*D+M*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15],_=l*d-c*f,y=a*d-c*h,v=a*f-l*h,M=o*d-c*u,T=o*f-l*u,C=o*h-a*u;return e*(x*_-g*y+p*v)-n*(m*_-g*M+p*T)+r*(m*y-x*M+p*C)-s*(m*v-x*T+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],_=e*a-n*o,y=e*l-r*o,v=e*c-s*o,M=n*l-r*a,T=n*c-s*a,C=r*c-s*l,b=u*x-h*m,S=u*g-f*m,w=u*p-d*m,R=h*g-f*x,A=h*p-d*x,I=f*p-d*g,E=_*I-y*A+v*R+M*w-T*S+C*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/E;return t[0]=(a*I-l*A+c*R)*L,t[1]=(r*A-n*I-s*R)*L,t[2]=(x*C-g*T+p*M)*L,t[3]=(f*T-h*C-d*M)*L,t[4]=(l*w-o*I-c*S)*L,t[5]=(e*I-r*w+s*S)*L,t[6]=(g*v-m*C-p*y)*L,t[7]=(u*C-f*v+d*y)*L,t[8]=(o*A-a*w+c*b)*L,t[9]=(n*w-e*A-s*b)*L,t[10]=(m*T-x*v+p*_)*L,t[11]=(h*v-u*T-d*_)*L,t[12]=(a*S-o*R-l*b)*L,t[13]=(e*R-n*S+r*b)*L,t[14]=(x*y-m*M-g*_)*L,t[15]=(u*M-h*y+f*_)*L,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,x=o*u,g=o*h,p=a*h,_=l*c,y=l*u,v=l*h,M=n.x,T=n.y,C=n.z;return r[0]=(1-(x+p))*M,r[1]=(d+v)*M,r[2]=(m-y)*M,r[3]=0,r[4]=(d-v)*T,r[5]=(1-(f+p))*T,r[6]=(g+_)*T,r[7]=0,r[8]=(m+y)*C,r[9]=(g-_)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Mr.set(r[0],r[1],r[2]).length(),a=Mr.set(r[4],r[5],r[6]).length(),l=Mr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),An.copy(this);let c=1/o,u=1/a,h=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,e.setFromRotationMatrix(An),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=In,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===In)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===_s)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=In,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===In)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===_s)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};La.prototype.isMatrix4=!0;var we=La,Mr=new H,An=new we,l0=new H(0,0,0),c0=new H(1,1,1),xi=new H,To=new H,mn=new H,Ph=new we,Ih=new Wn,Si=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},u0=0,Lh=new H,Sr=new Wn,ti=new we,Eo=new H,hs=new H,h0=new H,f0=new Wn,Fh=new H(1,0,0),Dh=new H(0,1,0),Nh=new H(0,0,1),Uh={type:"added"},d0={type:"removed"},wr={type:"childadded",child:null},ac={type:"childremoved",child:null},pn=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new Si,n=new Wn,r=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new $t}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Sr.setFromAxisAngle(t,e),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(t,e){return Sr.setFromAxisAngle(t,e),this.quaternion.premultiply(Sr),this}rotateX(t){return this.rotateOnAxis(Fh,t)}rotateY(t){return this.rotateOnAxis(Dh,t)}rotateZ(t){return this.rotateOnAxis(Nh,t)}translateOnAxis(t,e){return Lh.copy(t).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fh,t)}translateY(t){return this.translateOnAxis(Dh,t)}translateZ(t){return this.translateOnAxis(Nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Eo.copy(t):Eo.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(hs,Eo,this.up):ti.lookAt(Eo,hs,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Sr.setFromRotationMatrix(ti),this.quaternion.premultiply(Sr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uh),wr.child=t,this.dispatchEvent(wr),wr.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(d0),ac.child=t,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uh),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,h0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,f0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pn.DEFAULT_UP=new H(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ke=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},p0={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function lc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var J=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=oe.workingColorSpace){if(t=r0(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=lc(o,s,t+1/3),this.g=lc(o,s,t),this.b=lc(o,s,t-1/3)}return oe.colorSpaceToWorking(this,r),this}setStyle(t,e=De){function n(s){s!==void 0&&parseFloat(s)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=Gf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return oe.workingToColorSpace(en.copy(this),t),Math.round(le(en.r*255,0,255))*65536+Math.round(le(en.g*255,0,255))*256+Math.round(le(en.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(en.copy(this),e);let n=en.r,r=en.g,s=en.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=De){oe.workingToColorSpace(en.copy(this),t);let e=en.r,n=en.g,r=en.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(Ao);let n=nc(bi.h,Ao.h,e),r=nc(bi.s,Ao.s,e),s=nc(bi.l,Ao.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new J;J.NAMES=Gf;var Ms=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new J(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var wi=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Rn=new H,ei=new H,cc=new H,ni=new H,Tr=new H,Er=new H,Oh=new H,uc=new H,hc=new H,fc=new H,dc=new Ce,pc=new Ce,mc=new Ce,Mi=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Rn.subVectors(t,e),r.cross(Rn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Rn.subVectors(r,e),ei.subVectors(n,e),cc.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(ei),l=Rn.dot(cc),c=ei.dot(ei),u=ei.dot(cc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return dc.setScalar(0),pc.setScalar(0),mc.setScalar(0),dc.fromBufferAttribute(t,e),pc.fromBufferAttribute(t,n),mc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(dc,s.x),o.addScaledVector(pc,s.y),o.addScaledVector(mc,s.z),o}static isFrontFacing(t,e,n,r){return Rn.subVectors(n,e),ei.subVectors(t,e),Rn.cross(ei).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Rn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Tr.subVectors(r,n),Er.subVectors(s,n),uc.subVectors(t,n);let l=Tr.dot(uc),c=Er.dot(uc);if(l<=0&&c<=0)return e.copy(n);hc.subVectors(t,r);let u=Tr.dot(hc),h=Er.dot(hc);if(u>=0&&h<=u)return e.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Tr,o);fc.subVectors(t,s);let d=Tr.dot(fc),m=Er.dot(fc);if(m>=0&&d<=m)return e.copy(s);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Er,a);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Oh.subVectors(s,r),a=(h-u)/(h-u+(d-m)),e.copy(r).addScaledVector(Oh,a);let p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Tr,o).addScaledVector(Er,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},un=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(t.matrixWorld),this.union(Ro)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Co.subVectors(this.max,fs),Ar.subVectors(t.a,fs),Rr.subVectors(t.b,fs),Cr.subVectors(t.c,fs),vi.subVectors(Rr,Ar),_i.subVectors(Cr,Rr),Yi.subVectors(Ar,Cr);let e=[0,-vi.z,vi.y,0,-_i.z,_i.y,0,-Yi.z,Yi.y,vi.z,0,-vi.x,_i.z,0,-_i.x,Yi.z,0,-Yi.x,-vi.y,vi.x,0,-_i.y,_i.x,0,-Yi.y,Yi.x,0];return!gc(e,Ar,Rr,Cr,Co)||(e=[1,0,0,0,1,0,0,0,1],!gc(e,Ar,Rr,Cr,Co))?!1:(Po.crossVectors(vi,_i),e=[Po.x,Po.y,Po.z],gc(e,Ar,Rr,Cr,Co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ii=[new H,new H,new H,new H,new H,new H,new H,new H],Cn=new H,Ro=new un,Ar=new H,Rr=new H,Cr=new H,vi=new H,_i=new H,Yi=new H,fs=new H,Co=new H,Po=new H,qi=new H;function gc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){qi.fromArray(i,s);let a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),u=n.dot(qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Be=new H,Io=new te,m0=0,Mn=class extends Hn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Of,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Io.fromBufferAttribute(this,e),Io.applyMatrix3(t),this.setXY(e,Io.x,Io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ss=class extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ji=class extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var zt=class extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},g0=new un,ds=new H,xc=new H,Ti=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):g0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);let e=ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ds,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(xc)),this.expandByPoint(ds.copy(t.center).sub(xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},x0=0,yn=new we,bc=new pn,Pr=new H,gn=new un,ps=new un,We=new H,Zt=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(n0(t)?ji:Ss)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return bc.lookAt(t),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ps.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(gn.min,ps.min),gn.expandByPoint(We),We.addVectors(gn.max,ps.max),gn.expandByPoint(We)):(gn.expandByPoint(ps.min),gn.expandByPoint(ps.max))}gn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)We.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(We));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)We.fromBufferAttribute(a,c),l&&(Pr.fromBufferAttribute(t,c),We.add(Pr)),r=Math.max(r,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new H,l[b]=new H;let c=new H,u=new H,h=new H,f=new te,d=new te,m=new te,x=new H,g=new H;function p(b,S,w){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,w),f.fromBufferAttribute(s,b),d.fromBufferAttribute(s,S),m.fromBufferAttribute(s,w),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(R),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(R),a[b].add(x),a[S].add(x),a[w].add(x),l[b].add(g),l[S].add(g),l[w].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let b=0,S=_.length;b<S;++b){let w=_[b],R=w.start,A=w.count;for(let I=R,E=R+A;I<E;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new H,v=new H,M=new H,T=new H;function C(b){M.fromBufferAttribute(r,b),T.copy(M);let S=a[b];y.copy(S),y.sub(M.multiplyScalar(M.dot(S))).normalize(),v.crossVectors(T,S);let R=v.dot(l[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,R)}for(let b=0,S=_.length;b<S;++b){let w=_[b],R=w.start,A=w.count;for(let I=R,E=R+A;I<E;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new Mn(f,u,h)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vc=new H,b0=new H,v0=new $t,Pn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=vc.subVectors(n,e).cross(b0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(vc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||v0.getNormalMatrix(t),r=this.coplanarPoint(vc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},_0=0,oi=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Pi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=Bc,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new J().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new te().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ri=new H,_c=new H,Lo=new H,Fo=new H,Qi=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){_c.copy(t).add(e).multiplyScalar(.5),Lo.copy(e).sub(t).normalize(),Fo.copy(this.origin).sub(_c);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Lo),a=Fo.dot(this.direction),l=-Fo.dot(Lo),c=Fo.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(_c).addScaledVector(Lo,f),d}intersectSphere(t,e){if(t.radius<0)return null;ri.subVectors(t.center,this.origin);let n=ri.dot(this.direction),r=ri.dot(ri)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,_=n.y-o.y,y=n.z-o.z,v=Math.abs(l),M=Math.abs(c),T=Math.abs(u),C,b,S,w,R,A,I,E,L,F,D,k;if(v>=M&&v>=T?(S=l,A=h,L=m,k=p,l>=0?(C=c,b=u,w=f,R=d,I=x,E=g,F=_,D=y):(C=u,b=c,w=d,R=f,I=g,E=x,F=y,D=_)):M>=T?(S=c,A=f,L=x,k=_,c>=0?(C=u,b=l,w=d,R=h,I=g,E=m,F=y,D=p):(C=l,b=u,w=h,R=d,I=m,E=g,F=p,D=y)):(S=u,A=d,L=g,k=y,u>=0?(C=l,b=c,w=h,R=f,I=m,E=x,F=p,D=_):(C=c,b=l,w=f,R=h,I=x,E=m,F=_,D=p)),S===0)return null;let O=C/S,B=b/S,V=1/S,et=w-O*A,G=R-B*A,K=I-O*L,ot=E-B*L,dt=F-O*k,$=D-B*k,X=dt*ot-$*K,it=et*$-G*dt,at=K*G-ot*et;if(r){if(X<0||it<0||at<0)return null}else if((X<0||it<0||at<0)&&(X>0||it>0||at>0))return null;let ct=X+it+at;if(ct===0)return null;let gt=V*(X*A+it*L+at*k);return(ct>0?gt<0:gt>0)?null:this.at(gt/ct,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Bh=new we,$i=new Qi,Do=new Ti,kh=new H,No=new H,Uo=new H,Oo=new H,yc=new H,Bo=new H,zh=new H,ko=new H,kt=class extends pn{constructor(t=new Zt,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Bo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(yc.fromBufferAttribute(h,t),o?Bo.addScaledVector(yc,u):Bo.addScaledVector(yc.sub(e),u))}e.add(Bo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),$i.copy(t.ray).recast(t.near),!(Do.containsPoint($i.origin)===!1&&($i.intersectSphere(Do,kh)===null||$i.origin.distanceToSquared(kh)>(t.far-t.near)**2))&&(Bh.copy(s).invert(),$i.copy(t.ray).applyMatrix4(Bh),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,M=y;v<M;v+=3){let T=a.getX(v),C=a.getX(v+1),b=a.getX(v+2);r=zo(this,p,t,n,c,u,h,T,C,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);r=zo(this,o,t,n,c,u,h,_,y,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,M=y;v<M;v+=3){let T=v,C=v+1,b=v+2;r=zo(this,p,t,n,c,u,h,T,C,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=g,y=g+1,v=g+2;r=zo(this,o,t,n,c,u,h,_,y,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function y0(i,t,e,n,r,s,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Yn,a),l===null)return null;ko.copy(a),ko.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ko);return c<e.near||c>e.far?null:{distance:c,point:ko.clone(),object:i}}function zo(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,No),i.getVertexPosition(l,Uo),i.getVertexPosition(c,Oo);let u=y0(i,t,e,n,No,Uo,Oo,zh);if(u){let h=new H;Mi.getBarycoord(zh,No,Uo,Oo,h),r&&(u.uv=Mi.getInterpolatedAttribute(r,a,l,c,h,new te)),s&&(u.uv1=Mi.getInterpolatedAttribute(s,a,l,c,h,new te)),o&&(u.normal=Mi.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};Mi.getNormal(No,Uo,Oo,f.normal),u.face=f,u.barycoord=h}return u}var fa=class extends rn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Xe,u=Xe,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zi=new Ti,M0=new te(.5,.5),Vo=new H,ws=class{constructor(t=new Pn,e=new Pn,n=new Pn,r=new Pn,s=new Pn,o=new Pn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],x=s[9],g=s[10],p=s[11],_=s[12],y=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-u,p-m,M-_).normalize(),r[1].setComponents(c+o,d+u,p+m,M+_).normalize(),r[2].setComponents(c+a,d+h,p+x,M+y).normalize(),r[3].setComponents(c-a,d-h,p-x,M-y).normalize(),n)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,p-g,M-v).normalize();else if(r[4].setComponents(c-l,d-f,p-g,M-v).normalize(),e===In)r[5].setComponents(c+l,d+f,p+g,M+v).normalize();else if(e===_s)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){Zi.center.set(0,0,0);let e=M0.distanceTo(t.center);return Zi.radius=.7071067811865476+e,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Vo.x=r.normal.x>0?t.max.x:t.min.x,Vo.y=r.normal.y>0?t.max.y:t.min.y,Vo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ke=class extends oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new J(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},da=new H,pa=new H,Vh=new we,ms=new Qi,Go=new Ti,Mc=new H,Gh=new H,ma=class extends pn{constructor(t=new Zt,e=new Ke){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)da.fromBufferAttribute(e,r-1),pa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=da.distanceTo(pa);t.setAttribute("lineDistance",new zt(n,1))}else Gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),Go.radius+=s,t.ray.intersectsSphere(Go)===!1)return;Vh.copy(r).invert(),ms.copy(t.ray).applyMatrix4(Vh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=u.getX(x),_=u.getX(x+1),y=Ho(this,t,ms,l,p,_,x);y&&e.push(y)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),p=Ho(this,t,ms,l,x,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=Ho(this,t,ms,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Ho(this,t,ms,l,m-1,d,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ho(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(da.fromBufferAttribute(a,r),pa.fromBufferAttribute(a,s),e.distanceSqToSegment(da,pa,Mc,Gh)>n)return;Mc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Mc);if(!(c<t.near||c>t.far))return{distance:c,point:Gh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Hh=new H,Wh=new H,Ye=class extends ma{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Hh.fromBufferAttribute(e,r),Wh.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Hh.distanceTo(Wh);t.setAttribute("lineDistance",new zt(n,1))}else Gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var tr=class extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new J(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xh=new we,Rc=new Qi,Wo=new Ti,Xo=new H,Gr=class extends pn{constructor(t=new Zt,e=new tr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),Wo.radius+=s,t.ray.intersectsSphere(Wo)===!1)return;Xh.copy(r).invert(),Rc.copy(t.ray).applyMatrix4(Xh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);Xo.fromBufferAttribute(h,g),Yh(Xo,g,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,x=d;m<x;m++)Xo.fromBufferAttribute(h,m),Yh(Xo,m,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Yh(i,t,e,n,r,s,o){let a=Rc.distanceSqToPoint(i);if(a<e){let l=new H;Rc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ts=class extends rn{constructor(t=[],e=Ii,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ai=class extends rn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ei=class extends rn{constructor(t,e,n=Fn,r,s,o,a=Xe,l=Xe,c,u=Gn,h=1){if(u!==Gn&&u!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ga=class extends Ei{constructor(t,e=Fn,n=Ii,r,s,o=Xe,a=Xe,l,c=Gn){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Es=class extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Hr=class i extends Zt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,r,o,2),m("x","z","y",1,-1,t,n,-e,r,o,3),m("x","y","z",1,-1,t,e,n,r,s,4),m("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(h,2));function m(x,g,p,_,y,v,M,T,C,b,S){let w=v/C,R=M/b,A=v/2,I=M/2,E=T/2,L=C+1,F=b+1,D=0,k=0,O=new H;for(let B=0;B<F;B++){let V=B*R-I;for(let et=0;et<L;et++){let G=et*w-A;O[x]=G*_,O[g]=V*y,O[p]=E,c.push(O.x,O.y,O.z),O[x]=0,O[g]=0,O[p]=T>0?1:-1,u.push(O.x,O.y,O.z),h.push(et/C),h.push(1-B/b),D+=1}}for(let B=0;B<b;B++)for(let V=0;V<C;V++){let et=f+V+L*B,G=f+V+L*(B+1),K=f+(V+1)+L*(B+1),ot=f+(V+1)+L*B;l.push(et,G,ot),l.push(G,K,ot),k+=6}a.addGroup(d,k,S),d+=k,f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var As=class i extends Zt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new H,u=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function S0(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Hf(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=R0(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let u=a,h=l;for(let f=e;f<r;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>h&&(h=m)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Rs(s,o,e,a,l,c,0),o}function Hf(i,t,e,n,r){let s;if(r===k0(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=qh(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=qh(o/n|0,i[o],i[o+1],s);return s&&Wr(s,s.next)&&(Ps(s),s=s.next),s}function er(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Wr(e,e.next)||Re(e.prev,e,e.next)===0)){if(Ps(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Rs(i,t,e,n,r,s,o){if(!i)return;!o&&s&&F0(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?T0(i,n,r,s):w0(i)){t.push(l.i,i.i,c.i),Ps(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=E0(er(i),t),Rs(i,t,e,n,r,s,2)):o===2&&A0(i,t,e,n,r,s):Rs(er(i),t,e,n,r,s,1);break}}}function w0(i){let t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&gs(r,a,s,l,o,c,m.x,m.y)&&Re(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function T0(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Re(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=Math.min(a,l,c),m=Math.min(u,h,f),x=Math.max(a,l,c),g=Math.max(u,h,f),p=Cc(d,m,t,e,n),_=Cc(x,g,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&gs(a,u,l,h,c,f,y.x,y.y)&&Re(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&gs(a,u,l,h,c,f,v.x,v.y)&&Re(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&gs(a,u,l,h,c,f,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&gs(a,u,l,h,c,f,v.x,v.y)&&Re(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function E0(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Wr(n,r)&&Xf(n,e,e.next,r)&&Cs(n,r)&&Cs(r,n)&&(t.push(n.i,e.i,r.i),Ps(e),Ps(e.next),e=i=r),e=e.next}while(e!==i);return er(e)}function A0(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&U0(o,a)){let l=Yf(o,a);o=er(o,o.next),l=er(l,l.next),Rs(o,t,e,n,r,s,0),Rs(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function R0(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Hf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(N0(c))}r.sort(C0);for(let s=0;s<r.length;s++)e=P0(r[s],e);return e}function C0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function P0(i,t){let e=I0(i,t);if(!e)return t;let n=Yf(e,i);return er(n,n.next),er(e,e.next)}function I0(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Wr(i,e))return e;do{if(Wr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Wf(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let h=Math.abs(r-e.y)/(n-e.x);Cs(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&L0(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function L0(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function F0(i,t,e,n){let r=i;do r.z===0&&(r.z=Cc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,D0(r)}function D0(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Cc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function N0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wf(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function gs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Wf(i,t,e,n,r,s,o,a)}function U0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!O0(i,t)&&(Cs(i,t)&&Cs(t,i)&&B0(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||Wr(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Wr(i,t){return i.x===t.x&&i.y===t.y}function Xf(i,t,e,n){let r=qo(Re(i,t,e)),s=qo(Re(i,t,n)),o=qo(Re(e,n,i)),a=qo(Re(e,n,t));return!!(r!==s&&o!==a||r===0&&Yo(i,e,t)||s===0&&Yo(i,n,t)||o===0&&Yo(e,i,n)||a===0&&Yo(e,t,n))}function Yo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qo(i){return i>0?1:i<0?-1:0}function O0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Cs(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function B0(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Yf(i,t){let e=Pc(i.i,i.x,i.y),n=Pc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function qh(i,t,e,n){let r=Pc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ps(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function k0(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Ic=class{static triangulate(t,e,n=2){return S0(t,e,n)}},Is=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];$h(t),Zh(n,t);let o=t.length;e.forEach($h);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Zh(n,e[l]);let a=Ic.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function $h(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var li=class i extends Zt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let _=p*f-o;for(let y=0;y<c;y++){let v=y*h-s;m.push(v,-_,0),x.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let y=_+c*p,v=_+c*(p+1),M=_+1+c*(p+1),T=_+1+c*p;d.push(y,v,T),d.push(v,M,T)}this.setIndex(d),this.setAttribute("position",new zt(m,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ls=class i extends Zt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=t,f=(e-t)/r,d=new H,m=new te;for(let x=0;x<=r;x++){for(let g=0;g<=n;g++){let p=s+g/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}h+=f}for(let x=0;x<r;x++){let g=x*(n+1);for(let p=0;p<n;p++){let _=p+g,y=_,v=_+n+1,M=_+n+2,T=_+1;a.push(y,v,T),a.push(v,M,T)}}this.setIndex(a),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function rr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Kh(r))r.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Kh(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=rr(i[e]);for(let r in n)t[r]=n[r]}return t}function Kh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function z0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function su(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var qf={clone:rr,merge:an},V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=z0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new J().setHex(r.value);break;case"v2":this.uniforms[n].value=new te().fromArray(r.value);break;case"v3":this.uniforms[n].value=new H().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ce().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(r.value);break;case"m4":this.uniforms[n].value=new we().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},xa=class extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ba=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},va=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ir(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Sc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ai=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_a=class extends Ai{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ec:s=t,a=2*e-n;break;case Ac:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:o=t,l=2*n-e;break;case Ac:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(r-e),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,y=(-1-d)*g+(1.5+d)*x+.5*m,v=d*g-d*x;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+_*o[c+M]+y*o[l+M]+v*o[h+M];return s}},ya=class extends Ai{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Ma=class extends Ai{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Sa=class extends Ai{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-e)/(r-e),x=1-m;for(let g=0;g!==a;++g)s[g]=o[c+g]*x+o[l+g]*m;return s}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=d*f+m*2,_=h[p],y=h[p+1],v=t*f+m*2,M=u[v],T=u[v+1],C=W0(n,e,_,M,r);s[m]=$f(C,x,y,T,g)}return s}};function $f(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function H0(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function W0(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=$f(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=H0(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var bn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ir(e,this.TimeBufferType),this.values=Ir(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ir(t.times,Array),values:Ir(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Sc(t.settings)&&(n.settings={inTangents:Ir(t.settings.inTangents,Array),outTangents:Ir(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Sa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case xs:e=this.InterpolantFactoryMethodDiscrete;break;case aa:e=this.InterpolantFactoryMethodLinear;break;case Ko:e=this.InterpolantFactoryMethodSmooth;break;case wc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return Ko;case this.InterpolantFactoryMethodBezier:return wc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Sc(this.settings)&&(Jh(this.settings.inTangents,t),Jh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ht("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&i0(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ko,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let x=e[h+m];if(x!==e[f+m]||x!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Sc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Jh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=aa;var Ri=class extends bn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=xs;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends bn{constructor(t,e,n,r){super(t,e,n,r)}};wa.prototype.ValueTypeName="color";var Ta=class extends bn{constructor(t,e,n,r){super(t,e,n,r)}};Ta.prototype.ValueTypeName="number";var Ea=class extends Ai{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)Wn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Fs=class extends bn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Ea(this.times,this.values,this.getValueSize(),t)}};Fs.prototype.ValueTypeName="quaternion";Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends bn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=xs;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends bn{constructor(t,e,n,r){super(t,e,n,r)}};Aa.prototype.ValueTypeName="vector";var jo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(jh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!jh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function jh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Ra=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zf=new Ra,Xr=class{constructor(t){this.manager=t!==void 0?t:Zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Xr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lr=new WeakMap,Ca=class extends Xr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=jo.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let h=Lr.get(o);h===void 0&&(h=[],Lr.set(o,h)),h.push({onLoad:e,onError:r})}return o}let a=Or("img");function l(){u(),e&&e(this);let h=Lr.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}Lr.delete(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),jo.remove(`image:${t}`);let f=Lr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(h)}Lr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),jo.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var Ds=class extends Xr{constructor(t){super(t)}load(t,e,n,r){let s=new rn,o=new Ca(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var $o=new H,Zo=new Wn,Vn=new H,Ns=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($o,Zo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,Zo,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose($o,Zo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,Zo,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},yi=new H,Qh=new te,tf=new te,nn=class extends Ns{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=la*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ec*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return la*2*Math.atan(Math.tan(ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,Qh,tf),e.subVectors(tf,Qh)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ec*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Xn=class extends Ns{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Fr=-90,Dr=1,Pa=class extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new nn(Fr,Dr,t,e);r.layers=this.layers,this.add(r);let s=new nn(Fr,Dr,t,e);s.layers=this.layers,this.add(s);let o=new nn(Fr,Dr,t,e);o.layers=this.layers,this.add(o);let a=new nn(Fr,Dr,t,e);a.layers=this.layers,this.add(a);let l=new nn(Fr,Dr,t,e);l.layers=this.layers,this.add(l);let c=new nn(Fr,Dr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ia=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ou="\\[\\]\\.:\\/",X0=new RegExp("["+ou+"]","g"),au="[^"+ou+"]",Y0="[^"+ou.replace("\\.","")+"]",q0=/((?:WC+[\/:])*)/.source.replace("WC",au),$0=/(WCOD+)?/.source.replace("WCOD",Y0),Z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",au),K0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",au),J0=new RegExp("^"+q0+$0+Z0+K0+"$"),j0=["material","materials","bones","map"],Lc=class{constructor(t,e,n){let r=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(X0,"")}static parseTrackName(t){let e=J0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);j0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Lc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tS=new Float32Array(1);var ef=new we,Us=class{constructor(t,e,n=0,r=1/0){this.ray=new Qi(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ht("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ef.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ef),this}intersectObject(t,e=!0,n=[]){return Fc(t,this,n,e),n.sort(nf),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Fc(t[r],this,n,e);return n.sort(nf),n}};function nf(i,t){return i.distance-t.distance}function Fc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Fc(s[o],t,e,!0)}}var du=class du{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};du.prototype.isMatrix2=!0;var Dc=du;function lu(i,t,e,n){let r=Q0(n);switch(e){case jc:return i*t;case tu:return i*t/r.components*r.byteLength;case ka:return i*t/r.components*r.byteLength;case Di:return i*t*2/r.components*r.byteLength;case za:return i*t*2/r.components*r.byteLength;case Qc:return i*t*3/r.components*r.byteLength;case Sn:return i*t*4/r.components*r.byteLength;case Va:return i*t*4/r.components*r.byteLength;case Vs:case Gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hs:case Ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Ga:case Wa:return Math.max(i,8)*Math.max(t,8)/2;case Ya:case qa:case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $a:case Xs:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fl:case dl:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ys:case xl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Q0(i){switch(i){case vn:case $c:return{byteLength:1,components:1};case qr:case Zc:case Nn:return{byteLength:2,components:1};case Oa:case Ba:return{byteLength:2,components:4};case Fn:case Ua:case Dn:return{byteLength:4,components:1};case Kc:case Jc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function xd(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function eg(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ig=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,og=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ug=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Tg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Eg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ag=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$g=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ex=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ox=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ix=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ib=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ub=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ab=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Db=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:ng,alphahash_pars_fragment:ig,alphamap_fragment:rg,alphamap_pars_fragment:sg,alphatest_fragment:og,alphatest_pars_fragment:ag,aomap_fragment:lg,aomap_pars_fragment:cg,batching_pars_vertex:ug,batching_vertex:hg,begin_vertex:fg,beginnormal_vertex:dg,bsdfs:pg,iridescence_fragment:mg,bumpmap_pars_fragment:gg,clipping_planes_fragment:xg,clipping_planes_pars_fragment:bg,clipping_planes_pars_vertex:vg,clipping_planes_vertex:_g,color_fragment:yg,color_pars_fragment:Mg,color_pars_vertex:Sg,color_vertex:wg,common:Tg,cube_uv_reflection_fragment:Eg,defaultnormal_vertex:Ag,displacementmap_pars_vertex:Rg,displacementmap_vertex:Cg,emissivemap_fragment:Pg,emissivemap_pars_fragment:Ig,colorspace_fragment:Lg,colorspace_pars_fragment:Fg,envmap_fragment:Dg,envmap_common_pars_fragment:Ng,envmap_pars_fragment:Ug,envmap_pars_vertex:Og,envmap_physical_pars_fragment:$g,envmap_vertex:Bg,fog_vertex:kg,fog_pars_vertex:zg,fog_fragment:Vg,fog_pars_fragment:Gg,gradientmap_pars_fragment:Hg,lightmap_pars_fragment:Wg,lights_lambert_fragment:Xg,lights_lambert_pars_fragment:Yg,lights_pars_begin:qg,lights_toon_fragment:Zg,lights_toon_pars_fragment:Kg,lights_phong_fragment:Jg,lights_phong_pars_fragment:jg,lights_physical_fragment:Qg,lights_physical_pars_fragment:tx,lights_fragment_begin:ex,lights_fragment_maps:nx,lights_fragment_end:ix,lightprobes_pars_fragment:rx,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:ox,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:lx,map_fragment:cx,map_pars_fragment:ux,map_particle_fragment:hx,map_particle_pars_fragment:fx,metalnessmap_fragment:dx,metalnessmap_pars_fragment:px,morphinstance_vertex:mx,morphcolor_vertex:gx,morphnormal_vertex:xx,morphtarget_pars_vertex:bx,morphtarget_vertex:vx,normal_fragment_begin:_x,normal_fragment_maps:yx,normal_pars_fragment:Mx,normal_pars_vertex:Sx,normal_vertex:wx,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:Ex,clearcoat_normal_fragment_maps:Ax,clearcoat_pars_fragment:Rx,iridescence_pars_fragment:Cx,opaque_fragment:Px,packing:Ix,premultiplied_alpha_fragment:Lx,project_vertex:Fx,dithering_fragment:Dx,dithering_pars_fragment:Nx,roughnessmap_fragment:Ux,roughnessmap_pars_fragment:Ox,shadowmap_pars_fragment:Bx,shadowmap_pars_vertex:kx,shadowmap_vertex:zx,shadowmask_pars_fragment:Vx,skinbase_vertex:Gx,skinning_pars_vertex:Hx,skinning_vertex:Wx,skinnormal_vertex:Xx,specularmap_fragment:Yx,specularmap_pars_fragment:qx,tonemapping_fragment:$x,tonemapping_pars_fragment:Zx,transmission_fragment:Kx,transmission_pars_fragment:Jx,uv_pars_fragment:jx,uv_pars_vertex:Qx,uv_vertex:tb,worldpos_vertex:eb,background_vert:nb,background_frag:ib,backgroundCube_vert:rb,backgroundCube_frag:sb,cube_vert:ob,cube_frag:ab,depth_vert:lb,depth_frag:cb,distance_vert:ub,distance_frag:hb,equirect_vert:fb,equirect_frag:db,linedashed_vert:pb,linedashed_frag:mb,meshbasic_vert:gb,meshbasic_frag:xb,meshlambert_vert:bb,meshlambert_frag:vb,meshmatcap_vert:_b,meshmatcap_frag:yb,meshnormal_vert:Mb,meshnormal_frag:Sb,meshphong_vert:wb,meshphong_frag:Tb,meshphysical_vert:Eb,meshphysical_frag:Ab,meshtoon_vert:Rb,meshtoon_frag:Cb,points_vert:Pb,points_frag:Ib,shadow_vert:Lb,shadow_frag:Fb,sprite_vert:Db,sprite_frag:Nb},Mt={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Zn={basic:{uniforms:an([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:an([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new J(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:an([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:an([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:an([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new J(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:an([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:an([Mt.points,Mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:an([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:an([Mt.common,Mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:an([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:an([Mt.sprite,Mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:an([Mt.common,Mt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:an([Mt.lights,Mt.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Zn.physical={uniforms:an([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var _l={r:0,b:0,g:0},Ub=new we,bd=new $t;bd.set(-1,0,0,0,1,0,0,0,1);function Ob(i,t,e,n,r,s){let o=new J(0),a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let v=_.backgroundBlurriness>0;y=t.get(y,v)}return y}function m(_){let y=!1,v=d(_);v===null?g(o,a):v&&v.isColor&&(g(v,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,y){let v=d(y);v&&(v.isCubeTexture||v.mapping===ks)?(c===void 0&&(c=new kt(new Hr(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:rr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ub.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bd),c.material.toneMapped=oe.getTransfer(v.colorSpace)!==me,(u!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new kt(new li(2,2),new on({name:"BackgroundMaterial",uniforms:rr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,y){_.getRGB(_l,su(i)),e.buffers.color.setClear(_l.r,_l.g,_l.b,y,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Bb(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(R,A,I,E,L){let F=!1,D=h(R,E,I,A);s!==D&&(s=D,c(s.object)),F=d(R,E,I,L),F&&m(R,E,I,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(R,A,I,E),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function h(R,A,I,E){let L=E.wireframe===!0,F=n[A.id];F===void 0&&(F={},n[A.id]=F);let D=R.isInstancedMesh===!0?R.id:0,k=F[D];k===void 0&&(k={},F[D]=k);let O=k[I.id];O===void 0&&(O={},k[I.id]=O);let B=O[L];return B===void 0&&(B=f(l()),O[L]=B),B}function f(R){let A=[],I=[],E=[];for(let L=0;L<e;L++)A[L]=0,I[L]=0,E[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:E,object:R,attributes:{},index:null}}function d(R,A,I,E){let L=s.attributes,F=A.attributes,D=0,k=I.getAttributes();for(let O in k)if(k[O].location>=0){let V=L[O],et=F[O];if(et===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(et=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(et=R.instanceColor)),V===void 0||V.attribute!==et||et&&V.data!==et.data)return!0;D++}return s.attributesNum!==D||s.index!==E}function m(R,A,I,E){let L={},F=A.attributes,D=0,k=I.getAttributes();for(let O in k)if(k[O].location>=0){let V=F[O];V===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(V=R.instanceColor));let et={};et.attribute=V,V&&V.data&&(et.data=V.data),L[O]=et,D++}s.attributes=L,s.attributesNum=D,s.index=E}function x(){let R=s.newAttributes;for(let A=0,I=R.length;A<I;A++)R[A]=0}function g(R){p(R,0)}function p(R,A){let I=s.newAttributes,E=s.enabledAttributes,L=s.attributeDivisors;I[R]=1,E[R]===0&&(i.enableVertexAttribArray(R),E[R]=1),L[R]!==A&&(i.vertexAttribDivisor(R,A),L[R]=A)}function _(){let R=s.newAttributes,A=s.enabledAttributes;for(let I=0,E=A.length;I<E;I++)A[I]!==R[I]&&(i.disableVertexAttribArray(I),A[I]=0)}function y(R,A,I,E,L,F,D){D===!0?i.vertexAttribIPointer(R,A,I,L,F):i.vertexAttribPointer(R,A,I,E,L,F)}function v(R,A,I,E){x();let L=E.attributes,F=I.getAttributes(),D=A.defaultAttributeValues;for(let k in F){let O=F[k];if(O.location>=0){let B=L[k];if(B===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(B=R.instanceColor)),B!==void 0){let V=B.normalized,et=B.itemSize,G=t.get(B);if(G===void 0)continue;let K=G.buffer,ot=G.type,dt=G.bytesPerElement,$=ot===i.INT||ot===i.UNSIGNED_INT||B.gpuType===Ua;if(B.isInterleavedBufferAttribute){let X=B.data,it=X.stride,at=B.offset;if(X.isInstancedInterleavedBuffer){for(let ct=0;ct<O.locationSize;ct++)p(O.location+ct,X.meshPerAttribute);R.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ct=0;ct<O.locationSize;ct++)g(O.location+ct);i.bindBuffer(i.ARRAY_BUFFER,K);for(let ct=0;ct<O.locationSize;ct++)y(O.location+ct,et/O.locationSize,ot,V,it*dt,(at+et/O.locationSize*ct)*dt,$)}else{if(B.isInstancedBufferAttribute){for(let X=0;X<O.locationSize;X++)p(O.location+X,B.meshPerAttribute);R.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let X=0;X<O.locationSize;X++)g(O.location+X);i.bindBuffer(i.ARRAY_BUFFER,K);for(let X=0;X<O.locationSize;X++)y(O.location+X,et/O.locationSize,ot,V,et*dt,et/O.locationSize*X*dt,$)}}else if(D!==void 0){let V=D[k];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(O.location,V);break;case 3:i.vertexAttrib3fv(O.location,V);break;case 4:i.vertexAttrib4fv(O.location,V);break;default:i.vertexAttrib1fv(O.location,V)}}}}_()}function M(){S();for(let R in n){let A=n[R];for(let I in A){let E=A[I];for(let L in E){let F=E[L];for(let D in F)u(F[D].object),delete F[D];delete E[L]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;let A=n[R.id];for(let I in A){let E=A[I];for(let L in E){let F=E[L];for(let D in F)u(F[D].object),delete F[D];delete E[L]}}delete n[R.id]}function C(R){for(let A in n){let I=n[A];for(let E in I){let L=I[E];if(L[R.id]===void 0)continue;let F=L[R.id];for(let D in F)u(F[D].object),delete F[D];delete L[R.id]}}}function b(R){for(let A in n){let I=n[A],E=R.isInstancedMesh===!0?R.id:0,L=I[E];if(L!==void 0){for(let F in L){let D=L[F];for(let k in D)u(D[k].object),delete D[k];delete L[F]}delete I[E],Object.keys(I).length===0&&delete n[A]}}}function S(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:w,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function kb(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function zb(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let b=C===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==vn&&C!==Dn&&!b&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Gt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,maxSamples:M,samples:T}}function Vb(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Pn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{let _=s?0:n,y=_*4,v=p.clippingState||null;l.value=v,v=u(m,f,y,d);for(let M=0;M!==y;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=d;y!==x;++y,v+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Kr=4,Gb=6,Hb=20,Wb=256,$s=new Xn,Kf=new J,pu=null,mu=0,gu=0,xu=!1,Xb=new H,sr=new H,Ml=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=Xb}=s;pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(pu,mu,gu),this._renderer.xr.enabled=xu,t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Nn,format:Sn,colorSpace:bs,depthBuffer:!1},r=Jf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jf(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yb(s)),this._blurMaterial=$b(s,t,e),this._ggxMaterial=qb(s,t,e)}return r}_compileMaterial(t){let e=new kt(new Zt,t);this._renderer.compile(e,$s)}_sceneToCubeUV(t,e,n,r,s){let l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Kf),h.toneMapping=Ln,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kt(new Hr,new ie({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,_=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,p=!0):(g.color.copy(Kf),p=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));let M=this._cubeSize;Zr(r,v*M,y>2?M:0,M,M),h.setRenderTarget(r),p&&h.render(x,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Ii||t.mapping===ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Zr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$s)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Kr?n-m+Kr:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Zr(s,g,p,3*x,2*x),r.setRenderTarget(s),r.render(a,$s),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Zr(t,g,p,3*x,2*x),r.setRenderTarget(t),r.render(a,$s)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-Kr?r-this._lodMax+Kr:0),f=4*(this._cubeSize-u);Zr(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(l,$s)}};function Yb(i){let t=[],e=[],n=i,r=i-Kr+1+Gb;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,m=new Float32Array(d*f*h),x=new Float32Array(d*f*h);for(let p=0;p<h;p++){let _=p%3*2/3-1,y=p>2?0:-1,v=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];m.set(v,d*f*p);for(let M=0;M<f;M++){let T=u[M*2]*2-1,C=u[M*2+1]*2-1;p===0?sr.set(1,C,T):p===1?sr.set(-T,1,-C):p===2?sr.set(-T,C,1):p===3?sr.set(-1,C,-T):p===4?sr.set(-T,-1,C):sr.set(T,C,-1),sr.toArray(x,(p*f+M)*d)}}let g=new Zt;g.setAttribute("position",new Mn(m,d)),g.setAttribute("outputDirection",new Mn(x,d)),e.push(new kt(g,null)),n>Kr&&n--}return{lodMeshes:e,sizeLods:t}}function Jf(i,t,e){let n=new sn(i,t,e);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function qb(i,t,e){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function $b(i,t,e){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:Hb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function jf(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Qf(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function wl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Sl=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ts(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Hr(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:qn});s.uniforms.tEquirect.value=e;let o=new kt(r,s),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=Ze),new Pa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function Zb(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===Fa||d===Da)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new Sl(m.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===Fa||d===Da,x=d===Ii||d===ir;if(m||x){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Ml(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let _=f.image;return m&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Ml(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===Fa?f.mapping=Ii:d===Da&&(f.mapping=ir),f}function l(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function Kb(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Ki("WebGLRenderer: "+n+" extension not supported."),r}}}function Jb(i,t,e,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let y=0,v=_.length;y<v;y+=3){let M=_[y+0],T=_[y+1],C=_[y+2];f.push(M,T,T,C,C,M)}}else{let _=m.array;x=m.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let M=y+0,T=y+1,C=y+2;f.push(M,T,T,C,C,M)}}let g=new(m.count>=65535?ji:Ss)(f,1);g.version=x;let p=s.get(h);p&&t.remove(p),s.set(h,g)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function jb(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),e.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,h*o,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Qb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function tv(i,t,e){let n=new WeakMap,r=new Ce;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;d===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*M*4*h),C=new ys(T,v,M,h);C.type=Dn,C.needsUpdate=!0;let b=y*4;for(let w=0;w<h;w++){let R=g[w],A=p[w],I=_[w],E=v*M*4*w;for(let L=0;L<R.count;L++){let F=L*b;d===!0&&(r.fromBufferAttribute(R,L),T[E+F+0]=r.x,T[E+F+1]=r.y,T[E+F+2]=r.z,T[E+F+3]=0),m===!0&&(r.fromBufferAttribute(A,L),T[E+F+4]=r.x,T[E+F+5]=r.y,T[E+F+6]=r.z,T[E+F+7]=0),x===!0&&(r.fromBufferAttribute(I,L),T[E+F+8]=r.x,T[E+F+9]=r.y,T[E+F+10]=r.z,T[E+F+11]=I.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new te(v,M)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function ev(i,t,e,n,r){let s=new WeakMap;function o(c){let u=r.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var nv={[zc]:"LINEAR_TONE_MAPPING",[Vc]:"REINHARD_TONE_MAPPING",[Gc]:"CINEON_TONE_MAPPING",[Hc]:"ACES_FILMIC_TONE_MAPPING",[Xc]:"AGX_TONE_MAPPING",[Yc]:"NEUTRAL_TONE_MAPPING",[Wc]:"CUSTOM_TONE_MAPPING"};function iv(i,t,e,n,r,s){let o=new sn(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Zt;c.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new zt([0,2,0,0,2,0],2));let u=new xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new kt(c,u),f=new Xn(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,_=[],y=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let T=0;T<_.length;T++){let C=_[T];C.setSize&&C.setSize(v,M)}},this.setEffects=function(v){_=v,y=_.length>0&&_[0].isRenderPass===!0;let M=o.width,T=o.height;_.length>0&&a===null&&(a=new sn(M,T,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),l=new sn(M,T,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let b=_[C];b.setSize&&b.setSize(M,T)}},this.begin=function(v,M){if(x||v.toneMapping===Ln&&_.length===0)return!1;if(p=M,M!==null){let T=M.width,C=M.height;(o.width!==T||o.height!==C)&&this.setSize(T,C)}return y===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Ln,!0},this.hasRenderPass=function(){return y},this.end=function(v,M){v.toneMapping=g,x=!0;let T=o,C=a;for(let b=0;b<_.length;b++){let S=_[b];S.enabled!==!1&&(S.render(v,C,T,M),S.needsSwap!==!1&&(T=C,C=C===a?l:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,u.defines={},oe.getTransfer(d)===me&&(u.defines.SRGB_TRANSFER="");let b=nv[m];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(p),v.render(h,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var vd=new rn,_u=new Ei(1,1),_d=new ys,yd=new ha,Md=new Ts,td=[],ed=[],nd=new Float32Array(16),id=new Float32Array(9),rd=new Float32Array(4);function jr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=td[r];if(s===void 0&&(s=new Float32Array(r),td[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tl(i,t){let e=ed[t];e===void 0&&(e=new Int32Array(t),ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function ov(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function lv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;rd.set(n),i.uniformMatrix2fv(this.addr,!1,rd),Ve(e,n)}}function cv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),Ve(e,n)}}function uv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),Ve(e,n)}}function hv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function dv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function mv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function xv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function bv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function vv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(_u.compareFunction=e.isReversedDepthBuffer()?vl:bl,s=_u):s=vd,e.setTexture2D(t||s,r)}function _v(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||yd,r)}function yv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Md,r)}function Mv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||_d,r)}function Sv(i){switch(i){case 5126:return rv;case 35664:return sv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return fv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return xv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Mv}}function wv(i,t){i.uniform1fv(this.addr,t)}function Tv(i,t){let e=jr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ev(i,t){let e=jr(t,this.size,3);i.uniform3fv(this.addr,e)}function Av(i,t){let e=jr(t,this.size,4);i.uniform4fv(this.addr,e)}function Rv(i,t){let e=jr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cv(i,t){let e=jr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pv(i,t){let e=jr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Iv(i,t){i.uniform1iv(this.addr,t)}function Lv(i,t){i.uniform2iv(this.addr,t)}function Fv(i,t){i.uniform3iv(this.addr,t)}function Dv(i,t){i.uniform4iv(this.addr,t)}function Nv(i,t){i.uniform1uiv(this.addr,t)}function Uv(i,t){i.uniform2uiv(this.addr,t)}function Ov(i,t){i.uniform3uiv(this.addr,t)}function Bv(i,t){i.uniform4uiv(this.addr,t)}function kv(i,t,e){let n=this.cache,r=t.length,s=Tl(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=_u:o=vd;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function zv(i,t,e){let n=this.cache,r=t.length,s=Tl(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||yd,s[o])}function Vv(i,t,e){let n=this.cache,r=t.length,s=Tl(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Md,s[o])}function Gv(i,t,e){let n=this.cache,r=t.length,s=Tl(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||_d,s[o])}function Hv(i){switch(i){case 5126:return wv;case 35664:return Tv;case 35665:return Ev;case 35666:return Av;case 35674:return Rv;case 35675:return Cv;case 35676:return Pv;case 5124:case 35670:return Iv;case 35667:case 35671:return Lv;case 35668:case 35672:return Fv;case 35669:case 35673:return Dv;case 5125:return Nv;case 36294:return Uv;case 36295:return Ov;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Gv}}var yu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sv(e.type)}},Mu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hv(e.type)}},Su=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},bu=/(\w+)(\])?(\[|\.)?/g;function sd(i,t){i.seq.push(t),i.map[t.id]=t}function Wv(i,t,e){let n=i.name,r=n.length;for(bu.lastIndex=0;;){let s=bu.exec(n),o=bu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){sd(e,c===void 0?new yu(a,i,t):new Mu(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Su(a),sd(e,h)),e=h}}}var Jr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Wv(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function od(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Xv=37297,Yv=0;function qv(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ad=new $t;function $v(i){oe._getMatrix(ad,oe.workingColorSpace,i);let t=`mat3( ${ad.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case vs:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ld(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+qv(i.getShaderSource(t),a)}else return s}function Zv(i,t){let e=$v(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Kv={[zc]:"Linear",[Vc]:"Reinhard",[Gc]:"Cineon",[Hc]:"ACESFilmic",[Xc]:"AgX",[Yc]:"Neutral",[Wc]:"Custom"};function Jv(i,t){let e=Kv[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yl=new H;function jv(){oe.getLuminanceCoefficients(yl);let i=yl.x.toFixed(4),t=yl.y.toFixed(4),e=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function t_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function e_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ks(i){return i!==""}function cd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ud(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var n_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(i){return i.replace(n_,r_)}var i_=new Map;function r_(i,t){let e=Qt[t];if(e===void 0){let n=i_.get(t);if(n!==void 0)e=Qt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return wu(e)}var s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(i){return i.replace(s_,o_)}function o_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var a_={[Os]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function l_(i){return a_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var c_={[Ii]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE_UV"};function u_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":c_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var h_={[ir]:"ENVMAP_MODE_REFRACTION"};function f_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":h_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var d_={[kc]:"ENVMAP_BLENDING_MULTIPLY",[Tf]:"ENVMAP_BLENDING_MIX",[Ef]:"ENVMAP_BLENDING_ADD"};function p_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":d_[i.combine]||"ENVMAP_BLENDING_NONE"}function m_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function g_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=l_(e),c=u_(e),u=f_(e),h=p_(e),f=m_(e),d=Qv(e),m=t_(s),x=r.createProgram(),g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ks).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(g=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Jv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Zv("linearToOutputTexel",e.outputColorSpace),jv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),o=wu(o),o=cd(o,e),o=ud(o,e),a=wu(a),a=cd(a,e),a=ud(a,e),o=hd(o),a=hd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=_+g+o,v=_+p+a,M=od(r,r.VERTEX_SHADER,y),T=od(r,r.FRAGMENT_SHADER,v);r.attachShader(x,M),r.attachShader(x,T),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(R){if(i.debug.checkShaderErrors){let A=r.getProgramInfoLog(x)||"",I=r.getShaderInfoLog(M)||"",E=r.getShaderInfoLog(T)||"",L=A.trim(),F=I.trim(),D=E.trim(),k=!0,O=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,M,T);else{let B=ld(r,M,"vertex"),V=ld(r,T,"fragment");Ht("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+B+`
`+V)}else L!==""?Gt("WebGLProgram: Program Info Log:",L):(F===""||D==="")&&(O=!1);O&&(R.diagnostics={runnable:k,programLog:L,vertexShader:{log:F,prefix:g},fragmentShader:{log:D,prefix:p}})}r.deleteShader(M),r.deleteShader(T),b=new Jr(r,x),S=e_(r,x)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(x,Xv)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=T,this}var x_=0,Tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Eu(t),e.set(t,n)),n}},Eu=class{constructor(t){this.id=x_++,this.code=t,this.usedTimes=0}};function b_(i){return i===Di||i===Xs||i===Ys}function v_(i,t,e,n,r,s){let o=new zr,a=new Tu,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,S,w,R,A,I){let E=R.fog,L=A.geometry,F=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?R.environment:null,D=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,k=t.get(b.envMap||F,D),O=k&&k.mapping===ks?k.image.height:null,B=d[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&Gt("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let V=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,et=V!==void 0?V.length:0,G=0;L.morphAttributes.position!==void 0&&(G=1),L.morphAttributes.normal!==void 0&&(G=2),L.morphAttributes.color!==void 0&&(G=3);let K,ot,dt,$;if(B){let ve=Zn[B];K=ve.vertexShader,ot=ve.fragmentShader}else{K=b.vertexShader,ot=b.fragmentShader;let ve=a.getVertexShaderStage(b),de=a.getFragmentShaderStage(b);a.update(b,ve,de),dt=ve.id,$=de.id}let X=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),at=A.isInstancedMesh===!0,ct=A.isBatchedMesh===!0,gt=!!b.map,Ot=!!b.matcap,Rt=!!k,Wt=!!b.aoMap,se=!!b.lightMap,qt=!!b.bumpMap&&b.wireframe===!1,Se=!!b.normalMap,He=!!b.displacementMap,fn=!!b.emissiveMap,Ae=!!b.metalnessMap,Ue=!!b.roughnessMap,q=b.anisotropy>0,je=b.clearcoat>0,ge=b.dispersion>0,z=b.retroreflectivity>0,P=b.iridescence>0,Z=b.sheen>0,tt=b.transmission>0,rt=q&&!!b.anisotropyMap,pt=je&&!!b.clearcoatMap,mt=je&&!!b.clearcoatNormalMap,st=je&&!!b.clearcoatRoughnessMap,ut=P&&!!b.iridescenceMap,xt=P&&!!b.iridescenceThicknessMap,Ft=Z&&!!b.sheenColorMap,yt=Z&&!!b.sheenRoughnessMap,bt=!!b.specularMap,Dt=!!b.specularColorMap,Vt=!!b.specularIntensityMap,Jt=tt&&!!b.transmissionMap,Y=tt&&!!b.thicknessMap,vt=!!b.gradientMap,lt=!!b.alphaMap,_t=b.alphaTest>0,Tt=!!b.alphaHash,ht=!!b.extensions,Nt=Ln;b.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let It={shaderID:B,shaderType:b.type,shaderName:b.name,vertexShader:K,fragmentShader:ot,defines:b.defines,customVertexShaderID:dt,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ct,batchingColor:ct&&A._colorsTexture!==null,instancing:at,instancingColor:at&&A.instanceColor!==null,instancingMorph:at&&A.morphTexture!==null,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:gt,matcap:Ot,envMap:Rt,envMapMode:Rt&&k.mapping,envMapCubeUVHeight:O,aoMap:Wt,lightMap:se,bumpMap:qt,normalMap:Se,displacementMap:He,emissiveMap:fn,normalMapObjectSpace:Se&&b.normalMapType===Cf,normalMapTangentSpace:Se&&b.normalMapType===eu,packedNormalMap:Se&&b.normalMapType===eu&&b_(b.normalMap.format),metalnessMap:Ae,roughnessMap:Ue,anisotropy:q,anisotropyMap:rt,clearcoat:je,clearcoatMap:pt,clearcoatNormalMap:mt,clearcoatRoughnessMap:st,dispersion:ge,retroreflection:z,iridescence:P,iridescenceMap:ut,iridescenceThicknessMap:xt,sheen:Z,sheenColorMap:Ft,sheenRoughnessMap:yt,specularMap:bt,specularColorMap:Dt,specularIntensityMap:Vt,transmission:tt,transmissionMap:Jt,thicknessMap:Y,gradientMap:vt,opaque:b.transparent===!1&&b.blending===Pi&&b.alphaToCoverage===!1,alphaMap:lt,alphaTest:_t,alphaHash:Tt,combine:b.combine,mapUv:gt&&m(b.map.channel),aoMapUv:Wt&&m(b.aoMap.channel),lightMapUv:se&&m(b.lightMap.channel),bumpMapUv:qt&&m(b.bumpMap.channel),normalMapUv:Se&&m(b.normalMap.channel),displacementMapUv:He&&m(b.displacementMap.channel),emissiveMapUv:fn&&m(b.emissiveMap.channel),metalnessMapUv:Ae&&m(b.metalnessMap.channel),roughnessMapUv:Ue&&m(b.roughnessMap.channel),anisotropyMapUv:rt&&m(b.anisotropyMap.channel),clearcoatMapUv:pt&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:mt&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:yt&&m(b.sheenRoughnessMap.channel),specularMapUv:bt&&m(b.specularMap.channel),specularColorMapUv:Dt&&m(b.specularColorMap.channel),specularIntensityMapUv:Vt&&m(b.specularIntensityMap.channel),transmissionMapUv:Jt&&m(b.transmissionMap.channel),thicknessMapUv:Y&&m(b.thicknessMap.channel),alphaMapUv:lt&&m(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Se||q),vertexNormals:!!L.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!L.attributes.uv&&(gt||lt),fog:!!E,useFog:b.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||L.attributes.normal===void 0&&Se===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:it,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:G,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:gt&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===me,decodeVideoTextureEmissive:fn&&b.emissiveMap.isVideoTexture===!0&&oe.getTransfer(b.emissiveMap.colorSpace)===me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fe,flipSided:b.side===Je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ht&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&b.extensions.multiDraw===!0||ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function g(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let w in b.defines)S.push(w),S.push(b.defines[w]);return b.isRawShaderMaterial===!1&&(p(S,b),_(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function p(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numSunLights),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numSunLightShadows),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function y(b){let S=d[b.type],w;if(S){let R=Zn[S];w=qf.clone(R.uniforms)}else w=b.uniforms;return w}function v(b,S){let w=u.get(S);return w!==void 0?++w.usedTimes:(w=new g_(i,S,b,r),c.push(w),u.set(S,w)),w}function M(b){if(--b.usedTimes===0){let S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function T(b){a.remove(b)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:y,acquireProgram:v,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:C}}function __(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function y_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function dd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pd(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,g,p){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},i[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.materialVariant=o(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=g,_.group=p),t++,_}function l(f,d,m,x,g,p,_){_.reversedDepth===!0&&(g=-g);let y=a(f,d,m,x,g,p);m.transmission>0?n.push(y):m.transparent===!0?r.push(y):e.push(y)}function c(f,d,m,x,g,p){let _=a(f,d,m,x,g,p);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function u(f,d){e.length>1&&e.sort(f||y_),n.length>1&&n.sort(d||dd),r.length>1&&r.sort(d||dd)}function h(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function M_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new pd,i.set(n,[o])):r>=s.length?(o=new pd,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function S_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new J};break;case"SpotLight":e={position:new H,direction:new H,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new J,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new J,groundColor:new J};break;case"RectAreaLight":e={color:new J,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function w_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var T_=0;function E_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function A_(i){let t=new S_,e=w_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let r=new H,s=new we,o=new we;function a(c){let u=0,h=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,_=0,y=0,v=0,M=0,T=0,C=0,b=0,S=0,w=0;c.sort(E_);for(let A=0,I=c.length;A<I;A++){let E=c[A],L=E.color,F=E.intensity,D=E.distance,k=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Di?k=E.shadow.map.texture:k=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=L.r*F,h+=L.g*F,f+=L.b*F;else if(E.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(E.sh.coefficients[O],F);w++}else if(E.isSunLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let B=E.shadow,V=e.get(E);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[m]=V,n.sunShadowMap[m]=k;let et=B.getViewportCount();for(let G=0;G<et;G++)n.sunShadowMatrix[x+G]=B.getMatrix(G),n.sunShadowCascade[x+G]=B._cascadeData[G];x+=et,m++}n.sun[d]=O,d++}else if(E.isDirectionalLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let B=E.shadow,V=e.get(E);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=k,n.directionalShadowMatrix[g]=E.shadow.matrix,M++}n.directional[g]=O,g++}else if(E.isSpotLight){let O=t.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(L).multiplyScalar(F),O.distance=D,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,n.spot[_]=O;let B=E.shadow;if(E.map&&(n.spotLightMap[b]=E.map,b++,B.updateMatrices(E),E.castShadow&&S++),n.spotLightMatrix[_]=B.matrix,E.castShadow){let V=e.get(E);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=k,C++}_++}else if(E.isRectAreaLight){let O=t.get(E);O.color.copy(L).multiplyScalar(F),O.halfWidth.set(E.width*.5,0,0),O.halfHeight.set(0,E.height*.5,0),n.rectArea[y]=O,y++}else if(E.isPointLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),O.distance=E.distance,O.decay=E.decay,E.castShadow){let B=E.shadow,V=e.get(E);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,V.shadowCameraNear=B.camera.near,V.shadowCameraFar=B.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=E.shadow.matrix,T++}n.point[p]=O,p++}else if(E.isHemisphereLight){let O=t.get(E);O.skyColor.copy(E.color).multiplyScalar(F),O.groundColor.copy(E.groundColor).multiplyScalar(F),n.hemi[v]=O,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let R=n.hash;(R.sunLength!==d||R.directionalLength!==g||R.pointLength!==p||R.spotLength!==_||R.rectAreaLength!==y||R.hemiLength!==v||R.numSunShadows!==m||R.numDirectionalShadows!==M||R.numPointShadows!==T||R.numSpotShadows!==C||R.numSpotMaps!==b||R.numLightProbes!==w)&&(n.sun.length=d,n.directional.length=g,n.spot.length=_,n.rectArea.length=y,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,R.sunLength=d,R.directionalLength=g,R.pointLength=p,R.spotLength=_,R.rectAreaLength=y,R.hemiLength=v,R.numSunShadows=m,R.numDirectionalShadows=M,R.numPointShadows=T,R.numSpotShadows=C,R.numSpotMaps=b,R.numLightProbes=w,n.version=T_++)}function l(c,u){let h=0,f=0,d=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let v=c[_];if(v.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),h++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function md(i){let t=new A_(i),e=[],n=[],r=[];function s(f){h.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function R_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new md(i),t.set(r,[a])):s>=o.length?(a=new md(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,I_=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],L_=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],gd=new we,Zs=new H,vu=new H;function F_(i,t,e){let n=new ws,r=new te,s=new te,o=new Ce,a=new ba,l=new va,c={},u=e.maxTextureSize,h={[Yn]:Je,[Je]:Yn,[fe]:fe},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:C_,fragmentShader:P_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Zt;m.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new kt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Os;let p=this.type;this.render=function(T,C,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===of&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Os);let S=i.getRenderTarget(),w=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),A=i.state;A.setBlending(qn),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let I=p!==this.type;I&&C.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(L=>L.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,L=T.length;E<L;E++){let F=T[E],D=F.shadow;if(D===void 0){Gt("WebGLShadowMap:",F,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);let k=D.getFrameExtents();r.multiply(k),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,D.mapSize.y=s.y));let O=i.state.buffers.depth.getReversed();if(D.camera._reversedDepth=O,D.map===null||I===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Yr){if(F.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new sn(r.x,r.y,{format:Di,type:Nn,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),D.map.texture.name=F.name+".shadowMap",D.map.depthTexture=new Ei(r.x,r.y,Dn),D.map.depthTexture.name=F.name+".shadowMapDepth",D.map.depthTexture.format=Gn,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Xe,D.map.depthTexture.magFilter=Xe}else F.isPointLight?(D.map=new Sl(r.x),D.map.depthTexture=new ga(r.x,Fn)):(D.map=new sn(r.x,r.y),D.map.depthTexture=new Ei(r.x,r.y,Fn)),D.map.depthTexture.name=F.name+".shadowMap",D.map.depthTexture.format=Gn,this.type===Os?(D.map.depthTexture.compareFunction=O?vl:bl,D.map.depthTexture.minFilter=Ze,D.map.depthTexture.magFilter=Ze):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Xe,D.map.depthTexture.magFilter=Xe);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==r.x||D.map.height!==r.y)&&D.map.setSize(r.x,r.y);let B=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();F.isPointLight!==!0&&D.updateMatrices(F,b);for(let V=0;V<B;V++){let et=D.getCamera(V);if(F.isPointLight){let G=D.camera,K=D.matrix,ot=F.distance||G.far;ot!==G.far&&(G.far=ot,G.updateProjectionMatrix()),Zs.setFromMatrixPosition(F.matrixWorld),G.position.copy(Zs),vu.copy(G.position),vu.add(I_[V]),G.up.copy(L_[V]),G.lookAt(vu),G.updateMatrixWorld(),K.makeTranslation(-Zs.x,-Zs.y,-Zs.z),gd.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),D._frustum.setFromProjectionMatrix(gd,G.coordinateSystem,G.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)i.setRenderTarget(D.map,V),i.clear();else{V===0&&(i.setRenderTarget(D.map),i.clear());let G=D.getViewport(V);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),A.viewport(o)}n=D.getFrustum(V),v(C,b,et,F,this.type)}D.isPointLightShadow!==!0&&this.type===Yr&&_(D,b),D.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,w,R)};function _(T,C){let b=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new sn(r.x,r.y,{format:Di,type:Nn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,b,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,b,d,x,null)}function y(T,C,b,S){let w=null,R=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)w=R;else if(w=b.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let A=w.uuid,I=C.uuid,E=c[A];E===void 0&&(E={},c[A]=E);let L=E[I];L===void 0&&(L=w.clone(),E[I]=L,C.addEventListener("dispose",M)),w=L}if(w.visible=C.visible,w.wireframe=C.wireframe,S===Yr?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:h[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,b.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let A=i.properties.get(w);A.light=b}return w}function v(T,C,b,S,w){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Yr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let I=t.update(T),E=T.material;if(Array.isArray(E)){let L=I.groups;for(let F=0,D=L.length;F<D;F++){let k=L[F],O=E[k.materialIndex];if(O&&O.visible){let B=y(T,O,S,w);T.onBeforeShadow(i,T,C,b,I,B,k),i.renderBufferDirect(b,null,I,B,T,k),T.onAfterShadow(i,T,C,b,I,B,k)}}}else if(E.visible){let L=y(T,E,S,w);T.onBeforeShadow(i,T,C,b,I,L,null),i.renderBufferDirect(b,null,I,L,T,null),T.onAfterShadow(i,T,C,b,I,L,null)}}let A=T.children;for(let I=0,E=A.length;I<E;I++)v(A[I],C,b,S,w)}function M(T){T.target.removeEventListener("dispose",M);for(let b in c){let S=c[b],w=T.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function D_(i,t){function e(){let Y=!1,vt=new Ce,lt=null,_t=new Ce(0,0,0,0);return{setMask:function(Tt){lt!==Tt&&!Y&&(i.colorMask(Tt,Tt,Tt,Tt),lt=Tt)},setLocked:function(Tt){Y=Tt},setClear:function(Tt,ht,Nt,It,ve){ve===!0&&(Tt*=It,ht*=It,Nt*=It),vt.set(Tt,ht,Nt,It),_t.equals(vt)===!1&&(i.clearColor(Tt,ht,Nt,It),_t.copy(vt))},reset:function(){Y=!1,lt=null,_t.set(-1,0,0,0)}}}function n(){let Y=!1,vt=!1,lt=null,_t=null,Tt=null;return{setReversed:function(ht){if(vt!==ht){let Nt=t.get("EXT_clip_control");ht?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),vt=ht;let It=Tt;Tt=null,this.setClear(It)}},getReversed:function(){return vt},setTest:function(ht){ht?X(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(ht){lt!==ht&&!Y&&(i.depthMask(ht),lt=ht)},setFunc:function(ht){if(vt&&(ht=Vf[ht]),_t!==ht){switch(ht){case Qo:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case ea:i.depthFunc(i.LESS);break;case Ur:i.depthFunc(i.LEQUAL);break;case na:i.depthFunc(i.EQUAL);break;case ia:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=ht}},setLocked:function(ht){Y=ht},setClear:function(ht){Tt!==ht&&(Tt=ht,vt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){Y=!1,lt=null,_t=null,Tt=null,vt=!1}}}function r(){let Y=!1,vt=null,lt=null,_t=null,Tt=null,ht=null,Nt=null,It=null,ve=null;return{setTest:function(de){Y||(de?X(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(de){vt!==de&&!Y&&(i.stencilMask(de),vt=de)},setFunc:function(de,En,kn){(lt!==de||_t!==En||Tt!==kn)&&(i.stencilFunc(de,En,kn),lt=de,_t=En,Tt=kn)},setOp:function(de,En,kn){(ht!==de||Nt!==En||It!==kn)&&(i.stencilOp(de,En,kn),ht=de,Nt=En,It=kn)},setLocked:function(de){Y=de},setClear:function(de){ve!==de&&(i.clearStencil(de),ve=de)},reset:function(){Y=!1,vt=null,lt=null,_t=null,Tt=null,ht=null,Nt=null,It=null,ve=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,_=null,y=null,v=null,M=null,T=null,C=null,b=new J(0,0,0),S=0,w=!1,R=null,A=null,I=null,E=null,L=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,k=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(O)[1]),D=k>=1):O.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),D=k>=2);let B=null,V={},et=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),K=new Ce().fromArray(et),ot=new Ce().fromArray(G);function dt(Y,vt,lt,_t){let Tt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(Y,ht),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<lt;Nt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(vt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return ht}let $={};$[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(Ur),qt(!1),Se(Nc),X(i.CULL_FACE),Wt(qn);function X(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function it(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function at(Y,vt){return f[Y]!==vt?(i.bindFramebuffer(Y,vt),f[Y]=vt,Y===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=vt),Y===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function ct(Y,vt){let lt=m,_t=!1;if(Y){lt=d.get(vt),lt===void 0&&(lt=[],d.set(vt,lt));let Tt=Y.textures;if(lt.length!==Tt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Nt=Tt.length;ht<Nt;ht++)lt[ht]=i.COLOR_ATTACHMENT0+ht;lt.length=Tt.length,_t=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,_t=!0);_t&&i.drawBuffers(lt)}function gt(Y){return x!==Y?(i.useProgram(Y),x=Y,!0):!1}let Ot={[nr]:i.FUNC_ADD,[lf]:i.FUNC_SUBTRACT,[cf]:i.FUNC_REVERSE_SUBTRACT};Ot[uf]=i.MIN,Ot[hf]=i.MAX;let Rt={[ff]:i.ZERO,[df]:i.ONE,[pf]:i.SRC_COLOR,[Oc]:i.SRC_ALPHA,[_f]:i.SRC_ALPHA_SATURATE,[bf]:i.DST_COLOR,[gf]:i.DST_ALPHA,[mf]:i.ONE_MINUS_SRC_COLOR,[Bc]:i.ONE_MINUS_SRC_ALPHA,[vf]:i.ONE_MINUS_DST_COLOR,[xf]:i.ONE_MINUS_DST_ALPHA,[yf]:i.CONSTANT_COLOR,[Mf]:i.ONE_MINUS_CONSTANT_COLOR,[Sf]:i.CONSTANT_ALPHA,[wf]:i.ONE_MINUS_CONSTANT_ALPHA};function Wt(Y,vt,lt,_t,Tt,ht,Nt,It,ve,de){if(Y===qn){g===!0&&(it(i.BLEND),g=!1);return}if(g===!1&&(X(i.BLEND),g=!0),Y!==af){if(Y!==p||de!==w){if((_!==nr||M!==nr)&&(i.blendEquation(i.FUNC_ADD),_=nr,M=nr),de)switch(Y){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ie:i.blendFunc(i.ONE,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ie:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uc:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bs:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",Y);break}y=null,v=null,T=null,C=null,b.set(0,0,0),S=0,p=Y,w=de}return}Tt=Tt||vt,ht=ht||lt,Nt=Nt||_t,(vt!==_||Tt!==M)&&(i.blendEquationSeparate(Ot[vt],Ot[Tt]),_=vt,M=Tt),(lt!==y||_t!==v||ht!==T||Nt!==C)&&(i.blendFuncSeparate(Rt[lt],Rt[_t],Rt[ht],Rt[Nt]),y=lt,v=_t,T=ht,C=Nt),(It.equals(b)===!1||ve!==S)&&(i.blendColor(It.r,It.g,It.b,ve),b.copy(It),S=ve),p=Y,w=!1}function se(Y,vt){Y.side===fe?it(i.CULL_FACE):X(i.CULL_FACE);let lt=Y.side===Je;vt&&(lt=!lt),qt(lt),Y.blending===Pi&&Y.transparent===!1?Wt(qn):Wt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),s.setMask(Y.colorWrite);let _t=Y.stencilWrite;a.setTest(_t),_t&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),fn(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(Y){R!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),R=Y)}function Se(Y){Y!==rf?(X(i.CULL_FACE),Y!==A&&(Y===Nc?i.cullFace(i.BACK):Y===sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),A=Y}function He(Y){Y!==I&&(D&&i.lineWidth(Y),I=Y)}function fn(Y,vt,lt){Y?(X(i.POLYGON_OFFSET_FILL),(E!==vt||L!==lt)&&(E=vt,L=lt,o.getReversed()&&(vt=-vt),i.polygonOffset(vt,lt))):it(i.POLYGON_OFFSET_FILL)}function Ae(Y){Y?X(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function Ue(Y){Y===void 0&&(Y=i.TEXTURE0+F-1),B!==Y&&(i.activeTexture(Y),B=Y)}function q(Y,vt,lt){lt===void 0&&(B===null?lt=i.TEXTURE0+F-1:lt=B);let _t=V[lt];_t===void 0&&(_t={type:void 0,texture:void 0},V[lt]=_t),(_t.type!==Y||_t.texture!==vt)&&(B!==lt&&(i.activeTexture(lt),B=lt),i.bindTexture(Y,vt||$[Y]),_t.type=Y,_t.texture=vt)}function je(){let Y=V[B];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(Y){Ht("WebGLState:",Y)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(Y){Ht("WebGLState:",Y)}}function P(){try{i.texSubImage2D(...arguments)}catch(Y){Ht("WebGLState:",Y)}}function Z(){try{i.texSubImage3D(...arguments)}catch(Y){Ht("WebGLState:",Y)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){Ht("WebGLState:",Y)}}function rt(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){Ht("WebGLState:",Y)}}function pt(){try{i.texStorage2D(...arguments)}catch(Y){Ht("WebGLState:",Y)}}function mt(){try{i.texStorage3D(...arguments)}catch(Y){Ht("WebGLState:",Y)}}function st(){try{i.texImage2D(...arguments)}catch(Y){Ht("WebGLState:",Y)}}function ut(){try{i.texImage3D(...arguments)}catch(Y){Ht("WebGLState:",Y)}}function xt(Y){return h[Y]!==void 0?h[Y]:i.getParameter(Y)}function Ft(Y,vt){h[Y]!==vt&&(i.pixelStorei(Y,vt),h[Y]=vt)}function yt(Y){K.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),K.copy(Y))}function bt(Y){ot.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),ot.copy(Y))}function Dt(Y,vt){let lt=c.get(vt);lt===void 0&&(lt=new WeakMap,c.set(vt,lt));let _t=lt.get(Y);_t===void 0&&(_t=i.getUniformBlockIndex(vt,Y.name),lt.set(Y,_t))}function Vt(Y,vt){let _t=c.get(vt).get(Y);l.get(vt)!==_t&&(i.uniformBlockBinding(vt,_t,Y.__bindingPointIndex),l.set(vt,_t))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},B=null,V={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,_=null,y=null,v=null,M=null,T=null,C=null,b=new J(0,0,0),S=0,w=!1,R=null,A=null,I=null,E=null,L=null,K.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:X,disable:it,bindFramebuffer:at,drawBuffers:ct,useProgram:gt,setBlending:Wt,setMaterial:se,setFlipSided:qt,setCullFace:Se,setLineWidth:He,setPolygonOffset:fn,setScissorTest:Ae,activeTexture:Ue,bindTexture:q,unbindTexture:je,compressedTexImage2D:ge,compressedTexImage3D:z,texImage2D:st,texImage3D:ut,pixelStorei:Ft,getParameter:xt,updateUBOMapping:Dt,uniformBlockBinding:Vt,texStorage2D:pt,texStorage3D:mt,texSubImage2D:P,texSubImage3D:Z,compressedTexSubImage2D:tt,compressedTexSubImage3D:rt,scissor:yt,viewport:bt,reset:Jt}}function N_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,u=new WeakMap,h=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(z,P){return m?new OffscreenCanvas(z,P):Or("canvas")}function g(z,P,Z){let tt=1,rt=ge(z);if((rt.width>Z||rt.height>Z)&&(tt=Z/Math.max(rt.width,rt.height)),tt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let pt=Math.floor(tt*rt.width),mt=Math.floor(tt*rt.height);f===void 0&&(f=x(pt,mt));let st=P?x(pt,mt):f;return st.width=pt,st.height=mt,st.getContext("2d").drawImage(z,0,0,pt,mt),Gt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+pt+"x"+mt+")."),st}else return"data"in z&&Gt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),z;return z}function p(z){return z.generateMipmaps}function _(z){i.generateMipmap(z)}function y(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(z,P,Z,tt,rt,pt=!1){if(z!==null){if(i[z]!==void 0)return i[z];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let mt;tt&&(mt=t.get("EXT_texture_norm16"),mt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=P;if(P===i.RED&&(Z===i.FLOAT&&(st=i.R32F),Z===i.HALF_FLOAT&&(st=i.R16F),Z===i.UNSIGNED_BYTE&&(st=i.R8),Z===i.UNSIGNED_SHORT&&mt&&(st=mt.R16_EXT),Z===i.SHORT&&mt&&(st=mt.R16_SNORM_EXT)),P===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(st=i.R8UI),Z===i.UNSIGNED_SHORT&&(st=i.R16UI),Z===i.UNSIGNED_INT&&(st=i.R32UI),Z===i.BYTE&&(st=i.R8I),Z===i.SHORT&&(st=i.R16I),Z===i.INT&&(st=i.R32I)),P===i.RG&&(Z===i.FLOAT&&(st=i.RG32F),Z===i.HALF_FLOAT&&(st=i.RG16F),Z===i.UNSIGNED_BYTE&&(st=i.RG8),Z===i.UNSIGNED_SHORT&&mt&&(st=mt.RG16_EXT),Z===i.SHORT&&mt&&(st=mt.RG16_SNORM_EXT)),P===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(st=i.RG8UI),Z===i.UNSIGNED_SHORT&&(st=i.RG16UI),Z===i.UNSIGNED_INT&&(st=i.RG32UI),Z===i.BYTE&&(st=i.RG8I),Z===i.SHORT&&(st=i.RG16I),Z===i.INT&&(st=i.RG32I)),P===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(st=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(st=i.RGB16UI),Z===i.UNSIGNED_INT&&(st=i.RGB32UI),Z===i.BYTE&&(st=i.RGB8I),Z===i.SHORT&&(st=i.RGB16I),Z===i.INT&&(st=i.RGB32I)),P===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),Z===i.UNSIGNED_INT&&(st=i.RGBA32UI),Z===i.BYTE&&(st=i.RGBA8I),Z===i.SHORT&&(st=i.RGBA16I),Z===i.INT&&(st=i.RGBA32I)),P===i.RGB&&(Z===i.UNSIGNED_SHORT&&mt&&(st=mt.RGB16_EXT),Z===i.SHORT&&mt&&(st=mt.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),P===i.RGBA){let ut=pt?vs:oe.getTransfer(rt);Z===i.FLOAT&&(st=i.RGBA32F),Z===i.HALF_FLOAT&&(st=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(st=ut===me?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&mt&&(st=mt.RGBA16_EXT),Z===i.SHORT&&mt&&(st=mt.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(z,P){let Z;return z?P===null||P===Fn||P===$r?Z=i.DEPTH24_STENCIL8:P===Dn?Z=i.DEPTH32F_STENCIL8:P===qr&&(Z=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Fn||P===$r?Z=i.DEPTH_COMPONENT24:P===Dn?Z=i.DEPTH_COMPONENT32F:P===qr&&(Z=i.DEPTH_COMPONENT16),Z}function T(z,P){return p(z)===!0||z.isFramebufferTexture&&z.minFilter!==Xe&&z.minFilter!==Ze?Math.log2(Math.max(P.width,P.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?P.mipmaps.length:1}function C(z){let P=z.target;P.removeEventListener("dispose",C),S(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&h.delete(P)}function b(z){let P=z.target;P.removeEventListener("dispose",b),R(P)}function S(z){let P=n.get(z);if(P.__webglInit===void 0)return;let Z=z.source,tt=d.get(Z);if(tt){let rt=tt[P.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&w(z),Object.keys(tt).length===0&&d.delete(Z)}n.remove(z)}function w(z){let P=n.get(z);i.deleteTexture(P.__webglTexture);let Z=z.source,tt=d.get(Z);delete tt[P.__cacheKey],o.memory.textures--}function R(z){let P=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(P.__webglFramebuffer[tt]))for(let rt=0;rt<P.__webglFramebuffer[tt].length;rt++)i.deleteFramebuffer(P.__webglFramebuffer[tt][rt]);else i.deleteFramebuffer(P.__webglFramebuffer[tt]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[tt])}else{if(Array.isArray(P.__webglFramebuffer))for(let tt=0;tt<P.__webglFramebuffer.length;tt++)i.deleteFramebuffer(P.__webglFramebuffer[tt]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let tt=0;tt<P.__webglColorRenderbuffer.length;tt++)P.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[tt]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let Z=z.textures;for(let tt=0,rt=Z.length;tt<rt;tt++){let pt=n.get(Z[tt]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(Z[tt])}n.remove(z)}let A=0;function I(){A=0}function E(){return A}function L(z){A=z}function F(){let z=A;return z>=r.maxTextures&&Gt("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+r.maxTextures),A+=1,z}function D(z){let P=[];return P.push(z.wrapS),P.push(z.wrapT),P.push(z.wrapR||0),P.push(z.magFilter),P.push(z.minFilter),P.push(z.anisotropy),P.push(z.internalFormat),P.push(z.format),P.push(z.type),P.push(z.generateMipmaps),P.push(z.premultiplyAlpha),P.push(z.flipY),P.push(z.unpackAlignment),P.push(z.colorSpace),P.join()}function k(z,P){let Z=n.get(z);if(z.isVideoTexture&&q(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&Z.__version!==z.version){let tt=z.image;if(tt===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{it(Z,z,P);return}}else z.isExternalTexture&&(Z.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+P)}function O(z,P){let Z=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Z.__version!==z.version){it(Z,z,P);return}else z.isExternalTexture&&(Z.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+P)}function B(z,P){let Z=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Z.__version!==z.version){it(Z,z,P);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+P)}function V(z,P){let Z=n.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&Z.__version!==z.version){at(Z,z,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+P)}let et={[Ji]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},G={[Xe]:i.NEAREST,[Af]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[Na]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},K={[If]:i.NEVER,[Uf]:i.ALWAYS,[Lf]:i.LESS,[bl]:i.LEQUAL,[Ff]:i.EQUAL,[vl]:i.GEQUAL,[Df]:i.GREATER,[Nf]:i.NOTEQUAL};function ot(z,P){if(P.type===Dn&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Ze||P.magFilter===Na||P.magFilter===zs||P.magFilter===Li||P.minFilter===Ze||P.minFilter===Na||P.minFilter===zs||P.minFilter===Li)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,et[P.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,et[P.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,et[P.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,G[P.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,G[P.minFilter]),P.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,K[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Xe||P.minFilter!==zs&&P.minFilter!==Li||P.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function dt(z,P){let Z=!1;z.__webglInit===void 0&&(z.__webglInit=!0,P.addEventListener("dispose",C));let tt=P.source,rt=d.get(tt);rt===void 0&&(rt={},d.set(tt,rt));let pt=D(P);if(pt!==z.__cacheKey){rt[pt]===void 0&&(rt[pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),rt[pt].usedTimes++;let mt=rt[z.__cacheKey];mt!==void 0&&(rt[z.__cacheKey].usedTimes--,mt.usedTimes===0&&w(P)),z.__cacheKey=pt,z.__webglTexture=rt[pt].texture}return Z}function $(z,P,Z){return Math.floor(Math.floor(z/Z)/P)}function X(z,P,Z,tt){let pt=z.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,Z,tt,P.data);else{pt.sort((Ft,yt)=>Ft.start-yt.start);let mt=0;for(let Ft=1;Ft<pt.length;Ft++){let yt=pt[mt],bt=pt[Ft],Dt=yt.start+yt.count,Vt=$(bt.start,P.width,4),Jt=$(yt.start,P.width,4);bt.start<=Dt+1&&Vt===Jt&&$(bt.start+bt.count-1,P.width,4)===Vt?yt.count=Math.max(yt.count,bt.start+bt.count-yt.start):(++mt,pt[mt]=bt)}pt.length=mt+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let Ft=0,yt=pt.length;Ft<yt;Ft++){let bt=pt[Ft],Dt=Math.floor(bt.start/4),Vt=Math.ceil(bt.count/4),Jt=Dt%P.width,Y=Math.floor(Dt/P.width),vt=Vt,lt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(i.TEXTURE_2D,0,Jt,Y,vt,lt,Z,tt,P.data)}z.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function it(z,P,Z){let tt=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(tt=i.TEXTURE_3D);let rt=dt(z,P),pt=P.source;e.bindTexture(tt,z.__webglTexture,i.TEXTURE0+Z);let mt=n.get(pt);if(pt.version!==mt.__version||rt===!0){if(e.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let lt=oe.getPrimaries(oe.workingColorSpace),_t=P.colorSpace===ci?null:oe.getPrimaries(P.colorSpace),Tt=P.colorSpace===ci||lt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment);let ut=g(P.image,!1,r.maxTextureSize);ut=je(P,ut);let xt=s.convert(P.format,P.colorSpace),Ft=s.convert(P.type),yt=v(P.internalFormat,xt,Ft,P.normalized,P.colorSpace,P.isVideoTexture);ot(tt,P);let bt,Dt=P.mipmaps,Vt=P.isVideoTexture!==!0,Jt=mt.__version===void 0||rt===!0,Y=pt.dataReady,vt=T(P,ut);if(P.isDepthTexture)yt=M(P.format===Fi,P.type),Jt&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,yt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,yt,ut.width,ut.height,0,xt,Ft,null));else if(P.isDataTexture)if(Dt.length>0){Vt&&Jt&&e.texStorage2D(i.TEXTURE_2D,vt,yt,Dt[0].width,Dt[0].height);for(let lt=0,_t=Dt.length;lt<_t;lt++)bt=Dt[lt],Vt?Y&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,bt.width,bt.height,xt,Ft,bt.data):e.texImage2D(i.TEXTURE_2D,lt,yt,bt.width,bt.height,0,xt,Ft,bt.data);P.generateMipmaps=!1}else Vt?(Jt&&e.texStorage2D(i.TEXTURE_2D,vt,yt,ut.width,ut.height),Y&&X(P,ut,xt,Ft)):e.texImage2D(i.TEXTURE_2D,0,yt,ut.width,ut.height,0,xt,Ft,ut.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Vt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,yt,Dt[0].width,Dt[0].height,ut.depth);for(let lt=0,_t=Dt.length;lt<_t;lt++)if(bt=Dt[lt],P.format!==Sn)if(xt!==null)if(Vt){if(Y)if(P.layerUpdates.size>0){let Tt=lu(bt.width,bt.height,P.format,P.type);for(let ht of P.layerUpdates){let Nt=bt.data.subarray(ht*Tt/bt.data.BYTES_PER_ELEMENT,(ht+1)*Tt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,ht,bt.width,bt.height,1,xt,Nt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,bt.width,bt.height,ut.depth,xt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,yt,bt.width,bt.height,ut.depth,0,bt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,bt.width,bt.height,ut.depth,xt,Ft,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,yt,bt.width,bt.height,ut.depth,0,xt,Ft,bt.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{Vt&&Jt&&e.texStorage2D(i.TEXTURE_2D,vt,yt,Dt[0].width,Dt[0].height);for(let lt=0,_t=Dt.length;lt<_t;lt++)bt=Dt[lt],P.format!==Sn?xt!==null?Vt?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,bt.width,bt.height,xt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,yt,bt.width,bt.height,0,bt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?Y&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,bt.width,bt.height,xt,Ft,bt.data):e.texImage2D(i.TEXTURE_2D,lt,yt,bt.width,bt.height,0,xt,Ft,bt.data)}else if(P.isDataArrayTexture)if(Vt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,yt,ut.width,ut.height,ut.depth),Y)if(P.layerUpdates.size>0){let lt=lu(ut.width,ut.height,P.format,P.type);for(let _t of P.layerUpdates){let Tt=ut.data.subarray(_t*lt/ut.data.BYTES_PER_ELEMENT,(_t+1)*lt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,ut.width,ut.height,1,xt,Ft,Tt)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,xt,Ft,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,ut.width,ut.height,ut.depth,0,xt,Ft,ut.data);else if(P.isData3DTexture)Vt?(Jt&&e.texStorage3D(i.TEXTURE_3D,vt,yt,ut.width,ut.height,ut.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,xt,Ft,ut.data)):e.texImage3D(i.TEXTURE_3D,0,yt,ut.width,ut.height,ut.depth,0,xt,Ft,ut.data);else if(P.isFramebufferTexture){if(Jt)if(Vt)e.texStorage2D(i.TEXTURE_2D,vt,yt,ut.width,ut.height);else{let lt=ut.width,_t=ut.height;for(let Tt=0;Tt<vt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,yt,lt,_t,0,xt,Ft,null),lt>>=1,_t>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in i){let lt=i.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),ut.parentNode!==lt){lt.appendChild(ut),h.add(P),lt.onpaint=_t=>{let Tt=_t.changedElements;for(let ht of h)Tt.includes(ht.image)&&(ht.needsUpdate=!0)},lt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let Tt=i.RGBA,ht=i.RGBA,Nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,ht,Nt,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Vt&&Jt){let lt=ge(Dt[0]);e.texStorage2D(i.TEXTURE_2D,vt,yt,lt.width,lt.height)}for(let lt=0,_t=Dt.length;lt<_t;lt++)bt=Dt[lt],Vt?Y&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,xt,Ft,bt):e.texImage2D(i.TEXTURE_2D,lt,yt,xt,Ft,bt);P.generateMipmaps=!1}else if(Vt){if(Jt){let lt=ge(ut);e.texStorage2D(i.TEXTURE_2D,vt,yt,lt.width,lt.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ft,ut)}else e.texImage2D(i.TEXTURE_2D,0,yt,xt,Ft,ut);p(P)&&_(tt),mt.__version=pt.version,P.onUpdate&&P.onUpdate(P)}z.__version=P.version}function at(z,P,Z){if(P.image.length!==6)return;let tt=dt(z,P),rt=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+Z);let pt=n.get(rt);if(rt.version!==pt.__version||tt===!0){e.activeTexture(i.TEXTURE0+Z);let mt=oe.getPrimaries(oe.workingColorSpace),st=P.colorSpace===ci?null:oe.getPrimaries(P.colorSpace),ut=P.colorSpace===ci||mt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let xt=P.isCompressedTexture||P.image[0].isCompressedTexture,Ft=P.image[0]&&P.image[0].isDataTexture,yt=[];for(let ht=0;ht<6;ht++)!xt&&!Ft?yt[ht]=g(P.image[ht],!0,r.maxCubemapSize):yt[ht]=Ft?P.image[ht].image:P.image[ht],yt[ht]=je(P,yt[ht]);let bt=yt[0],Dt=s.convert(P.format,P.colorSpace),Vt=s.convert(P.type),Jt=v(P.internalFormat,Dt,Vt,P.normalized,P.colorSpace),Y=P.isVideoTexture!==!0,vt=pt.__version===void 0||tt===!0,lt=rt.dataReady,_t=T(P,bt);ot(i.TEXTURE_CUBE_MAP,P);let Tt;if(xt){Y&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Jt,bt.width,bt.height);for(let ht=0;ht<6;ht++){Tt=yt[ht].mipmaps;for(let Nt=0;Nt<Tt.length;Nt++){let It=Tt[Nt];P.format!==Sn?Dt!==null?Y?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt,0,0,It.width,It.height,Dt,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt,Jt,It.width,It.height,0,It.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt,0,0,It.width,It.height,Dt,Vt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt,Jt,It.width,It.height,0,Dt,Vt,It.data)}}}else{if(Tt=P.mipmaps,Y&&vt){Tt.length>0&&_t++;let ht=ge(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Jt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Ft){Y?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,yt[ht].width,yt[ht].height,Dt,Vt,yt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Jt,yt[ht].width,yt[ht].height,0,Dt,Vt,yt[ht].data);for(let Nt=0;Nt<Tt.length;Nt++){let ve=Tt[Nt].image[ht].image;Y?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt+1,0,0,ve.width,ve.height,Dt,Vt,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt+1,Jt,ve.width,ve.height,0,Dt,Vt,ve.data)}}else{Y?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Dt,Vt,yt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Jt,Dt,Vt,yt[ht]);for(let Nt=0;Nt<Tt.length;Nt++){let It=Tt[Nt];Y?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt+1,0,0,Dt,Vt,It.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt+1,Jt,Dt,Vt,It.image[ht])}}}p(P)&&_(i.TEXTURE_CUBE_MAP),pt.__version=rt.version,P.onUpdate&&P.onUpdate(P)}z.__version=P.version}function ct(z,P,Z,tt,rt,pt){let mt=s.convert(Z.format,Z.colorSpace),st=s.convert(Z.type),ut=v(Z.internalFormat,mt,st,Z.normalized,Z.colorSpace),xt=n.get(P),Ft=n.get(Z);if(Ft.__renderTarget=P,!xt.__hasExternalTextures){let yt=Math.max(1,P.width>>pt),bt=Math.max(1,P.height>>pt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,pt,ut,yt,bt,P.depth,0,mt,st,null):e.texImage2D(rt,pt,ut,yt,bt,0,mt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),Ue(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,rt,Ft.__webglTexture,0,Ae(P)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,rt,Ft.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(z,P,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,z),P.depthBuffer){let tt=P.depthTexture,rt=tt&&tt.isDepthTexture?tt.type:null,pt=M(P.stencilBuffer,rt),mt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ue(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(P),pt,P.width,P.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(P),pt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,pt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,z)}else{let tt=P.textures;for(let rt=0;rt<tt.length;rt++){let pt=tt[rt],mt=s.convert(pt.format,pt.colorSpace),st=s.convert(pt.type),ut=v(pt.internalFormat,mt,st,pt.normalized,pt.colorSpace);Ue(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(P),ut,P.width,P.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(P),ut,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,ut,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(z,P,Z){let tt=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=n.get(P.depthTexture);if(rt.__renderTarget=P,(!rt.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),tt){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,P.depthTexture.addEventListener("dispose",C)),rt.__webglTexture===void 0){rt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),ot(i.TEXTURE_CUBE_MAP,P.depthTexture);let xt=s.convert(P.depthTexture.format),Ft=s.convert(P.depthTexture.type),yt;P.depthTexture.format===Gn?yt=i.DEPTH_COMPONENT24:P.depthTexture.format===Fi&&(yt=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,yt,P.width,P.height,0,xt,Ft,null)}}else k(P.depthTexture,0);let pt=rt.__webglTexture,mt=Ae(P),st=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,ut=P.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===Gn)Ue(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,st,pt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,st,pt,0);else if(P.depthTexture.format===Fi)Ue(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,st,pt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,st,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(z){let P=n.get(z),Z=z.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==z.depthTexture){let tt=z.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),tt){let rt=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,tt.removeEventListener("dispose",rt)};tt.addEventListener("dispose",rt),P.__depthDisposeCallback=rt}P.__boundDepthTexture=tt}if(z.depthTexture&&!P.__autoAllocateDepthBuffer)if(Z)for(let tt=0;tt<6;tt++)Ot(P.__webglFramebuffer[tt],z,tt);else{let tt=z.texture.mipmaps;tt&&tt.length>0?Ot(P.__webglFramebuffer[0],z,0):Ot(P.__webglFramebuffer,z,0)}else if(Z){P.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[tt]),P.__webglDepthbuffer[tt]===void 0)P.__webglDepthbuffer[tt]=i.createRenderbuffer(),gt(P.__webglDepthbuffer[tt],z,!1);else{let rt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=P.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,pt)}}else{let tt=z.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),gt(P.__webglDepthbuffer,z,!1);else{let rt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(z,P,Z){let tt=n.get(z);P!==void 0&&ct(tt.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Rt(z)}function se(z){let P=z.texture,Z=n.get(z),tt=n.get(P);z.addEventListener("dispose",b);let rt=z.textures,pt=z.isWebGLCubeRenderTarget===!0,mt=rt.length>1;if(mt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=P.version,o.memory.textures++),pt){Z.__webglFramebuffer=[];for(let st=0;st<6;st++)if(P.mipmaps&&P.mipmaps.length>0){Z.__webglFramebuffer[st]=[];for(let ut=0;ut<P.mipmaps.length;ut++)Z.__webglFramebuffer[st][ut]=i.createFramebuffer()}else Z.__webglFramebuffer[st]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){Z.__webglFramebuffer=[];for(let st=0;st<P.mipmaps.length;st++)Z.__webglFramebuffer[st]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(mt)for(let st=0,ut=rt.length;st<ut;st++){let xt=n.get(rt[st]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(z.samples>0&&Ue(z)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let st=0;st<rt.length;st++){let ut=rt[st];Z.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[st]);let xt=s.convert(ut.format,ut.colorSpace),Ft=s.convert(ut.type),yt=v(ut.internalFormat,xt,Ft,ut.normalized,ut.colorSpace,z.isXRRenderTarget===!0),bt=Ae(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,yt,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,Z.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(Z.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),ot(i.TEXTURE_CUBE_MAP,P);for(let st=0;st<6;st++)if(P.mipmaps&&P.mipmaps.length>0)for(let ut=0;ut<P.mipmaps.length;ut++)ct(Z.__webglFramebuffer[st][ut],z,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut);else ct(Z.__webglFramebuffer[st],z,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(P)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let st=0,ut=rt.length;st<ut;st++){let xt=rt[st],Ft=n.get(xt),yt=i.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(yt=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ft.__webglTexture),ot(yt,xt),ct(Z.__webglFramebuffer,z,xt,i.COLOR_ATTACHMENT0+st,yt,0),p(xt)&&_(yt)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(st=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,tt.__webglTexture),ot(st,P),P.mipmaps&&P.mipmaps.length>0)for(let ut=0;ut<P.mipmaps.length;ut++)ct(Z.__webglFramebuffer[ut],z,P,i.COLOR_ATTACHMENT0,st,ut);else ct(Z.__webglFramebuffer,z,P,i.COLOR_ATTACHMENT0,st,0);p(P)&&_(st),e.unbindTexture()}z.depthBuffer&&Rt(z)}function qt(z){let P=z.textures;for(let Z=0,tt=P.length;Z<tt;Z++){let rt=P[Z];if(p(rt)){let pt=y(z),mt=n.get(rt).__webglTexture;e.bindTexture(pt,mt),_(pt),e.unbindTexture()}}}let Se=[],He=[];function fn(z){if(z.samples>0){if(Ue(z)===!1){let P=z.textures,Z=z.width,tt=z.height,rt=i.COLOR_BUFFER_BIT,pt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(z),st=P.length>1;if(st)for(let xt=0;xt<P.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let ut=z.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let xt=0;xt<P.length;xt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[xt]);let Ft=n.get(P[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,Z,tt,0,0,Z,tt,rt,i.NEAREST),l===!0&&(Se.length=0,He.length=0,Se.push(i.COLOR_ATTACHMENT0+xt),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(Se.push(pt),He.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let xt=0;xt<P.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[xt]);let Ft=n.get(P[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&l){let P=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function Ae(z){return Math.min(r.maxSamples,z.samples)}function Ue(z){let P=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function q(z){let P=o.render.frame;u.get(z)!==P&&(u.set(z,P),z.update())}function je(z,P){let Z=z.colorSpace,tt=z.format,rt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||Z!==bs&&Z!==ci&&(oe.getTransfer(Z)===me?(tt!==Sn||rt!==vn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",Z)),P}function ge(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.getTextureUnits=E,this.setTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=V,this.rebindTextures=Wt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function U_(i,t){function e(n,r=ci){let s,o=oe.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ba)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$c)return i.BYTE;if(n===Zc)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===jc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===Sn)return i.RGBA;if(n===Gn)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===tu)return i.RED;if(n===ka)return i.RED_INTEGER;if(n===Di)return i.RG;if(n===za)return i.RG_INTEGER;if(n===Va)return i.RGBA_INTEGER;if(n===Vs||n===Gs||n===Hs||n===Ws)if(o===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ga||n===Ha||n===Wa||n===Xa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ga)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===qa||n===$a||n===Za||n===Ka||n===Xs||n===Ja)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ya||n===qa)return o===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===$a)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Za)return s.COMPRESSED_R11_EAC;if(n===Ka)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Xs)return s.COMPRESSED_RG11_EAC;if(n===Ja)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===rl||n===sl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ja)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ll)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fl||n===dl||n===pl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===fl)return o===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ml||n===gl||n===Ys||n===xl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ml)return s.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ys)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Es(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new on({vertexShader:O_,fragmentShader:B_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ru=class extends Hn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new Au,p={},_=e.getContextAttributes(),y=null,v=null,M=[],T=[],C=new te,b=null,S=null,w=new nn;w.viewport=new Ce;let R=new nn;R.viewport=new Ce;let A=[w,R],I=new Ia,E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let X=M[$];return X===void 0&&(X=new Vr,M[$]=X),X.getTargetRaySpace()},this.getControllerGrip=function($){let X=M[$];return X===void 0&&(X=new Vr,M[$]=X),X.getGripSpace()},this.getHand=function($){let X=M[$];return X===void 0&&(X=new Vr,M[$]=X),X.getHandSpace()};function F($){let X=T.indexOf($.inputSource);if(X===-1)return;let it=M[X];it!==void 0&&(it.update($.inputSource,$.frame,c||o),it.dispatchEvent({type:$.type,data:$.inputSource}))}function D(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",k);for(let $=0;$<M.length;$++){let X=T[$];X!==null&&(T[$]=null,M[$].disconnect(X))}E=null,L=null,g.reset();for(let $ in p)delete p[$];if(t.setRenderTarget(y),d=null,f=null,h=null,r=null,v=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),S!==null){let $=S.camera;$.fov=S.fov,$.zoom=S.zoom,$.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",D),r.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,at=null,ct=null;_.depth&&(ct=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=_.stencil?Fi:Gn,at=_.stencil?$r:Fn);let gt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(gt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new sn(f.textureWidth,f.textureHeight,{format:Sn,type:vn,depthTexture:new Ei(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let it={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new sn(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),dt.setContext(r),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k($){for(let X=0;X<$.removed.length;X++){let it=$.removed[X],at=T.indexOf(it);at>=0&&(T[at]=null,M[at].disconnect(it))}for(let X=0;X<$.added.length;X++){let it=$.added[X],at=T.indexOf(it);if(at===-1){for(let gt=0;gt<M.length;gt++)if(gt>=T.length){T.push(it),at=gt;break}else if(T[gt]===null){T[gt]=it,at=gt;break}if(at===-1)break}let ct=M[at];ct&&ct.connect(it)}}let O=new H,B=new H;function V($,X,it){O.setFromMatrixPosition(X.matrixWorld),B.setFromMatrixPosition(it.matrixWorld);let at=O.distanceTo(B),ct=X.projectionMatrix.elements,gt=it.projectionMatrix.elements,Ot=ct[14]/(ct[10]-1),Rt=ct[14]/(ct[10]+1),Wt=(ct[9]+1)/ct[5],se=(ct[9]-1)/ct[5],qt=(ct[8]-1)/ct[0],Se=(gt[8]+1)/gt[0],He=Ot*qt,fn=Ot*Se,Ae=at/(-qt+Se),Ue=Ae*-qt;if(X.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ue),$.translateZ(Ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ct[10]===-1)$.projectionMatrix.copy(X.projectionMatrix),$.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let q=Ot+Ae,je=Rt+Ae,ge=He-Ue,z=fn+(at-Ue),P=Wt*Rt/je*q,Z=se*Rt/je*q;$.projectionMatrix.makePerspective(ge,z,P,Z,q,je),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function et($,X){X===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(X.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let X=$.near,it=$.far;g.texture!==null&&(g.depthNear>0&&(X=g.depthNear),g.depthFar>0&&(it=g.depthFar)),I.near=R.near=w.near=X,I.far=R.far=w.far=it,(E!==I.near||L!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),E=I.near,L=I.far),I.layers.mask=$.layers.mask|6,w.layers.mask=I.layers.mask&-5,R.layers.mask=I.layers.mask&-3;let at=$.parent,ct=I.cameras;et(I,at);for(let gt=0;gt<ct.length;gt++)et(ct[gt],at);ct.length===2?V(I,w,R):I.projectionMatrix.copy(w.projectionMatrix),S===null&&$.isPerspectiveCamera&&(S={camera:$,fov:$.fov,zoom:$.zoom}),G($,I,at)};function G($,X,it){it===null?$.matrix.copy(X.matrixWorld):($.matrix.copy(it.matrixWorld),$.matrix.invert(),$.matrix.multiply(X.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(X.projectionMatrix),$.projectionMatrixInverse.copy(X.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=la*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function($){return p[$]};let K=null;function ot($,X){if(u=X.getViewerPose(c||o),m=X,u!==null){let it=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let at=!1;it.length!==I.cameras.length&&(I.cameras.length=0,at=!0);for(let Rt=0;Rt<it.length;Rt++){let Wt=it[Rt],se=null;if(d!==null)se=d.getViewport(Wt);else{let Se=h.getViewSubImage(f,Wt);se=Se.viewport,Rt===0&&(t.setRenderTargetTextures(v,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(v))}let qt=A[Rt];qt===void 0&&(qt=new nn,qt.layers.enable(Rt),qt.viewport=new Ce,A[Rt]=qt),qt.matrix.fromArray(Wt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Wt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(se.x,se.y,se.width,se.height),Rt===0&&(I.matrix.copy(qt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),at===!0&&I.cameras.push(qt)}let ct=r.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let Rt=h.getDepthInformation(it[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(Rt,r.renderState)}if(ct&&ct.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let Rt=0;Rt<it.length;Rt++){let Wt=it[Rt].camera;if(Wt){let se=p[Wt];se||(se=new Es,p[Wt]=se);let qt=h.getCameraImage(Wt);se.sourceTexture=qt}}}}for(let it=0;it<M.length;it++){let at=T[it],ct=M[it];at!==null&&ct!==void 0&&ct.update(at,X,c||o)}K&&K($,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),m=null}let dt=new xd;dt.setAnimationLoop(ot),this.setAnimationLoop=function($){K=$},this.dispose=function(){}}},k_=new we,Sd=new $t;Sd.set(-1,0,0,0,1,0,0,0,1);function z_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,su(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,_,y,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),y=_.envMap,v=_.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Sd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function V_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let T=M.program;n.uniformBlockBinding(v,T)}function c(v,M){let T=r[v.id];T===void 0&&(g(v),T=u(v),r[v.id]=T,v.addEventListener("dispose",_));let C=M.program;n.updateUBOMapping(v,C);let b=t.render.frame;s[v.id]!==b&&(f(v),s[v.id]=b)}function u(v){let M=h();v.__bindingPointIndex=M;let T=i.createBuffer(),C=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=r[v.id],T=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,S=T.length;b<S;b++){let w=T[b];if(Array.isArray(w))for(let R=0,A=w.length;R<A;R++)d(w[R],b,R,C);else d(w,b,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,T,C){if(x(v,M,T,C)===!0){let b=v.__offset,S=v.value;if(Array.isArray(S)){let w=0;for(let R=0;R<S.length;R++){let A=S[R],I=p(A);m(A,v.__data,w),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(w+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(S,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function m(v,M,T){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,T)}function x(v,M,T,C){let b=v.value,S=M+"_"+T;if(C[S]===void 0)return typeof b=="number"||typeof b=="boolean"?C[S]=b:ArrayBuffer.isView(b)?C[S]=b.slice():C[S]=b.clone(),!0;{let w=C[S];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return C[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(w.equals(b)===!1)return w.copy(b),!0}}return!1}function g(v){let M=v.uniforms,T=0,C=16;for(let S=0,w=M.length;S<w;S++){let R=Array.isArray(M[S])?M[S]:[M[S]];for(let A=0,I=R.length;A<I;A++){let E=R[A],L=Array.isArray(E.value)?E.value:[E.value];for(let F=0,D=L.length;F<D;F++){let k=L[F],O=p(k),B=T%C,V=B%O.boundary,et=B+V;T+=V,et!==0&&C-et<O.storage&&(T+=C-et),E.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=T,T+=O.storage}}}let b=T%C;return b>0&&(T+=C-b),v.__size=T,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",v),M}function _(v){let M=v.target;M.removeEventListener("dispose",_);let T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function y(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}var G_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function H_(){return $n===null&&($n=new fa(G_,16,16,Di,Nn),$n.name="DFG_LUT",$n.minFilter=Ze,$n.magFilter=Ze,$n.wrapS=xn,$n.wrapT=xn,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var or=class{constructor(t={}){let{canvas:e=Bf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=vn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,g=new Set([Va,za,ka]),p=new Set([vn,Fn,qr,$r,Oa,Ba]),_=new Uint32Array(4),y=new Int32Array(4),v=new H,M=null,T=null,C=[],b=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,R=!1,A=null,I=null,E=null,L=null;this._outputColorSpace=De;let F=0,D=0,k=null,O=-1,B=null,V=new Ce,et=new Ce,G=null,K=new J(0),ot=0,dt=e.width,$=e.height,X=1,it=null,at=null,ct=new Ce(0,0,dt,$),gt=new Ce(0,0,dt,$),Ot=!1,Rt=new ws,Wt=!1,se=!1,qt=new we,Se=new H,He=new Ce,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Ue(){return k===null?X:1}let q=n;function je(N,W){return e.getContext(N,W)}let ge,z,P,Z,tt,rt,pt,mt,st,ut,xt,Ft,yt,bt,Dt,Vt,Jt,Y,vt,lt,_t,Tt,ht;try{let N={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",En,!1),q===null){let W="webgl2";if(q=je(W,N),q===null)throw je(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(N){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Ht("WebGLRenderer: "+N.message),N}function Nt(){ge=new Kb(q),ge.init(),_t=new U_(q,ge),z=new zb(q,ge,t,_t),P=new D_(q,ge),z.reversedDepthBuffer&&f&&P.buffers.depth.setReversed(!0),I=q.createFramebuffer(),E=q.createFramebuffer(),L=q.createFramebuffer(),Z=new Qb(q),tt=new __,rt=new N_(q,ge,P,tt,z,_t,Z),pt=new Zb(w),mt=new eg(q),Tt=new Bb(q,mt),st=new Jb(q,mt,Z,Tt),ut=new ev(q,st,mt,Tt,Z),Y=new tv(q,z,rt),Dt=new Vb(tt),xt=new v_(w,pt,ge,z,Tt,Dt),Ft=new z_(w,tt),yt=new M_,bt=new R_(ge),Jt=new Ob(w,pt,P,ut,m,l),Vt=new F_(w,ut,z),ht=new V_(q,Z,z,P),vt=new kb(q,ge,Z),lt=new jb(q,ge,Z),Z.programs=xt.programs,w.capabilities=z,w.extensions=ge,w.properties=tt,w.renderLists=yt,w.shadowMap=Vt,w.state=P,w.info=Z}x!==vn&&(S=new iv(x,e.width,e.height,a,r,s));let It=new Ru(w,q);this.xr=It,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let N=ge.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=ge.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(N){N!==void 0&&(X=N,this.setSize(dt,$,!1))},this.getSize=function(N){return N.set(dt,$)},this.setSize=function(N,W,nt=!0){if(It.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=N,$=W,e.width=Math.floor(N*X),e.height=Math.floor(W*X),nt===!0&&(e.style.width=N+"px",e.style.height=W+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,N,W)},this.getDrawingBufferSize=function(N){return N.set(dt*X,$*X).floor()},this.setDrawingBufferSize=function(N,W,nt){dt=N,$=W,X=nt,e.width=Math.floor(N*nt),e.height=Math.floor(W*nt),this.setViewport(0,0,N,W)},this.setEffects=function(N){if(x===vn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let W=0;W<N.length;W++)if(N[W].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(V)},this.getViewport=function(N){return N.copy(ct)},this.setViewport=function(N,W,nt,j){N.isVector4?ct.set(N.x,N.y,N.z,N.w):ct.set(N,W,nt,j),P.viewport(V.copy(ct).multiplyScalar(X).round())},this.getScissor=function(N){return N.copy(gt)},this.setScissor=function(N,W,nt,j){N.isVector4?gt.set(N.x,N.y,N.z,N.w):gt.set(N,W,nt,j),P.scissor(et.copy(gt).multiplyScalar(X).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(N){P.setScissorTest(Ot=N)},this.setOpaqueSort=function(N){it=N},this.setTransparentSort=function(N){at=N},this.getClearColor=function(N){return N.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(N=!0,W=!0,nt=!0){let j=0;if(N){let Q=!1;if(k!==null){let wt=k.texture.format;Q=g.has(wt)}if(Q){let wt=k.texture.type,At=p.has(wt),St=Jt.getClearColor(),Ct=Jt.getClearAlpha(),Lt=St.r,jt=St.g,ne=St.b;At?(_[0]=Lt,_[1]=jt,_[2]=ne,_[3]=Ct,q.clearBufferuiv(q.COLOR,0,_)):(y[0]=Lt,y[1]=jt,y[2]=ne,y[3]=Ct,q.clearBufferiv(q.COLOR,0,y))}else j|=q.COLOR_BUFFER_BIT}W&&(j|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(j|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&q.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),A=N},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Jt.dispose(),yt.dispose(),bt.dispose(),tt.dispose(),pt.dispose(),ut.dispose(),Tt.dispose(),ht.dispose(),xt.dispose(),It.dispose(),It.removeEventListener("sessionstart",xh),It.removeEventListener("sessionend",bh),Xi.stop()};function ve(N){N.preventDefault(),ru("WebGLRenderer: Context Lost."),R=!0}function de(){ru("WebGLRenderer: Context Restored."),R=!1;let N=Z.autoReset,W=Vt.enabled,nt=Vt.autoUpdate,j=Vt.needsUpdate,Q=Vt.type;Nt(),Z.autoReset=N,Vt.enabled=W,Vt.autoUpdate=nt,Vt.needsUpdate=j,Vt.type=Q}function En(N){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function kn(N){let W=N.target;W.removeEventListener("dispose",kn),Zm(W)}function Zm(N){Km(N),tt.remove(N)}function Km(N){let W=tt.get(N).programs;W!==void 0&&(W.forEach(function(nt){xt.releaseProgram(nt)}),N.isShaderMaterial&&xt.releaseShaderCache(N))}this.renderBufferDirect=function(N,W,nt,j,Q,wt){W===null&&(W=fn);let At=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,St=Qm(N,W,nt,j,Q);P.setMaterial(j,At);let Ct=nt.index,Lt=1;if(j.wireframe===!0){if(Ct=st.getWireframeAttribute(nt),Ct===void 0)return;Lt=2}let jt=nt.drawRange,ne=nt.attributes.position,Pt=jt.start*Lt,pe=(jt.start+jt.count)*Lt;wt!==null&&(Pt=Math.max(Pt,wt.start*Lt),pe=Math.min(pe,(wt.start+wt.count)*Lt)),Ct!==null?(Pt=Math.max(Pt,0),pe=Math.min(pe,Ct.count)):ne!=null&&(Pt=Math.max(Pt,0),pe=Math.min(pe,ne.count));let Oe=pe-Pt;if(Oe<0||Oe===1/0)return;Tt.setup(Q,j,St,nt,Ct);let ye,be=vt;if(Ct!==null&&(ye=mt.get(Ct),be=lt,be.setIndex(ye)),Q.isMesh)j.wireframe===!0?(P.setLineWidth(j.wireframeLinewidth*Ue()),be.setMode(q.LINES)):be.setMode(q.TRIANGLES);else if(Q.isLine){let Qe=j.linewidth;Qe===void 0&&(Qe=1),P.setLineWidth(Qe*Ue()),Q.isLineSegments?be.setMode(q.LINES):Q.isLineLoop?be.setMode(q.LINE_LOOP):be.setMode(q.LINE_STRIP)}else Q.isPoints?be.setMode(q.POINTS):Q.isSprite&&be.setMode(q.TRIANGLES);if(Q.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))be.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Qe=Q._multiDrawStarts,Et=Q._multiDrawCounts,cn=Q._multiDrawCount,ce=Ct?mt.get(Ct).bytesPerElement:1,_n=tt.get(j).currentProgram.getUniforms();for(let zn=0;zn<cn;zn++)_n.setValue(q,"_gl_DrawID",zn),be.render(Qe[zn]/ce,Et[zn])}else if(Q.isInstancedMesh)be.renderInstances(Pt,Oe,Q.count);else if(nt.isInstancedBufferGeometry){let Qe=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Et=Math.min(nt.instanceCount,Qe);be.renderInstances(Pt,Oe,Et)}else be.render(Pt,Oe)};function gh(N,W,nt,j){A!==null&&N.isNodeMaterial&&A.setObject(j,N),Wt===!0&&Dt.setState(N,nt,!1),N.transparent===!0&&N.side===fe&&N.forceSinglePass===!1?(N.side=Je,N.needsUpdate=!0,wo(N,W,j),N.side=Yn,N.needsUpdate=!0,wo(N,W,j),N.side=fe):wo(N,W,j)}this.compile=function(N,W,nt=null){nt===null&&(nt=N),A!==null&&A.renderStart(N,W,nt),T=bt.get(nt),T.init(W),b.push(T),nt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),N!==nt&&N.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights(),A!==null&&A.updateLights(T.state.lightsArray),se=this.localClippingEnabled,Wt=Dt.init(this.clippingPlanes,se),Wt===!0&&Dt.setGlobalState(this.clippingPlanes,W),A!==null&&Vt.render(T.state.shadowsArray,nt,W);let j=new Set;return N.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let wt=Q.material;if(wt)if(Array.isArray(wt))for(let At=0;At<wt.length;At++){let St=wt[At];gh(St,nt,W,Q),j.add(St)}else gh(wt,nt,W,Q),j.add(wt)}),T=b.pop(),A!==null&&A.renderEnd(),j},this.compileAsync=function(N,W,nt=null){let j=this.compile(N,W,nt);return new Promise(Q=>{function wt(){if(j.forEach(function(At){let Ct=tt.get(At).currentProgram;(Ct===void 0||Ct.isReady())&&j.delete(At)}),j.size===0){Q(N);return}setTimeout(wt,10)}ge.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ql=null;function Jm(N){Ql&&Ql(N)}function xh(){Xi.stop()}function bh(){Xi.start()}let Xi=new xd;Xi.setAnimationLoop(Jm),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(N){Ql=N,It.setAnimationLoop(N),N===null?Xi.stop():Xi.start()},It.addEventListener("sessionstart",xh),It.addEventListener("sessionend",bh),this.render=function(N,W){if(W!==void 0&&W.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;A!==null&&A.renderStart(N,W);let nt=It.enabled===!0&&It.isPresenting===!0,j=S!==null&&(k===null||nt)&&S.begin(w,k);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(W),W=It.getCamera()),N.isScene===!0&&N.onBeforeRender(w,N,W,k),T=bt.get(N,b.length),T.init(W),T.state.textureUnits=rt.getTextureUnits(),b.push(T),qt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Rt.setFromProjectionMatrix(qt,In,W.reversedDepth),se=this.localClippingEnabled,Wt=Dt.init(this.clippingPlanes,se),M=yt.get(N,C.length),M.init(),C.push(M),It.enabled===!0&&It.isPresenting===!0){let At=w.xr.getDepthSensingMesh();At!==null&&tc(At,W,-1/0,w.sortObjects)}tc(N,W,0,w.sortObjects),M.finish(),A!==null&&A.updateLights(T.state.lightsArray),w.sortObjects===!0&&M.sort(it,at),Ae=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Ae&&Jt.addToRenderList(M,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Wt===!0&&Dt.beginShadows();let Q=T.state.shadowsArray;if(Vt.render(Q,N,W),Wt===!0&&Dt.endShadows(),(j&&S.hasRenderPass())===!1){let At=M.opaque,St=M.transmissive;if(T.setupLights(),W.isArrayCamera){let Ct=W.cameras;if(St.length>0)for(let Lt=0,jt=Ct.length;Lt<jt;Lt++){let ne=Ct[Lt];_h(At,St,N,ne)}Ae&&Jt.render(N);for(let Lt=0,jt=Ct.length;Lt<jt;Lt++){let ne=Ct[Lt];vh(M,N,ne,ne.viewport)}}else St.length>0&&_h(At,St,N,W),Ae&&Jt.render(N),vh(M,N,W)}k!==null&&D===0&&(rt.updateMultisampleRenderTarget(k),rt.updateRenderTargetMipmap(k)),j&&S.end(w),N.isScene===!0&&N.onAfterRender(w,N,W),Tt.resetDefaultState(),O=-1,B=null,b.pop(),b.length>0?(T=b[b.length-1],rt.setTextureUnits(T.state.textureUnits),Wt===!0&&Dt.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,A!==null&&A.renderEnd()};function tc(N,W,nt,j){if(N.visible===!1)return;if(N.layers.test(W.layers)){if(N.isGroup)nt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(W);else if(N.isLightProbeGrid)T.pushLightProbeGrid(N);else if(N.isLight)T.pushLight(N),N.castShadow&&T.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(Rt)){j&&He.setFromMatrixPosition(N.matrixWorld).applyMatrix4(qt);let At=ut.update(N),St=N.material;St.visible&&M.push(N,At,St,nt,He.z,null,W)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(Rt))){let At=ut.update(N),St=N.material;if(j&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),He.copy(N.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),He.copy(At.boundingSphere.center)),He.applyMatrix4(N.matrixWorld).applyMatrix4(qt)),Array.isArray(St)){let Ct=At.groups;for(let Lt=0,jt=Ct.length;Lt<jt;Lt++){let ne=Ct[Lt],Pt=St[ne.materialIndex];Pt&&Pt.visible&&M.push(N,At,Pt,nt,He.z,ne,W)}}else St.visible&&M.push(N,At,St,nt,He.z,null,W)}}let wt=N.children;for(let At=0,St=wt.length;At<St;At++)tc(wt[At],W,nt,j)}function vh(N,W,nt,j){let{opaque:Q,transmissive:wt,transparent:At}=N;T.setupLightsView(nt),Wt===!0&&Dt.setGlobalState(w.clippingPlanes,nt),j&&P.viewport(V.copy(j)),Q.length>0&&So(Q,W,nt),wt.length>0&&So(wt,W,nt),At.length>0&&So(At,W,nt),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function _h(N,W,nt,j){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){let Pt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new sn(1,1,{generateMipmaps:!0,type:Pt?Nn:vn,minFilter:Li,samples:Math.max(4,z.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let wt=T.state.transmissionRenderTarget[j.id],At=j.viewport||V;wt.setSize(At.z*w.transmissionResolutionScale,At.w*w.transmissionResolutionScale);let St=w.getRenderTarget(),Ct=w.getActiveCubeFace(),Lt=w.getActiveMipmapLevel();w.setRenderTarget(wt),w.getClearColor(K),ot=w.getClearAlpha(),ot<1&&w.setClearColor(16777215,.5),w.clear(),Ae&&Jt.render(nt);let jt=w.toneMapping;w.toneMapping=Ln;let ne=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),Wt===!0&&Dt.setGlobalState(w.clippingPlanes,j),So(N,nt,j),rt.updateMultisampleRenderTarget(wt),rt.updateRenderTargetMipmap(wt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let pe=0,Oe=W.length;pe<Oe;pe++){let ye=W[pe],{object:be,geometry:Qe,material:Et,group:cn}=ye;if(Et.side===fe&&be.layers.test(j.layers)){let ce=Et.side;Et.side=Je,Et.needsUpdate=!0,yh(be,nt,j,Qe,Et,cn),Et.side=ce,Et.needsUpdate=!0,Pt=!0}}Pt===!0&&(rt.updateMultisampleRenderTarget(wt),rt.updateRenderTargetMipmap(wt))}w.setRenderTarget(St,Ct,Lt),w.setClearColor(K,ot),ne!==void 0&&(j.viewport=ne),w.toneMapping=jt}function So(N,W,nt){let j=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,wt=N.length;Q<wt;Q++){let At=N[Q],{object:St,geometry:Ct,group:Lt}=At,jt=At.material;jt.allowOverride===!0&&j!==null&&(jt=j),St.layers.test(nt.layers)&&yh(St,W,nt,Ct,jt,Lt)}}function yh(N,W,nt,j,Q,wt){A!==null&&Q.isNodeMaterial&&A.setObject(N,Q),N.onBeforeRender(w,W,nt,j,Q,wt),N.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Q.onBeforeRender(w,W,nt,j,N,wt),Q.transparent===!0&&Q.side===fe&&Q.forceSinglePass===!1?(Q.side=Je,Q.needsUpdate=!0,w.renderBufferDirect(nt,W,j,Q,N,wt),Q.side=Yn,Q.needsUpdate=!0,w.renderBufferDirect(nt,W,j,Q,N,wt),Q.side=fe):w.renderBufferDirect(nt,W,j,Q,N,wt),N.onAfterRender(w,W,nt,j,Q,wt)}function wo(N,W,nt){W.isScene!==!0&&(W=fn);let j=tt.get(N),Q=T.state.lights,wt=T.state.shadowsArray,At=Q.state.version,St=xt.getParameters(N,Q.state,wt,W,nt,T.state.lightProbeGridArray),Ct=xt.getProgramCacheKey(St),Lt=j.programs;j.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?W.environment:null,j.fog=W.fog;let jt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;j.envMap=pt.get(N.envMap||j.environment,jt),j.envMapRotation=j.environment!==null&&N.envMap===null?W.environmentRotation:N.envMapRotation,Lt===void 0&&(N.addEventListener("dispose",kn),Lt=new Map,j.programs=Lt);let ne=Lt.get(Ct);if(ne!==void 0){if(j.currentProgram===ne&&j.lightsStateVersion===At)return Sh(N,St),ne}else St.uniforms=xt.getUniforms(N),A!==null&&N.isNodeMaterial&&A.build(N,nt,St),N.onBeforeCompile(St,w),ne=xt.acquireProgram(St,Ct),Lt.set(Ct,ne),j.uniforms=St.uniforms;let Pt=j.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Pt.clippingPlanes=Dt.uniform),Sh(N,St),j.needsLights=e0(N),j.lightsStateVersion=At,j.needsLights&&(Pt.ambientLightColor.value=Q.state.ambient,Pt.lightProbe.value=Q.state.probe,Pt.sunLights.value=Q.state.sun,Pt.sunLightShadows.value=Q.state.sunShadow,Pt.directionalLights.value=Q.state.directional,Pt.directionalLightShadows.value=Q.state.directionalShadow,Pt.spotLights.value=Q.state.spot,Pt.spotLightShadows.value=Q.state.spotShadow,Pt.rectAreaLights.value=Q.state.rectArea,Pt.ltc_1.value=Q.state.rectAreaLTC1,Pt.ltc_2.value=Q.state.rectAreaLTC2,Pt.pointLights.value=Q.state.point,Pt.pointLightShadows.value=Q.state.pointShadow,Pt.hemisphereLights.value=Q.state.hemi,Pt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Pt.sunShadowCascade.value=Q.state.sunShadowCascade,Pt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Pt.spotLightMatrix.value=Q.state.spotLightMatrix,Pt.spotLightMap.value=Q.state.spotLightMap,Pt.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=T.state.lightProbeGridArray.length>0,j.currentProgram=ne,j.uniformsList=null,ne}function Mh(N){if(N.uniformsList===null){let W=N.currentProgram.getUniforms();N.uniformsList=Jr.seqWithValue(W.seq,N.uniforms)}return N.uniformsList}function Sh(N,W){let nt=tt.get(N);nt.outputColorSpace=W.outputColorSpace,nt.batching=W.batching,nt.batchingColor=W.batchingColor,nt.instancing=W.instancing,nt.instancingColor=W.instancingColor,nt.instancingMorph=W.instancingMorph,nt.skinning=W.skinning,nt.morphTargets=W.morphTargets,nt.morphNormals=W.morphNormals,nt.morphColors=W.morphColors,nt.morphTargetsCount=W.morphTargetsCount,nt.numClippingPlanes=W.numClippingPlanes,nt.numIntersection=W.numClipIntersection,nt.vertexAlphas=W.vertexAlphas,nt.vertexTangents=W.vertexTangents,nt.toneMapping=W.toneMapping}function jm(N,W){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;v.setFromMatrixPosition(W.matrixWorld);for(let nt=0,j=N.length;nt<j;nt++){let Q=N[nt];if(Q.texture!==null&&Q.boundingBox.containsPoint(v))return Q}return null}function Qm(N,W,nt,j,Q){W.isScene!==!0&&(W=fn),rt.resetTextureUnits();let wt=W.fog,At=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?W.environment:null,St=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:oe.workingColorSpace,Ct=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Lt=pt.get(j.envMap||At,Ct),jt=j.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ne=!!nt.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Pt=!!nt.morphAttributes.position,pe=!!nt.morphAttributes.normal,Oe=!!nt.morphAttributes.color,ye=Ln;j.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ye=w.toneMapping);let be=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Qe=be!==void 0?be.length:0,Et=tt.get(j),cn=T.state.lights;if(Wt===!0&&(se===!0||N!==B)){let _e=N===B&&j.id===O;Dt.setState(j,N,_e)}let ce=!1;j.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==cn.state.version||Et.outputColorSpace!==St||Q.isBatchedMesh&&Et.batching===!1||!Q.isBatchedMesh&&Et.batching===!0||Q.isBatchedMesh&&Et.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Et.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Et.instancing===!1||!Q.isInstancedMesh&&Et.instancing===!0||Q.isSkinnedMesh&&Et.skinning===!1||!Q.isSkinnedMesh&&Et.skinning===!0||Q.isInstancedMesh&&Et.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Et.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Et.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Et.instancingMorph===!1&&Q.morphTexture!==null||Et.envMap!==Lt||j.fog===!0&&Et.fog!==wt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Dt.numPlanes||Et.numIntersection!==Dt.numIntersection)||Et.vertexAlphas!==jt||Et.vertexTangents!==ne||Et.morphTargets!==Pt||Et.morphNormals!==pe||Et.morphColors!==Oe||Et.toneMapping!==ye||Et.morphTargetsCount!==Qe||!!Et.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Et.__version=j.version);let _n=Et.currentProgram;ce===!0&&(_n=wo(j,W,Q),A&&j.isNodeMaterial&&A.onUpdateProgram(j,_n,Et));let zn=!1,pi=!1,vr=!1,xe=_n.getUniforms(),Fe=Et.uniforms;if(P.useProgram(_n.program)&&(zn=!0,pi=!0,vr=!0),j.id!==O&&(O=j.id,pi=!0),Et.needsLights){let _e=jm(T.state.lightProbeGridArray,Q);Et.lightProbeGrid!==_e&&(Et.lightProbeGrid=_e,pi=!0)}if(zn||B!==N){P.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),xe.setValue(q,"projectionMatrix",N.projectionMatrix),xe.setValue(q,"viewMatrix",N.matrixWorldInverse);let gi=xe.map.cameraPosition;gi!==void 0&&gi.setValue(q,Se.setFromMatrixPosition(N.matrixWorld)),z.logarithmicDepthBuffer&&xe.setValue(q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&xe.setValue(q,"isOrthographic",N.isOrthographicCamera===!0),B!==N&&(B=N,pi=!0,vr=!0)}if(Et.needsLights&&(cn.state.sunShadowMap.length>0&&xe.setValue(q,"sunShadowMap",cn.state.sunShadowMap,rt),cn.state.directionalShadowMap.length>0&&xe.setValue(q,"directionalShadowMap",cn.state.directionalShadowMap,rt),cn.state.spotShadowMap.length>0&&xe.setValue(q,"spotShadowMap",cn.state.spotShadowMap,rt),cn.state.pointShadowMap.length>0&&xe.setValue(q,"pointShadowMap",cn.state.pointShadowMap,rt)),Q.isSkinnedMesh){xe.setOptional(q,Q,"bindMatrix"),xe.setOptional(q,Q,"bindMatrixInverse");let _e=Q.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),xe.setValue(q,"boneTexture",_e.boneTexture,rt))}Q.isBatchedMesh&&(xe.setOptional(q,Q,"batchingTexture"),xe.setValue(q,"batchingTexture",Q._matricesTexture,rt),xe.setOptional(q,Q,"batchingIdTexture"),xe.setValue(q,"batchingIdTexture",Q._indirectTexture,rt),xe.setOptional(q,Q,"batchingColorTexture"),Q._colorsTexture!==null&&xe.setValue(q,"batchingColorTexture",Q._colorsTexture,rt));let mi=nt.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&Y.update(Q,nt,_n),(pi||Et.receiveShadow!==Q.receiveShadow)&&(Et.receiveShadow=Q.receiveShadow,xe.setValue(q,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&W.environment!==null&&(Fe.envMapIntensity.value=W.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=H_()),pi){if(xe.setValue(q,"toneMappingExposure",w.toneMappingExposure),Et.needsLights&&t0(Fe,vr),wt&&j.fog===!0&&Ft.refreshFogUniforms(Fe,wt),Ft.refreshMaterialUniforms(Fe,j,X,$,T.state.transmissionRenderTarget[N.id]),Et.needsLights&&Et.lightProbeGrid){let _e=Et.lightProbeGrid;Fe.probesSH.value=_e.texture,Fe.probesMin.value.copy(_e.boundingBox.min),Fe.probesMax.value.copy(_e.boundingBox.max),Fe.probesResolution.value.copy(_e.resolution)}Jr.upload(q,Mh(Et),Fe,rt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Jr.upload(q,Mh(Et),Fe,rt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&xe.setValue(q,"center",Q.center),xe.setValue(q,"modelViewMatrix",Q.modelViewMatrix),xe.setValue(q,"normalMatrix",Q.normalMatrix),xe.setValue(q,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let _e=j.uniformsGroups;for(let gi=0,_r=_e.length;gi<_r;gi++){let Th=_e[gi];ht.update(Th,_n),ht.bind(Th,_n)}}return _n}function t0(N,W){N.ambientLightColor.needsUpdate=W,N.lightProbe.needsUpdate=W,N.sunLights.needsUpdate=W,N.sunLightShadows.needsUpdate=W,N.directionalLights.needsUpdate=W,N.directionalLightShadows.needsUpdate=W,N.pointLights.needsUpdate=W,N.pointLightShadows.needsUpdate=W,N.spotLights.needsUpdate=W,N.spotLightShadows.needsUpdate=W,N.rectAreaLights.needsUpdate=W,N.hemisphereLights.needsUpdate=W}function e0(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(N,W,nt){let j=tt.get(N);j.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),tt.get(N.texture).__webglTexture=W,tt.get(N.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:nt,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,W){let nt=tt.get(N);nt.__webglFramebuffer=W,nt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(N,W=0,nt=0){k=N,F=W,D=nt;let j=null,Q=!1,wt=!1;if(N){let St=tt.get(N);if(St.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(q.FRAMEBUFFER,St.__webglFramebuffer),V.copy(N.viewport),et.copy(N.scissor),G=N.scissorTest,P.viewport(V),P.scissor(et),P.setScissorTest(G),O=-1;return}else if(St.__webglFramebuffer===void 0)rt.setupRenderTarget(N);else if(St.__hasExternalTextures)rt.rebindTextures(N,tt.get(N.texture).__webglTexture,tt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let jt=N.depthTexture;if(St.__boundDepthTexture!==jt){if(jt!==null&&tt.has(jt)&&(N.width!==jt.image.width||N.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(N)}}let Ct=N.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(wt=!0);let Lt=tt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Lt[W])?j=Lt[W][nt]:j=Lt[W],Q=!0):N.samples>0&&rt.useMultisampledRTT(N)===!1?j=tt.get(N).__webglMultisampledFramebuffer:Array.isArray(Lt)?j=Lt[nt]:j=Lt,V.copy(N.viewport),et.copy(N.scissor),G=N.scissorTest}else V.copy(ct).multiplyScalar(X).floor(),et.copy(gt).multiplyScalar(X).floor(),G=Ot;if(nt!==0&&(j=I),P.bindFramebuffer(q.FRAMEBUFFER,j)&&P.drawBuffers(N,j),P.viewport(V),P.scissor(et),P.setScissorTest(G),Q){let St=tt.get(N.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,St.__webglTexture,nt)}else if(wt){let St=W;for(let Ct=0;Ct<N.textures.length;Ct++){let Lt=tt.get(N.textures[Ct]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,nt,St)}}else if(N!==null&&nt!==0){let St=tt.get(N.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,St.__webglTexture,nt)}O=-1};function wh(N){let W=tt.get(N);return(W.__readFormat!==N.format||W.__readType!==N.type)&&(W.__readFormat=N.format,W.__readType=N.type,W.__formatReadable=z.textureFormatReadable(N.format),W.__typeReadable=z.textureTypeReadable(N.type)),W}this.readRenderTargetPixels=function(N,W,nt,j,Q,wt,At,St=0){if(!(N&&N.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=tt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct){P.bindFramebuffer(q.FRAMEBUFFER,Ct);try{let Lt=N.textures[St],jt=Lt.format,ne=Lt.type;N.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+St);let Pt=wh(Lt);if(Pt.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=N.width-j&&nt>=0&&nt<=N.height-Q&&q.readPixels(W,nt,j,Q,_t.convert(jt),_t.convert(ne),wt)}finally{let Lt=k!==null?tt.get(k).__webglFramebuffer:null;P.bindFramebuffer(q.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(N,W,nt,j,Q,wt,At,St=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=tt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct)if(W>=0&&W<=N.width-j&&nt>=0&&nt<=N.height-Q){P.bindFramebuffer(q.FRAMEBUFFER,Ct);let Lt=N.textures[St],jt=Lt.format,ne=Lt.type;N.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+St);let Pt=wh(Lt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,pe),q.bufferData(q.PIXEL_PACK_BUFFER,wt.byteLength,q.STREAM_READ),q.readPixels(W,nt,j,Q,_t.convert(jt),_t.convert(ne),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Oe=k!==null?tt.get(k).__webglFramebuffer:null;P.bindFramebuffer(q.FRAMEBUFFER,Oe);let ye=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await zf(q,ye,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,pe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,wt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(pe),q.deleteSync(ye),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,W=null,nt=0){let j=Math.pow(2,-nt),Q=Math.floor(N.image.width*j),wt=Math.floor(N.image.height*j),At=W!==null?W.x:0,St=W!==null?W.y:0;rt.setTexture2D(N,0),q.copyTexSubImage2D(q.TEXTURE_2D,nt,0,0,At,St,Q,wt),P.unbindTexture()},this.copyTextureToTexture=function(N,W,nt=null,j=null,Q=0,wt=0){let At,St,Ct,Lt,jt,ne,Pt,pe,Oe,ye=N.isCompressedTexture?N.mipmaps[wt]:N.image;if(nt!==null)At=nt.max.x-nt.min.x,St=nt.max.y-nt.min.y,Ct=nt.isBox3?nt.max.z-nt.min.z:1,Lt=nt.min.x,jt=nt.min.y,ne=nt.isBox3?nt.min.z:0;else{let Fe=Math.pow(2,-Q);At=Math.floor(ye.width*Fe),St=Math.floor(ye.height*Fe),N.isDataArrayTexture?Ct=ye.depth:N.isData3DTexture?Ct=Math.floor(ye.depth*Fe):Ct=1,Lt=0,jt=0,ne=0}j!==null?(Pt=j.x,pe=j.y,Oe=j.z):(Pt=0,pe=0,Oe=0);let be=_t.convert(W.format),Qe=_t.convert(W.type),Et;W.isData3DTexture?(rt.setTexture3D(W,0),Et=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(rt.setTexture2DArray(W,0),Et=q.TEXTURE_2D_ARRAY):(rt.setTexture2D(W,0),Et=q.TEXTURE_2D),P.activeTexture(q.TEXTURE0),P.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),P.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),P.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);let cn=P.getParameter(q.UNPACK_ROW_LENGTH),ce=P.getParameter(q.UNPACK_IMAGE_HEIGHT),_n=P.getParameter(q.UNPACK_SKIP_PIXELS),zn=P.getParameter(q.UNPACK_SKIP_ROWS),pi=P.getParameter(q.UNPACK_SKIP_IMAGES);P.pixelStorei(q.UNPACK_ROW_LENGTH,ye.width),P.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ye.height),P.pixelStorei(q.UNPACK_SKIP_PIXELS,Lt),P.pixelStorei(q.UNPACK_SKIP_ROWS,jt),P.pixelStorei(q.UNPACK_SKIP_IMAGES,ne);let vr=N.isDataArrayTexture||N.isData3DTexture,xe=W.isDataArrayTexture||W.isData3DTexture;if(N.isDepthTexture){let Fe=tt.get(N),mi=tt.get(W),_e=tt.get(Fe.__renderTarget),gi=tt.get(mi.__renderTarget);P.bindFramebuffer(q.READ_FRAMEBUFFER,_e.__webglFramebuffer),P.bindFramebuffer(q.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let _r=0;_r<Ct;_r++)vr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,tt.get(N).__webglTexture,Q,ne+_r),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,tt.get(W).__webglTexture,wt,Oe+_r)),q.blitFramebuffer(Lt,jt,At,St,Pt,pe,At,St,q.DEPTH_BUFFER_BIT,q.NEAREST);P.bindFramebuffer(q.READ_FRAMEBUFFER,null),P.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(Q!==0||N.isRenderTargetTexture||tt.has(N)){let Fe=tt.get(N),mi=tt.get(W);P.bindFramebuffer(q.READ_FRAMEBUFFER,E),P.bindFramebuffer(q.DRAW_FRAMEBUFFER,L);for(let _e=0;_e<Ct;_e++)vr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Fe.__webglTexture,Q,ne+_e):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Fe.__webglTexture,Q),xe?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,mi.__webglTexture,wt,Oe+_e):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,mi.__webglTexture,wt),Q!==0?q.blitFramebuffer(Lt,jt,At,St,Pt,pe,At,St,q.COLOR_BUFFER_BIT,q.NEAREST):xe?q.copyTexSubImage3D(Et,wt,Pt,pe,Oe+_e,Lt,jt,At,St):q.copyTexSubImage2D(Et,wt,Pt,pe,Lt,jt,At,St);P.bindFramebuffer(q.READ_FRAMEBUFFER,null),P.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else xe?N.isDataTexture||N.isData3DTexture?q.texSubImage3D(Et,wt,Pt,pe,Oe,At,St,Ct,be,Qe,ye.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(Et,wt,Pt,pe,Oe,At,St,Ct,be,ye.data):q.texSubImage3D(Et,wt,Pt,pe,Oe,At,St,Ct,be,Qe,ye):N.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,wt,Pt,pe,At,St,be,Qe,ye.data):N.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,wt,Pt,pe,ye.width,ye.height,be,ye.data):q.texSubImage2D(q.TEXTURE_2D,wt,Pt,pe,At,St,be,Qe,ye);P.pixelStorei(q.UNPACK_ROW_LENGTH,cn),P.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ce),P.pixelStorei(q.UNPACK_SKIP_PIXELS,_n),P.pixelStorei(q.UNPACK_SKIP_ROWS,zn),P.pixelStorei(q.UNPACK_SKIP_IMAGES,pi),wt===0&&W.generateMipmaps&&q.generateMipmap(Et),P.unbindTexture()},this.initRenderTarget=function(N){tt.get(N).__webglFramebuffer===void 0&&rt.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?rt.setTextureCube(N,0):N.isData3DTexture?rt.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?rt.setTexture2DArray(N,0):rt.setTexture2D(N,0),P.unbindTexture()},this.resetState=function(){F=0,D=0,k=null,P.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};function wd(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function Td(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}function Ed(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var W_=[],Cu=new Map,X_=0;function Js(i){W_=i,Cu=new Map(i.flatMap(t=>t.items.map(e=>[Y_(t.id,e.id),e]))),X_++}function Y_(i,t){return`pack:${i}:${t}`}function q_(i){return i.startsWith("pack:")}var $_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Ad(i){return Te(i)?.parts.find(t=>t.screen)}function Te(i){if(!q_(i))return;let t=Cu.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=$_[e];return r?Cu.get(`pack:${r}:${n.join(":")}`):void 0}function hn(i,t){let e=Te(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return El;if(Rd.has(t.type))return Math.max(0,i.height-Cd(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return Pd(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:Qr(t)}}var ts={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Kn(i){return i==="hedge"||i==="fence"||i==="pergola"}function K_(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let h=s(c,u);o=Math.min(o,h),a=Math.max(a,h)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function J_(i,t,e,n){return ar(i,t)+ts[t.type]-js(i,t,e,n)}var Pu=-.2,Al={set:!1,level:Pu};function Id(i){let t=i?.settings.terrain??null;Al={set:t?.level!=null,level:t?.level??Pu}}function Rl(i,t){return Al.level}function Ld(i){return i.elevation>.3?0:Al.set?Al.level-i.elevation:Pu}function ar(i,t){return Ld(i)+(t.offset??0)}function js(i,t,e,n){return t.type==="pool"?0:K_(t,e,n)}function Fd(i,t,e){let n=(i.outdoor??[]).filter(s=>!Kn(s.type)&&s.type!=="pool"&&Kt([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?J_(i,r,t,e):Ld(i)}function Cl(i,t){return ar(i,t)+(t.above?Nd(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function j_(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?Nd(i):1.5}function Iu(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Kn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Kt(n,e.points)))}function Dd(i,t){return!t.above&&!Iu(i,t)?Pl(i,t)-.05:Cl(i,t)-j_(t)}function Pl(i,t){return Cl(i,t)-.15}function Nd(i){return i.height&&i.height>.3?i.height:1.2}var Q_={type:"none",pitch:35,overhang:.4},UT={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Q_}};var Ud=.3;var Od=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),El=1.75;var Rd=new Set(["lamp_downlight","lamp_spot"]);function Cd(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:.02}var Bd=new Set(["stairs","stairs_u"]);function kd(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),u=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:u,rise:e/n}}function zd(i){return Od.has(i)||!!Te(i)?.light}var ty=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Qr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Pd(i,t,e){let n=0;for(let r of i.furniture)!(ty.has(r.type)||Te(r.type)?.surface)||!Kt([t,e],Ni(r))||(n=Math.max(n,r.h));return n}var Z_=new Set([...Od,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var ey=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],ny=["standard","bars","glass_wall"];function lr(i,t){return i.type==="door"?i.style&&ey.includes(i.style)?i.style:t?"front":"interior":i.style&&ny.includes(i.style)?i.style:"standard"}function Vd(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=s-.5;if(l+c>u){let f=Math.max(0,u)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Gd(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Un(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function Jn(i){return Math.abs(Un(i))}function cr(i){let t=Un(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function Hd(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function Wd(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function Ni(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function Kt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}var qe=(i,t)=>[i[0]-t[0],i[1]-t[1]],Ui=(i,t)=>[i[0]+t[0],i[1]+t[1]],ui=(i,t)=>[i[0]*t,i[1]*t],to=(i,t)=>i[0]*t[0]+i[1]*t[1],es=(i,t)=>i[0]*t[1]-i[1]*t[0],Qs=i=>Math.hypot(i[0],i[1]),jn=i=>{let t=Qs(i)||1;return[i[0]/t,i[1]/t]},Xd=i=>[-i[1],i[0]],Yd=i=>[i[1],-i[0]];function hi(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),o=[],a=b=>{for(let S=0;S<o.length;S++)if(Math.abs(o[S][0]-b[0])<=n&&Math.abs(o[S][1]-b[1])<=n)return S;return o.push([b[0],b[1]]),o.length-1},l=[];for(let b of i){let S=b.points;if(S.length<3||Math.abs(Un(S))<1e-6)continue;let w=Un(S)>0,R=S.map(a);for(let A=0;A<S.length;A++){let I=R[A],E=R[(A+1)%S.length];I!==E&&l.push(w?{u:I,v:E,room:b.id,edge:A,forward:!0}:{u:E,v:I,room:b.id,edge:A,forward:!1})}}let c=s.map(b=>[a(b.a),a(b.b)]),u=new Set;for(let b of i){let S=b.points;S.length<3||(b.wall_splits??[]).forEach((w,R)=>{if(!w||R>=S.length)return;let A=S[R],I=qe(S[(R+1)%S.length],A),E=Qs(I);for(let L of w)L>n&&L<E-n&&u.add(a(Ui(A,ui(I,L/E))))})}let h=[];for(let b of l){let S=o[b.u],w=o[b.v],R=qe(w,S),A=Qs(R),I=ui(R,1/A),E=[];for(let F=0;F<o.length;F++){if(F===b.u||F===b.v)continue;let D=qe(o[F],S),k=to(D,I);k<=n||k>=A-n||Math.abs(es(I,D))<=n&&E.push({t:k,id:F})}E.sort((F,D)=>F.t-D.t);let L=[{t:0,id:b.u},...E,{t:A,id:b.v}];for(let F=0;F+1<L.length;F++){let D=L[F],k=L[F+1],O=b.forward?D.t:A-k.t,B=b.forward?k.t:A-D.t;h.push({u:D.id,v:k.id,room:b.room,edge:b.edge,t0:O,t1:B})}}let f=new Map;for(let b of h){let S=b.u<b.v?`${b.u}-${b.v}`:`${b.v}-${b.u}`,w=f.get(S);w||f.set(S,w=[]),w.push(b)}let d=b=>({room_id:b.room,edge:b.edge,t0:b.t0,t1:b.t1}),m=new Map;for(let b of h){let S=`${b.room}:${b.edge}`;m.set(S,[...m.get(S)??[],b.t0].sort((w,R)=>w-R))}let x=b=>{let S=i.find(R=>R.id===b.room)?.wall_heights?.[b.edge];if(!Array.isArray(S))return S;let w=m.get(`${b.room}:${b.edge}`)??[];return S[w.indexOf(b.t0)]??null},g=b=>{let S=b.map(x).filter(R=>typeof R=="number"&&R>0);if(S.length)return Math.min(...S);let w=b.map(R=>i.find(A=>A.id===R.room)?.ceiling_height);return w.every(R=>typeof R=="number"&&R>0)?Math.max(...w):void 0},p=b=>{let S=b.map(w=>i.find(R=>R.id===w.room)?.wall_thickness?.[w.edge]).filter(w=>typeof w=="number"&&w>0);return S.length?Math.max(...S):void 0},_=b=>b.some(S=>x(S)===0),y=[],v=[];for(let b of f.values()){let S=b[0],w=b.find(R=>R!==S&&R.u===S.v&&R.v===S.u&&R.room!==S.room);for(let R of b)R!==S&&R!==w&&R.room!==S.room&&r.push(`overlap:${S.room}:${R.room}`);if(_(w?[S,w]:[S])){w&&y.push([S.room,w.room]);continue}if(w){let R=p([S,w])??t.interior;v.push({a:S.u,b:S.v,left:R/2,right:R/2,exterior:!1,roomLeft:S.room,roomRight:w.room,sources:[d(S),d(w)],height:g([S,w])})}else v.push({a:S.u,b:S.v,left:0,right:p([S])??t.exterior,exterior:!0,roomLeft:S.room,roomRight:null,sources:[d(S)],height:g([S])})}let M=b=>jn(qe(o[b.b],o[b.a]));for(let b of v){if(b.exterior||b.free)continue;let S=new Set;for(let R of[b.a,b.b])for(let A of v)!A.exterior||A.free||A.a!==R&&A.b!==R||Math.abs(es(M(b),M(A)))>1e-6||(A.roomLeft===b.roomLeft?S.add("left"):A.roomLeft===b.roomRight&&S.add("right"));if(S.size!==1)continue;let w=b.left+b.right;S.has("left")?(b.left=0,b.right=w):(b.left=w,b.right=0)}s.forEach((b,S)=>{let[w,R]=c[S];if(w===R)return;let A=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],I=i.find(F=>F.points.length>=3&&Kt(A,F.points))?.id??null,E=(b.thickness??t.interior)/2,L=typeof b.height=="number"&&b.height>0?b.height:void 0;v.push({free:b.id,a:w,b:R,left:E,right:E,exterior:!1,roomLeft:I,roomRight:I,sources:[],height:L})}),v=ry(v,o,u);let T=oy(v,o);return{walls:v.map((b,S)=>{let w=o[b.a],R=o[b.b],A=T.get(`${S}:a`),I=T.get(`${S}:b`),E=ay([A.right,I.left,R,I.right,A.left,w],1e-6);return{id:iy(w,R),a:[w[0],w[1]],b:[R[0],R[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:E,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(r)],open:y}}function iy(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function qd(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function ry(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=qd(l)),c.a!==o&&(c=qd(c)),l.a===c.b)continue;let u=jn(qe(t[l.b],t[l.a])),h=jn(qe(t[c.b],t[c.a]));if(Math.abs(es(u,h))>1e-6||to(u,h)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:sy(l.sources,c.sources)},d=n.filter((m,x)=>x!==a[0]&&x!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function sy(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function oy(i,t){let e=new Map;i.forEach((r,s)=>{let o=jn(qe(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:ui(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Ui(o,ui(Xd(c.d),c.left)),right:Ui(o,ui(Yd(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let u=s[c],h=s[(c+1)%s.length],f=Ui(o,ui(Xd(u.d),u.left)),d=Ui(o,ui(Yd(h.d),h.right)),m=es(u.d,h.d);if(Math.abs(m)<1e-4)continue;let x=es(qe(d,f),h.d)/m,g=Ui(f,ui(u.d,x));Qs(qe(g,o))>l||(n.get(u.key).left=g,n.get(h.key).right=g)}}return n}function ay(i,t){let e=i.filter((r,s)=>Qs(qe(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=qe(o,s),c=qe(a,o);if(Math.abs(es(jn(l),jn(c)))<1e-7&&to(l,c)>0){e=e.filter((u,h)=>h!==r),n=!0;break}}}return e}function Lu(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=jn(qe(r,n));return Ui(n,ui(s,e))}function eo(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=jn(qe(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Ui(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function no(i,t,e){if(!t.wall)return ly(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=Lu(e.room,0,t.offset);return{wall:n,s:to(qe(r,n.a),jn(qe(n.b,n.a)))}}function ly(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Lu(t,e,n);return{wall:r,s:to(qe(o,r.a),jn(qe(r.b,r.a)))}}return null}var ro=Math.PI/180;function Qn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function wn(i){let t=Qn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ro),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ro);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=Qd(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}var cy=.14;function Zd(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function Kd(i,t,e){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let s of i.settings.roof.sections??[]){if(s.open)continue;let o=Math.min(s.x0,s.x1),a=Math.max(s.x0,s.x1),l=Math.min(s.z0,s.z1),c=Math.max(s.z0,s.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||s.points&&s.points.length>=3&&!Kt([t,e],s.points))continue;let[u,h]=Oi(s,t,e),f=s.shape==="flat"||s.shape==="parapet",d=Math.max(0,s.overhang??r),x=((f?null:so(is(s,{u0:d,u1:d,a:d,b:d}),u,h))??wn(s).y(h))-cy;n=n===null?x:Math.max(n,x)}return n}function Il(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=Jn(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=$d([a[0]-o[0],a[1]-o[1]]),u=$d([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],f=[u[1]*n,-u[0]*n],d=h[0]+f[0],m=h[1]+f[1],x=Math.hypot(d,m);if(x<1e-6){r.push([a[0]+h[0]*t,a[1]+h[1]*t]);continue}let g=(d*h[0]+m*h[1])/x,p=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/x*t*p,a[1]+m/x*t*p])}return r}function $d(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Jd(i,t){if(i.points&&i.points.length>=3)return Il(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}function jd(i,t,e,n){let r=hi(i,{exterior:e,interior:n},t).walls.filter(h=>h.exterior&&!h.free);if(!r.length)return null;let s=h=>`${Math.round(h[0]*1e3)}:${Math.round(h[1]*1e3)}`,o=new Map,a=r.map(h=>({a:h.a,b:h.b}));for(let h of a)for(let f of[h.a,h.b])o.set(s(f),[...o.get(s(f))??[],h]);let l=new Set,c=null;for(let h of a){if(l.has(h))continue;l.add(h);let f=[h.a,h.b],d=h.b;for(;;){let m=(o.get(s(d))??[]).find(x=>!l.has(x));if(!m||(l.add(m),d=s(m.a)===s(d)?m.b:m.a,s(d)===s(f[0])))break;f.push(d)}f.length>=3&&s(d)===s(f[0])&&(!c||Math.abs(Jn(f))>Math.abs(Jn(c)))&&(c=f)}if(!c)return null;let u=[];for(let h=0;h<c.length;h++){let f=c[(h+c.length-1)%c.length],d=c[h],m=c[(h+1)%c.length],x=(d[0]-f[0])*(m[1]-d[1])-(d[1]-f[1])*(m[0]-d[0]);Math.abs(x)>1e-6&&u.push(d)}return u.length>=3?Il(u,e):null}var io=Math.tan(30*ro);function Qd(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+io*(i-o+s))/(2*io))),u=a+(c-s)*io;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:f=>f<=s?t+f*n:f<=c?a+(f-s)*io:f<=i-o?l+(i-o-f)*io:e+(i-f)*r}}function is(i,t){let e=Qn(i),n=wn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(_,y)=>[_,y,n.y(y)],u=c(a,-s),h=c(l,-s),f=c(l,r+o),d=c(a,r+o),m=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ro),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ro);if(i.shape==="pent"){let _=[u,h,f,d];return{faces:[_],rim:_,ridges:[[f,d]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let _=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,r-n.vr)||r/2),y=[e.u0+_,n.vr,n.rh],v=[e.u1-_,n.vr,n.rh],M=i.shape==="pyramid"?[[u,h,y],[h,f,y],[f,d,y],[d,u,y]]:[[u,h,v,y],[y,v,f,d],[d,u,y],[h,f,v]],T=i.shape==="pyramid"?[[u,y],[d,y],[h,y],[f,y]]:[[y,v],[u,y],[d,y],[h,v],[f,v]];return{faces:M,rim:[u,h,f,d],ridges:T,gable:null}}if(i.shape==="halfhip"){let _=Math.min(n.y(0),n.y(r)),y=_+(n.rh-_)*.55,v=m>1e-6?Math.min(n.vr,(y-i.eave_a)/m):n.vr,M=x>1e-6?Math.max(n.vr,r-(y-i.eave_b)/x):n.vr,T=Math.min((e.u1-e.u0)/2-.1,(n.rh-y)/Math.max(.2,m)),C=[e.u0+T,n.vr,n.rh],b=[e.u1-T,n.vr,n.rh],S=[a,v,y],w=[a,M,y],R=[l,v,y],A=[l,M,y];return{faces:[[u,h,R,b,C,S],[C,b,A,f,d,w],[w,S,C],[R,A,b]],rim:[u,h,R,A,f,d,w,S],ridges:[[C,b],[S,C],[w,C],[R,b],[A,b]],gable:[[0,n.y(0)],[v,y],[M,y],[r,n.y(r)]]}}if(i.shape==="mansard"){let _=Qd(r,i.eave_a,i.eave_b,m,x),y=[a,_.vla,_.yla],v=[l,_.vla,_.yla],M=[a,r-_.vlb,_.ylb],T=[l,r-_.vlb,_.ylb],C=[a,_.vr,_.rh],b=[l,_.vr,_.rh];return{faces:[[u,h,v,y],[y,v,b,C],[C,b,T,M],[M,T,f,d]],rim:[u,h,v,b,T,f,d,M,C,y],ridges:[[C,b],[y,v],[M,T]],gable:[[0,n.y(0)],[_.vla,_.yla],[_.vr,_.rh],[r-_.vlb,_.ylb],[r,n.y(r)]]}}let g=[a,n.vr,n.rh],p=[l,n.vr,n.rh];return{faces:[[u,h,p,g],[g,p,f,d]],rim:[u,h,p,f,d,g],ridges:[[g,p]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function so(i,t,e){let n=null;for(let r of i.faces){if(!Kt([t,e],r.map(_=>[_[0],_[1]])))continue;let[s,o]=r,a=r.slice(2).find(_=>Math.abs((o[0]-s[0])*(_[1]-s[1])-(o[1]-s[1])*(_[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],u=o[1]-s[1],h=a[0]-s[0],f=a[2]-s[2],d=a[1]-s[1],m=c*d-u*f,x=u*h-l*d,g=l*f-c*h;if(Math.abs(x)<1e-9)continue;let p=s[2]-(m*(t-s[0])+g*(e-s[1]))/x;n=n===null?p:Math.min(n,p)}return n}function Oi(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function uy(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Ll(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=uy(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function Fu(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Qn(t),n=wn(t).rh,r=is(i,{u0:0,u1:0,a:0,b:0}),s=wn(i),o=m=>{let[x,g]=e.at(m,e.w/2),[p,_]=Oi(i,x,g);return so(r,p,_)??s.y(_)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,u=a?1:-1,h=Math.abs(c-l),f=c;for(let m=.5;m<h;m+=.05)if(o(l+u*m)>=n-.02){f=l+u*m;break}if(Math.abs(f-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=f:d.x0=f:c===e.u1?d.z1=f:d.z0=f,d}function tp(i,t){let e=Fu(i,t),n=Qn(e),r=wn(e),s=is(i,{u0:0,u1:0,a:0,b:0}),o=wn(i),a=f=>{let[d,m]=n.at(f,n.w/2),[x,g]=Oi(i,d,m);return so(s,x,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],h=Math.max(1,Math.ceil(c/.15));for(let f=0;f<h;f++){let d=c*f/h,m=c*(f+1)/h,x=l?n.u0+d:n.u1-d,g=l?n.u0+m:n.u1-m,p=a(g),_=1/0,y=-1/0;for(let b=0;b<=40;b++){let S=n.w*b/40;r.y(S)>p+.02&&(_=Math.min(_,S),y=Math.max(y,S))}if(!(y-_>.05))continue;let v=n.at(x,_),M=n.at(g,y),T=Oi(i,v[0],v[1]),C=Oi(i,M[0],M[1]);u.push({u0:Math.min(T[0],C[0]),u1:Math.max(T[0],C[0]),v0:Math.min(T[1],C[1]),v1:Math.max(T[1],C[1])})}return u}function ns(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),u=r(l);if(c&&s.push(a),c!==u){let h=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return s}function ep(i,t){let e=ns(i,0,t.u0,!0),n=ns(i,0,t.u1,!1),r=ns(ns(i,0,t.u0,!1),0,t.u1,!0),s=ns(r,1,t.v0,!0),o=ns(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(Jn(a.map(l=>[l[0],l[1]])))>1e-6)}function Fl(i,t,e){let n=Qn(t),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(u=>r.some(h=>Kt(u,h.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function np(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function hy(i){return wn(i).rh}function ip(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>Ll(n,l)??l);if(!r.length)return t.id;let s=Math.max(...r.map(l=>hy(l))),o=l=>l.rooms.some(c=>c.points.length>=3&&r.some(u=>{let[h,f]=c.points.reduce((d,m)=>[d[0]+m[0]/c.points.length,d[1]+m[1]/c.points.length],[0,0]);return h>=Math.min(u.x0,u.x1)&&h<=Math.max(u.x0,u.x1)&&f>=Math.min(u.z0,u.z1)&&f<=Math.max(u.z0,u.z1)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<s-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function Dl(i,t){let e=Un(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let u=l[c],h=l[(c+1)%l.length],f=a(u),d=a(h);if(f>=0&&n.push(u),f>=0!=d>=0){let m=f/(f-d);n.push([u[0]+(h[0]-u[0])*m,u[1]+(h[1]-u[1])*m])}}}return n}function rp(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var On=1e-4;function Du(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function sp(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>On&&a<1-On&&l>-On&&l<1+On?a:null}function Nu(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=On||o>=1-On?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<On?o:null}function fy(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(sp(n,r,o,a)!==null||Nu(o,n,r)!==null||Nu(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<On)return!0}}return Kt(i[0],t)||Kt(t[0],i)}function dy(i){let t=i.map(s=>Du(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],u=[0,1];t.forEach((h,f)=>{if(f!==o)for(let d=0;d<h.length;d++){let m=h[d],x=h[(d+1)%h.length],g=sp(l,c,m,x)??Nu(m,l,c);g!==null&&u.push(g)}}),u.sort((h,f)=>h-f);for(let h=1;h<u.length;h++){if(u[h]-u[h-1]<On)continue;let f=[l[0]+(c[0]-l[0])*u[h-1],l[1]+(c[1]-l[1])*u[h-1]],d=[l[0]+(c[0]-l[0])*u[h],l[1]+(c[1]-l[1])*u[h]],m=Math.hypot(d[0]-f[0],d[1]-f[1]),x=[(f[0]+d[0])/2+(d[1]-f[1])/m*.001,(f[1]+d[1])/2-(d[0]-f[0])/m*.001];t.some((g,p)=>p!==o&&Kt(x,g))||e.some(([g,p])=>Math.hypot(g[0]-f[0],g[1]-f[1])<On&&Math.hypot(p[0]-d[0],p[1]-d[1])<On)||e.push([f,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([u],h)=>!r.has(h)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&Du(o)>1e-6&&n.push(o)}return n}function Uu(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&fy(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:dy(s))}function py(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function op(i,t,e=.03){return i.every(n=>Kt(n,t)||t.some((r,s)=>py(n,r,t[(s+1)%t.length])<=e))}function Ou(i,t){let e=Du(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}var my=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var gy=["wall","pole","pillar","parcel","bank"];function lp(i){return my.includes(i.variant??"")?i.variant:"bin240"}function cp(i){return gy.includes(i.variant??"")?i.variant:"wall"}var Ne=["#3a3f47","#3a3f47"],ur=["#23262b","#23262b"],Bn=["#5a3b25","#5a3b25"],Ee=["#1f4fa8","#1f4fa8"],Bi=["#e3b616","#e3b616"],ae=["#2f7d3b","#2f7d3b"],ap={default:{rest:Ne,bio:Bn,paper:Ee,plastic:Bi,glass:ae,garden:ae,recycling:Bi,other:Ne},DE:{rest:ur,bio:Bn,paper:Ee,plastic:Bi,glass:ae,garden:ae,recycling:Bi},AT:{rest:Ne,bio:Bn,paper:[Ne[0],"#c0262d"],plastic:Bi,glass:ae,garden:ae},CH:{rest:["#d8d8d8","#d8d8d8"],bio:ae,paper:Ee,plastic:Ne,glass:ae,garden:ae},NL:{rest:Ne,bio:ae,paper:Ee,plastic:["#3a3f47","#e57a1f"],glass:ae,garden:ae},BE:{rest:Ne,bio:ae,paper:Ee,plastic:Ee,glass:ae,garden:ae},GB:{rest:ur,bio:["#3a3f47","#5a3b25"],paper:Ee,plastic:Ee,glass:ur,garden:Bn,recycling:Ee},US:{rest:ur,bio:ae,paper:Ee,plastic:Ee,glass:Ee,garden:ae,recycling:Ee},CA:{rest:ur,bio:ae,paper:Ee,plastic:Ee,glass:Ee,garden:ae,recycling:Ee},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ne,bio:Bn,paper:[Ne[0],"#e3b616"],plastic:[Ne[0],"#e3b616"],recycling:[Ne[0],"#e3b616"],glass:ae,garden:ae},IT:{rest:Ne,bio:Bn,paper:Ee,plastic:Bi,glass:ae,garden:ae},ES:{rest:Ne,bio:Bn,paper:Ee,plastic:Bi,glass:ae,garden:ae},PT:{rest:Ne,bio:Bn,paper:Ee,plastic:Bi,glass:ae,garden:ae},DK:{rest:ur,bio:ae,paper:Ee,plastic:Ne,glass:ae,garden:ae},SE:{rest:ur,bio:Bn,paper:Ee,plastic:Ne,glass:ae,garden:ae},NO:{rest:Ne,bio:Bn,paper:Ee,plastic:Ne,glass:ae,garden:ae},FI:{rest:Ne,bio:Bn,paper:Ee,plastic:Ne,glass:ae,garden:ae}},up="DE";function hp(){return up}function xy(i,t){return ap[t]?.[i]??ap.default[i]??Ne}function fp(i,t=up){let e=xy(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var hr=Bt(3662079,.95),Bu=Bt(3662079,1),ki=Bt(5995775,.34),dp=Bt(5995775,.22),Nl=[-.55,.83],Xt=-1,Ul=16,fr=32,pp=48,ku=64,ee=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=Xt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Zt;return t.setAttribute("position",new zt(this.p,3)),t.setAttribute("color",new zt(this.c,3)),t.setAttribute("fold",new zt(this.f,1)),this.uv&&t.setAttribute("uv",new zt(this.uv,2)),this.tile&&t.setAttribute("tile",new zt(this.tile,2)),t.computeBoundingSphere(),t}},Le=class{p=[];c=[];f=[];seg(t,e,n=hr,r=Xt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Xt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Xt),this.seg(c,a,n,s)}geometry(){let t=new Zt;return t.setAttribute("position",new zt(this.p,3)),t.setAttribute("color",new zt(this.c,3)),t.setAttribute("fold",new zt(this.f,1)),t}};function mp(i,t,e,n){let s=i.uv?2:0,o=(h,f)=>{let d=h*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(h,f,d)=>({p:h.p.map((m,x)=>m+(f.p[x]-m)*d),c:h.c.map((m,x)=>m+(f.c[x]-m)*d),uv:h.uv&&f.uv?h.uv.map((m,x)=>m+(f.uv[x]-m)*d):null,tile:h.tile}),l=(h,f,d)=>{for(let m=0;m<3;m++){let x=h*3+m;for(let g=0;g<3;g++)i.p[x*3+g]=f[m].p[g],i.c[x*3+g]=f[m].c[g];if(i.uv&&f[m].uv)for(let g=0;g<s;g++)i.uv[x*2+g]=f[m].uv[g];if(i.tile&&f[m].tile)for(let g=0;g<2;g++)i.tile[x*2+g]=f[m].tile[g];i.f[x]=d}},c=(h,f)=>{let d=i.p.length/9;for(let m of h)i.p.push(...m.p),i.c.push(...m.c),i.f.push(f),i.uv?.push(...m.uv??[.5,.5]),i.tile?.push(...m.tile??[0,1]);return d},u=i.p.length/9;for(let h=t;h<u;h++){let f=[o(h,0),o(h,1),o(h,2)],d=f.map(b=>b.p[1]>e+1e-6),m=f.map(b=>b.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!m.some(Boolean)){for(let b=0;b<3;b++)i.f[h*3+b]=n;continue}let x=i.f[h*3],g=(b,S)=>a(b,S,(e-b.p[1])/(S.p[1]-b.p[1])),p=d.filter(Boolean).length,_=p===1?d.indexOf(!0):d.indexOf(!1),y=f[_],v=f[(_+1)%3],M=f[(_+2)%3],T=g(y,v),C=g(M,y);p===1?(l(h,[y,T,C],n),c([T,v,M],x),c([T,M,C],x)):(l(h,[y,T,C],x),c([T,v,M],n),c([T,M,C],n))}}function gp(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let u=(e-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,e,l[2]+(c[2]-l[2])*u];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=h[d];let f=i.c.slice(s*6,s*6+3);i.p.push(...h,...c),i.c.push(...f,...f),i.f.push(n,n)}}var he=Math.PI/180;function Bt(i,t){let e=new J(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function by(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function zi(i,t=[]){let e=i.map(([n,r])=>new te(n,r));return Is.triangulateShape(e,t.map(n=>n.map(([r,s])=>new te(r,s))))}function xp(i,t,e,n,r,s,o){let a=new J(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let m=t[d],x=t[(d+1)%4],g=e[d],p=e[(d+1)%4],_=x[0]-m[0],y=x[1]-m[1],v=Math.hypot(_,y);if(v<1e-6)continue;let T=.8+.28*((y/v*Nl[0]-_/v*Nl[1]+1)/2),C=(g[0]+p[0]-m[0]-x[0])/2*(-y/v)+(g[1]+p[1]-m[1]-x[1])/2*(_/v),b=Math.max(0,Math.min(1,C/Math.max(1e-6,Math.hypot(C,r-n)))),S=Bt(s,l(n)*T).lerp(a,b),w=Bt(s,l(r)*T).lerp(a,b);i.tri([m[0],n,m[1]],[g[0],r,g[1]],[p[0],r,p[1]],S,w,w),i.tri([m[0],n,m[1]],[p[0],r,p[1]],[x[0],n,x[1]],S,w,S)}let[c,u,h,f]=e;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[h[0],r,h[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[h[0],r,h[1]],a))}function bp(i,t,e,n,r,s,o,a,l,c){let u=new J(l),h=[];for(let g=0;g<c;g++){let p=g/c*Math.PI*2;h.push({y:s+Math.cos(p)*o,s:r+Math.sin(p)*o})}let f=(g,p)=>{let _=t(g,h[p%c].s);return[_[0],h[p%c].y,_[1]]},d=t(e,r),m=t(n,r),x=(g,p,_,y,v)=>{let M=(p[1]-g[1])*(_[2]-g[2])-(p[2]-g[2])*(_[1]-g[1]),T=(p[2]-g[2])*(_[0]-g[0])-(p[0]-g[0])*(_[2]-g[2]),C=(p[0]-g[0])*(_[1]-g[1])-(p[1]-g[1])*(_[0]-g[0]);M*y[0]+T*y[1]+C*y[2]<0?i.tri(g,_,p,v):i.tri(g,p,_,v)};for(let g=0;g<c;g++){let p=(g+.5)/c*Math.PI*2,_=Bt(a,.62+.4*Math.max(0,Math.cos(p))),y=t((e+n)/2,r+Math.sin(p)*o),v=t((e+n)/2,r),M=[y[0]-v[0],Math.cos(p)*o,y[1]-v[1]];x(f(e,g),f(n,g+1),f(n,g),M,_),x(f(e,g),f(e,g+1),f(n,g+1),M,_)}for(let[g,p,_]of[[e,m,d],[n,d,m]]){let y=t(g,r),v=[y[0],s,y[1]],M=[_[0]-p[0],0,_[1]-p[1]];for(let T=0;T<c;T++)x(v,f(g,T),f(g,T+1),M,u)}}function Pe(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:m=>Math.max(e+.002,n(m[0],m[1])),l=o.aoFrom??e,c=o.fold??Xt,u=m=>.5+.5*Math.min(1,Math.max(0,(m-l)/1.6)),h=(o.holes??[]).map(m=>by(m)>0?[...m].reverse():m),f=h.length?[...t,...h.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:zi(t,h);if(o.topFace!==!1){let m=new J(s);for(let[x,g,p]of d){let _=f[x],y=f[g],v=f[p];i.tri([_[0],a(_),_[1]],[v[0],a(v),v[1]],[y[0],a(y),y[1]],m,m,m,void 0,o.topFold??c)}}if(o.bottom){let m=Bt(r,.55);for(let[x,g,p]of d){let _=f[x],y=f[g],v=f[p];i.tri([_[0],e,_[1]],[y[0],e,y[1]],[v[0],e,v[1]],m,m,m,void 0,c)}}for(let m of[t,...h])for(let x=0;x<m.length;x++){let g=m[x],p=m[(x+1)%m.length],_=p[0]-g[0],y=p[1]-g[1],v=Math.hypot(_,y);if(v<1e-6||o.skipSide?.(g,p))continue;let T=.8+.28*((y/v*Nl[0]-_/v*Nl[1]+1)/2),C=a(g),b=a(p),S=Bt(r,u(e)*T),w=Bt(r,u(C)*T),R=Bt(r,u(b)*T);i.tri([g[0],e,g[1]],[g[0],C,g[1]],[p[0],b,p[1]],S,w,R,void 0,c),i.tri([g[0],e,g[1]],[p[0],b,p[1]],[p[0],e,p[1]],S,R,S,void 0,c)}}var U={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},ft=Bt(5995775,.3),Ut=Bt(5995775,.17),Yt=Bt(3662079,.45),rs=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=wp(n)}rotated(t,e,n){let r=n*he,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let u=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];Pe(this.buf,zu(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==zu(l)&&(l.reverse(),c.reverse()),xp(this.buf,l,c,n,r,s,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,u);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,u),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,u=12,h=null){let f=Math.min(a,s-r)/2;if(f<1e-4||o<1e-4)return;let d=(r+s)/2,m=t==="x"?e:n,x=t==="x"?n:e,g=(p,_)=>t==="x"?this.tf(p,_):this.tf(_,p);if(bp(this.buf,g,m-o/2,m+o/2,x,d,f,l,c,u),h)for(let p of[m-o/2,m+o/2])for(let _=0;_<u;_++){let y=_/u*Math.PI*2,v=(_+1)/u*Math.PI*2;this.line(g(p,x+Math.sin(y)*f),g(p,x+Math.sin(v)*f),d+Math.cos(y)*f,d+Math.cos(v)*f,h)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let u=[];for(let h=0;h<l;h++){let f=h/l*Math.PI*2;u.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Pe(this.buf,zu(u),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let h=0;h<l;h++)this.line(u[h],u[(h+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=ft){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,Xt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function wp(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function zu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function dr(i,t,e,n,r,s,o=U.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let u of[-1,1])for(let h of[-1,1]){let f=u*l,d=h*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,o):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,o)}}function oo(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let u=1;u<o;u++){let h=t+c*u;i.seg(h,n,s,h,r,s,Ut)}for(let u=0;u<o;u++){let h=t+c*(u+.5),f=a??r-.08;if(l)i.seg(h-Math.min(.1,c/4),f,s+.012,h+Math.min(.1,c/4),f,s+.012,Yt);else{let d=o>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(d,f-.08,s+.012,d,f+.08,s+.012,Yt)}}}function vp(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),u=n*.5,h=Math.min(.24,e*.28);dr(i,t,e,.07,.05,.05,U.wood,!0),i.pad(s,o,.07,u-.08,a+.02,l,U.fabric,U.fabricTop,.04,ft),i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],u-.08,n,U.fabric,U.fabricTop,ft),i.pad(s,s+c,u-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,ft),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,ft);let d=(o-c-(s+c))/r;for(let m=0;m<r;m++){let x=s+c+d*m+.02,g=x+d-.04;i.pad(x,g,u-.08,u+.05,a+h+.02,l-.06,U.cushion,U.cushion,.04),i.loft([x+.01,g-.01,a+h*.55,a+h+.14],[x+.03,g-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,U.cushion)}}function _p(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),u=Math.min(.24,c*.28),h=Math.min(.2,c*.24),f=n*.5,d=n*.72,m=r?[-1,1]:[-1],x=(b,S)=>i.loft([b-.015,b+.015,S-.015,S+.015],[b-.025,b+.025,S-.025,S+.025],0,.07,U.wood);x(s+.06,a+.06),x(o-.06,a+.06),r||x(o-.06,a+c-.06);for(let b of m)x(b*(t/2-.06),l-.06),x(b*(t/2-c+.06),l-.06);i.pad(s,o,.07,f-.08,a+.02,a+c,U.fabric,U.fabricTop,.04,ft);for(let b of m){let[S,w]=b<0?[s+.02,s+c]:[o-c,o-.02];i.pad(S,w,.07,f-.08,a+c-.02,l,U.fabric,U.fabricTop,.04,ft)}i.loft([s,o,a,a+u],[s+.01,o-.01,a,a+u*.5],f-.08,n,U.fabric,U.fabricTop,ft);for(let b of m)b<0?i.loft([s,s+u,a+u,l],[s,s+u*.5,a+u,l-.01],f-.08,n,U.fabric,U.fabricTop,ft):i.loft([o-u,o,a+u,l],[o-u*.5,o,a+u,l-.01],f-.08,n,U.fabric,U.fabricTop,ft);for(let b of m){let[S,w]=b<0?[s+u,s+c]:[o-c,o-u];i.pad(S,w,f-.08,d,l-h,l,U.fabric,U.fabricTop,.04,ft)}r||i.pad(o-h,o,f-.08,d,a+.02,a+c-.02,U.fabric,U.fabricTop,.04,ft);let g=s+u,p=r?o-u:o-h,_=Math.max(1,Math.round((p-g)/.62)),y=(p-g)/_;for(let b=0;b<_;b++){let S=g+y*b+.02,w=S+y-.04;i.pad(S,w,f-.08,f+.05,a+u+.02,a+c-.04,U.cushion,U.cushion,.04),i.loft([S+.01,w-.01,a+u*.55,a+u+.14],[S+.03,w-.03,a+u*.4,a+u*.4+.06],f+.03,n*.93,U.cushion)}let v=a+c,M=l-h;if(M-v<.2)return;let T=Math.max(1,Math.round((M-v)/.62)),C=(M-v)/T;for(let b of m)for(let S=0;S<T;S++){let w=v+C*S+.02,R=w+C-.04;b<0?(i.pad(s+u+.02,s+c-.04,f-.08,f+.05,w,R,U.cushion,U.cushion,.04),i.loft([s+u*.55,s+u+.14,w+.01,R-.01],[s+u*.4,s+u*.4+.06,w+.03,R-.03],f+.03,n*.93,U.cushion)):(i.pad(o-c+.04,o-u-.02,f-.08,f+.05,w,R,U.cushion,U.cushion,.04),i.loft([o-u-.14,o-u*.55,w+.01,R-.01],[o-u*.4-.06,o-u*.4,w+.03,R-.03],f+.03,n*.93,U.cushion))}}function vy(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);dr(i,t,e,.08,.06,.03,U.wood,!0),i.box(o,a,.08,l,r+.06,s,U.wood,U.woodTop,ft),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,U.white,U.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,U.wood,U.woodTop,ft),i.box(o,a,n-.05,n,r,r+.09,U.wood,U.woodTop,Ut);let c=l+.2,u=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,s-.01,U.cushion,U.fabricTop,.025,Ut),i.lyingCyl("x",0,u+.05,c-.02,c+.09,t-.02,.1,U.cushion,U.fabricTop,8);let h=t>1.2?2:1,f=(t-.2)/h;for(let d=0;d<h;d++){let m=o+.1+f*d,x=r+.12,g=Math.min(.42,e*.2),p=.1;i.loft([m+.03+p,m+f-.03-p,x+p*.5,x+g-p*.5],[m+.03,m+f-.03,x,x+g],c,c+.06,U.whiteTop),i.loft([m+.03,m+f-.03,x,x+g],[m+.03+p,m+f-.03-p,x+p*.5,x+g-p*.5],c+.06,c+.12,U.whiteTop,U.whiteTop,Ut)}}function _y(i,t,e,n){let r=Math.min(.46,n*.52);dr(i,t,e,r-.04,.035,.02,U.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,U.wood,U.woodTop,ft),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,U.cushion,U.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,U.wood,U.woodTop,ft)}function yy(i,t,e,n){dr(i,t,e,n-.04,.06,.05,U.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,Yt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,U.body)}function My(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,U.wood,U.woodTop,ft),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,U.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,U.body,U.bodyTop,ft);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Ut);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,Yt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,U.dark,U.dark,Yt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,U.metal)}function Vi(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),oo(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function Sy(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,U.wood,U.woodTop,ft),i.box(t/2-.025,t/2,0,n,-e/2,e/2,U.wood,U.woodTop,ft),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,U.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,U.wood,U.woodTop,Ut),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let u=.03+c*7%5*.008,h=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+h,-e/2+.04,e/2-.05,c%3?U.fabric:U.cushion,U.fabricTop),l+=u+.006,c++}}}}function wy(i,t,e,n){let r=Math.max(1,Math.round(t/.6));Vi(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,ft)}function Ty(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,ft);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Ut);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,Yt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,Yt)}var Vu=(i,t)=>Bt(parseInt(i.slice(1),16),t).getHex();function Ey(i,t,e,n,r,s){let o=Vu(s[0],.55),a=Vu(s[1],.8),l=Vu(s[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,o,o,Ut),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,a,a,Ut),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,l,l,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,o,o,ft),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,a,l,Ut),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,a),i.box(t*.36,t*.42,n*.95,n,-.01,.01,a),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,a);return}if(r==="underground"){let h=Math.min(t,e)*.32;i.cyl(0,0,h,0,n*.9,o,o,16,ft),i.cyl(0,0,h*1.08,n*.9,n,a,l,16,Ut),i.box(-h*.5,h*.5,n*.62,n*.8,h*.7,h*1.02,U.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,U.metal,U.metal,Ut);return}if(r==="bin1100"){for(let f of[-1,1])for(let d of[-1,1])i.cyl(f*(t/2-.12),d*(e/2-.12),.05,0,.14,U.dark,U.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,o,o,ft),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,a,l,Ut),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,a,l,Ut);return}let c=Math.min(.2,n*.19),u=-e/2;for(let h of[-1,1])i.lyingCyl("x",h*(t/2-.05),u+c/2+.01,0,c,.05,c,U.dark,U.metal,12);i.loft([-t*.42,t*.42,u+.07,e/2-.05],[-t/2+.01,t/2-.01,u+.05,e/2-.01],.03,n-.05,o,o,ft),i.box(-t/2,t/2,n-.05,n,u+.03,e/2,a,l,Ut),i.box(-t*.42,t*.42,n-.1,n-.02,u,u+.04,a,l),r==="multi"&&(i.seg(-t/2,n+.002,(u+e/2)/2,t/2,n+.002,(u+e/2)/2,Yt),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Ut))}function Ay(i,t,e,n,r){let s=U.metal,o=Bt(U.metal,1.25).getHex(),a=Bt(U.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,U.wood,U.woodTop,Ut),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,s,o,ft),i.lyingCyl("z",0,0,n-c*.9,n,e,t,s,o,14,ft),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,U.dark,U.dark,Ut),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,s,o,12,Ut),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,s,o,ft),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,U.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,ft),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,o,Ut),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,U.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,ft);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let u=-t/2+t/3*l+.015,h=n/2*c+.015;i.box(u,u+t/3-.03,h,h+n/2-.03,e/2,e/2+.01,a,o,Ut),i.box(u+.04,u+t/3-.07,h+n/2-.09,h+n/2-.07,e/2+.01,e/2+.014,U.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,s,o,ft),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,s,o,ft),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,U.dark)}function Ry(i,t,e,n){let r=e/2-Tp;i.box(-t/2,t/2,.02,n,-e/2,r,U.body,U.bodyTop,ft),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,U.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Ut),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Ut))}var Tp=.06;function Ep(i,t,e,n){let r=t.rotation*he,s=Math.cos(r),o=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(E,L,F)=>[t.x+E*s-F*o,L,t.z+E*o+F*s],c=(E,L,F,D,k)=>{i.tri(E,L,F,k),i.tri(E,F,D,k),i.tri(E,F,L,k),i.tri(E,D,F,k)},u=(E,L,F,D)=>{let k=l(E[0],E[1],E[2]),O=l(L[0],L[1],L[2]),B=O[0]-k[0],V=O[1]-k[1],et=O[2]-k[2],G=Math.hypot(B,V,et)||1,K=[B/G,V/G,et/G],ot=Math.abs(K[1])>.9?[1,0,0]:[0,1,0],dt=[K[1]*ot[2]-K[2]*ot[1],K[2]*ot[0]-K[0]*ot[2],K[0]*ot[1]-K[1]*ot[0]],$=Math.hypot(dt[0],dt[1],dt[2])||1,X=[dt[0]/$*F,dt[1]/$*F,dt[2]/$*F],it=[K[1]*X[2]-K[2]*X[1],K[2]*X[0]-K[0]*X[2],K[0]*X[1]-K[1]*X[0]],at=[[1,1],[-1,1],[-1,-1],[1,-1]],ct=(gt,Ot)=>[gt[0]+X[0]*at[Ot][0]+it[0]*at[Ot][1],gt[1]+X[1]*at[Ot][0]+it[1]*at[Ot][1],gt[2]+X[2]*at[Ot][0]+it[2]*at[Ot][1]];for(let gt=0;gt<4;gt++){let Ot=(gt+1)%4;i.tri(ct(k,gt),ct(O,gt),ct(O,Ot),D),i.tri(ct(k,gt),ct(O,Ot),ct(k,Ot),D)}},h=(E,L,F,D,k,O,B,V)=>{c(l(E,D,k),l(L,D,k),l(L,D,O),l(E,D,O),V),c(l(E,F,O),l(L,F,O),l(L,D,O),l(E,D,O),B),c(l(E,F,k),l(L,F,k),l(L,F,O),l(E,F,O),B),c(l(E,F,k),l(E,F,O),l(E,D,O),l(E,D,k),B),c(l(L,F,k),l(L,F,O),l(L,D,O),l(L,D,k),B)},f=new J(U.body),d=new J(U.bodyTop),m=new J(U.accent),x=new J(1929098),g=new J(995141),p=(E,L,F,D,k)=>{let O=(B,V,et)=>[B[0]+(V[0]-B[0])*et,B[1]+(V[1]-B[1])*et,B[2]+(V[2]-B[2])*et];for(let B=0;B<k;B++){let V=O(E,L,B/k),et=O(E,L,(B+1)/k),G=O(F,D,(B+1)/k),K=O(F,D,B/k);c(l(V[0],V[1],V[2]),l(et[0],et[1],et[2]),l(G[0],G[1],G[2]),l(K[0],K[1],K[2]),B%2?x:g)}},_=t.w/2,y=-t.d/2,v=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),T=(t.awning_pitch??12)*Math.PI/180,C=(E,L)=>{t.awning_valance!==!1&&p([-_+.04,E,L+.01],[_-.04,E,L+.01],[-_+.04,E-.2,L+.01],[_-.04,E-.2,L+.01],M)},b=t.variant??"arm";if(b==="side"){let E=e,L=.05,F=0,D=-_+.08+a*(t.w-.16);h(-_,-_+.1,0,E+.05,F-.05,F+.05,f,d),h(_-.06,_,0,E+.05,F-.03,F+.03,f,d),a>.01&&p([-_+.1,E,F],[-_+.1,L,F],[D,E,F],[D,L,F],Math.max(4,Math.round((E-L)/.3))),u([D,L,F],[D,E,F],.02,m);return}if(b==="vertical"){let E=y,L=Math.min(t.d/2,y+v);h(-_,_,e,e+v,E,L,f,d);let F=(E+L)/2;for(let k of[-_+.02,_-.02])u([k,.02,F],[k,e,F],.02,m);let D=e-a*Math.max(0,e-.04);a>.01&&p([-_+.04,e,F],[_-.04,e,F],[-_+.04,D,F],[_-.04,D,F],M),u([-_+.03,D,F],[_-.03,D,F],.025,m);return}if(b==="pergola"){let E=t.d/2-.05,L=e+v,F=L-(E-y)*Math.tan(T);h(-_,_,e,L,y,y+v,f,d);for(let O of[-_+.05,_-.05])u([O,L,y+v],[O,F,E],.035,m),u([O,0,E],[O,F,E],.045,f);u([-_+.05,F,E],[_-.05,F,E],.035,m);let D=y+v+a*(E-y-v),k=L-(D-y)*Math.tan(T)+.04;a>.01&&p([-_+.08,L+.04,y+v],[_-.08,L+.04,y+v],[-_+.08,k,D],[_-.08,k,D],M),u([-_+.08,k,D],[_-.08,k,D],.025,m);return}let S=y,w=y+v;h(-_,_,e,e+v,S,w,f,d);let R=[w-.02,e+v*.35];if(b==="drop"){let E=Math.max(.3,t.d-v),L=[w,R[1]-E],F=a*(Math.PI/2+T),D=[L[0]+Math.sin(F)*E,L[1]+Math.cos(F)*E];for(let k of[-_+.08,_-.08])u([k,L[1],L[0]],[k,D[1],D[0]],.018,m);a>.01&&p([-_+.04,R[1],R[0]],[_-.04,R[1],R[0]],[-_+.04,D[1],D[0]],[_-.04,D[1],D[0]],M),u([-_+.02,D[1],D[0]],[_-.02,D[1],D[0]],.03,m),a>.05&&C(D[1],D[0]);return}let A=Math.max(0,t.d-v)*a,I=[R[0]+A,R[1]-A*Math.tan(T)];if(A>.01){p([-_+.04,R[1],R[0]],[_-.04,R[1],R[0]],[-_+.04,I[1],I[0]],[_-.04,I[1],I[0]],M);let E=Math.max(.3,(t.d-v)/2+.05);for(let L of[-1,1]){let F=L*(_-.12),D=[F,e+.02,w-.04],k=[F,I[1]-.02,I[0]],O=Math.hypot(k[2]-D[2],k[1]-D[1]),B=Math.sqrt(Math.max(0,E*E-(O/2)**2)),V=[F-L*Math.min(B,_-.15),(D[1]+k[1])/2,(D[2]+k[2])/2];u(D,V,.018,m),u(V,k,.018,m)}}u([-_+.02,I[1],I[0]],[_-.02,I[1],I[0]],.03,m),A>.05&&C(I[1],I[0])}function Ap(i,t,e,n,r){let s=i.p.length;Cy(i,t,e,n,r),t.mirror&&Rp(i,s)}function Cy(i,t,e,n,r){let s=t.rotation*he,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*o-M*a,t.z+l*v*a+M*o],u=e+.05,h=e+t.h-.02,f=new J(.75,.1,.14),d=new J(U.dark),m=new J(U.accent),x=t.w/2-.006,g=(v,M,T)=>{let C=T/p,b=new J(2043212).lerp(f,C),S=new J(U.body).lerp(f,C*.8),w=Math.cos(T),R=Math.sin(T),A=(L,F)=>c(v+M*(L*w-F*R),t.d/2+L*R+F*w),I=(L,F,D,k)=>{let[O,B,V,et]=L;i.tri([O[0],F,O[1]],[B[0],F,B[1]],[V[0],D,V[1]],k),i.tri([O[0],F,O[1]],[V[0],D,V[1]],[et[0],D,et[1]],k)},E=(L,F,D,k,O,B,V,et=V)=>{let G=[A(L,B),A(F,B),A(F,O),A(L,O)];I([G[0],G[1],G[1],G[0]],D,k,et),I([G[3],G[2],G[2],G[3]],D,k,V),I([G[0],G[3],G[3],G[0]],D,k,V),I([G[1],G[2],G[2],G[1]],D,k,V),I([G[0],G[1],G[2],G[3]],k,k,V),I([G[3],G[2],G[1],G[0]],D,D,V)};return E(0,x,u,h,-Tp,0,S,b),E(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,m),E},p=1.83;g(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*p)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function Py(i,t,e,n){Vi(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.dark,U.dark,ft);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,U.dark,1451583,12,Yt)}}function Iy(i,t,e,n){Vi(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,ft),i.box(r/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,ft),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,U.whiteTop,U.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,U.whiteTop,U.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,U.metal,U.metal,Yt),i.cyl(0,-e/2+.05,.02,n,n+.28,U.metal,U.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,U.metal)}function Ly(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,U.white,U.whiteTop,ft),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,U.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,U.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,U.glass,U.glass,Yt),i.cyl(-t/2+.04,0,.02,n,n+.12,U.metal,U.metal,8)}function Fy(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,U.whiteTop,U.whiteTop,ft),i.cyl(0,0,.04,.05,.052,U.metal,U.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,Yt),i.seg(r,n,s,o,n,a,Yt),i.seg(o,.05,a,o,n,a,Yt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,U.metal,U.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,U.metal,U.metal,12,Yt)}function Dy(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,U.white,U.whiteTop,ft),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,U.white,U.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,U.white,U.whiteTop,12,ft),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,U.whiteTop)}function Ny(i,t,e,n){Vi(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,U.white,U.whiteTop,ft),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,U.glass,U.glass,Yt),i.cyl(0,-e/2+.06,.018,n,n+.2,U.metal,U.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,U.glass,U.glass,Yt)}function Uy(i,t,e,n){Vi(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,U.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,U.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,U.dark,U.dark,Yt)}function Oy(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,U.pot,U.pot,10,ft),i.cyl(0,0,r*.08,s,n*.55,U.wood,U.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),u=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-s)*.16,U.plant,U.plantTop,8,a===o-1?Ut:null)}}function By(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,U.fabric,U.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,ft)}function ky(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let u=0;u<r;u++){let h=e/2-o*u,f=h-o,d=s*(u+1);i.box(-t/2,t/2,0,d,f,h,U.wood,U.woodTop),i.seg(-t/2,d,h,t/2,d,h,ft)}i.seg(-t/2,0,e/2,-t/2,s,e/2,ft);for(let u of[-t/2,t/2])i.seg(u,s,e/2,u,n,-e/2+o,Ut);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),Yt);for(let u=0;u<c;u+=3){let h=e/2-o*(u+.5),f=s*(u+1);i.seg(l,f,h,l,f+a,h,Ut)}}function zy(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:u}=kd(t,e,n),h=-t/2,f=-t/2+a,d=t/2-a,m=t/2,x=-e/2+l;for(let C=0;C<s;C++){let b=e/2-c*C,S=u*(C+1);i.box(h,f,0,S,b-c,b,U.wood,U.woodTop),i.seg(h,S,b,f,S,b,ft)}i.seg(h,0,e/2,h,u,e/2,ft);let g=u*r,p=.2;i.box(h,f,0,g,-e/2,x,U.wood,U.woodTop),i.box(f,m,Math.max(0,g-p),g,-e/2,x,U.wood,U.woodTop),i.seg(h,g,x,f,g,x,ft);for(let C=0;C<o;C++){let b=x+c*C,S=u*(r+1+C);i.box(d,m,Math.max(0,S-u-p),S,b,b+c,U.wood,U.woodTop),i.seg(d,S,b,m,S,b,ft)}i.seg(h,u,e/2,h,g,x,Ut),i.seg(m,g,x,m,n,x+c*(o-1),Ut);let _=.9,y=f-.03,v=d+.03,M=x-.03,T=Math.max(1,o-4);i.seg(y,u+_,e/2-c/2,y,g+_,M,Yt),i.seg(y,g+_,M,v,g+_,M,Yt),i.seg(v,g+_,M,v,u*(r+T)+_,x+c*(T-.5),Yt);for(let C=0;C<s;C+=3){let b=e/2-c*(C+.5);i.seg(y,u*(C+1),b,y,u*(C+1)+_,b,Ut)}for(let C of[y,v])i.seg(C,g,M,C,g+_,M,Ut);for(let C=2;C<T;C+=3){let b=x+c*(C+.5);i.seg(v,u*(r+1+C),b,v,u*(r+1+C)+_,b,Ut)}}function Vy(i,t,e,n){dr(i,t,e,.12,.03,.04,U.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,U.wood,U.woodTop,ft),oo(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function Gy(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,U.wood,U.woodTop,ft),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,U.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Ut)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,Yt)}}function Hy(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,U.wood,U.woodTop,ft),oo(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,U.body,U.bodyTop,ft),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,ft);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,U.metal,U.metal)}}function yp(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,U.wood,U.woodTop,ft),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,U.wood,U.woodTop,ft),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,U.cushion,U.cushion,Ut),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,U.wood,U.woodTop,ft),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,U.wood,U.woodTop,ft),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,U.cushion,U.cushion,Ut))}function Wy(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,U.metal,U.metal,12),i.cyl(0,0,.025,.02,n-.05,U.metal,U.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,U.metal,U.metal,12,Ut),i.cyl(0,0,r,n-.05,n,U.cushion,U.fabricTop,14,ft)}function Xy(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,U.metal),i.box(-.03,.03,.04,.08,-r,r,U.metal),i.cyl(0,0,.06,.02,.1,U.dark,U.dark,8),i.cyl(0,0,.025,.1,.44,U.metal,U.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,U.fabric,U.cushion,ft),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,U.fabric,U.fabricTop,ft),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,U.metal)}function Yy(i,t,e,n){dr(i,t,e,.08,.04,.05,U.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,U.fabric,U.cushion,ft)}function qy(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,U.body,U.bodyTop,ft),oo(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function $y(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,U.dark,U.dark,Yt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,Yt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Ut);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,Yt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,Yt)}function Zy(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,U.body,U.bodyTop,ft),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,U.dark),oo(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,ft)}function Ky(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,U.body,U.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Yt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,ft)}function Mp(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,U.white,U.whiteTop,ft);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Ut),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,Yt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,o+Math.sin(u)*a,s,Math.cos(h)*a,o+Math.sin(h)*a,s,Yt),r||i.seg(Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,s,Ut)}}function Jy(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),U.wood,U.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,U.wood,U.woodTop,ft),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,U.white,U.whiteTop,Ut),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,U.whiteTop,U.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,U.wood,U.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,ft);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Ut)}function jy(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,U.metal,U.metal,12),i.cyl(0,0,.05,.03,n-.04,U.wood,U.wood,8),i.cyl(0,0,r,n-.04,n,U.wood,U.woodTop,20,ft)}function Qy(i,t,e,n){dr(i,t,e,n-.03,.04,.03,U.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,U.wood,U.woodTop,ft),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,U.body,U.bodyTop,Ut)}function t1(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,U.dark,U.dark,Yt)}function e1(i,t,e,n){let r=Hu;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,U.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,U.white,U.whiteTop,ft);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Ut)}}function n1(i,t,e,n){let r=Wu;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,U.white,U.whiteTop,ft),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,U.white,U.white,ft),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,U.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Ut),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,Yt)}function ss(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,Yt)}}function i1(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.dark,U.body,ft),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,Yt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,U.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,ft),ss(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,Yt);for(let a of[-1,1])ss(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,ft),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,U.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Yt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Ut)}function r1(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,U.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,U.metal,U.metal,ft);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Ut);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,U.dark,U.body,14,ft),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,U.glass,U.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,Yt)}}function s1(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,U.dark,U.dark,16),i.cyl(0,0,s,n*.08,n*.78,U.dark,U.body,18,ft),i.cyl(0,0,s*.75,n*.78,n*.84,U.dark,U.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,U.dark,U.metal,ft),ss(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,U.dark,U.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,U.dark,U.metal,16,ft);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,Yt)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,U.dark,U.body)}function o1(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,U.white,U.whiteTop,ft);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,U.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;ss(i,s,o,r,e/2+.004,24),ss(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Ut),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Ut),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,U.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,Yt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Ut)}function a1(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,U.white,U.whiteTop,ft);for(let s of[-1,1])ss(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,Yt);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,U.white,U.glass,Ut)}function l1(i,t,e,n){let r=Ud-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,U.metal,U.metal,ft),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,U.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,U.accent,U.accent)}function c1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.dark,U.body,ft),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,U.dark,U.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Yt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Ut)}function u1(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,U.dark,U.body,ft);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(u)*s,o+Math.sin(u)*s,e/2+.003,Yt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,U.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,U.dark,U.body)}function h1(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,U.white,U.whiteTop,ft),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Ut),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Ut),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,U.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,U.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Yt)}function f1(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,U.white,U.whiteTop,ft),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Yt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Ut);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,U.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,U.dark,U.body,ft),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Yt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,U.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,U.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,U.white,U.whiteTop,ft);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,Yt)}}var Hu=.12,Wu=2.05;function Xu(i,t){let e=d1(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function d1(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=Ad(i.type);if(s){let l=t?hn(t,i):0,c=(s.x-s.w/2)*e,u=(s.x+s.w/2)*e,h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+s.y*r+h,y1:l+(s.y+s.h)*r-h,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?hn(t,i)-Qr(i):0,a=p1(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function p1(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?hn(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:Hu+.02,y1:Hu+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:Wu+.015,y1:Wu+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function m1(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new J(1-r,1-r,1-r),a=new J(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],u=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],h=d=>[d[0],l,d[1]],f=i.p.length;i.tri(h(c[0]),h(c[1]),h(c[2]),o),i.tri(h(c[0]),h(c[2]),h(c[3]),o);for(let d=0;d<4;d++){let m=(d+1)%4;i.tri(h(c[d]),h(u[d]),h(u[m]),o,a,a),i.tri(h(c[d]),h(u[m]),h(c[m]),o,a,o)}wp(t)&&Rp(i,f)}function Ol(i,t,e,n,r=0){g1(i,t,e,n,r)}function Rp(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function g1(i,t,e,n,r){let s=Te(n.type)?0:r-Qr(n);if(Te(n.type)||Math.abs(s)<.001)return Sp(i,t,e,n,r);let o=i.p.length,a=t.p.length;Sp(i,t,r<.05?e:new ee,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=s;for(let l=a+1;l<t.p.length;l+=3)t.p[l]+=s}function Sp(i,t,e,n,r){let s=n.rotation*he,o=Math.cos(s),a=Math.sin(s),l=n.mirror?-1:1,c=(m,x)=>[n.x+l*m*o-x*a,n.z+l*m*a+x*o],u=new rs(i,t,c),h=Math.max(.05,n.w),f=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":vp(u,h,f,d,Math.max(1,Math.round((h-.4)/.62)));break;case"armchair":vp(u,h,f,d,1);break;case"sofa_l":_p(u,h,f,d,!1);break;case"sofa_u":_p(u,h,f,d,!0);break;case"bed":vy(u,h,f,d);break;case"chair":_y(u,h,f,d);break;case"table":yy(u,h,f,d);break;case"desk":My(u,h,f,d);break;case"nightstand":Vi(u,h,f,d,1,d*.72,!0),u.seg(-h/2,d*.5,f/2-.02,h/2,d*.5,f/2-.02,Ut);break;case"wardrobe":Vi(u,h,f,d,Math.max(2,Math.round(h/.5)),d*.5);break;case"shelf":Sy(u,h,f,d);break;case"kitchen":wy(u,h,f,d);break;case"fridge":Ty(u,h,f,d);break;case"fridge_smart":Ry(u,h,f,d);break;case"waste_bin":Ey(u,h,f,d,lp(n),fp(n,hp()));break;case"mailbox":{let m=i.p.length,x=t.p.length;Ay(u,h,f,d,cp(n));let g=Qr(n);for(let p=m+1;p<i.p.length;p+=3)i.p[p]+=g;for(let p=x+1;p<t.p.length;p+=3)t.p[p]+=g;if(g>0)return;break}case"awning":return;case"stove":Py(u,h,f,d);break;case"sink":Iy(u,h,f,d);break;case"bathtub":Ly(u,h,f,d);break;case"shower":Fy(u,h,f,d);break;case"wc":Dy(u,h,f,d);break;case"washbasin":Ny(u,h,f,d);break;case"tv_board":Uy(u,h,f,d);break;case"plant":Oy(u,h,f,d);break;case"rug":By(u,h,f);return;case"stairs":ky(u,h,f,d);break;case"stairs_u":zy(u,h,f,d);break;case"stairwell":return;case"sideboard":Vy(u,h,f,d);break;case"dresser":Gy(u,h,f,d);break;case"tall_cabinet":Vi(u,h,f,d,1,d*.5);break;case"coat_rack":Hy(u,h,f,d);break;case"bench":yp(u,h,f,d,!1);break;case"corner_bench":yp(u,h,f,d,!0);break;case"bar_stool":Wy(u,h,f,d);break;case"office_chair":Xy(u,h,f,d);break;case"stool":Yy(u,h,f,d);break;case"kitchen_wall":qy(u,h,f,d);return;case"kitchen_tall":$y(u,h,f,d);break;case"island":Zy(u,h,f,d);break;case"worktop":u.box(-h/2,h/2,Math.max(0,d-.04),d,-f/2,f/2,U.whiteTop,U.whiteTop,ft);return;case"dishwasher":Ky(u,h,f,d);break;case"washer":Mp(u,h,f,d,!1);break;case"dryer":Mp(u,h,f,d,!0);break;case"bunk_bed":Jy(u,h,f,d);break;case"table_round":jy(u,h,f,d);break;case"coffee_table":Qy(u,h,f,d);break;case"tv_wall":t1(u,h,f,d);return;case"parking":{let x=[[-h/2,-f/2],[h/2,-f/2],[h/2,f/2],[-h/2,f/2]];for(let g=0;g<4;g++)u.seg(x[g][0],.012,x[g][1],x[(g+1)%4][0],.012,x[(g+1)%4][1],Ut);u.seg(-h*.15,.012,f/2-.45,0,.012,f/2-.2,ft),u.seg(0,.012,f/2-.2,h*.15,.012,f/2-.45,ft);return}case"robot_vacuum":u.box(-h*.45,h*.45,0,d,-f/2,-f/2+f*.3,U.white,U.whiteTop,ft),u.box(-h*.2,h*.2,d*.5,d*.62,-f/2+f*.3,-f/2+f*.31,U.accent);return;case"radiator":e1(u,h,f,d);return;case"ac_unit":n1(u,h,f,d);return;case"inverter":i1(u,h,f,d,n.variant??null);return;case"grid_point":c1(u,h,f,d);break;case"wallbox":u1(u,h,f,d);return;case"pool_pump":r1(u,h,f,d);break;case"pool_filter":s1(u,h,f,d,n.variant??null);break;case"pool_heat_pump":o1(u,h,f,d);break;case"pool_dosing":a1(u,h,f,d);break;case"pool_valve":l1(u,h,f,d);return;case"meter":h1(u,h,f,d);return;case"home_battery":if(f1(u,h,f,d,n.variant??null),n.variant==="wall")return;break;default:{let m=Te(n.type);if(m){if(Yu(u,m,h,f,d,r,null),r>.05)return}else u.box(-h/2,h/2,0,d,-f/2,f/2,U.body,U.bodyTop,ft)}}m1(e,c,h,f,n.type==="plant"?.35:.5)}function Gu(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=U;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Yu(i,t,e,n,r,s,o,a=null){let l=!!a;for(let c of t.parts){if(a&&!a(c))continue;let u=l?{...c,glow:!0,w:c.w+.006/e,d:c.d+.006/n,y:Math.max(0,c.y-.002/r),h:c.h+.004/r}:c,h=u.glow&&o!==null,f=h?o:Gu(u.color,!1)??U.body,d=h?o:Gu(u.top,!1)??Gu(u.color,!0)??Bt(f,1.25).getHex(),m=s+u.y*r,x=s+Math.min(r,(u.y+u.h)*r),g=u.edges==="glow"?hr:u.edges==="faint"?Ut:u.edges?ft:null,p=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))p.lyingCyl(u.axis,u.x*e,u.z*n,m,x,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,f,d,14,g);else if(u.shape==="cyl")p.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,m,x,f,d,14,g);else if(u.shape==="loft"){let _=u.tx??u.x,y=u.tz??u.z,v=u.tw??u.w,M=u.td??u.d;p.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(_-v/2)*e,(_+v/2)*e,(y-M/2)*n,(y+M/2)*n],m,x,f,d,g)}else p.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,m,x,(u.z-u.d/2)*n,(u.z+u.d/2)*n,f,d,g)}}function Cp(i,t,e,n,r,s){let o=s*he,a=Math.cos(o),l=Math.sin(o),c=(m,x)=>[e+m*a-x*l,r+m*l+x*a],u=new rs(i,new Le,c),h=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,h,f,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,h),u.cyl(0,0,.012,n-.075,n-.06,U.accent,U.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,f),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,f),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,f),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,U.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function ao(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*he,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,u=(h,f)=>[e.x+c*h*a-f*l,e.z+c*h*l+f*a];Yu(new rs(i,new Le,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function Bl(i,t,e,n,r){let s=e.rotation*he,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(u,h)=>[e.x+l*u*o-h*a,e.z+l*u*a+h*o];Yu(new rs(i,new Le,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var x1={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function b1(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let u=a.points[(c+1)%a.points.length],h=u[0]-l[0],f=u[1]-l[1],d=Math.hypot(h,f)||1;if(Math.abs((r*f-s*h)/(o*d))>.05)return!1;let m=Math.max(0,Math.min(1,((n[0]-l[0])*h+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+h*m-n[0],l[1]+f*m-n[1])<.4}))}function Ip(i,t){return t.type==="pool"?Pl(i,t):ar(i,t)+(Kn(t.type)?.01:ts[t.type])}function lo(i){return Un(i)>=0?i:[...i].reverse()}function v1(i,t){let e=i[t];if(Kn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>Kt(o,e.points))&&n.push(lo(s.points))}return n}function Pp(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],u=e[1]-t[1],h=Math.hypot(c,u);if(h<1e-6)return;let f=-u/h*n*.5,d=c/h*n*.5;if(Math.abs(l)<1e-4){Pe(i,lo([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let m=(v,M)=>[t[0]+f*M,v,t[1]+d*M],x=(v,M)=>[e[0]+f*M,v+l,e[1]+d*M],g=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,Xt),i.tri(v[0],v[2],v[3],M,M,M,void 0,Xt),i.tri(v[0],v[2],v[1],M,M,M,void 0,Xt),i.tri(v[0],v[3],v[2],M,M,M,void 0,Xt)},p=new J(a),_=new J(Bt(o,.9)),y=new J(Bt(o,.6));g([m(s,1),x(s,1),x(s,-1),m(s,-1)],p),g([m(r,1),x(r,1),x(r,-1),m(r,-1)],y),g([m(r,1),x(r,1),x(s,1),m(s,1)],_),g([m(r,-1),x(r,-1),x(s,-1),m(s,-1)],_),g([m(r,1),m(r,-1),m(s,-1),m(s,1)],_),g([x(r,1),x(r,-1),x(s,-1),x(s,1)],_)}function Lp(i,t,e,n){let r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=ar(e,s),l=(_,y)=>a-js(e,s,_,y),c=a-(s.type==="pool"?0:s.slope??0),u=Kn(s.type)&&s.height?s.height:ts[s.type],h={...x1[s.type],top:u},f=lo(s.points),d=Bt(h.edge,h.edgeAlpha),m=s.open&&(s.type==="fence"||s.type==="pergola")?f.length-1:-1,x=_=>{if(s.outline!==!1)for(let y=0;y<f.length;y++){if(y===m)continue;let v=f[y],M=f[(y+1)%f.length];t.seg([v[0],_(v[0],v[1]),v[1]],[M[0],_(M[0],M[1]),M[1]],d,Xt)}},g=n??i,p=new J(n?1734832:h.color);switch(s.type){case"pool":{let _=new J(h.side),y=new J(Bt(h.side,.55)),v=new J(932440),M=Pl(e,s),T=Cl(e,s),C=Dd(e,s);for(let[b,S,w]of zi(f)){let R=f[b],A=f[S],I=f[w];(n?g:i).tri([R[0],M,R[1]],[I[0],M,I[1]],[A[0],M,A[1]],p,p,p,void 0,Xt),i.tri([R[0],C,R[1]],[I[0],C,I[1]],[A[0],C,A[1]],v,v,v,void 0,Xt)}for(let b=0;b<f.length;b++){let S=f[b],w=f[(b+1)%f.length];i.tri([w[0],C,w[1]],[w[0],T,w[1]],[S[0],T,S[1]],y,_,_,void 0,Xt),i.tri([w[0],C,w[1]],[S[0],T,S[1]],[S[0],C,S[1]],y,_,y,void 0,Xt)}if(!s.above&&Iu(e,s)){let b=new J(660258),S=new J(396054),w=C-.2,R=Math.min(a,T);for(let A=0;A<f.length;A++){let I=f[A],E=f[(A+1)%f.length];i.tri([I[0],w,I[1]],[I[0],R,I[1]],[E[0],R,E[1]],S,b,b,void 0,Xt),i.tri([I[0],w,I[1]],[E[0],R,E[1]],[E[0],w,E[1]],S,b,S,void 0,Xt)}for(let[A,I,E]of zi(f)){let L=f[A],F=f[I],D=f[E];i.tri([L[0],w,L[1]],[F[0],w,F[1]],[D[0],w,D[1]],S,S,S,void 0,Xt)}if(s.outline!==!1)for(let A=0;A<f.length;A++){let I=f[A],E=f[(A+1)%f.length];t.seg([I[0],w,I[1]],[E[0],w,E[1]],Bt(h.edge,h.edgeAlpha*.35),Xt),t.seg([I[0],w,I[1]],[I[0],R,I[1]],Bt(h.edge,h.edgeAlpha*.25),Xt)}}if(T>a+.02){let b=new J(2044240),S=new J(1187123);for(let w=0;w<f.length;w++){let R=f[w],A=f[(w+1)%f.length];i.tri([R[0],a,R[1]],[R[0],T,R[1]],[A[0],T,A[1]],S,b,b,void 0,Xt),i.tri([R[0],a,R[1]],[A[0],T,A[1]],[A[0],a,A[1]],S,b,S,void 0,Xt)}x(()=>a+.005)}if(x(()=>T),x(()=>M+.005),s.outline!==!1)for(let b=0;b<f.length;b++){let S=f[b],w=f[(b+1)%f.length];t.seg([S[0],C+.005,S[1]],[w[0],C+.005,w[1]],Bt(h.edge,h.edgeAlpha*.4),Xt)}break}case"fence":{for(let _=0;_<f.length;_++){if(_===m)continue;let y=f[_],v=f[(_+1)%f.length],M=Math.hypot(v[0]-y[0],v[1]-y[1]),T=Math.max(1,Math.round(M/2)),C=m>=0&&_===m-1?T:T-1;for(let b=0;b<=C;b++){let S=b/T,w=y[0]+(v[0]-y[0])*S,R=y[1]+(v[1]-y[1])*S,A=l(w,R);Pe(i,lo([[w-.04,R-.04],[w+.04,R-.04],[w+.04,R+.04],[w-.04,R+.04]]),A,A+h.top,h.side,h.color)}for(let b of[.35,.85])t.seg([y[0],l(y[0],y[1])+b*h.top,y[1]],[v[0],l(v[0],v[1])+b*h.top,v[1]],d,Xt)}break}case"pergola":{let _=h.top;for(let[y,v]of f){let M=l(y,v);Pe(i,lo([[y-.06,v-.06],[y+.06,v-.06],[y+.06,v+.06],[y-.06,v+.06]]),M,M+_,h.side,h.color)}for(let y=0;y<f.length;y++){if(y===m)continue;let v=f[y],M=f[(y+1)%f.length],T=l(v[0],v[1])+_;if(Pp(i,v,M,.12,T-.16,T,h.side,h.color,l(M[0],M[1])-l(v[0],v[1])),s.bracing){let C=l(v[0],v[1]),b=l(M[0],M[1]);t.seg([v[0],C+.25,v[1]],[M[0],b+_-.25,M[1]],d,Xt),t.seg([M[0],b+.25,M[1]],[v[0],C+_-.25,v[1]],d,Xt)}}if(Hd(f)){let y=Wd(f),v=y.x1-y.x0,M=y.z1-y.z0,T=v>=M,C=T?v:M,b=Math.max(1,Math.round(C/.6));for(let S=1;S<b;S++){let w=(T?y.x0:y.z0)+C*S/b,R=T?[w,y.z0+.06]:[y.x0+.06,w],A=T?[w,y.z1-.06]:[y.x1-.06,w],I=l(R[0],R[1])+_;Pp(i,R,A,.06,I-.04,I+.08,h.side,h.color,l(A[0],A[1])-l(R[0],R[1]))}}x((y,v)=>l(y,v)+_+.004);break}case"balcony":{Pe(i,f,a-.18,a+h.top,h.side,h.color,{aoFrom:a-.18}),x(()=>a+h.top+.004);let y=s.height&&s.height>.3?s.height:1,v=Bt(9417983,.42),M=Bt(3662079,.55);for(let T=0;T<f.length;T++){let C=f[T],b=f[(T+1)%f.length];if(b1(e,C,b))continue;let S=Math.hypot(b[0]-C[0],b[1]-C[1]),w=a+h.top;t.seg([C[0],w+y,C[1]],[b[0],w+y,b[1]],M,Xt),t.seg([C[0],w+.1,C[1]],[b[0],w+.1,b[1]],v,Xt);let R=Math.max(1,Math.round(S/.12));for(let A=0;A<=R;A++){let I=A/R,E=C[0]+(b[0]-C[0])*I,L=C[1]+(b[1]-C[1])*I;t.seg([E,w,L],[E,w+y,L],A===0||A===R?M:v,Xt)}}break}default:{let _=(v,M)=>l(v,M)+h.top,y=v1(r,o);if(Pe(i,f,c,s.slope?_:a+h.top,h.side,h.color,{aoFrom:c,holes:y}),x((v,M)=>_(v,M)+.004),s.type==="hedge"&&x((v,M)=>l(v,M)+.004),s.outline!==!1)for(let v of y)for(let M=0;M<v.length;M++){let T=v[M],C=v[(M+1)%v.length];t.seg([T[0],_(T[0],T[1])+.004,T[1]],[C[0],_(C[0],C[1])+.004,C[1]],d,Xt)}}}})}var zl=Math.PI/180,_1=1.13,y1=1.72,qu=.025,pr=.07,Fp=.25;function Dp(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=hi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<.5)continue;let c=a/l,u=-o/l,h=Math.min(n.height,s.height??n.height),f=s.sources.find(x=>x.room_id===s.roomLeft)?.edge??null,d={floorId:n.id,room:s.roomLeft,edge:f,free:!!s.free},m=(x,g,p,_)=>e.push({key:x,section:null,side:"top",flat:!1,o:g,eu:p,es:[0,1,0],n:_,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[_[0],_[2]],wall:d});m(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+u*s.right],[o/l,0,a/l],[c,0,u]),s.free&&m(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-u*s.left],[-o/l,0,-a/l],[-c,0,-u])}}return e}var $u="ground";function Zu(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function Np(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=Zu(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:Fd(s,o,a)):t.base??0;return{key:$u,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function M1(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function gr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(_=>S1(_,Fl(i,_,_.overhang??t.overhang)));let e=M1(i);if(!e)return[];let n=e.rooms.flatMap(_=>_.points.map(y=>y[0])),r=e.rooms.flatMap(_=>_.points.map(y=>y[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=e.elevation+e.height;if(t.type==="flat")return[Up("main",null,o,l,a,c,u+Fp)];let h=a-o>=c-l,f=t.ridge==="short"?!h:h,d=(f?c-l:a-o)/2,m=d*Math.tan(t.pitch*zl),x=(_,y,v)=>f?[_,u+v,(l+c)/2+y]:[(o+a)/2+y,u+v,_],[g,p]=f?[o,a]:[l,c];return[-1,1].map(_=>kl(`main:${_<0?"a":"b"}`,null,_<0?"a":"b",x(g,_*d,0),x(p,_*d,0),x(g,0,m),t.pitch,()=>[0,p-g]))}function S1(i,t){let e=Qn(i),n=wn(i),r=(x,g,p)=>{let[_,y]=e.at(x,g);return[_,p,y]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=e.at(a,-s),g=e.at(l,e.w+o);return[Up(i.id,i.id,Math.min(x[0],g[0]),Math.min(x[1],g[1]),Math.max(x[0],g[0]),Math.max(x[1],g[1]),i.eave_a+Fp)]}if(i.shape==="pent")return[kl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",h=i.shape==="pyramid"?(e.u1-e.u0)/2:u?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,f=u?e.u0+h-a:0,d=u?l-(e.u1-h):0,m=[];if(n.vr>.3){let x=Math.hypot(n.vr+s,n.rh-n.y(-s));m.push(kl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,g=>[f*(g/x),c-d*(g/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));m.push(kl(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,g=>[d*(g/x),c-f*(g/x)]))}if(u){let x=n.y(-s),g=n.y(e.w+o),p=[[`${i.id}:c`,"c",r(a,e.w+o,g),r(a,-s,x),r(e.u0+h,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-s,x),r(l,e.w+o,g),r(e.u1-h,n.vr,n.rh)]];for(let[_,y,v,M,T]of p){let C=w1(_,i.id,y,v,M,T);C&&m.push(C)}}return m}function w1(i,t,e,n,r,s){let o=co(mr(r,n));if(o<.3)return null;let a=Gi(mr(r,n)),l=mr(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=co(u);if(h<.3)return null;let f=Gi(u),d=Gi(kp(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let m=Gi([-f[0],0,-f[2]]),x=Math.atan2(f[1],Math.hypot(f[0],f[2]))/zl;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:h,pitch:x,span:p=>{let _=Math.min(1,Math.max(0,p/h));return[c*_,o-(o-c)*_]},facing:[m[0],m[2]]}}function kl(i,t,e,n,r,s,o,a){let l=Gi(mr(r,n)),c=Gi(mr(s,n)),u=Gi(kp(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let h=Gi([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:co(mr(r,n)),ls:co(mr(s,n)),pitch:o,span:a,facing:[h[0],h[2]]}}function Up(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Op(i){let t=i.module_w||_1,e=i.module_h||y1;return i.portrait===!1?[e,t]:[t,e]}function T1(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Bp(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*zl:i.wall?Math.min(90,Math.max(0,t.tilt??0))*zl:0}function E1(i,t){let[,e]=Op(t),n=Bp(i,t);return i.wall?e*Math.cos(n)+qu:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+qu}function uo(i,t,e=!1){let[n,r]=Op(t),s=[],o=Bp(i,t),a=r*Math.cos(o),l=E1(i,t),c=T1(t),u=Math.max(1,...c),h=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(x,g,p)=>[i.o[0]+i.eu[0]*x+i.es[0]*g+i.n[0]*p,i.o[1]+i.eu[1]*x+i.es[1]*g+i.n[1]*p,i.o[2]+i.eu[2]*x+i.es[2]*g+i.n[2]*p],m=(x,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[p,_]=i.span(g);return x>=p-1e-6&&x<=_+1e-6};return c.forEach((x,g)=>{let p=t.align==="right"?u-x:t.align==="center"?(u-x)/2:0;for(let _=0;_<x;_++){let y=`${g}:${_}`,v=h.has(y);if(v&&!e)continue;let M=t.u+(_+p)*(n+qu),T=t.v+g*l,C=M+n,b=T+(i.flat||i.wall?a:r);if(f){if(!(m((M+C)/2,T)&&m((M+C)/2,b)))continue}else if(![[M,T],[C,T],[C,b],[M,b]].every(([E,L])=>m(E,L)))continue;if(i.wall&&o>.001){let E=pr+r*Math.sin(o),[L,F]=t.flip?[E,pr]:[pr,E],D=[d(M,T,L),d(C,T,L),d(C,b,F),d(M,b,F)],k=t.flip?T:b,O=[M+.05,C-.05].map(B=>[d(B,k,0),d(B,k,E)]);s.push({corners:D,posts:O,cell:y,skipped:v});continue}if(!i.flat){s.push({corners:[d(M,T,pr),d(C,T,pr),d(C,b,pr),d(M,b,pr)],posts:[],cell:y,skipped:v});continue}let S=.15,w=S+r*Math.sin(o),[R,A]=t.flip?[b,T]:[T,b],I=[d(M,R,S),d(C,R,S),d(C,A,w),d(M,A,w)];s.push({corners:I,posts:[M+.05,C-.05].flatMap(E=>[[d(E,R,0),d(E,R,S)],[d(E,A,0),d(E,A,w)]]),cell:y,skipped:v})}}),s}function mr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function co(i){return Math.hypot(i[0],i[1],i[2])}function Gi(i){let t=co(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function kp(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var A1=.78,R1=1.18;function C1(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||A1,module_h:i.h||R1}}function Vl(i,t){let e=uo(i,C1(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Gl(i,t,e){let n=t?Vl(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,s=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>s)continue;let l=a.rooms.find(c=>Kt([r,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var ho=1712952,fo=2239816,Hp=1318193,xr=Bt(3662079,.9),os=Bt(5995775,.45),Ge=.14,P1=9427199,I1=13226982,L1=14936565,F1={black:{glass:new J(329483),edge:Bt(9082544,.32),cells:Bt(2766160,.22)},blue:{glass:new J(1386842),edge:Bt(10467583,.55),cells:Bt(4025599,.35)}},D1=Bt(13226982,.5),N1=Bt(13226982,.85),U1=Bt(16757575,.95),zp=new J(2845583),Vp=new J(3818072),Gp=new J(4871791);function O1(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Wp(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:z1(i),r=e?.type==="custom"?V1(i,e.sections??[],e.overhang):n?[n]:[];return k1(i,r),B1(i,r,t),r}function B1(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(gr(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?Vl(o,s):null;if(!o||!a)continue;let l=o.section?t.find(F=>F.sections?.includes(o.section)):t[0];if(!l)continue;let c=s.float?Gl(i,o,s):null,u=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,h=u?u.elevation:l.floor.elevation+l.base,f=F=>[F[0],F[1]-h,F[2]],[d,m,x,g]=a.map(f),p=e.get(s.id)??{open:0,tilt:0,cover:0},_=!!c&&(u!==null||c.floor.id===l.floor.id),y=u?(l.winBelow??=new Map).get(u.id)??l.winBelow.set(u.id,{floor:u,solid:new ee,lines:new Le}).get(u.id):_?l.win??={solid:new ee,lines:new Le}:l.winRoof??={solid:new ee,lines:new Le},v=(F,D)=>[F[0]+o.n[0]*D,F[1]+o.n[1]*D,F[2]+o.n[2]*D],M=(F,D,k)=>[F[0]+(D[0]-F[0])*k,F[1]+(D[1]-F[1])*k,F[2]+(D[2]-F[2])*k],T=p.open>.02||p.tilt>.02?U1:N1,C=[d,m,x,g].map(F=>v(F,.06)),b=[d,m,x,g].map(F=>v(F,-.02));for(let F=0;F<4;F++){y.lines.seg(C[F],C[(F+1)%4],T);let D=(F+1)%4;y.solid.tri(b[F],b[D],C[D],Gp),y.solid.tri(b[F],C[D],C[F],Gp)}let S=(p.open>.02?30*Math.min(1,p.open):p.tilt>.5?12:0)*he,w=Math.hypot(x[0]-m[0],x[1]-m[1],x[2]-m[2]),R=F=>{let D=o.es;return[F[0]-D[0]*w*Math.cos(S)+o.n[0]*w*Math.sin(S),F[1]-D[1]*w*Math.cos(S)+o.n[1]*w*Math.sin(S),F[2]-D[2]*w*Math.cos(S)+o.n[2]*w*Math.sin(S)]},A=v(g,.065),I=v(x,.065),E=R(A),L=R(I);y.solid.tri(E,L,I,zp),y.solid.tri(E,I,A,zp);for(let[F,D]of[[E,L],[L,I],[I,A],[A,E]])y.lines.seg(F,D,T);if(p.cover>.02){let F=Math.min(1,p.cover),D=v(M(A,E,F),.01),k=v(M(I,L,F),.01),O=v(A,.01),B=v(I,.01);y.solid.tri(D,k,B,Vp),y.solid.tri(D,B,O,Vp)}}}function k1(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(gr(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];o&&Ku(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}function Ku(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=F1[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of uo(e,n)){let[u,h,f,d]=c.corners.map(s);i.tri(u,h,f,o.glass),i.tri(u,f,d,o.glass),i.tri(u,f,h,o.glass),i.tri(u,d,f,o.glass);let m=(p,_=.004)=>[p[0]+e.n[0]*_,p[1]+e.n[1]*_,p[2]+e.n[2]*_],x=(p,_,y)=>[p[0]+(_[0]-p[0])*y,p[1]+(_[1]-p[1])*y,p[2]+(_[2]-p[2])*y],g=[u,h,f,d].map(p=>m(p));for(let p=0;p<4;p++)t.seg(g[p],g[(p+1)%4],o.edge);for(let p=1;p<a;p++)t.seg(m(x(u,h,p/a)),m(x(d,f,p/a)),o.cells);for(let p=1;p<l;p++)t.seg(m(x(u,d,p/l)),m(x(h,f,p/l)),o.cells);for(let[p,_]of c.posts)t.seg(s(p),s(_),D1)}}function z1(i){let t=i.settings.roof,e=O1(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(w=>w.points.map(R=>R[0])),r=e.rooms.flatMap(w=>w.points.map(R=>R[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=new ee,h=new Le;if(t.type==="flat"){Pe(u,[[o,l],[a,l],[a,c],[o,c]],0,.25,ho,fo,{bottom:!0});let w=.252;for(let[R,A]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])h.seg([R[0],w,R[1]],[A[0],w,A[1]],xr),h.seg([R[0],0,R[1]],[A[0],0,A[1]],os);return{floor:e,base:e.height,solid:u,lines:h,glass:new ee}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,m=(d?c-l:a-o)/2,x=m*Math.tan(t.pitch*he),g=(w,R,A)=>d?[w,A,(l+c)/2+R]:[(o+a)/2+R,A,w],[p,_]=d?[o,a]:[l,c],y=new J(fo),v=new J(ho),M=(w,R,A,I,E)=>{u.tri(w,R,A,E),u.tri(w,A,I,E)};for(let w of[-1,1]){M(g(p,w*m,0),g(_,w*m,0),g(_,0,x),g(p,0,x),y),M(g(p,w*m,-Ge),g(p,0,x-Ge),g(_,0,x-Ge),g(_,w*m,-Ge),v),M(g(p,w*m,-Ge),g(_,w*m,-Ge),g(_,w*m,0),g(p,w*m,0),v);for(let R of[p,_])M(g(R,w*m,-Ge),g(R,w*m,0),g(R,0,x),g(R,0,x-Ge),v);h.seg(g(p,w*m,0),g(_,w*m,0),os);for(let R of[p,_])h.seg(g(R,w*m,0),g(R,0,x),os)}let T=t.overhang,C=new J(Hp),b=m-T,S=b*Math.tan(t.pitch*he);for(let w of[p+T,_-T])u.tri(g(w,-b,-Ge),g(w,b,-Ge),g(w,0,S-Ge),C),u.tri(g(w,b,-Ge),g(w,-b,-Ge),g(w,0,S-Ge),C);return h.seg(g(p,0,x+.004),g(_,0,x+.004),xr),{floor:e,base:e.height,solid:u,lines:h,glass:new ee}}function V1(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let r=new Map,s=new Map(gr(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=np(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new ee,lines:new Le,glass:new ee,sections:[],lift:!o.open}),c.sections.push(o.id);let u=Ll(t,o),h=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,f=t.filter(x=>x!==o&&Ll(t,x)===o).flatMap(x=>tp(o,x));for(let x of i.settings.roof.windows??[]){let g=s.get(x.face),p=g&&g.section===o.id?Vl(g,x):null;if(!p)continue;let _=p.map(y=>Oi(o,y[0],y[2]));f.push({u0:Math.min(..._.map(y=>y[0])),u1:Math.max(..._.map(y=>y[0])),v0:Math.min(..._.map(y=>y[1])),v1:Math.max(..._.map(y=>y[1]))})}let d=u?Fu(u,o):o,m=null;if(u){let x=Qn(d),g=is(u,{u0:0,u1:0,a:0,b:0}),p=_=>{let[y,v]=x.at(_,x.w/2),[M,T]=Oi(u,y,v);return so(g,M,T)??wn(u).y(T)};m=p(x.u0)<=p(x.u1)?0:1}G1(c.solid,c.lines,d,Fl(i,d,d.overhang??e),a.elevation,c.glass,h,f,m)}return[...r.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function G1(i,t,e,n,r,s=i,o=!1,a=[],l=null){let c=Qn(e),u=wn(e),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,f=Math.max(0,h.a),d=Math.max(0,h.b),m=c.w,x=c.u0-Math.max(0,h.u0),g=c.u1+Math.max(0,h.u1),p=(I,E,L)=>{let[F,D]=c.at(I,E);return[F,L-r,D]},_=new J(fo),y=new J(ho),v=new J(Hp),M=(I,E)=>{for(let L=1;L+1<I.length;L++)i.tri(I[0],I[L],I[L+1],E)},T=[],C=[],b=[],S=null;if(e.shape==="flat"||e.shape==="parapet"){let I=e.eave_a,E=e.shape==="parapet",L=e.points&&e.points.length>=3?Jd(e,E?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):E?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,m),c.at(c.u0,m)]:[c.at(x,-f),c.at(g,-f),c.at(g,m+d),c.at(x,m+d)];Pe(i,L,I-r,I-r+.25,ho,fo,{bottom:!0});for(let F=0;F<L.length;F++){let D=L[F],k=L[(F+1)%L.length];t.seg([D[0],I-r+.252,D[1]],[k[0],I-r+.252,k[1]],xr),t.seg([D[0],I-r,D[1]],[k[0],I-r,k[1]],os)}if(E){let F=B=>Jn(B)>=0?B:[...B].reverse(),D=F(L),k=Il(D,-.2),O=D.length;for(let B=0;B<O;B++){let V=F([D[B],D[(B+1)%O],k[(B+1)%O],k[B]]);Pe(i,V,I-r+.25,I-r+.65,ho,fo),t.seg([D[B][0],I-r+.652,D[B][1]],[D[(B+1)%O][0],I-r+.652,D[(B+1)%O][1]],xr),t.seg([k[B][0],I-r+.652,k[B][1]],[k[(B+1)%O][0],I-r+.652,k[(B+1)%O][1]],xr)}}}else{let I=is(e,h);T=I.faces;for(let E of a)T=T.flatMap(L=>ep(L,E));C=I.rim,b=I.ridges,S=I.gable}let w=!!e.open,R=new J(P1);for(let I of T){if(w){for(let E=1;E+1<I.length;E++)s.tri(p(I[0][0],I[0][1],I[0][2]),p(I[E][0],I[E][1],I[E][2]),p(I[E+1][0],I[E+1][1],I[E+1][2]),R);continue}M(I.map(([E,L,F])=>p(E,L,F)),_),M(I.map(([E,L,F])=>p(E,L,F-Ge)),y)}for(let I=0;I<C.length;I++){let[E,L,F]=C[I],[D,k,O]=C[(I+1)%C.length];w||M([p(E,L,F),p(D,k,O),p(D,k,O-Ge),p(E,L,F-Ge)],y),t.seg(p(E,L,F),p(D,k,O),w?xr:os)}if(w){H1(i,t,c,u,h,p,r);return}for(let[[I,E,L],[F,D,k]]of b)t.seg(p(I,E,L+.004),p(F,D,k+.004),xr);let A=e.base;if(!o){if(S){let I=W1(S,A-Ge),E=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(I.length>=3)for(let L of E)M(I.map(([F,D])=>p(L,F,D)),v)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let I of[0,m]){let E=u.y(I)-Ge;E>A+.02&&M([p(c.u0,I,A),p(c.u1,I,A),p(c.u1,I,E),p(c.u0,I,E)],v)}else if(e.eave_a>A+.02)for(let[I,E,L,F]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,m],[c.u1,m,c.u0,m],[c.u0,m,c.u0,0]])M([p(I,E,A),p(L,F,A),p(L,F,e.eave_a),p(I,E,e.eave_a)],v)}}function H1(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,u=r.a>0,h=r.b>0,f=r.u0>0,d=r.u1>0,m=(p,_,y,v,M,T)=>{let C=[e.at(p,y),e.at(_,y),e.at(_,v),e.at(p,v)],b=(C[1][0]-C[0][0])*(C[2][1]-C[0][1])-(C[2][0]-C[0][0])*(C[1][1]-C[0][1]);Pe(i,b<0?[...C].reverse():C,M-o,T-o,I1,L1,{bottom:!0})},x=o;for(let[p,_]of[[0,u],[a,h]]){if(!_)continue;let y=n.y(p)-.03,v=p===0?0:a-l;m(e.u0,e.u1,v,v+l,y-c,y),t.seg(s(e.u0,p,y-c),s(e.u1,p,y-c),os)}for(let[p,_]of[[e.u0,f],[e.u1-l,d]])if(_)for(let y=0;y<6;y++){let v=a*y/6,M=a*(y+1)/6,T=Math.min(n.y(v),n.y(M))-.03;m(p,p+l,v,M,T-c,T)}let g=[];for(let[p,_]of[[0,u],[a-l,h]]){if(!_)continue;let y=e.u1-e.u0-l,v=Math.max(1,Math.ceil(y/3.5));for(let M=0;M<=v;M++){let T=e.u0+y*M/v;M===0&&!f||M===v&&!d||g.push([T,p])}}if(!u&&!h)for(let p of[e.u0,e.u1-l])(p===e.u0&&f||p!==e.u0&&d)&&g.push([p,a/2-l/2]);for(let[p,_]of g){let y=n.y(_+l/2)-.03-c;m(p,p+l,_,_+l,x,y)}}function W1(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var po={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Xp={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},$e=.2,X1=.01,mo=8,Hl=.42,Ju=.42;function Zp(i,t,e,n=[],r=[],s){let{walls:o,open:a}=hi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(A,I,E)=>{let L=s?s(A,I):null;return L===null?E:Math.max(.05,Math.min(E,L))},c=(A,I,E,L,F)=>{if(!s)return F;let D=F,k=Math.max(2,Math.ceil((L-E)/.25)+1);for(let O=0;O<k;O++){let B=E+(L-E)*O/(k-1);D=Math.min(D,l(A[0]+I[0]*B,A[1]+I[1]*B,F))}return D},u=new ee(!0,!0),h=[],f=new Le,d=[];for(let A of i.rooms){if(A.points.length<3)continue;let I=ju(A.points),E=Xp[A.floor_material]??Xp.wood,L=new J(E.color),F=n.flatMap(V=>{if(op(V,I))return[Ou(V,.003)];if(!rp(V))return[];let et=Dl(I,V);return et.length>=3&&Math.abs(Jn(et))>.01?[Ou(ju(et),.003)]:[]});d.push(...F);let D=[...I,...F.flat()],k=u.count;for(let[V,et,G]of zi(I,F)){let K=D[V],ot=D[et],dt=D[G];u.tri([K[0],0,K[1]],[dt[0],0,dt[1]],[ot[0],0,ot[1]],L,L,L,[K[0],K[1],dt[0],dt[1],ot[0],ot[1]],Xt,E.tile)}h.push({roomId:A.id,start:k,end:u.count,color:E.color});let O=new J(po.slab),B=V=>{for(let et=0;et<V.length;et++){let G=V[et],K=V[(et+1)%V.length];u.tri([G[0],-$e,G[1]],[G[0],0,G[1]],[K[0],0,K[1]],O),u.tri([G[0],-$e,G[1]],[K[0],0,K[1]],[K[0],-$e,K[1]],O)}};B(I);for(let V of F){B([...ju(V)].reverse());for(let et=0;et<V.length;et++){let G=V[et],K=V[(et+1)%V.length];f.seg([G[0],.006,G[1]],[K[0],.006,K[1]],hr),f.seg([G[0],-$e,G[1]],[K[0],-$e,K[1]],ki)}}}let m=new Map,x=[],g=new Map;for(let A of o){let I="interior",E=null;if(A.exterior){let F=A.b[0]-A.a[0],D=A.b[1]-A.a[1],k=Math.hypot(F,D)||1,O=[D/k,-F/k],B=(Math.round(Math.atan2(O[1],O[0])/(2*Math.PI)*mo)%mo+mo)%mo;I=`s${B}`;let V=B/mo*2*Math.PI;E=[Math.cos(V),Math.sin(V)]}let L=m.get(I);L===void 0&&(L=x.length,m.set(I,L),x.push(E)),g.set(A,L)}let p=new Map,_=[];for(let A of i.openings){let I=eo(A,i.rooms,i.walls??[]);if(!I)continue;let E=no(o,A,I);if(!E)continue;let{wall:L,s:F}=E,D=Yl([L.b[0]-L.a[0],L.b[1]-L.a[1]]),k=Math.hypot(L.b[0]-L.a[0],L.b[1]-L.a[1]),O=Math.min(A.width,k),B=Math.max(0,Math.min(k-O,F-O/2)),V=I.room.points,et=L.free?D[0]*(V[1][0]-V[0][0])+D[1]*(V[1][1]-V[0][1])>0:L.roomLeft===A.room_id,G=[-D[1],D[0]],K=et?G:[-G[0],-G[1]],ot=Math.min(c(L.a,D,B,B+O,Wl(L,i.height))-.02,A.sill+A.height),dt=Math.max(0,Math.min(A.sill,ot-.1)),$=[K[1],-K[0]],X=D[0]*$[0]+D[1]*$[1]>0,it={opening:A,bucket:g.get(L),start:[L.a[0]+D[0]*B,L.a[1]+D[1]*B],axis:D,width:O,toRoom:K,faceRoom:et?L.left:L.right,faceOut:et?L.right:L.left,sill:dt,top:ot,hingeAtStart:A.hinge==="left"===X,exterior:L.exterior};_.push(it);let at=p.get(L);at||p.set(L,at=[]),at.push({s0:B,s1:B+O,sill:dt,top:ot,info:it})}let y=Math.min(i.cut_height,i.height),v=new ee;for(let A of o){let I=g.get(A),E=Yl([A.b[0]-A.a[0],A.b[1]-A.a[1]]),L=(p.get(A)??[]).sort((G,K)=>G.s0-K.s0),F=Wl(A,i.height),D=[],k=[-1/0,...new Set(L.flatMap(G=>[G.s0,G.s1])).values(),1/0].sort((G,K)=>G-K);for(let G=0;G+1<k.length;G++){let K=k[G],ot=k[G+1];if(ot-K<1e-6)continue;let dt=Number.isFinite(K)&&Number.isFinite(ot)?(K+ot)/2:Number.isFinite(K)?K+1:ot-1,$=L.filter(at=>at.s0<dt&&at.s1>dt).map(at=>[at.sill,at.top]).sort((at,ct)=>at[0]-ct[0]),X=[],it=-$e;for(let[at,ct]of $)at>it+1e-4&&X.push([it,at<1e-4?-X1:at]),it=Math.max(it,ct);F>it+1e-4&&X.push([it,F]),D.push({t0:K,t1:ot,ranges:X})}let O=Math.hypot(A.b[0]-A.a[0],A.b[1]-A.a[1]),B=s&&c(A.a,E,0,O,F)<F-.001,V=B?D.flatMap(G=>{let K=Math.max(G.t0,-.5),ot=Math.min(G.t1,O+.5),dt=Math.max(1,Math.ceil((ot-K)/.3));return Array.from({length:dt},($,X)=>({t0:X===0?G.t0:K+(ot-K)*X/dt,t1:X===dt-1?G.t1:K+(ot-K)*(X+1)/dt,ranges:G.ranges,inner0:X>0,inner1:X<dt-1}))}):D.map(G=>({...G,inner0:!1,inner1:!1})),et=G=>(G[0]-A.a[0])*E[0]+(G[1]-A.a[1])*E[1];for(let G of V){let K=q1(A.footprint,A.a,E,G.t0,G.t1);if(K.length<3)continue;let ot=(X,it)=>Math.abs(et(X)-it)<1e-4,dt=(X,it)=>G.inner0&&ot(X,G.t0)&&ot(it,G.t0)||G.inner1&&ot(X,G.t1)&&ot(it,G.t1),$=B?Math.min(...K.map(([X,it])=>l(X,it,F))):F;for(let[X,it]of G.ranges){let at=Math.min(it,B?Math.max(...K.map(([Rt,Wt])=>l(Rt,Wt,F))):it);if(at-X<1e-4||$-X<.01)continue;let ct=X>.01,gt=B&&it>$,Ot=(Rt,Wt)=>Math.min(it,l(Rt,Wt,F));if(X<y-1e-6){let Rt=at>y+1e-6?pp+I:fr+I,Wt=gt&&$<y?(se,qt)=>Math.min(y,Ot(se,qt)):Math.min(at,y);Pe(v,K,X,Wt,po.wall,po.wallTop,{aoFrom:0,bottom:ct,fold:fr+I,topFold:Rt,skipSide:dt})}at>y+1e-6&&$>y+1e-6&&Pe(v,K,Math.max(X,y),gt?Ot:at,po.wall,po.wallTop,{aoFrom:0,fold:I,bottom:ct&&X>=y,skipSide:dt})}}}let M=o.flatMap(A=>A.footprint),T=Z1(o,M),C=new Le;C.p.push(...f.p),C.c.push(...f.c),C.f.push(...f.f);let b=(A,I)=>(p.get(A)??[]).filter(I);for(let A of T.edges){let I=g.get(A.wall);for(let[L,F]of Xl(A,b(A.wall,D=>D.sill<=.005)))C.seg([L[0],.004,L[1]],[F[0],.004,F[1]],dp);for(let[L,F]of Xl(A,b(A.wall,D=>D.sill<y&&D.top>y)))C.seg([L[0],y,L[1]],[F[0],y,F[1]],Bu,Ul+I);let E=Wl(A.wall,i.height);for(let[L,F]of Xl(A,b(A.wall,D=>D.top>=E-.021))){if(!s){C.seg([L[0],E,L[1]],[F[0],E,F[1]],hr,E<=y+1e-6?fr+I:I);continue}let D=Math.max(1,Math.ceil(Math.hypot(F[0]-L[0],F[1]-L[1])/.3));for(let k=0;k<D;k++){let O=[L[0]+(F[0]-L[0])*k/D,L[1]+(F[1]-L[1])*k/D],B=[L[0]+(F[0]-L[0])*(k+1)/D,L[1]+(F[1]-L[1])*(k+1)/D],V=l(O[0],O[1],E),et=l(B[0],B[1],E);C.seg([O[0],V,O[1]],[B[0],et,B[1]],hr,Math.max(V,et)<=y+1e-6?fr+I:I)}}}for(let A of T.corners){let I=l(A.p[0],A.p[1],Wl(A.wall,i.height));C.segSplit([A.p[0],.004,A.p[1]],[A.p[0],I,A.p[1]],ki,Math.min(y,I),g.get(A.wall))}for(let A of p.values())for(let I of A)Y1(C,I,y);let S=K1(T.edges,i.rooms,p),w=new ee;Lp(v,C,i,w);for(let A of r)Ku(v,C,A.face,A.field,i.elevation);let R=[];for(let A of i.furniture){if(zd(A.type))continue;let I=v.count,E=C.p.length/6,L=hn(i,A);Ol(v,C,S,A,L),L+A.h>y+.05&&(mp(v,I,y,ku),gp(C,E,y,ku)),R.push({id:A.id,start:I,end:v.count})}return{floor:u.geometry(),roomTris:h,holes:d,walls:v.geometry(),water:w.geometry(),lines:C.geometry(),shadow:S.geometry(),buckets:x,openings:_,walls2d:o,openRooms:a,wallBuckets:o.map(A=>g.get(A)),furnitureTris:R,roofUnder:s}}function Y1(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,u)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:Xt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),ki,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),ki,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),ki,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),ki,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),ki,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),Bu,Ul+r)}function q1(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=Yp(o,a=>s(a)-n)),Number.isFinite(r)&&(o=Yp(o,a=>r-s(a))),o}function Yp(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var qp=i=>Math.round(i*1e3),go=i=>`${qp(i[0])},${qp(i[1])}`,$p=(i,t)=>{let e=go(i),n=go(t);return e<n?`${e}|${n}`:`${n}|${e}`};function $1(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let h of t){let f=((h[0]-r[0])*o+(h[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((h[0]-r[0])*a-(h[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((h,f)=>h-f);let u=r;for(let h of c){let f=[r[0]+o*h,r[1]+a*h];go(f)!==go(u)&&e.push([u,f]),u=f}e.push([u,s])}return e}function Z1(i,t){let e=i.map(l=>({wall:l,edges:$1(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,u]of l){let h=$p(c,u);n.set(h,(n.get(h)??0)+1)}let r=[],s=new Map,o=(l,c,u)=>{let h=go(l),f=s.get(h);f||s.set(h,f={p:l,wall:c,d:[]}),f.d.push(u)};for(let{wall:l,edges:c}of e)for(let[u,h]of c){if(n.get($p(u,h))!==1)continue;let f=Math.hypot(h[0]-u[0],h[1]-u[1]);if(f<1e-4)continue;r.push({a:u,b:h,wall:l});let d=[(h[0]-u[0])/f,(h[1]-u[1])/f];o(u,l,d),o(h,l,d)}let a=[];for(let{p:l,wall:c,d:u}of s.values())u.some(h=>u.some(f=>Math.abs(h[0]*f[1]-h[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function Xl(i,t){if(!t.length)return[[i.a,i.b]];let e=Yl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Yl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=h=>(h[0]-i.wall.a[0])*e[0]+(h[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let h of t)c=c.flatMap(([f,d])=>{if(h.s1<=f||h.s0>=d)return[[f,d]];let m=[];return h.s0>f&&m.push([f,h.s0]),h.s1<d&&m.push([h.s1,d]),m});let u=h=>{let f=(h-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([h,f])=>f-h>1e-4).map(([h,f])=>s<=o?[u(h),u(f)]:[u(f),u(h)])}function K1(i,t,e){let n=new ee,r=new J(Ju,Ju,Ju),s=new J(1,1,1),o=.002;for(let a of i)for(let[l,c]of Xl(a,(e.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],h=c[1]-l[1],f=Math.hypot(u,h);if(f<.05)continue;let d=[h/f,-u/f],m=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&Kt(m,p.points)))continue;let x=[l[0]+d[0]*Hl,l[1]+d[1]*Hl],g=[c[0]+d[0]*Hl,c[1]+d[1]*Hl];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[g[0],o,g[1]],r,s,s),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],r,s,r)}return n}function Kp(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(Ni),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return Uu(e);let r=n.furniture.filter(s=>(Bd.has(s.type)||Te(s.type)?.hole)&&n.elevation+s.h>=t.elevation-.3).map(Ni);return Uu([...e,...r])}function Wl(i,t){return Math.min(t,i.height??t)}function Yl(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function ju(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var J1=new J(1516340),j1=new J(527897),Qu=new J(1779256),xo=new J(1120808),Q1=new J(4163256),Jp=new J(5995161),tM=new J(2240842),eM=new J(1318704),nM=.35,as=.8,iM=.2,jp=.1;function rM(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=Qp(i,t);return!!e&&e.some(([n,r])=>Rl(n,r)-t.elevation>-.15)}function Qp(i,t){return t.rooms.some(e=>e.points.length>=3)?jd(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function sM(i,t,e,n){let r=-1/0;for(let s of i.floors)for(let o of s.outdoor??[])o.points.length<3||o.type==="pool"||Kn(o.type)||!Kt(e,o.points)||(r=Math.max(r,s.elevation+ar(s,o)+ts[o.type]-t.elevation));return r>n?r-n:0}function tm(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=Qp(i,t);if(!r)return null;let s=(m,x)=>Rl(m,x)-t.elevation,o=n&&r.some(([m,x])=>s(m,x)<-$e-.03);if(!o&&!rM(i,t))return null;let a=t.height,l=-nM,c=(m,x)=>Math.min(a,Rl(m,x)-t.elevation),u=new ee,h=new ee,f=new Le,d=(m,x,g,p,_,y,v,M)=>{let T=[x[0]-m[0],x[2]-m[2]];-T[1]*_[0]+T[0]*_[1]>0?(M.tri(m,x,g,y,y,v),M.tri(m,g,p,y,v,v)):(M.tri(m,g,x,y,v,y),M.tri(m,p,g,y,v,v))};for(let m=0;m<r.length;m++){let x=r[m],g=r[(m+1)%r.length],p=Math.hypot(g[0]-x[0],g[1]-x[1]);if(p<1e-4)continue;let _=[(g[0]-x[0])/p,(g[1]-x[1])/p],y=[_[1],-_[0]],v=[(x[0]+g[0])/2+y[0]*.05,(x[1]+g[1])/2+y[1]*.05];Kt(v,r)&&(y=[-y[0],-y[1]]);let M=(w,R=.012)=>[x[0]+_[0]*w+y[0]*R,x[1]+_[1]*w+y[1]*R],T=[];for(let w of e){if(w.opening.type!=="window"||!w.exterior||w.opening.well===!1)continue;let R=w.start[0]+w.axis[0]*(w.width/2)-w.toRoom[0]*w.faceOut,A=w.start[1]+w.axis[1]*(w.width/2)-w.toRoom[1]*w.faceOut,I=(R-x[0])*_[0]+(A-x[1])*_[1];Math.abs((R-x[0])*y[0]+(A-x[1])*y[1])>.08||I<-.05||I>p+.05||w.sill>=c(R,A)-.05||T.push({s0:Math.max(0,I-w.width/2-jp),s1:Math.min(p,I+w.width/2+jp),bottom:Math.max(l+.05,w.sill-iM),rim:w.opening.well_rim??0})}let C=new Set([0,p]);for(let w of T)C.add(w.s0),C.add(w.s1);let b=[...C].sort((w,R)=>w-R),S=[];for(let w=0;w<b.length-1;w++){let R=Math.max(1,Math.ceil((b[w+1]-b[w])/.5));for(let A=0;A<R;A++)S.push(b[w]+(b[w+1]-b[w])*A/R)}S.push(p);for(let w=0;w<S.length-1;w++){let R=S[w],A=S[w+1],I=T.find(et=>R>=et.s0-1e-6&&A<=et.s1+1e-6),E=M(R),L=M(A),F=c(E[0],E[1]),D=c(L[0],L[1]),k=I?Math.min(F,I.bottom):F,O=I?Math.min(D,I.bottom):D;if(k>l+.01||O>l+.01){let et=Math.min(k,l),G=Math.min(O,l);d([E[0],et,E[1]],[L[0],G,L[1]],[L[0],Math.max(O,l),L[1]],[E[0],Math.max(k,l),E[1]],y,j1,J1,u)}let B=s(E[0],E[1]),V=s(L[0],L[1]);if(o&&(B<-$e-.01||V<-$e-.01)&&d([E[0],Math.min(B,-$e),E[1]],[L[0],Math.min(V,-$e),L[1]],[L[0],-$e,L[1]],[E[0],-$e,E[1]],y,eM,tM,u),F>l||D>l||o&&(B<-$e||V<-$e)){let et=o?Math.min(B,Math.max(F,l)):Math.max(F,l),G=o?Math.min(V,Math.max(D,l)):Math.max(D,l);f.seg([E[0],et+.004,E[1]],[L[0],G+.004,L[1]],Q1)}}for(let w of T){let R=M(w.s0,0),A=M(w.s1,0),I=[R[0]+y[0]*as,R[1]+y[1]*as],E=[A[0]+y[0]*as,A[1]+y[1]*as],L=[(R[0]+A[0]+I[0]+E[0])/4,(R[1]+A[1]+I[1]+E[1])/4],F=sM(i,t,L,c(L[0],L[1])),D=Math.max(w.rim,F>0?F+.02:0),k=K=>c(K[0],K[1])+D,O=w.bottom,B=(K,ot)=>[K[0],ot,K[1]];h.tri(B(R,O),B(A,O),B(E,O),xo),h.tri(B(R,O),B(E,O),B(I,O),xo);let V=(K,ot)=>{h.tri(B(K,O),B(ot,O),B(ot,k(ot)),xo,xo,Qu),h.tri(B(K,O),B(ot,k(ot)),B(K,k(K)),xo,Qu,Qu)};V(R,I),V(A,E),V(I,E);let et=K=>[K[0],k(K)+.01,K[1]];for(let[K,ot]of[[R,A],[A,E],[E,I],[I,R]])f.seg(et(K),et(ot),Jp);let G=Math.max(3,Math.round((w.s1-w.s0)/.12));for(let K=1;K<G;K++){let ot=K/G,dt=[R[0]+(A[0]-R[0])*ot,R[1]+(A[1]-R[1])*ot];f.seg(et(dt),et([dt[0]+y[0]*as,dt[1]+y[1]*as]),Jp)}}}return u.count||h.count?{earth:u,wells:h,lines:f}:null}var em=i=>Math.round(i*1e3)/1e3;function oM(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,u)=>{let h=l.points[(u+1)%l.points.length];return o(c)>.02||o(h)>.02?!1:Math.min(r,Math.max(a(c),a(h)))-Math.max(0,Math.min(a(c),a(h)))>.05}))}function nm(i,t,e,n,r,s=.05){let o=i.rooms.find(f=>f.points.length>=3&&Kt([t.x,t.z],f.points));if(!o)return[e,n];let a=o.points,l=Un(a)>=0?1:-1,c=Ni({...t}),u=e,h=n;for(let f=0;f<2;f++){let d=Ni({...t,x:u,z:h});for(let m=0;m<a.length;m++){let x=a[m],g=a[(m+1)%a.length],p=Math.hypot(g[0]-x[0],g[1]-x[1]);if(p<.05)continue;let _=[(g[0]-x[0])/p,(g[1]-x[1])/p],y=[-_[1]*l,_[0]*l],v=oM(i,o.id,x,g)?r/2:0,M=0;d.forEach((T,C)=>{let b=(T[0]-x[0])*_[0]+(T[1]-x[1])*_[1];if(b<-.01||b>p+.01)return;let S=(T[0]-x[0])*y[0]+(T[1]-x[1])*y[1]-v,w=c[C];(w[0]-x[0])*y[0]+(w[1]-x[1])*y[1]-v<-s||S<M&&(M=S)}),M<-1e-4&&(u-=y[0]*M,h-=y[1]*M)}}return[em(u),em(h)]}var aM=500,im=.12,rm=1.35,lM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,ql=class{view={target:new H,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,h=Math.min(1,(t-c)/u),f=lM(h);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,h>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=th(this.view.phi+this.velocity.phi,im,rm),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},r=t.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let s={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:r,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:n,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab?.(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},aM)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag?.(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let s=e.type==="mouse";if(s&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if((e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!s))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=th(this.view.phi+c,im,rm),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,s=performance.now();s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=s,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=th(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new H(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new H(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function th(i,t,e){return Math.min(e,Math.max(t,i))}function Hi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}function sm(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function om(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=sm(s,o),c=sm(o,a),u=Math.min(t,l*.45,c*.45),h=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],f=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(u<.005||h[0]*f[0]+h[1]*f[1]+h[2]*f[2]<-.999){n.push(o);continue}let d=[o[0]+h[0]*u,o[1]+h[1]*u,o[2]+h[2]*u],m=[o[0]+f[0]*u,o[1]+f[1]*u,o[2]+f[2]*u];for(let x=0;x<=e;x++){let g=x/e,p=(1-g)*(1-g),_=2*(1-g)*g,y=g*g;n.push([p*d[0]+_*o[0]+y*m[0],p*d[1]+_*o[1]+y*m[1],p*d[2]+_*o[2]+y*m[2]])}}return n.push(i[i.length-1]),n}var am=new J(7568261),lm=new J(4869974),cM=new J(3116287),cm=new J(3948872),eh=br([.35,.85,.4]),um=10;function br(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function bo(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function hm(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=br(bo(i,t));return[e,br(bo(i,e))]}function fi(i,t){let e=.5+.5*Math.max(0,t[0]*eh[0]+t[1]*eh[1]+t[2]*eh[2]);return i.clone().multiplyScalar(e)}function ls(i,t,e,n,r,s=!1){let o=br([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=hm(o),c=(u,h)=>{let f=h/um*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[u[0]+d[0]*n,u[1]+d[1]*n,u[2]+d[2]*n],n:d}};for(let u=0;u<um;u++){let h=c(t,u),f=c(t,u+1),d=c(e,u),m=c(e,u+1);i.tri(h.p,m.p,d.p,fi(r,h.n),fi(r,m.n),fi(r,d.n)),i.tri(h.p,f.p,m.p,fi(r,h.n),fi(r,f.n),fi(r,m.n)),s&&(i.tri([...t],f.p,h.p,fi(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,m.p,fi(r,o)))}}function uM(i,t,e,n,r,s,o,a){let l=br(bo(e,n)),c=(h,f,d)=>[t[0]+e[0]*h*r+n[0]*f*s+l[0]*d*o,t[1]+e[1]*h*r+n[1]*f*s+l[1]*d*o,t[2]+e[2]*h*r+n[2]*f*s+l[2]*d*o],u=[];for(let[h,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])u.push([h,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[h,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])u.push([h,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[h,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])u.push([h,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[h,f]of u){let d=fi(a,h);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function fm(i,t){if(t.points.length<2)return;let e=t.radius,n=om(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?am.clone().multiplyScalar(.55):am;ls(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);ls(i,o,a,e*1.22,lm,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);ls(i,o,a,e*1.08,t.water?new J(...t.water).multiplyScalar(.9):new J(10475240),!0);for(let l of s(.08)){let[c,u]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];ls(i,c,u,e*1.3,lm,!0)}}else{let[o,a]=s(.055);ls(i,o,a,e*1.4,cm,!0);let[l]=hm(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],u=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];ls(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],u,e*.35,cm,!0);let h=r.open===!1?br(bo(r.dir,c)):r.dir,f=br(bo(h,c)),d=[u[0]+h[0]*.045,u[1]+h[1]*.045,u[2]+h[2]*.045];uM(i,d,h,f,.1,.028,.012,cM)}}}var nh=1.62,hM=.2,ih=class{solids=[];doors=[];rooms;walls;building;floor;constructor(t,e){this.building=t,this.floor=e;let n=t.settings;this.rooms=e.rooms.filter(o=>o.points.length>=3);let r=hi(this.rooms,{exterior:n.wall_exterior,interior:n.wall_interior},e.walls??[]);this.walls=r.walls;let s=new Map;for(let o of e.openings){if(!(o.type!=="window"||o.sill<.1))continue;let l=eo(o,e.rooms,e.walls??[]);if(!l)continue;let c=no(this.walls,o,l);if(!c)continue;let u=s.get(c.wall)??[];u.push([c.s-o.width/2+.05,c.s+o.width/2-.05]),s.set(c.wall,u);let h=c.wall,f=h.b[0]-h.a[0],d=h.b[1]-h.a[1],m=Math.hypot(f,d)||1,x=f/m,g=d/m,p=[h.a[0]+x*c.s,h.a[1]+g*c.s],_=h.left+.45,y=h.right+.45;this.doors.push({centre:p,p:[[p[0]-g*_,p[1]+x*_],[p[0]+g*y,p[1]-x*y]]})}for(let o of this.walls){if(o.height!==void 0&&o.height<.9)continue;let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l);c<1e-6||this.solids.push({a:o.a,u:[a/c,l/c],len:c,left:o.left,right:o.right,gaps:s.get(o)??[]})}}blocked(t,e=hM){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>Kt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];let n=[t,e,...this.doors.flatMap(h=>h.p).filter(h=>!this.blocked(h))],r=n.length,s=new Array(r).fill(1/0),o=new Array(r).fill(-1),a=new Array(r).fill(!1);s[0]=0;let l=new Map,c=(h,f)=>{let d=h<f?`${h}:${f}`:`${f}:${h}`,m=l.get(d);return m===void 0&&(m=this.clear(n[h],n[f]),l.set(d,m)),m};for(;;){let h=-1;for(let f=0;f<r;f++)!a[f]&&s[f]<1/0&&(h<0||s[f]<s[h])&&(h=f);if(h<0)return null;if(h===1)break;a[h]=!0;for(let f=0;f<r;f++){if(a[f]||f===h)continue;let d=Math.hypot(n[h][0]-n[f][0],n[h][1]-n[f][1]);s[h]+d>=s[f]||c(h,f)&&(s[f]=s[h]+d,o[f]=h)}}let u=[];for(let h=1;h>0;h=o[h])u.unshift(n[h]);return u}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=eo(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=no(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c)||1,h=l/u,f=c/u,d=[a.a[0]+h*o.s,a.a[1]+f*o.s],m=[d[0]-f*(a.left+.9),d[1]+h*(a.left+.9)];if(!this.blocked(m))return{p:m,yaw:this.openYaw(m,Math.atan2(h,-f))}}let e=[...this.rooms].sort((r,s)=>dm(s)-dm(r))[0],n=e?this.freeNear(cr(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function dm(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var rh=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+nh}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-nh,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(cr(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,u=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,u),n=!0}else if(this.path.length){let[l,c]=this.path[0],u=l-r.x,h=c-r.z,f=Math.hypot(u,h),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=u/f*d,r.z+=h/f*d,this.turnTo=Math.atan2(h,u)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,u=this.v.camera.fov*Math.PI/180,h=Math.tan(u/2),f=n.width/n.height,d=Math.cos(a),m=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],x=[-Math.sin(o),0,Math.cos(o)],g=[m[1]*x[2]-m[2]*x[1],m[2]*x[0]-m[0]*x[2],m[0]*x[1]-m[1]*x[0]],p=[-g[0],-g[1],-g[2]],_=[m[0]+x[0]*r*h*f+p[0]*s*h,m[1]+x[1]*r*h*f+p[1]*s*h,m[2]+x[2]*r*h*f+p[2]*s*h];if(_[1]>=-.02)return null;let y=nh/-_[1];return[l+_[0]*y,c+_[2]*y]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",o=>{e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},this.surface.setPointerCapture?.(o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>!!o.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function fM(i,t){let e=Te(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function sh(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?fM(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function oh(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let u=e.length/3,h=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=dM(c.id)%1e3/1e3;for(let x of uo(l,c)){let[g,p,_,y]=x.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[g,0,0],[p,1,0],[_,1,1],[y,0,1]];for(let M of[0,1,2,0,2,3]){let[T,C,b]=v[M];e.push(T[0],T[1],T[2]),n.push(C,b),r.push(h,f),s.push(d)}}let m=e.length/3-u;m&&o.push({id:c.id,start:u,count:m})}if(!e.length)return null;let a=new Zt;return a.setAttribute("position",new zt(e,3)),a.setAttribute("uv",new zt(n,2)),a.setAttribute("aCells",new zt(r,2)),a.setAttribute("aPhase",new zt(s,1)),a.setAttribute("aLevel",new zt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function vo(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function ah(i){let t=new ie({transparent:!0,blending:Ie,depthWrite:!1,side:fe});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function dM(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var mm=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,pM=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  uniform float uSurface;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    // the surface of a pool with a basin is a faint shimmer, the light's pattern lies on the floor below
    float base = mix(0.32, 0.16, uSurface);
    float lines = mix(0.35 + 0.6 * uFlow, 0.18 + 0.3 * uFlow, uSurface);
    vec3 col = uColor * uLevel * (base + lines * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,mM=mm,gM=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function pm(i,t){let e=[];for(let[r,s,o]of zi(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Zt;return n.setAttribute("position",new zt(e,3)),n}function gm(i,t){let e=new ke;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,s=(o,a)=>{let l=new kt(pm(n.points,o),new on({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:mm,fragmentShader:pM,transparent:!0,blending:Ie,depthWrite:!1,side:fe}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(s(n.floorY+.01,0),s(n.y+.004,1)):s(n.y+.004,0),n.cover>.02){let o=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,u,h]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],f=c-l>=h-u,d=Math.min(1,n.cover),m=f?[[l-.1,u-.1],[l+(c-l)*d,u-.1],[l+(c-l)*d,h+.1],[l-.1,h+.1]]:[[l-.1,u-.1],[c+.1,u-.1],[c+.1,u+(h-u)*d],[l-.1,u+(h-u)*d]],x=Dl(n.points,m);if(x.length>=3){let g=new kt(pm(x,n.y+.03),new on({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:mM,fragmentShader:gM,transparent:!0,side:fe}));g.renderOrder=6,e.add(g);let p=[];for(let y=0;y<x.length;y++){let v=x[y],M=x[(y+1)%x.length];p.push(v[0],n.y+.032,v[1],M[0],n.y+.032,M[1])}let _=new Zt;_.setAttribute("position",new zt(p,3)),e.add(new Ye(_,new Ke({color:5995775,transparent:!0,opacity:.6})))}}}return e}function xm(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var bm=["neon","blueprint","day"];function vm(i){return bm.indexOf(i)}var $l={value:new H(.22,.88,1)},Zl={value:0};function _m(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var xM=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces with a hint of their hue, dark blue lines
  if (line) return vec3(0.08, 0.17, 0.38) * clamp(mx * 1.4, 0.4, 1.0);
  vec3 g = vec3(clamp(0.66 + l * 2.6, 0.0, 0.96));
  return mix(g, g * (c / max(mx, 0.001)), 0.1);
}
`;function ln(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=$l,s.uniforms.uAccentOn=Zl,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${xM}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function _o(i){return i==="day"?Pi:Ie}var yo=.012,bM=.012;function Mm(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],u=[],h=(p,_,y,v,M,T,C)=>{for(let b of[p,_,y,p,y,v])a.push(b[0],b[1],b[2]),l.push(M[0],M[1],M[2]),c.push(T),u.push(C)};i.rooms.forEach((p,_)=>{if(p.points.length<3)return;let y=p.points.map(R=>R[0]),v=p.points.map(R=>R[1]),M=Math.min(...y),T=Math.min(...v),C=Math.max(...y),b=Math.max(...v),S=Math.max(1,Math.ceil((C-M)/r)),w=Math.max(1,Math.ceil((b-T)/r));for(let R=0;R<S;R++)for(let A=0;A<w;A++){let I=M+(R+.5)*r,E=T+(A+.5)*r;if(!Kt([I,E],p.points)||s.some(O=>Kt([I,E],O)))continue;let L=M+R*r,F=T+A*r,D=Math.min(L+r,C),k=Math.min(F+r,b);h([L,yo,F],[L,yo,k],[D,yo,k],[D,yo,F],[0,1,0],_,-1)}});let f=i.rooms.length,d=(i.outdoor??[]).filter(p=>p.points.length>=3&&!Kn(p.type));if(d.length){let p=d.flatMap(b=>b.points.map(S=>S[0])),_=d.flatMap(b=>b.points.map(S=>S[1])),y=Math.floor(Math.min(...p)/r)*r,v=Math.floor(Math.min(..._)/r)*r,M=Math.max(1,Math.ceil((Math.max(...p)-y)/r)),T=Math.max(1,Math.ceil((Math.max(..._)-v)/r)),C=(b,S,w)=>Ip(i,b)-js(i,b,S,w)+yo;for(let b=0;b<M;b++)for(let S=0;S<T;S++){let w=y+b*r,R=v+S*r,A,I=[w+r/2,R+r/2];A=d.find(L=>L.type==="pool"&&Kt(I,L.points));for(let L=d.length-1;L>=0&&!A;L--)Kt(I,d[L].points)&&(A=d[L]);if(!A)continue;let E=(L,F)=>[L,C(A,L,F),F];h(E(w,R),E(w,R+r),E(w+r,R+r),E(w+r,R),[0,1,0],f,-1)}}let m=Math.min(i.cut_height,i.height),x=[];t.forEach((p,_)=>{let y=Math.min(i.height,p.height??i.height),v=Math.min(m,y-.02),M=p.b[0]-p.a[0],T=p.b[1]-p.a[1],C=Math.hypot(M,T);if(C<.05)return;let b=[M/C,T/C],S=[-b[1],b[0]],w=e[_],R=_M(p,b,C,n),A=(F,D)=>F?i.rooms.findIndex(k=>k.id===F):D?f:-1;x.push({a:p.a,b:p.b,h:y,ra:A(p.roomLeft,!1),rb:A(p.roomRight,p.exterior),gaps:R});let I=(F,D,k)=>[D,k,...F.filter(O=>O>D+.005&&O<k-.005)].sort((O,B)=>O-B).filter((O,B,V)=>B===0||O>V[B-1]+.005),E=I([v,(v+y)/2,...R.flatMap(F=>[F.y0+.01,F.y1-.01])],.02,y-.02),L=I(R.flatMap(F=>[F.s0,F.s1]),0,C);for(let F of[1,-1]){let D=F>0?p.roomLeft:p.roomRight,k=D?i.rooms.findIndex(G=>G.id===D):p.exterior?f:-1;if(k<0)continue;let O=(F>0?p.left:p.right)+bM,B=[S[0]*F,S[1]*F],V=(G,K)=>[p.a[0]+b[0]*G+B[0]*O,K,p.a[1]+b[1]*G+B[1]*O],et=G=>{let K=V(G,0),ot=o?.(K[0],K[2]);return ot==null?1/0:ot-.02};for(let G=0;G<L.length-1;G++){let K=L[G+1]-L[G],ot=Math.max(1,Math.ceil(K/r));for(let dt=0;dt<ot;dt++){let $=L[G]+K/ot*dt,X=L[G]+K/ot*(dt+1),it=($+X)/2;for(let at=0;at<E.length-1;at++){let ct=E[at],gt=E[at+1];if(gt-ct<.01)continue;let Ot=(ct+gt)/2;if(R.some(qt=>it>qt.s0&&it<qt.s1&&Ot>qt.y0&&Ot<qt.y1))continue;let Rt=ct>=m-1e-6?w:fr+w,Wt=Math.min(gt,et($)),se=Math.min(gt,et(X));Wt<=ct+.005&&se<=ct+.005||h(V($,ct),V(X,ct),V(X,Math.max(ct,se)),V($,Math.max(ct,Wt)),[B[0],0,B[1]],k,Rt)}}}}});let g=[];for(let p of n){if(p.opening.type!=="door")continue;let _=t.find(M=>Sm(M,p)&&vM(M,p));if(!_||!_.roomLeft||!_.roomRight)continue;let y=i.rooms.findIndex(M=>M.id===_.roomLeft),v=i.rooms.findIndex(M=>M.id===_.roomRight);y<0||v<0||g.push({id:p.opening.id,a:y,b:v,x:p.start[0]+p.axis[0]*(p.width/2),y:Math.min(1.1,p.top*.55),z:p.start[1]+p.axis[1]*(p.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(u),doors:g,blockers:x}}function Sm(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function vM(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function _M(i,t,e,n){let r=[];for(let s of n){if(!Sm(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function yM(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function MM(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function ym(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,u=a*a+l*l+c*c,h=Math.sqrt(u)||1e-6,f=MM(i),d=1/(1+u/(f*f)),m=d*Math.sqrt(d),x=Math.max(0,-(a*r+l*s+c*o)/h);return i.level*m*(.2+.8*x)*yM(i.kind,l/h)}function wm(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,h)=>{let f=n[h]??.5;if(!(f<=.01))for(let[d,m]of[[u.a,u.b],[u.b,u.a]]){let x=[0,0,0];for(let p of t){if(p.room!==d)continue;let _=p.x-u.x,y=p.y-u.y,v=p.z-u.z,M=Math.hypot(_,y,v)||1,T=ym(p,u.x,u.y,u.z,_/M,y/M,v/M);x[0]+=p.color[0]*T,x[1]+=p.color[1]*T,x[2]+=p.color[2]*T}let g=Math.max(x[0],x[1],x[2]);g<.01||r.push({x:u.x,y:u.y,z:u.z,color:[x[0]/g,x[1]/g,x[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:m})}});let s=new Map;for(let u of r){let h=i.blockers.filter(d=>d.ra===u.room||d.rb===u.room),f={...u,color:u.color.map(d=>Math.pow(d,1.5)),walls:h};s.set(u.room,[...s.get(u.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let u=0;u<l.length;u++){let h=s.get(l[u]);if(!h)continue;let f=u*3,d=0,m=0,x=0;for(let g of h){if(g.walls.length&&SM(g,g.walls,o[f],o[f+1],o[f+2]))continue;let p=ym(g,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*p,m+=g.color[1]*p,x+=g.color[2]*p}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-m*e*1.6),c[f+2]=1-Math.exp(-x*e*1.6)}return c}function SM(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=s*c-o*l;if(Math.abs(u)<1e-9)continue;let h=a.a[0]-i.x,f=a.a[1]-i.z,d=(h*c-f*l)/u;if(d<=1e-6||d>=1-1e-6)continue;let m=(h*o-f*s)/u;if(m<0||m>1)continue;let x=i.y+(n-i.y)*d;if(x>=a.h)continue;let g=m*Math.hypot(l,c);if(!a.gaps.some(p=>g>p.s0&&g<p.s1&&x>p.y0&&x<p.y1))return!0}return!1}function Tm(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&Kt([t,e],r.points));return n<0?i.rooms.length:n}function Kl(i,t){return i&&t>=0&&t<i.length?i[t]:t}var Mo={open:0,open2:0,tilt:0,tilt2:0,cover:null},Em=2043986,Am=2769520,wM=2242399,lh=1845831,TM=1450554,di=16758087,EM=1.2,AM=1.5,RM=1846349,CM=2572395,PM=1120816,IM=1845831,Rm=5995775,Cm=9085695,cs=Bt(3662079,.08),LM=.2;function Jl(i,t,e,n,r,s,o,a,l,c,u){let h=(d,m,x)=>t(d,m,x),f=[[h(e,r,a),h(n,r,a),h(n,s,a),h(e,s,a),c],[h(e,r,o),h(n,r,o),h(n,s,o),h(e,s,o),Bt(l.getHex(),.6)],[h(e,s,o),h(n,s,o),h(n,s,a),h(e,s,a),l],[h(e,r,o),h(n,r,o),h(n,r,a),h(e,r,a),Bt(l.getHex(),.85)],[h(e,r,o),h(e,s,o),h(e,s,a),h(e,r,a),Bt(l.getHex(),.92)],[h(n,r,o),h(n,s,o),h(n,s,a),h(n,r,a),Bt(l.getHex(),.92)]];for(let[d,m,x,g,p]of f)i.tri(d,m,x,p,p,p,void 0,u),i.tri(d,x,g,p,p,p,void 0,u)}function ue(i,t,e,n,r,s,o,a,l,c,u,h){if(a<=u+1e-6)return Jl(i,t,e,n,r,s,o,a,l,c,Xt);if(o>=u-1e-6)return Jl(i,t,e,n,r,s,o,a,l,c,h);Jl(i,t,e,n,r,s,o,u,l,c,Xt),Jl(i,t,e,n,r,s,u,a,l,c,h)}function Wi(i,t,e,n,r,s,o,a,l,c,u=0){let h=(f,d,m)=>{let x=v=>u?(o-v)/u:.5,g=t(e,r,f),p=t(n,r,f),_=t(n,r,d),y=t(e,r,d);i.tri(g,p,_,a,a,a,[0,x(f),1,x(f),1,x(d)],m),i.tri(g,_,y,a,a,a,[0,x(f),1,x(d),0,x(d)],m)};o<=l+1e-6?h(s,o,Xt):s>=l-1e-6?h(s,o,c):(h(s,l,Xt),h(l,o,c))}function FM(i,t,e,n,r,s,o,a,l,c){let u=t(e,r,o),h=t(n,r,o),f=t(n,s,o),d=t(e,s,o),m=0,x=(s-r)/c;i.tri(u,h,f,a,a,a,[0,m,1,m,1,x],l),i.tri(u,f,d,a,a,a,[0,m,1,x,0,x],l)}function Pm(i,t,e){let n=new ee,r=new ee,s=new ee(!0),o=new J(Em),a=new J(Am),l=[],c=[],u=[];for(let h of i){let f=n.count,d=r.count,m=s.count,x=t.get(h.opening.id)??Mo,g=h.width,{sill:p,top:_,bucket:y}=h,v=(b,S,w)=>[h.start[0]+h.axis[0]*b+h.toRoom[0]*S,w,h.start[1]+h.axis[1]*b+h.toRoom[1]*S],M=(h.faceRoom-h.faceOut)/2,T=h.opening.mark==="closed",C=h.opening.type==="door"&&lr(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!C||h.opening.type==="garage"){let b=-h.faceOut-.012,S=h.faceRoom+.012,w=h.opening.type==="garage"&&(T?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),R=w?Bt(di,.8):new J(Em),A=w?Bt(di,1):new J(Am);ue(n,v,-.045,.02,b,S,0,_+.045,R,A,e,y),ue(n,v,g-.02,g+.045,b,S,0,_+.045,R,A,e,y),ue(n,v,.02,g-.02,b,S,_-.02,_+.045,R,A,e,y)}if(h.opening.type==="door"){let b=lr(h.opening,h.exterior),S=Gd(b),w=h.opening.swing==="out"?-1:1,R=w>0?h.faceRoom:-h.faceOut,A=h.opening.leaves===2,I=.02,E=g-.02,L=Vd(g,b,h.hingeAtStart,h.opening);if(L){let O=-h.faceOut-.012,B=h.faceRoom+.012,V=R-w*(S?.06:.04)/2,et=.06;for(let[G,K]of L.panels)ue(n,v,G,G+et,O,B,.02,_-.02,o,a,e,y),ue(n,v,K-et,K,O,B,.02,_-.02,o,a,e,y),ue(n,v,G+et,K-et,O,B,.02,.12,o,a,e,y),Wi(r,v,G+et,K-et,V,.12,_-.02,cs,e,y);I=L.x0,E=L.x1}let F=A?(E-I)/2-.004:E-I,D=S?.06:.04;S&&(ue(n,v,.02,g-.02,-h.faceOut-.02,h.faceRoom,0,.02,new J(lh),a,e,y),h.exterior&&ue(n,v,g/2-.08,g/2+.08,-h.faceOut-.1,-h.faceOut,_+.1,_+.17,Bt(di,.55),Bt(di,.85),e,Xt));let k=C?[]:[[h.hingeAtStart,x.open]];A&&!C&&k.push([!h.hingeAtStart,x.open2??0]);for(let[O,B]of k){let V=Math.min(1,Math.max(0,B)),et=b==="sliding"?0:V*AM,G=b==="sliding"?V*F:0,K=(Ot,Rt,Wt)=>{let se=Ot*Math.cos(et)-Rt*Math.sin(et)-G,qt=R+w*(Rt*Math.cos(et)+Ot*Math.sin(et)+(G?.05:0));return v(O?I+se:E-se,qt,Wt)},ot=V>.05?Xt:y,dt=T?!!x.sensed&&V<.05:V>.9,$=dt?Bt(di,.7):new J(S?PM:RM),X=dt?Bt(di,.9):new J(S?IM:CM);b==="glass"?(ue(n,K,0,.05,-D,0,.01,_-.01,$,X,e,ot),ue(n,K,F-.05,F,-D,0,.01,_-.01,$,X,e,ot),ue(n,K,.05,F-.05,-D,0,.01,.12,$,X,e,ot),ue(n,K,.05,F-.05,-D,0,_-.08,_-.01,$,X,e,ot),Wi(r,K,.05,F-.05,-D/2,.12,_-.08,cs,e,ot)):ue(n,K,0,F,-D,0,.01,_-.01,$,X,e,ot),b==="front_glass"?Wi(r,K,.12,F-.12,.001,_*.55,_-.18,cs,e,ot):S&&Wi(r,K,.1,.18,.001,.3,_-.3,cs,e,ot);let it=Math.min(1.05,_*.5),at=S?.3:.012,ct=S?F-.11:F-.16,gt=S?F-.08:F-.05;ue(n,K,ct,gt,.004,.05,it-at,it+at,new J(Rm),new J(Cm),e,ot),ue(n,K,ct,gt,-D-.05,-D-.004,it-at,it+at,new J(Rm),new J(Cm),e,ot)}}else if(h.opening.type==="garage"){let b=Math.min(1,Math.max(0,x.cover??1)),S=new J(13951231),w=h.faceRoom-.03,R=_*(1-b);b>.01&&Wi(s,v,.02,g-.02,w,R,_,S,e,y,.5);let A=(1-b)*_;A>.01&&FM(s,v,.02,g-.02,w,w+A,_+.03,S,y,.5)}else if(lr(h.opening,h.exterior)==="glass_wall"){ue(n,v,0,.04,M-.025,M+.025,p,_,o,a,e,y),ue(n,v,g-.04,g,M-.025,M+.025,p,_,o,a,e,y),ue(n,v,.04,g-.04,M-.025,M+.025,p,p+.03,o,a,e,y),ue(n,v,.04,g-.04,M-.025,M+.025,_-.04,_,o,a,e,y);let w=Math.max(1,Math.round((g-2*.04)/.9)),R=(g-2*.04)/w;for(let A=1;A<w;A++){let I=.04+A*R;ue(n,v,I-.02,I+.02,M-.025,M+.025,p+.03,_-.04,o,a,e,y)}for(let A=0;A<w;A++){let I=.04+A*R+(A?.02:0),E=.04+(A+1)*R-(A<w-1?.02:0);Wi(r,v,I,E,M,p+.03,_-.04,cs,e,y)}}else{ue(n,v,0,.06,M-.035,M+.035,p,_,o,a,e,y),ue(n,v,g-.06,g,M-.035,M+.035,p,_,o,a,e,y),ue(n,v,.06,g-.06,M-.035,M+.035,p,p+(p>.05?.06:.03),o,a,e,y),ue(n,v,.06,g-.06,M-.035,M+.035,_-.06,_,o,a,e,y),p>.3&&(ue(n,v,-.04,g+.04,M+.035,h.faceRoom+.07,p-.03,p,new J(lh),a,e,y),h.exterior&&ue(n,v,-.03,g+.03,-h.faceOut-.06,M-.035,p-.04,p-.02,new J(lh),a,e,y));let w=.055,R=p+(p>.05?.06:.03),A=_-.06,I=M+.035,E=M+.035+.06,F=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:g/2,x1:h.hingeAtStart?g/2:g-.06,open:x.open,tilt:x.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?g/2:.06,x1:h.hingeAtStart?g-.06:g/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:g-.06,open:x.open,tilt:x.tilt}];for(let D of F){let k=D.open>.02||D.tilt>.02,O=T?!!x.sensed&&!k:k,B=O?Bt(di,.75):new J(wM),V=O?Bt(di,.95):a,et=D.x0,G=D.x1,K=G-et,ot=D.open*EM*(h.opening.swing==="out"?-1:1),dt=D.tilt*LM,$=(it,at,ct)=>{let gt=ct-R,Ot=at+gt*Math.sin(dt),Rt=R+gt*Math.cos(dt),Wt=it*Math.cos(ot)-(Ot-I)*Math.sin(ot);Ot=I+(Ot-I)*Math.cos(ot)+it*Math.sin(ot);let se=D.atStart?et+Wt:G-Wt;return v(se,Ot,Rt)},X=Math.abs(ot)>.05?Xt:y;if(ue(n,$,0,w,I,E,R,A,B,V,e,X),ue(n,$,K-w,K,I,E,R,A,B,V,e,X),ue(n,$,w,K-w,I,E,R,R+w,B,V,e,X),ue(n,$,w,K-w,I,E,A-w,A,B,V,e,X),Wi(r,$,w,K-w,(I+E)/2,R+w,A-w,O?Bt(di,.16):cs,e,X),lr(h.opening,h.exterior)==="bars"){let it=(R+A)/2,at=(I+E)/2;ue(n,$,w,K-w,at-.012,at+.012,it-.012,it+.012,B,V,e,X),ue(n,$,K/2-.012,K/2+.012,at-.012,at+.012,R+w,A-w,B,V,e,X)}}}if(x.cover!==null){let b=-h.faceOut,S=_+.2;ue(n,v,-.05,g+.05,b-.15,b,_,S,new J(TM),a,e,y);let w=Math.min(1,Math.max(0,x.cover));if(w>.01){let R=_-w*(_-p);Wi(s,v,0,g,b-.07,R,_,new J(16777215),e,y,.045)}}l.push({id:h.opening.id,start:f,end:n.count}),c.push({id:h.opening.id,start:d,end:r.count}),u.push({id:h.opening.id,start:m,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:u}}var DM=.3,Im=2.6;function Lm(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),s=i.map(M=>M[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),u=c-l>=a-o,h=e*.7071,f=M=>{let T=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],C=[...T,[M[0]+h,M[1]+h],[M[0]-h,M[1]+h],[M[0]+h,M[1]-h],[M[0]-h,M[1]-h]];return T.every(b=>Kt(b,i))&&!n.some(b=>C.some(S=>Kt(S,b)))},d=(M,T)=>f(u?[M,T]:[T,M]),m=(M,T)=>{let C=Math.ceil(Math.hypot(T[0]-M[0],T[1]-M[1])/.05);for(let b=1;b<C;b++)if(!f([M[0]+(T[0]-M[0])*b/C,M[1]+(T[1]-M[1])*b/C]))return!1;return!0},[x,g,p,_]=u?[o,a,l,c]:[l,c,o,a],y=[],v=!0;for(let M=x+e;M<=g-e+1e-6;M+=t){let T=null,C=null,b=.05;for(let A=p;A<=_+1e-6;A+=b)if(d(M,A)&&(C??=A),(!d(M,A)||A+b>_+1e-6)&&C!==null){let I=d(M,A)?A:A-b;(!T||I-C>T[1]-T[0])&&(T=[C,I]),C=null}if(!T||T[1]-T[0]<.2)continue;let S=A=>{let[I,E]=A?T:[T[1],T[0]];return[u?[M,I]:[I,M],u?[M,E]:[E,M]]},w=S(v),R=y[y.length-1];if(R&&n.length&&!m(R,w[0])){let A=S(!v);if(!m(R,A[0]))continue;w=A,v=!v}y.push(w[0],w[1]),v=!v}return y}function uh(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var ch=i=>Math.atan2(Math.sin(i),Math.cos(i));function Fm(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=ch(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Im*e),!0)}let a=Math.atan2(r,s),l=ch(a-i.heading);if(i.heading=ch(i.heading+Math.sign(l)*Math.min(Math.abs(l),Im*e)),Math.abs(l)<.35){let c=Math.min(o,DM*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}var Tn=null,Dm=new Map;function Um(i,t=0){let e=new ee,n=new Le,r=Te(i.type);if(r?.light)Bl(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)hh(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Ol(e,n,new ee,s)}return{buf:e,lines:n}}function NM(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=Dm.get(r);if(s)return s;e&&Js(e),Tn??=new or({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Tn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Tn.setSize(t,t,!1),Tn.setClearColor(0,0);let{buf:o,lines:a}=Um(i),l=new wi,c=new kt(o.geometry(),new ie({vertexColors:!0,color:new J(n,n,n)})),u=new Ye(a.geometry(),new Ke({vertexColors:!0,color:new J(n*1.8,n*1.8,n*1.8)}));l.add(c,u);let h=new un().setFromObject(c),f=h.getCenter(new H),d=new Xn(-1,1,1,-1,.01,100);d.position.copy(f).add(new H(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let m=.05;for(let p of[h.min.x,h.max.x])for(let _ of[h.min.y,h.max.y])for(let y of[h.min.z,h.max.z]){let v=new H(p,_,y).applyMatrix4(d.matrixWorldInverse);m=Math.max(m,Math.abs(v.x),Math.abs(v.y))}let x=m*1.12;d.left=-x,d.right=x,d.top=x,d.bottom=-x,d.updateProjectionMatrix(),Tn.render(l,d);let g=Tn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose(),Dm.set(r,g),g}function UM(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=Nm.get(s);if(o)return o;n&&Js(n);let{buf:a,lines:l}=Um(i,t),c=new kt(a.geometry(),new ie({vertexColors:!0,color:new J(r,r,r)})),u=new Ye(l.geometry(),new Ke({vertexColors:!0,color:new J(r*1.8,r*1.8,r*1.8)})),h=new un().setFromObject(c);if(h.isEmpty())return null;let f=h.min.x,d=h.max.x,m=Math.max(0,h.min.y),x=h.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),p=Math.max(1,Math.min(1024,Math.round((x-m)*e)));Tn??=new or({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Tn.setPixelRatio(1),Tn.setSize(g,p,!1),Tn.setClearColor(0,0);let _=new wi;_.add(c,u);let y=new Xn(f,d,x,m,.01,100);y.position.set(0,0,50),y.lookAt(0,0,0),y.updateProjectionMatrix(),Tn.render(_,y);let v=Tn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose();let M={url:v,x0:f,x1:d,y0:m,y1:x};return Nm.set(s,M),M}var Nm=new Map;var VA={Group:ke,Mesh:kt,MeshBasicMaterial:ie,CanvasTexture:ai,Color:J,PlaneGeometry:li,BufferGeometry:Zt,Float32BufferAttribute:zt,DoubleSide:fe},Bm={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},km={temperature:"M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0zM12 9v9",humidity:"M12 3s6 7 6 11.5a6 6 0 0 1-12 0C6 10 12 3 12 3z",co2:"M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0zM9 10.5v3M15 10.5v3M9 12h6"},OM=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${km[i]??km.temperature}"/></svg>`,BM=2.4,zm=1.4,kM=.22,Vm=140,dh=32,zM=500,Gm=160,Hm=33,Wm=.028,VM=.09,re=2767456,GM=1911110,HM=1,Xm=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),jl=450,Ym=125,WM=.08,ph={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},XM=new J(1714765);function YM(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var mh=class{host;options;renderer;scene=new wi;camera=new nn(38,1,.1,400);controls;labels;root=new ke;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;pinStyle="compact";groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new Ye(new Zt,new Ke({color:10471679,transparent:!0,opacity:.4,blending:Ie,depthWrite:!1}));snow=new Gr(new Zt,new tr({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new kt(new As(1,28),new ie({color:16767370,transparent:!0,opacity:0,blending:Ie,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=$M(),this.blindTexture=KM(),this.haloTexture=jM(),this.ground=new kt(new li(1,1),new ie({transparent:!1,blending:Ie,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){Js(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,Id(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setFloor(t,e=!0){this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(u=>u.floor.rooms.some(h=>h.id===t)),n=e?.floor.rooms.find(u=>u.id===t);if(!e||!n)return;let r=n.start_view;if(r){let u=e.floor.elevation+e.ty,[h,f]=cr(n.points),d=r.target??{x:h,y:.3,z:f};this.controls.flyTo({target:new H(d.x,d.y+u,d.z),radius:r.radius,phi:r.phi,theta:r.theta});return}let[s,o]=cr(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new H(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new H(s,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let s=r.el;r.icon!==n.icon&&(r.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";r.caption!==o&&(r.caption=o,s.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,s.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,s.title=n.name,s.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?s.style.setProperty("--fp3d-glow",c):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])vo(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&vo(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(s=>s.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(xm(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=gm(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new ke;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=.03;for(let c of s)if(c.playing)for(let u=0;u<3;u++){let h=new kt(new Ls(.92,1,48),new ie({color:3662079,transparent:!0,opacity:0,blending:Ie,depthWrite:!1,side:fe}));h.rotation.x=-Math.PI/2,h.position.set(c.x,o+u*.002,c.z),h.userData={sound:!0,phase:u/3,level:c.level},h.frustumCulled=!1,r.add(h)}let a=[],l=new Set;for(let c of s)for(let u of c.members){let h=s.find(d=>d.id===u);if(!h||h===c)continue;let f=[c.id,h.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,h.x,o+.02,h.z))}if(a.length){let c=new Zt;c.setAttribute("position",new zt(a,3));let u=new Ye(c,new Ke({color:3662079,transparent:!0,opacity:.45,blending:Ie,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=fh(r),o=qm(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new ee;for(let s of e)fm(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let s=document.createElement("img");s.src=n.picture,s.alt="",s.addEventListener("error",()=>s.replaceWith(document.createTextNode(n.initials))),r.append(s)}else r.textContent=n.initials}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=_m(t),n=e?1:0;n===Zl.value&&(!e||$l.value.equals(new H(...e)))||(Zl.value=n,e&&$l.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=vm(t);let e=_o(t),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines]:[]];for(let r of n)r.blending=e,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new J(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new Ms(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let u=s.x0+Math.random()*(s.x1-s.x0),h=s.y0+Math.random()*(s.y1-s.y0),f=s.z0+Math.random()*(s.z1-s.z0);o.set([u,h,f],c*3),n&&o.set([u,h-.45,f],c*3+3)}t.geometry.dispose();let l=new Zt;l.setAttribute("position",new zt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let u=0;u<l.length;u+=6){let h=l[u+1]-c,f=l[u]+o*n;h<r.y0&&(h+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[u]=f,l[u+1]=h,l[u+3]=f-o*.05,l[u+4]=h-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let u=0;u<l.length;u+=3){let h=l[u+1]-(.9+.6*e.snow)*n,f=l[u]+(o+Math.sin(c+u)*.4)*n;h<r.y0&&(h+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[u]=f,l[u+1]=h}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*he,o=(r?t.azimuth+180:t.azimuth)*he,a=Math.max(10,Math.abs(t.elevation))*he,l=this.weatherBox,c=new H((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),h=new H(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(h,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let f=this.skyDisc.material;f.color.set(r?13621486:16767370),f.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",t.classList.toggle("fp3d-pin-hud",this.pinStyle==="hud"),n&&this.pinStyle==="hud"){for(let r of n.split(" \xB7 ")){let s=r.includes("ppm")?"co2":r.includes("%")?"humidity":"temperature",o=document.createElement("span");o.className=`fp3d-hud-row fp3d-hud-${s}`,o.innerHTML=OM(s),o.append(document.createTextNode(r)),t.append(o)}t.classList.add("fp3d-pin-info")}else if(n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setPinStyle(t){if(t!==this.pinStyle){this.pinStyle=t;for(let e of this.floors)for(let n of e.roomPins)this.fillRoomPin(n.pin,n.room.name,this.roomInfo.get(n.room.id));this.labelsDirty=!0,this.invalidate()}}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??Mo,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){for(let[e,n]of t){let r=this.fridges.get(e)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(e,r)}for(let e of[...this.fridges.keys()])t.has(e)||this.fridges.delete(e);this.invalidate()}awnings=new Map;setAwnings(t){for(let[e,n]of t){let r=this.awnings.get(e)??{cur:n.out??0,to:n.out??0,speed:0};n.out===null?(r.to=n.moving>0?1:0,r.speed=1/Math.max(2,n.time)):(r.to=n.out,r.speed=0),this.awnings.set(e,r)}for(let e of[...this.awnings.keys()])t.has(e)||this.awnings.delete(e);this.invalidate()}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,s]of this.awnings){let o=s.to-s.cur;if(Math.abs(o)<.002){o!==0&&(s.cur=s.to,e.add(r));continue}s.cur=s.speed>0?s.cur+Math.sign(o)*Math.min(Math.abs(o),s.speed*t/1e3):s.cur+o*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/Gm),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}buildFridges(t){let e=new ee;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Ap(e,n,hn(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&Ep(e,n,hn(t.floor,n),this.awnings.get(n.id)?.cur??0);t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values())t.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&YM();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new or({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=De,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new ql(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))e.dispose();this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)},zM)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",u=>u.preventDefault()),e.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}),e.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Mm(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=$m(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=Kl(r,a.ra),a.rb=Kl(r,a.rb)}t.lightSurface=n;let s=new Zt;s.setAttribute("position",new zt(n.pos,3)),s.setAttribute("color",new zt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new zt(n.fold,1));let o=new ji(new Uint32Array(n.pos.length/3),1);o.setUsage(nu),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let s=n.top??t.floor.height,o=Tm(t.floor,n.x,n.z),a=Kl(t.lightZones,o),[l,,c]=n.size??(n.lamp?ph[n.lamp]:[.3,.3,.3]),u=n.base??0,h={ceiling:[s-.12,"ceiling"],downlight:[s-.03,"spot"],spot:[s-c,"spot"],panel:[s-.05,"ceiling"],pendant:[Math.max(.5,s-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<HM?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[f,d]=n.lamp?h[n.lamp]:[n.y,"omni"],m=n.lightY??f,x=r.color;if(n.lamp==="strip"){let g=(n.rotation??0)*he,p=!!n.upright||Math.abs(n.roll??0)>45;for(let _ of[-1/3,0,1/3])n.upright?e.push({x:n.x,y:u+l*(.5+_),z:n.z,color:x,level:r.level*.55,kind:"omni",room:a}):e.push({x:n.x+Math.cos(g)*l*_,y:m,z:n.z+Math.sin(g)*l*_,color:x,level:r.level*.55,kind:p?"omni":d,room:a})}else e.push({x:n.x,y:m,z:n.z,color:x,level:r.level,kind:d,room:a})}return e}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(h=>{let f=t.geo.openings.find(m=>m.opening.id===h.id);if(f&&lr(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(h.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(h=>h.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=wm(e,n,.42,r);if(this.roomTint){let h=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==h)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let h=0;h<l.length/18;h++){let f=!1;for(let d=h*18;d<h*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[u++]=h*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),t.glowMesh.visible=u>0}makeMaterials(t){return{floor:ln(new ie({vertexColors:!0}),this.themeUniform),pattern:ZM(this.patternTexture),wall:ln(Hi(new ie({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:Hi(new ie({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new ie({vertexColors:!0,blending:Bs,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:fe,polygonOffset:!0,polygonOffsetFactor:-1}),lines:ln(Hi(new Ke({vertexColors:!0,transparent:!0,blending:_o(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:Hi(new ie({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:fe,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:ln(Hi(new ie({vertexColors:!0,side:fe}),t),this.themeUniform),glass:Hi(new ie({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:fe}),t),blinds:ln(Hi(new ie({map:this.blindTexture,vertexColors:!0,side:fe}),t),this.themeUniform),water:ln(new ie({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:fe}),this.themeUniform),flow:JM(this.flowTime),solarLive:ah(this.flowTime),lamps:ln(new ie({vertexColors:!0}),this.themeUniform),halos:new tr({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1}),cones:new ie({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:fe}),screens:new ie({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:fe}),earth:ln(new ie({vertexColors:!0}),this.themeUniform),earthWell:ln(new ie({vertexColors:!0,side:fe}),this.themeUniform),earthLines:ln(new Ke({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=Zu(n)?.id===s.id?o.filter(it=>it.face===$u).map(it=>({field:it,face:Np(n,it)})):[],l=o.filter(it=>it.face.startsWith(`wall:${s.id}:`));if(l.length){let it=new Map(Dp(n,s.id).map(at=>[at.key,at]));for(let at of l){let ct=it.get(at.face);ct&&a.push({field:at,face:ct})}}let u=(n.settings.roof.sections??[]).some(it=>Zd(it,s.elevation+s.height))?(it,at)=>{let ct=Kd(n,it,at);return ct===null?null:ct-s.elevation}:void 0,h=Zp(sh(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Kp(n.floors,s),a,u),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),m=new ke,x=new kt(h.floor,d.floor),g=new kt(h.shadow,d.shadow);g.renderOrder=1;let p=new kt(h.floor,d.pattern);p.renderOrder=2;let _=new kt(new Zt,d.glow);_.renderOrder=3,_.visible=!1;let y=new kt(new Zt,d.frames),v=new kt(new Zt,d.blinds),M=new kt(new Zt,d.glass);M.renderOrder=4;let T=new kt(new Zt,d.lamps);T.visible=!1;let C=new kt(new Zt,d.cones);C.visible=!1,C.renderOrder=3;let b=new Gr(new Zt,d.halos);b.visible=!1,b.renderOrder=7;let S=new kt(new Zt,d.cones);S.visible=!1,S.renderOrder=7;let w=new kt(new Zt,d.cones);w.visible=!1,w.renderOrder=7;let R=new kt(new Zt,d.lamps);R.visible=!1;let A=new kt(new Zt,d.lamps);A.visible=!1;let I=new kt(new Zt,d.screens);I.visible=!1,I.renderOrder=5;let E=new kt(new Zt,d.flow);E.renderOrder=5,E.frustumCulled=!1;let L=oh(a,s.elevation),F=L?new kt(L.geometry,d.solarLive):null;F&&(F.renderOrder=6,vo(L,this.solarLevels));for(let it of[y,v,M])it.frustumCulled=!1;let D=new kt(h.walls,d.glassWall),k=new kt(h.walls,d.wall);D.renderOrder=6;let O=new kt(h.water,d.water);O.renderOrder=4;let B=Math.min(...n.floors.filter(it=>it.rooms.length).map(it=>it.elevation)),V=tm(n,s,h.openings,s.elevation===B),et=V?[new kt(V.earth.geometry(),d.earth),new kt(V.wells.geometry(),d.earthWell),new Ye(V.lines.geometry(),d.earthLines)]:[];for(let it of et)it.userData.earth=!0;m.add(x,g,p,_,k,O,new Ye(h.lines,d.lines),y,v,M,E,T,C,b,S,w,R,A,I,D,...F?[F]:[],...et),this.root.add(m);let G=document.createElement("button");G.className="fp3d-pin fp3d-pin-floor",G.dataset.floor=s.id;let K=document.createElement("b");K.textContent=s.name||"\u2013";let ot=document.createElement("span");ot.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",G.append(K,ot),G.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(G);let dt=t.get(s.id),$=[],X=null;for(let it of s.rooms){let at=document.createElement("button");at.className="fp3d-pin",at.dataset.room=it.id,at.dataset.floor=s.id,this.fillRoomPin(at,it.name,this.roomInfo.get(it.id)),at.addEventListener("click",()=>this.options.onRoomTap?.(s.id,it.id)),this.labels.append(at);let[ct,gt]=cr(it.points);$.push({pin:at,room:it,cx:ct,cz:gt});for(let[Ot,Rt]of it.points)X??={x0:Ot,x1:Ot,z0:Rt,z1:Rt},X.x0=Math.min(X.x0,Ot),X.x1=Math.max(X.x1,Ot),X.z0=Math.min(X.z0,Rt),X.z1=Math.max(X.z1,Rt)}this.floors.push({floor:s,rank:r.indexOf(s),group:m,geo:h,floorMesh:x,shadowMesh:g,patternMesh:p,glowMesh:_,lightSurface:null,lightZones:null,framesMesh:y,glassMesh:M,blindsMesh:v,flowMesh:E,solarMesh:F,solarLive:L,lampMesh:T,sunMesh:C,sunSig:"",haloMesh:b,coneMesh:S,trailMesh:w,fridgeMesh:R,pipeMesh:A,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:k,screenMesh:I,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:X,roomPins:$,labelSize:null,materials:d,mask:f,openings:new Map,y:dt?.y??0,o:dt?.o??1,ty:0,to:1,appliedO:-1,label:G})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s),this.buildPipes(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Mo);this.buildOpenings(s),this.buildFlows(s),s.poolGroup=void 0,this.buildPoolWater(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(x=>x.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(x=>x.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?Wp(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(gr(this.building).map(x=>[x.key,x])),n=this.building.settings.roof?.solar??[],r=ah(this.flowTime),s=[],o=new ke,a=ln(new ie({vertexColors:!0,transparent:!0,side:fe}),this.themeUniform),l=ln(new Ke({vertexColors:!0,transparent:!0,blending:_o(this.theme),depthWrite:!1}),this.themeUniform,!0),c=ln(new ie({vertexColors:!0,transparent:!0,side:fe,depthWrite:!1}),this.themeUniform),u=new ke,h=ln(new ie({vertexColors:!0,side:fe}),this.themeUniform),f=ln(new Ke({vertexColors:!0,transparent:!0,blending:_o(this.theme),depthWrite:!1}),this.themeUniform,!0),d=[],m=t.map(x=>{let g=new ke;g.add(new kt(x.solid.geometry(),a),new Ye(x.lines.geometry(),l)),x.glass.count&&g.add(new kt(x.glass.geometry(),c));let p=n.flatMap(v=>{let M=e.get(v.face);return M&&(M.section?x.sections?.includes(M.section):x===t[0])?[{face:M,field:v}]:[]}),_=oh(p,x.floor.elevation+x.base);if(_){let v=new kt(_.geometry,r);v.renderOrder=9,g.add(v),s.push(_),vo(_,this.solarLevels)}x.winRoof?.solid.count&&g.add(new kt(x.winRoof.solid.geometry(),h),new Ye(x.winRoof.lines.geometry(),f)),g.renderOrder=8,o.add(g);let y=null;x.win?.solid.count&&(y=new ke,y.add(new kt(x.win.solid.geometry(),h),new Ye(x.win.lines.geometry(),f)),u.add(y));for(let[v,M]of x.winBelow??[]){if(!M.solid.count)continue;let T=new ke;T.add(new kt(M.solid.geometry(),h),new Ye(M.lines.geometry(),f)),u.add(T),d.push({floorId:v,win:T})}return{group:g,floorId:x.floor.id,rideId:ip(this.building,x.floor,x.sections??[]),base:x.base,lift:x.lift!==!1,win:y}});o.renderOrder=8,this.scene.add(o),this.scene.add(u),this.roof={group:o,parts:m,below:d,solid:a,lines:l,glass:c,live:r,lives:s,wins:u,winSolid:h,winLines:f},this.placeRoof()}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?.94*n:0,o=1-Math.exp(-t/Vm),a=this.roofO;this.roofO+=(s-this.roofO)*o,Math.abs(s-this.roofO)<.004&&(this.roofO=s),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let u=this.floorMap.get(l.rideId)??c,h=u.ty>0?Math.min(1,u.y/u.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+u.y+l.base+(1-this.roofO)*2.2+(l.lift?h*zm:0),l.win&&(l.win.position.y=c.floor.elevation+u.y+l.base+(l.lift?h*zm:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==s}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:kM)):r=this.explode?n.rank*BM:0,n.ty=r,n.to=s;let a=e===n?Je:Yn;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Vm);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Gm);for(let r of this.floors){let s=!1;for(let[o,a]of r.openings){let l=this.openingTargets.get(o)??Mo,c=(f,d)=>(f??null)===(d??null)||typeof f=="number"&&typeof d=="number"&&Math.abs(f-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},h=!1;for(let f of["open","open2","tilt","tilt2"]){let d=l[f]??0,m=a[f]??0,x=d-m;Math.abs(x)<.003?u[f]=d:(u[f]=m+x*n,h=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?u.cover=l.cover:(u.cover=a.cover+f*n,h=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(o,u),s=!0),e||=h}s&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new J(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*WM+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=e)return 0;let f=h-e,d=f>jl?.5+.5*Math.sin(f/140):f/jl;return Math.round(d*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=r.map(u=>this.glowOf(u)),a=r.map((u,h)=>`${n(u.id)},${o[h]?`${o[h].level.toFixed(3)},${o[h].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let u=new ee,h=[],f=[],d=new Map,m=t.floor.height;for(let x of r){let g=x.lamp==="strip"?(x.base??m)>Math.min(t.floor.cut_height,m):x.lamp?Xm.has(x.lamp)&&(x.top??m)>Math.min(t.floor.cut_height,m):x.model==="camera_ceiling";if(!x.lamp&&!x.model||g&&this.wallMode==="cut")continue;let p=u.count,_=x.pack?Te(x.pack):void 0,[y,v,M]=x.size??[.3,.3,.3];x.model?Cp(u,x.model,x.x,x.model==="camera_ceiling"?m:x.y,x.z,x.rotation??0):_?Bl(u,_,{x:x.x,z:x.z,rotation:x.rotation??0,w:y,d:v,h:M,mirror:x.mirror},x.base??0,65280):hh(u,{...x,lamp:x.lamp},x.top??m,65280),d.set(x.furnitureId??x.id,{start:p,end:u.count}),x.pickable!==!1&&h.push({id:x.id,start:p,end:u.count}),x.furnitureId&&f.push({id:x.furnitureId,start:p,end:u.count})}t.lampTris=h,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=wd(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,h)=>{let f=t.lampRanges.get(u.furnitureId??u.id);if(!f)return;let d=o[h],m=d?.55+.45*d.level:0,x=d?new J(...d.color.map(_=>Math.min(1,_*m))):new J(GM),g=n(u.id);g>0&&x.lerp(new J(1,1,1),.7*g);let p=new J(x.getHex());Td(c,t.lampShade,f,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*he,r=this.weather?.cloud??0,s=$m(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new ee;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*he,u=e.azimuth*he,h=[Math.sin(n+u),-Math.cos(n+u)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let m=[-d.toRoom[0],-d.toRoom[1]],x=m[0]*h[0]+m[1]*h[1];if(x<.05)continue;let g=t.openings.get(d.opening.id),p=d.top-(g?.cover??0)*(d.top-d.sill);if(p-d.sill<.05)continue;let _=(R,A)=>{let I=Math.min(7,A*f);return[d.start[0]+d.axis[0]*R+d.toRoom[0]*d.faceRoom-h[0]*I,.02,d.start[1]+d.axis[1]*R+d.toRoom[1]*d.faceRoom-h[1]*I]},y=.14*l*Math.min(1,x*1.5),v=new J(1*y,.82*y,.55*y),M=v.clone().multiplyScalar(.45),T=t.floor.rooms.findIndex(R=>R.id===d.opening.room_id);if(T<0||t.floor.rooms[T].points.length<3)continue;let C=s[T],b=t.floor.rooms.filter((R,A)=>s[A]===C&&R.points.length>=3).map(R=>R.points),S=Math.max(1,Math.ceil(Math.min(7,p*f)/.25)),w=Math.max(1,Math.ceil(d.width/.3));for(let R=0;R<S;R++){let A=d.sill+(p-d.sill)*R/S,I=d.sill+(p-d.sill)*(R+1)/S,E=R/S,L=(R+1)/S,F=v.clone().lerp(M,E),D=v.clone().lerp(M,L);for(let k=0;k<w;k++){let O=d.width*k/w,B=d.width*(k+1)/w,V=_((O+B)/2,(A+I)/2);if(!b.some(dt=>Kt([V[0],V[2]],dt)))continue;let et=_(O,A),G=_(B,A),K=_(B,I),ot=_(O,I);a.tri(et,G,K,F,F,D),a.tri(et,K,ot,F,D,D)}}}this.pushRoofSun(t,a,s,h,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0}pushRoofSun(t,e,n,r,s,o){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(gr(a).map(h=>[h.key,h])),u=[r[0]*Math.cos(s),Math.sin(s),r[1]*Math.cos(s)];for(let h of l){let f=c.get(h.face),d=Gl(a,f,h);if(!f||!d||d.floor.id!==t.floor.id)continue;let m=f.n[0]*u[0]+f.n[1]*u[1]+f.n[2]*u[2],[x,g,p,_]=d.corners,y=Math.min(1,this.roofWindows.get(h.id)?.cover??0);if(y>.95)continue;let v=(E,L,F)=>[E[0]+(L[0]-E[0])*F,E[1]+(L[1]-E[1])*F,E[2]+(L[2]-E[2])*F],M=v(_,x,y),T=v(p,g,y),C=t.floor.rooms.findIndex(E=>E.id===d.roomId);if(C<0)continue;let b=t.floor.rooms.filter((E,L)=>n[L]===n[C]&&E.points.length>=3).map(E=>E.points),S=(E,L)=>{let F=(k,O)=>v(v(E[0],E[1],k),v(E[3],E[2],k),O);for(let k=0;k<6;k++)for(let O=0;O<6;O++){let B=F((k+.5)/6,(O+.5)/6);if(!b.some(ot=>Kt([B[0],B[2]],ot)))continue;let V=F(k/6,O/6),et=F((k+1)/6,O/6),G=F((k+1)/6,(O+1)/6),K=F(k/6,(O+1)/6);e.tri(V,et,G,L,L,L),e.tri(V,G,K,L,L,L)}},w=E=>[E[0],.019,E[2]],R=.06*o;if(S([w(x),w(g),w(T),w(M)],new J(.75*R,.85*R,1*R)),m<.05)continue;let A=E=>{let L=Math.min(7,(E[1]-t.floor.elevation)/Math.tan(s));return[E[0]-r[0]*L,.02,E[2]-r[1]*L]},I=.16*o*Math.min(1,m*1.5);S([A(x),A(g),A(T),A(M)],new J(1*I,.84*I,.6*I))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new ee,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let _=(l.rotation??0)*he,y=[-Math.sin(_),Math.cos(_)],v=l.model==="camera_ceiling",M=l.reach??(v?3:4.5),T=(l.fov??(v?360:90))*he/2,C=l.motion?new J(.9,.12,.16):new J(.04,.22,.28),b=new J(0,0,0),S=Math.max(4,Math.round(T/.15)),w=.015,R=t.geo.walls2d,A=D=>{let k=D.b[0]-D.a[0],O=D.b[1]-D.a[1],B=k*k+O*O||1,V=Math.max(0,Math.min(1,((l.x-D.a[0])*k+(l.z-D.a[1])*O)/B));return Math.hypot(l.x-(D.a[0]+k*V),l.z-(D.a[1]+O*V))},I=null;for(let D of R)A(D)<.45&&(!I||A(D)<A(I))&&(I=D);let E=D=>{let k=y[0]*Math.cos(D)-y[1]*Math.sin(D),O=y[1]*Math.cos(D)+y[0]*Math.sin(D),B=M;for(let V of R){let et=V.b[0]-V.a[0],G=V.b[1]-V.a[1],K=k*G-O*et;if(Math.abs(K)<1e-9)continue;let ot=((V.a[0]-l.x)*G-(V.a[1]-l.z)*et)/K,dt=((V.a[0]-l.x)*O-(V.a[1]-l.z)*k)/K;V===I&&ot<=.45||ot>.02&&ot<B&&dt>=0&&dt<=1&&(B=ot)}return B},L=D=>{let k=E(D);return[l.x+(y[0]*Math.cos(D)-y[1]*Math.sin(D))*k,w,l.z+(y[1]*Math.cos(D)+y[0]*Math.sin(D))*k]},F=s.count;for(let D=0;D<S;D++)s.tri([l.x,w,l.z],L(-T+2*T*(D+1)/S),L(-T+2*T*D/S),C,b,b);o.push({id:l.id,start:F,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Xm.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let u=l.top??e,[h,f,d]=l.size??ph[l.lamp],m=l.base??0,x=(l.rotation??0)*he,g={ceiling:u-.07,downlight:u-.03,spot:u-d,panel:u-.03,pendant:Math.max(.4,u-d)+.08,floor:m+d-.15,uplight:m+d,table:m+d-.09,wall:m+d/2,strip:m+Math.max(.02,d)-.01,bollard:m+d-.08,garden:m+d-.03}[l.lamp],p=(_,y,v=1)=>{n.push(_,g,y),r.push(...c.color.map(M=>M*c.level*.7*v))};if(l.lamp==="strip")for(let _ of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,m+h*(.5+_),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6))):p(l.x+Math.cos(x)*h*_,l.z+Math.sin(x)*h*_,.6);else l.lamp==="wall"?p(l.x-Math.sin(x)*(f/2+.05),l.z+Math.cos(x)*(f/2+.05)):p(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let _=new J(...c.color.map(C=>C*.09*c.level)),y=new J(0,0,0),v=Math.max(.03,h/2),M=.45+.35*c.level,T=16;for(let C=0;C<T;C++){let b=C/T*Math.PI*2,S=(C+1)/T*Math.PI*2,w=[l.x+Math.cos(b)*v,g,l.z+Math.sin(b)*v],R=[l.x+Math.cos(S)*v,g,l.z+Math.sin(S)*v],A=[l.x+Math.cos(b)*M,.02,l.z+Math.sin(b)*M],I=[l.x+Math.cos(S)*M,.02,l.z+Math.sin(S)*M];s.tri(w,A,I,_,y,y),s.tri(w,I,R,_,y,_)}}}let a=new Zt;a.setAttribute("position",new zt(n,3)),a.setAttribute("color",new zt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=sh(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),n=e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let r=new ee;for(let s of e){let o=this.screens.get(s.id),a=s.rotation*he,l=Math.cos(a),c=Math.sin(a),u=(v,M,T)=>[s.x+v*l-T*c,M,s.z+v*c+T*l];if(o.faces){let v=Math.max(.05,s.w)*(s.mirror?-1:1),M=Math.max(.05,s.d),T=Math.max(.005,s.h),C=hn(t.floor,s);for(let b of o.faces){if(b.part==="lights"){let O=Te(s.type),B=V=>["#e8f4ff","#ff3b4f"].includes(V.color.toLowerCase());if(O&&O.parts.some(B)){let V=new J(...b.color.map(et=>Math.min(1,et*(.4+.6*b.level))));ao(r,O,s,C,V.getHex(),B)}continue}if(b.part==="cabin"){let O=Te(s.type),B=V=>V.color.toLowerCase()==="#13283a"||V.color==="glass";if(O&&O.parts.some(B)){let V=new J(...b.color.map(et=>Math.min(1,et*(.3+.5*b.level))));ao(r,O,s,C,V.getHex(),B);continue}}if(b.part==="burners"&&Te(s.type)){let O=Te(s.type),B=new J(...b.color.map(V=>Math.min(1,V*(.25+.6*b.level))));ao(r,O,s,C,B.getHex(),Ed);continue}if(b.part==="burners"){let O=new J(...b.color.map(V=>Math.min(1,V*(.25+.6*b.level)))),B=C+T+.008;for(let[V,et,G]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let K=V*Math.abs(v)/.6,ot=et*M/.62,dt=14;for(let $=0;$<dt;$++){let X=$/dt*Math.PI*2,it=($+1)/dt*Math.PI*2;r.tri(u(K,B,ot),u(K+Math.cos(X)*G,B,ot+Math.sin(X)*G),u(K+Math.cos(it)*G,B,ot+Math.sin(it)*G),O)}}continue}if(b.part==="band"||b.part==="cabin"){let O=b.part==="cabin",B=C+T*(O?.6:.42),V=O?C+T*.86:B+.07,et=new J(...b.color.map(dt=>Math.min(1,dt*(.3+.45*b.level)))),G=Math.abs(v)/2+(O?.012:.02),K=M/2+(O?.012:.02),ot=[[-G,-K],[G,-K],[G,K],[-G,K]];for(let dt=0;dt<4;dt++){let $=ot[dt],X=ot[(dt+1)%4],it=u($[0]*Math.sign(v),B,$[1]),at=u(X[0]*Math.sign(v),B,X[1]),ct=u(X[0]*Math.sign(v),V,X[1]),gt=u($[0]*Math.sign(v),V,$[1]);r.tri(it,at,ct,et),r.tri(it,ct,gt,et)}continue}if(b.part==="beacon"){let O=new J(...b.color.map(at=>Math.min(1,at*(.25+.45*b.level)))),B=new J(0,0,0),V=C+T+.01,et=.6+.6*b.level,G=Math.min(Math.abs(v),M)*.38;for(let[at,ct]of[[G,0],[0,G]]){let gt=u(-at,V,-ct),Ot=u(at,V,ct),Rt=u(at*.4,V+et,ct*.4),Wt=u(-at*.4,V+et,-ct*.4);r.tri(gt,Ot,Rt,O,O,B),r.tri(gt,Rt,Wt,O,B,B)}let K=hn(t.floor,{...s,mount_y:0})+.012,ot=Math.abs(v)/2+.03,dt=M/2+.03,$=.22+.18*b.level,X=(at,ct,gt)=>u(at*(ot+gt),K,ct*(dt+gt)),it=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let at=0;at<4;at++){let[ct,gt]=it[at],[Ot,Rt]=it[(at+1)%4];r.tri(X(ct,gt,0),X(Ot,Rt,0),X(Ot,Rt,$),O,O,B),r.tri(X(ct,gt,0),X(Ot,Rt,$),X(ct,gt,$),O,B,B)}continue}let S=b.part==="right"?.03:-Math.abs(v)/2+.03,w=b.part==="left"?-.03:Math.abs(v)/2-.03,R=C+(b.part==="bottom"?T*.45:T)+.006,A=new J(...b.color.map(O=>Math.min(1,O*(.35+.65*b.level)))),I=new J(0,0,0),E=(O,B,V=R)=>u(O*Math.sign(v),V,B),L=[E(S,-M/2+.03),E(w,-M/2+.03),E(w,M/2-.03),E(S,M/2-.03)];r.tri(L[0],L[2],L[1],A),r.tri(L[0],L[3],L[2],A);let F=b.part==="lid"?.025+.02*b.level:.12+.1*b.level,D=A.clone().multiplyScalar(b.part==="lid"?.7:.5),k=[E(S-F,-M/2-F,R+.004),E(w+F,-M/2-F,R+.004),E(w+F,M/2+F,R+.004),E(S-F,M/2+F,R+.004)];for(let O=0;O<4;O++){let B=(O+1)%4;r.tri(L[O],k[B],k[O],D,I,I),r.tri(L[O],L[B],k[B],D,D,I)}}continue}let h=Te(s.type);if(h&&!h.light&&o.ring&&h.parts.some(v=>v.glow)){let v=new J(...o.color.map(M=>Math.min(1,M*(.45+.55*o.level))));ao(r,h,s,hn(t.floor,s),v.getHex())}let f=Xu(s,t.floor);if(!f)continue;let d=new J(...o.color.map(v=>Math.min(1,v*(.35+.65*o.level)))),m=new J(0,0,0),x=f.z+.004;if(r.tri(u(f.x0,f.y0,x),u(f.x1,f.y0,x),u(f.x1,f.y1,x),d),r.tri(u(f.x0,f.y0,x),u(f.x1,f.y1,x),u(f.x0,f.y1,x),d),o.plain)continue;let g=.18+.12*o.level,p=d.clone().multiplyScalar(.5),_=[u(f.x0,f.y0,x),u(f.x1,f.y0,x),u(f.x1,f.y1,x),u(f.x0,f.y1,x)],y=[u(f.x0-g,f.y0-g,x+.01),u(f.x1+g,f.y0-g,x+.01),u(f.x1+g,f.y1+g,x+.01),u(f.x0-g,f.y1+g,x+.01)];for(let v=0;v<4;v++){let M=(v+1)%4;r.tri(_[v],y[v],y[M],p,m,m),r.tri(_[v],y[M],_[M],p,m,p)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=r.geometry(),t.screenMesh.visible=r.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=Xu(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new kt(new li(1,1),new ie({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let u=l;new Ds().load(o.picture,h=>{if(t.screenPics.get(r)!==u){h.dispose();return}h.colorSpace=De,u.texture=h;let f=u.mesh.material;f.map=h,f.needsUpdate=!0,this.placeScreenPicture(u.mesh,s,a,h),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s?.width&&s?.height?s.width/s.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),u=c/o,h=e.rotation*he,f=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,u,1),t.rotation.set(0,-h,0),t.position.set(e.x+f*Math.cos(h)-d*Math.sin(h),(n.y0+n.y1)/2,e.z+f*Math.sin(h)+d*Math.cos(h))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){let e=this.flows.filter(u=>u.floorId===t.floor.id).map(fh).join(";"),n=[],r=[],s=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id)continue;let h=this.flowPhase.get(fh(u))??{speed:qm(u.power),offset:0},f=u.power>.5?Math.min(1,.5+u.power/2500):.22,d=u.color.map(_=>_*f),m=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(m<1e-4)continue;let x=[(u.b[0]-u.a[0])/m,(u.b[1]-u.a[1])/m,(u.b[2]-u.a[2])/m],g=[];if(Math.abs(x[1])<.5){let _=Math.hypot(x[0],x[2])||1;g.push([-x[2]/_,0,x[0]/_])}else g.push([1,0,0],[0,0,1]);let p=this.lowQuality?[[Wm*1.4,1]]:[[VM,.25],[Wm,1]];for(let[_,y]of p)for(let v of g){let M=_/2,T=(b,S)=>[b[0]+v[0]*M*S,b[1]+v[1]*M*S,b[2]+v[2]*M*S],C=[[T(u.a,-1),u.dist,0],[T(u.b,-1),u.dist+m,0],[T(u.b,1),u.dist+m,1],[T(u.a,1),u.dist,1]];for(let b of[0,1,2,0,2,3]){let[S,w,R]=C[b];n.push(S[0],S[1],S[2]),r.push(d[0]*y,d[1]*y,d[2]*y),s.push(w,R),o.push(h.speed),a.push(h.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,h]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(u);f.array.set(h),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Zt;c.setAttribute("position",new zt(n,3)),c.setAttribute("color",new zt(r,3)),c.setAttribute("uv",new zt(s,2)),c.setAttribute("flowSpeed",new zt(o,1)),c.setAttribute("flowOffset",new zt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=Pm(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let r=new J(n.color),s=this.roomTint?.get(n.roomId);s&&r.lerp(new J(...s).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(XM,s?.3:.75);for(let o=n.start*3;o<n.end*3;o++)e.setXYZ(o,r.r,r.g,r.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new un;for(let h of this.activeFloors()){let f=h.floor.elevation+h.ty;for(let d of h.floor.rooms)for(let[m,x]of d.points)e.expandByPoint(new H(m,f,x)),e.expandByPoint(new H(m,f+h.floor.height,x))}e.isEmpty()&&e.set(new H(-4,0,-4),new H(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new H),r=e.getSize(new H),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;if(u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.keepNext){this.keepNext=!1;let h=this.controls.view;this.controls.flyTo({target:new H(h.target.x,n.y,h.target.z),radius:h.radius,phi:h.phi,theta:h.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t)}placeGround(){let t=new un,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new H(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new H(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=QM();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new H),r=t.getSize(new H),s=dh*Math.ceil((Math.max(r.x,r.z)+16)/dh);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-$e-.02,n.z)}distanceFor(t){let e=this.camera.fov*he,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new Us;return r.setFromCamera(new te(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Xt;if(f!==Xt&&Math.floor(f/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),h=u?this.pickOpenings.get(u):void 0;if(h)return{entity:h}}else if(a.object===c.wallMesh){let u=o(c.geo.furnitureTris,l),h=u?this.pickFurniture.get(u):void 0;if(h)return{entity:h};if(a.face&&!u){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),m=f%16,x=this.wallMode==="cut"&&d===0,g=(c.mask.glass.value&1<<m)!==0;if(!x){let p=n.ray.direction,_=Math.hypot(p.x,p.z)||1,y=[a.point.x-p.x/_*.3,a.point.z-p.z/_*.3],v=c.floor.rooms.find(M=>M.points.length>=3&&Kt(y,M.points))?.id??null;if(this.roomId!==null){if(v===this.roomId)return{floorId:c.floor.id,roomId:v}}else if(!g&&v)return{floorId:c.floor.id,roomId:v}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+jl),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],o=r.flatMap(a=>[a.lampMesh,a.wallMesh,...s(a)].filter(l=>l.visible));for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=r.find(h=>h.group===a.object.parent||s(h).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let h=this.furnitureNear(l,a.point.x,a.point.z);if(h)return{fv:l,id:h,y:a.point.y};continue}let u=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(h=>a.faceIndex>=h.start&&a.faceIndex<h.end)?.id;if(u)return{fv:l,id:u,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*he,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,u=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,h=Math.max(c,u);h<.25&&(!r||h<r.d)&&(r={id:s.id,d:h})}return r?.id??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(f=>f.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let s=this.furnitureAt(t,e);if(!s){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,s){let o=t.floor.furniture.find(h=>h.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,u=this.rayAt(n,r).ray.direction;if(s!==void 0&&-u.y<.34){let h=this.camera.position,f=this.camera.getWorldDirection(new H),d=Math.hypot(f.x,f.z)||1,m=[f.x/d,f.z/d],x=Math.hypot(l[0]-h.x,l[1]-h.z,(a??0)-h.y),g=this.renderer.domElement.getBoundingClientRect().height||1,p=2*x*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-m[1],m[0]],fwd:m,perPx:p,gain:Math.min(2,1/Math.max(.5,-u.y))}}return o.locked?(this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),m=f&&this.floorPoint(f,t,e);if(!f||!d||!m)return;let x=this.building?.settings.grid??.05;n.x=d.x=Math.round((m[0]+n.offset[0])/x)*x,n.z=d.z=Math.round((m[1]+n.offset[1])/x)*x,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let f=(t-o.x0)*o.perPx,d=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*f-o.fwd[0]*d-r.offset[0],o.fz+o.right[1]*f-o.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=s.floor.furniture.find(f=>f.id===r.id),u=Math.round((a[0]+r.offset[0])/l)*l,h=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?nm(s.floor,c,u,h,this.building?.settings.wall_interior??0):[u,h],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Le,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s?.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new J(.25,.9,1):new J(1,.71,.28)))}n&&(this.ghost=new Ye(e.geometry(),new Ke({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let s=this.grab?.id===n.id?this.grab.x:n.x,o=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),u=Te(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?hn(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:hn(e.floor,n),h=n.rotation*he,f=Math.cos(h),d=Math.sin(h),m=(g,p,_)=>[s+g*f-p*d,_,o+g*d+p*f],x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let g=0;g<4;g++){let[p,_]=x[g],[y,v]=x[(g+1)%4];t.seg(m(p,_,u+.01),m(y,v,u+.01),r),t.seg(m(p,_,u+c),m(y,v,u+c),r),t.seg(m(p,_,u+.01),m(p,_,u+c),r)}t.seg(m(-n.w/2,n.d/2+.03,u+.02),m(n.w/2,n.d/2+.03,u+.02),new J(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(p=>p.floor.rooms.some(_=>_.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new sn(s,o);a.texture.colorSpace=De;let l=new Xn(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),m=document.createElement("canvas");m.width=s,m.height=o;let x=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let I of this.floors)I.group.visible=I===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let _=p.floor.rooms.flatMap(I=>I.points),y=p.floor.elevation,v=new un(new H(Math.min(..._.map(I=>I[0]))-.3,y,Math.min(..._.map(I=>I[1]))-.3),new H(Math.max(..._.map(I=>I[0]))+.3,y+Math.min(p.floor.cut_height,p.floor.height),Math.max(..._.map(I=>I[1]))+.3)),M=v.getCenter(new H),T=-.6,C=.8,b=new H(Math.sin(C)*Math.sin(T),Math.cos(C),Math.sin(C)*Math.cos(T));l.position.copy(M).addScaledVector(b,100),l.lookAt(M),l.updateMatrixWorld();let S=.5,w=.5;for(let I of[v.min.x,v.max.x])for(let E of[v.min.y,v.max.y])for(let L of[v.min.z,v.max.z]){let F=new H(I,E,L).applyMatrix4(l.matrixWorldInverse);S=Math.max(S,Math.abs(F.x)),w=Math.max(w,Math.abs(F.y))}let R=s/o;S/w>R?w=S/R:S=w*R,l.left=-S*1.05,l.right=S*1.05,l.top=w*1.05,l.bottom=-w*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let A=x.createImageData(s,o);for(let I=0;I<o;I++)A.data.set(d.subarray((o-1-I)*s*4,(o-I)*s*4),I*s*4);x.putImageData(A,0,0),g.push({floorId:p.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=u,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?Lm(n.room,void 0,void 0,n.obstacles):uh(n.rest),l=a.length?a:uh(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=h)}),r.motion.path=l,r.motion.next=c,n.room&&!Kt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Bm[n.mode])}for(let[n,r]of this.robots)e.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let r=new ee,s=(a,l,c,u,h)=>{let f=[];for(let d=0;d<20;d++)f.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);Pe(r,f,l,c,u,h,{aoFrom:0,bottom:!1})};s(.17,.012,.08,2371657,3424863),s(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new ie({vertexColors:!0});let o=new ee;Pe(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new ke,n=new ie({color:Bm[t.mode]});return e.add(new kt(this.robotGeo,this.robotMat),new kt(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Fm(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.visible=!r.info.inModel||r.info.mode==="cleaning"||Math.hypot(r.motion.pos[0]-r.info.rest[0],r.motion.pos[1]-r.info.rest[1])>.05,r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new J(.25-.2*a,.95-.83*a,1-.7*a),r=new J(0,0,0),s=new J(.3,1,.6),o=.02;for(let a of this.floors){let l=new ee;for(let u of e)u.floorId===a.floor.id&&u.points.forEach(([h,f],d)=>{let m=u.points[d-1];if(m){let x=Math.hypot(h-m[0],f-m[1])||1,g=-(f-m[1])/x*.1,p=(h-m[0])/x*.1;l.tri([m[0]+g,o,m[1]+p],[h+g,o,f+p],[h-g,o,f-p],s,s,s),l.tri([m[0]+g,o,m[1]+p],[h-g,o,f-p],[m[0]-g,o,m[1]-p],s,s,s)}for(let x=0;x<10;x++){let g=x/10*Math.PI*2,p=(x+1)/10*Math.PI*2;l.tri([h,o,f],[h+Math.cos(p)*.35,o,f+Math.sin(p)*.35],[h+Math.cos(g)*.35,o,f+Math.sin(g)*.35],s,r,r)}});let c=null;for(let u of t){if(u.floorId!==a.floor.id)continue;let h=n(u.age);if(c){let f=Math.hypot(u.x-c.x,u.z-c.z)||1,d=-(u.z-c.z)/f*.06,m=(u.x-c.x)/f*.06,x=n(c.age);l.tri([c.x+d,o,c.z+m],[u.x+d,o,u.z+m],[u.x-d,o,u.z-m],x,h,h),l.tri([c.x+d,o,c.z+m],[u.x-d,o,u.z-m],[c.x-d,o,c.z-m],x,h,x)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,m=(f+1)/12*Math.PI*2;l.tri([u.x,o,u.z],[u.x+Math.cos(m)*.22,o,u.z+Math.sin(m)*.22],[u.x+Math.cos(d)*.22,o,u.z+Math.sin(d)*.22],h,r,r)}c=u}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*he,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*he)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new H(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new H(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+jl;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new H(e,o.floor.elevation+o.ty+r,n),radius:5.5,phi:.78},900),s){this.flashes.set(s,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let d=new Set;for(let[m,x]of this.flashes){let g=this.deviceFloor.get(m);g&&d.add(g),x<=t&&this.flashes.delete(m)}a=this.flashes.size>0;for(let m of this.floors)d.has(m.floor.id)&&this.buildLamps(m)}let l=this.placeRoof(e),c=this.stepRobots(t),u=this.stepWeather(t),h=r||s||o||a||l,f=[];if((r||this.controls.busy)&&f.push("camera"),s&&f.push("floors"),o&&f.push("openings"),a&&f.push("flash"),l&&f.push("roof"),this.flowActive&&f.push("flow"),this.soundActive&&f.push("sound"),this.poolActive&&f.push("pool"),this.solarActive&&f.push("solar"),this.effectTick&&f.push("effect"),c&&f.push("robot"),n&&f.push("orbit"),this.tintTick&&f.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=h?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,f),h&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let d=this.lowQuality?2*Ym:Ym;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=d/1e3,this.effectTick=!0;for(let m of this.floors)m.o<.02||!this.effectFloors.has(m.floor.id)||(this.buildLamps(m),this.buildGlow(m));this.invalidate()},d)}!h&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!h&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*Hm:Hm))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((u,h)=>{let f=u?u[0]*n/s+u[1]*r/s>=.25:a;!l&&f&&(c|=1<<h)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new H,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,u,g).project(this.camera);let p=(n.x+1)/2*t,_=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y:_}),(!c||p>c.x)&&(c={x:p,y:_})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let h=o.labelSize.w,f=8+this.labelInset,d=l.x-h-14,m=l.y;d<f&&this.labelInset&&(d=c.x+14,m=c.y),s.push({fv:o,left:Math.max(f,Math.min(t-h-8,d)),y:m,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new H(o.p[0],o.p[1]+(l?.y??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?(1-this.roofO)*2.2:0),o.p[2]),u=this.camera.position.clone().sub(c),h=u.length();if(o.near!==void 0&&h>o.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=u.normalize().dot(new H(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,m=Math.min(1.6,Math.max(.25,15/Math.max(1,h)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,m,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new H,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(s.x,a.floor.elevation+a.y+.9,s.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:")||s.id.startsWith("hh:")&&s.active;if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("fp3d-dev-full",u==="full"),o.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=qM(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function qM(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function $M(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,u)=>{e.strokeStyle=`rgba(55,224,255,${u})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(o+h+.75,c,o+h+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new ai(t);return s.flipY=!1,s.wrapS=xn,s.wrapT=xn,s.anisotropy=4,s.colorSpace=De,s}function ZM(i){let t=new ie({map:i,transparent:!0,blending:Ie,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function KM(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new ai(i);return e.wrapS=Ji,e.wrapT=Ji,e.colorSpace=De,e}function fh(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function qm(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function JM(i){let t=new ie({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:fe});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function $m(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function jM(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new ai(t);return r.colorSpace=De,r}function QM(){let t=dh,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new ai(e);return s.anisotropy=4,s.colorSpace=De,s}function QA(i,t){return new mh(i,t)}function hh(i,t,e,n){let[r,s,o]=t.size??ph[t.lamp],a=t.base??0,l=(t.rotation??0)*he,c=Math.cos(l),u=Math.sin(l),h=(x,g)=>[t.x+x*c-g*u,t.z+x*u+g*c],f=(x,g,p,_,y,v=14)=>{let M=[];for(let T=0;T<v;T++){let C=T/v*Math.PI*2;M.push([t.x+Math.cos(C)*x,t.z+Math.sin(C)*x])}Pe(i,M,g,p,_,y,{aoFrom:0,bottom:!0})},d=(x,g,p,_,y,v,M,T=M)=>Pe(i,[h(x,p),h(g,p),h(g,_),h(x,_)],y,v,M,T,{aoFrom:0,bottom:!0}),m=Math.max(.05,Math.min(r,s)/2);switch(t.lamp){case"ceiling":f(m*.25,e-.04,e,re,re,8),f(m,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"pendant":{let x=Math.max(.4,e-o);f(.06,e-.02,e,re,re,8);let g=t.variant==="globe"?x+2*m:t.variant==="drum"?x+.24:x+.2;if(f(.008,g,e-.02,re,re,5),t.variant==="globe")for(let _=0;_<7;_++){let y=Math.PI*(_/7),v=Math.PI*((_+1)/7);f(m*Math.max(.2,Math.sin((y+v)/2)),x+m-m*Math.cos(y),x+m-m*Math.cos(v),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)f(m*(.25+.75*(4-_)/4),x+.06*_,x+.06*(_+1),n,n,16);else t.variant==="drum"?f(m,x,x+.24,n,n,18):(f(m*.35,x+.14,x+.2,n,n,12),f(m,x,x+.14,n,n,16));break}case"downlight":f(m,e-.012,e,re,re,12),f(m*.7,e-.02,e-.012,n,n,12);break;case"spot":f(m*.6,e-.02,e,re,re,10),f(m,e-Math.max(.06,o),e-.02,re,re,12),f(m*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-r/2,r/2,-s/2,s/2,e-Math.max(.015,o),e,re,re),d(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":f(Math.max(.1,m*.6),a,a+.03,re,re),f(.014,a+.03,a+o-.12,re,re,6),f(m,a+o-.14,a+o-.02,re,re),f(m*.92,a+o-.02,a+o,n,n);break;case"bollard":f(m,a,a+o-.14,re,re,10),f(m*.9,a+o-.14,a+o-.03,n,n,10),f(m*1.1,a+o-.03,a+o,re,re,10);break;case"garden":f(.012,a,a+o-.08,re,re,5),f(m,a+o-.08,a+o-.01,re,re,10),f(m*.8,a+o-.01,a+o,n,n,10);break;case"floor":f(Math.max(.1,m*.7),a,a+.03,re,re),f(.014,a+.03,a+o-.28,re,re,6),f(m,a+o-.3,a+o,n,n);break;case"table":f(Math.max(.05,m*.55),a,a+.03,re,re),f(.012,a+.03,a+o-.16,re,re,6),f(m,a+o-.18,a+o,n,n);break;case"wall":{let x=t.base??El;d(-r/2+.03,r/2-.03,-s/2,-s/2+.02,x,x+o,re),d(-r/2,r/2,-s/2+.02,s/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright){d(-r/2,r/2,-s/2,s/2,g-x,g,n);break}let p=(t.roll??0)*he,_=Math.cos(p),y=Math.sin(p),v=t.upright?a+r/2:g-x/2,M=(w,R,A)=>{let I=w,E=R*_-A*y,L=R*y+A*_;return t.upright&&([I,E]=[-E,I]),[t.x+I*c-L*u,v+E,t.z+I*u+L*c]},T=[M(-r/2,-x/2,-s/2),M(r/2,-x/2,-s/2),M(r/2,-x/2,s/2),M(-r/2,-x/2,s/2),M(-r/2,x/2,-s/2),M(r/2,x/2,-s/2),M(r/2,x/2,s/2),M(-r/2,x/2,s/2)],C=new J(n),b=[t.x,v,t.z],S=(w,R,A,I)=>{let[E,L,F]=[T[w],T[R],T[A]],D=[(L[1]-E[1])*(F[2]-E[2])-(L[2]-E[2])*(F[1]-E[1]),(L[2]-E[2])*(F[0]-E[0])-(L[0]-E[0])*(F[2]-E[2]),(L[0]-E[0])*(F[1]-E[1])-(L[1]-E[1])*(F[0]-E[0])],k=[E[0]-b[0],E[1]-b[1],E[2]-b[2]],O=D[0]*k[0]+D[1]*k[1]+D[2]*k[2]<0,[B,V,et,G]=O?[T[I],T[A],T[R],T[w]]:[T[w],T[R],T[A],T[I]];i.tri(B,V,et,C,C,C),i.tri(B,et,G,C,C,C)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{ih as FloorMap,mh as FloorplanViewer,rh as WalkCamera,QA as createViewer,VA as funLib,UM as furnitureFront,NM as furniturePreview,YM as isLowEnd,hh as pushLampModel};
