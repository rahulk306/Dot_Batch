import React from "react";
import _1 from './images/1.jpg'
import _2 from './images/2.jpg'
import _3 from './images/3.jpg'
import _4 from './images/4.jpg'
import _5 from './images/5.jpg'
import _6 from './images/6.jpg'
import _7 from './images/7.jpg'
import _8 from './images/8.jpg'
import _9 from './images/9.jpg'
import _10 from './images/10.jpg'
import _11 from './images/11.jpg'
import _12 from './images/12.jpg'
import _13 from './images/13.jpg'
import _14 from './images/14.jpg'
import _15 from './images/15.jpg'
import _16 from './images/16.jpg'
import _17 from './images/17.jpg'
import _18 from './images/18.jpg'
import _19 from './images/19.jpg'
import _20 from './images/20.jpg'
import _21 from './images/21.jpg'
import _22 from './images/22.jpg'
import _23 from './images/23.jpg'
import _24 from './images/24.jpg'
import _25 from './images/25.jpg'
import _26 from './images/26.jpg'
import _27 from './images/27.jpg'
import _28 from './images/28.jpg'
import _29 from './images/29.jpg'
import _30 from './images/30.jpg'
import _31 from './images/31.jpg'
import _32 from './images/32.jpg'
import _33 from './images/33.jpg'
import _34 from './images/34.jpg'
import _35 from './images/35.jpg'
import _36 from './images/36.jpg'
import _37 from './images/37.jpg'
import _38 from './images/38.jpg'
import _39 from './images/39.jpg'
import _40 from './images/40.jpg'
import _41 from './images/41.jpg'
import _42 from './images/42.jpg'
import _43 from './images/43.jpg'
import _44 from './images/44.jpg'
import _45 from './images/45.jpg'
import _46 from './images/46.jpg'
import _47 from './images/47.jpg'
import _48 from './images/48.jpg'
import _49 from './images/49.jpg'
import _50 from './images/50.jpg'
import _51 from './images/51.jpg'
import _52 from './images/52.jpg'
import _53 from './images/53.jpg'
import _54 from './images/54.jpg'
import _55 from './images/55.jpg'
import _56 from './images/56.jpg'
import _57 from './images/57.jpg'
import _58 from './images/58.jpg'
import _59 from './images/59.jpg'
import _60 from './images/60.jpg'
import _61 from './images/61.jpg'
import _62 from './images/62.jpg'
import _63 from './images/63.jpg'
import _64 from './images/64.jpg'
import _65 from './images/65.jpg'
import _66 from './images/66.jpg'
import _67 from './images/67.jpg'
import _68 from './images/68.jpg'
import _69 from './images/69.jpg'
import _70 from './images/70.jpg'
import _71 from './images/71.jpg'
import _72 from './images/72.jpg'
import _73 from './images/73.png'
import _74 from './images/74.png'
import _75 from './images/75.png'
import _76 from './images/76.png'
import _77 from './images/77.png'
import _78 from './images/78.png'
import _79 from './images/79.png'
import _80 from './images/80.png'
import _81 from './images/81.png'
import _82 from './images/82.png'
import _83 from './images/83.png'
import _84 from './images/84.png'
import _85 from './images/85.png'
import _86 from './images/86.png'
import _87 from './images/87.png'
import _88 from './images/88.png'
import _89 from './images/89.png'
import _90 from './images/90.png'
import _91 from './images/91.png'
import _92 from './images/92.png'
import _93 from './images/93.png'
import _94 from './images/94.png'
import _95 from './images/95.png'
import _96 from './images/96.png'
import _97 from './images/97.png'
import _98 from './images/98.png'
import _99 from './images/99.png'
import _100 from './images/100.png'
import Red from './red'
import Green from './green'
import Black from './black'
import Blue from './blue'
import './board.css';

const Board = ({coin}) => {

 let images = [_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,
  _13,
  _14,
  _15,
  _16,
  _17,
  _18, _19,
  _20,
  _21,
  _22,
  _23,
  _24,
  _25,
  _26,
  _27,
  _28,
  _29,
  _30,
  _31,
  _32,
  _33,
  _34,
  _35,
  _36,
  _37,
  _38,
  _39,
  _40,
  _41,
  _42,
  _43,
  _44,
  _45,
  _46,
  _47,
  _48,
  _49,
  _50,
  _51,
  _52,
  _53,
  _54,
  _55,
  _56,
  _57,
  _58,
  _59,
  _60,
  _61,
  _62,
  _63,
  _64,
  _65,
  _66,
  _67,
  _68,
  _69,
  _70,
  _71,
  _72,
  _73,
  _74,
  _75,
  _76,
  _77,
  _78,
  _79,
  _80,
  _81,
  _82,
  _83,
  _84,
  _85,
  _86,
  _87,
  _88,
  _89,
  _90,
  _91,
  _92,
  _93,
  _94,
  _95,
  _96,
  _97,
  _98,
  _99,_100];
  
  for(let i=1;i<=100;i++){
   images[i-1] = {img : images[i-1] , id : i}
  }

  let cells = [];

  let level = 1;
  for(let i=0;i<100;i++){
   const last = i+10;
   let val = i;
   let arr = [];
   while(val < last){
    arr.push(images[val]);
    val++;
   }
   if(level%2 != 0){
    arr  =arr.reverse();
   }
   i = last-1;
   cells = [...cells , ...arr];
   level++;
  }
  cells = cells.reverse();
  console.log(cells);


 return(
  <div className="boardContainer">
   {
    cells.map((image , i) => (
     <div>
      {
       coin.blue == i+1 && <Blue></Blue>
      }
      <img src={image} onClick={(e)=> (console.log(e.target))}></img>
     </div> 
    ))
   }
  </div>
 )
}

















