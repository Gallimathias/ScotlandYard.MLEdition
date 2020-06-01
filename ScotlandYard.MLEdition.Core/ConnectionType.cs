using System;
using System.Collections.Generic;
using System.Text;

namespace ScotlandYard.MLEdition.Core
{
    public enum ConnectionType : short
    {
        Bus = (short)'b',
        Underground = (short)'u',
        Taxi = (short)'t',
        Ship = (short)'s'
    }
}
