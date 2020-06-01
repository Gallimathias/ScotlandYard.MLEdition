using System.Collections.Generic;

namespace ScotlandYard.MLEdition.Core
{
    public interface ISettingProvider
    {
        IEnumerable<Station> Stations { get; }
        int[] MrXVisibility { get; }
        IEnumerable<Station> StartPositions { get; }

        /*
         * 13,29,26,34,50,53,91,94,103,112,117,132,128,141,155,174,197,198
         */
    }
}