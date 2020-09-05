import { addParameters } from "@storybook/vue";
import "./main.pcss";

addParameters({
  backgrounds: [
    { name: "white", value: "#ffffff", default: true },
    { name: "grey", value: "#8395a7" },
  ],
  darkMode: {
    current: "dark",
  },
});

export const parameters = {
  backgrounds: {
      default: 'twitter',
      values: [
          { 
              name: 'twitter', 
              value: '#00aced'
          },
          { 
              name: 'facebook', 
              value: '#3b5998' 
          },
        ],
      }
}  
