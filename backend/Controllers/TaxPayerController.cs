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
        public async Task<ActionResult<List<TaxPayer>>> GetTaxPayer()
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
        [Route("CreateTaxPayer")]
        [HttpPost]
        public async Task<IActionResult> CreateTaxPayer([FromForm] TaxPayer newTaxPayer)
        {
            var taxPayer = await _context.TaxPayer.FirstOrDefaultAsync(p =>
                p.Tin == newTaxPayer.Tin
            );
            Console.WriteLine("Add Neew");
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

        //api/taxPayer/update
        [Route("UpdateTaxPayer/{id}")]
        [HttpPut]
        public async Task<IActionResult> UpdateTaxPayer(int id, [FromForm] TaxPayer taxPayer)
        {
            if (id != taxPayer.TaxPayerId)
                return BadRequest("Id should be Matched");

            var existTaxPayer = await _context.TaxPayer.FindAsync(id);

            if (existTaxPayer == null)
                return NotFound();

            _context.TaxPayer.Attach(existTaxPayer);

            /*  foreach (var item in taxPayer)
             {
                 existTaxPayer.Items.Add(item);
             } */
            // Use reflection to update properties
            this.UpdateProperties(taxPayer, existTaxPayer);

            await _context.SaveChangesAsync();
            return NoContent();
        }

        //api/taxPayer/delete
        [Route("DeleteTaxPayer/{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteTaxPayer(int id)
        {
            var taxPayer = await _context.TaxPayer.FindAsync(id);

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
