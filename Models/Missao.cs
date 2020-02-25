using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LancamentoSpaceX.Models
{
    public class Missao
    {
        [JsonProperty("name")]
        public string Nome { get; set; }

        [JsonProperty("flight")]
        public string Viagens { get; set; }
    }
}
