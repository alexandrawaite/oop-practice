class Playlist {
  constructor({name, songs = []}) {
    this.name = name;
    this.songs = songs;
    this.currentSongIndex = 0;
  }
  addSong() {
    this.songs.push(song);
  }
  removeSong() {
    const index = this.song.indexOf(song);
    if (index > -1) {
      this.songs.splice(index, 1);
    }
  }
  play() {
    this.currentSong.play();
  }
  pause() {
    this.currentSong.pause();
  }
  next() {
    this.currentSong.pause();
    if (this.currentSongIndex < this.songs.length) {
      this.currentSongIndex++;
    } else {
      this.currentSongIndex = 0;
    }

    this.currentSong.play();
    return this.currentSong;
  }
}

module.exports = Playlist
