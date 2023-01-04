import './Profile.css'
import Axios from 'axios'
import {useEffect, useState} from 'react'
const url="https://randomuser.me/api/";
const Profile=()=>{
    const [result,setResult]=useState(null);
    const apiRequest=async ()=>{
        if(!result){
            const apiResult=await Axios.get(url);
            setResult(apiResult.data.results[0]);
            console.log(result);
        }
    }
    useEffect(()=>{
        apiRequest()
    })
    return(<div className='container'>
        <section className='left'>
            <h1>Profile Picture:</h1>
            <img src={result?.picture?.large}></img>
        </section>
        <section className='right'>
            <div className='name-details'>
                <h1>Name:</h1>
                <h2 className="names">{result?.name?.title}</h2>
                <h2 className="names">{result?.name?.first}</h2>
                <h2 className="names">{result?.name?.last}</h2>
            </div>
            <div className='gender'>
                <h1>Gender:</h1>
                <h2 id='gender'>{result?.gender}</h2>
            </div>
            <div className='AGE-DETAILS'>
                <h1>Age:</h1>
                <h2 id='age'>{result?.dob?.age}</h2>
            </div>
            <div className='EMAIL-DETAILS'>
                <h1>EMAIL:</h1>
                <h2 id='email'>{result?.email}</h2>
            </div>
        </section>

    </div>);
}
export default Profile;
