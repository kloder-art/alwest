export const formatRuntime = (runtime: number) =>
  runtime > 60
    ? `${Math.floor(runtime / 60)}h. ${runtime % 60}m.`
    : `${runtime}m`;

export const formatRecaudation = (x: number) => x.toLocaleString();
