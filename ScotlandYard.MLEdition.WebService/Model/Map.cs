using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reactive.Disposables;
using System.Threading.Tasks;

namespace ScotlandYard.MLEdition.WebService.Model
{
    public class Map : IDisposable
    {
        private readonly CompositeDisposable disposables;
        private readonly ZipArchive archive;

        public Map(FileInfo fileInfo)
        {
            var stream = fileInfo.OpenRead();
            archive = new ZipArchive(stream, ZipArchiveMode.Read, false);

            disposables = new CompositeDisposable
            {
                stream,
                archive
            };
        }

        public void Dispose() 
            => disposables.Dispose();

        private byte[] Get(string name)
        {
            var entry = archive.GetEntry(name);
            using (var stream = entry.Open())
            {
                var data = new byte[entry.Length];
                stream.Read(data, 0, (int)entry.Length);
                return data;
            }
        }
    }
}
