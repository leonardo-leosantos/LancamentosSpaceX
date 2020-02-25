using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LancamentoSpaceX.Models
{
    public class Capsula
    {
        [JsonProperty("capsule_id")]
        public string IdCapsula { get; set; }

        [JsonProperty("capsule_serial")]
        public string IdSerial { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }

        [JsonProperty("landings")]
        public string Desembarque { get; set; }

        [JsonProperty("type")]
        public string Tipo { get; set; }

        [JsonProperty("original_launch")]
        public string DataLancamento { get; set; }

        [JsonProperty("details")]
        public string Detalhes { get; set; }

        [JsonProperty("missions")]
        public IEnumerable<Missao> Missoes { get; set; }

        [JsonProperty("reuse_count")]
        public string Reutilizada { get; set; }
    }
}
