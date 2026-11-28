/* Version 6 — BST default parts library
   Drawings of every BST part, used by the installer app, the wiring guide and the Quick Start Guide.
   Each function returns SVG markup. Wrap it in an <svg> with the viewBox from BST_PARTS below,
   and include DEFS once per <svg> (it holds the shading).
   Safe to load next to index.html: it defines no names the app also uses.

   Parts:  NCR Modbus · NCR HART / 4-20 · TC-100 · LTX Modbus · LTX HART · LTX 4-20 mA · PSDC
           BinTrac load cell mount · BinTrac weight indicator · BinTrac summing box · SmartBob II · BinCloud
*/

function screw(cx,cy,r=8){ return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" stroke="#333" stroke-width="1.6"/>
  <path d="M${cx-r*.55},${cy}h${r*1.1}M${cx},${cy-r*.55}v${r*1.1}" stroke="#333" stroke-width="1.6"/>`; }

const DEFS=`<defs>
  <linearGradient id="gRed" x1="0" x2="1"><stop offset="0" stop-color="#9e1414"/><stop offset=".35" stop-color="#e53935"/><stop offset=".6" stop-color="#d32f2f"/><stop offset="1" stop-color="#8e1212"/></linearGradient>
  <linearGradient id="gSteel" x1="0" x2="1"><stop offset="0" stop-color="#8d949b"/><stop offset=".4" stop-color="#eef1f4"/><stop offset=".7" stop-color="#c3c8cd"/><stop offset="1" stop-color="#7d848b"/></linearGradient>
  <linearGradient id="gRedV" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#9e1414"/><stop offset=".35" stop-color="#e53935"/><stop offset=".6" stop-color="#d32f2f"/><stop offset="1" stop-color="#8e1212"/></linearGradient>
  <linearGradient id="gPipe" x1="0" x2="1"><stop offset="0" stop-color="#2f6fb3"/><stop offset=".45" stop-color="#8fc3ea"/><stop offset=".75" stop-color="#5b9bd5"/><stop offset="1" stop-color="#2c5f99"/></linearGradient>
  <linearGradient id="gFrame" x1="0" x2="1"><stop offset="0" stop-color="#9aa0a6"/><stop offset="1" stop-color="#868c92"/></linearGradient>
  <linearGradient id="gFace" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#2c4f8f"/><stop offset="1" stop-color="#1b3466"/></linearGradient>
  <linearGradient id="gAlu" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#d6dade"/><stop offset="1" stop-color="#a9afb5"/></linearGradient>
  <linearGradient id="gFlange" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#e9ecef"/><stop offset="1" stop-color="#b9bfc5"/></linearGradient>
</defs>`;

function ncrBody(cx,y,s=1,label,model="hart"){
  let g=`<g transform="translate(${cx},${y}) scale(${s})">
    <path d="M-62,138 L-62,146 A62,15 0 0 0 62,146 L62,138 Z" fill="#a9b0b6" stroke="#4a5158" stroke-width="1.2"/>
    <ellipse cx="0" cy="138" rx="62" ry="15" fill="url(#gFlange)" stroke="#4a5158" stroke-width="1.2"/>`;
  for(let i=0;i<8;i++){ const a=Math.PI*2*i/8+Math.PI/8, ex=Math.cos(a)*50, ey=138+Math.sin(a)*12.2;
    g+=`<ellipse cx="${ex.toFixed(1)}" cy="${ey.toFixed(1)}" rx="5" ry="2.6" fill="#fff" stroke="#6b737a" stroke-width="1"/>`; }
  g+=`<ellipse cx="0" cy="133" rx="36" ry="8.5" fill="url(#gFlange)" stroke="#4a5158" stroke-width="1"/>
    <ellipse cx="0" cy="130" rx="27" ry="6.5" fill="#dfe3e7" stroke="#4a5158" stroke-width="1"/>
    <path d="M-12,104 L12,104 L19,128 A19,4.5 0 0 1 -19,128 Z" fill="url(#gSteel)" stroke="#4a5158" stroke-width="1"/>
    <rect x="-12" y="92" width="24" height="14" fill="url(#gRed)" stroke="#6d0f0f" stroke-width="1"/>
    <rect x="-20" y="80" width="40" height="14" rx="2" fill="url(#gRed)" stroke="#6d0f0f" stroke-width="1"/>
    <rect x="1" y="83" width="9" height="6" rx="1" fill="#d7dbdf" stroke="#555" stroke-width=".8"/><circle cx="5.5" cy="86" r="1.6" fill="#555"/>
    <rect x="-42" y="58" width="84" height="23" rx="3" fill="url(#gRed)" stroke="#6d0f0f" stroke-width="1.2"/>
    <rect x="-34" y="10" width="68" height="46" fill="url(#gRed)" stroke="#6d0f0f" stroke-width="1.2"/>
    <rect x="-36" y="2" width="72" height="12" rx="4" fill="url(#gRed)" stroke="#6d0f0f" stroke-width="1.2"/>
    <rect x="-33" y="50" width="66" height="9" fill="#b71c1c" stroke="#6d0f0f" stroke-width="1"/>
    <rect x="-6" y="0" width="12" height="5" fill="#b71c1c" stroke="#6d0f0f" stroke-width="1"/>`;
  if(model==="modbus"){
    // short side terminal chamber (~1/4 depth), lid same size as the top lid, plus black cable glands
    g+=`<rect x="33" y="8" width="7" height="50" fill="url(#gRedV)" stroke="#6d0f0f" stroke-width="1.1"/>
      <rect x="39" y="6" width="3" height="54" fill="#b71c1c" stroke="#6d0f0f" stroke-width=".8"/>
      <rect x="41" y="-3" width="9" height="72" rx="4" fill="url(#gRedV)" stroke="#6d0f0f" stroke-width="1.2"/>
      ${[4,12,20,46,54,62].map(gy=>`<rect x="43.5" y="${gy}" width="4" height="2.4" rx="1.2" fill="#8e1212" opacity=".7"/>`).join("")}
      <rect x="35" y="58" width="8" height="9" rx="2" fill="#1d1d1d"/><rect x="34" y="66" width="10" height="4" rx="1.5" fill="#333"/>
      <rect x="-42" y="30" width="8" height="10" rx="2" fill="#1d1d1d"/><rect x="-45" y="29" width="4" height="12" rx="1.5" fill="#333"/>`;
  }
  [-27,-18,-9,9,18,27].forEach(gx=>g+=`<rect x="${gx-1.4}" y="16" width="2.8" height="16" rx="1.4" fill="#8e1212" opacity=".75"/>
    <rect x="${gx-1.4}" y="38" width="2.8" height="9" rx="1.4" fill="#8e1212" opacity=".55"/>`);
  g+=`</g>`;
  if(label) g+=`<text x="${cx}" y="${y+(162*s)}" text-anchor="middle" font-size="12" font-weight="800">${label}</text>`;
  return g;
}

const TC_REAL=[{body:"#2f3133",hole:"#0d0d0d"},{body:"#c62828",hole:"#3a0b0b"},{body:"#1f5fd6",hole:"#0b1f4a"},{body:"#c9cdd1",hole:"#4a4f54"}];

function tc100Box(x,y,s=1,o={}){
  const gland=(gx,gy,rot)=>`<g transform="translate(${gx},${gy}) rotate(${rot})">
      ${o.cables===true?`<rect x="-46" y="-6" width="34" height="12" rx="6" fill="#2457b8" stroke="#163a7a"/>`:""}
      <rect x="-36" y="-12" width="16" height="24" rx="7" fill="#1b1b1b" stroke="#000"/>
      <rect x="-22" y="-18" width="20" height="36" rx="3" fill="#262626" stroke="#000"/>
      <path d="M-17,-18 v36 M-12,-18 v36 M-7,-18 v36" stroke="#444" stroke-width="1.4"/></g>`;
  let g=`<g transform="translate(${x},${y}) scale(${s})">
    ${gland(-2,110,0)}${gland(302,110,180)}${gland(150,222,-90)}
    <rect x="0" y="0" width="300" height="220" rx="16" fill="#b9bec3" stroke="#6b7277" stroke-width="2"/>
    <rect x="13" y="13" width="274" height="194" rx="10" fill="#cfd3d7" stroke="#a3a9ae"/>
    ${[[26,26],[274,26],[26,194],[274,194]].map(([cx,cy])=>`<circle cx="${cx}" cy="${cy}" r="15" fill="#c3c8cc" stroke="#9097a0" stroke-width="1.5"/><circle cx="${cx}" cy="${cy}" r="6" fill="#8a9096"/>`).join("")}
    <rect x="42" y="38" width="216" height="144" rx="4" fill="#dadde0" stroke="#a7adb2"/>
    <rect x="44" y="99" width="214" height="24" fill="url(#gSteel)" stroke="#7d848b"/>
    ${[0,1,2,3,4,5,6,7,8].map(i=>`<rect x="${50+i*24}" y="108" width="12" height="5" rx="2" fill="#7d848b"/>`).join("")}`;
  TC_REAL.forEach((c,b)=>{
    const gx=58+b*46;
    for(let k=0;k<3;k++){ const tx=gx+k*15;
      g+=`<rect x="${tx}" y="50" width="15" height="122" fill="${c.body}" stroke="#111" stroke-width=".9"/>
        <rect x="${tx+2.5}" y="56" width="10" height="13" rx="3" fill="${c.hole}"/>
        <rect x="${tx+2.5}" y="76" width="10" height="9" rx="1.5" fill="#f07c22" stroke="#9c4a0e" stroke-width=".7"/>
        <rect x="${tx+2.5}" y="137" width="10" height="9" rx="1.5" fill="#f07c22" stroke="#9c4a0e" stroke-width=".7"/>
        <rect x="${tx+2.5}" y="153" width="10" height="13" rx="3" fill="${c.hole}"/>`; }
  });
  g+=`<line x1="58" y1="111" x2="242" y2="111" stroke="#111" stroke-width="1.6"/>`;   // middle seam between top and bottom rows
  g+=`<rect x="243" y="62" width="12" height="96" fill="#bfc4c8" stroke="#6b7277"/><circle cx="249" cy="110" r="3.5" fill="#555"/>`;
  if(o.label!==false) g+=`<text x="150" y="30" text-anchor="middle" font-size="13" font-weight="800" fill="#4a5158">TC-100</text>`;
  return g+`</g>`;
}

function ltxBox(x,y,s=1,model="modbus"){
  const blk=(bx,by,labels,pw=16,h=34,lab=true,fs=7.5)=>{ let g="";
    labels.forEach((l,i)=>{ const tx=bx+i*pw;
      g+=`<rect x="${tx}" y="${by}" width="${pw}" height="${h}" fill="#a9afb5" stroke="#555" stroke-width=".8"/>
          <rect x="${tx+2}" y="${by+2}" width="${pw-4}" height="${h*0.32}" rx="1.5" fill="#ef7d32" stroke="#9c4a0e" stroke-width=".6"/>
          <rect x="${tx+3}" y="${by+h*0.55}" width="${pw-6}" height="${h*0.36}" rx="1" fill="#2a2a2a"/>`;
      if(lab) g+=`<text transform="translate(${tx+pw/2+2.6},${by+h+5}) rotate(-90)" text-anchor="end" font-size="${fs}" font-weight="700" fill="#fff">${l}</text>`; });
    return g; };
  const outline=(bx,by,w,h,cap)=>`<rect x="${bx-3}" y="${by}" width="${w+6}" height="${h}" rx="2" fill="none" stroke="#fff" stroke-width="1"/>
      ${cap?`<text x="${bx+w/2}" y="${by+h-4}" text-anchor="middle" font-size="7.5" font-weight="700" fill="#fff">${cap}</text>`:""}`;
  const port=(px,n)=>{ const w=90,h=156,py=52; let g="";
    const holes=[[px+10,py+10],[px+w-10,py+10],[px+10,py+h-10],[px+w-10,py+h-10]];
    if(model==="modbus"){
      g+=`<rect x="${px}" y="${py}" width="${w}" height="${h}" fill="none" stroke="#fff" stroke-width="1.2"/>
        <rect x="${px+w/2-18}" y="${py+8}" width="36" height="11" fill="#141414"/>
        ${[0,1,2,3,4].map(i=>`<circle cx="${px+w/2-14+i*7}" cy="${py+11}" r="1.2" fill="#888"/><circle cx="${px+w/2-14+i*7}" cy="${py+16}" r="1.2" fill="#888"/>`).join("")}
        ${holes.map(([hx,hy])=>`<circle cx="${hx}" cy="${hy}" r="6" fill="#e9c46a" stroke="#7a5a10"/><circle cx="${hx}" cy="${hy}" r="3" fill="#3b2a05"/>`).join("")}
        <text x="${px+w/2}" y="${py+52}" text-anchor="middle" font-size="9" fill="#fff">EXPANSION</text>
        <text x="${px+w/2}" y="${py+63}" text-anchor="middle" font-size="9" fill="#fff">PORT ${n}</text>`;
      if(n===1) g+=`<rect x="${px+28}" y="${py+96}" width="34" height="40" rx="2" fill="#cfd3d6" stroke="#666"/><rect x="${px+32}" y="${py+100}" width="26" height="30" fill="#9aa0a6"/>`;
    } else {
      g+=`<rect x="${px-2}" y="${py-2}" width="${w+4}" height="${h+4}" rx="3" fill="#b3191b" stroke="#4a0909" stroke-width="1.4"/>
        <rect x="${px+w/2-18}" y="${py+8}" width="36" height="11" fill="#141414"/>
        ${holes.map(([hx,hy])=>`<circle cx="${hx}" cy="${hy}" r="5.5" fill="#1a1a1a"/><circle cx="${hx}" cy="${hy}" r="2.2" fill="#555"/>`).join("")}
        <text x="${px+8}" y="${py+34}" font-size="5.5" fill="#fff" opacity=".8">PCB: 1700-6x</text>`;
      if(model==="hart"){
        g+=`<path d="M${px+w/2-17},${py+90} v-36 l6,-6 h22 l6,6 v36 z" fill="none" stroke="#fff" stroke-width="1"/>
            <text transform="translate(${px+w/2-5},${py+87}) rotate(-90)" font-size="7.5" font-weight="700" fill="#fff">DC OUT</text>
            <text transform="translate(${px+w/2+11},${py+87}) rotate(-90)" font-size="7.5" font-weight="700" fill="#fff">SIGNAL</text>
            <text x="${px+w/2-8}" y="${py+99}" text-anchor="middle" font-size="7" font-weight="700" fill="#fff">(+)</text>
            <text x="${px+w/2+8}" y="${py+99}" text-anchor="middle" font-size="7" font-weight="700" fill="#fff">(−)</text>
            ${blk(px+w/2-16,py+102,["",""],16,34,false)}
            <text x="${px+w/2}" y="${py+150}" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">HART</text>`;
      } else {
        g+=blk(px+5,py+96,["OUT 1","IN 1","OUT 2","IN 2"],10,30,false)+blk(px+46,py+96,["OUT 3","IN 3","OUT 4","IN 4"],10,30,false);
        ["OUT 1","IN 1","OUT 2","IN 2"].forEach((l,i)=>g+=`<text transform="translate(${px+5+i*10+7},${py+92}) rotate(-90)" font-size="5.8" fill="#fff">${l}</text>`);
        ["OUT 3","IN 3","OUT 4","IN 4"].forEach((l,i)=>g+=`<text transform="translate(${px+46+i*10+7},${py+92}) rotate(-90)" font-size="5.8" fill="#fff">${l}</text>`);
        g+=`<text x="${px+w/2}" y="${py+146}" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">4 - 20 mA</text>`;
      }
    }
    return g; };
  const W=600,H=320;
  let g=`<g transform="translate(${x},${y}) scale(${s})">
    <!-- antennas -->
    <rect x="150" y="-70" width="12" height="76" rx="5" fill="#3b3b3b"/><rect x="147" y="-4" width="18" height="10" fill="#c9a227"/>
    <rect x="470" y="-60" width="12" height="66" rx="5" fill="#3b3b3b"/><rect x="467" y="-4" width="18" height="10" fill="#c9a227"/>
    <!-- enclosure -->
    <rect x="-14" y="120" width="20" height="80" rx="6" fill="#e3e6e9" stroke="#b3b9bf"/><rect x="${W-6}" y="120" width="20" height="80" rx="6" fill="#e3e6e9" stroke="#b3b9bf"/>
    <rect x="0" y="0" width="${W}" height="${H}" rx="26" fill="#eceff1" stroke="#aab1b7" stroke-width="2"/>
    <rect x="14" y="14" width="${W-28}" height="${H-28}" rx="18" fill="#dfe3e6" stroke="#c3c9ce"/>
    ${[[28,28],[W-28,28],[28,H-28],[W-28,H-28],[W/2,18],[W/2,H-18]].map(([cx,cy])=>`<circle cx="${cx}" cy="${cy}" r="11" fill="#d3d8dc" stroke="#9aa1a8"/><circle cx="${cx}" cy="${cy}" r="4.5" fill="#7d848b"/>`).join("")}
    <!-- board -->
    <rect x="40" y="34" width="${W-80}" height="${H-62}" rx="10" fill="#c62828" stroke="#8e1b1b" stroke-width="1.5"/>`;
  ["Pwr","Com","Cell","LoRa"].forEach((t,i)=>{ const lx=162+i*22;
    g+=`<text x="${lx}" y="48" text-anchor="middle" font-size="6.5" fill="#fff">${t}</text><rect x="${lx-3}" y="51" width="6" height="8" rx="1" fill="#f2f2f2" stroke="#7f1212" stroke-width=".6"/>`; });
  g+=`<rect x="62" y="62" width="84" height="34" rx="3" fill="#2a0707"/>
    ${[0,1,2].map(i=>`<text x="${77+i*27}" y="89" text-anchor="middle" font-size="27" font-family="ui-monospace,Menlo,monospace" fill="#ff5a5a" opacity=".45">8</text>`).join("")}
    <text x="192" y="72" text-anchor="middle" font-size="8" fill="#fff">Menu</text><text x="232" y="72" text-anchor="middle" font-size="8" fill="#fff">Select</text>
    <circle cx="192" cy="86" r="10" fill="#e9e9e9" stroke="#555"/><circle cx="192" cy="86" r="5" fill="#333"/>
    <circle cx="232" cy="86" r="10" fill="#e9e9e9" stroke="#555"/><circle cx="232" cy="86" r="5" fill="#333"/>
    <rect x="94" y="104" width="26" height="9" rx="4.5" fill="#cfd3d6" stroke="#555"/><text x="107" y="122" text-anchor="middle" font-size="6.5" fill="#fff">USB C</text>`;
  // main terminal blocks
  g+=blk(60,132,["DC In","GND","SHLD"])+outline(60,170,48,52,"");
  g+=blk(118,132,["DC Out","B−","A+","GND","SHLD"])+outline(118,170,80,52,"RS-485 1");
  g+=blk(208,132,["DC Out","B−","A+","GND","SHLD"])+outline(208,170,80,52,"RS-485 2");
  g+=`<circle cx="300" cy="140" r="6" fill="#2f6fd6" stroke="#0d2a5a"/><circle cx="300" cy="162" r="6" fill="#2f6fd6" stroke="#0d2a5a"/>
      <text x="300" y="130" text-anchor="middle" font-size="5.5" fill="#fff">BOOT</text><text x="300" y="176" text-anchor="middle" font-size="5.5" fill="#fff">RESET</text>`;
  g+=port(316,1)+port(414,2);
  g+=blk(518,132,["SHLD","SHLD"])+outline(518,170,32,52,"SHIELD");
  // lower row
  g+=`<rect x="62" y="232" width="26" height="24" rx="2" fill="#1d1d1d" stroke="#888"/><circle cx="75" cy="244" r="5" fill="#444"/>
      <text x="96" y="242" font-size="6.5" fill="#fff">Power</text><text x="96" y="251" font-size="6.5" fill="#fff">(9V–30V)</text>
      <rect x="160" y="226" width="78" height="28" rx="3" fill="#fff"/><text x="199" y="238" text-anchor="middle" font-size="8" font-weight="700">PO: 031560</text><text x="199" y="249" text-anchor="middle" font-size="8" font-weight="700">SN: 0326xxxx</text>
      <rect x="338" y="220" width="40" height="34" rx="2" fill="#d9dcdf" stroke="#555"/><rect x="346" y="228" width="24" height="18" fill="#222"/>
      <text x="358" y="218" text-anchor="middle" font-size="6.5" fill="#fff">Ethernet</text>
      <text x="530" y="246" text-anchor="end" font-size="22" fill="#fff">LTX-100</text>
      ${[[66,270],[W-66,270]].map(([cx,cy])=>`<rect x="${cx-9}" y="${cy-9}" width="18" height="18" rx="3" fill="#c8cbd0" transform="rotate(-35 ${cx} ${cy})"/><circle cx="${cx}" cy="${cy}" r="6" fill="#2e7d32"/>`).join("")}
      <!-- cable gland -->
      <rect x="${W/2-24}" y="${H-10}" width="48" height="22" rx="4" fill="#1d1d1d"/><rect x="${W/2-18}" y="${H+12}" width="36" height="26" rx="6" fill="#262626"/>
      ${[-10,-3,4,11].map(dx=>`<line x1="${W/2+dx}" y1="${H+14}" x2="${W/2+dx}" y2="${H+36}" stroke="#444" stroke-width="1.4"/>`).join("")}
    </g>`;
  return g;
}

