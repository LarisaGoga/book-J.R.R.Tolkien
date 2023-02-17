const bookName = "The Lord of the Rings";

const listOfBookVolumes = [
  "The Fellowship of the Ring",
  "The Two Towers",
  "The Return of the King",
];

const listOfBookVolumesWithComa = listOfBookVolumes.map((book) => ` "${book}"`);

const quantityOfBookVolumes = listOfBookVolumes.length;

const elf = {
  name: "Legolas",
  weapon: "arrows",
};

const dwarf = {
  name: "Gimli",
  weapon: "axe",
};

const human = {
  name: "Boromir",
  weapon: "sword",
};

document.body.innerHTML = `
    <h1>J.R.R.Tolkien Story</h1>
    <p>
      "${bookName}" is a single novel that was originally published in
      ${quantityOfBookVolumes} volumes. The ${quantityOfBookVolumes} volumes are: ${listOfBookVolumesWithComa}.
    </p>
    <p>
      During the Battle of Helm's Deep, the Rohirrim are greatly outnumbered by
      the army of orcs and Uruk-hai. The human warriors fight valiantly with
      swords, shields, and spears, while the elf ${elf.name} shoots ${elf.weapon} with his
      deadly accuracy. The dwarf ${dwarf.name} wields his ${dwarf.weapon} with ferocity, determined
      to defend his people from the enemy hordes.
    </p>
    <p>
      ${human.name}, the man from Gondor, fights bravely with ${human.weapon} and shield,
      defending his people and his city. On the other side of the battle, the
      Nazgul swoop down from the skies on their winged beasts, wielding their
      scimitars with deadly precision. The orcs are numerous and crude, but they
      fight with a ferocity that is hard to match.
    </p>
    <p>
      During the final battle for the fate of Middle Earth, the armies of the
      free peoples face off against the legions of orcs and Uruk-hai under the
      command of the dark lord Sauron. The elf ${elf.name} shoots ${elf.weapon} with deadly
      precision, while the dwarf ${dwarf.name} wields his ${dwarf.weapon} with fury. The human
      Aragorn leads the charge, wielding his sword and inspiring his soldiers
      with his courage and leadership. Together, the races of Middle Earth fight
      against the darkness, with the fate of all hanging in the balance.
    </p>
    `;
