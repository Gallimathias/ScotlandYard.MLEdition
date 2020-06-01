using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ScotlandYard.Core;
using ScotlandYard.MLEdition.Core;
using ScotlandYard.MLEdition.WebService.Model.Information;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ScotlandYard.MLEdition.WebService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MapController : ControllerBase
    {
        private readonly IControllerProvider controllProvider;

        public MapController()
        {
            controllProvider = TypeContainer.Get<IControllerProvider>();
        }

        [HttpGet("[action]")]
        public ActionResult Info([FromQuery] string name)
        {
            var file = new FileInfo(Path.Combine(".", "map_result", "map.json"));
            return File(file.OpenRead(), "application/json");
        }

        [HttpGet("[action]")]
        public ActionResult Tile([FromQuery] int z, [FromQuery] int x, [FromQuery] int y)
        {
            var file = new FileInfo(Path.Combine(".", "map_result", $"{z}", $"{x}_{y}.png"));

            if (!file.Exists)
            {
                file = new FileInfo(Path.Combine(".", "map_result", $"default.png"));
            }

            if (!file.Exists)
                return NotFound();

            return File(file.OpenRead(), "image/png");
        }

        [HttpGet("[action]")]
        public IEnumerable<PlayerInfo> Player()
        {
           return controllProvider
                    .GetAllController()
                    .Select(c => new PlayerInfo(c));
        }
    }
}
