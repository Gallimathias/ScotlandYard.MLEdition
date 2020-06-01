namespace CreateMap
{
    internal class MapInfo
    {
        public MapInfo()
        {
        }

        public int TileSize { get;  set; }
        public int MaxZoom { get;  set; }
        public int MinZoom { get;  set; }
        public int XCount { get;  set; }
        public int YCount { get;  set; }
        public string Title { get;  set; }
    }
}