function psdcBox(x,y,s=1,o={}){
  const gland=(gx,gy,rot)=>`<g transform="translate(${gx},${gy}) rotate(${rot})">
      <rect x="-36" y="-12" width="16" height="24" rx="7" fill="#1b1b1b" stroke="#000"/>
      <rect x="-22" y="-18" width="20" height="36" rx="3" fill="#262626" stroke="#000"/>
      <path d="M-17,-18 v36 M-12,-18 v36 M-7,-18 v36" stroke="#444" stroke-width="1.4"/></g>`;
  let g=`<g transform="translate(${x},${y}) scale(${s})">
    ${gland(-2,120,0)}${gland(120,242,-90)}
    <rect x="0" y="0" width="240" height="240" rx="16" fill="#b9bec3" stroke="#6b7277" stroke-width="2"/>
    <rect x="13" y="13" width="214" height="214" rx="10" fill="#cfd3d7" stroke="#a3a9ae"/>
    ${[[26,26],[214,26],[26,214],[214,214]].map(([cx,cy])=>`<circle cx="${cx}" cy="${cy}" r="15" fill="#c3c8cc" stroke="#9097a0" stroke-width="1.5"/><circle cx="${cx}" cy="${cy}" r="6" fill="#8a9096"/>`).join("")}
    <rect x="44" y="38" width="152" height="166" rx="4" fill="#dadde0" stroke="#a7adb2"/>
    <rect x="46" y="108" width="148" height="24" fill="url(#gSteel)" stroke="#7d848b"/>
    ${[0,1,2,3,4,5].map(i=>`<rect x="${52+i*24}" y="117" width="12" height="5" rx="2" fill="#7d848b"/>`).join("")}
    <rect x="84" y="46" width="72" height="150" rx="3" fill="#eef0f2" stroke="#14202e" stroke-width="1.6"/>
    <line x1="84" y1="82" x2="156" y2="82" stroke="#14202e"/><line x1="84" y1="160" x2="156" y2="160" stroke="#14202e"/>
    ${screw(96,58,4)}${screw(122,59,6)}${screw(144,59,6)}
    <text x="96" y="76" text-anchor="middle" font-size="5.5">Vo ADJ</text>
    <text x="122" y="77" text-anchor="middle" font-size="8" font-weight="800">−V</text>
    <text x="144" y="77" text-anchor="middle" font-size="8" font-weight="800">+V</text>
    <rect x="90" y="88" width="13" height="4" fill="#1e88f0"/>
    <text x="120" y="112" text-anchor="middle" font-size="13" font-weight="900">PSDC</text>
    <text x="120" y="141" text-anchor="middle" font-size="7">24 VDC 1.5 A</text>
    <text x="120" y="151" text-anchor="middle" font-size="5.8">IN 100–240 VAC</text>
    <text x="122" y="172" text-anchor="middle" font-size="8" font-weight="800">N</text>
    <text x="144" y="172" text-anchor="middle" font-size="8" font-weight="800">L</text>
    ${screw(122,183,6)}${screw(144,183,6)}`;
  if(o.label!==false) g+=`<text x="120" y="30" text-anchor="middle" font-size="13" font-weight="800" fill="#4a5158">PSDC</text>`;
  return g+`</g>`;
}

