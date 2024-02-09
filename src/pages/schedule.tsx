import React from 'react';
import Navbar from "../components/Navbar/navbar";
import Sbanner from "../assets/png/sbanner.png";
import Triangle from "../assets/svg/Triangle.svg";
import Dot from "../assets/svg/dot.svg";
import Bancor from "../assets/png/bancor.png";
import Brought from "../components/schedule/brought";
import Register from "../components/home/register";
import Footer from "../components/Footer/footer";
import Timeout from "../components/schedule/timeout";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export default function Schedule() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="grid md:grid-cols-2 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto md:border-b-[1px] lg:border-[#9D84FF] pb-5">
          <div className="mt-5 md:mt-14">
            <p className="font-syne font-[400] text-[70px] md:text-[80px] lg:text-[90px] xl:text-[96px] text-[#54FF7A]">Schedule</p>
            <p className="flex gap-3 text font-[400] text-white text-[20px] md:text-[30px] lg:text-[32px]">DeSciSummit2024 <img src={Triangle} alt="" /><img src={Dot} alt="" /></p>
            <p className="hidden md:block font-syne font-[400] text-[35px] lg:text-[45px] xl:text-[56px] text-white mt-4">
              February 25th - March 1st, 2024
            </p>
            <div className="md:flex gap-5 mt-5">
              {/* Apply to Speak and Sponsorships Links */}
            </div>
          </div>
          <div className="hidden md:block">
            <img src={Sbanner} alt="" />
          </div>
        </div>
        <img src={Bancor} alt="" className="absolute top-0 right-0 block md:hidden" />
      </div>

      <Timeout/>

      {/* Schedule Information */}
      <div className="mt-8 px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
        <div className="overflow-x-auto">
          <Accordion>
            <AccordionSummary>
              <Typography variant="h6">Feb 26 - 29th: SciOS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Typography variant="body1">Time: 9am-5pm every day</Typography>
                <Tabs value={tabIndex} onChange={handleChange} aria-label="SciOS workshops">
                  <Tab label="Applications, Outputs, and Community Showcases" />
                  <Tab label="DID and Permissions Workshops" />
                  <Tab label="Compute over Data Workshops" />
                  <Tab label="Funding and Incentive Design Workshops" />
                  <Tab label="Open State Data Networks Workshops" />
                  <Tab label="FAIR data and Semantic Publishing Workshops" />
                  <Tab label="AI in Open Science Workshops" />
                  <Tab label="Drinks on us" />
                </Tabs>
                <TabPanel value={tabIndex} index={0}>
                  <p>Details for Applications, Outputs, and Community Showcases</p>
                </TabPanel>
                <TabPanel value={tabIndex} index={1}>
                  <p>Details for DID and Permissions Workshops</p>
                </TabPanel>
                <TabPanel value={tabIndex} index={2}>
                  <p>Details for Compute over Data Workshops</p>
                </TabPanel>
                <TabPanel value={tabIndex} index={3}>
                  <p>Details for Funding and Incentive Design Workshops</p>
                </TabPanel>
                <TabPanel value={tabIndex} index={4}>
                  <p>Details for Open State Data Networks Workshops</p>
                </TabPanel>
                <TabPanel value={tabIndex} index={5}>
                  <p>Details for FAIR data and Semantic Publishing Workshops</p>
                </TabPanel>
                <TabPanel value={tabIndex} index={6}>
                  <p>Details for AI in Open Science Workshops</p>
                </TabPanel>
                <TabPanel value={tabIndex} index={7}>
                  <p>Details for Drinks on us</p>
                </TabPanel>
              </div>
            </AccordionDetails>
          </Accordion>
          {/* Add more Accordion components for other days/events */}
        </div>
      </div>

      <Brought/>
      <Register/>
      <Footer/>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography component="div" sx={{ p: 3 }}>
          {children}
        </Typography>
      )}
    </div>
  );
}
