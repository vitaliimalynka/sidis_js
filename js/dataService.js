class DataService {
  #baseUrl = 'https://fakestoreapi.com/'

  async getData(path) {
    const url = this.#baseUrl + path
    try {
      const response = await fetch(url)

      if (response.ok) {
          return await response.json()
      } else {
          throw new Error(`Error with url: ${url}. Details: status ${response.status}, message: ${response.statusText}`)
      }
    } catch (error){
      console.error (error)
      return null
    }
  }
}

export const dataService = new DataService()