export const SERVICES_DATA = [
  {
    id: 1,
    category: "INFRAESTRUTURA",
    color: "jiga-blue",
    services: [
      "Configuração de Servidores e Storage",
      "Balanceamento de Links", 
      "Cabeamento Estruturado CAT-6",
      "Servidores em Nuvem"
    ],
    icon: "🖥️",
    metrics: "99.9% Uptime",
    description: "Infraestrutura robusta e confiável para seu negócio"
  },
  {
    id: 2,
    category: "SEGURANÇA", 
    color: "security-orange",
    services: [
      "Segurança de rede",
      "Backup Services",
      "CFTV e Controle de Acesso"
    ],
    icon: "🔒",
    metrics: "Proteção 24/7",
    description: "Segurança completa para seus dados e infraestrutura"
  },
  {
    id: 3,
    category: "SUPORTE",
    color: "jiga-green", 
    services: [
      "Contratos de Suporte Técnico",
      "Suporte Microsoft/Linux",
      "Monitoramento 24/7"
    ],
    icon: "⚡",
    metrics: "Response Time <15min",
    description: "Suporte técnico especializado sempre disponível"
  }
]

export const MILESTONES = [
  { year: '1993', event: 'Fundação da empresa em Florianópolis/SC com o nome Jiga Sistemas de Manutenção Ltda' },
  { year: '1997', event: 'Expansão da atuação para o estado do Paraná, em Curitiba' },
  { year: '1997', event: 'Expansão para serviços de Internet como Provedor JSOL - Jiga Soluções ON Line' },
  { year: '2000', event: 'Primeiro projeto de Soluções Integradas - Rede de Ensino do estado do Paraná' },
  { year: '2012', event: 'Certificações Nexans /Remaster' },
  { year: '2017', event: 'Especialização em Green Datacenter' },
  { year: '2022', event: 'Expansão para Cloud Services' },      
  { year: '2025', event: 'Integração Engenharia/Automação/Cloud Services' }
]

export const PRODUCTS = [
  {
    id: 1,
    name: "Servidores",
    category: "infraestrutura",
    description: "Servidores de Alta Performance / Cluster para:",
    specs: ["Servidores de Arquivo", "Servidores de Aplicação", "Cloud Backup"],
    color: "jiga-blue"
  },
  {
    id: 2,
    name: "Nobreaks",
    category: "energia", 
    description: "Sistemas de energia ininterrupta",
    specs: ["10-100 KVA", "Baterias seladas", "Monitoramento"],
    color: "electric-yellow"
  },
  {
    id: 3,
    name: "Firewalls",
    category: "seguranca",
    description: "Proteção de rede empresarial",
    specs: ["UTM integrado", "VPN SSL", "Filtro de conteúdo"],
    color: "security-orange"
  }
]