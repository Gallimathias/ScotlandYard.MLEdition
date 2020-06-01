using ScotlandYard.MLEdition.Core;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;

namespace ScotlandYard.MLEdition.WebService.Model.Information
{
    public class PlayerInfo
    {
        public Station Station { get; set; }
        public Color Color { get; set; }
        public bool MrX { get; set; }

        public PlayerInfo()
        {

        }

        public PlayerInfo(IController c)
        {
            Station = c.Station;
            Color = c.Color;
            MrX = c.MrX;
        }
        
    }
}