function bintracMount(x,y,s=1,o={}){
  const stud=(sx)=>`<rect x="${sx-3}" y="192" width="6" height="62" rx="2" fill="#9ea4aa" stroke="#5f656b"/>
      <ellipse cx="${sx}" cy="212" rx="12" ry="4" fill="#b8bec4" stroke="#5f656b"/>
      <path d="M${sx-9},212 v-9 l4,-4 h10 l4,4 v9 z" fill="#a6acb2" stroke="#5f656b"/>
      <path d="M${sx-2},199 v13 M${sx+4},199 v13" stroke="#7d838a" stroke-width=".8"/>`;
  let g=`<g transform="translate(${x},${y}) scale(${s})">
    <!-- channel + bin leg (behind the frame) -->
    <path d="M118,-6 L128,-14 L190,-14 L190,206 L118,206 Z" fill="#7c8288" stroke="#4f555b" stroke-width="1.2"/>
    <rect x="130" y="-44" width="50" height="248" fill="url(#gPipe)" stroke="#24548a" stroke-width="1.2"/>
    <ellipse cx="155" cy="-44" rx="25" ry="9" fill="#cfe5f6" stroke="#24548a" stroke-width="1.2"/>
    <ellipse cx="155" cy="-43" rx="20" ry="6.5" fill="#4f88c2"/>
    <path d="M118,-6 L128,-14 L128,206 L118,206 Z" fill="#9aa0a6" stroke="#4f555b"/>
    <!-- base plate -->
    <path d="M-4,214 L8,204 L218,204 L230,214 Z" fill="#b4babf" stroke="#5f656b" stroke-width="1.2"/>
    <rect x="-4" y="214" width="234" height="12" rx="2" fill="#8d9399" stroke="#5f656b" stroke-width="1.2"/>
    <ellipse cx="190" cy="210" rx="11" ry="3.6" fill="#4d5359"/><ellipse cx="190" cy="210" rx="5" ry="1.8" fill="#e9edf0"/>
    ${stud(16)}${stud(212)}
    <!-- A-frame: side face, front face, window, slot -->
    <path d="M136,42 L152,30 L200,196 L184,206 Z" fill="#6f757b" stroke="#4f555b" stroke-width="1.2"/>
    <path d="M84,42 L136,42 L184,206 L36,206 Z" fill="url(#gFrame)" stroke="#4f555b" stroke-width="1.4"/>
    <path d="M86,112 Q86,104 94,104 L128,104 Q136,104 138,112 L156,186 Q158,196 148,196 L72,196 Q62,196 64,186 Z" fill="#3e4348" stroke="#2c3135" stroke-width="1.2"/>
    <path d="M70,196 L150,196 L144,176 L76,176 Z" fill="#53595f"/>
    <rect x="88" y="118" width="46" height="22" rx="4" fill="#a3a9af" stroke="#3e4348"/>
    <path d="M88,124 h46" stroke="#c3c8cd" stroke-width="1.4"/>
    <rect x="104" y="140" width="14" height="40" fill="#7f858b" stroke="#3e4348"/>
    <circle cx="118" cy="150" r="4" fill="#b8bec4" stroke="#3e4348"/><circle cx="118" cy="164" r="4" fill="#b8bec4" stroke="#3e4348"/>
    <ellipse cx="166" cy="108" rx="5.5" ry="13" transform="rotate(-16 166 108)" fill="#3e4348" stroke="#2c3135"/>
    <!-- top saddle + clamp bolt -->
    <path d="M78,42 L142,42 L158,30 L94,30 Z" fill="#b4babf" stroke="#4f555b" stroke-width="1.2"/>
    <path d="M84,42 h52 v8 q-8,-6 -14,0 h-24 q-6,-6 -14,0 z" fill="#9aa0a6" stroke="#4f555b"/>
    <ellipse cx="118" cy="33" rx="17" ry="5.5" fill="#a6acb2" stroke="#4f555b"/>
    <path d="M106,33 v-12 l6,-5 h12 l6,5 v12" fill="#b4babf" stroke="#4f555b"/>
    <ellipse cx="118" cy="21" rx="12" ry="4.5" fill="#c9ced2" stroke="#4f555b"/>
  </g>`;
  if(o.label) g+=`<text x="${x+113*s}" y="${y+272*s}" text-anchor="middle" font-size="12" font-weight="800">${o.label}</text>`;
  return g;
}

