import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config/config';
import url from '../config/url';

const name = 'cricket/';
const cricket = {};

// get all book
cricket.getScrores = createAsyncThunk(`${name}getScrores`, async () => {
    const res = await axios.get(url.getScrores, config.simpleHeader);
    return res;
});
// get book details
cricket.getDetails = createAsyncThunk(`${name}getDetails`, async (id) => {
    const res = await axios.get(`${url.getDetails}/${id}`, config.simpleHeader);
    return res;
});

export default cricket;