const alcohol = require('./alcohol');


test('should detect drying alcohols', () => {
  var list = "Isobutane, Propane, SD Alcohol 40-B (Alcohol Denat.), Aluminum Starch Octenylsuccinate, Citrus Grandis (Grapefruit) Fruit Extract*, Citrus Tangerina (Tangerine) Peel Extract*, Butane, Isopropyl Myristate, Silica, Fragrance, Amyl Cinnamal, Benzyl Alcohol, Butylphenyl Methylpropional, Citronellol, Geraniol, Hexyl Cinnamal, Limonene, Linalool., denatured alcohol (sd alcohol 40)";
  var result =  {"bad": ["sd alcohol 40-b (alcohol denat)", "denatured alcohol (sd alcohol 40)"], "caution": [], "good": ["benzyl alcohol"], "unknown": []};
  expect(alcohol(list)).toEqual(result);
});


test('should allow OK alcohols', () => {
  var list = "Water (Aqua), Cetearyl Alcohol, PPG-3 Benzyl Ether Ethylhexanoate, Quaternium-91, Glycerin, Distearyldimonium Chloride, Polyquaternium-72, Mangifera Indica (Mango) Seed Butter, Gardenia Taitensis Flower Extract, Behentrimonium Chloride, Myristyl Myristate, Hydroxyethylcellulose, Fragrance (Parfum), Phenoxyethanol, Ethylhexylglycerin.";
  var result =  {"bad": [], "caution": [], "good": ["cetearyl alcohol"], "unknown": []};
  expect(alcohol(list)).toEqual(result);
});