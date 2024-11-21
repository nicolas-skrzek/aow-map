import { IMarkerLegend } from '@/types/marker'

export const MARKER_LEGEND: IMarkerLegend = {
  poi: {
    title: "Point d'interet",
    color: '#22d3ee',
    show: true,
  },
  scrap: {
    title: 'Ferraille',
    color: '#dc2626',
    show: true,
  },
  ammo: {
    title: 'Munitions',
    color: '#4ade80',
    show: true,
  },
  chemical: {
    title: 'Résidus chimiques',
    color: '#fde047',
    show: true,
  },
  mine: {
    title: 'Mines (WIP)',
    color: '#000000',
    show: false,
  },
  explosive: {
    title: 'Explosifs (WIP)',
    color: '#f97316',
    show: false,
  },
  pantoon: {
    title: 'Ponton (WIP)',
    color: '#a78bfa',
    show: false,
  },
  rock: {
    title: 'Rocher (WIP)',
    color: '#57534e',
    show: false,
  },
  rank2: {
    title: 'Navire de rang 2',
    icon: 'ship_rank_2',
    show: true,
    ships: [
      {
        id: 'strut_pilot_boat',
        title: 'Bateau-pilote Strut',
        show: true,
      },
      {
        id: 'tk7_marlin_torpedo_boat',
        title: 'Torpilleur TK7 Marlin',
        show: true,
      },
      {
        id: 'scorpena_torpedo_boat',
        title: 'Torpilleur Scorpena',
        show: true,
      },
      {
        id: 'mariana_seiner',
        title: 'Senneur La Mariana',
        show: true,
      },
    ]
  },
  rank3: {
    title: 'Navire de rang 3',
    icon: 'ship_rank_3',
    show: true,
    ships: [
      {
        id: 'walrus_tugboat',
        title: 'Remorqueur Le Morse',
        show: true,
      },
      {
        id: 'shamrock_trawler',
        title: 'Chalutier Le Trèfle',
        show: true,
      },
      {
        id: 'snappy_patrol_boat',
        title: 'Patrouilleur Le Vif',
        show: true,
      },
      {
        id: 'vigilant_patrol_boat',
        title: 'Patrouilleur Le Vigilant',
        show: true,
      },
    ]
  },
  rank4: {
    title: 'Navire de rang 4',
    icon: 'ship_rank_4',
    show: true,
    ships: [
      {
        id: 'brawler_torpedo_boat',
        title: 'Torpilleur Le Bagarreur',
        show: true,
      },
      {
        id: 'anchovy_trawler',
        title: 'Chalutier L\'Anchois',
        show: true,
      },
      {
        id: 'bk_muraena_patrol_trawler',
        title: 'Patrouilleur BK Muraena',
        show: true,
      },
    ]
  },
  rank5: {
    title: 'Navire de rang 5',
    icon: 'ship_rank_5',
    show: true,
    ships: [
      {
        id: 'burdock_gunboat',
        title: 'Cannonière La Bardane',
        show: true,
      },
    ]
  }
}