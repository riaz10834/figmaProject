import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
function FilterSection() {
  const [selected, setSelected] = useState("New Arrivals");
  const [open, setOpen] = useState(false);
  const [filt, setFilt] = useState(false);

  const options = [
    "New Arrivals",
    "Trending Now",
    "Bestseller",
    "Rating - Highest",
    "Rating - Lowest",
    "Price Low to High",
    "Price High to Low",
  ];

  return (
    <div className="w-full relative px-3 sm:px-5 mt-5">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
        <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5">
          <span className="text-sm sm:text-base">Filter</span>
          <img
            src="./filt/filt (3).png"
            onClick={() => setFilt(!filt)}
            alt=""
            className="w-[22px] sm:w-[26px] h-[9px] cursor-pointer"
          />
          <img src="./filt/ln.png" alt="" className="h-[30px] sm:h-[40px]" />
          <img
            src="./filt/filt (2).png"
            alt=""
            className="w-[18px] sm:w-[20px] h-[18px] cursor-pointer"
          />
          <img
            src="./filt/filt (1).png"
            alt=""
            className="w-[20px] sm:w-[23px] h-[16px] sm:h-[18px] cursor-pointer"
          />
        </ul>

        <ul className="flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-6">
          <div className="flex gap-1 sm:gap-2 text-[#008FAB] items-center">
            <span className="font-semibold text-sm sm:text-base">657</span>
            <p className="text-sm sm:text-base">products</p>
          </div>

          <img src="./filt/ln.png" alt="" className="h-[30px] sm:h-[40px]" />

          <div className="relative flex items-center gap-2  sm:gap-3 md:w-[400px] w-[300px] sm:w-[350px]">
            <span className=" sm:block w-[120px] text-sm sm:text-base">
              Sort by:
            </span>
            <div
              onClick={() => setOpen(!open)}
              className="flex justify-between  sm:justify-center gap-2 items-center px-3 py-2 bg-gray-100 rounded-lg border border-gray-300 cursor-pointer w-[550px]"
            >
              <span className="font-medium  text-sm sm:text-base">
                {selected}
              </span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {open && (
              <ul className="absolute top-[110%] left-0 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                {options.map((opt) => (
                  <li
                    key={opt}
                    onClick={() => {
                      setSelected(opt);
                      setOpen(false);
                    }}
                    className={`p-2 text-sm sm:text-base cursor-pointer  hover:bg-gray-100 ${
                      selected === opt ? "font-bold text-black" : "opacity-70"
                    }`}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </ul>
      </div>
      {filt && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setFilt(false)}
          ></div>

          <div
            className="absolute top-[150px] p-3 bg-white sm:w-[350px] md:w-[350px] lg:w-[350px] 
            rounded-lg left-[250px] z-50 -translate-x-1/2 -translate-y-1/2 "
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <span className="font-bold pl-4">Availability</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="stock"
                    className="flex gap-3 pl-4 mt-[-20px] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="accent-[blue]"
                      name=""
                      id="stock"
                    />
                    <span>In Stock</span>
                  </label>
                  <label
                    htmlFor="outstock"
                    className="flex gap-3 pl-4 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="accent-[blue]"
                      name=""
                      id="outstock"
                    />
                    <span>Out of Stock</span>
                  </label>
                  <img src="./shop/al.png" alt="" />
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <span className="font-bold pl-4">Category</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-col mt-[-10px] gap-3">
                  {" "}
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Ankle Wear
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Bangles
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Bracelets
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Brooches
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Chains
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Ear Cuffs
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Earrings
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Finger Rings
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Neckwear
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Nose Pins
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Pendants
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Watch Jewelry
                  </label>
                  <img src="./shop/al.png" alt="" />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span">
                  <span className="font-bold pl-4">Metals</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-col gap-3">
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Rose Gold
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Yellow Gold
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    White Gold
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Platinum
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Sterling Silver
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Titanium
                  </label>
                  <img src="./shop/al.png" alt="" />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span">
                  <span className="font-bold pl-4">Stones</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-col gap-3">
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Citrine
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Diamond
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Emerald
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Moonstone
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Onyx
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Perl
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Ruby
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Sapphire
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Turquoise
                  </label>
                  <img src="./shop/al.png" alt="" />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span">
                  <span className="font-bold pl-4">Gender</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-col gap-3">
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Male
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Female
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Unisex
                  </label>
                  <img src="./shop/al.png" alt="" />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span">
                  <span className="font-bold pl-4">Collections</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-col gap-3">
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Artisan Echoes
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Ethereal Essence
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Festivals of Diamond
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Gemstone Journey
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Joy of Dressing
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Pretty in Pink
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Radiant Reflections
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Tales of Mystique
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Timeless Elegance
                  </label>
                  <label className="flex pl-4 items-center gap-2">
                    <input type="checkbox" className="accent-[blue]" />
                    Vintage Vibes
                  </label>
                  <img src="./shop/al.png" alt="" />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span">
                  <span className="font-bold pl-4">Price Range</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center w-[279px] justify-between">
                    <div className="w-[123px] flex justify-between items-center px-3 h-[50px] border-[1px] border-balck">
                      <p className="text-[20px]">
                        $<span className="text-[12px]">Min</span>
                      </p>
                      <p className="text-[#008FAB] text-[20px] underline decoration-1 decoration-gray-300 underline-offset-4">
                        1,000
                      </p>
                    </div>{" "}
                    <span>to</span>
                    <div className="w-[123px] flex justify-between items-center px-3 h-[50px] border-[1px] border-balck">
                      <p className="text-[20px]">
                        $<span className="text-[12px]">Min</span>
                      </p>
                      <p className="text-[#008FAB] text-[20px] underline decoration-1 decoration-gray-300 underline-offset-4">
                        1,000
                      </p>
                    </div>{" "}
                  </div>
                  <img src="./shop/al.png" alt="" />
                  <button className="bg-[#008FAB] text-white py-2 rounded">
                    View 657 Products
                  </button>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </>
      )}
    </div>
  );
}

export default FilterSection;
