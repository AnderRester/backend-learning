import Post from "./Post.js";

class PostService {
    async create(post, picture) {
        //console.log(req.query); //For query | sql
        //console.log(req.body); //For showing something
        const createdPost = await Post.create(post)
        // res.status(200).json("Server is Alive.")
        return(createdPost);
    }

    async getOne(id) {
            if(!id) {
                throw new Error('не указан ID')
            }
            const post = await Post.findById(id);
            return post;
    }
    async getAll() {
            const post = await Post.find();
            return post;
    }
    async update(post) {
        if(!post._id) {
            throw new Error('не указан ID')
        }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
            return updatedPost;
    }
    async delete(id) {
        if(!id) {
            throw new Error('не указан ID')
        }
            const post = await Post.findByIdAndDelete(id);
            return post;
    }
}

export  default new PostService() ;