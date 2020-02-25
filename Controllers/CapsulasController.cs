using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using LancamentoSpaceX.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace LancamentoSpaceX.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CapsulasController : Controller
    {
        HttpClient httpClient = new HttpClient();
        public CapsulasController()
        {
            httpClient.BaseAddress = new Uri("https://api.spacexdata.com/v3/");
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("content-type", "application/json");
        }

        //TODAS AS CAPSULAS
        [HttpGet]
        public async Task<JsonResult> GetAllCapsulas()
        {
            HttpResponseMessage response = await httpClient.GetAsync("capsules");
            var content = await response.Content.ReadAsStringAsync();
            IEnumerable<Capsula> capsulasObj = JsonConvert.DeserializeObject<IEnumerable<Capsula>>(content);

            var jsonCapsulas = JsonConvert.SerializeObject(capsulasObj, Formatting.Indented);

            return Json(jsonCapsulas);
        }

        //CAPSULAS PASSADAS
        [HttpGet]
        [Route("Past")]
        public async Task<JsonResult> GetPastCapsulas()
        {
            HttpResponseMessage response = await httpClient.GetAsync("capsules/past");
            var content = await response.Content.ReadAsStringAsync();
            IEnumerable<Capsula> capsulasObj = JsonConvert.DeserializeObject<IEnumerable<Capsula>>(content);

            var jsonCapsulas = JsonConvert.SerializeObject(capsulasObj, Formatting.Indented);

            return Json(jsonCapsulas);
        }

        //CAPSULAS FUTURAS
        [HttpGet]
        [Route("Future")]
        public async Task<JsonResult> GetFutureCapsulas()
        {
            HttpResponseMessage response = await httpClient.GetAsync("capsules/upcoming");
            var content = await response.Content.ReadAsStringAsync();
            IEnumerable<Capsula> capsulasObj = JsonConvert.DeserializeObject<IEnumerable<Capsula>>(content);

            var jsonCapsulas = JsonConvert.SerializeObject(capsulasObj, Formatting.Indented);

            return Json(jsonCapsulas);
        }

        //PROXIMA CAPSULA
        [HttpGet]
        [Route("NextLaunch")]
        public async Task<JsonResult> GetNextLaunch()
        {
            HttpResponseMessage response = await httpClient.GetAsync("capsules/upcoming");
            var content = await response.Content.ReadAsStringAsync();
            IEnumerable<Capsula> capsulasObj = JsonConvert.DeserializeObject<IEnumerable<Capsula>>(content);

            Capsula capsulaNext = capsulasObj.OrderBy(x => x.DataLancamento).FirstOrDefault();
            var jsonCapsula = JsonConvert.SerializeObject(capsulaNext, Formatting.Indented);

            return Json(jsonCapsula);
        }

        //ULTIMA CAPSULA
        [HttpGet]
        [Route("LastLaunch")]
        public async Task<JsonResult> GetLastLaunch()
        {
            HttpResponseMessage response = await httpClient.GetAsync("capsules/past");
            var content = await response.Content.ReadAsStringAsync();
            IEnumerable<Capsula> capsulasObj = JsonConvert.DeserializeObject<IEnumerable<Capsula>>(content);

            Capsula capsulaLast = capsulasObj.OrderBy(x => x.DataLancamento).FirstOrDefault();
            var jsonCapsula = JsonConvert.SerializeObject(capsulaLast, Formatting.Indented);

            return Json(jsonCapsula);
        }


    }
}