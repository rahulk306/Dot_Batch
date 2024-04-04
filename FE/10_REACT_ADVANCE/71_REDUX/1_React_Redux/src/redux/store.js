// using configureStore function, we create redux global store.

import {configureStore} from "@reduxjs/toolkit"
import CounterSlice from "./slices/CounterSlice"

// inside reducer we store key:value pair ->key is the name of the slice created : value if the reducer of the corresponding key or slice. 
// here all slices:reducers are stored.
// hence it is the global store of all slices.

export const store = configureStore({
    reducer:{
        counter: CounterSlice
    },
})