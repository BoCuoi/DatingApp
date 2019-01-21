using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message) {
            response.Headers.Add("Application-Error", message); //message as value
            response.Headers.Add("Access-Control-Expose-Header", "Application-Error"); // Give 1st param the name of the header want to expose
            response.Headers.Add("Access-Control-Allow-Origin","*");//Add CORS header, app doesn't moan about this
        }
        public static int CalculateAge(this DateTime theDateTime)
        {
            var age = DateTime.Today.Year - theDateTime.Year; // 2019 - [22/01/]2000
            if (theDateTime.AddYears(age) > DateTime.Today) // 22/01/[2000 + 19] > ? 
                age--;
            return age;
        }
    }
}