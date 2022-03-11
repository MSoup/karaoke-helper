import Tile from '../components/Tile'
import SearchBar from '../components/SearchBar'
import './Main.css';
import Results from '../components/Results';
import { useEffect, useState } from 'react';

const imgArr = ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Flaaawenizah%2Fspotify-cover-art%2F&psig=AOvVaw31qZCw0j0ctBy7_HPM3gmy&ust=1647114401707000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiTt7rpvvYCFQAAAAAdAAAAABAD'];
const artistArr = ['Clara','Alice'];
const searchResults = [
  {
    album: {
      album_type: 'single',
      artists: artistArr,
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/albums/6rVOUFV4qi8MgqF7na73rX',
      id: '6rVOUFV4qi8MgqF7na73rX',
      images: imgArr,
      name: 'Connection',
      release_date: '2018-06-26',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:6rVOUFV4qi8MgqF7na73rX'
    },
    artists: [ [Object] ],
    disc_number: 1,
    duration_ms: 148459,
    explicit: false,
    external_ids: { isrc: 'USUM71808832' },
    external_urls: {
      spotify: 'https://open.spotify.com/track/3T4UodGkfZObJ43RtA5KFU'
    },
    href: 'https://api.spotify.com/v1/tracks/3T4UodGkfZObJ43RtA5KFU',
    id: '3T4UodGkfZObJ43RtA5KFU',
    is_local: false,
    is_playable: true,
    name: 'Connection',
    popularity: 66,
    preview_url: null,
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:3T4UodGkfZObJ43RtA5KFU'
  },
  {
    album: {
      album_type: 'album',
      artists: artistArr,
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/albums/2fsMp83A31t6nqp1TvV7OB',
      id: '2fsMp83A31t6nqp1TvV7OB',
      images: imgArr,
      name: 'Terrorist Threats',
      release_date: '2003-12-09',
      release_date_precision: 'day',
      total_tracks: 14,
      type: 'album',
      uri: 'spotify:album:2fsMp83A31t6nqp1TvV7OB'
    },
    artists: [ [Object] ],
    disc_number: 1,
    duration_ms: 293053,
    explicit: true,
    external_ids: { isrc: 'USPO10300058' },
    external_urls: {
      spotify: 'https://open.spotify.com/track/65iyI1iybyv5ecsfBHSdUf'
    },
    href: 'https://api.spotify.com/v1/tracks/65iyI1iybyv5ecsfBHSdUf',
    id: '65iyI1iybyv5ecsfBHSdUf',
    is_local: false,
    is_playable: true,
    name: 'Gangsta Nation',
    popularity: 73,
    preview_url: null,
    track_number: 4,
    type: 'track',
    uri: 'spotify:track:65iyI1iybyv5ecsfBHSdUf'
  },
  {
    album: {
      album_type: 'album',
      artists: artistArr,
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/albums/2IozNWNXp77fqFQOgzpLcw',
      id: '2IozNWNXp77fqFQOgzpLcw',
      images: imgArr,
      name: 'Connected',
      release_date: '1992-01-01',
      release_date_precision: 'day',
      total_tracks: 13,
      type: 'album',
      uri: 'spotify:album:2IozNWNXp77fqFQOgzpLcw'
    },
    artists: [ [Object] ],
    disc_number: 1,
    duration_ms: 314133,
    explicit: false,
    external_ids: { isrc: 'GBAAN9290023' },
    external_urls: {
      spotify: 'https://open.spotify.com/track/5t09SnxOR2AelOghumKkXO'
    },
    href: 'https://api.spotify.com/v1/tracks/5t09SnxOR2AelOghumKkXO',
    id: '5t09SnxOR2AelOghumKkXO',
    is_local: false,
    is_playable: true,
    name: 'Connected',
    popularity: 55,
    preview_url: null,
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:5t09SnxOR2AelOghumKkXO'
  },
  {
    album: {
      album_type: 'album',
      artists: artistArr,
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/albums/2ZUFSbIkmFkGag000RWOpA',
      id: '2ZUFSbIkmFkGag000RWOpA',
      images: imgArr,
      name: 'Nothing Was The Same (Deluxe)',
      release_date: '2013-01-01',
      release_date_precision: 'day',
      total_tracks: 16,
      type: 'album',
      uri: 'spotify:album:2ZUFSbIkmFkGag000RWOpA'
    },
    artists: [ [Object] ],
    disc_number: 1,
    duration_ms: 296400,
    explicit: true,
    external_ids: { isrc: 'USCM51300746' },
    external_urls: {
      spotify: 'https://open.spotify.com/track/1Sj81sMg37Hd4omn7Ow2qR'
    },
    href: 'https://api.spotify.com/v1/tracks/1Sj81sMg37Hd4omn7Ow2qR',
    id: '1Sj81sMg37Hd4omn7Ow2qR',
    is_local: false,
    is_playable: true,
    name: 'Connect',
    popularity: 53,
    preview_url: null,
    track_number: 9,
    type: 'track',
    uri: 'spotify:track:1Sj81sMg37Hd4omn7Ow2qR'
  },
  {
    album: {
      album_type: 'single',
      artists: artistArr,
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/albums/4CA9koIi5G0oRNLrPxv6UL',
      id: '4CA9koIi5G0oRNLrPxv6UL',
      images: imgArr,
      name: 'Soul Connect',
      release_date: '2021-09-21',
      release_date_precision: 'day',
      total_tracks: 2,
      type: 'album',
      uri: 'spotify:album:4CA9koIi5G0oRNLrPxv6UL'
    },
    artists: [ [Object] ],
    disc_number: 1,
    duration_ms: 196491,
    explicit: false,
    external_ids: { isrc: 'SE6X32165701' },
    external_urls: {
      spotify: 'https://open.spotify.com/track/1EVG8oKkYocWnjot9oPZHB'
    },
    href: 'https://api.spotify.com/v1/tracks/1EVG8oKkYocWnjot9oPZHB',
    id: '1EVG8oKkYocWnjot9oPZHB',
    is_local: false,
    is_playable: true,
    name: 'Soul Connect',
    popularity: 66,
    preview_url: 'https://p.scdn.co/mp3-preview/6523f91fafcbddb73e01d357b58eb20a8073a511?cid=f68c0e89c77a4d488a7ffe172b9eec06',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:1EVG8oKkYocWnjot9oPZHB'
  },
  {
    album: {
      album_type: 'compilation',
      artists: artistArr,
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/albums/5CdIIrp4pEVIVEJi5hAk1f',
      id: '5CdIIrp4pEVIVEJi5hAk1f',
      images: imgArr,
      name: 'The Best Of Westside Connection',
      release_date: '2007-11-30',
      release_date_precision: 'day',
      total_tracks: 18,
      type: 'album',
      uri: 'spotify:album:5CdIIrp4pEVIVEJi5hAk1f'
    },
    artists: [ [Object] ],
    disc_number: 1,
    duration_ms: 207840,
    explicit: true,
    external_ids: { isrc: 'USPO10000898' },
    external_urls: {
      spotify: 'https://open.spotify.com/track/667CkwNvTozFtCMDC7BfBU'
    },
    href: 'https://api.spotify.com/v1/tracks/667CkwNvTozFtCMDC7BfBU',
    id: '667CkwNvTozFtCMDC7BfBU',
    is_local: false,
    is_playable: true,
    name: 'Bow Down',
    popularity: 60,
    preview_url: null,
    track_number: 3,
    type: 'track',
    uri: 'spotify:track:667CkwNvTozFtCMDC7BfBU'
  },
  {
    album: {
      album_type: 'album',
      artists: artistArr,
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/albums/00MAXeszCotk3g9q8KYJlZ',
      id: '00MAXeszCotk3g9q8KYJlZ',
      images: imgArr,
      name: 'Elastica',
      release_date: '1995-01-01',
      release_date_precision: 'day',
      total_tracks: 16,
      type: 'album',
      uri: 'spotify:album:00MAXeszCotk3g9q8KYJlZ'
    },
    artists: [ [Object] ],
    disc_number: 1,
    duration_ms: 140480,
    explicit: false,
    external_ids: { isrc: 'USIR10001394' },
    external_urls: {
      spotify: 'https://open.spotify.com/track/53LZqMzQEnjBkFXPqOq0cD'
    },
    href: 'https://api.spotify.com/v1/tracks/53LZqMzQEnjBkFXPqOq0cD',
    id: '53LZqMzQEnjBkFXPqOq0cD',
    is_local: false,
    is_playable: true,
    name: 'Connection',
    popularity: 59,
    preview_url: null,
    track_number: 3,
    type: 'track',
    uri: 'spotify:track:53LZqMzQEnjBkFXPqOq0cD'
  },
  {
    album: {
      album_type: 'single',
      artists: artistArr,
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/albums/4IFgc3WJUTL09xNye07t89',
      id: '4IFgc3WJUTL09xNye07t89',
      images: imgArr,
      name: 'Connection',
      release_date: '2021-08-27',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:4IFgc3WJUTL09xNye07t89'
    },
    artists: [ [Object] ],
    disc_number: 1,
    duration_ms: 144562,
    explicit: false,
    external_ids: { isrc: 'SE5IB2137306' },
    external_urls: {
      spotify: 'https://open.spotify.com/track/5BDIKKycvDRRpJGG76cg0n'
    },
    href: 'https://api.spotify.com/v1/tracks/5BDIKKycvDRRpJGG76cg0n',
    id: '5BDIKKycvDRRpJGG76cg0n',
    is_local: false,
    is_playable: true,
    name: 'Connection',
    popularity: 60,
    preview_url: 'https://p.scdn.co/mp3-preview/ea10403e423079d8edbbc4bce97f5fcced85f05f?cid=f68c0e89c77a4d488a7ffe172b9eec06',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:5BDIKKycvDRRpJGG76cg0n'
  },
  {
    album: {
      album_type: 'compilation',
      artists: artistArr,
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/albums/5CdIIrp4pEVIVEJi5hAk1f',
      id: '5CdIIrp4pEVIVEJi5hAk1f',
      images: imgArr,
      name: 'The Best Of Westside Connection',
      release_date: '2007-11-30',
      release_date_precision: 'day',
      total_tracks: 18,
      type: 'album',
      uri: 'spotify:album:5CdIIrp4pEVIVEJi5hAk1f'
    },
    artists: [ [Object] ],
    disc_number: 1,
    duration_ms: 250226,
    explicit: true,
    external_ids: { isrc: 'USPO10000903' },
    external_urls: {
      spotify: 'https://open.spotify.com/track/6MbxtmdQYE6eljl9sntLZt'
    },
    href: 'https://api.spotify.com/v1/tracks/6MbxtmdQYE6eljl9sntLZt',
    id: '6MbxtmdQYE6eljl9sntLZt',
    is_local: false,
    is_playable: true,
    name: 'The Gangsta, The Killa And The Dope Dealer',
    popularity: 62,
    preview_url: null,
    track_number: 2,
    type: 'track',
    uri: 'spotify:track:6MbxtmdQYE6eljl9sntLZt'
  },
  {
    album: {
      album_type: 'single',
      artists: artistArr,
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/albums/2kcyfDBLNVuvP7ebwSw3SX',
      id: '2kcyfDBLNVuvP7ebwSw3SX',
      images: imgArr,
      name: 'コネクト',
      release_date: '2011-02-02',
      release_date_precision: 'day',
      total_tracks: 4,
      type: 'album',
      uri: 'spotify:album:2kcyfDBLNVuvP7ebwSw3SX'
    },
    artists: [ [Object] ],
    disc_number: 1,
    duration_ms: 271733,
    explicit: false,
    external_ids: { isrc: 'JPU901001861' },
    external_urls: {
      spotify: 'https://open.spotify.com/track/2ReLy6MAZB0lw65E7utuIt'
    },
    href: 'https://api.spotify.com/v1/tracks/2ReLy6MAZB0lw65E7utuIt',
    id: '2ReLy6MAZB0lw65E7utuIt',
    is_local: false,
    is_playable: true,
    name: 'コネクト',
    popularity: 45,
    preview_url: 'https://p.scdn.co/mp3-preview/ae22df69e01103763a64753e44bc42738f812f8a?cid=f68c0e89c77a4d488a7ffe172b9eec06',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:2ReLy6MAZB0lw65E7utuIt'
  }
];

function Main() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  // useEffect(() => {
  //   const url = `https://itunes.apple.com/search?term=${term.toLowerCase()}&country=CA&media=music&entity=album&attribute=artistTerm`;
  //   axios.get(url).then((response) => {
  //     setResults([...response.data.results]);
  //   });
  // }, [term]);

  const searchCategories = ['Artist','Song Title','Album','Genre','History'];
  const changeSearch = category => {
    console.log(category);
  }
  const categoryTiles = searchCategories
    .map(category => <Tile
      key={category}
      title={category}
      />);
  return (
    <div className="Main">
      {/* <SearchBar onSearch={term => setTerm(term)} /> */}
      <SearchBar />
      <Results results={searchResults} />
      {/* Tiles */}
      {categoryTiles}
    </div>
  );
}
  
export default Main;
  