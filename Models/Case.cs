using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public class Case
    {
        public int CaseId { get; set; }
        public int Lawyer1AFM { get; set; }
        public int Lawyer2AFM { get; set; }
        public int Spouse1AFM { get; set; }
        public int Spouse2AFM { get; set; }
        public string State { get; set; }
    }
}
