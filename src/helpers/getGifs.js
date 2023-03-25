export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=1ywz0vNXFnASvQfsvBIA4Pz5Bw153o1V&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    const gifts = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    return gifts;
  };