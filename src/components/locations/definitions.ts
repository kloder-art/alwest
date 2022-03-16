export interface MarkerFrontmatterProps {
  lat: number;
  lon: number;
  id: string;
  name: string;
}

export interface MarkerProps {
  frontmatter: MarkerFrontmatterProps;
  html?: string;
}

export interface ILocation {
  lat: number;
  lon: number;
  id: string;
  name?: string;
}
