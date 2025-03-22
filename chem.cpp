#include <bits/stdc++.h>
using namespace std;
string elems2[131] = {
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
    , "q" /* quark */, "R" /* roentgen */};
string norelems[104] = {
    "He", "Li", "Be", "Ne",
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
    "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
};
string fullElementNames[104] = {
    "Helium", "Lithium", "Beryllium", "Neon",
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
    "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"
};

string upperelems[104] = { /* after 104, switch to one letter mode */
    "HE", "LI", "BE",  "NE",
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
    "RG", "CN", "NH", "FL", "MC", "LV", "TS", "OG"
};

char upperchars[26] = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
                      'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T','U', 'V',
                      'W', 'X', 'Y', 'Z' };
char norchars[26] = { 'a', 'b', 'C', 'D', 'e', 'F', 'g', 'H', 'I', 'J', 'K',
                      'l', 'm', 'N', 'O', 'P', 'q', 'R', 'S', 't', 'U', 'V',
                      'W', 'X', 'Y', 'Z' };
string fullcharnames[26] = {"Alpha Particle", "Beta particle", "Carbon", "Deuterium", "electron", "Fluorine", "Gluon", "Hydrogen"
, "Iodine", "Joule", "Potassium", "Lepton", "Mass", "Nitrogen", "Oxygen", "Phosphorus", "Quark", "Roentgen", "Sulfer",
"Tau", "Uranium", "Vanadium", "Tungsten", "X boson", "Yttrium", "Z boson"};
void findelem(string msg) { // msg: "Auti"
    int digitsleft = msg.length();
    int digitsdone = 0;
    string elems = "";
    string exp = "(";
    while (digitsleft > 0) {
            string sum = msg.substr(digitsdone, 2);
            // cout << "sum = " << sum << "\n";
            bool found2 = false;
            for (int i = 0; i < 104; i++) {
                if (sum == upperelems[i]) {
                    elems += norelems[i];
                    if (digitsleft != 2) {
                        exp += fullElementNames[i];
                        exp += ", ";
                    }else {
                        exp += fullElementNames[i];
                    }
                    found2 = true;
                    digitsdone += 2;
                    digitsleft -= 2;
                }
            }

            if(found2) {
                continue;
            }

            for (int i = 0; i < 26; i++) {
                if (msg[digitsdone] == upperchars[i]) { // "T"
                    elems += norchars[i];
                    if (digitsleft != 1) {
                        exp += fullcharnames[i];
                        exp += ", ";
                    }else {
                        exp += fullcharnames[i];
                    }

                    if (norchars[i] == 'e') {
                        elems += "-";
                    }
                    digitsleft --;
                    digitsdone ++;
                }
            }
        }

    exp += ")";
    cout << elems << " " << exp;
}

string toupper(string msg) {
    for (int i = 0; i < msg.length(); i++) {
        if (msg[i] >= 'a' && msg[i] <= 'z') {
            msg[i] -= 32;
        }
    }
    return msg;
}


int main() {
    cout << "Welcome to CHem SPeLLEr! Enter a word (case insensitive):  ";
    string msg;
    cin >> msg;
    // for (int i = 0; i < msg.length(); i++) {
    //     if (!(((msg[i] > 'a') && (msg[i] < 'z')) || ((msg[i] > 'A') && (msg[i] < 'Z')))){
    //         cout << "You can not have spaces or special symbols. Only letters are allowed.";
    //         return 0;
    //     }
    // }
    cout << "Your name spelt with elements: ";
    findelem(toupper(msg));
}
