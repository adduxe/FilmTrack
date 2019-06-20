using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FilmTrackTest.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
//            return View();
            return FilmTrack();
        }

        public ActionResult FilmTrack()
        {
            return View();
        }
    }
}