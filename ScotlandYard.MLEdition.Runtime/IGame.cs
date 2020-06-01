using ScotlandYard.MLEdition.Core;
using System.Collections.Generic;

namespace ScotlandYard.MLEdition.Runtime
{
    public interface IGame
    {
        List<HistoryEntry> Historie { get; }
        Station LastMrXPosition { get; set; }
        int[] MrXVisibility { get; }
        int PlayerCount { get; }
        List<Player> Players { get; }
        IEnumerable<Station> Stations { get; }
        int Turn { get; }

        void InitGame(int playerCount);
        TurnResult NextTurn();
    }
}