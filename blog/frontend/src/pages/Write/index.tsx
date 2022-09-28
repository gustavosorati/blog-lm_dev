import { useState } from "react";
import ReactQuill from "react-quill";
import { ButtonsContainer, CategoryItem, Container, Content, EditorContainer, Input, Menu, MenuItem } from "./styles";
import 'react-quill/dist/quill.snow.css';

export function Write() {
  const [value, setValue] = useState('');
  
  return (
    <Container className="container">

      <Content>
        <Input type="text" placeholder="title" />

        <EditorContainer>
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
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

          <Input style={{display: 'none'}} type="file" id="file" />
          <label htmlFor="file">Upload Image</label>

          <ButtonsContainer>
            <button>Save as a draft</button>
            <button>Update</button>
          </ButtonsContainer>
        </MenuItem>

        <MenuItem>
          <h1>Category</h1>

          <CategoryItem>
            <Input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </CategoryItem>

          <CategoryItem>
          <Input type="radio" name="cat" value="science" id="science" />
          <label htmlFor="science">Science</label>
          </CategoryItem>

          <CategoryItem>
          <Input type="radio" name="cat" value="technology" id="technology" />
          <label htmlFor="technology">Technology</label>
          </CategoryItem>

          <CategoryItem>
          <Input type="radio" name="cat" value="cinema" id="cinema" />
          <label htmlFor="cinema">Cinema</label>
          </CategoryItem>

          <CategoryItem>
          <Input type="radio" name="cat" value="design" id="design" />
          <label htmlFor="design">Design</label>
          </CategoryItem>
          
          <CategoryItem>
          <Input type="radio" name="cat" value="food" id="food" />
          <label htmlFor="food">Food</label>
          </CategoryItem>
        </MenuItem>
      </Menu>
    </Container>
  )
}