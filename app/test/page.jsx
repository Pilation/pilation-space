// 'use client'
// import { use } from "react";
// import {
//   faChevronDown,
//   faChevronUp,
//   faCog,
//   faFolder,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from "next/image";
// import Link from "next/link";
// import { use } from "react";
// import styled from 'styled-components'

// import Collapse from "../../components/Collapse";
// import StyledTest from '../../components/styledTest'
import PrimaryNav from "../../sections/PrimaryNav";
// import Collapse from '../../components/Collapse'
// import axios from "../../utils/axios";

const pages = [
  {
    id: "8c33a0d0-09c2-428a-8efb-8e227763fa6b",
    name: "Subscribed Services",
    links: [
      {
        source: "8c33a0d0-09c2-428a-8efb-8e227763fa6b",
        target: "aa7039d0-e1a9-438c-ac63-edc8dd2159c3",
        value: "child",
      },
      {
        source: "8c33a0d0-09c2-428a-8efb-8e227763fa6b",
        target: "aa7039d0-e1a9-438c-ac63-edc8dd2159c3",
        value: "child",
      },
    ],
  },
  {
    id: "aa7039d0-e1a9-438c-ac63-edc8dd2159c3",
    name: "Unaccredited Digital Services",
    links: [
      {
        source: "aa7039d0-e1a9-438c-ac63-edc8dd2159c3",
        target: "8c33a0d0-09c2-428a-8efb-8e227763fa6b",
        value: "parent",
      },
    ],
  },
  {
    id: "d5b9705d-aed7-44a3-b1d6-c5130e10eb2d",
    name: "Content Providers",
    links: [
      {
        source: "d5b9705d-aed7-44a3-b1d6-c5130e10eb2d",
        target: "8c33a0d0-09c2-428a-8efb-8e227763fa6b",
        value: "parent",
      },
    ],
  },
  {
    id: "4882b3b4-430b-4dca-96fb-ba1d697db243",
    name: "Digital Eco-system for Education",
    links: [
      {
        source: "4882b3b4-430b-4dca-96fb-ba1d697db243",
        target: "b87cdc84-10d1-4399-8825-6d4c8bc22370",
        value: "encapsulates",
      },
      {
        source: "4882b3b4-430b-4dca-96fb-ba1d697db243",
        target: "7aedcd56-503d-4ede-b693-edf4c798bdbf",
        value: "encapsulates",
      },
    ],
  },
  {
    id: "b87cdc84-10d1-4399-8825-6d4c8bc22370",
    name: "Accredited Digital Services",
  },
  {
    id: "7aedcd56-503d-4ede-b693-edf4c798bdbf",
    name: "NZ Government Services",
    links: [
      {
        source: "7aedcd56-503d-4ede-b693-edf4c798bdbf",
        target: "6b4e233a-ab62-4987-827b-1d8a53443b15",
        value: "interactsWith",
      },
    ],
  },
  {
    id: "afbc2a8b-42ea-4491-976d-883e38632fa2",
    name: "Sector and Local Services",
    links: [
      {
        source: "afbc2a8b-42ea-4491-976d-883e38632fa2",
        target: "6b4e233a-ab62-4987-827b-1d8a53443b15",
        value: "interactsWith",
      },
    ],
  },
  {
    id: "6b4e233a-ab62-4987-827b-1d8a53443b15",
    name: "Kura & School Service",
    links: [
      {
        source: "6b4e233a-ab62-4987-827b-1d8a53443b15",
        target: "59127f38-40e5-461e-b8d6-188b22807c24",
        value: "child",
      },
    ],
  },
  {
    id: "59127f38-40e5-461e-b8d6-188b22807c24",
    name: "Governance",
    links: [
      {
        source: "59127f38-40e5-461e-b8d6-188b22807c24",
        target: "6b4e233a-ab62-4987-827b-1d8a53443b15",
        value: "parent",
      },
      {
        source: "59127f38-40e5-461e-b8d6-188b22807c24",
        target: "b441df07-c754-47ad-9d71-56494c647321",
        value: "child",
      },
      {
        source: "59127f38-40e5-461e-b8d6-188b22807c24",
        target: "be2bc5ae-60a7-4a6a-9377-fb8a2045528b",
        value: "child",
      },
    ],
  },
  {
    id: "b441df07-c754-47ad-9d71-56494c647321",
    name: "Board of Trustees",
  },
  {
    id: "be2bc5ae-60a7-4a6a-9377-fb8a2045528b",
    name: "Compliance",
  },
  {
    id: "c71bdf74-58d0-4a6c-a58d-dab72495203b",
    name: "Facilitating learning",
  },
  {
    id: "3f1fb5e4-e956-4b15-877e-80b6ee2b7a69",
    name: "Core infrastructure",
  },
  {
    id: "c6d23999-7d31-4e03-b120-da5daf6b95b5",
    name: "Supporting capabilities",
    links: [
      {
        source: "c6d23999-7d31-4e03-b120-da5daf6b95b5",
        target: "cef16ea4-c3b1-4b78-9fd4-a7e1143d1b09",
        value: "child",
      },
    ],
  },
  {
    id: "cef16ea4-c3b1-4b78-9fd4-a7e1143d1b09",
    name: "System Wide",
    links: [
      {
        source: "cef16ea4-c3b1-4b78-9fd4-a7e1143d1b09",
        target: "c6d23999-7d31-4e03-b120-da5daf6b95b5",
        value: "child",
      },
    ],
  },
  {
    id: "d74de65a-7088-4590-a10f-9bf2fe71f744",
    name: "Digital identity",
  },
  {
    id: "c7bb2e9e-ec1a-48ea-841d-59a216592b98",
    name: "Access",
  },
  {
    id: "e2504106-056c-4650-a26c-8206005d8272",
    name: "Cohorts",
  },
  {
    id: "be3d624d-5074-4bd7-9922-bde3be24c942",
    name: "Digital Identity",
  },
  {
    id: "c3e4b16f-fa74-475d-92b3-7bfc03d615e8",
    name: "Access",
  },
  {
    id: "1bf03e72-b336-4fdb-b301-585f9d85131d",
    name: "Cohorts",
  },
];

// async function getPages() {
//   const pages = await axios.get("/api/organizations/uuid/pages");
//   return pages.data;
// }
// -----------------------------------------------------------------------------------
// const Button = styled.button`
//   color: black;
// `
// const CollapseContainer = styled.div({
//   marginTop: '100px',
//   // display: 'flex',
//   // flexDirection: 'column',
//   // border: '2px solid black',
//   // width: '200px',
// })
// export const PrimaryNav = () => {
//   return (
//
//   )
// }

// -----------------------------------------------------------------------------------

// export default function Test() {
// const [pages, setPages] = useState([])
// const [isOpened, setIsOpened] = useState(false)

// const toggleCollapse = () => {
//   setIsOpened(!isOpened)
// }

// useEffect(() => {
//   axios.get('/api/organizations/uuid/pages').then((response) => setPages(response.data))
// }, [])

//   console.log(pages)
//   // console.log('
//   return <PrimaryNav pages={pages} />
// }

export default function Test() {
  // const pages = await getPages();
  // console.log(pages)
  // console.log('hi')
  return (
    <>
      <PrimaryNav pages={pages} />
      <p>{pages[0].id}</p>
    </>
  );
}
