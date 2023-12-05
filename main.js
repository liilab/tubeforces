$=jQuery;


$(document).ready(function() {
   $(".border-r-4").click(function() {
       $(".border-r-4").addClass("border-none");
       $(this).removeClass("border-none");
   });
});