function bintracIndicator(x,y,s=1,o={}){
  const gland=(cx)=>`<rect x="${cx-24}" y="292" width="48" height="16" rx="3" fill="#1d1d1d"/>
      <rect x="${cx-20}" y="306" width="40" height="34" rx="9" fill="#262626" stroke="#000"/>
      ${[-12,-6,0,6,12].map(d=>`<line x1="${cx+d}" y1="310" x2="${cx+d}" y2="336" stroke="#444" stroke-width="1.6"/>`).join("")}`;
  const seg="#ff3b30";
  let g=`<g transform="translate(${x},${y}) scale(${s})">
    ${gland(110)}${gland(196)}
    <!-- mounting ears -->
    <path d="M-30,104 h40 v48 h-40 a12,12 0 0 1 -12,-12 v-24 a12,12 0 0 1 12,-12 z" fill="#c3c8cd" stroke="#7d848b"/><circle cx="-22" cy="128" r="7" fill="#fff" stroke="#7d848b"/>
    <path d="M330,104 h-40 v48 h40 a12,12 0 0 0 12,-12 v-24 a12,12 0 0 0 -12,-12 z" fill="#c3c8cd" stroke="#7d848b"/><circle cx="322" cy="128" r="7" fill="#fff" stroke="#7d848b"/>
    <!-- housing -->
    <rect x="0" y="0" width="300" height="296" rx="14" fill="url(#gAlu)" stroke="#7d848b" stroke-width="2"/>
    ${[[16,16],[284,16],[16,280],[284,280]].map(([cx,cy])=>`<circle cx="${cx}" cy="${cy}" r="8" fill="#e6e9ec" stroke="#7d848b"/><path d="M${cx-4},${cy}h8M${cx},${cy-4}v8" stroke="#5f656b" stroke-width="1.6"/>`).join("")}
    <!-- blue face -->
    <rect x="22" y="24" width="256" height="248" rx="8" fill="url(#gFace)" stroke="#0e2147"/>
    <!-- bin-shaped level panel -->
    <path d="M34,38 L130,38 L130,226 L82,262 L34,226 Z" fill="#f4f4f4" stroke="#0e2147"/>
    <rect x="76" y="38" width="12" height="214" fill="#101010"/>
    ${[90,140,190].map(yy=>`<line x1="34" y1="${yy}" x2="130" y2="${yy}" stroke="#9aa0a6" stroke-width="1"/>`).join("")}
    ${Array.from({length:14},(_,i)=>`<circle cx="82" cy="${112+i*9.6}" r="2.4" fill="${seg}"/>`).join("")}
    <text x="69" y="50" text-anchor="middle" font-size="9" font-weight="800">U</text>
    <text x="69" y="244" text-anchor="middle" font-size="9" font-weight="800">L</text>
    <!-- brand -->
    <text x="208" y="62" text-anchor="middle" font-size="25" font-weight="900" fill="#fff" letter-spacing=".5">BINTRAC</text>
    <text x="208" y="78" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">Bin Weighing System</text>
    <!-- readout -->
    <rect x="150" y="88" width="118" height="34" rx="2" fill="#1a0606" stroke="#000"/>
    <text x="209" y="115" text-anchor="middle" font-size="25" font-family="ui-monospace,Menlo,Consolas,monospace" font-weight="700" fill="${seg}" letter-spacing="2">${o.reading||"18021"}</text>
    <!-- buttons -->
    ${[["UPPER",176,"M-7,4 L0,-4 L7,4 Z"],["LOWER",240,"M-7,-4 L0,4 L7,-4 Z"]].map(([t,cx,tri])=>`<rect x="${cx-25}" y="138" width="50" height="38" rx="10" fill="#4a86d8" stroke="#163a7a"/>
      <path d="${tri}" transform="translate(${cx},151)" fill="#fff"/><text x="${cx}" y="170" text-anchor="middle" font-size="8.5" font-weight="800" fill="#fff">${t}</text>`).join("")}
    ${["A","B","C","D"].map((t,i)=>`<text x="${170+i*25}" y="196" text-anchor="middle" font-size="9" font-weight="800" fill="#f6c84a">${t}</text>
      <circle cx="${170+i*25}" cy="206" r="3.6" fill="${i===0?seg:"#111"}" stroke="#000"/>`).join("")}
    <rect x="210" y="216" width="44" height="34" rx="11" fill="#f5d327" stroke="#9c8200"/>
    <text x="232" y="238" text-anchor="middle" font-size="11" font-weight="900" fill="#14202e">BIN</text>
    <text x="150" y="236" font-size="6.5" font-weight="700" fill="#fff">MADE IN USA</text>
  </g>`;
  if(o.label) g+=`<text x="${x+150*s}" y="${y+360*s}" text-anchor="middle" font-size="12" font-weight="800">${o.label}</text>`;
  return g;
}

/* ---- BinTrac summing box (load cells combine here) ---- */
function summingBox(x,y,s=1,o={}){
  const gland=(gx,gy,rot)=>`<g transform="translate(${gx},${gy}) rotate(${rot})">
      <rect x="-40" y="-14" width="18" height="28" rx="8" fill="#1b1b1b" stroke="#000"/>
      <rect x="-24" y="-21" width="24" height="42" rx="3" fill="#262626" stroke="#000"/>
      <path d="M-18,-21 v42 M-12,-21 v42 M-6,-21 v42" stroke="#444" stroke-width="1.4"/></g>`;
  const plug=(cx,cy,rot=0)=>`<g transform="translate(${cx},${cy}) rotate(${rot})">
      <rect x="-15" y="-2" width="30" height="24" rx="3" fill="#d8241f" stroke="#7a0f0c"/>
      <ellipse cx="0" cy="-2" rx="15" ry="5" fill="#ef4a3f" stroke="#7a0f0c"/></g>`;
  const hdr=(hx,hy,w)=>`<rect x="${hx}" y="${hy}" width="${w}" height="13" rx="1.5" fill="#f3f3f3" stroke="#9aa0a6"/>
      ${Array.from({length:Math.floor((w-6)/6)},(_,i)=>`<rect x="${hx+4+i*6}" y="${hy+4}" width="3" height="5" fill="#c9cdd1"/>`).join("")}`;
  let g=`<g transform="translate(${x},${y}) scale(${s})">
    ${gland(-2,62,0)}${gland(302,62,180)}
    <!-- mounting ears -->
    <path d="M-26,122 h34 v46 h-34 a12,12 0 0 1 -12,-12 v-22 a12,12 0 0 1 12,-12 z" fill="#c3c8cd" stroke="#8a9096"/><circle cx="-18" cy="145" r="7" fill="#eef0f2" stroke="#8a9096"/>
    <path d="M326,122 h-34 v46 h34 a12,12 0 0 0 12,-12 v-22 a12,12 0 0 0 -12,-12 z" fill="#c3c8cd" stroke="#8a9096"/><circle cx="318" cy="145" r="7" fill="#eef0f2" stroke="#8a9096"/>
    <!-- side plugs -->
    ${plug(-2,214,90)}${plug(302,214,-90)}
    <!-- enclosure -->
    <rect x="0" y="0" width="300" height="282" rx="14" fill="#bfc4c9" stroke="#7d848b" stroke-width="2"/>
    <rect x="12" y="12" width="276" height="258" rx="9" fill="#cdd1d5" stroke="#a3a9ae"/>
    ${[[22,22],[278,22],[22,260],[278,260]].map(([cx,cy])=>`<circle cx="${cx}" cy="${cy}" r="6" fill="#3b3b3b"/><circle cx="${cx}" cy="${cy}" r="2.5" fill="#b08a2e"/>`).join("")}
    <!-- bracket plate -->
    <rect x="52" y="86" width="196" height="58" rx="2" fill="#dcdfe2" stroke="#9aa0a6"/>
    <circle cx="68" cy="128" r="6" fill="#c9cdd1" stroke="#6b7277"/><path d="M64,128 h8" stroke="#6b7277" stroke-width="1.4"/>
    <circle cx="232" cy="128" r="6" fill="#c9cdd1" stroke="#6b7277"/><path d="M228,128 h8" stroke="#6b7277" stroke-width="1.4"/>
    <circle cx="150" cy="128" r="5" fill="#3c7d45"/>
    <!-- circuit board -->
    <rect x="52" y="22" width="196" height="70" rx="3" fill="#2f7d3a" stroke="#1d4f25"/>
    <path d="M60,52 h40 v10 h30 M150,30 v20 h40 M170,70 h60 M70,80 h50" stroke="#4fa35b" stroke-width="1" fill="none" opacity=".8"/>
    ${hdr(58,27,38)}${hdr(102,27,38)}${hdr(176,27,38)}${hdr(220,27,24)}${hdr(66,64,38)}${hdr(196,58,38)}
    <rect x="114" y="54" width="10" height="16" rx="1" fill="#3f7fd0"/><rect x="132" y="52" width="14" height="18" fill="#1b1b1b"/>
    <circle cx="150" cy="40" r="8" fill="none" stroke="#c9b037" stroke-width="3"/>
    <rect x="178" y="74" width="12" height="10" fill="#7a3a2a"/><circle cx="236" cy="84" r="4" fill="#c9cdd1" stroke="#6b7277"/>
    <!-- bottom plugs -->
    ${[70,128,186,244].map(cx=>plug(cx,262)).join("")}`;
  if(o.label!==false) g+=`<text x="150" y="190" text-anchor="middle" font-size="12" font-weight="800" fill="#5a6168">SUMMING BOX</text>`;
  return g+`</g>`;
}

/* ---- SmartBob II: black housing with handle, red label, threaded mount, plumb bob on its cable ---- */
function smartBob(x,y,s=1){
  const scr=(cx,cy)=>`<circle cx="${cx}" cy="${cy}" r="4" fill="#3a3a3a" stroke="#111"/><path d="M${cx-2.2},${cy}h4.4M${cx},${cy-2.2}v4.4" stroke="#777" stroke-width="1"/>`;
  return `<g transform="translate(${x},${y}) scale(${s})">
    <path d="M58,40 Q58,4 120,4 Q182,4 182,40" fill="none" stroke="#151515" stroke-width="14" stroke-linecap="round"/>
    <rect x="-8" y="104" width="12" height="16" rx="2" fill="#b08a2e" stroke="#5c4510"/>
    <rect x="0" y="34" width="240" height="158" rx="76" fill="#1d1d1d" stroke="#000" stroke-width="2"/>
    <rect x="6" y="40" width="228" height="146" rx="70" fill="none" stroke="#333" stroke-width="2"/>
    ${[[52,48],[188,48],[18,112],[222,112],[52,178],[188,178]].map(([cx,cy])=>scr(cx,cy)).join("")}
    <rect x="34" y="62" width="172" height="100" rx="3" fill="#d42020" stroke="#7a0c0c" stroke-width="1.5"/>
    <text x="104" y="92" text-anchor="middle" font-size="22" font-weight="800" fill="#fff" font-family="Georgia,serif">Smart<tspan font-weight="900" font-family="system-ui,Arial">Bob</tspan></text>
    <text x="164" y="92" font-size="19" font-weight="700" fill="#fff" font-family="Georgia,serif">II</text>
    ${[102,110,118,126,134,142].map((ly,i)=>`<rect x="${44+(i%2)*6}" y="${ly}" width="${i===2?150:120-(i%3)*18}" height="2.4" rx="1" fill="#fff" opacity=".75"/>`).join("")}
    <text x="120" y="156" text-anchor="middle" font-size="8" font-weight="900" fill="#fff" font-style="italic">BINMASTER</text>
    <rect x="100" y="190" width="40" height="44" fill="#1b1b1b" stroke="#000"/>
    <rect x="90" y="232" width="60" height="10" rx="2" fill="#262626" stroke="#000"/>
    <rect x="94" y="242" width="52" height="26" fill="#222" stroke="#000"/>
    ${[246,251,256,261].map(ty=>`<line x1="94" y1="${ty}" x2="146" y2="${ty}" stroke="#444" stroke-width="1.2"/>`).join("")}
    <rect x="106" y="268" width="28" height="20" fill="#9ea4aa" stroke="#555"/>
    <line x1="120" y1="288" x2="120" y2="312" stroke="#777" stroke-width="2"/>
    <circle cx="120" cy="315" r="3.5" fill="none" stroke="#888" stroke-width="2"/>
    <path d="M114,318 h12 v8 l10,22 l-16,46 l-16,-46 l10,-22 z" fill="url(#gSteel)" stroke="#5f656b" stroke-width="1.2"/>
    <path d="M104,348 h32" stroke="#8d949b" stroke-width="1.2"/>
  </g>`;
}

function cloud(x,y,w=120){ const s=w/120;
  return `<path transform="translate(${x},${y}) scale(${s})" d="M30 70 Q8 70 8 52 Q8 34 28 33 Q32 12 56 12 Q78 12 84 30 Q112 28 112 52 Q112 70 92 70 Z" fill="#e8f1ff" stroke="#1565d8" stroke-width="2.5"/>
          <text x="${x+60*s}" y="${y+52*s}" text-anchor="middle" font-size="${14*s}" font-weight="800" fill="#1565d8">BinCloud</text>`; }

/* Registry: name, how to draw it, and the viewBox that frames it */
const BST_PARTS = {
  "ncr-modbus":        {name:"NCR Modbus",               viewBox:"-70 -8 172 168",  draw:()=>ncrBody(0,0,1,null,"modbus")},
  "ncr-hart-420":      {name:"NCR HART / 4-20",          viewBox:"-70 -8 140 168",  draw:()=>ncrBody(0,0,1,null,"hart")},
  "tc-100":            {name:"TC-100 junction",          viewBox:"-40 -8 380 290",  draw:()=>tc100Box(0,0,1)},
  "ltx-modbus":        {name:"LTX-100 Modbus",           viewBox:"-20 -75 640 440", draw:()=>ltxBox(0,0,1,"modbus")},
  "ltx-hart":          {name:"LTX-100 HART",             viewBox:"-20 -75 640 440", draw:()=>ltxBox(0,0,1,"hart")},
  "ltx-4-20":          {name:"LTX-100 4-20 mA",          viewBox:"-20 -75 640 440", draw:()=>ltxBox(0,0,1,"analog")},
  "psdc":              {name:"PSDC power supply",        viewBox:"-40 -8 290 290",  draw:()=>psdcBox(0,0,1)},
  "bintrac-mount":     {name:"BinTrac load cell mount",  viewBox:"-20 -60 270 330", draw:()=>bintracMount(0,0,1)},
  "bintrac-indicator": {name:"BinTrac weight indicator", viewBox:"-50 -10 400 360", draw:()=>bintracIndicator(0,0,1)},
  "bintrac-summing":   {name:"BinTrac summing box",      viewBox:"-52 -8 404 312",  draw:()=>summingBox(0,0,1)},
  "smartbob":          {name:"SmartBob II",              viewBox:"-20 -8 280 410",  draw:()=>smartBob(0,0,1)},
  "bincloud":          {name:"BinCloud",                 viewBox:"0 0 120 80",      draw:()=>cloud(0,0,120)}
};
/* Full standalone SVG for a part, e.g. partSVG("tc-100") */
function partSVG(id, width){
  const p=BST_PARTS[id]; const [,,w,h]=p.viewBox.split(" ").map(Number); const W=width||w;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${p.viewBox}" width="${W}" height="${Math.round(W*h/w)}" font-family="system-ui,Arial" role="img" aria-label="${p.name}">${DEFS}${p.draw()}</svg>`;
}
