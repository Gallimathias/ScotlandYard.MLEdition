namespace ScotlandYard.MLEdition.Runtime
{
    public interface IGameService
    {
        void Initialize(int playerCount);
        void NextTurn();
    }
}