import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    books: null
}

export const getBooks = createAsyncThunk('bookList/getBooks', async (_, { thunkAPI }) => {
    try {
        const res = await fetch('http://localhost:3001/books')
        const data = await res.json()
        return data

        // const res = await fetch('http://localhost:3001/books').then(response => {
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok: ' + response.statusText);
        //     }
        //     return response.json();
        // })
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.error('There was a problem with the fetch operation:', error);
        //     });
    } catch (error) {
        console.error("error:", error);

    }
})

const BookSlice = createSlice({
    name: 'bookList',
    initialState,
    reducers: {},
    extraReducers: {
        [getBooks.pending]: (state, action) => {
            console.log("action", action);
        },
        [getBooks.fulfilled]: (state, action) => {
            console.log("action", action);
        },
        [getBooks.rejected]: (state, action) => {
            console.log("action", action);
        },
    }
})


export default BookSlice.reducer