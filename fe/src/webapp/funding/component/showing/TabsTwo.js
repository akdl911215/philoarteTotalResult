import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Icofont from "react-icofont";

const TabsTwo = ({ data }) => (
  <Tabs className="icon-tabs">
    <div className="row">
      <div className="col-md-4">
        <TabList className="nav nav-tabs text-center">
          {data.map((tab) => (
            <Tab key={tab.id}>
              <span>
                <i className={"icon-" + tab.icon}></i>
              </span>
            </Tab>
          ))}
        </TabList>
      </div>
      <div className="col-md-8">
        <div className="tab-content text-center">
          {data.map((tab, i) => (
            <TabPanel className="tab-pane fade in" id="design-2" key={tab.id}>
              <div className="text-left">
                <h1 className="default-color font-800 mt-0">0{i + 1}</h1>
                <h3 className="font-700">{tab.title}</h3>
                <p>{tab.text}</p>
                <p className="mt-50">
                  <a
                    href="!#"
                    className="btn btn-md btn-color btn-animate btn-circle"
                  >
                    <span>
                      Buy Template
                      <Icofont icon="arrow-right" className="tr-icon" />
                    </span>
                  </a>
                </p>
              </div>
            </TabPanel>
          ))}
        </div>
      </div>
    </div>
  </Tabs>
);

export default TabsTwo;
