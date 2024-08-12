using System.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaxPayerApi.Models;

namespace TaxPayerApi.Controller
{
    [Route("api/taxPayer/[controller]")]
    [ApiController]
    public class TaxPayerController : ControllerBase
    {
        public readonly TaxPayerDbContext _context;

        public TaxPayerController(TaxPayerDbContext context)
        {
            _context = context;
        }

        //api/taxPayer/
        [HttpGet]
        public async Task<ActionResult<List<TaxPayer>>> GetTaxPayers()
        {
            return await _context.TaxPayer.ToListAsync();
        }

        //api/taxPayer/:id
        [HttpGet("{tin}")]
        public async Task<ActionResult<TaxPayer>> GetTaxPayerByTin(int tin)
        {
            var taxPayer = await _context.TaxPayer.FindAsync(tin);

            if (taxPayer == null)
                return NotFound();

            return taxPayer;
        }

        //api/taxPayer/create
        [HttpPost]
        public async Task<IActionResult> CreateTaxPayer([FromForm] TaxPayer newTaxPayer)
        {
            var taxPayer = await _context.TaxPayer.FindAsync(newTaxPayer.Tin);
            if (newTaxPayer.Tin != null)
                return BadRequest("Account Already Exists");

            _context.TaxPayer.Add(newTaxPayer);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetTaxPayers),
                new { Tin = newTaxPayer.Tin },
                newTaxPayer
            );
        }
    }
}
