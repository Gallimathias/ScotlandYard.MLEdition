using System;
using System.Collections.Generic;
using System.Text;

namespace ScotlandYard.MLEdition.Core
{
    public interface IStorageProvider
    {
        void Store(int turn, Station lastMrXPosition, Station[] station);
    }
}
