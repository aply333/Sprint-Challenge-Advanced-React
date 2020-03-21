import { useFetch } from "./useFetch";
import { useState, useEffect } from "react";

test("Fetch test", async ()=>{
    const api = "http://localhost:5000/api/players";
    const [expected, setExpected] = useState([])
    const ourHook = useFetch ("http://localhost:5000/api/players", "this is a test")
    const apiGather = () => {
        fetch(api)
        .then(data => setExpected(data))
    }
    useEffect(apiGather,[]);
    expect(expected).toBeTruthy(ourHook)
})