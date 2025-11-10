import {
  CheckCheckIcon,
  LayoutDashboardIcon,
  PersonStandingIcon,
  Settings,
} from "lucide-react";

export const linksNavigation = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboardIcon },
  { href: "/projects", label: "Meu Perfil", icon: PersonStandingIcon },
  { href: "#", label: "Minhas Tarefas", icon: CheckCheckIcon },
  { href: "/configuration", label: "Configurações", icon: Settings },
];
