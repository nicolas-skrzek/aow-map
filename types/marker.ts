type TMarker = 'poi'|'scrap'|'ammo'|'chemical'|'mine'|'explosive'|'pantoon'|'rock';

export interface IMarkerLegend {
  [key: TMarker]: {
    title: string;
    color: string;
    show: boolean;
  }
}