export const getCommentsById = async (id) => {
    const data = await getCommets (`posts/${id}/comments`);
    return data; 
}