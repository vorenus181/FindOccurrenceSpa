using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using FindOccurrences.Model;
using Microsoft.AspNet.Mvc;

namespace FindOccurrences.Controllers
{
    [Route("api/[controller]")]
    public class SentenceController : Controller
    {
        [HttpPost]
        public IEnumerable<Occurrence> Post([FromBody] Sentence sentence)
        {
            var occurrences = new List<Occurrence>();

            if (string.IsNullOrEmpty(sentence?.Text))
                return occurrences;

            var regex = new Regex("[^a-zA-Z0-9 -]");

            var preparedSentence = regex.Replace(sentence.Text, " ");

            var strings = preparedSentence.Trim().Split(' ');

            foreach (var word in strings)
            {
                if (string.IsNullOrEmpty(word)
                    || occurrences.Any(a => word.Equals(a.Text, StringComparison.CurrentCultureIgnoreCase))) continue;

                var count = Regex.Matches(preparedSentence, $"\\b{word}\\b", RegexOptions.IgnoreCase).Count;

                occurrences.Add(new Occurrence { Text = word, Number = count });
            }

            return occurrences.OrderByDescending(a => a.Number);
        }
    }
}
