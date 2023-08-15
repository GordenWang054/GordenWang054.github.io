window.onload=function(){

        var oDt=new Date();
        var iWeekDay=oDt.getDay();
        switch(iWeekDay){
        case 0:document.write("今天是星期日");
        break;
        case 1:document.write("今天是星期一");
        break;
        case 2:document.write("今天是星期二");
        break;
        case 3:document.write("今天是星期三");
        break;
        case 4:document.write("今天是星期四");
        break;
        case 5:document.write("今天是星期五");
        break;
        case 6:document.write("今天是星期六");
        break;
        }
        var iMonth=parseInt(oDt.getMonth()+1);
        document.getElementById("data").innerHTML="<span>"+oDt.getFullYear()+"年"+iMonth+"月"+oDt.getDay()+"日"+" "+"<span>";
}