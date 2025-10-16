interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  category: "socio" | "abogado" | "pasante";
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Roberto Gil Zuarth",
    title: "Socio Fundador",
    description:
      "Coordina las áreas de derecho constitucional, derecho administrativo y consultoría en políticas públicas. Licenciado en Derecho (ITAM, mención honorífica), Maestro en Derecho Constitucional (Universidad Carlos III de Madrid).",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "socio",
  },
  {
    id: 2,
    name: "Carlos A. Lezama Fernández del Campo",
    title: "Socio Fundador",
    description:
      "Lidera la práctica contenciosa y regulatoria. Asesora en controversias judiciales y administrativas (derecho constitucional, mercantil, civil y administrativo). Abogado (Universidad Panamericana, 2004), Maestría en Derecho (Universidad de Fordham).",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "socio",
  },
  {
    id: 3,
    name: "Manuel MacFarland",
    title: "Socio",
    description:
      "Socio del área de litigio. Abogado (Escuela Libre de Derecho), Maestría en Derecho Procesal Constitucional (Universidad Panamericana). Más de 19 años en cargos de alta responsabilidad en el sector público.",
    image:
      "https://images.unsplash.com/photo-1637689810282-4692c7677feb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "socio",
  },
  {
    id: 4,
    name: "Gonzalo José Bolio Benitez",
    title: "Abogado",
    description:
      "Especialista en litigio y consultoría (administrativa, constitucional, corporativa y societaria). Egresado de la Universidad Panamericana (promedio más alto). Maestría en Derecho (Universidad de Chicago).",
    image:
      "https://images.unsplash.com/photo-1557763686-f6109142f4a6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "abogado",
  },
  {
    id: 5,
    name: "Alonso Zepeda Celis",
    title: "Abogado",
    description:
      "Especializado en litigio constitucional, administrativo y electoral. Brinda asesoría legal estratégica ante altos tribunales y órganos reguladores.",
    image:
      "https://images.unsplash.com/photo-1647985070631-ec6a2707b2f7?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "abogado",
  },
  {
    id: 6,
    name: "Paulina Reynoso Ventosa",
    title: "Abogada",
    description:
      "Dedicada al litigio electoral y consultoría legal general. Experiencia previa en PBP Abogados (ahora Anker Abogados) y Rainmaker Group (derecho corporativo).",
    image:
      "https://images.unsplash.com/photo-1662104935883-e9dd0619eaba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "abogado",
  },
  {
    id: 7,
    name: "Armando Pinzón Cueva",
    title: "Abogado",
    description:
      "Forma parte del área de litigio (administrativo, constitucional, civil y mercantil). Egresado del ITAM. Colaboró en despachos de litigio como Aguilar Barroso Abogados y Cárdenas & Pardo Abogados.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "abogado",
  },
  {
    id: 8,
    name: "Iliana Sotomayor",
    title: "Abogada",
    description:
      "Experiencia en consultoría y asesoría legal en materia de infraestructura. Ha participado en la elaboración de propuestas no solicitadas bajo la Ley de Asociaciones Público-Privadas y en la estructuración legal de proyectos energéticos.",
    image:
      "https://images.unsplash.com/photo-1662104935883-e9dd0619eaba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "abogado",
  },
  {
    id: 9,
    name: "José Antonio Montes",
    title: "Asociado Líder - Área de Energía",
    description:
      "Sólida experiencia en regulación de hidrocarburos y energías renovables. Ha desempeñado funciones en la CRE y CNH. Su práctica abarca negociación y redacción de contratos, gestión de permisos y licencias regulatorias, y análisis financiero de proyectos energéticos.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "pasante",
  },
  {
    id: 10,
    name: "María Fernanda Chávez Quiroz",
    title: "Pasante",
    description:
      "Experiencia en litigio constitucional y administrativo. Ha colaborado en despachos enfocados en estas materias y en la defensa de derechos humanos desde la sociedad civil. Adquirió experiencia en la Suprema Corte de Justicia de la Nación.",
    image:
      "https://images.unsplash.com/photo-1662104935883-e9dd0619eaba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "pasante",
  },
];

