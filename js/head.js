function typed(name, str) {
    var i=0;
    var test=document.getElementById(name);

    function intyped(str) {
        test.innerHTML+=str[i];

        if(i<str.length){
            i++;
        };
        if(test.innerHTML.length==str.length+6){
            clearInterval(timer);
        };
    };

    // alert(a.length);
    // alert(test.innerHTML.length);
    timer=setInterval(function () {
            intyped(str);
        }, 100);
}