using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaxPayerApi.Models
{
    public class TaxPayer
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int TaxPayerId { get; set; } // Primary Key

        [Required]
        [StringLength(50)] // Adjust the length according to your needs
        public string TaxpayerType { get; set; } // 'individual' | 'company'

        [Required]
        public int Tin { get; set; } // Tax Identification Number

        [Required]
        [StringLength(50)] // Adjust the length according to your needs
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
        [StringLength(10)] // For gender, if it's 'male' or 'female', 10 should be enough
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
