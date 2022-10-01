import { ChangeEvent, FormEvent, useContext, useState } from "react";
import ReactQuill from "react-quill";
import { ButtonsContainer, CategoryItem, Container, Content, EditorContainer, Input, Menu, MenuItem } from "./styles";
import 'react-quill/dist/quill.snow.css';
import { api } from "../../utils/api";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { AuthContext } from "../../context/authContext";



export function Write() {
  const { currentUser } = useContext(AuthContext)

  const state = useLocation().state;
  const [title, setTitle] = useState(state?.title || "");
  const [desc, setDesc] = useState(state?.desc || "");
  const [file, setFile] = useState<File | null>(null);
  const [cat, setCat] = useState(state?.cat || "");
  
  const navigate = useNavigate();

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;

    if (!fileList) return;

    setFile(fileList[0]);
  }

  async function uploadImage() {
    try {
      if(!file) return;

      const formData = new FormData();
      formData.append('file', file);

      const response = await api.post('/api/upload', formData);

      return response.data;
    } catch (err){
      console.log(err)
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const imageUrl = await uploadImage();

    try {
      if(state) {
        await api.put(`/api/posts/${state.id}`, {
          title,
          desc,
          cat,
          img: file ? imageUrl : "",
          user_id: currentUser?.id
        });
      } else {
        await api.post(`/api/posts`, {
          title,
          desc,
          cat,
          img: file ? imageUrl : "",
          date: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
          user_id: currentUser?.id
        });
      }

      navigate("/");
        

    } catch(err) {
      console.log(err);
    }


  }


  return (
    <Container className="container">

      <Content>
        <Input type="text" placeholder="title" onChange={e => setTitle(e.target.value)} value={title} />

        <EditorContainer>
          <ReactQuill className="editor" theme="snow" onChange={setDesc} value={desc} />
        </EditorContainer>
        
      </Content>

      <Menu>
        <MenuItem>
          <h1>Publish</h1>

          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>

          <Input style={{display: 'none'}} type="file" id="file" onChange={handleImageChange}/>
          <label htmlFor="file">Upload Image</label>

          <ButtonsContainer>
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </ButtonsContainer>
        </MenuItem>

        <MenuItem>
          <h1>Category</h1>

          <CategoryItem>
            <Input type="radio" checked={cat === "art"} name="cat" value="art" id="art" onChange={e => setCat(e.target.value)}/>
            <label htmlFor="art">Art</label>
          </CategoryItem>

          <CategoryItem>
          <Input type="radio" checked={cat === "science"} name="cat" value="science" id="science" onChange={e => setCat(e.target.value)}/>
          <label htmlFor="science">Science</label>
          </CategoryItem>

          <CategoryItem>
          <Input type="radio" checked={cat === "technology"} name="cat" value="technology" id="technology" onChange={e => setCat(e.target.value)}/>
          <label htmlFor="technology">Technology</label>
          </CategoryItem>

          <CategoryItem>
          <Input type="radio" checked={cat === "cinema"} name="cat" value="cinema" id="cinema" onChange={e => setCat(e.target.value)}/>
          <label htmlFor="cinema">Cinema</label>
          </CategoryItem>

          <CategoryItem>
          <Input type="radio" checked={cat === "design"} name="cat" value="design" id="design" onChange={e => setCat(e.target.value)}/>
          <label htmlFor="design">Design</label>
          </CategoryItem>
          
          <CategoryItem>
          <Input type="radio" checked={cat === "food"} name="cat" value="food" id="food" onChange={e => setCat(e.target.value)}/>
          <label htmlFor="food">Food</label>
          </CategoryItem>
        </MenuItem>
      </Menu>
    </Container>
  )
}