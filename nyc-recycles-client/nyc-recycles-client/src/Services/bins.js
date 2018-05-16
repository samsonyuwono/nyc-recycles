export function fetchBins() {
  return fetch(`https://data.cityofnewyork.us/resource/ggvk-gyea.json`).then(
    results => results.json()
  );
}
