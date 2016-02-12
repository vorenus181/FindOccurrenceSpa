using System;
using System.Collections.Generic;
using FindOccurrences.Model;

namespace FindOccurrences.Tests.WebApiTests.Occurrences
{
    public class OccurrenceEqualityComparer : IEqualityComparer<Occurrence>
    {
        public bool Equals(Occurrence x, Occurrence y)
        {
            return string.Equals(x.Text, y.Text, StringComparison.CurrentCultureIgnoreCase) && x.Number == y.Number;
        }

        public int GetHashCode(Occurrence obj)
        {
            return obj.GetHashCode();
        }
    }
}