using System.Collections.Generic;
using System.Linq;

namespace ScotlandYard.MLEdition.Core
{
    public sealed class Station
    {
        public int Id { get; }
        public HashSet<(ConnectionType Type, Station Station)> Connections { get;  }

        public Station(int station)
        {
            Connections = new HashSet<(ConnectionType Type, Station Station)>();
            Id = station;
        }

        public void AddConnections(char type, IEnumerable<Station> stations)
        {
            AddConnections((ConnectionType)type, stations);
        }
        public void AddConnections(ConnectionType type, IEnumerable<Station> stations)
        {
            foreach (var station in stations)           
                Connections.Add((type, station));        
        }

        public override string ToString() 
            => $"{Id} [{string.Join(", ", Connections.Select(c => c.Type).Distinct())}]";
    }
}