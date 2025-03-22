window.onload = function () {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  const copyBtn = document.getElementById("copyBtn");
  const shareBtn = document.getElementById("shareBtn");

  const norelems = ["He", "Li", "Be", "Ne", "Na", "Mg", "Al", "Si", "Cl", "Ar", "Ca",
    "Sc", "Ti", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br",
    "Kr", "Rb", "Sr", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
    "Sb", "Te", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb",
    "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "Re", "Os", "Ir", "Pt", "Au", "Hg",
    "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "Np", "Pu", "Am",
    "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt",
    "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"];

  const fullElementNames = ["Helium", "Lithium", "Beryllium", "Neon", "Sodium", "Magnesium", "Aluminium",
    "Silicon", "Chlorine", "Argon", "Calcium", "Scandium", "Titanium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel",
    "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium",
    "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium",
    "Indium", "Tin", "Antimony", "Tellurium", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium",
    "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium",
    "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold",
    "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium",
    "Thorium", "Protactinium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium",
    "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium",
    "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium",
    "Livermorium", "Tennessine", "Oganesson"];

  const upperelems = norelems.map(e => e.toUpperCase());
  const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  const norchars = ['a', 'b', 'C', 'D', 'e', 'F', 'g', 'H', 'I', 'J', 'K',
    'l', 'm', 'N', 'O', 'P', 'q', 'R', 'S', 't', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const fullcharnames = ["Alpha Particle", "Beta particle", "Carbon", "Deuterium", "Electron", "Fluorine", "Gluon", "Hydrogen",
    "Iodine", "Joule", "Potassium", "Lepton", "Mass", "Nitrogen", "Oxygen", "Phosphorus", "Quark", "Roentgen", "Sulfur",
    "Tau", "Uranium", "Vanadium", "Tungsten", "X boson", "Yttrium", "Z boson"];

  function getColorClass(name) {
    const nobleGases = ["Helium", "Neon", "Argon", "Krypton", "Xenon", "Radon", "Oganesson"];
    const halogens = ["Fluorine", "Chlorine", "Bromine", "Iodine", "Astatine", "Tennessine"];
    const metalloids = ["Boron", "Silicon", "Arsenic", "Tellurium", "Germanium", "Antimony", "Polonium"];
    const lanthanides = ["Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium",
      "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium"];
    const actinides = ["Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium",
      "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium"];
    const nonmetals = ["Hydrogen", "Oxygen", "Carbon", "Nitrogen", "Sulfur", "Phosphorus"];

    const quantum = ["Quark", "Gluon"];
    const lepton = ["Electron", "Lepton", "Tau"];
    const energy = ["Joule"];
    const masslike = ["Mass", "Deuterium"];
    const radiation = ["Roentgen"];
    const boson = ["X boson", "Z boson"];
    const exotic = ["Alpha Particle", "Beta particle"];

    if (nobleGases.includes(name)) return 'noble-gas';
    if (halogens.includes(name)) return 'halogen';
    if (metalloids.includes(name)) return 'metalloid';
    if (lanthanides.includes(name)) return 'lanthanide';
    if (actinides.includes(name)) return 'actinide';
    if (nonmetals.includes(name)) return 'nonmetal';

    if (quantum.includes(name)) return 'quantum';
    if (lepton.includes(name)) return 'lepton';
    if (energy.includes(name)) return 'energy';
    if (masslike.includes(name)) return 'masslike';
    if (radiation.includes(name)) return 'radiation';
    if (boson.includes(name)) return 'boson';
    if (exotic.includes(name)) return 'exotic';

    return 'metal'; // default fallback
  }

  function convert() {
    const value = input.value.toUpperCase();
    output.innerHTML = "";
    let i = 0;

    while (i < value.length) {
      let matched = false;
      const two = value.substr(i, 2);
      for (let j = 0; j < upperelems.length; j++) {
        if (two === upperelems[j]) {
          const span = document.createElement("span");
          span.className = `element ${getColorClass(fullElementNames[j])}`;
          span.innerText = norelems[j];
          span.setAttribute('data-tooltip', fullElementNames[j]);
          output.appendChild(span);
          i += 2;
          matched = true;
          break;
        }
      }

      if (matched) continue;

      const one = value[i];
      for (let j = 0; j < upperchars.length; j++) {
        if (one === upperchars[j]) {
          const span = document.createElement("span");
          const label = fullcharnames[j];
          span.className = `element ${getColorClass(label)}`;
          span.innerText = norchars[j];
          span.setAttribute('data-tooltip', label);
          if (norchars[j] === 'e') span.innerText += '-';
          output.appendChild(span);
          break;
        }
      }

      i++;
    }
  }

  input.addEventListener("input", convert);

  copyBtn.addEventListener("click", () => {
    const text = output.innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    }).catch(() => {
      alert("Failed to copy.");
    });
  });

  shareBtn.addEventListener("click", () => {
    const word = input.value.trim();
    if (word === "") {
      alert("Type something first!");
      return;
    }
    const url = `${window.location.origin}${window.location.pathname}?word=${encodeURIComponent(word)}`;
    navigator.clipboard.writeText(url).then(() => {
      alert("Shareable link copied!");
    }).catch(() => {
      alert("Failed to copy shareable link.");
    });
  });

  // Load from URL if present
  const params = new URLSearchParams(window.location.search);
  if (params.has("word")) {
    const word = params.get("word");
    input.value = word;
    convert();
    document.title = `Chemspeller – "${word}"`;
  }
};
