import { get } from "../helpers/index.js"

export const getPosts = async () => {
    return get('posts')
}