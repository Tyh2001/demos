
$(".box").hover(function (e) {
  //大图的路径
  var path = $(this).find("a").attr("href");

  var title = $(this).find("a").attr("title");

  var picbox = $("<div class='picbox'><img src=' " + path + "'><span>" + title + "</span></div>");


  $("body").append(picbox);

  picbox.css("top", e.pageY + 20);
  picbox.css("left", e.pageX + 10);


  picbox.show(300);

}, function () {

  $(".picbox").remove();

})


$(".box").mousemove(function (e) {


  $(".picbox").css("top", e.pageY + 20);

  $(".picbox").css("left", e.pageX + 10);

})







