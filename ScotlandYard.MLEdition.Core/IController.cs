using System;
using System.Collections.Generic;
using System.Drawing;
using System.Text;

namespace ScotlandYard.MLEdition.Core
{
    public interface IController
    {
        Station Station { get; }
        Color Color { get; }
        bool MrX { get; }

        (Station station, Ticket ticket) WaitForMove(IEnumerable<Station> stations);
        void Register(Station station, Color color, bool mrX);
        void TicketsAdded(KeyValuePair<Ticket, int>[] keyValuePair);
    }
}
