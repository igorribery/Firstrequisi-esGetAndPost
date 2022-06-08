import { useEffect, useState } from "react";
import { Post } from "./types/Post";
import { PostForm } from "./Components/PostForm";
import { PostItem } from "./Components/PostItem";
import { api } from "./api";


const App = () => {
const [posts, setPosts] = useState<Post[]>([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
loadPosts();
}, []);

const loadPosts = async () => {
  setLoading(true);
  let json = await api.getAllPosts();
  setLoading(false);
  setPosts(json);
}

  const handleAddPost = async (title: string, body: string) => {
 
    let json = await api.addNewPost(title, body, 1);
    if(json.id) {
      alert("Post adicionado com sucesso!")
    } else {
      alert("Ocorreu algum erro");
    }
  }

  return (
    <div>
      {loading &&
        <div>Carregando...</div>
      }

      <PostForm onAdd={handleAddPost}/>
      
      {!loading && posts.length > 0 &&
        <>
        <div>Total de Posts: {posts.length}</div>

        <div>
          {posts.map((item, index) => (
           
           <PostItem key={index} data={item} />
           
          ))} 
        </div>
        </>
      }

      {!loading && posts.length === 0 &&
      <div>Não há posts para exibir</div>
      
      }
    </div>
  );
  }
export default App;