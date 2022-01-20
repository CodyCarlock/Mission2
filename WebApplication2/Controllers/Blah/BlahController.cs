using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Calc")]
        public IActionResult Calc()
        {
            return View();
        }

        [HttpPost("Calc")]
        public IActionResult Calc(calcModel model)
        {
            return View();
        }
    }
}
