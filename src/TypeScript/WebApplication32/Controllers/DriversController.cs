using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication32.Contollers
{
    public class DriversController : Controller
    {
        //
        // GET: /
        public ActionResult Index()
        {
            return View();
        }

        //
        // GET: /Drivers/DetailsTemplate?pattern=foo
        public ActionResult DetailsTemplate(string pattern)
        {
            return View(pattern + "/Details");
        }
	}
}