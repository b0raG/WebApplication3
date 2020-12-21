using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication3.Contracts.Requests;
using WebApplication3.Contracts.Responses;
using WebApplication3.Models;

namespace WebApplication3.Mappers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Add as many of these lines as you need to map your objects
            CreateMap<Case, CaseCreateResponse>();
            CreateMap<CaseCreateRequest, Case>();
        }
    }
}
