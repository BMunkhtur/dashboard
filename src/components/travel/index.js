import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function BasicModal({ modalOpen, handleClose, category, getCategory, isNew }) {
  const [title, setTitle] = useState({});
  const [categoryImg, setCategoryImg] = useState({});
  const [description, setDescription] = useState({});
  const [categoryRating, setCategoryRating] = useState({});

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDesc = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeImg = (e) => {
    setCategoryImg(e.target.value);
  };
  const handleChangeRating = (e) => {
    setCategoryRating(e.target.value);
  };
  const createCat = async () => {
    try {
      const result = await axios.post(`http://localhost:8000/categories`, {
        title,
        description,
        categoryImg,
        categoryRating,
      });
      getCategory();
      handleClose();
    } catch (err) {
      console.log('ERR', err);
    }
  };

  const updateCat = async () => {
    console.log('category._id', category._id);
    try {
      const result = await axios.put(`http://localhost:8000/categories/${category._id}`, {
        title,
        description,
        categoryImg,
        categoryRating,
      });
      console.log(result.data.category);
      getCategory();

      // setMessage(result.data.message);
    } catch (err) {
      console.log('ERR', err);
    }
    handleClose();
  };
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {isNew ? (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update Category
            </Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '40ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Нэр" variant="standard" onChange={handleChangeTitle} />
              <TextField id="standard-basic" label="Тайлбар" variant="standard" onChange={handleChangeDesc} />
              <TextField id="standard-basic" label="Зураг" variant="standard" onChange={handleChangeImg} />
              <TextField id="standard-basic" label="Үнэлгээ" variant="standard" onChange={handleChangeRating} />
            </Box>
            <Button onClick={updateCat}>Save</Button>
          </Box>
        ) : (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              New Category
            </Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '40ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Нэр" variant="standard" onChange={handleChangeTitle} />
              <TextField id="standard-basic" label="Тайлбар" variant="standard" onChange={handleChangeDesc} />
              <TextField id="standard-basic" label="Зураг" variant="standard" onChange={handleChangeImg} />
              <TextField id="standard-basic" label="Үнэлгээ" variant="standard" onChange={handleChangeRating} />
            </Box>
            <Button onClick={createCat}>Save</Button>
          </Box>
        )}
      </Modal>
    </div>
  );
}
