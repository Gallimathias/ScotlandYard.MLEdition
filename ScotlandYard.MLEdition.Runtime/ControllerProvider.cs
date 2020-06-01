using ScotlandYard.Core.IoC;
using ScotlandYard.MLEdition.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScotlandYard.MLEdition.Runtime
{
    public class ControllerProvider : IControllerProvider
    {
        private readonly ITypeContainer container;
        private readonly List<IController> controllers;

        public ControllerProvider(ITypeContainer typeContainer)
        {
            controllers = new List<IController>();
            container = typeContainer;
        }

        public IController GetController()
        {
            var controller = container.Get<IController>();
            controllers.Add(controller);
            return controller;
        }

        public IEnumerable<IController> GetAllController()
            => controllers.ToArray();

    }
}
