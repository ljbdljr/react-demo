import AmapExample from "../pages/amapExample"
import LongFor from "../pages/longFor"
//icons
import { ReconciliationOutlined } from "@ant-design/icons"

export const routes = [
  {
    title: "amap",
    Icon: ReconciliationOutlined,
    children: [
      {
        title: "longFor",
        path: "/longFor",
        component: LongFor,
      },
      {
        title: "amapExample",
        path: "/amapExample",
        component: AmapExample,
      },
    ],
  },
]
