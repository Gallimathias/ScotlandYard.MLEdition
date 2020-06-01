using ScotlandYard.MLEdition.Core;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;

namespace ScotlandYard.MLEdition.WebService.Model
{
    public class PlayerController : IController
    {
        public Station Station { get; private set; }
        public Color Color { get; private set; }
        public bool MrX { get; private set; }

        public void Register(Station station, Color color, bool mrX)
        {
            Station = station;
            Color = color;
            MrX = mrX;
        }

        public void TicketsAdded(KeyValuePair<Ticket, int>[] keyValuePair)
        {
        }

        public (Station station, Ticket ticket) WaitForMove(IEnumerable<Station> stations)
        {
            return default;
        }
    }
}
