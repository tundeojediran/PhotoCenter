/**
 * Created by dannytee on 10/30/16.
 */

// Application ID
var CLIENT_ID = "1d87ef7b607505e13278b219ad0af0b589a89f53d807b91eb02bd562506f3474";


//load images from Unsplash API
$(function () {

    var $holder = $('#holder');

    $.ajax({
        type: 'GET',
        url: 'https://api.unsplash.com/photos?client_id='+CLIENT_ID,
        success: function (photos) {
            $.each(photos, function (i, photo) {
                $holder.append("<section class='col-md-6'><section class='content'>" +
                    "<img class='img-responsive' src='"+photo.urls.full+"'> " +
                    "</section></section>" );

            });

        }
    });
});