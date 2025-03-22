const elems2 = [ 
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne",
    "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
    "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
    "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr",
    "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
    "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd",
    "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb",
    "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg",
    "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th",
    "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm",
    "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds",
    "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og","a", "b", "e-"
    , "g" /* gluon */, "l" /* lepton */, "J" /* Joules */, "X" /*X BOSON */, "Z" /*Z BOSON*/, "D" /* deuterium */, "m" /* mass */
    , "q" /* quark */, "R" /* roentgen */ ];
const norelems = ["He", "Li", "Be", "Ne",
    "Na", "Mg", "Al", "Si", "Cl", "Ar", "Ca",
    "Sc", "Ti", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
    "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Zr",
    "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
    "Sb", "Te", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd",
    "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb",
    "Lu", "Hf", "Ta", "Re", "Os", "Ir", "Pt", "Au", "Hg",
    "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th",
    "Pa", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm",
    "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds",
    "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og" ];
const fullElementNames = [ "Helium", "Lithium", "Beryllium", "Neon",
    "Sodium", "Magnesium", "Aluminium", "Silicon", "Chlorine", "Argon", "Calcium",
    "Scandium", "Titanium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc",
    "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Zirconium",
    "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin",
    "Antimony", "Tellurium", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium",
    "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium",
    "Lutetium", "Hafnium", "Tantalum", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury",
    "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium",
    "Protactinium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium",
    "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium",
    "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"];
const upperelems = [ "HE", "LI", "BE",  "NE",
    "NA", "MG", "AL", "SI", "CL", "AR", "CA",
    "SC", "TI", "CR", "MN", "FE", "CO", "NI", "CU", "ZN",
    "GA", "GE", "AS", "SE", "BR", "KR", "RB", "SR", "ZR",
    "NB", "MO", "TC", "RU", "RH", "PD", "AG", "CD", "IN", "SN",
    "SB", "TE", "XE", "CS", "BA", "LA", "CE", "PR", "ND",
    "PM", "SM", "EU", "GD", "TB", "DY", "HO", "ER", "TM", "YB",
    "LU", "HF", "TA", "RE", "OS", "IR", "PT", "AU", "HG",
    "TL", "PB", "BI", "PO", "AT", "RN", "FR", "RA", "AC", "TH",
    "PA", "NP", "PU", "AM", "CM", "BK", "CF", "ES", "FM",
    "MD", "NO", "LR", "RF", "DB", "SG", "BH", "HS", "MT", "DS",
    "RG", "CN", "NH", "FL", "MC", "LV", "TS", "OG"];
const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const norchars = [ 'a', 'b', 'C', 'D', 'e', 'F', 'g', 'H', 'I', 'J', 'K',
                   'l', 'm', 'N', 'O', 'P', 'q', 'R', 'S','t','U', 'V',
                   'W', 'X', 'Y', 'Z' ];
const fullcharnames = ["Alpha Particle", "Beta particle", "Carbon", "Deuterium", "electron", "Fluorine", "Gluon", "Hydrogen"
, "Iodine", "Joule", "Potassium", "Lepton", "Mass", "Nitrogen", "Oxygen", "Phosphorus", "Quark", "Roentgen", "Sulfer",
"Tau", "Uranium", "Vanadium", "Tungsten", "X boson", "Yttrium", "Z boson"];

function convert() {
  const input = document.getElementById("input").value.toUpperCase();
  let elems = "";
  let exp = "(";
  let i = 0;

  while (i < input.length) {
    let found = false;
    const pair = input.substr(i, 2);
    for (let j = 0; j < upperelems.length; j++) {
      if (pair === upperelems[j]) {
        elems += norelems[j];
        exp += fullElementNames[j] + (i + 2 < input.length ? ", " : "");
        i += 2;
        found = true;
        break;
      }
    }

    if (found) continue;

    const single = input[i];
    for (let j = 0; j < upperchars.length; j++) {
      if (single === upperchars[j]) {
        elems += norchars[j];
        exp += fullcharnames[j] + (i + 1 < input.length ? ", " : "");
        if (norchars[j] === 'e') elems += '-';
        i += 1;
        break;
      }
    }
  }

  exp += ")";
  document.getElementById("output").innerText = `${elems} ${exp}`;
}
