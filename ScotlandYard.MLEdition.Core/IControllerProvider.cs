
using System.Collections.Generic;

namespace ScotlandYard.MLEdition.Core
{
    public interface IControllerProvider
    {
        IEnumerable<IController> GetAllController();
        IController GetController();
    }
}