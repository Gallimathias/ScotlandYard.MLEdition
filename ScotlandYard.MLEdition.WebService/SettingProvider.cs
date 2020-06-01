using ScotlandYard.MLEdition.Core;
using ScotlandYard.MLEdition.Runtime;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScotlandYard.MLEdition.WebService
{
    public class SettingProvider : ISettingProvider
    {
        public IEnumerable<Station> Stations { get; private set; }

        public int[] MrXVisibility => new[] { 3, 8, 13, 18, 24 };

        public IEnumerable<Station> StartPositions => Stations.Where(s => startIds.Contains(s.Id));

        private readonly int[] startIds;

        public SettingProvider()
        {
            startIds = new[] { 13, 29, 26, 34, 50, 53, 91, 94, 103, 112, 117, 132, 128, 141, 155, 174, 197, 198 };
            Stations = StationLoader
                        .LoadStations(@"D:\Projekte\Visual 2019\ScotlandYard.MLEdition\neighbours.txt");
        }
    }
}
