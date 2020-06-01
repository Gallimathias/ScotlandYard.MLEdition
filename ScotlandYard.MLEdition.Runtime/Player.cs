using ScotlandYard.MLEdition.Core;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;

namespace ScotlandYard.MLEdition.Runtime
{
    public sealed class Player
    {
        public bool IsMrX { get; }
        public Color Color { get; }
        public Station Station { get; set; }
        public bool CanMove { get; set; }

        private readonly IController controller;

        public Dictionary<Ticket, int> Tickets { get; }

        public Player(IController controller, Station station, Color color, bool mrX)
        {
            Tickets = new Dictionary<Ticket, int>();

            Station = station;
            Color = mrX ? Color.Black : color;
            IsMrX = mrX;
            CanMove = true;

            this.controller = controller;
            controller.Register(station, color, mrX);
        }

        public IEnumerable<Station> AviableStations()
            => Tickets
                    .Where(t => t.Value > 0 && t.Key != Ticket.Double)
                    .Select(t => t.Key)
                    .SelectMany(ticket => GetConnections(ticket))
                    .Join(Station.Connections, connectionType => connectionType, connection => connection.Type, (type, connection) => connection.Station);

        public void Move(Station station, Ticket ticket)
        {
            if (!Tickets.ContainsKey(ticket))
                throw new KeyNotFoundException();

            IEnumerable<ConnectionType> connectionType = GetConnections(ticket);
            Station = Station
                        .Connections
                        .First(con => con.Station == station && connectionType.Contains(con.Type))
                        .Station;

            Tickets[ticket]--;
        }

        internal Ticket Turn()
        {
            IEnumerable<Station> stations = AviableStations();

            if (!stations.Any())
            {
                CanMove = false;
                return default;
            }

            (Station station, Ticket ticket) = controller.WaitForMove(stations);

            Move(station, ticket);

            return ticket;
        }

        private static IEnumerable<ConnectionType> GetConnections(Ticket key)
        {
            switch (key)
            {
                case Ticket.Taxi:
                    yield return ConnectionType.Taxi;
                    break;
                case Ticket.Bus:
                    yield return ConnectionType.Bus;
                    break;
                case Ticket.Underground:
                    yield return ConnectionType.Underground;
                    break;
                case Ticket.Black:
                    yield return ConnectionType.Underground;
                    yield return ConnectionType.Taxi;
                    yield return ConnectionType.Bus;
                    yield return ConnectionType.Ship;
                    break;
            }
        }
    }
}
