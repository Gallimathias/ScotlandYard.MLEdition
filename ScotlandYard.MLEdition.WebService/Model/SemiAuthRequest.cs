using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ScotlandYard.MLEdition.WebService.Model
{
    public sealed class SemiAuthRequest
    {
        [Required]
        public string SemiId { get; set; }
    }
}
