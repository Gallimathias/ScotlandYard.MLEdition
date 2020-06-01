using ScotlandYard.MLEdition.Core;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reactive.Disposables;
using System.Reactive.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace ScotlandYard.MLEdition.Runtime
{
    public static class StationLoader
    {
        public static List<Station> LoadStations(string fullName)
        {
            var stationBeginn = new Regex("^([0-9]{1,3})\t");
            var kind = new Regex("\t([tbus])\t");
            var stationEnd = new Regex(@"([0-9]{1,3}(\s|$))");
            var connections = File.ReadAllLines(fullName).Select(l =>
            {
                var begin = stationBeginn.Match(l);
                var connection = kind.Match(l);
                var end = stationEnd.Matches(l, connection.Index);

                return new Connection(int.Parse(begin.Value), connection.Groups[1].Value[0], end.Select(m => int.Parse(m.Value)));
            });

            var stations = connections
                            .Select(c => new Station(c.Station))
                            .Distinct(c => c.Id)
                            .ToDictionary(s => s.Id);

            connections.ForEach(connection
                => stations[connection.Station]
                    .AddConnections(connection.Type, stations.Where(kv => connection.Stations.Contains(kv.Key)).Select(kv => kv.Value)));

            return stations
                    .Values
                    .ToList();
        }

        private class Connection
        {
            public int Station { get; }
            public char Type { get; }
            public IEnumerable<int> Stations { get; }

            public Connection(int station, char type, IEnumerable<int> stations)
            {
                Station = station;
                Type = type;
                Stations = stations;
            }

            public override string ToString()
                => $"{Station}[{Type}]: {string.Join(',', Stations.ToArray())}";
        }
    }
}
