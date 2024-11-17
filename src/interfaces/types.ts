export interface Artist {
  id: string;
  name: string;
  type: string;
  uri: string;
  href: string;
  external_urls: Object;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Album {
  id: string;
  name: string;
  type: string;
  artists: Artist[];
  images: Image[];
}

export interface AlbumsResponse {
  items: Album[];
}

export interface SpotifyData {
  albums: AlbumsResponse;
}
