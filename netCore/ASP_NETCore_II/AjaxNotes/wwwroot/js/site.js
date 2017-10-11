// Write your Javascript code.

function update() {
    $.get("/notes", function(response) {
        $("#list").empty();
        $("#list").append("<table>");
        for(var i = 0; i < response.length; i ++){

            $("#list").append("<tr>");
            $("#list").append('<div class="col-sm-4"></div>');
            $("#list").append(`<div class="col-sm-4">${response[i].title}</div>`);
            var linkStr = (`<a class="col-sm-4" href="/notes/${response[i]._id}/delete">delete</a>`);
            $("#list").append(linkStr);
            $("#list").append('<p></p>');
            $("#list").append('<div class="col-sm-4"></div>');
            $("#list").append(`<form action="/notes/${response[i]._id}" method="post"><textarea name="content" id="" cols="30" rows="10">${response[i].content}</textarea><button class="btn" type="submit">Update</button></form>`);
            $("#list").append("</tr>");
        }
        $("#list").append("</table>");
        
        
    });
}

$(document).ready(function() {
    update();

});