// const Board = ({coin}) => {


//  return (
//   <div className="flex flex-col justify-center items-center border-4 border-black" >
//       <div className="h-[50px] w-[500px] flex flex-row">
//         <img id="100" src={_100} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="99" src={_99} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="98" src={_98} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="97" src={_97} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="96" src={_96} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="95" src={_95} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="94" src={_94} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="93" src={_93} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="92" src={_92} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="91" src={_91} alt="" className="h-[50px] w-[50px]"></img>
//       </div>
//       <div className="h-[50px] w-[500px] flex flex-row">
//         <img id="81" src={_81} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="82" src={_82} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="83" src={_83} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="84" src={_84} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="85" src={_85} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="86" src={_86} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="87" src={_87} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="88" src={_88} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="89" src={_89} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="90" src={_90} alt="" className="h-[50px] w-[50px]"></img>
//       </div>
//       <div className="h-[50px] w-[500px] flex flex-row">
//         <img id="80" src={_80} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="79" src={_79} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="78" src={_78} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="77" src={_77} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="76" src={_76} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="75" src={_75} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="74" src={_74} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="73" src={_73} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="72" src={_72} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="71" src={_71} alt="" className="h-[50px] w-[50px]"></img>
//       </div>
//       <div className="h-[50px] w-[500px] flex flex-row">
//         <img id="61" src={_61} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="62" src={_62} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="63" src={_63} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="64" src={_64} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="65" src={_65} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="66" src={_66} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="67" src={_67} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="68" src={_68} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="69" src={_69} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="70" src={_70} alt="" className="h-[50px] w-[50px]"></img>
//       </div>
//       <div className="h-[50px] w-[500px] flex flex-row-reverse">
//         <img id="51" src={_51} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="52" src={_52} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="53" src={_53} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="54" src={_54} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="55" src={_55} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="56" src={_56} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="57" src={_57} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="58" src={_58} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="59" src={_59} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="60" src={_60} alt="" className="h-[50px] w-[50px]"></img>
//       </div>
//       <div className="h-[50px] w-[500px] flex flex-row">
//         <img id="41" src={_41} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="42" src={_42} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="43" src={_43} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="44" src={_44} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="45" src={_45} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="46" src={_46} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="47" src={_47} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="48" src={_48} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="49" src={_49} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="50" src={_50} alt="" className="h-[50px] w-[50px]"></img>
//       </div>
//       <div className="h-[50px] w-[500px] flex flex-row-reverse">
//         <img id="31" src={_31} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="32" src={_32} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="33" src={_33} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="34" src={_34} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="35" src={_35} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="36" src={_36} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="37" src={_37} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="38" src={_38} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="39" src={_39} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="40" src={_40} alt="" className="h-[50px] w-[50px]"></img>
//       </div>
//       <div className="h-[50px] w-[500px] flex flex-row">
//         <img id="21" src={_21} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="22" src={_22} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="23" src={_23} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="24" src={_24} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="25" src={_25} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="26" src={_26} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="27" src={_27} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="28" src={_28} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="29" src={_29} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="30" src={_30} alt="" className="h-[50px] w-[50px]"></img>
//       </div>
//       <div className="h-[50px] w-[500px] flex flex-row-reverse">
//         <img id="11" src={_11} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="12" src={_12} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="13" src={_13} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="14" src={_14} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="15" src={_15} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="16" src={_16} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="17" src={_17} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="18" src={_18} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="19" src={_19} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="20" src={_20} alt="" className="h-[50px] w-[50px]"></img>
//       </div>
//       <div className="h-[50px] w-[500px] flex flex-row">
//         <img  src={_1} alt="" className="h-[50px] w-[50px] relative"></img>
//         <img id="2" src={_2} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="3" src={_3} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="4" src={_4} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="5" src={_5} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="6" src={_6} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="7" src={_7} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="8" src={_8} alt="" className="h-[50px] w-[50px]"></img>
//         <img id="9" src={_9} alt="" className="h-[50px] w-[50px]"></img>
//         <div className="MoveCoin">
//          {
//           coin.blue === 10 && <Blue></Blue>
//          }
//          <img src={_10} alt="" className="h-[50px] w-[50px]"></img>
//         </div>
//       </div>
//       </div> 
//  )
// }

export default Board;