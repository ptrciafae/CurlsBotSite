const other = require('./other');


test('should detect isohexadecane', () => {
  var list = "Isopropyl Palmitate, Isohexadecane, Isododecane, Sclerocarya Birrea Seed Oil, Tocopheryl Acetate, Sclerocarya Birrea Callus Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Passiflora Edulis Seed Oil, Euterpe Oleracea Fruit Oil, Oryza Sativa (Rice) Bran Oil, Moringa Oleifera Seed Oil, Mauritia Flexuosa Fruit Oil, Mauritia Flexuosa Fruit Oil, Citrus Reticulata (Mandarin Red) Peel Oil, Citrus Sinensis (Orange) Peel Oil, Lavandula Angustifolia (Lavender) Flower Oil, Rosmarinus Officinalis (Rosemary) Leaf Oil, Cedrus Atlantica Wood Oil, Helianthus Annuus (Sunflower) Seed Oil, Caprylic/Capric Triglyceride, Limonene.";
  var result = ["isohexadecane"];
  expect(other(list)).toEqual(result);
});


