import { runInAction, observable, decorate } from 'mobx'
import instance from '../api'
import { defaultPerPage } from '../configs'

class TodoApi {
  fetchData = () => instance.get('/data');
  searchData = (payload) => {
    const body = { nameToSearch: payload, limit: defaultPerPage }
    return instance.post('/search', body)
  };
}

class Store {
  /**
   * Constructor that accept instance of api
   * @memberof Store
   * @param todoApi [Object] - instance of API class
   */
  constructor (todoApi) {
    this.todoApi = todoApi
    /**
     * Default all items from /data api
     * @memberof Store
     *
     */
    this.items = []
    /**
     * Searched items when input pressed from /search api
     * @memberof Store
     */
    this.searchedItems = []
  }

  /**
   * Setter for value items
   * @memberof Store
   */
  setItems (payload) {
    this.items = payload
  }

  /**
   * Setter for value searchedItems
   * @memberof Store
   */
  setItemsSearch (payload) {
    this.searchedItems = payload
  }

  /**
   * GET
   * Fetching all items data from /data
   * @memberof Store
   */
  fetchData = async () => {
    const items = await this.todoApi.fetchData()
    runInAction(() => {
      this.setItems(items)
    })
  };

  /**
   * POST body:{nameToSearch: string}
   * Search data inside input
   * @memberof Store
   */
  searchData = async (payload) => {
    const items = await this.todoApi.searchData(payload)
    runInAction(() => {
      this.setItemsSearch(items)
    })
  };
}
// eslint-disable-next-line no-class-assign
Store = decorate(Store, {
  items: observable,
  searchedItems: observable
})
const todoApi = new TodoApi()
const todoStore = new Store(todoApi)

export default todoStore
