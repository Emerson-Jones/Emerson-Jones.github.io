$(document).ready(function() 
{
    // preload the image for each link
    $("#image_list a").each(function () 
    {
            let caption = $(this).attr("title");
            let photo = new Image();
            photo.src = $(this).attr("href");
    });
    // set up the event handlers for each link
            $("#image_list a").click(function(e)
            {
                    let imageURL = $(this).attr("href");
                    let caption = $(this).attr("title");
                    $("#caption").text(caption);
                    $("#image").attr("src", imageURL);

                // cancel the default action of each link
                e.preventDefault();
            });
              // move the focus to the first link
    $("li:first-child a").focus();                                                                                                                                                                                 

    
}); // end ready