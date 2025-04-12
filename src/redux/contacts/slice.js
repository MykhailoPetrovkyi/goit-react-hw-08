import { logout } from '../auth/operations'
import { fetchContacts, addContact, deleteContact, updateContact } from './operations'
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  items: [],
  loading: false,
  error: null,
}

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.items = action.payload
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.items.push(action.payload)
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        const index = state.items.findIndex((contact) => contact.id === action.payload.id)
        state.items.splice(index, 1)
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateContact.pending, (state) => {
        state.loading = true
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        const updatedContact = action.payload
        const index = state.items.findIndex((contact) => contact.id === updatedContact.id)
        if (index !== -1) {
          state.items[index] = updatedContact
        }
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = []
        state.loading = false
        state.error = null
      }),
})

export default slice.reducer
