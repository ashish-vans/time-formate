import "@lwc/synthetic-shadow";
import "https://unpkg.com/@salesforce-ux/design-system@2.13.1/assets/styles/salesforce-lightning-design-system.min.css";
import { createElement } from "lwc";
//import myFirst from "./myFirst";
import dailytime from "./dailytime";

export const story = () => 
 //createElement("c-myFirst", { is: myFirst  });
 createElement("c-dailytime", { is: dailytime  });
