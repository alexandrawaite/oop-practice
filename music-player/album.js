class Album {
  constructor(title, artist, year, songs) {
    this.title = title;
    this.songs = songs;
    this.artist = artist;
    this.year = year;
  }
  get songCount() {
    return this.songs.length;
  }
}

module.exports = Album
