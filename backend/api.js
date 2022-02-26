const songList = [
    {
      title: "Yoru Ni Kakeru",
      artist: "Yoasobi",
    },
    {
      title: "In The End",
      artist: "Linkin Park",
    },
    {
      title: "Connect",
      artist: "ClariS",
    },
  ];

//   TODO
const getAllSongs = async (request, response) => {
    response.status(200).json(songList);
    };

//   TODO
const getSongById = (request, response) => {
    response.status(200).json(songList[0]);
    };

//   TODO
const addSong = async (request, response) => {
    const { title, artist } = request.body;
    songList.push({ title, artist });
    response.status(201).send(`Song added successfully.`);
    };
   
//   TODO
const updateSong = (request, response) => {
    const { title, artist } = request.body;
    songList[0] = { title, artist };
    response.status(200).send(`First song in list is updated.`);
    };

//   TODO
const deleteSong = (request, response) => {
    songList.shift();
    response.status(200).send(`First song in list is deleted.`);
    };

const getAllUsers = (request, response) => {
    response.status(200).json(userList);
    };

module.exports =
    {
        getAllSongs,
        getSongById,
        addSong,
        updateSong,
        deleteSong,
        getAllUsers
    }