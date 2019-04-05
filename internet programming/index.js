
var HOUR_HAND_LENGTH    = 152 ;
var MINUTE_HAND_LENGTH  = 188 ;
var SECOND_HAND_LENGTH  = 200 ;
var clock_center_point_x = 300 ;
var clock_center_point_y = 240 ;

function draw_on_canvas()
{
   var canvas = document.getElementById( "clock_canvas" ) ;
   var context = canvas.getContext("2d") ;

   context.fillStyle = "lightgreen" ; 
   context.fillRect( 0, 0, canvas.width, canvas.height ) ;

   var days_of_week  =  [ "Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday", "Saturday" ] ;

   var names_of_months  =  

      [ "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December" ] ;

   var time_now  = new Date() ; // Get the system date and time

   var current_year     =  time_now.getFullYear() ;
   var current_day      =  time_now.getDate() ;
   var month_index      =  time_now.getMonth() ;
   var index_of_day_of_week  =  time_now.getDay() ;

   var current_month  =  names_of_months[ month_index ] ;

   var current_day_of_week = days_of_week[ index_of_day_of_week ] ;

   var current_hours    =  time_now.getHours() ;
   var current_minutes  =  time_now.getMinutes() ;
   var current_seconds  =  time_now.getSeconds() ;
   var current_milliseconds  =  time_now.getMilliseconds() ;

   context.fillStyle = "purple" ;

   var minutes_string  =  "00" + current_minutes ;

   minutes_string  =   minutes_string.substring(
                               minutes_string.length - 2  ) ;

   var seconds_string  =  "00" + current_seconds ;

   seconds_string  =   seconds_string.substring(
                               seconds_string.length - 2 ) ;

 
   context.beginPath() ;
   context.arc( clock_center_point_x, clock_center_point_y,
                5, 0, 2 * Math.PI, true )
   context.closePath() ;
   context.fill() ;

   var dot_index  =  0 ;

   while ( dot_index  <  60 )
   {
      var dot_angle = dot_index * Math.PI / 30 - Math.PI / 2 ;

      var dot_position_x =   (Math.cos( dot_angle ) * SECOND_HAND_LENGTH
                              +  clock_center_point_x ) ;
      var dot_position_y =   (Math.sin( dot_angle ) * SECOND_HAND_LENGTH
                              +  clock_center_point_y ) ;

      var dot_diameter = 4 ;

      if ( ( dot_index % 5 ) == 0 )
      {
         dot_diameter = 8 ;
      }

      context.beginPath() ;
      context.arc( dot_position_x, dot_position_y,
                   dot_diameter / 2, 0, 2 * Math.PI, true )
      context.closePath() ;
      context.fill() ;

      dot_index  =  dot_index  +  1  ;
   }


   var hour_hand_angle = ( current_hours * 30  +  current_minutes / 2 )
                            * Math.PI / 180 - Math.PI /2 ;

   var hour_hand_end_x = ( Math.cos( hour_hand_angle ) *
                                 HOUR_HAND_LENGTH + clock_center_point_x ) ;
   var hour_hand_end_y = ( Math.sin( hour_hand_angle ) *
                                 HOUR_HAND_LENGTH + clock_center_point_y ) ;


   var minute_hand_angle = ( current_minutes +
                             current_seconds / 60.0 )
                              * Math.PI / 30 - Math.PI /2 ;

   var minute_hand_end_x = ( Math.cos( minute_hand_angle ) *
                               MINUTE_HAND_LENGTH + clock_center_point_x ) ;

   var minute_hand_end_y = ( Math.sin( minute_hand_angle ) *
                               MINUTE_HAND_LENGTH + clock_center_point_y ) ;


   var second_hand_angle = ( current_seconds +
                             current_milliseconds / 1000.0 )
                                * Math.PI / 30 - Math.PI /2 ;

   var second_hand_end_x = ( Math.cos( second_hand_angle ) *
                                SECOND_HAND_LENGTH + clock_center_point_x ) ;
   var second_hand_end_y = ( Math.sin( second_hand_angle) *
                                SECOND_HAND_LENGTH + clock_center_point_y ) ;


   context.strokeStyle = "red" ; 
   context.lineWidth   = 5 ;

   context.beginPath() ;
   context.moveTo( clock_center_point_x, clock_center_point_y ) ;
   context.lineTo( hour_hand_end_x, hour_hand_end_y ) ; 

   context.moveTo( clock_center_point_x, clock_center_point_y ) ;
   context.lineTo( minute_hand_end_x, minute_hand_end_y ) ; 
   context.stroke() ; 



   context.strokeStyle = "blue" ;
   context.lineWidth   = 1 ;

   context.beginPath() ;
   context.moveTo( clock_center_point_x, clock_center_point_y ) ;
   context.lineTo( second_hand_end_x, second_hand_end_y ) ; 
   context.stroke() ; 


   setTimeout( "draw_on_canvas()", 200 ) ;
}
