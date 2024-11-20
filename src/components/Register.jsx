import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createNewUser,setUser,updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleRegister=e=>{
        e.preventDefault();
        const name= e.target.name.value;
        const email = e.target.email.value;
        const photo =e.target.photo.value;
        const password =e.target.password.value;
        console.log(name,email,password,photo);
        createNewUser(email,password)
        .then(result=>{
            // const user=result.user;
            setUser(result.user);
            // console.log(user);
            updateUserProfile({
                photoURL: photo,
                displayName: name
            })
            .then (()=>{
                navigate('/')
            }).catch(error=>{
                console.log(error)
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
        })
    }
    return (
        <div className="card bg-base-100 flex justify-center items-center">
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p>Alredy have an account? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;