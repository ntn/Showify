import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3";
const clientId = "605bfb7955646c5982b3a027ebea657e";

const constructImageUrl = async (fileUrl) => {
  const baseImageUrl = "http://image.tmdb.org/t/p/";
  const imageSize = "original";

  return `${baseImageUrl}${imageSize}${fileUrl}`;
};

const getPosterForShow = async (showId) => {
  const response = await axios.get(
    `${baseUrl}/tv/${showId}/images?api_key=${clientId}&language=en`
  );

  let imageUrl = "../images/NoImgFound.jpg";
  const images = response.data.posters;
  if (images && images[0].file_path) {
    imageUrl = constructImageUrl(images[0].file_path);
  }
  return imageUrl;
};

const getPosterForMovies = async (movieId) => {
  const response = await axios.get(
    `${baseUrl}/movie/${movieId}/images?api_key=${clientId}&language=en`
  );

  let imageUrl = "../images/NoImgFound.jpg";
  const images = response.data.posters;
  if (images && images[0].file_path) {
    imageUrl = constructImageUrl(images[0].file_path);
  }
  return imageUrl;
};

export default {
  getPosterForShow,
  getPosterForMovies,
};
