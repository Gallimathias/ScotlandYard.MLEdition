using ScotlandYard.Core.IoC;
using ScotlandYard.MLEdition.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScotlandYard.MLEdition.Runtime
{
    public static class StartUp
    {
        public static void Register(ITypeContainer typeContainer)
        {
            typeContainer.Register<IControllerProvider, ControllerProvider>(InstanceBehaviour.Singleton);
            typeContainer.Register<IGameService, GameService>(InstanceBehaviour.Singleton);
            typeContainer.Register<IGame, Game>(InstanceBehaviour.Instance);
        }
    }
}
