using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ScotlandYard.MLEdition.Database.Model
{
    public sealed class Game : IdEntity
    {
        public DateTime GameDate { get; set; }

        [InverseProperty(nameof(Move.Game))]
        public List<Move> Moves { get; set; }
    }
}
