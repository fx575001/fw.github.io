var td=0,th=0,tm=0,ts=0;
function countTime() {
    //获取当前时间
    var date = new Date();
    var now = date.getTime();
    //设置截止时间
    var str="2021/6/8 2:30:00";
    var startDate = new Date(str);
    var start = startDate.getTime();

    //时间差
    var leftTime = now - start;
    //定义变量 d,h,m,s保存倒计时的时间
    var d=0,h=0,m=0,s=0
    //将倒计时赋值到div中
    if (leftTime>=0) {
        d = Math.floor(leftTime/1000/60/60/24);
        if(td == 0 || d > td){
            td = d;
            document.getElementById("_d").innerHTML = d;
        }
        h = Math.floor(leftTime/1000/60/60%24);
        if(th == 0 || h > th || th == 23){
            th = h;
            document.getElementById("_h").innerHTML = h;
        }
        m = Math.floor(leftTime/1000/60%60);
        if(tm == 0 || m > tm || tm == 59){
            tm = m;
            if(m < 10){
                m = '0' + m;
            }
            document.getElementById("_m").innerHTML = m;
        }
        s = Math.floor(leftTime/1000%60);
        if(ts == 0 || s > ts || ts == 59){
            ts = s;
            if(s < 10){
                s = '0' + s;
            }
            document.getElementById("_s").innerHTML = s;
        }
    }
    //递归每秒调用countTime方法，显示动态时间效果
    setTimeout(countTime,1000);
}