using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScotlandYard.MLEdition.WebService.Model.Information
{
    public sealed class MapInfo
    {
        public int TileSize { get; set; }
        public int MaxZoom { get; set; }
        public int MinZoom { get; set; }
        public int XCount { get; set; }
        public int YCount { get; set; }
        public string Title { get; set; }
    }
}
