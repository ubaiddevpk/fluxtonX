import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { TiArrowForward } from "react-icons/ti";
import MainBtn from "../Buttons/MainBtn";
import { useNavigate } from "react-router-dom";

export default function AboutTabs() {
  const [value, setValue] = React.useState("1");
  const [orientation, setOrientation] = React.useState("horizontal");
  const navigate = useNavigate();

  // Monitor window width and update tab orientation accordingly
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setOrientation("vertical");
      } else {
        setOrientation("horizontal");
      }
    };

    // Set the initial orientation based on the current window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            orientation={orientation}
          >
            <Tab className="!font-alegreya" label="Our Mission" value="1" />
            <Tab className="!font-alegreya" label="Our Vision" value="2" />
            <Tab className="!font-alegreya" label="Our Value" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="font-alegreya max1100:text-[1rem]">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test.
          </div>
          <div className="font-alegreya mb-4 flex flex-col gap-y-2 py-2">
            <div className="flex items-center gap-x-2">
              <TiArrowForward className="text-sec text-2xl" />
              <div className=" max1100:text-[1rem]">
                Document the short and long term goals.
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <TiArrowForward className="text-sec text-2xl" />
              <div className=" max1100:text-[1rem]">Your product vision</div>
            </div>
          </div>
          <MainBtn
            title={"Know More About Us"}
            onClick={() => {
              navigate("/about-us");
            }}
          />
        </TabPanel>
        <TabPanel value="2">
          <div className="font-alegreya max1100:text-[1rem]">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test.
          </div>
          <div className="font-alegreya mb-4 flex flex-col gap-y-2 py-2">
            <div className="flex items-center gap-x-2">
              <TiArrowForward className="text-sec text-2xl" />
              <div className="">Document the short and long term goals.</div>
            </div>
            <div className="flex items-center gap-x-2">
              <TiArrowForward className="text-sec text-2xl" />
              <div className="">Your product vision</div>
            </div>
          </div>
          <MainBtn
            title={"Know More About Us"}
            onClick={() => {
              navigate("/about-us");
            }}
          />
        </TabPanel>
        <TabPanel value="3">
          <div className="font-alegreya max1100:text-[1rem]">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test.
          </div>
          <div className="font-alegreya mb-4 flex flex-col gap-y-2 py-2">
            <div className="flex items-center gap-x-2">
              <TiArrowForward className="text-sec text-2xl" />
              <div className="">Document the short and long term goals.</div>
            </div>
            <div className="flex items-center gap-x-2">
              <TiArrowForward className="text-sec text-2xl" />
              <div className="">Your product vision</div>
            </div>
          </div>
          <MainBtn
            title={"Know More About Us"}
            onClick={() => {
              navigate("/about-us");
            }}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
