using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaxPayerApi.Models
{
    public class TaxPayer
    {
        [Key]
        public int TaxPayerId { get; set; } // Primary Key

        [Required]
        public string TaxpayerType { get; set; } // 'individual' | 'company'

        [Required]
        public long Tin { get; set; } // Tax Identification Number

        [Required]
        public string AssesmentType { get; set; } // 'hisamezgeb' | 'kurtGiber'

        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }

        [StringLength(50)]
        public string MiddleName { get; set; }

        [Required]
        [StringLength(50)]
        public string LastName { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public string Gender { get; set; } // 'male' | 'female'

        [Required]
        [StringLength(100)]
        public string Citizen { get; set; }

        [Required]
        public DateTime RegistrationDate { get; set; }

        [Required]
        [StringLength(100)]
        public string Category { get; set; }

        [Required]
        [StringLength(50)]
        public string Status { get; set; }

        [Required]
        [StringLength(100)]
        public string Region { get; set; }

        [Required]
        [StringLength(100)]
        public string City { get; set; }

        [Required]
        [StringLength(50)]
        public string Woreda { get; set; }

        [Required]
        [StringLength(50)]
        public string Kebele { get; set; }
    }
}
