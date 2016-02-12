using System.Collections.Generic;
using FindOccurrences.Controllers;
using FindOccurrences.Model;
using Xunit;

namespace FindOccurrences.Tests.WebApiTests.Occurrences
{
    public class SentenceControllerTests
    {
        public IEnumerable<Occurrence> GetSuccessOccurrences()
        {
            return new List<Occurrence>
            {
                new Occurrence { Text = "this", Number = 2},
                new Occurrence { Text = "is", Number = 2},
                new Occurrence { Text = "a", Number = 1},
                new Occurrence { Text = "statement", Number = 1},
                new Occurrence { Text = "and", Number = 1},
                new Occurrence { Text = "so", Number = 1}
            };
        }

        [Fact]
        public void PostSuccessTest()
        {
            var sentenceController = new SentenceController();

            var resultOccurrences = sentenceController.Post(new Sentence { Text = "This is a statement, and so is this." });

            Assert.Equal(GetSuccessOccurrences(), resultOccurrences, new OccurrenceEqualityComparer());
        }

        [Fact]
        public void PostFailureTest()
        {
            var sentenceController = new SentenceController();

            var resultOccurrences = sentenceController.Post(new Sentence { Text = "This is a statement, and so is this. Let me end it!" });

            Assert.NotEqual(GetSuccessOccurrences(), resultOccurrences, new OccurrenceEqualityComparer());
        }
    }
}
