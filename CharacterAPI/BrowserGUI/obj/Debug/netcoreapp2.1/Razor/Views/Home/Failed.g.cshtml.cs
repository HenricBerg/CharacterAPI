#pragma checksum "H:\Projekt\D&D\CharacterAPI\CharacterAPI\BrowserGUI\Views\Home\Failed.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "9d2ba70d05404c04436c1492850c65eaeddff5f0"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Failed), @"mvc.1.0.view", @"/Views/Home/Failed.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Failed.cshtml", typeof(AspNetCore.Views_Home_Failed))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "H:\Projekt\D&D\CharacterAPI\CharacterAPI\BrowserGUI\Views\_ViewImports.cshtml"
using CharacterAPI;

#line default
#line hidden
#line 2 "H:\Projekt\D&D\CharacterAPI\CharacterAPI\BrowserGUI\Views\_ViewImports.cshtml"
using CharacterAPI.Models;

#line default
#line hidden
#line 3 "H:\Projekt\D&D\CharacterAPI\CharacterAPI\BrowserGUI\Views\_ViewImports.cshtml"
using BrowserGUI;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9d2ba70d05404c04436c1492850c65eaeddff5f0", @"/Views/Home/Failed.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ecec9ec0bd0c21a1e4ab2728b143defd261cad94", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Failed : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 2 "H:\Projekt\D&D\CharacterAPI\CharacterAPI\BrowserGUI\Views\Home\Failed.cshtml"
  
    ViewData["Title"] = "Failed";

#line default
#line hidden
            BeginContext(44, 13, true);
            WriteLiteral("\r\n<h2>Error! ");
            EndContext();
            BeginContext(58, 13, false);
#line 6 "H:\Projekt\D&D\CharacterAPI\CharacterAPI\BrowserGUI\Views\Home\Failed.cshtml"
      Write(ViewBag.Error);

#line default
#line hidden
            EndContext();
            BeginContext(71, 70, true);
            WriteLiteral("</h2>\r\n<script>\r\n\r\n    window.onload = ReturnToHome(5);\r\n\r\n</script>\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
