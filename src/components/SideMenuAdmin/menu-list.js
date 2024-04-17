import AddBoxIcon from "@mui/icons-material/AddBox";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ListIcon from "@mui/icons-material/List";

import paths from "../../constants/paths";

const listLinks = [
  { id: 1, label: "Pedidos", link: paths.Order, icon: BusinessCenterIcon },
  {
    id: 2,
    label: "Listar Produtos",
    link: paths.Products,
    icon: ListIcon
  },
  {
    id: 3,
    label: "Novo Produto",
    link: paths.NewProducts,
    icon: AddBoxIcon
  }
];

export default listLinks;
