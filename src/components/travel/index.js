import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Alert, Snackbar } from '@mui/material';
import axios from 'axios';
import { useContext, useState } from 'react';

import { CategoryContext } from '../../Context/catContext';

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

export default function TravelModal({ handleClose, isNew, modalOpen }) {
  const { setRender, render, travel, setTravel } = useContext(CategoryContext);
  const createTravel = async () => {
    try {
      const result = await axios.post(`http://localhost:8000/travels`, travel);
      console.log(result.data.travel);
      setRender(!render);
    } catch (err) {
      console.log('ERR', err);
    }
    handleClose();
  };

  const updateTravel = async () => {
    console.log('travel._id', travel._id);
    try {
      const result = await axios.put(`http://localhost:8000/travels/${travel._id}`, travel);
      console.log(result.data.travel);
      setRender(!render);
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
              Update Travel
            </Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '40ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Нэр"
                name="title"
                variant="standard"
                defaultValue={travel.title}
                onChange={(e) => {
                  setTravel({ ...travel, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Дэлгэрэнгүй"
                name="detail"
                variant="standard"
                defaultValue={travel.detail}
                onChange={(e) => {
                  setTravel({ ...travel, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Зураг"
                name="images"
                variant="standard"
                defaultValue={travel.images}
                onChange={(e) => {
                  setTravel({ ...travel, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Үнэ"
                name="price"
                variant="standard"
                defaultValue={travel.price}
                onChange={(e) => {
                  setTravel({ ...travel, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="байршил"
                name="location"
                variant="standard"
                defaultValue={travel.location}
                onChange={(e) => {
                  setTravel({ ...travel, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Өдөр"
                name="day"
                variant="standard"
                defaultValue={travel.day}
                onChange={(e) => {
                  setTravel({ ...travel, [e.target.name]: e.target.value });
                }}
              />
            </Box>
            <Button onClick={updateTravel}>Save</Button>
          </Box>
        ) : (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              New Travel
            </Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '40ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Нэр"
                name="title"
                variant="standard"
                onChange={(e) => {
                  setTravel({ ...travel, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Дэлгэрэнгүй"
                name="detail"
                variant="standard"
                onChange={(e) => {
                  setTravel({ ...travel, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Зураг"
                name="images"
                variant="standard"
                onChange={(e) => {
                  setTravel({ ...travel, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Үнэ"
                name="price"
                variant="standard"
                onChange={(e) => {
                  setTravel({ ...travel, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="байршил"
                name="location"
                variant="standard"
                onChange={(e) => {
                  setTravel({ ...travel, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Өдөр"
                name="day"
                variant="standard"
                onChange={(e) => {
                  setTravel({ ...travel, [e.target.name]: e.target.value });
                }}
              />
            </Box>
            <Button onClick={createTravel}>Save</Button>
          </Box>
        )}
      </Modal>
    </div>
  );
}
