using ScotlandYard.Core.IoC;
using ScotlandYard.MLEdition.Core;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;

namespace ScotlandYard.MLEdition.Runtime
{
    public sealed class Game : IGame
    {
        public IEnumerable<Station> Stations { get; }

        public int PlayerCount { get; private set; }
        public List<Player> Players { get; }

        public List<HistoryEntry> Historie { get; }

        public Station LastMrXPosition { get; set; }
        public int[] MrXVisibility { get; }

        public int Turn { get; private set; }

        private readonly IControllerProvider controllerProvider;
        private readonly ISettingProvider settings;
        private readonly ITypeContainer typeContainer;
        private readonly IStorageProvider storage;

        public Game(ITypeContainer typeContainer, ISettingProvider settingProvider, IControllerProvider controllerProvider)
        {
            Players = new List<Player>(3);
            Historie = new List<HistoryEntry>();

            settings = settingProvider;
            this.controllerProvider = controllerProvider;
            this.typeContainer = typeContainer;

            LastMrXPosition = null;
            MrXVisibility = settingProvider.MrXVisibility;//new[] { 3, 8, 13, 18, 24 };
            Stations = settingProvider.Stations;

            storage = typeContainer.Get<IStorageProvider>();
        }

        public void InitGame(int playerCount)
        {
            if (playerCount < 3)
                throw new ArgumentOutOfRangeException(nameof(playerCount), "this needs a minimum of 3 players");

            if (playerCount > 6)
                throw new ArgumentOutOfRangeException(nameof(playerCount), "The game can not work with more than 6 players");

            PlayerCount = playerCount;

            Station[] stations = settings.StartPositions.ToArray();
            var random = new Random();

            var controller = controllerProvider.GetController();
            var mrX = new Player(controller, stations[random.Next(-1, stations.Length - 1)], Color.Empty, true);
            mrX.Tickets.Add(Ticket.Taxi, 4);
            mrX.Tickets.Add(Ticket.Bus, 3);
            mrX.Tickets.Add(Ticket.Underground, 3);
            mrX.Tickets.Add(Ticket.Double, 2);
            mrX.Tickets.Add(Ticket.Black, PlayerCount - 1);
            controller.TicketsAdded(mrX.Tickets.ToArray());

            var players = new List<Player>(PlayerCount) { mrX };
            Color[] playerColors = new[] { Color.Red, Color.Yellow, Color.Green, Color.Blue, Color.White };

            for (var i = 0; i < PlayerCount - 1; i++)
            {
                Station station;
                do
                {
                    station = stations[random.Next(0, stations.Length)];
                } while (players.Any(p => p.Station == station));

                controller = controllerProvider.GetController();
                var player = new Player(controller, station, playerColors[i], false);
                player.Tickets.Add(Ticket.Taxi, 10);
                player.Tickets.Add(Ticket.Bus, 8);
                player.Tickets.Add(Ticket.Underground, 4);
                controller.TicketsAdded(player.Tickets.ToArray());

                players.Add(player);
            }

            Players.AddRange(players);
            Players.ForEach(p =>
            {
                Historie.Add(new HistoryEntry(Turn, p, p.Station, default));
            });

            storage.Store(Turn, LastMrXPosition, Stations.ToArray());
        }

        public TurnResult NextTurn()
        {
            Turn++;

            Player mrX = Players.First(p => p.IsMrX);
            IEnumerable<Player> detectivs = Players.Where(p => !p.IsMrX);

            Ticket ticket = MrXTurn(mrX);

            if (ticket == Ticket.Double)
                for (var i = 0; i < 2; i++)
                    MrXTurn(mrX);

            if (MrXVisibility.Contains(Turn))
                LastMrXPosition = mrX.Station;

            foreach (Player player in detectivs.Where(d => d.CanMove))
            {
                ticket = player.Turn();

                if (!player.CanMove)
                    continue;

                mrX.Tickets[ticket]++;

                Historie.Add(new HistoryEntry(Turn, player, player.Station, ticket));
            }

            if (detectivs.Any(p => p.Station == mrX.Station))
            {
                return TurnResult.ScotlandYardWin;
            }

            if (Turn > 24)
            {
                return TurnResult.MrXWin;
            }

            if (detectivs.All(d => !d.CanMove))
            {
                return TurnResult.MrXWin;
            }

            return default;

            Ticket MrXTurn(Player mrX)
            {
                Ticket ticket = mrX.Turn();
                Historie.Add(new HistoryEntry(Turn, mrX, mrX.Station, ticket));
                return ticket;
            }
        }


    }
}
