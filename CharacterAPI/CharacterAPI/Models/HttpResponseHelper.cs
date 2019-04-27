using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace CharacterAPI.Models
{
    public static class HttpResponseHelper
    {
        public static HttpResponseModel BadRequest(string content)
        {
            return new HttpResponseModel
            {
                StatusCode = HttpStatusCode.BadRequest,
                Content = content
            };
        }

        public static HttpResponseModel OK(object content)
        {
            return new HttpResponseModel
            {
                StatusCode = HttpStatusCode.OK,
                Content = content
            };
        }

        public static HttpResponseModel Forbidden(string content)
        {
            return new HttpResponseModel
            {
                StatusCode = HttpStatusCode.Forbidden,
                Content = content
            };
        }
    }

    public class HttpResponseModel
    {
        public HttpStatusCode StatusCode { get; set; }
        public object Content { get; set; }
    }
}
