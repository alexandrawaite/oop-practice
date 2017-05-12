class Song {
  constructor(title, length, album, artist, trackNo) {
    this.title = title;
    this.length = length;
    this.album = album;
    this.artist = artist;
    this.trackNo = trackNo;
    is.playing = false;
  }
  play() {
    is.playing = true;
  }
  pause() {
    is.playing = false;
  }
}

module.exports = Song
