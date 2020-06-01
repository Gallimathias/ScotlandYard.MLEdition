using ScotlandYard.Core.IoC;
using ScotlandYard.MLEdition.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;

namespace ScotlandYard.MLEdition.Runtime
{
    public class GameService : IGameService
    {
        private readonly ITypeContainer container;
        private readonly IGame game;

        public GameService(ITypeContainer typeContainer, IGame game)
        {
            container = typeContainer;
            this.game = game;
        }

        public void Initialize(int playerCount)
        {
            game.InitGame(playerCount);
        }

        public void NextTurn()
        {
            var result = game.NextTurn();

            if (result != TurnResult.None)
            {

            }
        }
    }
}
