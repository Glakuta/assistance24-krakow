import { fetchAPI } from "./base"

const  getAllPages = async (slug: string)  => {
    const query = await fetchAPI(
        `query NewQuery {
            pages {
              nodes {
                content
                date
                modified
                slug
                title
              }
            }
          }`,
          {
            variables: {
                id: slug,
            },
          }
    
    )
}

export default getAllPages