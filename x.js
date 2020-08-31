var theurl ="http://numbersapi.com/";
function getRes(){ 
    var usertext = '';
    usertext = $("#userText").val();
    if (usertext=='') {
        usertext='';
        return;
    }
    var userHtml = '<li class="me">' + usertext+ '</li>';
    $("#userText").val("");
    $("ul").append(userHtml); 
    var url = theurl+ usertext;
    var xmlHTTP = new XMLHttpRequest();
    xmlHTTP.open("GET",url,false);
    xmlHTTP.send(null);
    var bottext = xmlHTTP.responseText;
    var botHtml  =  '<li class="him">' + bottext+ '</li>';
    $("ul").append(botHtml);
}


$("#userText").keypress(function(e)
{
    if(e.which== 13)
        getRes();
});

$(".btn").click(function()
{
    getRes();
});