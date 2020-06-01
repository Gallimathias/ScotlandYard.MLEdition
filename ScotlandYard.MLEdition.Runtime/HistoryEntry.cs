using ScotlandYard.MLEdition.Core;
using System;
using System.Collections.Generic;

namespace ScotlandYard.MLEdition.Runtime
{
    public readonly struct HistoryEntry : IEquatable<HistoryEntry>
    {
        private static int NextId => nextId++;
        private static volatile int nextId;

        public int Id { get;  }
        public int Round { get;  }
        public Player Player { get;  }
        public Station Station { get;  }
        public Ticket Ticket { get;  }

        public HistoryEntry(int round, Player player, Station station, Ticket ticket)
        {
            Id = NextId;
            Round = round;
            Player = player;
            Station = station;
            Ticket = ticket;
        }

        public override bool Equals(object obj) 
            => obj is HistoryEntry entry 
                   && Equals(entry);
        public bool Equals(HistoryEntry other) 
            => Round == other.Round 
                && EqualityComparer<Player>.Default.Equals(Player, other.Player) 
                && EqualityComparer<Station>.Default.Equals(Station, other.Station) 
                && Ticket == other.Ticket;

        public override int GetHashCode() 
            => HashCode.Combine(Round, Player, Station, Ticket);

        public static bool operator ==(HistoryEntry left, HistoryEntry right) 
            => left.Equals(right);
        public static bool operator !=(HistoryEntry left, HistoryEntry right) 
            => !(left == right);
    }
}