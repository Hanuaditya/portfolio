(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,37547,e=>{"use strict";var a=e.i(90072),t=e.i(8560);e.s(["createScenicLighting",0,function(e,o){let i,r=new a.ya("#fff9f2",2.8);r.name="scenic-studio-key",r.castShadow=!0,r.shadow.bias=-25e-5,r.shadow.normalBias=.55,r.shadow.radius=3;let s=new a.VF("#e8f1ff","#c5ddce",.6);s.position.set(0,0,1),o.add(r,r.target,s),e.shadowMap.enabled=!0,e.shadowMap.type=a.bS,e.shadowMap.autoUpdate=!1;let n=!1,p=!0,d=new a.VQ,l=new a.VQ,c=new a.cE,f=new a.cE,m=new a.VQ,u=new WeakMap,h=new WeakSet,x=!1,w={value:.08};function y(e){if(h.has(e)||!(e instanceof a.aV))return;h.add(e);let o=e.onBeforeCompile.bind(e),i=e.customProgramCacheKey(),r=x?12:20,s=t.Y.shadowmap_pars_fragment,n=s.indexOf("	#else\n		float getShadow( sampler2D shadowMap"),p=s.indexOf("\n	#endif",s.indexOf("return mix( 1.0, shadow, shadowIntensity );",n)),d=`
      #else // SHADOWMAP_TYPE_BASIC
      uniform float uScenicPenumbra;
      vec2 scenicDisk(int i, int count) {
        float phi=fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))))*6.283185;
        float a=float(i)*2.39996323+phi;
        return vec2(cos(a),sin(a))*sqrt((float(i)+.5)/float(count));
      }
      float scenicDepthCompare(sampler2D map, vec2 uv, float depth, vec2 size) {
        vec2 pixel=uv*size-.5, f=fract(pixel), p=(floor(pixel)+.5)/size;
        vec2 stepUV=1./size;
        float a=step(depth,texture2D(map,p).r);
        float b=step(depth,texture2D(map,p+vec2(stepUV.x,0)).r);
        float c=step(depth,texture2D(map,p+vec2(0,stepUV.y)).r);
        float d=step(depth,texture2D(map,p+stepUV).r);
        return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);
      }
      float getShadow(sampler2D map,vec2 size,float intensity,float bias,float radius,vec4 coord) {
        vec3 p=coord.xyz/coord.w;p.z+=bias;
        if(p.x<0.||p.x>1.||p.y<0.||p.y>1.||p.z>1.)return 1.;
        float blockers=0.,mean=0.;
        for(int i=0;i<8;i++) {
          float d=texture2D(map,p.xy+scenicDisk(i,8)*22./size).r;
          if(d<p.z-.00003){mean+=d;blockers+=1.;}
        }
        if(blockers<.5)return scenicDepthCompare(map,p.xy,p.z,size);
        mean/=blockers;
        float spread=clamp((p.z-mean)*uScenicPenumbra,1.15/size.x,22./size.x);
        float shadow=0.;
        for(int i=0;i<${r};i++)shadow+=scenicDepthCompare(map,p.xy+scenicDisk(i,${r})*spread,p.z,size);
        return mix(1.,shadow/float(${r}),intensity);
      }
    `,l=n>=0&&p>n?s.slice(0,n)+d+s.slice(p):s;e.onBeforeCompile=(e,a)=>{o(e,a),e.uniforms.uScenicPenumbra=w,e.fragmentShader=e.fragmentShader.replace("#include <shadowmap_pars_fragment>",l)},e.customProgramCacheKey=()=>`${i}-scenic-area-shadow-${r}`,e.needsUpdate=!0}return{prepare:function(){if(n)return;i?.dispose();let r=new a.P6;r.background=new a.Es("#171f2a");let s=new a.CQ(1,1),p=[],d=(e,t,o,i,n,d,l)=>{let c=new a.p$({color:new a.Es(e).multiplyScalar(t),side:a.Vs});p.push(c);let f=new a.kE(s,c);f.position.set(o,i,n),f.scale.set(d,l,1),f.lookAt(0,0,0),r.add(f)};for(let e of[-1,1])for(let a of[-1,1])d("#fff9f2",10,-12+2.1*e,7+2.7*a,16,3.9,5.1);d("#e7efff",4,9,1,7,3,11),d("#fff0dd",.24,0,0,-8,30,30),d("#ffdce2",.85,0,-10,4,24,11),d("#fff8ef",6,5,-10,8,3,9),d("#fff7ee",8,0,12,-8,14,2),d("#eaf2ff",5,-12,0,-6,2,12);let l=new t.c(e);try{o.environment=(i=l.fromScene(r,.025,.1,40,{size:128})).texture,o.environmentIntensity=1.05}finally{l.dispose(),s.dispose(),p.forEach(e=>e.dispose()),r.clear()}e.shadowMap.needsUpdate=!0},resize:function(t,o,i){x=i,p=!0;let s=Math.max(t,o);r.target.position.set(t/2,o/2,-80),r.position.copy(r.target.position).add(new a.cE(-1.2,.7,1.6).multiplyScalar(s));let n=r.shadow.camera;n.left=-(.68*t),n.right=.68*t,n.top=.79*o,n.bottom=-(.79*o),n.near=.2*s,n.far=2.8*s,n.updateProjectionMatrix();let d=i?1024:2048;r.shadow.mapSize.x!==d&&(r.shadow.map?.dispose(),r.shadow.map=null,r.shadow.mapSize.setScalar(d)),r.shadow.radius=i?2.3:3.2,r.shadow.normalBias=i?.22:.28,e.shadowMap.needsUpdate=!0},fit(t){t.updateWorldMatrix(!0,!0),d.makeEmpty();let o=!1;if(t.traverse(e=>{if(!(e instanceof a.kE)||((Array.isArray(e.material)?e.material:[e.material]).forEach(y),!e.castShadow))return;let t=u.get(e);t&&t.equals(e.matrixWorld)||(o=!0,t?t.copy(e.matrixWorld):u.set(e,e.matrixWorld.clone())),e.geometry.boundingBox||e.geometry.computeBoundingBox(),l.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),d.union(l)}),d.isEmpty()||!o&&!p)return;p=!1,d.getCenter(c);let i=d.getSize(f).length();r.target.position.copy(c),r.position.copy(c).add(new a.cE(-1.2,.7,1.6).multiplyScalar(i)),r.updateMatrixWorld(),r.target.updateMatrixWorld(),r.shadow.updateMatrices(r),m.makeEmpty();for(let e=0;e<8;e++)f.set(1&e?d.max.x:d.min.x,2&e?d.max.y:d.min.y,4&e?d.max.z:d.min.z),m.expandByPoint(f.applyMatrix4(r.shadow.camera.matrixWorldInverse));let s=r.shadow.camera;s.left=m.min.x-24,s.right=m.max.x+24,s.bottom=m.min.y-24,s.top=m.max.y+24,s.near=Math.max(1,-m.max.z-24),s.far=-m.min.z+24+240,w.value=(s.far-s.near)/(s.right-s.left)*.25,s.updateProjectionMatrix(),e.shadowMap.needsUpdate=!0},dispose(){n||(n=!0,o.environment=null,i?.dispose(),r.shadow.dispose(),o.remove(r,r.target,s))}}}])}]);