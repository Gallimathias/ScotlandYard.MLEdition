
namespace ScotlandYard.MLEdition.Database.Model
{
    public abstract class Move : IdEntity
    {
        public Game Game { get; set; }
    }
}