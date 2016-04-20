using System;
using System.IO;
using RestSharp;
using RestSharp.Authenticators;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Data;

namespace Tropical
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        public class contactModel
        {
            public string Name { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public string Message { get; set; }
            public string Date { get; set; }
            public string packageSelected { get; set; }
            public string Days { get; set; }
        }
        public class callmeModel
        {
            public string Phone { get; set; }
        }


        public static RestResponse SendSimpleMessage(string packageSelected,string Date, string name, string phone, string email, string message, string cc, string bcc, string Days)
        {
            //string body = MailTemplates.mailTemplate1();

            string body = string.Empty;

            RestClient client = new RestClient();
            Uri uri = new Uri("https://api.mailgun.net/v3");
            client.BaseUrl = uri;
            client.Authenticator =
                   new HttpBasicAuthenticator("api", "key-c873df0954654b1e478699daf2408977");
            RestRequest request = new RestRequest();
            request.AddParameter("domain",
                                "tropicalandamans.com", ParameterType.UrlSegment);
            request.Resource = "{domain}/messages";
            request.AddParameter("from", "tropicalandamans <bookings@tropicalandamans.com>");
            request.AddParameter("to", name + " <" + email + ">");
            //request.AddParameter("to", "benoywins@gmail.com");
            request.AddParameter("to", "bookings@tropicalandamans.com");
            request.AddParameter("to", "benoywins@gmail.com");
            //if (string.IsNullOrEmpty(cc))
            //{
            //    request.AddParameter("cc", cc);
            //}
            //if (string.IsNullOrEmpty(bcc))
            //{
            //    request.AddParameter("bcc", bcc);
            //}
            request.AddParameter("subject", "Honeymoon Enquiry from " + name);            
            request.AddParameter("text", "Name :" + name);
            request.AddParameter("text", "phone number :" + phone);
            request.AddParameter("text", "email  :" + email);
            request.AddParameter("text", "start Date :" + Date);
            request.AddParameter("text", "number of days :" + Days);
            request.AddParameter("text", "*************************************************");
            request.AddParameter("text", "Selected Package");
            request.AddParameter("text", packageSelected);
            //request.AddParameter("html", body);
            request.Method = Method.POST;
            var response = client.Execute(request) as RestResponse;
            return response;
        }
        public static RestResponse SendSimpleCallMe(string phone, string cc, string bcc)
        {
            //string body = MailTemplates.mailTemplate1();

            string body = string.Empty;

            RestClient client = new RestClient();
            Uri uri = new Uri("https://api.mailgun.net/v3");
            client.BaseUrl = uri;
            client.Authenticator =  new HttpBasicAuthenticator("api", "key-c873df0954654b1e478699daf2408977");
            RestRequest request = new RestRequest();
            request.AddParameter("domain", "tropicalandamans.com", ParameterType.UrlSegment);
            request.Resource = "{domain}/messages";
            request.AddParameter("from", "tropicalandamans <bookings@tropicalandamans.com>");
            //request.AddParameter("to", name + " <" + email + ">");
            request.AddParameter("to", "benoywins@gmail.com");
            request.AddParameter("to", "emmanuel03@gmail.com");
            request.AddParameter("subject", "Hello : Package enquiry received!!! Call " + phone);
            request.AddParameter("text", "This number \"" + phone +"\" has enquired for packages... Call Now !!!");
            request.Method = Method.POST;
            var response = client.Execute(request) as RestResponse;
            return response;
        }

        [System.Web.Services.WebMethod]
        public static string GetTestJson(contactModel obj)
        {
            string Name = Convert.ToString(obj.Name);
            string Phone = Convert.ToString(obj.Phone);
            string Email = Convert.ToString(obj.Email);
            string Message = Convert.ToString(obj.Message);
            string Date = Convert.ToString(obj.Date);
            string Days = Convert.ToString(obj.Days);
            string packageSelected = Convert.ToString(obj.packageSelected);
            string cc = "bookings@getaway.com";
            string bcc = "";
            //SendTestMessage();
            SendSimpleMessage(packageSelected,Date, Name, Phone, Email, Message, cc, bcc, Days);
            return "success message";
        }
        [System.Web.Services.WebMethod]
        public static string SendEmailNumber(callmeModel obj)
        {
            string Phone = Convert.ToString(obj.Phone);
            string cc = "bookings@getaway.com";
            string bcc = "";
            //SendTestMessage();
            SendSimpleCallMe( Phone, cc, bcc);
            return "success message";
        }
    }
}