using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.IO.Compression;
using System.Linq;

namespace CreateMap
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var str = string.Join(" ", args);
            var size = 252;
            var folder = new DirectoryInfo(Path.Combine(".", "map_result"));
            var zoom = 7;
            var title = "old map";

            if (folder.Exists)
                folder.Delete(true);

            folder.Create();
            var masterFile = new FileInfo(@"D:\Projekte\Visual 2019\ScotlandYard.MLEdition\map_origin.png");
            using FileStream stream = masterFile.OpenRead();
            var master = new Bitmap(stream);
            var width = master.Width;
            var height = master.Height;

            var baseXCount = width / size;
            var baseYCount = height / size;

            var mapInfo = new MapInfo
            {
                TileSize = size,
                MaxZoom = zoom,
                MinZoom = 0,
                XCount = baseXCount,
                YCount = baseYCount,
                Title = title,
            };

            File.WriteAllText(Path.Combine(folder.FullName, "map.json"), JsonConvert.SerializeObject(mapInfo, Formatting.Indented));

            var zoomDic = new DirectoryInfo(Path.Combine(folder.FullName, zoom.ToString()));
            zoomDic.Create();

            Dictionary<(int X, int Y), FileInfo> fileDictionary = Split(master, size, width, height, zoomDic);
            for (var z = zoom - 1; z >= 0; z--)
            {
                zoomDic = new DirectoryInfo(Path.Combine(folder.FullName, z.ToString()));
                zoomDic.Create();
                fileDictionary = CreateZoom(size, baseXCount, baseYCount, zoomDic, fileDictionary);
                baseXCount /= 2;
                baseYCount /= 2;
            }

            using var map = new Bitmap(size, size);
            using var g = Graphics.FromImage(map);
            g.Clear(Color.FromArgb(221, 221, 221));
            map.Save(Path.Combine(folder.FullName, "default.png"));

            using (var zipStream = new MemoryStream())
            using (var archive = new ZipArchive(zipStream, ZipArchiveMode.Create, false))
            {
                folder
                    .GetFiles("*.*", SearchOption.AllDirectories)
                    .ForEach(f => archive.CreateEntryFromFile(f.FullName, f.FullName.Replace(folder.FullName, "").Trim('\\')));

                File.WriteAllBytes(Path.Combine(".", "london.map"), zipStream.ToArray());
            }
        }

        private static Dictionary<(int X, int Y), FileInfo> CreateZoom(int size, int baseXCount, int baseYCount, DirectoryInfo zoomDic, Dictionary<(int X, int Y), FileInfo> fileDictionary)
        {
            Dictionary<(int X, int Y), FileInfo> currentDic = fileDictionary;
            fileDictionary = new Dictionary<(int X, int Y), FileInfo>();

            var xCount = 0;
            var yCount = 0;
            using var map = new Bitmap(size, size);
            using var g = Graphics.FromImage(map);
            for (var y = 0; y <= baseYCount; y += 2)
            {
                xCount = 0;
                for (var x = 0; x <= baseXCount; x += 2)
                {
                    g.Clear(Color.FromArgb(221, 221, 221));

                    var halfSize = size / 2;
                    DrawBitmap(currentDic, g, (x, y), new Rectangle(0, 0, halfSize, halfSize));
                    DrawBitmap(currentDic, g, (x + 1, y), new Rectangle(halfSize, 0, halfSize, halfSize));
                    DrawBitmap(currentDic, g, (x, y + 1), new Rectangle(0, halfSize, halfSize, halfSize));
                    DrawBitmap(currentDic, g, (x + 1, y + 1), new Rectangle(halfSize, halfSize, halfSize, halfSize));

                    var zFile = new FileInfo(Path.Combine(zoomDic.FullName, $"{xCount}_{yCount}.png"));
                    map.Save(zFile.FullName, ImageFormat.Png);

                    fileDictionary.Add((xCount, yCount), zFile);
                    xCount++;
                }
                yCount++;
            }

            return fileDictionary;
        }

        private static void DrawBitmap(Dictionary<(int X, int Y), FileInfo> currentDic, Graphics g, (int, int) point, Rectangle rectangle)
        {
            if (currentDic.TryGetValue(point, out FileInfo a1File))
            {
                var a1Bitmap = new Bitmap(a1File.FullName);
                g.DrawImage(a1Bitmap, rectangle);
            }
        }

        private static Dictionary<(int X, int Y), FileInfo> Split(Bitmap master, int size, int width, int height, DirectoryInfo zoomDic)
        {
            var fileDictionary = new Dictionary<(int X, int Y), FileInfo>();
            var baseSize = new Size(size, size);
            var baseRect = new Rectangle(new Point(0, 0), baseSize);
            var xCount = 0;
            var yCount = 0;
            using var map = new Bitmap(size, size);
            using var g = Graphics.FromImage(map);
            for (var y = 0; y < height; y += size)
            {
                xCount = 0;
                for (var x = 0; x < width; x += size)
                {
                    g.Clear(Color.FromArgb(221, 221, 221));
                    g.DrawImage(master, baseRect, new Rectangle(new Point(x, y), baseSize), GraphicsUnit.Pixel);
                    var zFile = new FileInfo(Path.Combine(zoomDic.FullName, $"{xCount}_{yCount}.png"));
                    map.Save(zFile.FullName, ImageFormat.Png);

                    fileDictionary.Add((xCount, yCount), zFile);

                    xCount++;
                }
                yCount++;
            }

            return fileDictionary;
        }

        private static double GetPowerOf2(double value)
            => Math.Pow(2, Math.Ceiling(Math.Log2(value)));

        private static Bitmap GetCorrectMaster(Bitmap master, int newWidth, int newHeight)
        {
            if (newWidth != master.Width || newHeight != master.Height)
            {
                var newMaster = new Bitmap(newWidth, newHeight);
                using var g = Graphics.FromImage(newMaster);
                g.DrawImage(master, 0, 0);
                master.Dispose();
                master = newMaster;
            }

            return master;
        }
    }
}
