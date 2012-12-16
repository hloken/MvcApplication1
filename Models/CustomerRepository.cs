using System.Collections.Generic;
using System.Linq;

namespace MvcApplication1.Models
{
    public class CustomerRepository
    {
        public static IEnumerable<Customer> GetCustomers()
        {
            var myDb = new CustomerDBEntities();

            var query = from cust in myDb.Customers
                        select cust;

            return query.ToList();
        }

        public static void InsertCustomer(Customer cust)
        {
            var myDb = new CustomerDBEntities();
            myDb.Customers.Add(cust);
            myDb.SaveChanges();
        }

    }
}