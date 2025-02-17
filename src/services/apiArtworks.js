const URL = `https://api.artic.edu/api/v1/artworks`;

export async function fetchArtworks(query = "", page = 1, pageSize = 12) {
  const {
    data,
    pagination: { total_pages },
  } = await fetchData(`/search?q=${query}&page=${page}&limit=${pageSize}`);
  const ids = data.map((item) => item.id).join(",");
  const artworks = await fetchArtworkBundle(ids);
  return { data: artworks.data, pages: total_pages };
}

export async function fetchArtworkBundle(ids) {
  return fetchData(`?ids=${ids}`);
}

async function fetchData(url) {
  const res = await fetch(`${URL}${url}`);
  if (!res.ok) throw new Error(`Something went wrong.`);
  const data = await res.json();
  return data;
}
