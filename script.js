window.onload = function () {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  const copyBtn = document.getElementById("copyBtn");
  const infoBox = document.getElementById("element-info");
  const infoContent = document.getElementById("info-content");
  const closeInfo = document.getElementById("close-info");

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

  const elementDescriptions = {
    "Hydrogen": "The lightest and most abundant element in the universe.",
    "Helium": "A noble gas used in balloons and cryogenics.",
    "Lithium": "A soft metal used in batteries.",
    "Carbon": "The basis of all known life.",
    "Nitrogen": "78% of the Earth's atmosphere.",
    "Oxygen": "Vital for respiration and combustion.",
    "Electron": "A negatively charged lepton orbiting the nucleus.",
    "Quark": "A fundamental particle inside protons and neutrons.",
    "Gluon": "The force carrier that binds quarks together.",
    "Lepton": "A class of fundamental particles including electrons.",
    "Tau": "A heavy cousin of the electron.",
    "Alpha Particle": "A helium nucleus emitted in radioactive decay.",
    "Beta particle": "An electron or positron emitted from radioactive decay.",
    "Deuterium": "An isotope of hydrogen with one proton and one neutron.",
    "Mass": "The measure of matter in an object.",
    "Joule": "A unit of energy in the metric system.",
    "Roentgen": "A legacy unit of radiation exposure.",
    "X boson": "A hypothetical boson not yet observed.",
    "Z boson": "Mediates the weak nuclear force with the W boson."
  };

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
          const label = fullElementNames[j];
          span.className = `element ${getColorClass(label)}`;
          span.innerText = norelems[j];
          span.setAttribute('data-tooltip', label);
          span.addEventListener("click", () => showInfo(label));
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
          span.addEventListener("click", () => showInfo(label));
          output.appendChild(span);
          break;
        }
      }
      i++;
    }
  }

  function showInfo(label) {
    const desc = elementDescriptions[label] || "No additional information available.";
    infoContent.innerHTML = `<h3>${label}</h3><p>${desc}</p>`;
    infoBox.style.display = "block";
  }

  closeInfo.addEventListener("click", () => {
    infoBox.style.display = "none";
  });

  input.addEventListener("input", convert);

  copyBtn.addEventListener("click", () => {
    const text = output.innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    }).catch(() => {
      alert("Failed to copy.");
    });
  });
};
