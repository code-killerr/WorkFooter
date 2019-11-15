var btn1=document.createElement("button");
   btn1.innerHTML = "一号"
   btn1.value="1";
   btn1.onclick=chose1;
   btn1.setAttribute('style', 'width: 100px;height:50px;margin-left:700px;margin-top:50px');
   document.getElementById("filter-panel").appendChild(btn1);

var btn2=document.createElement("button");
   btn2.innerHTML = "二号"
   btn2.value="2";
   btn2.onclick=chose2;
   btn2.setAttribute('style', 'width: 100px;height:50px;margin-left:700px');
   document.getElementById("filter-panel").appendChild(btn2);

var btn3=document.createElement("button");
   btn3.innerHTML = "三号"
   btn3.value="2";
   btn3.onclick=chose3;
   btn3.setAttribute('style', 'width: 100px;height:50px;margin-left:700px');
   document.getElementById("filter-panel").appendChild(btn3);

var btn4=document.createElement("button");
   btn4.innerHTML = "无效"
   btn4.value="2";
   btn4.onclick=chose4;
   btn4.setAttribute('style', 'width: 100px;height:50px;margin-left:700px');
   document.getElementById("filter-panel").appendChild(btn4);

var refresh=document.createElement("button");
   refresh.innerHTML = "刷新"
   refresh.onclick=refresh1;
   refresh.setAttribute('style', 'width: 100px;height:50px;margin-left:700px');
   document.getElementById("filter-panel").appendChild(refresh);

var value = null;

function refresh1(){
var value = document.getElementById("com_mark_response_text_2").value;
console.log(value);
}

function chose1(){
if(value != null){
    var value1 = new Array()
    for(i = 0;value[i]!=";";i++)
        value1[i] = value[i];
    var res = value1.join("");
    document.getElementById("com_mark_response_text_2").value = res;
}
}

function chose2(){
if(value != null){
    var value2 = new Array()
    var i = 0,j=0,flag = 0;
    for(i = 0,j = 0;flag < 2;i++){
        if(value[i] == ";"){
            flag += 1;
            continue;
        }
       if(flag == 1){
            value2[j] = value[i];
            j ++;
        }
    }
    var res = value2.join("");
    document.getElementById("com_mark_response_text_2").value = res;
}
}

function chose3(){
if(value != null){
    var value3 = new Array()
    var i = 0,j=0,flag = 0;
    for(i = 0,j = 0;i<value.length;i++){
        if(value[i] == ";"){
            flag += 1;
            continue;
        }
       if(flag == 2){
            value3[j] = value[i];
            j ++;
        }	
    }
    var res = value3.join("");
    document.getElementById("com_mark_response_text_2").value = res;
}
}

function chose4(){
    var res ="<sil>";
    document.getElementById("com_mark_response_text_2").value = res;
}


document.getElementById("js_submit_btn").onclick = function(){alert("儿童选项别忘标，数字一定是汉字");alert("确定有/无效吗");alert("无效标记儿童选项为否");} 
}

document.getElementById("js_submit_btn").onclick = function(){alert("儿童选项别忘标，数字一定是汉字");alert("确定有/无效吗");alert("无效标记儿童选项为否");} 
