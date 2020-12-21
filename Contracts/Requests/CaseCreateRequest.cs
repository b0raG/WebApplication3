using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Contracts.Requests
{
    public class CaseCreateRequest
    {
        public int CaseId { get; set; }
        public int Lawyer1Afm { get; set; }
        public int Lawyer2Afm { get; set; }
    }
}
