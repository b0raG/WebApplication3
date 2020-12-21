using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication3.Contracts.Requests;
using WebApplication3.Contracts.Responses;
using WebApplication3.Data;
using WebApplication3.Models;

namespace WebApplication3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CasesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public CasesController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Cases
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Case>>> GetCases()
        {
            return await _context.Cases.ToListAsync();
        }

        // GET: api/Cases/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Case>> GetCase(int id)
        {
            var @case = await _context.Cases.FindAsync(id);

            if (@case == null)
            {
                return NotFound();
            }

            return @case;
        }

        // PUT: api/Cases/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCase(int id, Case @case)
        {
            if (id != @case.CaseId)
            {
                return BadRequest();
            }

            _context.Entry(@case).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CaseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cases
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<CaseCreateResponse>> PostCase(CaseCreateRequest @caseRequest)
        {
            var caseModel = _mapper.Map<Case>(@caseRequest);
            caseModel.State = "Initiallized";
            _context.Cases.Add(caseModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCase", new { id = caseModel.CaseId }, caseModel);
        }

        // DELETE: api/Cases/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Case>> DeleteCase(int id)
        {
            var @case = await _context.Cases.FindAsync(id);
            if (@case == null)
            {
                return NotFound();
            }

            _context.Cases.Remove(@case);
            await _context.SaveChangesAsync();

            return @case;
        }

        private bool CaseExists(int id)
        {
            return _context.Cases.Any(e => e.CaseId == id);
        }
    }
}
