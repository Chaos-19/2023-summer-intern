using System.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaxPayerApi.Models;

namespace TaxPayerApi.Controller
{
    [Route("api/[controller]")]
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
        public async Task<ActionResult<List<TaxPayer>>> GetTaxPayer()
        {
            return await _context.TaxPayer.ToListAsync();
        }

        //api/taxPayer/:TIn
        [HttpGet("{tin}")]
        public async Task<ActionResult<TaxPayer>> GetTaxPayerByTin(long tin)
        {
            var taxPayer = await _context.TaxPayer.FirstOrDefaultAsync(p => p.Tin == tin);

            if (taxPayer == null)
                return NotFound();

            return taxPayer;
        }

        //api/taxPayer/create
        [Route("CreateTaxPayer")]
        [HttpPost]
        public async Task<IActionResult> CreateTaxPayer(TaxPayer newTaxPayer)
        {
            var taxPayer = await _context.TaxPayer.FirstOrDefaultAsync(p =>
                p.Tin == newTaxPayer.Tin
            );
            if (taxPayer != null)
                return BadRequest("Account Already Exists");

            _context.TaxPayer.Add(newTaxPayer);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetTaxPayer),
                new { id = newTaxPayer.TaxPayerId },
                newTaxPayer
            );
        }

        //api/taxPayer/update/TIn
        [Route("UpdateTaxPayer/{tin}")]
        [HttpPut]
        public async Task<IActionResult> UpdateTaxPayer(int tin, TaxPayer taxPayer)
        {
            if (tin != taxPayer.Tin)
                return BadRequest("Id should be Matched");

            var existTaxPayer = await _context.TaxPayer.FirstOrDefaultAsync(p => p.Tin == tin);

            if (existTaxPayer == null)
                return NotFound();

            _context.TaxPayer.Attach(existTaxPayer);
            // Use reflection to update properties
            this.UpdateProperties(taxPayer, existTaxPayer);

            await _context.SaveChangesAsync();
            return NoContent();
        }

        //api/taxPayer/delete/Tin
        [Route("DeleteTaxPayer/{tin}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteTaxPayer(int tin)
        {
            var taxPayer = await _context.TaxPayer.FirstOrDefaultAsync(p => p.Tin == tin);

            if (taxPayer == null)
                return BadRequest();

            _context.TaxPayer.Remove(taxPayer);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // Private method to update properties
        private void UpdateProperties<T>(T source, T destination)
        {
            var properties = typeof(T).GetProperties();
            foreach (var property in properties)
            {
                if (property.CanWrite)
                {
                    var newValue = property.GetValue(source);
                    property.SetValue(destination, newValue);
                }
            }
        }
    }
}
