var nums = [1, 2, 3, 4, 5];
var squares = nums.map(function (num) 
{
return num*num;
});


var main = function () 
{
"use strict";

var $photo;
var $IMGcom;
var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
"tags=dogs&format=json&jsoncallback=?";
var someAppOne11object;

var someObject ={};

// setInterval(function () 
// {
//     $.getJSON("/someway.json", function (fromServer) 
//     {
//     // Сейчас "fromServer" становится объектом, возвращаемым маршрутом someway.json
//     console.log(fromServer);
// 	});
//   }, 5000);

var Clake = function() 
{
	$.post("todos", someObject, function (data) 
	{
    // это обратный вызов, выполняется при ответе сервера
    console.log("Получение данных с сервера");
    console.log(data);
    });
};




var sun = function () {
//
var tweet = $.getJSON("/someway.json", function sun(fromServer) {
	someAppOne11object = fromServer;
});

//}, 5000);
return fromServer;
};




$.getJSON(url, function (flickrResponse) 
{
flickrResponse.items.forEach(function (photo) 
	{
    var $img = $("<img>").hide();

    	$img.on("click", function ()
		{
		var that = this;

	$("img").hide(1000,  function() 
			{
			$img.show();
			$IMGcom = $img.attr("src");


			});
		
		
		
    	});
$img.attr("src", photo.media.m);
$("main").append($img);
$img.fadeIn();



	});

});


$(".tabs a:nth-child(1)").on("click", function () 
	{
       Tab(1);
       return false;

	});

		$(".tabs a:nth-child(2)").on("click", function () 
		{
	       Tab(2);
	       return false;
		});

			$(".tabs a:nth-child(3)").on("click", function () 
			{
				Tab(3);	
				return false;
			});

   var Tab = function (tabnumber) 
   {	

 	$(".tabs span").removeClass("active");
    // делаем активной первую вкладку
    $(".tabs a:nth-child("+tabnumber+") span").addClass("active");
    // очищаем основное содержание, чтобы переопределить его
    $("main .content").empty();
    // возвращается false, так как мы не переходим по ссылке

    
	if(tabnumber===1) {
		//var cloud = sun();
		//$(" main .content").prepend($("<p>").text(cloud));
	}
			else if (tabnumber===2)
				{
				toDos.forEach(function (element) 
					{
  					$("main .content").append($("<p>").text(element));

					});
		 
				}

   };


   $(".comment-input input").on("keypress", function (event) 
{
if (event.keyCode === 13) 
	{
addCommentFromInputBox();
Clake();
	}
});

 $(".comment-input button").on("click", function (event) 
 {
    addCommentFromInputBox();
    Clake();
  });


   var addCommentFromInputBox = function () 
{
   	 	
 	if ($(".comment-input input").val() !== "") 
 	{
 		var $new_comment = $("<p>");
	    $new_comment.text($(".comment-input input").val());
	    $(".comments").append($new_comment);
	    $new_comment.fadeIn(1500);
	    var $comms = $(".comment-input input").val();
	    $(".comment-input input").val("");
	    var jsonString = { "Id" : $IMGcom, "Comment" : $comms };
	var jsonString2 = JSON.stringify(jsonString);
	//console.log(jsonString2);
	}
};


if (event.keyCode === 13) 
	{
	    $new_comment.text($(".comment-input input").val());
	    $new_comment.hide();
	    $(".comments").append($new_comment);
	    $new_comment.fadeIn(2000);	
	    $(".comment-input input").val("");

	};
};

$(document).ready(main);
