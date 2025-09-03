import type { Product, Category, Action } from "../contexts/DataContext/DataContext";

export default async function fetchData () {



    type ApiData = {
        categories: Category[],
        product_marks: object[],
        products: Product[],
        special_project_parameters_actions: Action[],
        special_project_parameters_json: [],
    }

    const data: ApiData = {
        categories: [],
        product_marks: [],
        products: [],
        special_project_parameters_actions: [],
        special_project_parameters_json: [],

    }

    await fetch("https://noxer-test.ru/webapp/api/products?on_main=true")
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        data.categories = response.categories
        data.product_marks = response.product_marks
        data.products = [...data.products, ...response.products]
        data.special_project_parameters_actions = response.special_project_parameters_actions
        data.special_project_parameters_json = response.special_project_parameters_json.fast_search_strings.parameters_list
      })
      .catch((err) => {
        console.warn(err)
    });

    await fetch("https://noxer-test.ru/webapp/api/products?on_main=false&per_page=100&page=2")
      .then((response) => response.json())
      .then((response) => {
        data.products = [...data.products, ...response.products]
      })
      .catch(
        (err) => {
          console.warn(err)
    });

    return data
}