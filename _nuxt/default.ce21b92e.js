import{_ as M,o as _,c as x,n as P,q as V,s as X,b as w,R as E}from"./entry.fc42b808.js";const F={},H={class:"parallax-overlay",id:"parallax-overlay"},R=P('<div class="parallax-layer-1"></div><div class="parallax-layer-2"></div><div class="parallax-layer-3"></div><div class="parallax-layer-4"></div><div class="parallax-layer-5"></div><div class="parallax-layer-6"></div><div class="parallax-layer-7"></div><div class="rhombus rhombus-layer-1"></div><div class="rhombus rhombus-layer-2"></div><div class="rhombus rhombus-group group-1" style="width:50px;"><div class="rhombus rhombus-layer-3"></div><div class="rhombus rhombus-layer-4"></div><div class="rhombus rhombus-layer-5"></div></div><div class="rhombus rhombus-layer-6"></div><div class="rhombus rhombus-layer-7"></div><div class="rhombus rhombus-layer-8"></div><div class="rhombus rhombus-group group-2" style="width:50px;"><div class="rhombus rhombus-layer-9"></div><div class="rhombus rhombus-layer-10"></div><div class="rhombus rhombus-layer-11"></div></div><div class="rhombus rhombus-group group-3" style="width:50px;"><div class="rhombus rhombus-layer-12"></div><div class="rhombus rhombus-layer-13"></div></div><div class="rhombus rhombus-group group-4" style="width:50px;"><div class="rhombus rhombus-layer-14"></div><div class="rhombus rhombus-layer-15"></div></div><div class="rhombus rhombus-group group-5" style="width:50px;"><div class="rhombus rhombus-layer-16"></div><div class="rhombus rhombus-layer-17"></div></div><div class="rhombus rhombus-group group-6" style="width:50px;"><div class="rhombus rhombus-layer-18"></div><div class="rhombus rhombus-layer-19"></div></div><div class="rhombus rhombus-group group-7" style="width:50px;"><div class="rhombus rhombus-layer-20"></div><div class="rhombus rhombus-layer-21"></div></div><div class="rhombus rhombus-group group-8" style="width:50px;"><div class="rhombus rhombus-layer-22"></div><div class="rhombus rhombus-layer-23"></div></div>',20),S=[R];function T(q,t){return _(),x("div",H,S)}const j=M(F,[["render",T]]),C={__name:"default",setup(q){return V(()=>{X(()=>{var t=0,p=0,b,n,i,v,m;function k(r,e,o,a,l){var f=100;return t=o+(r.pageX+i.offset().left)/f/l,p=a+(r.pageY+i.offset().top)/f/l,i.css("transform","translate3d("+t+"px, "+p+"px, 0)"),!1}function B(r,e,o){return b=$(window).height(),n=$(window).width(),i=$("#parallax-overlay ."+r),v=e+(n+i.offset().left)/100,m=o+(b+i.offset().top)/100,i.css("transform","translate3d("+v+"px, "+m+"px, 0)"),!1}var u=[];u[0]=["parallax-layer-1",600,-120,2],u[1]=["parallax-layer-2",600,-100,1],u[2]=["parallax-layer-3",0,-40,2],u[3]=["parallax-layer-4",-50,-25,1],u[4]=["parallax-layer-5",500,-50,2],u[5]=["parallax-layer-6",500,-100,1],u[6]=["parallax-layer-7",0,-40,1];for(var h=0;h<u.length;h++)B(u[h][0],u[h][1],u[h][2]+20);$(document).mousemove(function(r){for(var e=k,o=0;o<u.length;o++)i=$("#parallax-overlay ."+u[o][0]),$(window).width()>1024?(i.css({display:"unset"}),e(r,i,u[o][1],u[o][2]+20,u[o][3])):i.css({display:"none"})});function N(r,e,o,a,l){$("."+r).css("top",o),l?$("."+r).css("left",e):$("."+r).css("right",e),$("."+r).find("svg").css("width",a+"px"),a<=10&&(a=a*2),$("."+r).css("height",a+"px"),$("."+r).css("opacity",.8)}var s=[];s[0]=["rhombus-layer-1","12%","-3.5%",70,!0],s[1]=["rhombus-layer-2","20%","10%",30,!0],s[2]=["rhombus-group.group-1","8%","18%",50,!0],s[3]=["rhombus-layer-3","0","0",15,!0],s[4]=["rhombus-layer-4","0.3px","-1px",40,!0],s[5]=["rhombus-layer-5","0","0",15,!0],s[6]=["rhombus-layer-6","5%","50%",70,!1],s[7]=["rhombus-layer-7","8%","80%",30,!0],s[8]=["rhombus-layer-8","15%","80%",30,!1],s[9]=["rhombus-group.group-2","13%","70%",50,!0],s[10]=["rhombus-layer-9","0","0",15,!0],s[11]=["rhombus-layer-10","0","0",10,!0],s[12]=["rhombus-layer-11","0","0",15,!0],s[13]=["rhombus-group.group-3","20%","56%",50,!0],s[14]=["rhombus-layer-12","0","0",40,!0],s[15]=["rhombus-layer-13","0.3px","0",15,!1],s[16]=["rhombus-group.group-4","30%","45%",50,!0],s[17]=["rhombus-layer-14","0","0",10,!0],s[18]=["rhombus-layer-15","0","0",20,!0],s[19]=["rhombus-group.group-5","20%","10%",50,!1],s[20]=["rhombus-layer-16","0","0",8,!0],s[21]=["rhombus-layer-17","0","0",18,!0],s[22]=["rhombus-group.group-6","12%","60%",50,!1],s[23]=["rhombus-layer-18","0.3px","0",20,!1],s[24]=["rhombus-layer-19","0","0",42,!0],s[25]=["rhombus-group.group-7","22%","65%",50,!1],s[26]=["rhombus-layer-20","0","0",40,!0],s[27]=["rhombus-layer-21","0.3px","0",15,!1],s[28]=["rhombus-group.group-8","15%","20%",50,!1],s[29]=["rhombus-layer-22","0","0",40,!0],s[30]=["rhombus-layer-23","0","0",15,!0];var Y='<svg viewBox="0 0 12 12"><path class="rhombus" d="M5.9,1.2L0.7,6.5l5.2,5.4l5.2-5.4L5.9,1.2z" /></svg>';$(".parallax-overlay").each(function(){$(this).find(".rhombus:not(.rhombus-group)").append(Y),$.each(s,function(r,e){N(e[0],e[1],e[2],e[3],e[4])})});function c(r,e){e==1&&r.children("svg").each(function(){$(this).remove()});var o=r.find("p").width()+90,a=r.find("p").height()+50,l=o+30;r.prepend('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+l+'" height="'+a+'"><polygon points="0,0 '+o+",0 "+o+",20 "+l+",20 "+(o+15)+",35 "+(o+9)+",42 "+(o+3)+",50 "+(o+1)+",55 "+o+",60 "+o+","+a+" 0,"+a+'"></polygon></svg>')}function g(r,e){e==1&&r.children("svg").each(function(){$(this).remove()});var o=r.find("p").width()+90,a=r.find("p").height()+50,l=o+30;r.prepend('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+l+'" height="'+a+'"><polygon points="30,0 30,20 0,20 15,35 21,42 27,50 29,55 30,60 30,'+a+" "+l+","+a+" "+l+',0"></polygon></svg>')}function y(r,e){e==1&&r.children("svg").each(function(){$(this).remove()});var o=r.find(".question-number").width(),a=o+30,l=r.find(".question-text").height()+50;r.prepend('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+a+'" height="'+l+'"><polygon points="30,0 30,20 29,25 27,30 22,37 15,45 0,60 30,60 30,'+l+" 85,"+l+' 85,0"></polygon></svg>')}function d(r,e){e==1&&r.children("svg").each(function(){$(this).remove()});var o=r.find("p").width()+70,a=r.find("p").height()+50,l=o+30;r.prepend('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+l+'" height="'+a+'"><polygon points="30,0 30,20 29,25 27,30 22,37 15,45 0,60 30,60 30,'+a+" "+l+","+a+" "+l+',0"></polygon></svg>')}function L(r,e){e==1&&r.children("svg").each(function(){$(this).remove()});var o=r.find("p").width()+70,a=r.find("p").height()+50,l=o+30;r.prepend('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+l+'" height="'+a+'"><polygon points="30,0 30,20 29,25 27,30 22,37 15,45 0,60 30,60 30,'+a+" "+l+","+a+" "+l+',0"></polygon></svg>')}c($(".bubble-left.bubble"),0),g($(".bubble-right.bubble"),0),y($(".bubble-question.bubble"),0),d($(".bubble-propose.bubble"),0),L($(".bubble-standard.bubble"),0),$(window).resize(function(){c($(".bubble-left.bubble"),1),d($(".bubble-standard.bubble"),1),g($(".bubble-right.bubble"),1),y($(".bubble-question.bubble"),1),d($(".bubble-propose.bubble"),1)})})}),(t,p)=>{const b=j,n=E;return _(),x("div",null,[w(b),w(n)])}}};export{C as default};
