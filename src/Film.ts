interface IFilm {
  id: string,
  name: string,
  image: string,
  url: string,
  date: string
}

export default class Film {
  private id!: string;
  private name!: string;
  private image!: string;
  private url!: string;
  private date!: Date;

  constructor(film: IFilm) {
    this.setId(film.id);
    this.setName(film.name);
    this.setImage(film.image);
    this.setUrl(film.url);
    this.setDate(film.date)
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getImage(): string {
    return this.image;
  }

  public setImage(image: string) {
    this.image = image;
  }

  public getUrl(): string {
    return this.url;
  }

  public setUrl(url: string) {
    this.url = url;
  }

  public getDate(): Date {
    return this.date;
  }

  public setDate(date: string) {
    this.date = new Date(date);
  }
}
