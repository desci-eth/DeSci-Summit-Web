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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
              <Typography variant="h6">DeSci World Hackerhouse: Feb 19 - March 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>DeSci HackerHouse</p>
                <p>Time: TBA</p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography variant="h6">SciOS: Feb 26 - 29th</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
              <Tabs value={tabIndex} onChange={handleChange} aria-label="SciOS workshops">
  <Tab label={<div><div><span style={{fontWeight: 'bold'}}>Feb 26: 9am-4pm</span></div><div>Applications, Outputs, and Community Showcases</div></div>} />
  <Tab label={<div><div><span style={{fontWeight: 'bold'}}>Feb 27: 9am-12pm</span></div><div>DID and Permissions Workshops</div></div>} />
  <Tab label={<div><div><span style={{fontWeight: 'bold'}}>Feb 27: 1pm-4pm</span></div><div>Compute over Data Workshops</div></div>} />
  <Tab label={<div><div><span style={{fontWeight: 'bold'}}>Feb 28: 9am-12pm</span></div><div>Funding and Incentive Design Workshops</div></div>} />
  <Tab label={<div><div><span style={{fontWeight: 'bold'}}>Feb 28: 1pm-4pm</span></div><div>Open State Data Networks Workshops</div></div>} />
  <Tab label={<div><div><span style={{fontWeight: 'bold'}}>Feb 29: 9am-12pm</span></div><div>FAIR data and Semantic Publishing Workshops</div></div>} />
  <Tab label={<div><div><span style={{fontWeight: 'bold'}}>Feb 29: 1pm-4pm</span></div><div>AI in Open Science Workshops</div></div>} />
  <Tab label={<div><div><span style={{fontWeight: 'bold'}}>Feb 29: 4pm-7pm</span></div><div>Drinks on us</div></div>} />
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
<Accordion>
  <AccordionSummary>
    <Typography variant="h6">BUIDLHub: Feb 26</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <div>
      <p>BUIDLHub</p>
      <p>Time: 3-5pm</p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>Time</th>
            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>Event</th>
            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>Speaker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>3:00</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Opening</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Jelani</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>3:15</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Funding & Incentives</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Raymond Cheng</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>3:40</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Ownership & Communities</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Lisa Wocken</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>4:05</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Data Management & Compute</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Levi Rybalov</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>4:30</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Publishing & Access</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Chris Hill</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>4:55</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Closing</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Shady</td>
          </tr>
        </tbody>
      </table>
    </div>
  </AccordionDetails>
</Accordion>

          <Accordion>
            <AccordionSummary>
              <Typography variant="h6">AuraNova: Feb 27</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>AuraNova</p>
                <p>Time: 2pm-8pm</p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography variant="h6">AuraNova Afterparty: Feb 28</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>AuraNova Afterparty</p>
                <p>Time: 6pm-9pm</p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography variant="h6">University of Colorado: March 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>CU</p>
                <p>Time: 9am-5pm</p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography variant="h6">Openinfo.House: March 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>Openinfo.House</p>
                <p>Time: 5:30-6pm</p>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <Brought/>
      <Register/>
      <Footer/>
    </>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <Typography component="div" sx={{ p: 3 }}>
          {children}
        </Typography>
      )}
    </div>
  );
}
