import LRUCache from "lru-cache";

class CocktailDb {
  baseUrl: string;
  cache: LRUCache<string, any>;
  private constructor() {
    this.cache = new LRUCache<string, any>({
      maxSize: 100,
    });
    this.cacheAndReturn = this.cacheAndReturn.bind(this);
    this.baseUrl = "https://www.thecocktaildb.com/api/json/v1/1";
  }
  public axiosProxyGet(relPath: string): Promise<{ data: any }> {
    return fetch(`${this.baseUrl}${relPath}`)
      .then((res) => res.json())
      .then((data) => ({ data }))
      .finally(() => console.log("request done"));
  }
  public static getInstance() {
    return new CocktailDb();
  }
  private responseTransformation(key: string): any {
    return (data: any) => {
      return data.data[key];
    };
  }
  private cacheAndReturn(key: any, value: any): any {
    this.cache.set(key, value);
    return value;
  }
  async byName(name: string): Promise<any> {
    const key = `name_${name}`;
    const data = this.cache.get(key);
    if (data) return data;
    return this.axiosProxyGet(`/search.php?s=${name}`)
      .then(this.responseTransformation("drinks"))
      .then((data) => this.cacheAndReturn(key, data));
  }
  async byFirstLetter(letter: string): Promise<any> {
    const key = `letter_${letter}`;
    const data = this.cache.get(key);
    if (data) return data;
    return this.axiosProxyGet(`/search.php?f=${letter}`)
      .then(this.responseTransformation("drinks"))
      .then((data) => this.cacheAndReturn(key, data));
  }
  async byIngridient(ingridient: string): Promise<any> {
    const key = `ingridient_${ingridient}`;
    const data = this.cache.get(key);
    if (data) return data;
    return this.axiosProxyGet(`/search.php?i=${ingridient}`)
      .then(this.responseTransformation("ingredients"))
      .then((data) => this.cacheAndReturn(key, data));
  }
  async byId(id: string): Promise<any> {
    const key = `id_${id}`;
    const data = this.cache.get(key);
    if (data) return data;
    return this.axiosProxyGet(`/lookup.php?i=${id}`)
      .then(this.responseTransformation("drinks"))
      .then((data) => this.cacheAndReturn(key, data));
  }
  random(): Promise<any> {
    return this.axiosProxyGet(`/random.php`).then(this.responseTransformation("drinks"));
  }
}

export default CocktailDb;
