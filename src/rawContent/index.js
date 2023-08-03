import webImage from "../assets/webImage.png";
import frontImage from "../assets/backImage.png";
import backImage from "../assets/backImage.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import mongo from "../assets/mongodb.png";
import nsradmin from "../assets/nsradmin.jpg";
import sanshop from "../assets/sanshop.png";
import sanshop2 from "../assets/sanshop2.png";
import shopcustomer from "../assets/shopcustomer.jpg";
import commingsoon from "../assets/soon.avif";
const overviewItem = [
  {
    id: "1",
    name: " Web   ",
    icon: webImage,
  },
  {
    id: "2",
    name: " Frontend ",
    icon: frontImage,
  },
  {
    id: "3",
    name: " Backend ",
    icon: backImage,
  },
];

const allSkills = [
  {
    id: "1",
    title: "React.js Developer",
    icon: react,
    skillSet: [
      "Develop Application with React.js , Material Ui,  Redux toolkit .",
    ],
  },
  {
    id: "2",
    title: "Node.js Developer",
    icon: node,
    skillSet: [
      "Develop  REST API using  Node.js and  Express",
      "Testing REST API using differnt tools",
      "Develop  REST API using  Node.js and  Express",
    ],
  },
  {
    id: "3",
    title: "MongoDB Developer",
    icon: mongo,
    skillSet: [
      "Design and Create efficient and reliable models",
      "writng High performace query",
      "Designing and Implementing MongoDb Database",
    ],
  },
];

const myProjects = [
  {
    id: "1",
    user: "Administrator Page",
    type: "Shop Managment",
    name: "San Shop Managment",
    description:
      "It is a part of SAN Shop fully functional web based Eccomerce store managment system. ",
    detail:
      "Fullstack one Iteration Product managment Web application developed using MERN stack technologies and other related Libraries",
    technologies: [
      {
        id: "1",
        name: "react",
        color: "#5CD3F4",
      },
      {
        id: "2",
        name: "mongodb",
        color: "#54B061",
      },
      {
        id: "3",
        name: "Material UI",
        color: "#FFD363",
      },
      {
        id: "4",
        name: "Node ",
        color: "#489140",
      },
    ],
    image: sanshop,
    image2: sanshop2,
    github_link: "https://github.com/AdwaSoft/MernStackSanShop",
    demo_link: "https://sanshop.onrender.com/",
  },
  // {
  //   id: "2",
  //   user: "Admin Dashboard",
  //   type: "Ecommerce",
  //   name: "Nordstromrack Admin ",
  //   description:
  //     "Web based application that allows customer to place order, manage order ,buy product .this project are a Clone for Nordstromrack website American based Ecommerce Platform.",
  //   technologies: [
  //     {
  //       id: "1",
  //       name: "react",
  //       color: "#5CD3F4",
  //     },
  //     {
  //       id: "2",
  //       name: "mongodb",
  //       color: "#54B061",
  //     },
  //     {
  //       id: "3",
  //       name: "Material UI",
  //       color: "#FFD363",
  //     },
  //     {
  //       id: "4",
  //       name: "Node ",
  //       color: "#489140",
  //     },
  //   ],
  //   image: nsradmin,
  //   image2: commingsoon,
  //   github_link: "https://github.com/",
  //   demo_link: "",
  // },
  // {
  //   id: "3",
  //   user: "Owner Dashboard",
  //   type: "Boutique System",
  //   name: "Shop Managment ",
  //   description:
  //     "Web based application that allows to manage sales and products ,and ",
  //   technologies: [
  //     {
  //       id: "1",
  //       name: "react",
  //       color: "#5CD3F4",
  //     },
  //     {
  //       id: "2",
  //       name: "mongodb",
  //       color: "#54B061",
  //     },
  //     {
  //       id: "3",
  //       name: "Material UI",
  //       color: "#FFD363",
  //     },
  //     {
  //       id: "4",
  //       name: "Node ",
  //       color: "#489140",
  //     },
  //   ],
  //   image: shopadmin,
  //   image2: commingsoon,
  //   github_link: "https://github.com/",
  //   demo_link: "",
  // },
  // {
  //   id: "4",
  //   user: "Sales Page",
  //   type: "Boutique System",
  //   name: "Shop Managment ",
  //   description:
  //     "Web based application that allows to manage sales and products ,and ",
  //   technologies: [
  //     {
  //       id: "1",
  //       name: "react",
  //       color: "#5CD3F4",
  //     },
  //     {
  //       id: "2",
  //       name: "mongodb",
  //       color: "#54B061",
  //     },
  //     {
  //       id: "3",
  //       name: "Material UI",
  //       color: "#FFD363",
  //     },
  //     {
  //       id: "4",
  //       name: "Node ",
  //       color: "#489140",
  //     },
  //   ],
  //   image: shopcustomer,
  //   image2: commingsoon,
  //   github_link: "https://github.com/",
  //   demo_link: "",
  // },
];
export { overviewItem, allSkills, myProjects };
